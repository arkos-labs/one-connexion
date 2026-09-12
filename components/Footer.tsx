"use client";
/**
 * components/Footer.tsx
 * Footer dense en mono = la rigueur opérationnelle qui rassure.
 * (Le nom géant en filigrane sous le copyright a été retiré : à cet endroit,
 * juste après la mention légale, il faisait bug d'affichage plus qu'effet de style.)
 */
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Share2, Link2 } from "lucide-react";
import { EASE_EXPO_OUT } from "@/lib/animations";

const FOOTER_LINKS = {
  services: [
    { label: "Plis confidentiels", href: "#services" },
    { label: "Colis santé & tech", href: "#services" },
    { label: "E-commerce express", href: "#services" },
    { label: "Traçabilité GPS", href: "#services" },
  ],
  company: [
    { label: "À propos", href: "#about" },
    { label: "Devenir partenaire", href: "#hero" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ],
  // TODO(contenu) : remplacer par les vraies coordonnées avant mise en ligne.
  contact: [
    { label: "[Téléphone à renseigner]", href: "#", icon: Phone },
    { label: "contact@oneconnexion.fr", href: "mailto:contact@oneconnexion.fr", icon: Mail },
    { label: "Paris & Île-de-France", href: "#", icon: MapPin },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-void border-t border-concrete overflow-hidden">
      {/* ── Contenu structuré ───────────────────────────────────────────── */}
      <div className="px-[5vw] pt-16 pb-12 relative z-10">
        {/* Logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-16 pb-10 border-b border-concrete">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rotate-45 bg-signal flex-shrink-0" />
              <span
                className="text-bone font-display font-semibold"
                style={{ fontSize: "1.0625rem", fontFamily: "var(--font-display)" }}
              >
                ONE CONNEXION
              </span>
            </div>
            <p
              className="text-fog max-w-xs"
              style={{ fontSize: "0.9375rem", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
            >
              La logistique du dernier kilomètre réinventée par l&apos;agilité du 2 roues.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-concrete rounded-brand text-fog hover:text-bone hover:border-bone/40 transition-all duration-300"
              aria-label="Instagram"
              data-cursor="hover"
            >
              <Share2 size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-concrete rounded-brand text-fog hover:text-bone hover:border-bone/40 transition-all duration-300"
              aria-label="LinkedIn"
              data-cursor="hover"
            >
              <Link2 size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Colonnes de liens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Services */}
          <div>
            <p className="label-mono text-fog mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-fog hover:text-bone transition-colors duration-300"
                    style={{ fontSize: "0.875rem", fontFamily: "var(--font-body)" }}
                    data-cursor="hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="label-mono text-fog mb-5">Entreprise</p>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-fog hover:text-bone transition-colors duration-300"
                    style={{ fontSize: "0.875rem", fontFamily: "var(--font-body)" }}
                    data-cursor="hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2">
            <p className="label-mono text-fog mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-fog hover:text-bone transition-colors duration-300 group"
                      style={{ fontSize: "0.875rem", fontFamily: "var(--font-body)" }}
                      data-cursor="hover"
                    >
                      <Icon size={14} strokeWidth={1.5} className="text-signal flex-shrink-0" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Badge disponibilité */}
            <div className="mt-6 inline-flex items-center gap-2 border border-concrete rounded-brand px-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-volt animate-pulse" />
              <span className="label-mono text-fog">Disponible 7J/7 • 7h – 22h</span>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-concrete/50">
          <p className="label-mono text-fog/60">
            © {currentYear} One Connexion. Tous droits réservés.
          </p>
          <p className="label-mono text-fog/40">
            Paris & Île-de-France — [SIRET à renseigner]
          </p>
        </div>
      </div>
    </footer>
  );
}
