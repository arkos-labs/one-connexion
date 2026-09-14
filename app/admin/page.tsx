"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { AlertTriangle, ArrowRight, Clock, Euro, Package, Plus, Truck, Users } from "lucide-react";

type PendingItem = {
  key: string;
  id: string;
  type: "commande" | "navette";
  label: string;
  clientName: string;
  pickup: string;
  dropoff: string;
  createdAt: string;
};

type DriverRow = {
  id: string;
  name: string;
  phone: string | null;
  vehicle: string | null;
  status: "disponible" | "en_course" | "hors_service";
};

type Stats = {
  caJour: number;
  ordersFactureesJour: number;
  coursesEnCours: number;
  chauffeursDispo: number;
  chauffeursEnCourse: number;
  navettesNonDispatchees: number;
  awaitingAcceptance: number;
};

const TODAY_LABEL = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

// Correspond aux ids stockés dans navettes.days_of_week (cf. app/dashboard/navettes/page.tsx).
const WEEKDAY_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const todayId = () => WEEKDAY_IDS[new Date().getDay()];
const todayDateStr = () => new Date().toISOString().slice(0, 10);

const STATUS_LABEL: Record<DriverRow["status"], string> = {
  disponible: "Disponible",
  en_course: "En course",
  hors_service: "Hors service",
};

const STATUS_DOT: Record<DriverRow["status"], string> = {
  disponible: "bg-green-500",
  en_course: "bg-accent",
  hors_service: "bg-line",
};

