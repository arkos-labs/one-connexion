"use client";
/**
 * components/Header.tsx
 * En-tête sticky sobre : logo, nav, téléphone, CTA. Toujours opaque
 * (pas de transparence-au-repos) — c'est le registre "société établie",
 * pas "landing page produit".
 */
import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-content";

// "Services" vise une vraie page ; les autres entrées restent des ancres de la
// homepage, préfixées par "/" pour rester fonctionnelles depuis une sous-page.
const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Méthode", href: "/methode" },
  { label: "Flotte", href: "/flotte" },
  { label: "Références", href: "/references" },
  { label: "Tarifs", href: "/tarifs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-[clamp(20px,4vw,28px)]">
        
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-baseline gap-2.5 text-white">
          <span className="text-[19px] font-extrabold tracking-[-0.02em]">ONE</span>
          <span className="text-[19px] font-extrabold tracking-[-0.02em] text-accent">CONNEXION</span>
        </Link>

        {/* Navigation centrée de manière fluide */}
        <nav className="mx-4 hidden flex-1 items-center justify-center gap-4 whitespace-nowrap lg:flex xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-white/78 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions à droite */}
        <div className="hidden shrink-0 items-center gap-3 whitespace-nowrap md:flex">
          
          <Link
            href="/#commander"
            className="rounded-[4px] bg-accent px-[18px] py-[11px] text-[13px] font-semibold tracking-[0.01em] text-white transition-colors hover:bg-accent-dark"
          >
            Commander une course
          </Link>
          
          <div className="ml-1 flex items-center gap-3 border-l border-white/20 pl-4">
            {/* Bouton Dev pour le Dashboard */}
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 rounded-[4px] bg-purple-600/20 px-3 py-[9px] text-[12px] font-bold text-purple-300 transition-colors hover:bg-purple-600/40"
              title="Accès Développeur"
            >
              ⚙️ Dashboard
            </Link>

            <Link
              href="/connexion"
              className="text-[13px] font-medium text-white/78 transition-colors hover:text-white"
            >
              Se connecter
            </Link>
            <Link
              href="/inscription"
              className="rounded-[4px] border border-white/20 px-4 py-[9px] text-[13px] font-semibold tracking-[0.01em] text-white transition-colors hover:bg-white/10"
            >
              S'inscrire
            </Link>
          </div>

          <a
            href={`tel:${PHONE_TEL}`}
            className="ml-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-mono text-[13px] font-semibold text-white transition-colors hover:bg-white/20 lg:ml-8"
          >
            <Phone size={14} className="text-accent" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <button
          className="ml-auto text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink px-[clamp(20px,4vw,28px)] py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/78 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a href={`tel:${PHONE_TEL}`} className="font-mono text-[12.5px] text-white/72 hover:text-white">
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/#commander"
              onClick={() => setMenuOpen(false)}
              className="rounded-[2px] bg-accent px-[18px] py-[11px] text-center text-[13px] font-semibold tracking-[0.01em] text-white hover:bg-accent-dark"
            >
              Commander une course
            </Link>
            <div className="flex flex-col gap-3 border-t border-white/10 pt-3">
              <Link
                href="/connexion"
                onClick={() => setMenuOpen(false)}
                className="text-[14px] font-medium text-white/78 hover:text-white"
              >
                Se connecter
              </Link>
              <Link
                href="/inscription"
                onClick={() => setMenuOpen(false)}
                className="rounded-[2px] border border-white/20 px-4 py-2 text-center text-[13px] font-semibold tracking-[0.01em] text-white hover:bg-white/10"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
