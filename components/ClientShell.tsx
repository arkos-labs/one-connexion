"use client";
/**
 * components/ClientShell.tsx
 * Wrapper client pour tout ce qui ne peut pas être en Server Component :
 * Lenis smooth scroll, Preloader.
 * Lenis est initialisé ici et synchronisé avec le RAF natif.
 * Framer Motion useScroll fonctionne nativement avec Lenis car Lenis
 * émet des événements scroll sur window.
 * (Le curseur custom a été retiré : le halo/point flottant se plaçait
 * n'importe où au chargement — visible par-dessus le preloader — et
 * n'apportait rien à l'expérience. Curseur natif = plus fiable, plus pro.)
 */
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // ── Initialisation Lenis ──────────────────────────────────────────────
  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    // RAF loop
    let rafId: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
    };
  }, []);

  // ── Bloquer le scroll pendant le preloader ────────────────────────────
  useEffect(() => {
    if (!lenis) return;
    if (!preloaderDone) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [preloaderDone, lenis]);

  return (
    <>
      {/* Preloader (AnimatePresence gérée en interne) */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Contenu de la page */}
      <main>{children}</main>
    </>
  );
}
