"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type ClientRow = {
  id: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  ordersCount: number;
  revenue: number;
};

export default function AdminClientsPage() {
  const supabase = createClient();
  const [clients, setClients] = useState<ClientRow[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, full_name, company, phone")
        .order("created_at", { ascending: false });

      const { data: orders } = await supabase
        .from("orders")
        .select("user_id, price_estimate, status");

      const rows: ClientRow[] = (profiles ?? []).map((p) => {
        const own = (orders ?? []).filter((o) => o.user_id === p.id);
        const revenue = own
          .filter((o) => o.status !== "annulee")
          .reduce((sum, o) => sum + (o.price_estimate ?? 0), 0);
        return { ...p, ordersCount: own.length, revenue };
      });

      setClients(rows);
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-ink">Clients</h1>
      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs font-bold uppercase text-label">
              <th className="p-4">Client</th>
              <th className="p-4">Société</th>
              <th className="p-4">Téléphone</th>
              <th className="p-4">Commandes</th>
              <th className="p-4">CA généré</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-b border-line last:border-0">
                <td className="p-4 font-semibold text-ink">{c.full_name || "—"}</td>
                <td className="p-4 text-muted">{c.company || "—"}</td>
                <td className="p-4 text-muted">{c.phone || "—"}</td>
                <td className="p-4 text-muted">{c.ordersCount}</td>
                <td className="p-4 font-semibold text-ink">{c.revenue.toFixed(2)} €</td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr><td colSpan={5} className="p-4 text-center text-muted">Aucun client.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
