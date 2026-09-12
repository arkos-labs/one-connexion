/**
 * components/sections/Services.tsx
 * "Prestations" — quatre métiers, chacun avec sa procédure propre.
 */
const SERVICES = [
  {
    tag: "01 — Juridique & notarial",
    title: "Plis confidentiels",
    body: "Remise contre signature, chaîne de responsabilité documentée, coursiers dédiés aux cabinets et études.",
    note: "Preuve de dépôt horodatée",
  },
  {
    tag: "02 — Santé & laboratoires",
    title: "Transports urgents",
    body: "Prélèvements, pièces critiques et matériel technique. Contenants isothermes et relevés de température à la demande.",
    note: "Course dédiée, sans regroupement",
  },
  {
    tag: "03 — E-commerce",
    title: "Livraison jour même",
    body: "Collecte en boutique ou en entrepôt, livraison dans la journée sur Paris et première couronne. Créneaux au choix du destinataire.",
    note: "Tournées récurrentes possibles",
  },
  {
    tag: "04 — Comptes entreprises",
    title: "Suivi & facturation",
    body: "Position en temps réel, justificatifs de livraison archivés, facturation mensuelle centralisée et export comptable.",
    note: "Interlocuteur unique",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,28px)] py-[104px]">
      <div className="mb-14 grid items-end gap-12 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <div className="mb-5 font-mono text-[11px] tracking-[0.16em] text-accent-dark uppercase">
            Prestations
          </div>
          <h2 className="text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.08] tracking-[-0.03em]">
            Quatre métiers, un même niveau d&rsquo;exigence.
          </h2>
        </div>
        <p className="min-w-0 max-w-[52ch] text-pretty text-[16.5px] leading-[1.65] text-muted">
          Chaque secteur a ses contraintes : signature manuscrite, chaîne du froid,
          créneau de réception. Nos procédures sont écrites par type de flux, pas
          improvisées à la course.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-3.5 border border-line bg-paper-card px-[30px] pb-[30px] pt-[34px]"
          >
            <div className="font-mono text-[10px] tracking-[0.16em] text-label uppercase">
              {service.tag}
            </div>
            <h3 className="text-xl font-bold tracking-[-0.02em]">{service.title}</h3>
            <p className="text-[15px] leading-[1.6] text-muted">{service.body}</p>
            <div className="mt-auto pt-5 font-mono text-[10.5px] tracking-[0.1em] text-accent-dark uppercase">
              {service.note}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
