"use client";

import React, { useState } from "react";
import { MapPin, Plus, MoreVertical, Edit2, Trash2, X } from "lucide-react";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";

export default function AdressesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const addresses = [
    {
      id: 1,
      name: "Siège Social",
      address: "75 Rue de Rivoli, 75001 Paris",
      contact: "Alexandre Dupont",
      phone: "06 12 34 56 78",
      notes: "Bâtiment B, 3e étage, code 4589",
      isDefault: true,
    },
    {
      id: 2,
      name: "Entrepôt Logistique",
      address: "14 Avenue Victor Hugo, 92100 Boulogne-Billancourt",
      contact: "Sophie Martin",
      phone: "06 98 76 54 32",
      notes: "Accès par la cour arrière, appeler avant d'arriver.",
      isDefault: false,
    },
    {
      id: 3,
      name: "Cabinet Partenaire",
      address: "22 Rue de la Paix, 75002 Paris",
      contact: "Me. Dubois",
      phone: "01 42 68 55 12",
      notes: "Remise en main propre contre signature obligatoire.",
      isDefault: false,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 pb-12">
        {/* En-tête */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[32px] font-extrabold tracking-tight text-ink">
              Adresses <span className="text-accent">favorites</span>.
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-muted">
              Gérez vos adresses d'enlèvement et de livraison récurrentes pour gagner du temps.
            </p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex shrink-0 items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ink/90"
          >
            <Plus size={18} strokeWidth={2.5} />
            Nouvelle adresse
          </button>
        </div>

        {/* Liste des adresses */}
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
                    <h3 className="font-bold text-ink">{addr.name}</h3>
                    {addr.isDefault && (
                      <span className="mt-0.5 inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase text-accent">
                        Par défaut
                      </span>
                    )}
                  </div>
                </div>
                
                <button className="text-label transition-colors hover:text-ink">
                  <MoreVertical size={18} />
                </button>
              </div>
              
              {/* Contenu de la carte */}
              <div className="flex flex-col p-5">
                <p className="mb-4 text-sm font-semibold text-ink leading-relaxed">
                  {addr.address}
                </p>
                
                <div className="mb-4 flex flex-col gap-2 rounded-xl bg-paper p-3 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium text-muted">Contact :</span>
                    <span className="font-bold text-ink">{addr.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted">Téléphone :</span>
                    <span className="font-bold text-ink">{addr.phone}</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-label">Notes pour le coursier</span>
                  <p className="mt-1 text-xs font-medium text-muted line-clamp-2">
                    {addr.notes}
                  </p>
                </div>
              </div>

              {/* Actions (Hover) */}
              <div className="flex border-t border-line bg-paper/50">
                <button className="flex flex-1 items-center justify-center gap-2 border-r border-line py-3 text-xs font-bold text-muted transition-colors hover:bg-white hover:text-ink">
                  <Edit2 size={14} />
                  Modifier
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold text-red-400 transition-colors hover:bg-red-50 hover:text-red-600">
                  <Trash2 size={14} />
                  Supprimer
                </button>
              </div>

            </div>
          ))}

          {/* Card "Ajouter" */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-line bg-[#FAFAFA] text-muted transition-colors hover:border-accent hover:bg-white hover:text-accent"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
              <Plus size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold">Ajouter une adresse</span>
          </button>
        </div>
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
            
            <form className="flex flex-col gap-5 p-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Nom de l&apos;adresse</label>
                <input type="text" placeholder="Ex: Entrepôt Nord" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" required />
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
                  <input type="text" placeholder="Nom du contact" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Téléphone</label>
                  <input type="tel" placeholder="06 XX XX XX XX" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink">Notes pour le coursier (Optionnel)</label>
                <textarea rows={2} placeholder="Code porte, étage, instructions spécifiques..." className="w-full resize-none rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>

              <label className="flex cursor-pointer items-center gap-3 mt-2">
                <input type="checkbox" className="h-5 w-5 rounded border-line text-accent focus:ring-accent" />
                <span className="text-sm font-semibold text-ink">Définir comme adresse par défaut</span>
              </label>

              <div className="mt-4 flex justify-end gap-3 border-t border-line pt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="rounded-xl px-5 py-3 text-sm font-bold text-muted transition-colors hover:text-ink">
                  Annuler
                </button>
                <button type="submit" className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-dark">
                  Ajouter l&apos;adresse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
