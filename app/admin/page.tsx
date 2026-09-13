"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Stats = {
  caJour: number;
  coursesEnCours: number;
  chauffeursDispo: number;
  nonDispatchees: number;
};

export default function AdminOverviewPage() {
  const supabase = createClient();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const load = async () => {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const [ordersToday, ordersEnCours, ordersNonDispatchees, driversDispo] = await Promise.all([
        supabase.from("orders").select("price_estimate").gte("created_at", startOfDay.toISOString()).neq("status", "annulee"),
        supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "en_cours"),
        supabase.from("orders").select("id", { count: "exact", head: true }).is("driver_id", null).in("status", ["en_attente", "confirmee"]),
        supabase.from("drivers").select("id", { count: "exact", head: true }).eq("status", "disponible"),
      ]);

      const caJour = (ordersToday.data ?? []).reduce((sum, o) => sum + (o.price_estimate ?? 0), 0);

      setStats({
        caJour,
        coursesEnCours: ordersEnCours.count ?? 0,
        chauffeursDispo: driversDispo.count ?? 0,
        nonDispatchees: ordersNonDispatchees.count ?? 0,
      });
    };
    load();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-ink">Vue d&apos;ensemble</h1>

      {stats?.nonDispatchees ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-800">
          {stats.nonDispatchees} course{stats.nonDispatchees > 1 ? "s" : ""} en attente de dispatch.
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="CA du jour" value={stats ? `${stats.caJour.toFixed(2)} €` : "…"} />
        <StatCard label="Courses en cours" value={stats ? String(stats.coursesEnCours) : "…"} />
        <StatCard label="Chauffeurs disponibles" value={stats ? String(stats.chauffeursDispo) : "…"} />
        <StatCard label="À dispatcher" value={stats ? String(stats.nonDispatchees) : "…"} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="text-[12px] font-medium text-label">{label}</div>
      <div className="mt-1 text-2xl font-bold text-ink">{value}</div>
    </div>
  );
}
