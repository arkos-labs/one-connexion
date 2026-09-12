"use client";
/**
 * components/sections/TrustSocialProof.tsx
 * Métaphore visuelle : les références d'un professionnel aguerri.
 * Les chiffres s'animent comme des compteurs de course —
 * sensation d'un live, d'un compteur qui tourne en temps réel.
 * Les logos en grayscale = humilité et professionnalisme.
 * Au hover : ils reprennent leurs couleurs = reconnaissance, confiance révélée.
 */
import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { EASE_EXPO_OUT, fadeUpContainer, fadeUpChild } from "@/lib/animations";

// ── Chiffres clés ─────────────────────────────────────────────────────────
const METRICS = [
  { value: 12000, suffix: "+", label: "Courses livrées", prefix: "" },
  { value: 98, suffix: "%", label: "À l'heure", prefix: "" },
  { value: 4.9, suffix: "/5", label: "Note client", prefix: "" },
];

// ── Secteurs desservis — en attendant de vrais logos clients, on affiche un
// fait vérifiable (les secteurs qu'on sert) plutôt qu'une promesse de
// confiance vide ou de faux partenaires.
const SECTORS = [
  "Juridique & notarial",
  "Santé & médical",
  "E-commerce",
  "Tech & industrie",
];

// ── Count-up animé ────────────────────────────────────────────────────────
function CountUp({ value, suffix, prefix, label }: (typeof METRICS)[0]) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = isDecimal
              ? v.toFixed(1)
              : Math.floor(v).toLocaleString("fr-FR");
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value, isDecimal]);

  return (
    <div className="text-center md:text-left">
      <div
        className="text-ink font-display"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        <span ref={ref}>0</span>
        <span className="text-signal">{suffix}</span>
      </div>
      <p className="label-mono text-ink-soft mt-3">{label}</p>
    </div>
  );
}

// ── Section Trust ─────────────────────────────────────────────────────────
export default function TrustSocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-20 px-[5vw] bg-surface" ref={ref}>
      {/* Section label */}
      <motion.p
        className="label-mono text-ink-soft mb-10 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE_EXPO_OUT }}
      >
        <span className="text-signal">●</span>
        — LES CHIFFRES
      </motion.p>

      {/* Métriques count-up */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-12 pb-10 border-b border-border-light"
        variants={fadeUpContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {METRICS.map((metric) => (
          <motion.div key={metric.label} variants={fadeUpChild}>
            <CountUp {...metric} />
          </motion.div>
        ))}
      </motion.div>

      {/* Secteurs desservis */}
      <motion.div
        className="flex flex-wrap items-center gap-3 md:gap-4"
        variants={fadeUpContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          variants={fadeUpChild}
          className="label-mono text-ink-soft w-full md:w-auto mb-2 md:mb-0 md:mr-2"
        >
          Secteurs desservis :
        </motion.p>

        {SECTORS.map((sector) => (
          <motion.span
            key={sector}
            variants={fadeUpChild}
            className="label-mono text-ink-soft border border-border-light rounded-brand px-4 py-2 hover:text-ink hover:border-ink/30 transition-colors duration-300"
          >
            {sector}
          </motion.span>
        ))}
      </motion.div>

      {/* Témoignage */}
      <motion.div
        className="mt-12 p-8 md:p-10 border border-border-light rounded-brand bg-surface-alt max-w-2xl relative"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8, ease: EASE_EXPO_OUT }}
      >
        {/* Guillemet décoratif */}
        <span
          className="absolute top-6 right-8 text-signal/20 font-display"
          style={{ fontSize: "6rem", fontFamily: "var(--font-display)", lineHeight: 1, fontWeight: 700 }}
        >
          "
        </span>

        {/* PLACEHOLDER — à remplacer par un vrai témoignage client avant mise en ligne. */}
        <p className="label-mono text-signal mb-4 relative z-10">— Exemple à remplacer</p>
        <p
          className="text-ink mb-6 relative z-10"
          style={{ fontSize: "1.125rem", fontFamily: "var(--font-body)", lineHeight: 1.7, fontStyle: "italic" }}
        >
          « Emplacement réservé pour un vrai retour client : chaîne de remise,
          signature numérique, traçabilité temps réel... le témoignage viendra
          remplacer ce texte d'exemple. »
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-brand bg-signal/20 flex items-center justify-center">
            <span className="text-signal" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700 }}>?</span>
          </div>
          <div>
            <p className="text-ink" style={{ fontSize: "0.875rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              [Nom du client]
            </p>
            <p className="label-mono text-ink-soft">[Poste — Entreprise]</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
