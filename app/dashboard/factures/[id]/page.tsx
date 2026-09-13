"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, FileText, CheckCircle2, Clock, RefreshCw, MapPin } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const STATUS_LABELS: Record<string, string> = {
  en_attente: "En attente",
  confirmee: "Confirmée",
  en_cours: "En cours",
  livree: "Livrée",
  annulee: "Annulée",
};

export default function FactureDetailsPage() {
  const params = useParams<{ id: string }>();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  // rawId ressemble à "FA-2026-09" -> on récupère l'année et le mois
  const periodKey = rawId?.replace(/^FA-/, "") || "";
  const [year, month] = periodKey.split("-").map(Number);

  const supabase = createClient();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      if (!year || !month) {
        setError("Période invalide");
        setLoading(false);
        return;
      }

      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setError("Non authentifié");
          setLoading(false);
          return;
        }

        const startOfMonth = new Date(year, month - 1, 1);
        const startOfNextMonth = new Date(year, month, 1);

        const { data, error: err } = await supabase
          .from("orders")
          .select("*")
          .eq("user_id", user.id)
          .neq("status", "annulee")
          .gte("created_at", startOfMonth.toISOString())
          .lt("created_at", startOfNextMonth.toISOString())
          .order("created_at", { ascending: false });

        if (err) {
          setError("Impossible de charger le relevé");
        } else if (!data || data.length === 0) {
          setError("Aucune course sur cette période");
        } else {
          setOrders(data);
        }
      } catch (err) {
        setError("Erreur de chargement");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, [periodKey]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="text-muted">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/factures" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
          <ArrowLeft size={16} />
          Retour aux factures
        </Link>
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const now = new Date();
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth() + 1;
  const monthLabel = new Date(year, month - 1, 1).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  const totalHT = orders.reduce((sum, o) => sum + (o.price_estimate ? Number(o.price_estimate) : 0), 0);
  const totalTVA = totalHT * 0.2;
  const totalTTC = totalHT + totalTVA;

  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/factures" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
          <ArrowLeft size={16} />
          Retour aux factures
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold tracking-tight text-ink capitalize">
              Relevé de <span className="text-accent">{monthLabel}</span>
            </h1>
            <p className="mt-1 text-sm text-muted">
              {orders.length} course{orders.length > 1 ? "s" : ""} sur cette période
            </p>
          </div>

          {isCurrentMonth ? (
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
              <RefreshCw size={12} /> En cours — s'incrémente à chaque nouvelle course
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
              <Clock size={12} /> À régler
            </span>
          )}
        </div>
      </div>

      {/* Détail des courses */}
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
          Détail des courses facturées
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-line bg-paper-card text-xs font-bold uppercase text-muted">
              <tr>
                <th scope="col" className="px-6 py-4">N° Course</th>
                <th scope="col" className="px-6 py-4">Date</th>
                <th scope="col" className="px-6 py-4">Itinéraire</th>
                <th scope="col" className="px-6 py-4">Statut</th>
                <th scope="col" className="px-6 py-4 text-right">Montant HT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {orders.map((order) => (
                <tr key={order.id} className="transition-colors hover:bg-gray-50/50">
                  <td className="whitespace-nowrap px-6 py-4 font-bold flex items-center gap-2">
                    <FileText size={14} className="text-muted" />
                    {order.tracking_code}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-muted">
                    {new Date(order.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-green-500" />
                        <span className="truncate max-w-[220px]">{order.pickup_address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-accent" />
                        <span className="truncate max-w-[220px]">{order.dropoff_address}</span>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-muted">
                    {STATUS_LABELS[order.status] || order.status}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right font-bold">
                    {order.price_estimate ? `${Number(order.price_estimate).toFixed(2)} €` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Récapitulatif */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:max-w-sm sm:self-end">
        <h2 className="mb-4 text-sm font-bold text-ink">Récapitulatif</h2>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Total HT</span>
            <span className="font-bold text-ink">{totalHT.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">TVA (20%)</span>
            <span className="font-bold text-ink">{totalTVA.toFixed(2)} €</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-line pt-2 text-lg">
            <span className="font-bold text-ink">Total TTC</span>
            <span className="font-bold text-accent">{totalTTC.toFixed(2)} €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
