"use client";
/**
 * components/Header.tsx
 * En-tête sticky sobre : logo, nav, téléphone, CTA. Toujours opaque
 * (pas de transparence-au-repos) — c'est le registre "société établie",
 * pas "landing page produit".
 */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-content";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Flotte", href: "#flotte" },
  { label: "Références", href: "#references" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center gap-8 px-[clamp(20px,4vw,28px)]">
        <a href="#top" className="flex items-baseline gap-2.5 text-white">
          <span className="text-[19px] font-extrabold tracking-[-0.02em]">ONE</span>
          <span className="text-[19px] font-extrabold tracking-[-0.02em] text-accent">CONNEXION</span>
        </a>

        <nav className="ml-auto hidden shrink-0 items-center gap-[22px] whitespace-nowrap md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/78 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 whitespace-nowrap md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-mono text-[12.5px] text-white/72 hover:text-white"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="rounded-[2px] bg-accent px-[18px] py-[11px] text-[13px] font-semibold tracking-[0.01em] text-white hover:bg-accent-dark"
          >
            Demander un devis
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
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/78 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a href={`tel:${PHONE_TEL}`} className="font-mono text-[12.5px] text-white/72 hover:text-white">
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-[2px] bg-accent px-[18px] py-[11px] text-center text-[13px] font-semibold tracking-[0.01em] text-white hover:bg-accent-dark"
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
