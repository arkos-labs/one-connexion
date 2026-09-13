"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Truck, Search, MapPin, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { PageHeader } from "@/components/dashboard/PageHeader";

export default function SuiviPage() {
  const router = useRouter();
  const supabase = createClient();

  const [deliveries, setDeliveries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from("orders")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Erreur de chargement des courses:", error);
          setDeliveries([]);
        } else {
          setDeliveries(data || []);
        }
      } catch (err) {
        console.error("Erreur:", err);
        setDeliveries([]);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const filteredDeliveries = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return deliveries;
    return deliveries.filter((d) =>
      d.tracking_code?.toLowerCase().includes(q) ||
      d.pickup_address?.toLowerCase().includes(q) ||
      d.dropoff_address?.toLowerCase().includes(q)
    );
  }, [deliveries, search]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const time = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    if (date.toDateString() === today.toDateString()) {
      return `Aujourd'hui, ${time}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Hier, ${time}`;
    } else {
      return `${date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}, ${time}`;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "en_cours":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
            <Truck size={12} /> En cours
          </span>
        );
      case "livree":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
            <CheckCircle2 size={12} /> Livré
          </span>
        );
      case "annulee":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
            <AlertCircle size={12} /> Annulé
          </span>
        );
      case "confirmee":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
            <CheckCircle2 size={12} /> Confirmée
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-700">
            <Clock size={12} /> En attente
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      <PageHeader
        icon={Truck}
        eyebrow="Suivi en temps réel"
        title={<>Suivre vos <span className="text-accent">livraisons</span>.</>}
        subtitle="Consultez l'historique et le statut de toutes vos courses."
        action={
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={16} className="text-label" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="N° de course, adresse..."
              className="w-full rounded-xl border border-line bg-white py-2.5 pl-9 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-64"
            />
          </div>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="text-muted">Chargement de vos courses...</div>
          </div>
        ) : filteredDeliveries.length === 0 ? (
          <div className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center">
            <Truck size={40} className="mb-4 text-muted opacity-50" />
            <h3 className="mb-2 text-lg font-semibold text-ink">
              {deliveries.length === 0 ? "Aucune course pour le moment" : "Aucun résultat"}
            </h3>
            <p className="text-sm text-muted">
              {deliveries.length === 0
                ? "Vos courses apparaîtront ici une fois commandées."
                : "Essayez une autre recherche."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-ink">
              <thead className="border-b border-line bg-paper-card text-xs font-bold uppercase text-muted">
                <tr>
                  <th scope="col" className="px-6 py-4">N° Course</th>
                  <th scope="col" className="px-6 py-4">Date</th>
                  <th scope="col" className="px-6 py-4">Itinéraire</th>
                  <th scope="col" className="px-6 py-4">Statut</th>
                  <th scope="col" className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filteredDeliveries.map((delivery) => (
                  <tr
                    key={delivery.id}
                    onClick={() => router.push(`/dashboard/suivi/${delivery.id}`)}
                    className="cursor-pointer transition-colors hover:bg-gray-50/50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-bold">{delivery.tracking_code}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-muted">{formatDate(delivery.created_at)}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                          {delivery.pickup_address}
                        </div>
                        <div className="ml-0.5 h-2 w-px border-l border-dashed border-line"></div>
                        <div className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                          {delivery.dropoff_address}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {getStatusBadge(delivery.status)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <span className="text-sm font-semibold text-accent hover:text-accent-dark hover:underline">
                        Détails
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
