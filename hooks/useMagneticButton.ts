"use client";
/**
 * hooks/useMagneticButton.ts
 * Effet magnétique : le bouton est "attiré" vers le curseur dans un rayon de 80px.
 * Le conteneur bouge à 30% de la distance curseur/centre.
 * Le texte interne bouge à 50% de l'amplitude (parallax imbriqué).
 * Sensation : l'objet possède une gravité propre — il "appelle" le curseur.
 */
import { useRef, useEffect, useState } from "react";
import { useSpring, useMotionValue, MotionValue } from "framer-motion";

interface MagneticResult {
  ref: React.RefObject<HTMLElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

export function useMagneticButton(radius = 80): MagneticResult {
  const ref = useRef<HTMLElement | null>(null);

  // Valeurs brutes
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawTextX = useMotionValue(0);
  const rawTextY = useMotionValue(0);

  // Springs pour retour fluide (EASE_HOVER approximé)
  const x = useSpring(rawX, { stiffness: 200, damping: 20 });
  const y = useSpring(rawY, { stiffness: 200, damping: 20 });
  const textX = useSpring(rawTextX, { stiffness: 200, damping: 20 });
  const textY = useSpring(rawTextY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        // Dans le rayon magnétique
        rawX.set(dx * 0.3);
        rawY.set(dy * 0.3);
        rawTextX.set(dx * 0.5);
        rawTextY.set(dy * 0.5);
      } else {
        rawX.set(0);
        rawY.set(0);
        rawTextX.set(0);
        rawTextY.set(0);
      }
    };

    const handleMouseLeave = () => {
      rawX.set(0);
      rawY.set(0);
      rawTextX.set(0);
      rawTextY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [radius, rawX, rawY, rawTextX, rawTextY]);

  return { ref, x, y, textX, textY };
}
