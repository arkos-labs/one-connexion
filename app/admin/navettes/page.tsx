"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Navette = {
  id: string;
  name: string;
  pickup_address: string;
  dropoff_address: string;
  days_str: string | null;
  status: string;
  estimated_price: number | null;
};

export default function AdminNavettesPage() {
  const supabase = createClient();
  const [navettes, setNavettes] = useState<Navette[]>([]);

  const load = async () => {
    const { data } = await supabase
      .from("navettes")
      .select("id, name, pickup_address, dropoff_address, days_str, status, estimated_price")
      .order("created_at", { ascending: false });
    setNavettes(data ?? []);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load handles initial fetch
    load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleStatus = async (id: string, current: string) => {
    await supabase.from("navettes").update({ status: current === "active" ? "inactive" : "active" }).eq("id", id);
    load();
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-ink">Navettes récurrentes</h1>
      <p className="text-sm text-muted">
        Gestion des modèles de navettes. Pour dispatcher une navette active à
        un chauffeur, utilisez <a className="text-accent underline" href="/admin/courses">Courses & dispatch</a>.
      </p>

      <div className="flex flex-col gap-3">
        {navettes.map((n) => (
          <div key={n.id} className="flex flex-col justify-between gap-3 rounded-2xl border border-line bg-white p-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-bold text-ink">{n.name}</div>
              <div className="text-xs text-muted">{n.pickup_address} → {n.dropoff_address}</div>
              <div className="text-xs text-muted">{n.days_str} · {n.estimated_price ?? 0} €</div>
            </div>
            <button
              onClick={() => toggleStatus(n.id, n.status)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold ${n.status === "active" ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500"}`}
            >
              {n.status === "active" ? "Active" : "Inactive"}
            </button>
          </div>
        ))}
        {navettes.length === 0 && <p className="text-sm text-muted">Aucune navette pour l&apos;instant.</p>}
      </div>
    </div>
  );
}
