"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Phone,
  User,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Truck,
  PackageCheck,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const STATUS_LABELS: Record<string, string> = {
  en_attente: "En attente",
  confirmee: "Confirmée",
  en_cours: "En cours de livraison",
  livree: "Livrée",
  annulee: "Annulée",
};

const FORMAT_LABELS: Record<string, string> = {
  pli: "Pli (max 2kg)",
  colis: "Colis",
  palette: "Palette",
};

const STEPS = [
  { key: "en_attente", label: "Commande reçue", icon: FileText },
  { key: "confirmee", label: "Confirmée", icon: CheckCircle2 },
  { key: "en_cours", label: "En livraison", icon: Truck },
  { key: "livree", label: "Livrée", icon: PackageCheck },
];

export default function DeliveryDetailsPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const supabase = createClient();

  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cancelling, setCancelling] = useState(false);
  const [cancelError, setCancelError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setError("Non authentifié");
          setLoading(false);
          return;
        }

        const { data, error: err } = await supabase
          .from("orders")
          .select("*")
          .eq("id", id)
          .eq("user_id", user.id)
          .single();

        if (err) {
          setError("Course non trouvée");
        } else {
          setOrder(data);
        }
      } catch (err) {
        setError("Erreur de chargement");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadOrder();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleCancel = async () => {
    if (!order || !confirm("Êtes-vous sûr de vouloir annuler cette commande ?")) return;

    setCancelling(true);
    setCancelError(null);
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: "annulee" })
        .eq("id", order.id);

      if (error) {
        setCancelError("Erreur lors de l'annulation. Veuillez réessayer.");
      } else {
        setOrder({ ...order, status: "annulee" });
      }
    } catch (err) {
      setCancelError("Une erreur inattendue est survenue.");
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="text-muted">Chargement...</div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/suivi" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
          <ArrowLeft size={16} />
          Retour au suivi
        </Link>
        <div className="text-red-600">{error || "Course non trouvée"}</div>
      </div>
    );
  }

  const statusLabel = STATUS_LABELS[order.status] || order.status;
  const formatLabel = FORMAT_LABELS[order.format] || order.format;
  const priceHT = order.price_estimate ? Number(order.price_estimate) : null;
  const tva = priceHT !== null ? priceHT * 0.2 : null;
  const totalTTC = priceHT !== null ? priceHT + (tva || 0) : null;
  const canCancel = order.status !== "livree" && order.status !== "annulee";
  const isCancelled = order.status === "annulee";
  const currentStepIndex = STEPS.findIndex((s) => s.key === order.status);

  return (
    <div className="flex flex-col gap-6 pb-12">

      {/* Retour */}
      <Link
        href="/dashboard/suivi"
        className="group flex w-fit items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white transition-colors group-hover:border-ink">
          <ArrowLeft size={16} />
        </div>
        Retour au suivi
      </Link>

      {cancelError && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
          {cancelError}
        </div>
      )}

      {/* Bandeau principal : titre, statut, timeline */}
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1.5 flex items-center gap-3">
              <h1 className="text-[26px] font-extrabold tracking-tight text-ink">
                Course <span className="text-accent">{order.tracking_code}</span>
              </h1>
              <span className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                order.status === "livree"
                  ? "bg-green-50 text-green-600"
                  : isCancelled
                  ? "bg-red-50 text-red-600"
                  : "bg-blue-50 text-blue-600"
              }`}>
                {order.status === "en_cours" && (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                )}
                {statusLabel}
              </span>
            </div>
            <p className="text-sm font-medium text-muted">
              Créée le {new Date(order.created_at).toLocaleDateString('fr-FR')} à {new Date(order.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} • Format : {formatLabel}
            </p>
          </div>

          {canCancel && (
            <button
              onClick={handleCancel}
              disabled={cancelling}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-700 disabled:opacity-50"
            >
              <XCircle size={16} />
              {cancelling ? "Annulation..." : "Annuler la commande"}
            </button>
          )}
        </div>

        {/* Timeline de statut */}
        {!isCancelled ? (
          <div className="flex items-center gap-2 p-6 sm:gap-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isDone = index < currentStepIndex || order.status === "livree" && index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isReached = index <= currentStepIndex;
              return (
                <React.Fragment key={step.key}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isReached
                        ? "border-accent bg-accent text-white"
                        : "border-line bg-white text-label"
                    }`}>
                      <Icon size={16} />
                    </div>
                    <span className={`hidden text-[11px] font-bold sm:block ${isReached ? "text-ink" : "text-label"}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className={`h-0.5 flex-1 rounded-full ${index < currentStepIndex ? "bg-accent" : "bg-line"}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-3 p-6 text-sm font-semibold text-red-600">
            <XCircle size={18} />
            Cette commande a été annulée.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Colonne Principale */}
        <div className="flex flex-col gap-6 lg:col-span-2">

          {/* Adresses */}
          <div className="flex flex-col rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
            <div className="border-b border-line p-5">
              <h2 className="text-base font-bold text-ink">Détails de l'itinéraire</h2>
            </div>

            <div className="flex flex-col">
              {/* Départ */}
              <div className="flex gap-4 p-5">
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    <span className="text-[10px] font-bold">A</span>
                  </div>
                  <div className="w-0.5 flex-1 bg-line"></div>
                </div>
                <div className="pb-2">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-label">Enlèvement</h3>
                  <p className="text-sm font-medium text-ink mt-1">{order.pickup_address}</p>
                </div>
              </div>

              {/* Étapes intermédiaires */}
              {order.stops && order.stops.length > 0 && order.stops.map((stop: any, index: number) => (
                <div key={index} className="flex gap-4 p-5 pt-0">
                  <div className="flex flex-col items-center gap-2 pt-1">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <span className="text-[10px] font-bold">{index + 1}</span>
                    </div>
                    <div className="w-0.5 flex-1 bg-line"></div>
                  </div>
                  <div className="pb-2">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-label">Étape intermédiaire</h3>
                    <p className="text-sm font-medium text-ink mt-1">{typeof stop === "string" ? stop : stop.address}</p>
                  </div>
                </div>
              ))}

              {/* Arrivée */}
              <div className="flex gap-4 p-5 pt-0">
                <div className="flex flex-col items-center pt-1">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <span className="text-[10px] font-bold">B</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-label">Livraison</h3>
                  <p className="text-sm font-medium text-ink mt-1">{order.dropoff_address}</p>
                  {order.notes && (
                    <div className="mt-3 flex items-start gap-2 rounded-lg bg-orange-50 p-3 text-xs font-medium text-orange-800">
                      <span className="font-bold shrink-0">Note :</span> {order.notes}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Colonne Latérale */}
        <div className="flex flex-col gap-6">

          {/* Contact */}
          {(order.contact_name || order.contact_phone || order.contact_email) && (
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-sm font-bold text-ink">Contact</h2>
              <div className="flex flex-col gap-3 text-sm">
                {order.contact_name && (
                  <div className="flex items-center gap-3 text-ink font-semibold">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper">
                      <User size={14} className="text-muted" />
                    </div>
                    {order.contact_name}
                  </div>
                )}
                {order.contact_phone && (
                  <div className="flex items-center gap-3 text-ink font-semibold">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper">
                      <Phone size={14} className="text-muted" />
                    </div>
                    {order.contact_phone}
                  </div>
                )}
                {order.contact_email && (
                  <div className="flex items-center gap-3 text-ink font-semibold">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper">
                      <FileText size={14} className="text-muted" />
                    </div>
                    {order.contact_email}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Détails Commande */}
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-ink">Détails & Facturation</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Référence</span>
                <span className="font-bold text-ink">{order.tracking_code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Format</span>
                <span className="font-bold text-ink">{formatLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Délai</span>
                <span className="font-bold text-ink capitalize">{order.delai}</span>
              </div>
            </div>

            {priceHT !== null ? (
              <>
                <div className="my-4 border-t border-line"></div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Tarif HT</span>
                    <span className="font-bold text-ink">{priceHT.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">TVA (20%)</span>
                    <span className="font-bold text-ink">{tva?.toFixed(2)} €</span>
                  </div>
                  <div className="mt-2 flex justify-between text-lg">
                    <span className="font-bold text-ink">Total TTC</span>
                    <span className="font-bold text-accent">{totalTTC?.toFixed(2)} €</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="my-4 border-t border-line pt-4 text-xs text-muted">
                Tarif en cours d'estimation par notre équipe.
              </div>
            )}

            {!isCancelled && (
              <div className="mt-5 rounded-xl bg-green-50 p-3 text-center text-xs font-bold text-green-700">
                Facturé sur votre compte pro (fin de mois)
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
