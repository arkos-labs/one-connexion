"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, RefreshCw, Trash2, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function NavetteDetailsPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const supabase = createClient();
  const [navette, setNavette] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [togglingStatus, setTogglingStatus] = useState(false);

  useEffect(() => {
    const loadNavette = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setError("Non authentifié");
          setLoading(false);
          return;
        }

        const { data, error: err } = await supabase
          .from("navettes")
          .select("*")
          .eq("id", id)
          .eq("user_id", user.id)
          .single();

        if (err) {
          setError("Navette non trouvée");
        } else {
          setNavette(data);
        }
      } catch (err) {
        setError("Erreur de chargement");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadNavette();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleToggleStatus = async () => {
    if (!navette) return;
    setTogglingStatus(true);

    try {
      const newStatus = navette.status === "active" ? "inactive" : "active";
      const { error } = await supabase
        .from("navettes")
        .update({ status: newStatus })
        .eq("id", navette.id);

      if (error) {
        setError("Erreur lors de la mise à jour");
      } else {
        setNavette({ ...navette, status: newStatus });
      }
    } catch (err) {
      setError("Erreur inattendue");
    } finally {
      setTogglingStatus(false);
    }
  };

  const handleDelete = async () => {
    if (!navette || !confirm("Êtes-vous sûr de vouloir supprimer cette navette?")) return;

    setDeleting(true);
    try {
      const { error } = await supabase
        .from("navettes")
        .delete()
        .eq("id", navette.id);

      if (error) {
        setError("Erreur lors de la suppression");
      } else {
        window.location.href = "/dashboard/navettes";
      }
    } catch (err) {
      setError("Erreur inattendue");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="text-muted">Chargement...</div>
      </div>
    );
  }

  if (error || !navette) {
    return (
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/navettes" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
          <ArrowLeft size={16} />
          Retour aux navettes
        </Link>
        <div className="text-red-600">{error || "Navette non trouvée"}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* En-tête */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/navettes" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
          <ArrowLeft size={16} />
          Retour aux navettes
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[32px] font-extrabold tracking-tight text-ink">
              {navette.name}
            </h1>
            <p className="mt-2 text-sm text-muted">
              Créée le {new Date(navette.created_at).toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleStatus}
              disabled={togglingStatus}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-colors ${
                navette.status === "active"
                  ? "bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
              }`}
            >
              <RefreshCw size={16} />
              {navette.status === "active" ? "Désactiver" : "Activer"}
            </button>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex items-center gap-2 rounded-xl bg-red-100 px-6 py-3 text-sm font-bold text-red-700 transition-colors hover:bg-red-200 disabled:opacity-50"
            >
              <Trash2 size={16} />
              Supprimer
            </button>
          </div>
        </div>
      </div>

      {/* Détails */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Prise en charge */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
            Prise en charge
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div>
              <p className="text-xs font-bold uppercase text-muted">Adresse</p>
              <p className="mt-1 text-sm text-ink">{navette.pickup_address}</p>
            </div>
            {navette.pickup_contact_name && (
              <div>
                <p className="text-xs font-bold uppercase text-muted">Contact</p>
                <p className="mt-1 text-sm text-ink">{navette.pickup_contact_name}</p>
              </div>
            )}
            {navette.pickup_contact_phone && (
              <div>
                <p className="text-xs font-bold uppercase text-muted">Téléphone</p>
                <p className="mt-1 text-sm text-ink">{navette.pickup_contact_phone}</p>
              </div>
            )}
            {navette.pickup_notes && (
              <div>
                <p className="text-xs font-bold uppercase text-muted">Notes</p>
                <p className="mt-1 text-sm text-ink">{navette.pickup_notes}</p>
              </div>
            )}
          </div>
        </div>

        {/* Dépose */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
            Dépose
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div>
              <p className="text-xs font-bold uppercase text-muted">Adresse</p>
              <p className="mt-1 text-sm text-ink">{navette.dropoff_address}</p>
            </div>
            {navette.dropoff_contact_name && (
              <div>
                <p className="text-xs font-bold uppercase text-muted">Contact</p>
                <p className="mt-1 text-sm text-ink">{navette.dropoff_contact_name}</p>
              </div>
            )}
            {navette.dropoff_contact_phone && (
              <div>
                <p className="text-xs font-bold uppercase text-muted">Téléphone</p>
                <p className="mt-1 text-sm text-ink">{navette.dropoff_contact_phone}</p>
              </div>
            )}
            {navette.dropoff_notes && (
              <div>
                <p className="text-xs font-bold uppercase text-muted">Notes</p>
                <p className="mt-1 text-sm text-ink">{navette.dropoff_notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Étapes intermédiaires */}
      {navette.stops && navette.stops.length > 0 && (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
            Étapes intermédiaires ({navette.stops.length})
          </div>
          <div className="flex flex-col divide-y divide-line p-6">
            {navette.stops.map((stop: any, index: number) => (
              <div key={index} className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink">Étape {index + 1}</h4>
                  <span className="text-xs font-bold text-muted uppercase">#{index + 1}</span>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-muted">Adresse</p>
                  <p className="mt-1 text-sm text-ink">{stop.address}</p>
                </div>

                {stop.contactName && (
                  <div>
                    <p className="text-xs font-bold uppercase text-muted">Contact</p>
                    <p className="mt-1 text-sm text-ink">{stop.contactName}</p>
                  </div>
                )}

                {stop.contactPhone && (
                  <div>
                    <p className="text-xs font-bold uppercase text-muted">Téléphone</p>
                    <p className="mt-1 text-sm text-ink">{stop.contactPhone}</p>
                  </div>
                )}

                {stop.notes && (
                  <div>
                    <p className="text-xs font-bold uppercase text-muted">Notes</p>
                    <p className="mt-1 text-sm text-ink">{stop.notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Planning */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
          Planning
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase text-muted">Jours</p>
              <p className="mt-1 text-sm text-ink">{navette.days_str || "À définir"}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-muted">Horaires</p>
              <p className="mt-1 text-sm text-ink">
                {navette.start_time || "08:30"} → {navette.end_time || "12:00"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-muted">Tarif estimé</p>
            <p className="mt-1 text-2xl font-bold text-ink">{navette.estimated_price}€ HT</p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-ink">Status</p>
            <p className="mt-1 text-xs text-muted">
              Cette navette est actuellement <span className="font-bold">{navette.status}</span>
            </p>
          </div>
          <span
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase ${
              navette.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {navette.status === "active" ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
}
