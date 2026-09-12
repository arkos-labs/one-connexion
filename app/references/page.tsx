import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";
import { Scale, Activity, Briefcase, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Nos références et clients partenaires — ONE CONNEXION",
  description: "Découvrez les professionnels qui font confiance à One Connexion pour leurs besoins en transport express et livraisons urgentes à Paris et en Île-de-France.",
};

const SECTEURS = [
  {
    icon: <Scale className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Secteur Juridique",
    desc: "Acheminement sécurisé de dossiers confidentiels, significations d'actes et dépôts en juridiction avec signature certifiée et horodatée.",
  },
  {
    icon: <Activity className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Secteur Médical",
    desc: "Transport urgent de prélèvements, d'échantillons biologiques et de matériel médical avec un respect absolu des normes d'hygiène et de discrétion.",
  },
  {
    icon: <Briefcase className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Corporate & Agences",
    desc: "Livraison de maquettes, prototypes, contrats ou cadeaux d'affaires pour les directions générales, agences de publicité et sociétés de conseil.",
  },
  {
    icon: <ShoppingBag className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "E-commerce Premium",
    desc: "Logistique du dernier kilomètre pour les boutiques de luxe et l'e-commerce exigeant, garantissant une expérience client d'excellence.",
  }
];

export default function ReferencesPage() {
  return (
    <main>
      <section className="relative bg-ink text-white" style={{ backgroundImage: "url('/images/references-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-ink/85"></div>
        <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)] pt-20 pb-16">
          <h1 className="mb-6 text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.03em]">
            Nos Références
          </h1>
          <p className="max-w-[60ch] text-[17px] leading-[1.6] text-white/70">
            Des entreprises exigeantes — cabinets juridiques, laboratoires, agences de communication et e-commerçants — nous font confiance au quotidien. Nous sommes fiers de bâtir des relations durables basées sur la performance, la ponctualité et une qualité de service irréprochable.
          </p>
        </div>
      </section>
      
      <References hideHeader={true} />

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)] py-24">
        <div className="mb-5 font-mono text-[11px] tracking-[0.16em] text-accent-dark uppercase">
          Secteurs d'expertise
        </div>
        <h2 className="mb-14 max-w-[24ch] text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] tracking-[-0.03em]">
          Des solutions sur-mesure pour chaque industrie.
        </h2>
        
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {SECTEURS.map((item, index) => (
            <div key={index} className="flex flex-col">
              {item.icon}
              <h3 className="mb-3 text-lg font-bold tracking-[-0.01em]">{item.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)] pb-24">
        <div className="border-t border-line pt-20">
          <h2 className="mb-8 text-[clamp(24px,2.5vw,32px)] font-bold leading-[1.2] tracking-[-0.02em]">
            La confiance des décideurs franciliens
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-[15.5px] leading-[1.7] text-muted">
            <div>
              <p className="mb-4">
                Dans un environnement économique hyperconcurrentiel, la fiabilité de la <strong>supply chain urbaine</strong> est un différenciateur majeur. En choisissant <strong>One Connexion</strong> comme partenaire pour votre <strong>livraison express à Paris</strong>, vous rejoignez un réseau d'entreprises de premier plan qui exigent l'excellence opérationnelle. 
              </p>
              <p>
                Qu'il s'agisse de sécuriser le <strong>transport de documents confidentiels</strong> pour un cabinet d'avocats ou de garantir la <strong>livraison urgente de colis</strong> pour un laboratoire, nos protocoles de manutention s'adaptent aux normes strictes de chaque secteur d'activité, assurant une parfaite maîtrise des risques.
              </p>
            </div>
            <div>
              <p className="mb-4">
                La fidélité de nos clients atteste de la constance de notre <strong>service de coursier B2B</strong>. Notre capacité à maintenir des statistiques de ponctualité exceptionnelles en <strong>Île-de-France</strong> résulte d'une organisation millimétrée, d'une flotte exclusive de deux-roues et de dispatcheurs dédiés à la supervision continue de chaque expédition.
              </p>
              <p>
                L'externalisation de vos courses auprès d'une <strong>société de coursiers spécialisée</strong> garantit la pérennité de votre image de marque auprès de vos propres partenaires. Faites le choix de l'exigence et bénéficiez d'une synergie logistique capable de soutenir la croissance de vos opérations les plus stratégiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
