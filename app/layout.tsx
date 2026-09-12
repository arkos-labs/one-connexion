/**
 * app/layout.tsx
 * Shell principal : Lenis smooth scroll, Preloader,
 * variables de polices, meta SEO.
 * Lenis synchronisé avec le RAF de Framer Motion via lenis.raf().
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ONE CONNEXION — Livraison Express 2 Roues | Dernier Kilomètre Premium",
  description:
    "Service de livraison express en 2 roues à Paris et Île-de-France. Plis confidentiels, colis urgents santé, e-commerce : livrés en 45 min, traçabilité GPS, remise en main propre. Disponible 7j/7.",
  keywords: ["livraison express Paris", "coursier moto", "livraison 2 roues", "dernier kilomètre", "plis confidentiels", "coursier juridique"],
  openGraph: {
    title: "ONE CONNEXION — Livraison Express 2 Roues",
    description: "La logistique du dernier kilomètre réinventée par l'agilité du 2 roues.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/hero-poster.jpg", width: 1920, height: 1080, alt: "ONE CONNEXION — Coursier premium Paris" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ONE CONNEXION — Livraison Express 2 Roues",
    description: "La logistique du dernier kilomètre réinventée par l'agilité du 2 roues.",
    images: ["/hero-poster.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Preconnect Fontshare (Clash Display) */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        {/* Preconnect Google Fonts (JetBrains Mono) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="bg-surface text-ink antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
