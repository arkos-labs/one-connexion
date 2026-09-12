/**
 * app/page.tsx
 * Page principale — assemblage narratif des sections dans l'ordre émotionnel :
 * VITESSE + ACTION (Hero, qui porte désormais tout l'appel à l'action)
 * → FIABILITÉ (Services + Trust)
 * L'ancien bloc CTA de fin de page a été retiré : il faisait doublon, tout
 * en bas, loin du hero. L'appel à l'action vit maintenant uniquement dans
 * le hero, renforcé (voir HeroKinetic).
 */
import HeroKinetic from "@/components/sections/HeroKinetic";
import BentoServices from "@/components/sections/BentoServices";
import MetricsMarquee from "@/components/sections/MetricsMarquee";
import TrustSocialProof from "@/components/sections/TrustSocialProof";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation fixe */}
      <Header />

      {/* ── VITESSE + ACTION ────────────────────────────────────────── */}
      <HeroKinetic />

      {/* Bande marquee juste après le Hero — momentum continu */}
      <MetricsMarquee />

      {/* ── FIABILITÉ ───────────────────────────────────────────────── */}
      <BentoServices />

      <TrustSocialProof />

      {/* Footer */}
      <Footer />
    </>
  );
}
