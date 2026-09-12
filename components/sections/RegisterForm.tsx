"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Clock, 
  ShieldCheck, 
  FileText, 
  Building2, 
  AtSign,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

export default function RegisterForm() {
  const [accountType, setAccountType] = useState<"pro" | "particulier">("pro");

  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1240px] items-center justify-center px-[clamp(20px,4vw,28px)] py-12">
      
      {/* Background Dots Pattern (optional, subtle styling) */}
      <div 
        className="pointer-events-none absolute inset-0 z-[-1] opacity-40" 
        style={{
          backgroundImage: 'radial-gradient(#DFDCD6 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="grid w-full max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Colonne Gauche : Argumentaire */}
        <div className="flex flex-col justify-center">
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E85D1F]/20 bg-[#E85D1F]/10 px-3 py-1.5 text-xs font-bold tracking-wide text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
            PARTENAIRE LOGISTIQUE URBAIN • PARIS & IDF
          </div>

          <h1 className="mb-4 text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
            Vos livraisons <br />
            express en toute <br />
            <span className="text-accent">sérénité</span><span className="text-ink">.</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-muted md:text-xl">
            La solution de coursier sur-mesure pour les entreprises exigeantes. Enlèvement immédiat, dispatch en direct et suivi temps réel par GPS.
          </p>

          <div className="flex flex-col gap-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 rounded-xl border border-line bg-paper-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E85D1F]/10 text-accent">
                <Clock size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-ink">Courses Flash en 30 à 45 minutes</h3>
                <p className="mt-1 text-sm text-muted">Mise à disposition immédiate de motocyclistes ou vélos cargos dédiés.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 rounded-xl border border-line bg-paper-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-ink">Flotte 100% Décarbonée & Certifiée</h3>
                <p className="mt-1 text-sm text-muted">Zéro émission intra-muros avec nos utilitaires et vélos bi-porteurs électriques.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 rounded-xl border border-line bg-paper-card p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                <FileText size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-ink">Facturation & Reporting Centralisés</h3>
                <p className="mt-1 text-sm text-muted">Accès extranet complet, suivi budgétaire mensuel et preuve électronique de livraison.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
            <div className="flex -space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper-card bg-ink text-xs font-bold text-white">LR</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper-card bg-accent text-xs font-bold text-white">MD</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper-card bg-yellow-500 text-xs font-bold text-white">KB</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper-card bg-blue-600 text-xs font-bold text-white">+2k</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <span className="ml-1 text-sm font-bold text-ink">4.9/5</span>
              </div>
              <p className="text-xs text-muted">+2 500 entreprises et cabinets d'avocats nous font confiance.</p>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div className="flex w-full flex-col overflow-hidden rounded-[8px] border border-line bg-white shadow-xl shadow-ink/5">
          <div className="flex flex-col p-6 sm:p-8">
            
            {/* Header du Formulaire */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Créer un compte</h2>
                <p className="mt-1 text-sm text-muted">Déployez vos expéditions urgentes en moins de 2 minutes.</p>
              </div>
              
              {/* Toggle Pro / Particulier */}
              <div className="flex shrink-0 rounded-full bg-paper p-1">
                <button
                  onClick={() => setAccountType("pro")}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                    accountType === "pro" 
                      ? "bg-white text-accent shadow-sm" 
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Professionnel
                </button>
                <button
                  onClick={() => setAccountType("particulier")}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                    accountType === "particulier" 
                      ? "bg-white text-accent shadow-sm" 
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Particulier
                </button>
              </div>
            </div>

            <form className="flex w-full flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">Prénom <span className="text-accent">*</span></label>
                  <input
                    type="text"
                    placeholder="ex. Alexandre"
                    className="w-full rounded-[4px] border border-line bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">Nom <span className="text-accent">*</span></label>
                  <input
                    type="text"
                    placeholder="ex. Dupont"
                    className="w-full rounded-[4px] border border-line bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              {accountType === "pro" && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">
                    Entreprise
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-label">
                      <Building2 size={18} strokeWidth={1.5} />
                    </div>
                    <input
                      type="text"
                      placeholder="ex. Studio Créatif SARL"
                      className="w-full rounded-[4px] border border-line bg-transparent py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted">Adresse email professionnelle <span className="text-accent">*</span></label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-label">
                    <AtSign size={18} strokeWidth={1.5} />
                  </div>
                  <input
                    type="email"
                    placeholder="contact@votre-entreprise.fr"
                    className="w-full rounded-[4px] border border-line bg-transparent py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted">Numéro de téléphone portable <span className="text-accent">*</span></label>
                <div className="flex rounded-[4px] border border-line bg-transparent focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
                  <div className="flex items-center gap-2 border-r border-line bg-paper px-3 py-2.5">
                    <span className="text-base leading-none">🇫🇷</span>
                    <span className="text-sm font-medium text-ink">+33</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-line focus:outline-none"
                    required
                  />
                </div>
                <p className="text-[11px] text-label">Utilisé pour les notifications SMS du livreur et confirmations d'enlèvement.</p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">Mot de passe <span className="text-accent">*</span></label>
                  <input
                    type="password"
                    placeholder="Min. 8 caractères"
                    className="w-full rounded-[4px] border border-line bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">Confirmer le mot de passe <span className="text-accent">*</span></label>
                  <input
                    type="password"
                    placeholder="Répéter le mot de passe"
                    className="w-full rounded-[4px] border border-line bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              {/* Password Strength Indicator */}
              <div className="mt-[-4px] flex items-center justify-between">
                <div className="flex h-1 flex-1 overflow-hidden rounded-full bg-line">
                  <div className="w-2/3 bg-green-500"></div>
                </div>
                <span className="ml-3 text-[11px] font-semibold text-green-600">Sécurité : Bonne</span>
              </div>

              {/* Checkbox Conditions */}
              <div className="mt-2 flex items-start gap-3">
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-line text-accent focus:ring-accent"
                    required
                  />
                </div>
                <p className="text-sm text-muted">
                  J'accepte les <Link href="#" className="font-medium text-accent hover:underline">conditions générales d'utilisation</Link> et la <Link href="#" className="font-medium text-accent hover:underline">politique de confidentialité</Link> ONE CONNEXION.
                </p>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-[4px] bg-accent px-8 py-3.5 font-bold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md"
                >
                  Créer mon compte {accountType === "pro" ? "professionnel" : "particulier"}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted">
                  Déjà client ?{" "}
                  <Link
                    href="/connexion"
                    className="font-bold text-accent hover:text-accent-dark hover:underline"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </form>
          </div>
          
          {/* Footer Card */}
          <div className="flex items-center justify-between border-t border-line bg-[#F8F9FA] px-6 py-4 text-xs font-medium text-muted sm:px-8">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-green-600" strokeWidth={2.5} />
              Chiffrement SSL 256-bit
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-green-600" strokeWidth={2.5} />
              Validation de compte immédiate
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