function initialsOf(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function timeOf(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
}

export default function AdminOverviewPage() {
  const supabase = createClient();
  const [stats, setStats] = useState<Stats | null>(null);
  const [pending, setPending] = useState<PendingItem[]>([]);
  const [drivers, setDrivers] = useState<DriverRow[]>([]);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const load = useCallback(async () => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const [ordersToday, ordersEnCours, navettesPendingCount, ordersAwaitingCount, ordersAwaiting, navettesPending, driversData] = await Promise.all([
      supabase.from("orders").select("price_estimate, status").gte("created_at", startOfDay.toISOString()).neq("status", "annulee"),
      supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "en_cours"),
      supabase
        .from("navettes")
        .select("id", { count: "exact", head: true })
        .eq("status", "active")
        .contains("days_of_week", [todayId()])
        .or(`driver_id.is.null,last_dispatch_date.neq.${todayDateStr()}`),
      supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "en_attente"),
      supabase
        .from("orders")
        .select("id, tracking_code, pickup_address, dropoff_address, created_at, user_id")
        .eq("status", "en_attente")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("navettes")
        .select("id, name, pickup_address, dropoff_address, created_at")
        .eq("status", "active")
        .contains("days_of_week", [todayId()])
        .or(`driver_id.is.null,last_dispatch_date.neq.${todayDateStr()}`)
        .order("created_at", { ascending: false })
        .limit(5),
      supabase.from("drivers").select("id, name, phone, vehicle, status").order("name"),
    ]);

    const todayRows = ordersToday.data ?? [];
    const caJour = todayRows.reduce((sum, o) => sum + (o.price_estimate ?? 0), 0);

    const orderRows = ordersAwaiting.data ?? [];
    const userIds = [...new Set(orderRows.map((o) => o.user_id).filter(Boolean))];
    const { data: profiles } = userIds.length
      ? await supabase.from("profiles").select("id, full_name, company").in("id", userIds)
      : { data: [] as { id: string; full_name: string | null; company: string | null }[] };
    const profileById = new Map((profiles ?? []).map((p) => [p.id, p]));

    const pendingOrders: PendingItem[] = orderRows.map((o) => {
      const profile = o.user_id ? profileById.get(o.user_id) : null;
      return {
        key: `order-${o.id}`,
        id: o.id,
        type: "commande",
        label: o.tracking_code ?? o.id.slice(0, 8),
        clientName: profile?.company || profile?.full_name || "Client particulier",
        pickup: o.pickup_address,
        dropoff: o.dropoff_address,
        createdAt: o.created_at,
      };
    });

    const pendingNavettes: PendingItem[] = (navettesPending.data ?? []).map((n) => ({
      key: `navette-${n.id}`,
      type: "navette",
      label: n.name,
      clientName: "Navette récurrente",
      pickup: n.pickup_address,
      dropoff: n.dropoff_address,
      createdAt: n.created_at,
    }));

    const driverRows = driversData.data ?? [];

    setStats({
      caJour,
      ordersFactureesJour: todayRows.length,
      coursesEnCours: ordersEnCours.count ?? 0,
      chauffeursDispo: driverRows.filter((d) => d.status === "disponible").length,
      chauffeursEnCourse: driverRows.filter((d) => d.status === "en_course").length,
      navettesNonDispatchees: navettesPendingCount.count ?? pendingNavettes.length,
      awaitingAcceptance: ordersAwaitingCount.count ?? orderRows.length,
    });
    setPending(pendingOrders);
    setDrivers(driverRows as DriverRow[]);
    setLastRefresh(new Date());
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  const totalADispatcher = (stats?.awaitingAcceptance ?? 0) + (stats?.navettesNonDispatchees ?? 0);
  const driversOnDuty = drivers.filter((d) => d.status !== "hors_service");

  const acceptOrder = async (id: string) => {
    await supabase.from("orders").update({ status: "confirmee" }).eq("id", id);
    load();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-label uppercase">
              Tableau de bord · {TODAY_LABEL}
            </span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink">Vue d&apos;ensemble</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={load}
            className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-semibold text-muted transition-colors hover:border-ink/20 hover:text-ink"
          >
            <Clock size={15} />
            {lastRefresh ? `Actualisé à ${timeOf(lastRefresh.toISOString())}` : "Mise à jour en temps réel"}
          </button>
          <Link
            href="/admin/courses"
            className="flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-ink/85"
          >
            <Plus size={15} />
            Nouvelle course
          </Link>
        </div>
      </div>

      {totalADispatcher > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <AlertTriangle size={17} className="text-amber-700" strokeWidth={2.25} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-amber-900">
                {totalADispatcher} élément{totalADispatcher > 1 ? "s" : ""} nécessite{totalADispatcher > 1 ? "nt" : ""} une action
              </div>
              <div className="text-[12.5px] font-medium text-amber-700">
                {stats?.awaitingAcceptance ? `${stats.awaitingAcceptance} course${stats.awaitingAcceptance > 1 ? "s" : ""} à accepter ci-dessous` : ""}
                {stats?.awaitingAcceptance && stats?.navettesNonDispatchees ? " · " : ""}
                {stats?.navettesNonDispatchees ? `${stats.navettesNonDispatchees} navette${stats.navettesNonDispatchees > 1 ? "s" : ""} à dispatcher` : ""}
              </div>
            </div>
          </div>
          {(stats?.navettesNonDispatchees ?? 0) > 0 && (
            <Link
              href="/admin/courses"
              className="flex shrink-0 items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-accent-dark"
            >
              Ouvrir le dispatch
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Euro}
          label="CA du jour"
          value={stats ? `${stats.caJour.toFixed(2)} €` : "…"}
          sub={stats ? `${stats.ordersFactureesJour} commande${stats.ordersFactureesJour > 1 ? "s" : ""} facturée${stats.ordersFactureesJour > 1 ? "s" : ""}` : undefined}
        />
        <StatCard
          icon={Truck}
          label="Courses en cours"
          value={stats ? String(stats.coursesEnCours) : "…"}
          sub={stats && stats.coursesEnCours === 0 ? "Flotte inactive actuellement" : "En circulation"}
        />
        <StatCard
          icon={Users}
          label="Chauffeurs disponibles"
          value={stats ? String(stats.chauffeursDispo) : "…"}
          sub={stats ? `${stats.chauffeursDispo + stats.chauffeursEnCourse} chauffeur${stats.chauffeursDispo + stats.chauffeursEnCourse > 1 ? "s" : ""} en ligne` : undefined}
        />
        <StatCard
          icon={Package}
          label="À traiter"
          value={stats ? String(totalADispatcher) : "…"}
          sub={totalADispatcher > 0 ? "Acceptation + dispatch navettes" : "Rien à traiter"}
          accent={totalADispatcher > 0}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        {/* Courses en attente */}
        <div className="flex flex-col rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between gap-3 border-b border-line p-5">
            <div>
              <h2 className="text-[15px] font-bold text-ink">Courses en attente d&apos;acceptation</h2>
              <p className="mt-0.5 text-[12.5px] font-medium text-muted">Demandes clients pas encore confirmées par le dispatch.</p>
            </div>
            <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700">
              {stats?.awaitingAcceptance ?? 0} en attente
            </span>
          </div>

          <div className="flex flex-col divide-y divide-line">
            {pending.length === 0 && (
              <div className="p-6 text-center text-[13px] font-medium text-muted">Aucune course en attente d&apos;acceptation.</div>
            )}
            {pending.map((item, i) => (
              <div key={item.key} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-[11px] font-bold text-muted">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-ink">{item.clientName}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${item.type === "navette" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                        {item.type === "navette" ? "Navette" : item.label}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-[12.5px] text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      {item.pickup}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1.5 text-[12.5px] text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {item.dropoff}
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3 pl-11 sm:pl-0">
                  <span className="text-[12.5px] font-semibold text-muted">{timeOf(item.createdAt)}</span>
                  <button
                    onClick={() => acceptOrder(item.id)}
                    className="flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-[12.5px] font-bold text-white transition-colors hover:bg-ink/85"
                  >
                    Accepter
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line p-4">
            <span className="text-[12.5px] font-medium text-muted">
              {stats?.navettesNonDispatchees ?? 0} navette{(stats?.navettesNonDispatchees ?? 0) > 1 ? "s" : ""} ponctuelle{(stats?.navettesNonDispatchees ?? 0) > 1 ? "s" : ""} sans affectation
            </span>
            <Link href="/admin/courses" className="flex items-center gap-1 text-[12.5px] font-bold text-accent hover:text-accent-dark">
              Ouvrir le module Dispatch
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Chauffeurs en service */}
        <div className="flex flex-col rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between gap-3 border-b border-line p-5">
            <div>
              <h2 className="text-[15px] font-bold text-ink">Chauffeurs en service</h2>
              <p className="mt-0.5 text-[12.5px] font-medium text-muted">Disponibilité du personnel.</p>
            </div>
            <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700">
              {stats?.chauffeursDispo ?? 0} en ligne
            </span>
          </div>

          <div className="flex flex-col divide-y divide-line">
            {driversOnDuty.length === 0 && (
              <div className="p-6 text-center text-[13px] font-medium text-muted">Aucun chauffeur en service.</div>
            )}
            {driversOnDuty.slice(0, 4).map((d) => (
              <div key={d.id} className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">
                    {initialsOf(d.name)}
                    <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${STATUS_DOT[d.status]}`} />
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4">
            <Link
              href="/admin/chauffeurs"
              className="flex w-full items-center justify-center rounded-xl bg-paper px-4 py-3 text-[13px] font-bold text-ink transition-colors hover:bg-line/60"
            >
              Gérer l&apos;annuaire chauffeurs
            </Link>
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
          {accent ? <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> : <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line" />}
          {sub}
        </div>
      )}
    </div>
  );
}
