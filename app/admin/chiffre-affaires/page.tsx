"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Period = "jour" | "semaine" | "mois";

function periodStart(period: Period): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (period === "semaine") d.setDate(d.getDate() - d.getDay());
  if (period === "mois") d.setDate(1);
  return d;
}

export default function AdminChiffreAffairesPage() {
  const supabase = createClient();
  const [ca, setCa] = useState<Record<Period, number> | null>(null);
  const [navettesRevenue, setNavettesRevenue] = useState<number>(0);

  useEffect(() => {
    const load = async () => {
      const { data: orders } = await supabase
        .from("orders")
        .select("price_estimate, status, created_at")
        .neq("status", "annulee");

      const totals: Record<Period, number> = { jour: 0, semaine: 0, mois: 0 };
      (["jour", "semaine", "mois"] as Period[]).forEach((period) => {
        const start = periodStart(period);
        totals[period] = (orders ?? [])
          .filter((o) => new Date(o.created_at) >= start)
          .reduce((sum, o) => sum + (o.price_estimate ?? 0), 0);
      });
      setCa(totals);

      const { data: navettes } = await supabase
        .from("navettes")
        .select("estimated_price")
        .eq("status", "active");
      setNavettesRevenue((navettes ?? []).reduce((sum, n) => sum + (n.estimated_price ?? 0), 0));
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-ink">Chiffre d&apos;affaires</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Aujourd'hui" value={ca ? `${ca.jour.toFixed(2)} €` : "…"} />
        <StatCard label="Cette semaine" value={ca ? `${ca.semaine.toFixed(2)} €` : "…"} />
        <StatCard label="Ce mois" value={ca ? `${ca.mois.toFixed(2)} €` : "…"} />
      </div>
      <div className="rounded-2xl border border-line bg-white p-5">
        <div className="text-[12px] font-medium text-label">Estimation navettes actives (mensuel)</div>
        <div className="mt-1 text-2xl font-bold text-ink">{navettesRevenue.toFixed(2)} €</div>
        <p className="mt-2 text-xs text-muted">
          Somme des prix estimés des navettes actives — n&apos;inclut pas
          encore les commandes ponctuelles ci-dessus.
        </p>
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
