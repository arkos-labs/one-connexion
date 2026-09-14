"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useQueryParam } from "@/lib/use-query-state";
import { AlertTriangle, ArrowRight, Clock, Search, Send, Truck, Users, X, Zap } from "lucide-react";

type Course = {
  key: string;
  id: string;
  type: "commande" | "navette";
  label: string;
  clientId: string | null;
  clientName: string;
  pickup: string;
  dropoff: string;
  status: string;
  price: number | null;
  createdAt: string;
  driverId: string | null;
  updateDriver: (driverId: string | null) => Promise<void>;
  updateStatus?: (status: string) => Promise<void>;
};

type Driver = {
  id: string;
  name: string;
  phone: string | null;
  vehicle: string | null;
  status: "disponible" | "en_course" | "hors_service";
};

const ORDER_STATUSES = ["en_attente", "confirmee", "en_cours", "livree", "annulee"];

// Correspond aux ids stockés dans navettes.days_of_week (cf. app/dashboard/navettes/page.tsx).
const WEEKDAY_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const todayId = () => WEEKDAY_IDS[new Date().getDay()];
const todayDateStr = () => new Date().toISOString().slice(0, 10);

const STATUS_LABEL: Record<Driver["status"], string> = {
  disponible: "Disponible",
  en_course: "En course",
  hors_service: "Hors service",
};

