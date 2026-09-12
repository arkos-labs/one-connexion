"use client";
/**
 * components/Preloader.tsx
 * Métaphore visuelle : un compte à rebours de lancement.
 * Le chiffre gonfle jusqu'à remplir l'écran puis explose —
 * révélant le Hero déjà en mouvement derrière.
 * Le rideau haut/bas (clip-path) est la métaphore du "starting gate" :
 * les barrières s'ouvrent, la course commence.
 */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_EXPO_OUT, EASE_SHARP_IN } from "@/lib/animations";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"count" | "exit">("count");
  const [show, setShow] = useState(true);
  const rafRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // RAF synchronisé — durée 1.8s pour laisser les assets charger
    const DURATION = 1800;

    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      // Ease out cubic pour l'accélération initiale et la décélération finale
      const eased = 1 - Math.pow(1 - raw, 3);
      const val = Math.floor(eased * 100);

      setProgress(val);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // 100% atteint → phase exit
        setTimeout(() => {
          setPhase("exit");
          setTimeout(() => {
            setShow(false);
            onComplete();
          }, 1400);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] bg-void flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        >
          {/* Panneau haut */}
          <motion.div
            className="absolute top-0 left-0 right-0 bg-void origin-top z-10"
            initial={{ scaleY: 0 }}
            animate={phase === "exit" ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 1.0,
              ease: EASE_EXPO_OUT,
              delay: phase === "exit" ? 0.1 : 0,
            }}
            style={{ height: "51%", transformOrigin: "top" }}
          />

          {/* Panneau bas */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-void origin-bottom z-10"
            initial={{ scaleY: 0 }}
            animate={phase === "exit" ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 1.0,
              ease: EASE_EXPO_OUT,
              delay: phase === "exit" ? 0.1 : 0,
            }}
            style={{ height: "51%", transformOrigin: "bottom" }}
          />

          {/* Compteur géant */}
          <motion.div
            className="relative z-20 select-none"
            animate={phase === "exit" ? {
              scale: 20,
              opacity: 0,
            } : {
              scale: 1,
              opacity: 1,
            }}
            transition={phase === "exit" ? {
              duration: 0.7,
              ease: EASE_SHARP_IN,
            } : {}}
          >
            <span
              className="text-bone font-mono-brand leading-none"
              style={{
                fontSize: "clamp(6rem, 20vw, 18rem)",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
                letterSpacing: "-0.05em",
              }}
            >
              {String(progress).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Label bas */}
          <motion.div
            className="absolute bottom-[5vw] left-[5vw] label-mono text-fog"
            animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            — CHARGEMENT EN COURS
          </motion.div>

          {/* Barre de progression fine */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-signal"
            style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
