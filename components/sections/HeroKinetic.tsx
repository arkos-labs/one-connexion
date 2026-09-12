"use client";
/**
 * components/sections/HeroKinetic.tsx
 * Métaphore visuelle : un accélérateur de particules en pleine vitesse.
 * La vidéo est le moteur — chaude, floue, vivante.
 * Les mots émergent comme des plaques de métal chauffées à blanc.
 * "S'ARRÊTE" est barrée d'un trait signal : on ne subit pas le trafic, on le nie.
 * Le parallax de la vidéo au scroll = la sensation physique de prendre de la vitesse.
 */
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  EASE_EXPO_OUT,
  maskRevealContainer,
  maskRevealChild,
  splitWords,
} from "@/lib/animations";
import { useMagneticButton } from "@/hooks/useMagneticButton";

// ── Composant : Bouton magnétique CTA ────────────────────────────────────
interface MagneticCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

function MagneticCTA({ href, children, variant = "primary", className = "" }: MagneticCTAProps) {
  const { ref, x, y, textX, textY } = useMagneticButton(80);

  const isPrimary = variant === "primary";

  return (
    <motion.a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      style={{ x, y }}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-brand group ${className}`}
      data-cursor="hover"
    >
      {/* Fond et bordure */}
      {isPrimary ? (
        <>
          {/* Bouton principal signal */}
          <span className="absolute inset-0 bg-signal" />
          {/* Bordure conique animée (visible au hover) */}
          <span
            className="absolute inset-[-2px] rounded-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "conic-gradient(from 0deg, #FF4500, transparent, #FF4500)",
              animation: "spin-slow 3s linear infinite",
            }}
          />
          <span className="absolute inset-[2px] bg-signal rounded-brand" />
          {/* Glow radial */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-400 blur-2xl"
            style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)" }}
          />
        </>
      ) : (
        <>
          {/* Bouton fantôme */}
          <span className="absolute inset-0 border border-bone/30 rounded-brand group-hover:border-bone/70 transition-colors duration-300" />
        </>
      )}

      {/* Texte avec parallax interne */}
      <motion.span
        style={{ x: textX, y: textY }}
        className={`relative z-10 font-mono-brand text-label tracking-[0.15em] uppercase px-8 py-4 block ${
          isPrimary ? "text-void" : "text-bone"
        }`}
      >
        {children}
      </motion.span>
    </motion.a>
  );
}

// ── Composant : Mot avec mask-reveal ─────────────────────────────────────
function RevealWord({ word, isStrikethrough = false }: { word: string; isStrikethrough?: boolean }) {
  const ref = useRef(null);
  const [struck, setStruck] = useState(false);

  useEffect(() => {
    if (isStrikethrough) {
      const timer = setTimeout(() => setStruck(true), 1800);
      return () => clearTimeout(timer);
    }
  }, [isStrikethrough]);

  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
      <motion.span
        variants={maskRevealChild}
        className={`inline-block relative ${isStrikethrough ? "text-fog" : "text-bone"}`}
      >
        {word}
        {isStrikethrough && (
          <motion.span
            className="absolute left-0 top-1/2 h-[3px] bg-signal block"
            style={{ translateY: "-50%" }}
            initial={{ width: "0%" }}
            animate={struck ? { width: "110%" } : { width: "0%" }}
            transition={{ duration: 0.5, ease: EASE_EXPO_OUT, delay: 0.1 }}
          />
        )}
      </motion.span>
    </span>
  );
}

// ── Hero Principal ────────────────────────────────────────────────────────
export default function HeroKinetic() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const isInView   = useInView(sectionRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax vidéo : scale 1 → 1.15, opacity 1 → 0.4
  const videoScale   = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // Texte hero sort vers le haut au scroll
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const TITLE_LINE1 = ["LE", "TRAFIC"];
  const TITLE_LINE2 = ["S'ARRÊTE."];
  const TITLE_LINE3 = ["PAS", "NOUS."];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] flex flex-col items-start justify-end overflow-hidden"
    >
      {/* ── Vidéo / Image de fond ──────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        {/* Poster image (affiché avant la vidéo) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-poster.jpg')" }}
        />

        {/* Vidéo (si disponible) */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          preload="auto"
        >
          {/* Placeholder : remplacer par les vrais assets vidéo */}
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Overlays dégradés ──────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-void/40 via-void/65 to-void" />
      {/* Vignette latérale gauche — assez opaque et étendue pour que le titre
          ne se superpose jamais directement à la moto/au pilote de la photo. */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-void via-void/85 via-45% to-transparent" />

      {/* ── Contenu hero ──────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 px-[5vw] pb-[8vh] w-full"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Surtitre mono */}
        <motion.div
          className="label-mono text-fog mb-6 md:mb-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_EXPO_OUT, delay: 0.2 }}
        >
          <span className="text-signal">●</span>
          — LOGISTIQUE DERNIER KILOMÈTRE
        </motion.div>

        {/* Titre H1 — mask reveal mot par mot */}
        <motion.h1
          className="font-display leading-[0.88] mb-6 md:mb-8 max-w-[900px]"
          style={{
            fontSize: "clamp(3.2rem, 8vw, 9rem)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
          variants={maskRevealContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Ligne 1 */}
          <span className="block">
            {TITLE_LINE1.map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em]">
                <RevealWord word={word} />
              </span>
            ))}
          </span>

          {/* Ligne 2 — "S'ARRÊTE." avec barre animée */}
          <span className="block">
            <span className="inline-block mr-[0.2em]">
              <RevealWord word="S'ARRÊTE." isStrikethrough={true} />
            </span>
          </span>

          {/* Ligne 3 */}
          <span className="block">
            {TITLE_LINE3.map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em]">
                <RevealWord word={word} />
              </span>
            ))}
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-fog max-w-md mb-10 md:mb-12"
          style={{ fontSize: "1.0625rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_EXPO_OUT, delay: 1.2 }}
        >
          La logistique du dernier kilomètre réinventée par l&apos;agilité du 2 roues.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_EXPO_OUT, delay: 1.4 }}
        >
          <MagneticCTA href="#hero" variant="primary">
            Réserver une course
          </MagneticCTA>
          <MagneticCTA href="#services" variant="ghost">
            Voir les services
          </MagneticCTA>
        </motion.div>

        {/* Réassurance — récupérée de l'ancien bloc CTA de fin de page,
            fusionnée ici pour que l'appel à l'action soit unique et complet
            dès le hero, au lieu d'être dupliqué tout en bas de la page. */}
        <motion.p
          className="label-mono text-fog mt-6"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_EXPO_OUT, delay: 1.7 }}
        >
          Devis en 2 min — Première course dans l&apos;heure — 7j/7, 7h–22h
        </motion.p>
      </motion.div>

      {/* ── Indicateur scroll ──────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-[4vh] right-[5vw] z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="label-mono text-fog" style={{ writingMode: "vertical-rl" }}>SCROLL</span>
        <motion.div
          className="w-px bg-fog"
          animate={{ height: [8, 32, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <ArrowDown size={10} strokeWidth={1.5} className="text-fog" />
      </motion.div>
    </section>
  );
}
