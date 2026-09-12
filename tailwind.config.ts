/**
 * tailwind.config.ts
 * Design system tokens pour ONE CONNEXION.
 * Chaque couleur, chaque rayon, chaque easing est une décision assumée.
 * Aucune valeur par défaut Tailwind n'est utilisée pour les couleurs de marque.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fonds — une échelle de noirs industriels, pas du noir pur
        void: "#050505",      // fond absolu
        asphalt: "#111113",   // fond secondaire, cartes
        concrete: "#1C1C1F",  // bordures, dividers

        // Textes
        fog: "#8A8A8E",       // texte secondaire
        bone: "#F5F4F0",      // texte principal (jamais #FFFFFF pur)

        // Accents
        signal: "#FF4500",    // Orange — CTA, hover, accents vitesse
        "signal-dim": "rgba(255, 69, 0, 0.13)", // glow/halo subtil
        volt: "#CFFF04",      // jaune électrique — badges Express, highlights ponctuels
      },
      borderRadius: {
        brand: "2px", // radius quasi nul = sensation "outil industriel", pas "app mignonne"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Scale typographique desktop avec fluid clamp
        "hero": ["clamp(3.5rem, 8vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "h2": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "h3": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "label": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.2em" }],
        "body": ["1.125rem", { lineHeight: "1.6" }],
      },
      spacing: {
        // Marges externes de grille
        "gutter": "5vw",
        "gutter-mobile": "6vw",
      },
      keyframes: {
        // Marquee — deux bandes en sens opposés
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        // Rotation conique pour bordure CTA
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Pulsation subtile du glow
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        // Clignotement curseur scroll
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 20s linear infinite",
        "marquee-right": "marquee-right 20s linear infinite",
        "spin-slow": "spin-slow 3s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "blink": "blink 1.2s ease-in-out infinite",
      },
      backgroundImage: {
        // Gradient signature : fond void vers transparent (overlays hero)
        "void-fade-b": "linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,0.7), rgba(5,5,5,1))",
        // Grain noise SVG encodé en base64 (appliqué via CSS)
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
