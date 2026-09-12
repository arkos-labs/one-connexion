"use client";
/**
 * components/sections/BentoServices.tsx
 * Métaphore visuelle : un tableau de bord de cockpit modulaire.
 * Chaque case est une mission spécifique — précise, dédiée, sans fioritures.
 * La bordure lumineuse qui suit le curseur = le faisceau d'une lampe torche
 * qui révèle ce qui est important là où vous regardez.
 * Grille asymétrique : rupture du grid régulier = signal que l'offre n'est pas banale.
 */
import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Zap, Package, Shield } from "lucide-react";
import { EASE_EXPO_OUT, fadeUpContainer, fadeUpChild } from "@/lib/animations";

interface ServiceCard {
  id: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  tag: string;
  title: string;
  description: string;
  colSpan?: string;
  rowSpan?: string;
  accent?: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: "confidential",
    icon: Lock,
    tag: "Juridique & Notarial",
    title: "Plis confidentiels",
    description: "Avocats, notaires, huissiers. Chaîne de custody documentée, remise contre signature numérique. La confidentialité n'est pas une option, c'est notre architecture.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: "health",
    icon: Zap,
    tag: "Médical & Tech",
    title: "Urgences santé & tech",
    description: "Prélèvements médicaux, pièces critiques. La minute compte, on la gagne — chaque fois.",
    accent: "volt",
  },
  {
    id: "ecommerce",
    icon: Package,
    tag: "E-commerce",
    title: "Express dernier km",
    description: "Vos clients commandent à midi, reçoivent avant le dîner. Le dernier kilomètre devient un avantage concurrentiel.",
  },
  {
    id: "security",
    icon: Shield,
    tag: "Garantie",
    title: "Traçabilité GPS temps réel",
    description: "Position live, confirmation de remise, audit trail complet. Zéro zone d'ombre.",
    colSpan: "md:col-span-2",
  },
];

// ── Carte Bento ───────────────────────────────────────────────────────────
function BentoCard({ service, index }: { service: ServiceCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Bordure lumineuse qui suit le curseur
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,69,0,0.12), transparent 40%)`;
    glow.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }, []);

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUpChild}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-brand border border-border-light bg-surface-alt group ${service.colSpan || ""} ${service.rowSpan || ""}`}
      style={{ minHeight: service.rowSpan ? "320px" : "170px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: EASE_EXPO_OUT }}
      data-cursor="hover"
    >
      {/* Glow radial suivant le curseur */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
      />

      {/* Bordure signal subtile au hover (gradient conique) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-brand"
        style={{
          background: "linear-gradient(135deg, rgba(255,69,0,0.3), transparent 50%, rgba(255,69,0,0.1))",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
        {/* Header carte */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="p-2.5 border border-concrete rounded-brand bg-void"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: EASE_EXPO_OUT }}
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className={`${service.accent === "volt" ? "text-volt" : "text-signal"}`}
            />
          </motion.div>

          {service.accent === "volt" && (
            <span
              className="label-mono text-void bg-volt px-2 py-1 rounded-brand"
              style={{ fontSize: "0.55rem" }}
            >
              EXPRESS
            </span>
          )}
        </div>

        {/* Label */}
        <p className="label-mono text-ink-soft mb-3">— {service.tag}</p>

        {/* Titre */}
        <h3
          className="text-ink font-display mb-4 leading-tight"
          style={{
            fontSize: service.rowSpan ? "clamp(1.6rem, 3vw, 2.2rem)" : "clamp(1.1rem, 2vw, 1.5rem)",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-ink-soft" style={{ fontSize: "0.9375rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
          {service.description}
        </p>

        {/* Indicateur bas */}
        <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-signal text-xs" style={{ fontFamily: "var(--font-mono)" }}>En savoir plus</span>
          <span className="w-8 h-px bg-signal group-hover:w-12 transition-all duration-500" style={{ transitionTimingFunction: "var(--ease-expo-out)" }} />
        </div>
      </div>
    </motion.div>
  );
}

// ── Section Bento ─────────────────────────────────────────────────────────
export default function BentoServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 md:py-20 px-[5vw] bg-surface">
      {/* Section header */}
      <motion.div
        ref={ref}
        className="mb-10 md:mb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUpContainer}
      >
        <motion.p variants={fadeUpChild} className="label-mono text-ink-soft mb-4 flex items-center gap-3">
          <span className="text-signal">●</span>
          — NOS SERVICES
        </motion.p>
        <motion.h2
          variants={fadeUpChild}
          className="text-ink font-display leading-[0.95]"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            maxWidth: "700px",
          }}
        >
          Chaque mission, une spécialité.
        </motion.h2>
        <motion.p
          variants={fadeUpChild}
          className="text-ink-soft mt-4 max-w-lg"
          style={{ fontSize: "1.0625rem", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
        >
          Nous ne faisons pas "de la livraison" — nous résolvons des problèmes de timing critique pour des secteurs exigeants.
        </motion.p>
      </motion.div>

      {/* Grille asymétrique */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
        variants={fadeUpContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {SERVICES.map((service, i) => (
          <BentoCard key={service.id} service={service} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
