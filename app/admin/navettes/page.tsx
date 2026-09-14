"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useQueryParam } from "@/lib/use-query-state";
import { Calendar, Clock, Euro, Search, ToggleLeft, ToggleRight } from "lucide-react";

type Navette = {
  id: string;
  user_id: string | null;
  name: string;
  pickup_address: string;
  dropoff_address: string;
  days_str: string | null;
  start_time: string | null;
  end_time: string | null;
  status: string;
  estimated_price: number | null;
};

function initialsOf(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "—";
}

export default function AdminNavettesPage() {
  return (
    <Suspense fallback={null}>
      <AdminNavettesPageInner />
    </Suspense>
  );
}

function AdminNavettesPageInner() {
  const supabase = createClient();
  const [navettes, setNavettes] = useState<Navette[]>([]);
  const [clients, setClients] = useState<Record<string, { full_name: string | null; company: string | null }>>({});
  const [filter, setFilter] = useQueryParam("filter", "all");
  const [search, setSearch] = useQueryParam("q", "");
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const load = useCallback(async () => {
    const [{ data }, { data: profiles }] = await Promise.all([
      supabase
        .from("navettes")
        .select("id, user_id, name, pickup_address, dropoff_address, days_str, start_time, end_time, status, estimated_price")
        .order("created_at", { ascending: false }),
      supabase.from("profiles").select("id, full_name, company"),
    ]);
    setNavettes(data ?? []);
    setClients(Object.fromEntries((profiles ?? []).map((p) => [p.id, { full_name: p.full_name, company: p.company }])));
    setLastRefresh(new Date());
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  const toggleStatus = async (id: string, current: string) => {
    await supabase.from("navettes").update({ status: current === "active" ? "inactive" : "active" }).eq("id", id);
    load();
  };

  const total = navettes.length;
  const active = navettes.filter((n) => n.status === "active");
  const inactive = navettes.filter((n) => n.status !== "active");
  const monthlyEstimate = active.reduce((sum, n) => sum + (n.estimated_price ?? 0), 0);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return navettes.filter((n) => {
      if (filter === "active" && n.status !== "active") return false;
      if (filter === "inactive" && n.status === "active") return false;
      if (!q) return true;
      const client = n.user_id ? clients[n.user_id] : null;
      return (
        n.name.toLowerCase().includes(q) ||
        n.pickup_address.toLowerCase().includes(q) ||
        n.dropoff_address.toLowerCase().includes(q) ||
        (client?.company ?? "").toLowerCase().includes(q) ||
        (client?.full_name ?? "").toLowerCase().includes(q)
      );
    });
  }, [navettes, filter, search, clients]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-label uppercase">
              Gestion de flotte · Contrats récurrents
            </span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink">Navettes récurrentes</h1>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 self-start rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-semibold text-muted transition-colors hover:border-ink/20 hover:text-ink"
        >
          <Clock size={15} />
          {lastRefresh ? `Actualisé à ${new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(lastRefresh)}` : "Mise à jour en temps réel"}
        </button>
      </div>

      <div className="rounded-2xl border border-line bg-amber-50/60 p-4 text-[12.5px] font-medium text-amber-800">
        Ceci gère les modèles de navettes (jours, adresses, statut). Pour attribuer un chauffeur à une navette du jour, direction{" "}
        <Link href="/admin/courses" className="font-bold underline hover:text-amber-900">Courses &amp; dispatch</Link>.
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Calendar} label="Total navettes" value={String(total)} sub="Tous statuts confondus" />
        <StatCard icon={ToggleRight} label="Actives" value={String(active.length)} sub={total ? `${Math.round((active.length / total) * 100)}% du parc` : undefined} accent={active.length > 0} />
        <StatCard icon={ToggleLeft} label="Inactives" value={String(inactive.length)} sub="En pause" />
        <StatCard icon={Euro} label="Estimation mensuelle" value={`${monthlyEstimate.toFixed(2)} €`} sub="Somme des navettes actives" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {([
            ["all", "Toutes", total],
            ["active", "Actives", active.length],
            ["inactive", "Inactives", inactive.length],
          ] as const).map(([key, label, count]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold transition-colors ${
                filter === key ? "bg-accent text-white" : "border border-line bg-white text-muted hover:text-ink"
              }`}
            >
              {label}
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${filter === key ? "bg-white/20" : "bg-paper"}`}>{count}</span>
            </button>
          ))}
        </div>
        <div className="relative">
          <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-label" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher navette, client, adresse…"
            className="w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-4 text-[13px] font-medium text-ink placeholder:text-label sm:w-[260px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {visible.map((n) => {
          const client = n.user_id ? clients[n.user_id] : null;
          const clientName = client?.company || client?.full_name || "Client particulier";
          return (
            <div
              key={n.id}
              className={`relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-white p-4 pl-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] before:absolute before:inset-y-0 before:left-0 before:w-1.5 sm:flex-row sm:items-center sm:justify-between ${
                n.status === "active" ? "before:bg-green-500" : "before:bg-line"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">
                  {initialsOf(clientName)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-ink">{n.name}</span>
                    {n.user_id ? (
                      <Link href={`/admin/clients/${n.user_id}`} className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent hover:bg-accent/20">
                        {clientName}
                      </Link>
                    ) : (
                      <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold text-muted">Client inconnu</span>
                    )}
                  </div>
                  <div className="mt-1 text-[12.5px] text-muted">{n.pickup_address} → {n.dropoff_address}</div>
                  <div className="mt-0.5 text-[12.5px] text-muted">
                    {n.days_str || "Jours non définis"}
                    {n.start_time && ` · ${n.start_time.slice(0, 5)}${n.end_time ? `–${n.end_time.slice(0, 5)}` : ""}`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 pl-14 sm:pl-0">
                <div className="text-right">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-label">Estimé</div>
                  <div className="text-[14px] font-bold text-ink">{(n.estimated_price ?? 0).toFixed(2)} €</div>
                </div>
                <button
                  onClick={() => toggleStatus(n.id, n.status)}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-bold transition-colors ${
                    n.status === "active" ? "bg-green-50 text-green-700 hover:bg-green-100" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {n.status === "active" ? "Active" : "Inactive"}
                </button>
              </div>
            </div>
          );
        })}
        {visible.length === 0 && (
          <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center text-[13px] font-medium text-muted">
            Aucune navette dans ce filtre.
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${accent ? "border-accent/30 bg-accent/[0.04]" : "border-line bg-white"}`}>
      <div className="flex items-center justify-between">
        <div className={`font-mono text-[11px] font-semibold tracking-[0.03em] uppercase ${accent ? "text-accent" : "text-label"}`}>{label}</div>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${accent ? "bg-accent/10 text-accent" : "bg-paper text-muted"}`}>
          <Icon size={15} strokeWidth={2.25} />
        </div>
      </div>
      <div className={`mt-2 font-mono text-[28px] font-bold leading-none tracking-[-0.02em] tabular-nums ${accent ? "text-accent" : "text-ink"}`}>
        {value}
      </div>
      {sub && (
        <div className="mt-2 flex items-center gap-1.5 text-[12px] font-medium text-muted">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
          {sub}
        </div>
      )}
    </div>
  );
}
