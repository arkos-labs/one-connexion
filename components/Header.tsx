"use client";
/**
 * components/Header.tsx
 * Métaphore visuelle : une vitre de cockpit — transparente en vitesse,
 * elle se teinte (backdrop-blur) quand le pilote ralentit pour observer.
 * Le logo est réduit à l'essentiel : une marque industrielle, pas un ornement.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE_EXPO_OUT, fadeUpContainer, fadeUpChild } from "@/lib/animations";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#hero" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => {
      setScrolled(v > 80);
    });
  }, [scrollY]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        animate={{
          backgroundColor: scrolled ? "rgba(5,5,5,0.85)" : "rgba(5,5,5,0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderBottomColor: scrolled ? "rgba(28,28,31,1)" : "rgba(28,28,31,0)",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
        }}
        transition={{ duration: 0.4, ease: EASE_EXPO_OUT }}
      >
        <div className="flex items-center justify-between px-[5vw] py-5">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" data-cursor="hover">
            {/* Losange signal */}
            <div className="w-2 h-2 rotate-45 bg-signal flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
            <span
              className="text-bone font-display font-semibold tracking-tight"
              style={{ fontSize: "1.0625rem", fontFamily: "var(--font-display)" }}
            >
              ONE CONNEXION
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="label-mono text-fog hover:text-bone transition-colors duration-300 relative group"
                data-cursor="hover"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-signal group-hover:w-full transition-all duration-300" style={{ transitionTimingFunction: "var(--ease-expo-out)" }} />
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#hero"
              className="label-mono px-5 py-2.5 border border-signal text-signal rounded-brand hover:bg-signal hover:text-void transition-all duration-300 relative overflow-hidden group"
              style={{ transitionTimingFunction: "var(--ease-expo-out)" }}
              data-cursor="hover"
            >
              <span className="relative z-10">Devenir partenaire</span>
            </a>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden text-bone p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            data-cursor="hover"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[200] bg-void flex flex-col px-[6vw] py-8"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE_EXPO_OUT }}
          >
            {/* Header du menu */}
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rotate-45 bg-signal" />
                <span className="text-bone font-display font-semibold" style={{ fontSize: "1.0625rem", fontFamily: "var(--font-display)" }}>
                  ONE CONNEXION
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-fog hover:text-bone transition-colors"
                aria-label="Fermer"
                data-cursor="hover"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Liens en stagger */}
            <motion.nav
              className="flex flex-col gap-2 flex-1"
              variants={fadeUpContainer}
              initial="hidden"
              animate="visible"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.label} variants={fadeUpChild} className="mask-parent overflow-hidden border-b border-concrete pb-4">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-bone font-display block"
                    style={{
                      fontSize: "clamp(2rem, 8vw, 4rem)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                    data-cursor="hover"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* CTA mobile */}
            <motion.a
              href="#hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE_EXPO_OUT }}
              className="label-mono px-6 py-4 border border-signal text-signal text-center rounded-brand mt-8"
              onClick={() => setMenuOpen(false)}
              data-cursor="hover"
            >
              Devenir partenaire
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
