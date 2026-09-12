/**
 * app/page.tsx
 * Page principale — refonte complète dans un registre sérieux :
 * Hero → Prestations → Méthode → Flotte & couverture → Références → Contact.
 */
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Methode from "@/components/sections/Methode";
import Flotte from "@/components/sections/Flotte";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Methode />
      <Flotte />
      <References />
      <Contact />
      <Footer />
    </>
  );
}
