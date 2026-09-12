/**
 * components/Footer.tsx
 * Footer sobre en 4 colonnes + bandeau légal. Aucune interactivité
 * client requise : Server Component.
 */
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { EMAIL, FOUNDED_YEAR, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-content";

// Ancres préfixées par "/" : nues, elles ne résolvent rien depuis une sous-page.
const COMPANY_LINKS = [
  { label: "Notre méthode", href: "/methode" },
  { label: "Flotte & couverture", href: "/flotte" },
  { label: "Devenir coursier partenaire", href: "/#contact" },
  { label: "Mentions légales", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-[clamp(20px,4vw,28px)] pb-8 pt-[72px] sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-[17px] font-extrabold tracking-[-0.02em] text-white">ONE</span>
            <span className="text-[17px] font-extrabold tracking-[-0.02em] text-accent">CONNEXION</span>
          </div>
          <p className="max-w-[30ch] text-sm leading-relaxed">
            Coursier B2B en deux-roues. Paris et petite couronne, 7j/7 de 7h à 23h.
          </p>
        </div>

        <div className="min-w-0">
          <div className="mb-[18px] font-mono text-[10px] tracking-[0.16em] text-white/38 uppercase">
            Prestations
          </div>
          <div className="grid gap-2.5 text-sm">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-white/70 hover:text-white"
              >
                {service.card.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-[18px] font-mono text-[10px] tracking-[0.16em] text-white/38 uppercase">
            Société
          </div>
          <div className="grid gap-2.5 text-sm">
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-[18px] font-mono text-[10px] tracking-[0.16em] text-white/38 uppercase">
            Contact
          </div>
          <div className="grid gap-2.5 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="text-white/70 hover:text-white">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-white">
              {EMAIL}
            </a>
            <span>Paris &amp; Île-de-France</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-start justify-between gap-x-7 gap-y-3 px-[clamp(20px,4vw,28px)] py-5 font-mono text-[10.5px] leading-relaxed tracking-[0.12em] text-white/34 uppercase">
          {/* PLACEHOLDER : SIREN à renseigner avant mise en ligne. */}
          <span className="min-w-0 shrink">
            © {FOUNDED_YEAR}–2026 One Connexion · Tous droits réservés
          </span>
          <span className="min-w-0 shrink">SIREN à renseigner · Assurance marchandises 3,5 M€</span>
        </div>
      </div>
    </footer>
  );
}
