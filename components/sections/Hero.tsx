/**
 * components/sections/Hero.tsx
 * Section d'ouverture sombre : promesse, engagements de service chiffrés,
 * bandeau logos clients (placeholders en attente des vrais logos).
 */
import { FOUNDED_YEAR } from "@/lib/site-content";

const COMMITMENTS = [
  { label: "Prise en charge", value: "< 45 min" },
  { label: "Ponctualité constatée", value: "99,4 %" },
  { label: "Amplitude", value: "7j/7 · 7h–23h" },
  { label: "Devis", value: "sous 2 h" },
];

// PLACEHOLDER : logos clients à déposer avant mise en ligne.
const CLIENT_LOGO_SLOTS = 5;

export default function Hero() {
  return (
    <section id="top" className="border-b border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)]">
        <div className="grid items-end gap-14 pt-24 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <div className="mb-7 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              Transport urgent · Depuis {FOUNDED_YEAR}
            </div>
            <h1 className="mb-[26px] text-balance text-[clamp(40px,5.4vw,72px)] font-bold leading-[1.02] tracking-[-0.035em]">
              Le dernier kilomètre, tenu à l&rsquo;heure depuis {FOUNDED_YEAR}.
            </h1>
            <p className="mb-9 max-w-[56ch] text-pretty text-lg leading-[1.6] text-white/66">
              One Connexion opère les livraisons urgentes des cabinets juridiques,
              laboratoires et e-commerçants d&rsquo;Île-de-France. Une flotte deux-roues,
              une traçabilité complète, un interlocuteur unique.
            </p>
            <div className="mb-16 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-[2px] bg-accent px-[26px] py-[15px] text-[15px] font-semibold text-white hover:bg-accent-dark"
              >
                Ouvrir un compte entreprise
              </a>
              <a
                href="#services"
                className="rounded-[2px] border border-white/22 px-[26px] py-[15px] text-[15px] font-semibold text-white hover:border-white"
              >
                Voir les prestations
              </a>
            </div>
          </div>

          <div className="min-w-0 pb-16">
            <div className="border border-white/12 bg-white/[0.03]">
              <div className="flex items-center gap-3 border-b border-white/10 px-[26px] py-[18px] font-mono text-[10px] tracking-[0.16em] text-white/44 uppercase">
                <span className="h-px w-6 bg-accent" />
                Engagements de service
              </div>
              <dl className="divide-y divide-white/8">
                {COMMITMENTS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-4 px-[26px] py-[15px]"
                  >
                    <dt className="text-[13.5px] text-white/55">{item.label}</dt>
                    <dd className="text-[17px] font-bold tracking-[-0.015em] tabular-nums">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-[clamp(20px,4vw,28px)] py-7 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex shrink-0 items-center gap-3 font-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
            <span className="h-px w-6 bg-accent" />
            Ils nous confient leurs flux
          </div>
          {/* PLACEHOLDER : remplacer chaque libellé par le logo client (SVG monochrome). */}
          <div className="flex flex-1 divide-x divide-white/8">
            {Array.from({ length: CLIENT_LOGO_SLOTS }, (_, i) => (
              <div key={i} className="flex flex-1 items-center justify-center px-3">
                <span className="text-[13px] font-semibold tracking-[0.02em] text-white/25">
                  Client {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