function initialsOf(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function AdminCoursesPage() {
  return (
    <Suspense fallback={null}>
      <AdminCoursesPageInner />
    </Suspense>
  );
}

function AdminCoursesPageInner() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const clientFilter = searchParams.get("client");
  const clientFilterName = searchParams.get("name");
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [filter, setFilter] = useQueryParam("filter", "all");
  const [search, setSearch] = useQueryParam("q", "");
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [selection, setSelection] = useState<Record<string, string>>({});
  const [sending, setSending] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [{ data: driversData }, { data: orders }, { data: navettes }] = await Promise.all([
      supabase.from("drivers").select("id, name, phone, vehicle, status").order("name"),
      supabase
        .from("orders")
        .select("id, pickup_address, dropoff_address, status, driver_id, tracking_code, price_estimate, created_at, user_id")
        .neq("status", "annulee")
        .order("created_at", { ascending: false }),
      supabase
        .from("navettes")
        .select("id, name, pickup_address, dropoff_address, status, driver_id, last_dispatch_date, days_of_week, created_at, user_id")
        .eq("status", "active")
        .contains("days_of_week", [todayId()]),
    ]);

    setDrivers((driversData ?? []) as Driver[]);

    const orderRows = orders ?? [];
    const userIds = [...new Set(orderRows.map((o) => o.user_id).filter(Boolean))];
    const { data: profiles } = userIds.length
      ? await supabase.from("profiles").select("id, full_name, company").in("id", userIds)
      : { data: [] as { id: string; full_name: string | null; company: string | null }[] };
    const profileById = new Map((profiles ?? []).map((p) => [p.id, p]));

    const orderCourses: Course[] = orderRows.map((o) => ({
      key: `order-${o.id}`,
      id: o.id,
      type: "commande",
      label: o.tracking_code ?? o.id.slice(0, 8),
      clientId: o.user_id,
      clientName: (o.user_id && (profileById.get(o.user_id)?.company || profileById.get(o.user_id)?.full_name)) || "Client particulier",
      pickup: o.pickup_address,
      dropoff: o.dropoff_address,
      status: o.status,
      price: o.price_estimate,
      createdAt: o.created_at,
      driverId: o.driver_id,
      updateDriver: async (driverId) => {
        await supabase.from("orders").update({ driver_id: driverId }).eq("id", o.id);
        load();
      },
      updateStatus: async (status) => {
        await supabase.from("orders").update({ status }).eq("id", o.id);
        load();
      },
    }));

    // Une navette récurrente n'est considérée "dispatchée" que pour le jour où
    // son chauffeur a été confirmé (last_dispatch_date) : à la prochaine
    // occurrence programmée, elle redevient "à dispatcher" même si driver_id
    // est resté renseigné depuis la dernière fois.
    const today = todayDateStr();
    const navetteCourses: Course[] = (navettes ?? []).map((n) => {
      const confirmedToday = n.driver_id && n.last_dispatch_date === today;
      return {
        key: `navette-${n.id}`,
        id: n.id,
        type: "navette",
        label: n.name,
        clientId: n.user_id,
        clientName: "Navette récurrente",
        pickup: n.pickup_address,
        dropoff: n.dropoff_address,
        status: n.status,
        price: null,
        createdAt: n.created_at,
        driverId: confirmedToday ? n.driver_id : null,
        updateDriver: async (driverId) => {
          await supabase.from("navettes").update({ driver_id: driverId, last_dispatch_date: driverId ? today : null }).eq("id", n.id);
          load();
        },
      };
    });

    setCourses([...orderCourses, ...navetteCourses]);
    setLastRefresh(new Date());
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  const pendingCount = courses.filter((c) => !c.driverId).length;
  const dispatchedCount = courses.filter((c) => c.driverId).length;
  const dispatchRate = courses.length ? Math.round((dispatchedCount / courses.length) * 100) : 0;
  const driversDispo = drivers.filter((d) => d.status === "disponible");
  const driversOnDuty = drivers.filter((d) => d.status !== "hors_service");

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return courses.filter((c) => {
      if (clientFilter && c.clientId !== clientFilter) return false;
      if (filter === "dispatched" && !c.driverId) return false;
      if (filter === "pending" && c.driverId) return false;
      if (!q) return true;
      return (
        c.label.toLowerCase().includes(q) ||
        c.clientName.toLowerCase().includes(q) ||
        c.pickup.toLowerCase().includes(q) ||
        c.dropoff.toLowerCase().includes(q)
      );
    });
  }, [courses, filter, search, clientFilter]);

  const firstPending = courses.find((c) => !c.driverId) ?? null;

  const quickAssign = (driverId: string) => {
    if (!firstPending) return;
    firstPending.updateDriver(driverId);
  };

  const sendToDriver = async (c: Course) => {
    const driverId = selection[c.key];
    if (!driverId) return;
    setSending(c.key);
    await c.updateDriver(driverId);
    setSelection((prev) => {
      const next = { ...prev };
      delete next[c.key];
      return next;
    });
    setSending(null);
  };

  const removeFromDriver = async (c: Course) => {
    setSending(c.key);
    await c.updateDriver(null);
    setSending(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-label uppercase">
              Courses &amp; dispatch · Attribution en direct
            </span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink">Courses &amp; dispatch</h1>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 self-start rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-semibold text-muted transition-colors hover:border-ink/20 hover:text-ink"
        >
          <Clock size={15} />
          {lastRefresh ? `Actualisé à ${new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(lastRefresh)}` : "Mise à jour en temps réel"}
        </button>
      </div>

      {pendingCount > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <AlertTriangle size={17} className="text-amber-700" strokeWidth={2.25} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900">
                {pendingCount} course{pendingCount > 1 ? "s" : ""} requi{pendingCount > 1 ? "èrent" : "ert"} une affectation
              </div>
              <div className="text-[12.5px] font-medium text-amber-700">Aucun chauffeur confirmé sur ces missions pour l&apos;instant.</div>
            </div>
          </div>
        </div>
      )}

      {clientFilter && (
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-4">
          <span className="text-[13px] font-semibold text-ink">
            Filtré sur le client <span className="text-accent">{clientFilterName || clientFilter}</span> — {visible.length} course{visible.length > 1 ? "s" : ""}
          </span>
          <Link href="/admin/courses" className="rounded-lg border border-line px-3 py-1.5 text-[12.5px] font-bold text-muted transition-colors hover:text-ink">
            Voir toutes les courses
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Clock} label="En attente" value={String(pendingCount)} sub={pendingCount > 0 ? "Priorité haute requise" : "Tout est dispatché"} accent={pendingCount > 0} />
        <StatCard icon={Users} label="Chauffeurs dispo" value={String(driversDispo.length)} sub={driversDispo[0]?.name} />
        <StatCard icon={Zap} label="Taux d'attribution" value={`${dispatchRate}%`} sub={`${dispatchedCount}/${courses.length || 0} dispatchées`} />
        <StatCard icon={Truck} label="Courses & navettes" value={String(courses.length)} sub="Créneau en cours" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {([
            ["all", "Toutes", courses.length],
            ["pending", "À dispatcher", pendingCount],
            ["dispatched", "Dispatchées", dispatchedCount],
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
            placeholder="Rechercher code, adresse, client…"
            className="w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-4 text-[13px] font-medium text-ink placeholder:text-label sm:w-[260px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.7fr_1fr]">
        <div className="flex flex-col gap-4">
          {visible.map((c) => (
            <div key={c.key} className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${c.type === "navette" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                    {c.type === "navette" ? "Navette" : "Course"}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-ink">{c.label}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${c.driverId ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                    {c.driverId ? "Dispatchée" : "À dispatcher"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <span className="text-[12.5px] font-semibold text-muted">
                    {new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(new Date(c.createdAt))}
                  </span>
                  {c.price !== null && <span className="text-[15px] font-bold text-ink">{c.price.toFixed(2)} €</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[13px] text-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    {c.pickup}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    {c.dropoff}
                  </div>
                </div>
                <div className="rounded-xl bg-paper px-4 py-2.5 text-[12.5px] font-semibold text-ink sm:text-right">
                  {c.clientName}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4">
                {c.type === "commande" && c.updateStatus && (
                  <select
                    value={c.status}
                    onChange={(e) => c.updateStatus?.(e.target.value)}
                    className="rounded-lg border border-line px-3 py-2 text-[13px] font-medium text-ink"
                  >
                    {ORDER_STATUSES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                )}
                {c.driverId ? (
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-[13px] font-bold text-green-700">
                      Assignée à {drivers.find((d) => d.id === c.driverId)?.name ?? "chauffeur"}
                    </span>
                    <button
                      onClick={() => removeFromDriver(c)}
                      disabled={sending === c.key}
                      className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-[13px] font-bold text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                    >
                      <X size={14} />
                      Retirer la course
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <select
                      value={selection[c.key] ?? ""}
                      onChange={(e) => setSelection((prev) => ({ ...prev, [c.key]: e.target.value }))}
                      className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] font-medium text-amber-800"
                    >
                      <option value="">Choisir un chauffeur…</option>
                      {drivers.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}{d.vehicle ? ` (${d.vehicle})` : ""}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => sendToDriver(c)}
                      disabled={!selection[c.key] || sending === c.key}
                      className="flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Send size={14} />
                      Envoyer au chauffeur
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center text-[13px] font-medium text-muted">
              Aucune course dans ce filtre.
            </div>
          )}
        </div>

        {/* Colonne latérale */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between gap-3 border-b border-line p-5">
              <div>
                <h2 className="text-[15px] font-bold text-ink">Chauffeurs en service</h2>
                <p className="mt-0.5 text-[12.5px] font-medium text-muted">Disponibilité du personnel.</p>
              </div>
              <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700">
                {driversDispo.length} en ligne
              </span>
            </div>

            <div className="flex flex-col divide-y divide-line">
              {driversOnDuty.length === 0 && (
                <div className="p-6 text-center text-[13px] font-medium text-muted">Aucun chauffeur en service.</div>
              )}
              {driversOnDuty.slice(0, 4).map((d) => (
                <div key={d.id} className="flex flex-col gap-3 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">
                      {initialsOf(d.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate font-bold text-ink">{d.name}</span>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            d.status === "disponible" ? "bg-green-50 text-green-700" : d.status === "en_course" ? "bg-accent/10 text-accent" : "bg-paper text-muted"
                          }`}
                        >
                          {STATUS_LABEL[d.status]}
                        </span>
                      </div>
                      <div className="truncate text-[12px] text-muted">{d.vehicle || "Véhicule non renseigné"}</div>
                      {courses.filter((c) => c.driverId === d.id).length > 0 && (
                        <div className="truncate text-[11.5px] font-semibold text-blue-700">
                          {courses.filter((c) => c.driverId === d.id).length} course{courses.filter((c) => c.driverId === d.id).length > 1 ? "s" : ""} sur son app
                        </div>
                      )}
                    </div>
                  </div>
                  {d.status !== "hors_service" && firstPending && (
                    <button
                      onClick={() => quickAssign(d.id)}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-ink px-3 py-2 text-[12px] font-bold text-white transition-colors hover:bg-ink/85"
                    >
                      Assigner direct à {firstPending.label}
                      <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4">
              <a href="/admin/chauffeurs" className="flex w-full items-center justify-center rounded-xl bg-paper px-4 py-3 text-[13px] font-bold text-ink transition-colors hover:bg-line/60">
                Gérer l&apos;annuaire chauffeurs
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h3 className="text-[13px] font-bold text-ink">Repères de dispatch</h3>
            <ul className="mt-3 flex flex-col gap-2.5 text-[12.5px] font-medium text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Priorisez le chauffeur le plus proche du point de prise en charge.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Vérifiez le véhicule renseigné avant de valider une affectation.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Passez la course en &quot;confirmée&quot; dès qu&apos;un chauffeur est assigné.
              </li>
            </ul>
          </div>
        </div>
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
