"use client";
/**
 * components/sections/MetricsMarquee.tsx
 * Métaphore visuelle : le flux d'une ville qui ne dort jamais.
 * Deux bandes défilant en sens opposés = le trafic dans les deux sens —
 * mais ici, le trafic avance toujours. Jamais bloqué.
 * La pause au hover = l'instant de concentration avant de reprendre la course.
 */
import { useRef, useState } from "react";

const METRICS_TOP = [
  "EXPRESS 45 MIN",
  "TRAÇABILITÉ GPS TEMPS RÉEL",
  "DISPONIBLE 7J/7",
  "REMISE EN MAIN PROPRE",
  "SIGNATURE NUMÉRIQUE",
  "ZÉRO ÉMISSION BLOQUÉE",
];

const METRICS_BOTTOM = [
  "+12 000 COURSES LIVRÉES",
  "98% À L'HEURE",
  "NOTE 4.9/5",
  "PARIS & GRANDE COURONNE",
  "PARTENAIRES CERTIFIÉS",
  "ASSURANCE TOUS RISQUES",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-4 mx-6">
      <span
        className="text-bone"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          letterSpacing: "0.15em",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
      <span className="text-signal text-sm">●</span>
    </span>
  );
}

interface MarqueeRowProps {
  items: string[];
  direction: "left" | "right";
}

function MarqueeRow({ items, direction }: MarqueeRowProps) {
  const [paused, setPaused] = useState(false);

  // On duplique les items pour créer la boucle infinie
  const allItems = [...items, ...items];

  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div
      className="relative overflow-hidden py-4 border-y border-concrete/40 group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Gradient fade aux bords */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-void to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-void to-transparent pointer-events-none" />

      {/* Bande défilante */}
      <div
        className="flex whitespace-nowrap"
        style={{
          animationName,
          animationDuration: "28s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {allItems.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}

export default function MetricsMarquee() {
  return (
    <section className="py-0 bg-void overflow-hidden">
      {/* Séparateur signal */}
      <div className="h-px bg-signal mx-[5vw] mb-0" />

      <div className="flex flex-col gap-0">
        <MarqueeRow items={METRICS_TOP} direction="left" />
        <MarqueeRow items={METRICS_BOTTOM} direction="right" />
      </div>

      <div className="h-px bg-concrete mx-[5vw] mt-0" />
    </section>
  );
}
