"use client";

import React from "react";
import { Search, Download, FileText, CheckCircle2, Clock } from "lucide-react";

export default function FacturesPage() {
  const invoices = [
    {
      id: "FA-2026-09",
      date: "01 Septembre 2026",
      amount: "1 245,00 €",
      status: "en_attente",
      courses: 14,
    },
    {
      id: "FA-2026-08",
      date: "01 Août 2026",
      amount: "980,50 €",
      status: "payee",
      courses: 11,
    },
    {
      id: "FA-2026-07",
      date: "01 Juillet 2026",
      amount: "1 450,00 €",
      status: "payee",
      courses: 18,
    },
    {
      id: "FA-2026-06",
      date: "01 Juin 2026",
      amount: "890,20 €",
      status: "payee",
      courses: 9,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "payee":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
            <CheckCircle2 size={12} /> Réglée
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700">
            <Clock size={12} /> En attente
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">Vos Factures</h1>
          <p className="mt-1 text-sm text-muted">Retrouvez l'historique de votre facturation mensuelle.</p>
        </div>
        
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={16} className="text-label" />
          </div>
          <input
            type="text"
            placeholder="N° de facture, mois..."
            className="w-full rounded-[4px] border border-line bg-white py-2 pl-9 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-64"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
          <div className="mb-2 text-sm font-bold text-muted uppercase tracking-wider">En attente de paiement</div>
          <div className="text-3xl font-extrabold text-ink">1 245,00 €</div>
        </div>
        <div className="rounded-xl border border-line bg-white p-6 shadow-sm md:col-span-2 flex items-center justify-between">
          <div>
            <div className="mb-2 text-sm font-bold text-muted uppercase tracking-wider">Moyen de paiement par défaut</div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-12 items-center justify-center rounded border border-line bg-gray-50 text-xs font-bold text-ink">
                SEPA
              </div>
              <div className="text-sm font-bold text-ink">Prélèvement automatique (RIB terminant par 8923)</div>
            </div>
          </div>
          <button className="text-sm font-semibold text-accent hover:text-accent-dark hover:underline">
            Modifier
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-line bg-paper-card text-xs font-bold uppercase text-muted">
              <tr>
                <th scope="col" className="px-6 py-4">N° Facture</th>
                <th scope="col" className="px-6 py-4">Date d'émission</th>
                <th scope="col" className="px-6 py-4">Volume</th>
                <th scope="col" className="px-6 py-4">Montant TTC</th>
                <th scope="col" className="px-6 py-4">Statut</th>
                <th scope="col" className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="transition-colors hover:bg-gray-50/50">
                  <td className="whitespace-nowrap px-6 py-4 font-bold flex items-center gap-2">
                    <FileText size={16} className="text-muted" />
                    {invoice.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-muted">{invoice.date}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-muted">{invoice.courses} courses</td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold">{invoice.amount}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {getStatusBadge(invoice.status)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button className="inline-flex items-center gap-1.5 rounded-[4px] border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-paper">
                      <Download size={14} />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
