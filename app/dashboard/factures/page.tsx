"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, CheckCircle2, Clock, RefreshCw } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { PageHeader } from "@/components/dashboard/PageHeader";

export default function FacturesPage() {
  const supabase = createClient();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
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

        if (!error) {
          setOrders(data || []);
        }
      } catch (err) {
        console.error("Erreur de chargement des courses:", err);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Regroupe les courses (hors annulées) par mois : la facture du mois en cours
  // s'ouvre dès la première course et grossit au fil des commandes, comme un
  // compte pro classique — elle n'attend pas la livraison ni la fin du mois.
  const invoices = useMemo(() => {
    const now = new Date();
    const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

    const groups: Record<string, { monthLabel: string; courses: number; amount: number }> = {};

    orders
      .filter((o) => o.status !== "annulee")
      .forEach((o) => {
        const date = new Date(o.created_at);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
        const monthLabel = date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

        if (!groups[key]) {
          groups[key] = { monthLabel, courses: 0, amount: 0 };
        }
        groups[key].courses += 1;
        groups[key].amount += o.price_estimate ? Number(o.price_estimate) * 1.2 : 0;
      });

    return Object.entries(groups)
      .sort(([a], [b]) => (a < b ? 1 : -1))
      .map(([key, val]) => ({
        id: `FA-${key}`,
        date: val.monthLabel,
        amount: val.amount,
        courses: val.courses,
        status: key === currentKey ? "en_cours" : "en_attente",
      }));
  }, [orders]);

  const filteredInvoices = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return invoices;
    return invoices.filter((i) => i.id.toLowerCase().includes(q) || i.date.toLowerCase().includes(q));
  }, [invoices, search]);

  const pendingTotal = invoices.reduce((sum, i) => sum + i.amount, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "payee":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
            <CheckCircle2 size={12} /> Réglée
          </span>
        );
      case "en_cours":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
            <RefreshCw size={12} /> En cours
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700">
            <Clock size={12} /> À régler
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      <PageHeader
        icon={FileText}
        eyebrow="Facturation & relevés"
        title={<>Vos <span className="text-accent">factures</span>.</>}
        subtitle="Retrouvez l'historique de votre facturation mensuelle."
        action={
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={16} className="text-label" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="N° de facture, mois..."
              className="w-full rounded-xl border border-line bg-white py-2.5 pl-9 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-64"
            />
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <div className="mb-2 text-sm font-bold text-muted uppercase tracking-wider">Total à régler</div>
          <div className="text-3xl font-extrabold text-ink">
            {pendingTotal.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm md:col-span-2 flex items-center justify-between">
          <div>
            <div className="mb-2 text-sm font-bold text-muted uppercase tracking-wider">Moyen de paiement par défaut</div>
            <div className="text-sm font-bold text-muted">Aucun moyen de paiement enregistré</div>
          </div>
          <button className="text-sm font-semibold text-accent hover:text-accent-dark hover:underline">
            Ajouter
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="text-muted">Chargement de vos factures...</div>
          </div>
        ) : filteredInvoices.length === 0 ? (
          <div className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center">
            <FileText size={40} className="mb-4 text-muted opacity-50" />
            <h3 className="mb-2 text-lg font-semibold text-ink">
              {invoices.length === 0 ? "Aucune facture pour le moment" : "Aucun résultat"}
            </h3>
            <p className="text-sm text-muted">
              {invoices.length === 0
                ? "Votre relevé du mois s'ouvrira dès votre première commande."
                : "Essayez une autre recherche."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-ink">
              <thead className="border-b border-line bg-paper-card text-xs font-bold uppercase text-muted">
                <tr>
                  <th scope="col" className="px-6 py-4">N° Facture</th>
                  <th scope="col" className="px-6 py-4">Période</th>
                  <th scope="col" className="px-6 py-4">Volume</th>
                  <th scope="col" className="px-6 py-4">Montant TTC</th>
                  <th scope="col" className="px-6 py-4">Statut</th>
                  <th scope="col" className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filteredInvoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    onClick={() => router.push(`/dashboard/factures/${invoice.id}`)}
                    className="cursor-pointer transition-colors hover:bg-gray-50/50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-bold flex items-center gap-2">
                      <FileText size={16} className="text-muted" />
                      {invoice.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-muted capitalize">{invoice.date}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-muted">{invoice.courses} course{invoice.courses > 1 ? "s" : ""}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-bold">
                      {invoice.amount.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {getStatusBadge(invoice.status)}
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
