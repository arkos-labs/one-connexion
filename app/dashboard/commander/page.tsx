"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle2, ChevronRight, Package, CreditCard } from "lucide-react";

export default function CommanderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-line bg-white p-8 text-center shadow-sm">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-500">
          <CheckCircle2 size={40} strokeWidth={2.5} />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-ink">Commande validée !</h3>
        <p className="mb-8 max-w-md text-muted">
          Un coursier est en route vers l'adresse d'enlèvement. Vous pouvez suivre la progression dans l'onglet Suivi.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setPickupAddress("");
            setDropoffAddress("");
          }}
          className="rounded-[4px] bg-ink px-8 py-3 font-semibold text-white transition-colors hover:bg-ink/90"
        >
          Nouvelle commande
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">Commander une course</h1>
          <p className="mt-1 text-sm text-muted">Réservez un coursier en quelques secondes.</p>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-white p-6 shadow-sm md:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          {/* Adresses */}
          <div className="relative flex flex-col gap-6 pl-10">
            <div className="absolute bottom-10 left-[19px] top-8 border-l-2 border-dashed border-line"></div>

            <div className="relative">
              <div className="absolute -left-[40px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-green-500 bg-white">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <label className="mb-2 block text-sm font-bold text-ink">Adresse d'enlèvement <span className="text-accent">*</span></label>
              <input
                type="text"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
                placeholder="Ex: 75008 Paris..."
                className="w-full rounded-[4px] border border-line bg-gray-50 px-5 py-3.5 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute -left-[40px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-accent bg-white">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
              </div>
              <label className="mb-2 block text-sm font-bold text-ink">Adresse de livraison <span className="text-accent">*</span></label>
              <input
                type="text"
                value={dropoffAddress}
                onChange={(e) => setDropoffAddress(e.target.value)}
                placeholder="Ex: 92100 Boulogne-Billancourt..."
                className="w-full rounded-[4px] border border-line bg-gray-50 px-5 py-3.5 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>
          </div>

          {/* Type de colis */}
          <div>
            <label className="mb-3 block text-sm font-bold text-ink">Format du courrier</label>
            <div className="grid grid-cols-3 gap-3">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-accent bg-accent/5 p-4 transition-all">
                <input type="radio" name="format" defaultChecked className="sr-only" />
                <Package className="mb-2 h-6 w-6 text-accent" />
                <span className="text-sm font-bold text-accent">Pli / Doc</span>
              </label>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-line bg-white p-4 transition-all hover:bg-gray-50">
                <input type="radio" name="format" className="sr-only" />
                <Package className="mb-2 h-6 w-6 text-muted" />
                <span className="text-sm font-bold text-ink">Petit colis</span>
              </label>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-line bg-white p-4 transition-all hover:bg-gray-50">
                <input type="radio" name="format" className="sr-only" />
                <Package className="mb-2 h-6 w-6 text-muted" />
                <span className="text-sm font-bold text-ink">Volumineux</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-[4px] bg-accent px-8 py-3.5 font-bold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md"
            >
              Commander la course
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
