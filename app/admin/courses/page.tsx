"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Course = {
  key: string;
  type: "commande" | "navette";
  label: string;
  route: string;
  status: string;
  driverId: string | null;
  updateDriver: (driverId: string | null) => Promise<void>;
};

type Driver = { id: string; name: string; status: string };

const ORDER_STATUSES = ["en_attente", "confirmee", "en_cours", "livree", "annulee"];

export default function AdminCoursesPage() {
  const supabase = createClient();
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [filter, setFilter] = useState<"all" | "dispatched" | "pending">("all");

  const load = async () => {
    const [{ data: driversData }, { data: orders }, { data: navettes }] = await Promise.all([
      supabase.from("drivers").select("id, name, status").order("name"),
      supabase.from("orders").select("id, pickup_address, dropoff_address, status, driver_id, tracking_code").order("created_at", { ascending: false }),
      supabase.from("navettes").select("id, name, pickup_address, dropoff_address, status, driver_id").eq("status", "active"),
    ]);

    setDrivers(driversData ?? []);

    const orderCourses: Course[] = (orders ?? []).map((o) => ({
      key: `order-${o.id}`,
      type: "commande",
      label: o.tracking_code ?? o.id,
      route: `${o.pickup_address} → ${o.dropoff_address}`,
      status: o.status,
      driverId: o.driver_id,
      updateDriver: async (driverId) => {
        await supabase.from("orders").update({ driver_id: driverId }).eq("id", o.id);
        load();
      },
    }));

    const navetteCourses: Course[] = (navettes ?? []).map((n) => ({
      key: `navette-${n.id}`,
      type: "navette",
      label: n.name,
      route: `${n.pickup_address} → ${n.dropoff_address}`,
      status: n.status,
      driverId: n.driver_id,
      updateDriver: async (driverId) => {
        await supabase.from("navettes").update({ driver_id: driverId }).eq("id", n.id);
        load();
      },
    }));

    setCourses([...orderCourses, ...navetteCourses]);
  };

  useEffect(() => {
    load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateOrderStatus = async (id: string, status: string) => {
    await supabase.from("orders").update({ status }).eq("id", id);
    load();
  };

  const visible = courses.filter((c) => {
    if (filter === "dispatched") return !!c.driverId;
    if (filter === "pending") return !c.driverId;
    return true;
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-ink">Courses & dispatch</h1>

      <div className="flex gap-2">
        {(["all", "pending", "dispatched"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold ${filter === f ? "bg-accent text-white" : "bg-white text-muted border border-line"}`}
          >
            {f === "all" ? "Toutes" : f === "pending" ? "À dispatcher" : "Dispatchées"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {visible.map((c) => (
          <div key={c.key} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${c.type === "navette" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                  {c.type === "navette" ? "Navette" : "Course"}
                </span>
                <span className="font-bold text-ink">{c.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${c.driverId ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                  {c.driverId ? "Dispatchée" : "À dispatcher"}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted">{c.route}</div>
            </div>
            <div className="flex items-center gap-2">
              {c.type === "commande" && (
                <select value={c.status} onChange={(e) => updateOrderStatus(c.key.replace("order-", ""), e.target.value)} className="rounded-lg border border-line px-3 py-2 text-sm">
                  {ORDER_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              )}
              <select
                value={c.driverId ?? ""}
                onChange={(e) => c.updateDriver(e.target.value || null)}
                className="rounded-lg border border-line px-3 py-2 text-sm"
              >
                <option value="">Non assigné</option>
                {drivers.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
        {visible.length === 0 && <p className="text-sm text-muted">Aucune course dans ce filtre.</p>}
      </div>
    </div>
  );
}
