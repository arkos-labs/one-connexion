/**
 * lib/animations.ts
 * Grammaire d'animation de la marque ONE CONNEXION.
 * Tous les variants Framer Motion partagés sont ici — jamais inline dans les composants.
 * L'easing "expo-out" [0.16, 1, 0.3, 1] est la signature : sensation de "chute freinée nette".
 */
import { Variants } from "framer-motion";

// ── Easings signature ─────────────────────────────────────────────────────
export const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_HOVER    = [0.25, 1, 0.5, 1] as const;
export const EASE_SHARP_IN = [0.7, 0, 0.84, 0] as const;

// Durées standards
export const DUR_FAST   = 0.4;
export const DUR_MEDIUM = 0.7;
export const DUR_SLOW   = 1.1;

// ── Détection prefers-reduced-motion ─────────────────────────────────────
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ── Variant : Mask Reveal (mot par mot) ──────────────────────────────────
// Métaphore : les mots émergent de sous la ligne comme une plaque de métal
// poussée depuis en-dessous — sensation de force contenue relâchée.
export const maskRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

export const maskRevealChild: Variants = {
  hidden: {
    y: "105%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: DUR_SLOW,
      ease: EASE_EXPO_OUT,
    },
  },
};

// Variante réduite (prefers-reduced-motion)
export const maskRevealChildReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "linear" },
  },
};

// ── Variant : Fade Up ────────────────────────────────────────────────────
export const fadeUpContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpChild: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DUR_MEDIUM,
      ease: EASE_EXPO_OUT,
    },
  },
};

// ── Variant : Fade In simple ─────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR_MEDIUM, ease: EASE_EXPO_OUT },
  },
};

// ── Variant : Slide In depuis la gauche / droite ─────────────────────────
export const slideInLeft: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: DUR_SLOW,
      ease: EASE_EXPO_OUT,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: DUR_SLOW,
      ease: EASE_EXPO_OUT,
    },
  },
};

// ── Variant : Scale depuis le centre (véhicules fleet) ───────────────────
export const scaleIn: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: DUR_SLOW,
      ease: EASE_EXPO_OUT,
    },
  },
};

// ── Variant : Preloader exit ─────────────────────────────────────────────
export const preloaderExit: Variants = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  exit: {
    clipPath: "inset(50% 0% 50% 0%)",
    transition: {
      duration: 1.2,
      ease: EASE_EXPO_OUT,
      delay: 0.2,
    },
  },
};

export const preloaderCounterExit: Variants = {
  hidden: { scale: 1, opacity: 1 },
  exit: {
    scale: 20,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: EASE_SHARP_IN,
    },
  },
};

// ── Helper : split texte en mots pour mask-reveal ────────────────────────
export function splitWords(text: string): string[] {
  return text.split(" ");
}

// ── Helper : split texte en caractères ───────────────────────────────────
export function splitChars(text: string): string[] {
  return text.split("");
}
