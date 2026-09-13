"use client";

import React, { useState } from "react";
import { User, Building2, CreditCard, Lock, Save, ShieldCheck } from "lucide-react";

export default function ParametresPage() {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* En-tête */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[32px] font-extrabold tracking-tight text-ink">
            Paramètres du <span className="text-accent">compte</span>.
          </h1>
          <p className="mt-1.5 text-[15px] font-medium text-muted">
            Gérez vos informations personnelles, professionnelles et vos préférences de facturation.
          </p>
        </div>
        
        <button className="flex shrink-0 items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-dark">
          <Save size={18} strokeWidth={2.5} />
          Enregistrer les modifications
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Navigation des paramètres */}
        <div className="w-full lg:w-[240px] shrink-0">
          <nav className="flex flex-col gap-2 sticky top-[110px]">
            <button
              onClick={() => setActiveTab("profil")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "profil" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <User size={18} className={activeTab === "profil" ? "text-accent" : ""} />
              Profil Utilisateur
            </button>
            <button
              onClick={() => setActiveTab("societe")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "societe" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <Building2 size={18} className={activeTab === "societe" ? "text-accent" : ""} />
              Société
            </button>
            <button
              onClick={() => setActiveTab("facturation")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "facturation" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <CreditCard size={18} className={activeTab === "facturation" ? "text-accent" : ""} />
              Facturation & Paiement
            </button>
            <button
              onClick={() => setActiveTab("securite")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "securite" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <Lock size={18} className={activeTab === "securite" ? "text-accent" : ""} />
              Sécurité
            </button>
          </nav>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
          
          {activeTab === "profil" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4">
                <h2 className="text-lg font-bold text-ink">Informations personnelles</h2>
                <p className="text-sm text-muted">Ces informations sont utilisées pour vous contacter au sujet de vos courses.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Prénom</label>
                  <input type="text" defaultValue="Alexandre" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Nom</label>
                  <input type="text" defaultValue="Dupont" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Email professionnel</label>
                  <input type="email" defaultValue="alexandre.dupont@cabinet-dupont.fr" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Téléphone portable</label>
                  <input type="tel" defaultValue="06 12 34 56 78" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "societe" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4">
                <h2 className="text-lg font-bold text-ink">Informations de l'entreprise</h2>
                <p className="text-sm text-muted">Les détails de votre structure juridique.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Nom de la société / Cabinet</label>
                  <input type="text" defaultValue="Cabinet Dupont & Associés" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Numéro de SIRET</label>
                  <input type="text" defaultValue="123 456 789 00012" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Numéro de TVA Intracommunautaire</label>
                  <input type="text" defaultValue="FR 12 123456789" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Adresse de facturation</label>
                  <input type="text" defaultValue="75 Rue de Rivoli, 75001 Paris" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "facturation" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4 flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-ink">Facturation & Paiement</h2>
                  <p className="text-sm text-muted">Gérez vos méthodes de paiement et vos conditions.</p>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">Compte Pro actif</span>
              </div>
              
              <div className="rounded-2xl border border-line bg-paper/50 p-6">
                <h3 className="mb-2 font-bold text-ink">Paiement différé</h3>
                <p className="mb-4 text-sm text-muted">Votre compte bénéficie du paiement différé par prélèvement SEPA à 30 jours fin de mois.</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 items-center justify-center rounded-xl bg-white px-4 border border-line text-sm font-bold text-ink shadow-sm">
                    **** **** **** 1234
                  </div>
                  <button className="text-sm font-bold text-accent hover:underline">Mettre à jour l'IBAN</button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[11.5px] font-semibold text-muted">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                  <ShieldCheck size={12} strokeWidth={3} />
                </div>
                Toutes les transactions sont chiffrées et sécurisées par Stripe.
              </div>
            </div>
          )}

          {activeTab === "securite" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4">
                <h2 className="text-lg font-bold text-ink">Sécurité du compte</h2>
                <p className="text-sm text-muted">Modifiez votre mot de passe et sécurisez votre accès.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:max-w-md">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Mot de passe actuel</label>
                  <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Nouveau mot de passe</label>
                  <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Confirmer le nouveau mot de passe</label>
                  <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <button className="mt-2 flex w-fit items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ink/90">
                  Mettre à jour le mot de passe
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
