"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  AtSign, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  Star,
  Check
} from "lucide-react";

export default function AuthForm() {
  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1240px] flex-col items-center justify-center px-[clamp(20px,4vw,28px)] py-16">
      
      {/* Top Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E85D1F]/20 bg-[#E85D1F]/10 px-3 py-1.5 text-xs font-bold tracking-wide text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
          ESPACE CLIENT SÉCURISÉ
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Accédez à votre espace <br className="hidden sm:block" />
          <span className="text-accent">coursier</span>.
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Gérez vos courses express, suivez vos livraisons en temps réel et accédez instantanément à vos factures.
        </p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        
        {/* Colonne Gauche : Déjà Client */}
        <div className="relative flex flex-col overflow-hidden rounded-[8px] border border-line bg-white shadow-xl shadow-ink/5">
          {/* Ligne orange en haut */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-accent"></div>
          
          <div className="flex flex-col p-8 md:p-10">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-ink">Déjà client ?</h2>
                <p className="mt-1 text-sm text-muted">Authentification sécurisée à votre compte entreprise</p>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </div>
            </div>

            <form className="flex w-full flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted">Adresse email professionnelle <span className="text-accent">*</span></label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-label">
                    <AtSign size={18} strokeWidth={1.5} />
                  </div>
                  <input
                    type="email"
                    placeholder="contact@votre-entreprise.fr"
                    className="w-full rounded-[4px] border border-line bg-transparent py-3 pl-10 pr-4 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">Mot de passe <span className="text-accent">*</span></label>
                  <Link href="#" className="text-xs font-bold text-accent hover:text-accent-dark hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-label">
                    <Lock size={18} strokeWidth={1.5} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full rounded-[4px] border border-line bg-transparent py-3 pl-10 pr-4 text-sm text-ink placeholder:text-line focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-line text-accent focus:ring-accent"
                />
                <label htmlFor="remember" className="text-sm text-muted">
                  Rester connecté sur cet appareil
                </label>
              </div>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-[4px] bg-accent px-8 py-3.5 font-bold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md"
              >
                Se connecter
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>
            </form>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-line bg-[#F8F9FA] px-8 py-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <ShieldCheck size={16} className="text-green-600" strokeWidth={2.5} />
              Portail sécurisé SSL 256 bits
            </div>
            <Link href="#" className="text-xs font-bold text-ink hover:text-accent">
              Besoin d'aide ?
            </Link>
          </div>
        </div>

        {/* Colonne Droite : Nouveau Client */}
        <div className="flex flex-col overflow-hidden rounded-[8px] border border-line bg-white shadow-sm">
          <div className="flex flex-col p-8 md:p-10">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-ink">Nouveau client ?</h2>
                <p className="mt-1 text-sm text-muted">Créez votre compte professionnel sans engagement</p>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E85D1F]/10 text-xl font-bold text-accent">
                +1
              </div>
            </div>

            <p className="mb-6 font-bold text-ink">
              Comptez sur votre compte <span className="text-accent">ONE CONNEXION</span> pour :
            </p>
            
            <ul className="mb-8 flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border border-[#E85D1F]/30 bg-[#E85D1F]/10 p-0.5 text-accent">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Commander vos livraisons en quelques clics</h4>
                  <p className="mt-0.5 text-xs text-muted">Courses flash en 30 à 45 min garanties dans Paris & IDF.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border border-[#E85D1F]/30 bg-[#E85D1F]/10 p-0.5 text-accent">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Suivre vos livraisons en temps réel</h4>
                  <p className="mt-0.5 text-xs text-muted">Localisation GPS live du coursier et preuve de signature électronique.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border border-[#E85D1F]/30 bg-[#E85D1F]/10 p-0.5 text-accent">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Accéder à vos factures & reporting centralisé</h4>
                  <p className="mt-0.5 text-xs text-muted">Relevés mensuels détaillés et attribution par centre de coût.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border border-[#E85D1F]/30 bg-[#E85D1F]/10 p-0.5 text-accent">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Flotte 100% décarbonée & certifiée</h4>
                  <p className="mt-0.5 text-xs text-muted">Vélos bi-porteurs et véhicules utilitaires électriques.</p>
                </div>
              </li>
            </ul>

            <div className="mb-6 flex items-center gap-4 rounded-xl border border-line bg-paper px-4 py-3">
              <div className="flex -space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-ink text-[10px] font-bold text-white">LR</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-accent text-[10px] font-bold text-white">MD</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-yellow-500 text-[10px] font-bold text-white">KB</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-blue-600 text-[10px] font-bold text-white">+2k</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <span className="ml-1 text-xs font-bold text-ink">4.9/5</span>
                </div>
                <p className="text-[10px] text-muted">+2 500 entreprises et cabinets d'avocats nous font confiance.</p>
              </div>
            </div>

            <Link
              href="/inscription"
              className="group flex w-full items-center justify-center gap-2 rounded-[4px] bg-ink px-8 py-3.5 font-bold text-white shadow-sm transition-all hover:bg-ink/90 hover:shadow-md"
            >
              Créer un compte professionnel
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="mt-auto border-t border-line bg-[#F8F9FA] px-8 py-4 text-center">
            <p className="text-xs text-muted">
              Inscription en 2 minutes • Sans frais fixes ni abonnement obligatoire
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Features */}
      <div className="mt-16 flex w-full max-w-5xl flex-wrap items-center justify-center gap-6 border-t border-line pt-8 sm:justify-between sm:gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-600" strokeWidth={2.5} />
          <span>Chiffrement bancaire SSL 256-bit</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-600" strokeWidth={2.5} />
          <span>Activation & commande immédiate</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-600" strokeWidth={2.5} />
          <span>Support dispatch dédié 7j/7</span>
        </div>
      </div>

    </div>
  );
}
