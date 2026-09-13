"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Plus, Trash2, X } from "lucide-react";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";
import { createClient } from "@/lib/supabase/client";
import { PageHeader } from "@/components/dashboard/PageHeader";

export default function AdressesPage() {
  const supabase = createClient();

  const [addresses, setAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [label, setLabel] = useState("");
  const [address, setAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const loadAddresses = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("addresses")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur de chargement des adresses:", error);
        setAddresses([]);
      } else {
        setAddresses(data || []);
      }
    } catch (err) {
      console.error("Erreur:", err);
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  const resetForm = () => {
    setLabel("");
    setAddress("");
    setContactName("");
    setContactPhone("");
    setNotes("");
    setIsDefault(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setSubmitError("Session expirée. Veuillez vous reconnecter.");
        setSubmitting(false);
        return;
      }

      if (isDefault) {
        await supabase
          .from("addresses")
          .update({ is_default: false })
          .eq("user_id", user.id);
      }

      const { error } = await supabase
        .from("addresses")
        .insert({
          user_id: user.id,
          label,
          address,
          contact_name: contactName || null,
          contact_phone: contactPhone || null,
          notes: notes || null,
          is_default: isDefault,
        });

      if (error) {
        setSubmitError(`Erreur: ${error.message}`);
      } else {
        setIsModalOpen(false);
        resetForm();
        loadAddresses();
      }
    } catch (err) {
      setSubmitError("Une erreur inattendue est survenue.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette adresse ?")) return;
    const { error } = await supabase.from("addresses").delete().eq("id", id);
    if (!error) {
      setAddresses(addresses.filter((a) => a.id !== id));
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 pb-12">
        <PageHeader
          icon={MapPin}
          eyebrow="Carnet d'adresses"
          title={<>Adresses <span className="text-accent">favorites</span>.</>}
          subtitle="Gérez vos adresses d'enlèvement et de livraison récurrentes pour gagner du temps."
          action={
            <button
              onClick={() => { resetForm(); setIsModalOpen(true); }}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ink/90"
            >
              <Plus size={18} strokeWidth={2.5} />
              Nouvelle adresse
            </button>
          }
        />

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="text-muted">Chargement de vos adresses...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {addresses.map((addr) => (
              <div key={addr.id} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md">

                {/* Header de la carte */}
                <div className="flex items-start justify-between border-b border-line bg-[#FDFDFD] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E85D1F]/10 text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink">{addr.label}</h3>
                      {addr.is_default && (
                        <span className="mt-0.5 inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase text-accent">
                          Par défaut
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="flex flex-col p-5">
                  <p className="mb-4 text-sm font-semibold text-ink leading-relaxed">
                    {addr.address}
                  </p>

                  {(addr.contact_name || addr.contact_phone) && (
                    <div className="mb-4 flex flex-col gap-2 rounded-xl bg-paper p-3 text-xs">
                      {addr.contact_name && (
                        <div className="flex justify-between">
                          <span className="font-medium text-muted">Contact :</span>
                          <span className="font-bold text-ink">{addr.contact_name}</span>
                        </div>
                      )}
                      {addr.contact_phone && (
                        <div className="flex justify-between">
                          <span className="font-medium text-muted">Téléphone :</span>
                          <span className="font-bold text-ink">{addr.contact_phone}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {addr.notes && (
                    <div className="mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-label">Notes pour le coursier</span>
                      <p className="mt-1 text-xs font-medium text-muted line-clamp-2">
                        {addr.notes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex border-t border-line bg-paper/50">
                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold text-red-400 transition-colors hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={14} />
                    Supprimer
                  </button>
                </div>

              </div>
            ))}

            {/* Card "Ajouter" */}
            <button
              onClick={() => { resetForm(); setIsModalOpen(true); }}
              className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-line bg-[#FAFAFA] text-muted transition-colors hover:border-accent hover:bg-white hover:text-accent"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <Plus size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold">Ajouter une adresse</span>
            </button>
          </div>
        )}

        {!loading && addresses.length === 0 && (
          <p className="text-center text-sm text-muted -mt-4">
            Aucune adresse favorite pour le moment. Ajoutez-en une pour gagner du temps lors de vos commandes.
          </p>
        )}
      </div>

      {/* Modal Ajout Adresse */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="mt-20 w-full max-w-lg overflow-visible rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-line p-5">
              <h2 className="text-xl font-extrabold text-ink">Nouvelle adresse</h2>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-2 text-label transition-colors hover:bg-paper hover:text-ink">
                <X size={20} />
              </button>
            </div>

            <form className="flex flex-col gap-5 p-6" onSubmit={handleSubmit}>
              {submitError && (
                <div className="rounded-xl bg-red-50 p-3 text-xs font-medium text-red-600">
                  {submitError}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Nom de l&apos;adresse</label>
                <input
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Ex: Entrepôt Nord"
                  className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Adresse complète</label>
                <AddressAutocomplete
                  value={address}
                  onChange={setAddress}
                  required={true}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Contact sur place</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Nom du contact"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Téléphone</label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="06 XX XX XX XX"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Notes pour le coursier (Optionnel)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Code porte, étage, instructions spécifiques..."
                  className="w-full resize-none rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-3 mt-2">
                <input
                  type="checkbox"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  className="h-5 w-5 rounded border-line text-accent focus:ring-accent"
                />
                <span className="text-sm font-semibold text-ink">Définir comme adresse par défaut</span>
              </label>

              <div className="mt-4 flex justify-end gap-3 border-t border-line pt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="rounded-xl px-5 py-3 text-sm font-bold text-muted transition-colors hover:text-ink">
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-dark disabled:opacity-50"
                >
                  {submitting ? "Ajout..." : "Ajouter l'adresse"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
