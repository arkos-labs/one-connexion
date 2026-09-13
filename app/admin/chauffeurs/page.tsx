"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus } from "lucide-react";

type Driver = {
  id: string;
  name: string;
  phone: string | null;
  vehicle: string | null;
  status: "disponible" | "en_course" | "hors_service";
  notes: string | null;
};

const STATUS_LABEL: Record<Driver["status"], string> = {
  disponible: "Disponible",
  en_course: "En course",
  hors_service: "Hors service",
};

export default function AdminChauffeursPage() {
  const supabase = createClient();
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadDrivers = useCallback(async () => {
    const { data } = await supabase.from("drivers").select("*").order("name");
    setDrivers(data ?? []);
  }, [supabase]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadDrivers();
  }, [loadDrivers]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return;
    const { error } = await supabase.from("drivers").insert({ name, phone, vehicle });
    if (error) {
      setError("Impossible d'ajouter le chauffeur.");
      return;
    }
    setName("");
    setPhone("");
    setVehicle("");
    loadDrivers();
  };

  const updateStatus = async (id: string, status: Driver["status"]) => {
    await supabase.from("drivers").update({ status }).eq("id", id);
    loadDrivers();
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-ink">Chauffeurs</h1>

      <form onSubmit={handleAdd} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-end">
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-bold uppercase text-label">Nom</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg border border-line px-3 py-2 text-sm" required />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-bold uppercase text-label">Téléphone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-lg border border-line px-3 py-2 text-sm" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-bold uppercase text-label">Véhicule</label>
          <input value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="rounded-lg border border-line px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white">
          <Plus size={16} /> Ajouter
        </button>
      </form>
      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex flex-col gap-3">
        {drivers.map((d) => (
          <div key={d.id} className="flex flex-col justify-between gap-3 rounded-2xl border border-line bg-white p-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-bold text-ink">{d.name}</div>
              <div className="text-xs text-muted">{d.phone || "—"} · {d.vehicle || "—"}</div>
            </div>
            <select
              value={d.status}
              onChange={(e) => updateStatus(d.id, e.target.value as Driver["status"])}
              className="rounded-lg border border-line px-3 py-2 text-sm"
            >
              {Object.entries(STATUS_LABEL).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        ))}
        {drivers.length === 0 && <p className="text-sm text-muted">Aucun chauffeur pour l&apos;instant.</p>}
      </div>
    </div>
  );
}
