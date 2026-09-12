import Flotte from "@/components/sections/Flotte";
import Contact from "@/components/sections/Contact";
import { ShieldCheck, MapPin, Gauge, Zap } from "lucide-react";

export const metadata = {
  title: "Notre flotte de coursiers moto et zone de couverture — ONE CONNEXION",
  description: "Découvrez notre flotte de coursiers deux-roues (moto et scooter) optimisée pour des livraisons express sans retard à Paris et dans toute l'Île-de-France.",
};

const VEHICLES = [
  {
    icon: <Zap className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Scooters agiles",
    desc: "Idéaux pour l'hyper-centre parisien, nos scooters se faufilent dans le trafic pour garantir des délais records sur les courtes distances.",
  },
  {
    icon: <Gauge className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Motos routières",
    desc: "Parfaites pour les longues distances vers la banlieue ou les aéroports. Elles assurent une livraison rapide même sur les axes très fréquentés d'Île-de-France.",
  },
  {
    icon: <ShieldCheck className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Équipement sécurisé",
    desc: "Tous nos véhicules sont équipés de top-cases étanches et verrouillés pour garantir l'intégrité absolue de vos plis, documents ou petits colis.",
  },
  {
    icon: <MapPin className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />,
    title: "Empreinte régionale",
    desc: "Du cœur de Paris jusqu'aux zones d'activités périphériques, notre flotte couvre l'intégralité de la région sans rupture de charge.",
  }
];

export default function FlottePage() {
  return (
    <main>
      <section className="relative bg-ink text-white" style={{ backgroundImage: "url('/images/flotte-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-ink/85"></div>
        <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)] pt-20 pb-16">
          <h1 className="mb-6 text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.03em]">
            Flotte &amp; Couverture
          </h1>
          <p className="max-w-[60ch] text-[17px] leading-[1.6] text-white/70">
            Une flotte de deux-roues optimisée pour la mobilité urbaine, nous permettant d'éviter les aléas de la circulation parisienne et les zones à trafic limité. Nous couvrons Paris, la petite couronne et l'ensemble de l'Île-de-France avec une réactivité inégalée.
          </p>
        </div>
      </section>
      
      <Flotte hideHeader={true} />

      <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)] py-24">
        <div className="mb-5 font-mono text-[11px] tracking-[0.16em] text-accent-dark uppercase">
          Nos véhicules
        </div>
        <h2 className="mb-14 max-w-[24ch] text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] tracking-[-0.03em]">
          Le bon véhicule pour chaque course.
        </h2>
        
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {VEHICLES.map((item, index) => (
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
            Une infrastructure dimensionnée pour l'hyper-mobilité urbaine
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-[15.5px] leading-[1.7] text-muted">
            <div>
              <p className="mb-4">
                Face à la densification du trafic francilien et aux restrictions de circulation, le déploiement d'une flotte exclusive de <strong>coursiers moto à Paris</strong> constitue l'unique réponse opérationnelle viable pour garantir le respect strict des délais. Nos véhicules légers s'affranchissent des contraintes urbaines, assurant une fluidité continue de vos expéditions.
              </p>
              <p>
                L'intégrité de vos biens matériels est notre priorité absolue. L'ensemble de notre <strong>flotte de deux-roues</strong> est équipé de compartiments sécurisés, hermétiques et inviolables, permettant le <strong>transport de petits colis</strong> (jusqu'à 18kg) et la <strong>livraison de documents confidentiels</strong> dans des conditions de protection et de discrétion optimales.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Notre <strong>zone de couverture coursier</strong> s'étend de manière stratégique sur l'ensemble du territoire francilien. De Paris intra-muros aux grands pôles économiques de l'<strong>Île-de-France</strong> (Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, et au-delà sur demande), nous assurons une continuité de service ininterrompue via un point de contact centralisé.
              </p>
              <p>
                Opter pour <strong>One Connexion</strong>, c'est s'adjoindre les compétences d'une <strong>société de coursiers spécialisée</strong> dans la haute exigence logistique. Nous transformons la contrainte du transport express en un avantage compétitif pour votre organisation, avec une fiabilité opérationnelle de chaque instant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
