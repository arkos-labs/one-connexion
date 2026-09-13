import type { Zone } from "./types";

export const ZONES: Zone[] = [
  // ─────────────────────────────────────────────
  // PARIS INTRAMUROS — 20 arrondissements
  // ─────────────────────────────────────────────
    {
    slug: "paris-1er",
    dept: "75001",
    name: "Paris 1er",
    fullName: "Paris 1er arrondissement",
    category: "paris",
    landmarks: ["Louvre","Châtelet","Palais Royal","Les Halles","Pont Neuf","Place Vendôme"],
    intro: "Cœur historique et de pouvoir, le 1er arrondissement concentre une densité exceptionnelle de grands tribunaux, d'études notariales multiséculaires et de sièges sociaux de luxe. L'hypercentre parisien bouillonne d'une activité juridique et commerciale qui ne tolère aucun retard.",
    logisticsContext: "Avec la piétonnisation croissante (Halles, Louvre) et les restrictions ZFE, circuler dans le 1er est un défi. Nos coursiers en deux-roues électriques et scooters naviguent sans aucune contrainte entre la rue de Rivoli et l'Île de la Cité, garantissant des remises ultra-rapides.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts urgents de conclusions au Tribunal de Commerce et échanges d'actes authentiques entre les études du Palais Royal.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons premium en gants blancs pour les boutiques de haute joaillerie de la Place Vendôme et rue Saint-Honoré.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes confidentielles entre les directions générales et leurs partenaires financiers.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Acheminement rapide de prélèvements pour les cliniques et cabinets esthétiques du centre.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Logistique de dernière minute pour les événements professionnels sous la Canopée des Halles.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Facturation centralisée par dossier pour les cabinets d'avocats et gestionnaires de patrimoine.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Études Notariales","Haute Joaillerie (Vendôme)","Tribunaux (Île de la Cité)","Sièges sociaux"],
    distanceParis: "Hyper-centre",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 1er — Châtelet, Louvre, Vendôme | ONE CONNEXION",
      "description": "Coursier express Paris 1er (75001). Spécialiste des plis juridiques (Tribunal de Commerce) et livraisons luxe (Vendôme). Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 1er",
        "coursier Châtelet",
        "coursier Vendôme",
        "livraison express 75001"
      ]
    }
  },
  {
    slug: "paris-2e",
    dept: "75002",
    name: "Paris 2e",
    fullName: "Paris 2e arrondissement",
    category: "paris",
    landmarks: ["Bourse de Paris","Le Sentier","Opéra-Comique","Passages Couverts","Rue de la Paix"],
    intro: "Le 2e arrondissement mêle la frénésie de la finance autour de la Bourse à l'effervescence créative et textile du Sentier. C'est le carrefour où les start-ups technologiques côtoient les historiques du prêt-à-porter.",
    logisticsContext: "Les rues étroites du Sentier, souvent saturées de camionnettes de livraison, requièrent l'agilité de nos coursiers moto qui assurent des navettes fluides vers le 8e ou le 9e arrondissement en moins de 15 minutes.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Transfert sécurisé de documents financiers et d'audits pour les acteurs de la Bourse et les fintechs.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Réassort express et envois de prototypes textiles pour les showrooms du Sentier.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison mode"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Signatures de contrats d'affaires et statuts de start-ups.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Livraisons d'ordonnances et d'analyses pour les centres médicaux du quartier Bourse.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de décors et invitations pour les soirées de lancements tech.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Tournées inter-boutiques pour les enseignes de prêt-à-porter.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Showrooms (Le Sentier)","Start-ups & Fintechs","Cabinets de Conseil (Bourse)","Presse"],
    distanceParis: "Hyper-centre",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 2e — Bourse, Sentier, Start-ups | ONE CONNEXION",
      "description": "Coursier express Paris 2e (75002). Expert en livraison de prototypes (Sentier), plis financiers et navettes start-ups. Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 2e",
        "coursier Bourse",
        "coursier Sentier",
        "livraison mode Paris 2"
      ]
    }
  },
  {
    slug: "paris-3e",
    dept: "75003",
    name: "Paris 3e",
    fullName: "Paris 3e arrondissement",
    category: "paris",
    landmarks: ["Le Marais","Musée Picasso","Square du Temple","Rue de Bretagne"],
    intro: "Le 3e arrondissement (Haut Marais) est l'épicentre parisien du design, des galeries d'art et des marques branchées. Ses ruelles historiques abritent une clientèle exigeante nécessitant un service de livraison irréprochable et discret.",
    logisticsContext: "La circulation dans le Marais est particulièrement contrainte le week-end et en soirée. Nos coursiers utilisent des vélos cargos et scooters électriques pour préserver la quiétude du quartier tout en garantissant des délais records.",
    sectors: [
      {
        "name": "Événementiel",
        "example": "Transport sous haute protection de toiles et sculptures pour les vernissages des galeries du Marais.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport d'art"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraison premium (white-glove) de pièces de créateurs pour une clientèle VIP locale.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes de maquettes de design et press kits pour les agences de communication.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges d'actes pour les cabinets d'avocats spécialisés en propriété intellectuelle.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Liaisons urgentes entre pharmacies de quartier et laboratoires d'analyses.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Grands comptes",
        "example": "Accompagnement logistique lors des Fashion Weeks (Paris Fashion Week).",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Fashion Week"
      }
    ],
    keyClients: ["Galeries d'art contemporain","Boutiques de créateurs","Agences de relations presse","Designers"],
    distanceParis: "Hyper-centre",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 3e — Le Marais, Galeries d'Art | ONE CONNEXION",
      "description": "Coursier express Paris 3e (75003). Spécialiste du transport d'art, livraisons VIP pour les boutiques du Marais et agences RP. Discrétion et sécurité.",
      "keywords": [
        "coursier Paris 3e",
        "coursier Le Marais",
        "transport art Paris 3",
        "coursier luxe 75003"
      ]
    }
  },
  {
    slug: "paris-4e",
    dept: "75004",
    name: "Paris 4e",
    fullName: "Paris 4e arrondissement",
    category: "paris",
    landmarks: ["Notre-Dame","Hôtel de Ville","Centre Pompidou","Île Saint-Louis","Place des Vosges"],
    intro: "De l'Hôtel de Ville au Centre Pompidou, le 4e arrondissement est le cœur touristique et administratif de la capitale. Il abrite les instances municipales majeures ainsi qu'un tissu très dense de commerces et d'institutions culturelles.",
    logisticsContext: "Desservir l'Hôtel de Ville ou l'Île Saint-Louis nécessite une parfaite maîtrise des accès restreints et piétons. Nos coursiers accrédités assurent des dépôts officiels sans friction.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôt de dossiers administratifs et appels d'offres à l'Hôtel de Ville.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes de documents institutionnels avec les services de la mairie de Paris.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de scénographies pour les expositions du Centre Pompidou.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport d'art"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Distribution pour les boutiques de souvenirs et de mode du quartier Beaubourg.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'urgence pour l'Hôtel-Dieu (Île de la Cité).",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Grands comptes",
        "example": "Prestations régulières pour les institutions publiques et muséales.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Mairie de Paris","Institutions Culturelles","Commerces Beaubourg","Cabinets institutionnels"],
    distanceParis: "Hyper-centre",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 4e — Hôtel de Ville, Beaubourg | ONE CONNEXION",
      "description": "Coursier express Paris 4e (75004). Appels d'offres Hôtel de Ville, plis institutionnels, transport pour galeries d'art (Beaubourg, Marais).",
      "keywords": [
        "coursier Paris 4e",
        "coursier Hôtel de Ville",
        "coursier Beaubourg",
        "livraison express 75004"
      ]
    }
  },
  {
    slug: "paris-5e",
    dept: "75005",
    name: "Paris 5e",
    fullName: "Paris 5e arrondissement",
    category: "paris",
    landmarks: ["Panthéon","Sorbonne","Jardin des Plantes","Quartier Latin","Institut Curie"],
    intro: "Berceau universitaire et intellectuel, le 5e arrondissement abrite les plus prestigieuses universités (Sorbonne, Jussieu) et des centres de recherche de pointe (Institut Curie). C'est un véritable hub pour les secteurs scientifiques, médicaux et de l'édition.",
    logisticsContext: "L'ascension de la montagne Sainte-Geneviève et le dédale du Quartier Latin sont le terrain de jeu privilégié de notre flotte deux-roues, capable de relier les laboratoires aux hôpitaux parisiens à une vitesse inégalée.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Transports urgents et sécurisés (ADR) de prélèvements et greffons pour l'Institut Curie.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transferts de manuscrits et épreuves pour les grandes maisons d'édition du Quartier Latin.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Acheminement de documents académiques et diplômes certifiés.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Événementiel",
        "example": "Livraisons de matériel pour les colloques et soutenances de thèse universitaires.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Approvisionnement des librairies indépendantes en ouvrages rares.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison sur-mesure"
      },
      {
        "name": "Grands comptes",
        "example": "Partenariats de longue durée avec les pôles de recherche publique.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Instituts de Recherche (Curie)","Universités (Sorbonne)","Maisons d'édition","Librairies"],
    distanceParis: "Rive Gauche",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 5e — Quartier Latin, Institut Curie | ONE CONNEXION",
      "description": "Coursier express Paris 5e (75005). Spécialiste du transport médical urgent (Curie) et liaisons pour les universités et l'édition. Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 5e",
        "coursier Quartier Latin",
        "coursier médical Paris 5",
        "coursier Sorbonne"
      ]
    }
  },
  {
    slug: "paris-6e",
    dept: "75006",
    name: "Paris 6e",
    fullName: "Paris 6e arrondissement",
    category: "paris",
    landmarks: ["Saint-Germain-des-Prés","Sénat (Jardin du Luxembourg)","Odéon","Institut de France"],
    intro: "Symbole de l'élégance parisienne, le 6e arrondissement abrite le Sénat, l'Institut de France, des cabinets d'avocats de renom et de luxueuses boutiques. C'est un quartier où la discrétion et la présentation du coursier priment.",
    logisticsContext: "Livrer aux abords du Sénat ou dans les ruelles étroites de Saint-Germain-des-Prés requiert un tact particulier. Nos coursiers premium garantissent une remise en main propre en costume avec une absolue confidentialité.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Transmission de plis ultra-confidentiels pour les sénateurs et cabinets d'avocats de prestige.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraison de cadeaux d'affaires, parfums et haute maroquinerie pour la clientèle VIP.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes de dossiers stratégiques pour les banques d'affaires et fonds d'investissement.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Installation de vernissages pour les galeries d'art de la rue de Seine.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport d'art"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Livraisons discrètes pour les cliniques esthétiques privées.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Grands comptes",
        "example": "Service conciergerie d'entreprise exclusif pour les gestionnaires de fortune.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Institutions (Sénat)","Cabinets d'avocats prestigieux","Galeries d'art","Marques de luxe"],
    distanceParis: "Rive Gauche",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 6e — Saint-Germain, Sénat, Luxe | ONE CONNEXION",
      "description": "Coursier express Paris 6e (75006). Livraison premium, plis ultra-confidentiels (Sénat, Avocats) et transport d'œuvres d'art. Discrétion absolue.",
      "keywords": [
        "coursier Paris 6e",
        "coursier Saint-Germain-des-Prés",
        "coursier Sénat",
        "coursier luxe 75006"
      ]
    }
  },
  {
    slug: "paris-7e",
    dept: "75007",
    name: "Paris 7e",
    fullName: "Paris 7e arrondissement",
    category: "paris",
    landmarks: ["Tour Eiffel","Invalides","Assemblée Nationale","Quai d'Orsay","Rue du Bac"],
    intro: "Cœur politique et diplomatique de la France, le 7e arrondissement regroupe les ministères, l'Assemblée Nationale et une multitude d'ambassades. La sécurité et la fiabilité des transports y sont des exigences non négociables.",
    logisticsContext: "La forte sécurisation autour des ministères et ambassades impose des contrôles d'identité stricts. Nos coursiers habilités disposent de l'expérience requise pour franchir ces barrières institutionnelles sans perte de temps.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts officiels de dossiers et visas auprès des ministères (Quai d'Orsay) et ambassades.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Corporate & Agences",
        "example": "Échanges de documents classifiés pour les directions de grandes instances publiques.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Acheminement de produits de luxe et épicerie fine pour les résidents des Invalides.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison premium"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transports urgents de matériel de santé pour les hôpitaux militaires (Invalides).",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Navettes pour les réceptions diplomatiques et événements ministériels.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Partenariats logistiques sous accord de confidentialité (NDA) avec les institutions.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte institutionnel"
      }
    ],
    keyClients: ["Ministères","Ambassades","Assemblée Nationale","Family Offices"],
    distanceParis: "Rive Gauche",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 7e — Invalides, Ministères, Ambassades | ONE CONNEXION",
      "description": "Coursier express Paris 7e (75007). Habilités aux accès ministères et ambassades. Plis diplomatiques et confidentiels remis en main propre.",
      "keywords": [
        "coursier Paris 7e",
        "coursier ambassade Paris",
        "coursier Invalides",
        "livraison express 75007"
      ]
    }
  },
  {
    slug: "paris-8e",
    dept: "75008",
    name: "Paris 8e",
    fullName: "Paris 8e arrondissement",
    category: "paris",
    landmarks: ["Champs-Élysées","Triangle d'Or","Élysée","Place de la Concorde","Gare Saint-Lazare"],
    intro: "Le 8e arrondissement est la vitrine économique et de prestige de Paris. Des Champs-Élysées au Triangle d'Or, il concentre les sièges du CAC40, la haute finance, les palaces et les sièges des plus grandes marques mondiales.",
    logisticsContext: "L'intensité du trafic autour de l'Étoile et d'Haussmann exige une logistique hyper-réactive. Nous y opérons nos plus grands volumes de plis urgents avec une garantie de prise en charge en quelques minutes.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaisons entre directions générales, fonds d'investissement et banques d'affaires d'Haussmann.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transmissions de contrats de fusion/acquisition pour les cabinets d'avocats internationaux.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Acheminement direct depuis les ateliers vers les boutiques de l'Avenue Montaigne.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Tournées pour les cliniques de médecine esthétique réputées du Triangle d'Or.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Logistique VIP pour les défilés de mode et inaugurations sur les Champs-Élysées.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "VIP & Fashion"
      },
      {
        "name": "Grands comptes",
        "example": "Service courrier internalisé et facturation multi-services pour les groupes du CAC40.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Sièges CAC40","Banques d'Affaires","Cabinets Internationaux","Maisons de Haute Couture"],
    distanceParis: "Hyper-centre",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 8e — Champs-Élysées, Triangle d'Or | ONE CONNEXION",
      "description": "Coursier express Paris 8e (75008). Spécialiste finance, luxe et grands comptes. Enlèvement < 45 min sur les Champs-Élysées et Haussmann.",
      "keywords": [
        "coursier Paris 8e",
        "coursier Champs-Élysées",
        "coursier Triangle d'Or",
        "livraison express 75008"
      ]
    }
  },
  {
    slug: "paris-9e",
    dept: "75009",
    name: "Paris 9e",
    fullName: "Paris 9e arrondissement",
    category: "paris",
    landmarks: ["Opéra Garnier","Grands Boulevards","Galeries Lafayette","Quartier Saint-Georges"],
    intro: "Symbole de la vie culturelle et du grand commerce parisien, le 9e abrite les Grands Magasins, l'Opéra et une concentration exceptionnelle de start-ups et d'entreprises du digital (la \"Silicon Sentier\" étendue).",
    logisticsContext: "Le secteur des Grands Boulevards est un nœud de circulation majeur. Notre flotte s'adapte en temps réel, garantissant des livraisons de colis de matériel IT comme de plis ultra-rapides vers le reste de la capitale.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Navettes de matériel informatique et contrats pour les scale-ups et entreprises technologiques.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Retours express et transferts de stocks pour les Galeries Lafayette et Printemps.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Logistique Retail"
      },
      {
        "name": "Événementiel",
        "example": "Transport de costumes et décors pour les théâtres et salles de spectacle de l'Opéra.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Acheminement de dossiers pour les cabinets de recrutement et d'audit.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Livraisons quotidiennes pour les laboratoires d'analyses de la Chaussée d'Antin.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Grands comptes",
        "example": "Gestion externalisée des courriers pour les incubateurs et espaces de coworking.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Start-ups & Scale-ups","Grands Magasins","Théâtres & Opéra","Sièges d'assurances"],
    distanceParis: "Hyper-centre",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 9e — Opéra, Grands Boulevards, Start-ups | ONE CONNEXION",
      "description": "Coursier express Paris 9e (75009). Spécialiste tech, start-ups et retail (Grands Magasins). Livraison informatique et plis urgents < 45 min.",
      "keywords": [
        "coursier Paris 9e",
        "coursier Opéra",
        "coursier Grands Boulevards",
        "livraison express 75009"
      ]
    }
  },
  {
    slug: "paris-10e",
    dept: "75010",
    name: "Paris 10e",
    fullName: "Paris 10e arrondissement",
    category: "paris",
    landmarks: ["Gare du Nord","Gare de l'Est","Canal Saint-Martin","Hôpital Saint-Louis","Place de la République"],
    intro: "Le 10e arrondissement est le cœur logistique ferroviaire de l'Europe avec ses deux gares majeures. Il connaît un fort dynamisme avec l'implantation d'agences de pub, de labels de musique et d'hôpitaux prestigieux comme Saint-Louis.",
    logisticsContext: "La jonction entre les gares génère un trafic dense. Nos coursiers réalisent des exploits pour rattraper des départs de train (colis express en gare) ou assurer des urgences vitales vers l'hôpital Saint-Louis.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Transports de sang et d'analyses dermatologiques d'urgence pour l'Hôpital Saint-Louis.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Livraison de maquettes et disques durs pour les studios de post-production du canal.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Navettes urgentes de bagages ou colis oubliés vers les trains Eurostar / Thalys.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Colis express"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts urgents auprès des tribunaux pour les cabinets situés près de République.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons du dernier kilomètre pour les concept stores du Canal Saint-Martin.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Logistique programmée pour les réseaux de presse des gares.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Saint-Louis","Agences créatives","Studios de production","Logistique gares"],
    distanceParis: "Nord",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 10e — Gares, Canal Saint-Martin, Hôpital | ONE CONNEXION",
      "description": "Coursier express Paris 10e (75010). Urgences médicales (Hôpital Saint-Louis), liaisons Gare du Nord/Est et navettes pour les agences du Canal.",
      "keywords": [
        "coursier Paris 10e",
        "coursier Gare du Nord",
        "coursier hôpital Saint-Louis",
        "livraison express 75010"
      ]
    }
  },
  {
    slug: "paris-11e",
    dept: "75011",
    name: "Paris 11e",
    fullName: "Paris 11e arrondissement",
    category: "paris",
    landmarks: ["Bastille","Oberkampf","Nation","Place de la République","Atelier des Lumières"],
    intro: "Le 11e est l'arrondissement le plus densément peuplé, célèbre pour son esprit festif et entrepreneurial. Il héberge d'innombrables start-ups, artisans, designers et espaces de coworking qui nécessitent une logistique hyper-flexible.",
    logisticsContext: "Parfaitement desservi par les boulevards extérieurs, le 11e permet à nos coursiers d'effectuer des sauts de puce très rapides d'Oberkampf à Bastille, tout en naviguant dans un maillage de rues étroites.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaisons B2B entre les start-ups d'Oberkampf et les pépinières d'entreprises.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Distribution same-day de commandes pour les créateurs de mode et artisans locaux.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Signature de baux commerciaux et contrats de travail pour les nouvelles enseignes.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transferts vers les grands hôpitaux de l'Est (Saint-Antoine, Tenon).",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Livraison de catering et matériel pour les salles de concert (Bataclan) et ateliers.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Groupage de plis pour les grands espaces de coworking.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Espaces de Coworking","Start-ups","Artisans & Créateurs","Salles de concert"],
    distanceParis: "Est",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 11e — Bastille, Oberkampf, Nation | ONE CONNEXION",
      "description": "Coursier express Paris 11e (75011). Partenaire des start-ups, espaces de coworking et artisans de Bastille à Nation. Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 11e",
        "coursier Bastille",
        "coursier Oberkampf",
        "livraison express 75011"
      ]
    }
  },
  {
    slug: "paris-12e",
    dept: "75012",
    name: "Paris 12e",
    fullName: "Paris 12e arrondissement",
    category: "paris",
    landmarks: ["Gare de Lyon","Ministère de l'Économie (Bercy)","Accor Arena","Bois de Vincennes","Hôpital Saint-Antoine"],
    intro: "Entre la Gare de Lyon, le pôle d'affaires de Bercy (Ministère des Finances) et l'immensité du Bois de Vincennes, le 12e arrondissement est une zone contrastée aux besoins logistiques intenses, mêlant fret ferroviaire et urgences ministérielles.",
    logisticsContext: "La proximité de l'A4 et du boulevard périphérique fait du 12e un tremplin stratégique vers l'Est francilien. Nos coursiers assurent des jonctions immédiates entre les trains TGV de la Gare de Lyon et Bercy.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôt de dossiers d'appels d'offres au Ministère de l'Économie et des Finances.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis officiels"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transferts de dossiers comptables pour les cabinets de la Tour de l'Horloge.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Urgences sanguines et biologiques pour l'Hôpital Trousseau et Saint-Antoine.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Logistique technique lourde pour les concerts de l'Accor Arena.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Fret léger"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Récupération de colis fret à la Gare de Lyon pour livraison du dernier kilomètre.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Logistique dernier km"
      },
      {
        "name": "Grands comptes",
        "example": "Contrats de gestion de courrier pour les directions ministérielles.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte institutionnel"
      }
    ],
    keyClients: ["Ministère de l'Économie","Hôpitaux (Saint-Antoine, Trousseau)","Accor Arena","Cabinets d'audit"],
    distanceParis: "Est",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 12e — Bercy, Gare de Lyon, Hôpitaux | ONE CONNEXION",
      "description": "Coursier express Paris 12e (75012). Plis officiels (Bercy), urgences médicales (Saint-Antoine) et relais Gare de Lyon. Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 12e",
        "coursier Bercy",
        "coursier Gare de Lyon",
        "livraison express 75012"
      ]
    }
  },
  {
    slug: "paris-13e",
    dept: "75013",
    name: "Paris 13e",
    fullName: "Paris 13e arrondissement",
    category: "paris",
    landmarks: ["Station F","Hôpital Pitié-Salpêtrière","Place d'Italie","Bibliothèque François-Mitterrand (BnF)"],
    intro: "Le 13e arrondissement s'est imposé comme le centre névralgique de la Tech française avec Station F. C'est également un immense pôle de santé abritant la Pitié-Salpêtrière, le plus grand hôpital d'Europe.",
    logisticsContext: "L'avenue de France et les quais de Seine offrent des axes de circulation rapides. Nos coursiers jonglent entre le matériel informatique pointu des start-ups et les transports vitaux sous température dirigée de l'hôpital.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'organes, sang et essais cliniques (ADR) pour la Pitié-Salpêtrière.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Livraison urgente d'ordinateurs et prototypes technologiques pour les licornes de Station F.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Signatures de levées de fonds et pactes d'actionnaires pour les start-ups.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Événementiel",
        "example": "Approvisionnement pour les grandes expositions de la BnF et du quartier Paris Rive Gauche.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraison B2B pour le tissu commercial florissant de la Place d'Italie.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Externalisation logistique complète pour les campus incubateurs.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Pitié-Salpêtrière","Start-ups (Station F)","Institutions (BnF)","Sièges bancaires"],
    distanceParis: "Sud",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 13e — Station F, Pitié-Salpêtrière | ONE CONNEXION",
      "description": "Coursier express Paris 13e (75013). Expert en logistique médicale (Pitié-Salpêtrière) et transports urgents IT pour les start-ups (Station F).",
      "keywords": [
        "coursier Paris 13e",
        "coursier Station F",
        "coursier hôpital Pitié-Salpêtrière",
        "livraison express 75013"
      ]
    }
  },
  {
    slug: "paris-14e",
    dept: "75014",
    name: "Paris 14e",
    fullName: "Paris 14e arrondissement",
    category: "paris",
    landmarks: ["Gare Montparnasse","Tour Montparnasse","Hôpital Cochin","Observatoire","Catacombes"],
    intro: "Historiquement intellectuel, le 14e est aujourd'hui porté par le gigantesque pôle d'affaires de Montparnasse et de nombreux centres hospitaliers d'excellence (Cochin, Montsouris, Sainte-Anne).",
    logisticsContext: "Desservant le Grand Ouest de la France, la Gare Montparnasse est une véritable usine à colis. Nos coursiers maîtrisent parfaitement les accès de la Tour et des gares pour assurer des jonctions en temps réel.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Liaisons quotidiennes de prélèvements entre l'Hôpital Cochin et l'Institut Pasteur voisin.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Échanges de documents confidentiels entre les étages de la Tour Montparnasse.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Rapatriement de plis oubliés directement sur les quais des TGV en partance.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Colis express"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transmission de contrats pour les sièges d'assurances et mutuelles du quartier.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Desserte des commerces de la rue Daguerre et des Alésia.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Tournées multi-sites pour les acteurs de la santé du sud parisien.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Tour Montparnasse","Gare Montparnasse","Hôpital Cochin","Sièges d'assurances"],
    distanceParis: "Sud",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 14e — Montparnasse, Hôpital Cochin | ONE CONNEXION",
      "description": "Coursier express Paris 14e (75014). Livraisons urgentes Tour Montparnasse, urgences médicales (Cochin) et liaisons TGV. Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 14e",
        "coursier Montparnasse",
        "coursier Cochin",
        "livraison express 75014"
      ]
    }
  },
  {
    slug: "paris-15e",
    dept: "75015",
    name: "Paris 15e",
    fullName: "Paris 15e arrondissement",
    category: "paris",
    landmarks: ["Hôpital Européen Georges-Pompidou (HEGP)","Parc des Expositions (Porte de Versailles)","Beaugrenelle","Tour Montparnasse (limite)"],
    intro: "Le plus peuplé des arrondissements est un géant économique. Il accueille les sièges de médias audiovisuels prestigieux, le Parc des Expositions de la Porte de Versailles et un grand pôle de santé publique.",
    logisticsContext: "La diversité des activités (salons pros, télévision, santé) fait du 15e une zone nécessitant une grande adaptabilité, des camions avec hayon pour VIParis aux deux-roues pressés pour les JT.",
    sectors: [
      {
        "name": "Événementiel",
        "example": "Transport de stands, PLV et matériels pour les congrès mondiaux à la Porte de Versailles.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport fret"
      },
      {
        "name": "Corporate & Agences",
        "example": "Acheminement de rushs vidéo et supports de communication pour les chaînes de télévision.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Prise en charge d'analyses et de sang pour l'HEGP et l'Hôpital Necker.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Navettes administratives pour les grandes tours de bureaux du Front de Seine.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons en main propre aux résidents du quartier Beaugrenelle.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison premium"
      },
      {
        "name": "Grands comptes",
        "example": "Assistance logistique dédiée pour les organisateurs de salons professionnels.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Parc des Expositions","Hôpitaux (HEGP, Necker)","Chaînes de Télévision","Grands sièges sociaux"],
    distanceParis: "Ouest",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 15e — Porte de Versailles, HEGP, Médias | ONE CONNEXION",
      "description": "Coursier express Paris 15e (75015). Spécialiste logistique salons (Porte de Versailles), transport audiovisuel et médical (HEGP).",
      "keywords": [
        "coursier Paris 15e",
        "coursier Porte de Versailles",
        "coursier audiovisuel Paris",
        "livraison express 75015"
      ]
    }
  },
  {
    slug: "paris-16e",
    dept: "75016",
    name: "Paris 16e",
    fullName: "Paris 16e arrondissement",
    category: "paris",
    landmarks: ["Trocadéro","Bois de Boulogne","Stade Roland-Garros","Parc des Princes","Avenue Foch"],
    intro: "Résidentiel et haut de gamme, le 16e arrondissement est l'adresse des ambassades, des grandes fortunes, mais aussi de hauts lieux sportifs internationaux (Roland-Garros, Parc des Princes).",
    logisticsContext: "L'exigence est le maître mot. Qu'il s'agisse d'un pli diplomatique très sensible ou d'un colis de luxe pour un résident, la ponctualité absolue et la discrétion de nos coursiers sont testées chaque jour.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Acheminement sécurisé de documents pour les ambassades et consulats étrangers.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Service conciergerie et livraison VIP de haute couture pour les résidents privés.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Événementiel",
        "example": "Logistique d'accréditations et VIP pour les grands tournois sportifs et soirées de gala.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transport d'actes pour les gestionnaires de grands patrimoines et family offices.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Navettes urgentes entre les cliniques privées très exclusives du quartier.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Grands comptes",
        "example": "Partenariats de confiance (NDA) pour les grandes institutions internationales.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte institutionnel"
      }
    ],
    keyClients: ["Ambassades","Family Offices","Organisateurs sportifs (Roland Garros)","Cliniques privées"],
    distanceParis: "Ouest",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 16e — Ambassades, Luxe, Événementiel | ONE CONNEXION",
      "description": "Coursier express Paris 16e (75016). Livraison VIP discrète, plis diplomatiques, navettes ambassades et logistique d'événements sportifs.",
      "keywords": [
        "coursier Paris 16e",
        "coursier ambassade Paris",
        "coursier VIP Paris",
        "livraison express 75016"
      ]
    }
  },
  {
    slug: "paris-17e",
    dept: "75017",
    name: "Paris 17e",
    fullName: "Paris 17e arrondissement",
    category: "paris",
    landmarks: ["Nouveau Palais de Justice (Tribunal de Paris)","Batignolles","Parc Monceau","Porte Maillot","Place des Ternes"],
    intro: "Avec l'ouverture du Tribunal de Paris aux Batignolles, le 17e est devenu le centre névralgique de la justice en France. Il abrite également de nombreux sièges sociaux vers Wagram et des cabinets d'avocats fraîchement implantés.",
    logisticsContext: "La navette Palais de Justice est notre spécialité locale. Nos coursiers accrédités déposent quotidiennement des centaines de conclusions et tocs en contournant les embouteillages de la Porte de Clichy.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts massifs et urgents d'actes au Tribunal Judiciaire de Paris pour les avocats de tout l'hexagone.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Spécial Avocats"
      },
      {
        "name": "Corporate & Agences",
        "example": "Liaisons régulières pour les directions générales installées autour de la Place de l'Étoile et Ternes.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Desserte des laboratoires et cliniques du quartier Monceau.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Approvisionnement du Palais des Congrès de la Porte Maillot.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons express pour les commerçants du quartier des Ternes.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Facturation centralisée par dossier pour les gros cabinets d'avocats d'affaires.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Tribunal de Paris (Palais de Justice)","Cabinets d'Avocats","Palais des Congrès","Sièges sociaux"],
    distanceParis: "Ouest",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 17e — Tribunal de Paris, Batignolles | ONE CONNEXION",
      "description": "Coursier express Paris 17e (75017). Expert des dépôts juridiques au Tribunal de Paris (Batignolles). Enlèvement immédiat, course dédiée spécialisée.",
      "keywords": [
        "coursier Paris 17e",
        "coursier Tribunal de Paris",
        "coursier avocat Paris",
        "livraison express 75017"
      ]
    }
  },
  {
    slug: "paris-18e",
    dept: "75018",
    name: "Paris 18e",
    fullName: "Paris 18e arrondissement",
    category: "paris",
    landmarks: ["Montmartre","Sacré-Cœur","Hôpital Bichat","La Chapelle","Pigalle"],
    intro: "Mondialement célèbre pour Montmartre, le 18e est aussi un arrondissement populaire en pleine mutation. Il accueille des pôles de santé majeurs comme l'Hôpital Bichat, fleuron des maladies infectieuses, et un écosystème artistique foisonnant.",
    logisticsContext: "Grimper la butte Montmartre ou naviguer dans le trafic dense de la Porte de la Chapelle est le quotidien de nos pilotes. Nos motos se faufilent là où les camionnettes restent bloquées.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Urgences vitales, biologie et infectiologie pour l'Hôpital Bichat-Claude-Bernard.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Livraison de décors et matériel technique pour les théâtres, cabarets et salles de Pigalle.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transferts de dossiers pour les agences de production et studios d'enregistrement.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Logistique du dernier kilomètre pour les galeries d'art et artisans créateurs de la Butte.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges d'actes pour les cabinets d'architectes et études du nord de Paris.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Grands comptes",
        "example": "Navettes régulières pour les grandes institutions hospitalières.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Bichat","Salles de spectacles (Pigalle)","Artisans (Montmartre)","Studios de production"],
    distanceParis: "Nord",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 18e — Montmartre, Hôpital Bichat, Pigalle | ONE CONNEXION",
      "description": "Coursier express Paris 18e (75018). Spécialiste logistique pour l'Hôpital Bichat, livraisons événementielles pour les salles de spectacles et théâtres.",
      "keywords": [
        "coursier Paris 18e",
        "coursier Montmartre",
        "coursier Hôpital Bichat",
        "livraison express 75018"
      ]
    }
  },
  {
    slug: "paris-19e",
    dept: "75019",
    name: "Paris 19e",
    fullName: "Paris 19e arrondissement",
    category: "paris",
    landmarks: ["La Villette","Parc des Buttes-Chaumont","Hôpital Robert-Debré","Philharmonie de Paris","Cité des Sciences"],
    intro: "Le 19e arrondissement est le cœur vert et culturel du Nord-Est parisien. Le pôle de la Villette attire expositions et congrès géants, tandis que l'Hôpital Robert-Debré s'impose comme une référence en pédiatrie.",
    logisticsContext: "L'accès aux grands parcs et au périphérique (Porte de Pantin) offre d'excellents axes de dégagement. Nos véhicules utilitaires y opèrent fréquemment pour les livraisons volumineuses liées aux événements de La Villette.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Transferts d'urgence, laits maternels et prélèvements pour l'Hôpital universitaire Robert-Debré.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement lourd d'instruments et de décors pour la Philharmonie et la Grande Halle de la Villette.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport de matériel"
      },
      {
        "name": "Corporate & Agences",
        "example": "Liaisons régulières pour les administrations et sièges sociaux du canal de l'Ourcq.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transport d'actes officiels pour les institutions culturelles publiques.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Distribution pour les nouveaux quartiers résidentiels et éco-quartiers.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Logistique d'expositions complètes pour la Cité des Sciences.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte institutionnel"
      }
    ],
    keyClients: ["Hôpital Robert-Debré","Philharmonie de Paris","La Villette (Expositions)","Institutions publiques"],
    distanceParis: "Nord",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 19e — La Villette, Hôpital Robert-Debré | ONE CONNEXION",
      "description": "Coursier express Paris 19e (75019). Transport médical pédiatrique (Robert-Debré), logistique événementielle lourde (La Villette).",
      "keywords": [
        "coursier Paris 19e",
        "coursier La Villette",
        "coursier médical 75019",
        "livraison express Paris 19"
      ]
    }
  },
  {
    slug: "paris-20e",
    dept: "75020",
    name: "Paris 20e",
    fullName: "Paris 20e arrondissement",
    category: "paris",
    landmarks: ["Cimetière du Père-Lachaise","Belleville","Hôpital Tenon","Ménilmontant","Porte de Bagnolet"],
    intro: "Vivant, artistique et en perpétuelle ébullition, le 20e arrondissement est un laboratoire pour les start-ups et l'économie solidaire. L'Hôpital Tenon, spécialiste mondial des pathologies rénales, s'y dresse en pôle d'excellence.",
    logisticsContext: "La topographie vallonnée de Belleville et Ménilmontant nécessite une conduite experte. Notre flotte réactive assure des livraisons de bout en bout, connectant très rapidement l'Est au centre de Paris.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Courses d'urgence, transport de greffons et de tissus pour l'Hôpital Tenon.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes B2B pour les pépinières d'entreprises et espaces créatifs de Belleville.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Transport d'œuvres pour les ateliers d'artistes et galeries de l'Est parisien.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport d'art"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Acheminement de contrats et dossiers de subventions pour les associations.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons express de paniers et produits sourcés par les commerces de proximité.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Centralisation des flux pour les pôles hospitaliers de l'AP-HP.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Tenon (AP-HP)","Start-ups et Pépinières","Ateliers d'artistes","Commerces de bouche"],
    distanceParis: "Est",
    pricingZone: "standard",
    seo: {
      "title": "Coursier Paris 20e — Hôpital Tenon, Belleville, Père-Lachaise | ONE CONNEXION",
      "description": "Coursier express Paris 20e (75020). Urgences médicales Hôpital Tenon, navettes pour start-ups et galeries de Belleville. Enlèvement < 45 min.",
      "keywords": [
        "coursier Paris 20e",
        "coursier Hôpital Tenon",
        "coursier Belleville",
        "livraison express 75020"
      ]
    }
  },
{
    slug: "boulogne-billancourt",
    dept: "92100",
    name: "Boulogne-Billancourt",
    fullName: "Boulogne-Billancourt — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Île Seguin", "Trapèze", "Parc de Saint-Cloud", "A86", "Pont de Sèvres"],
    intro: "Boulogne-Billancourt est la capitale des groupes médias et des studios de production télévisuelle en France. TF1, M6, Betclic et des dizaines d'agences de communication y ont leur siège. Les besoins en navettes urgentes de rushes, maquettes et contrats sont constants.",
    logisticsContext: "Boulogne-Billancourt est à 15 minutes de Paris 16e via le périphérique Ouest. Nos motos routières relient Boulogne au 8e arrondissement en moins de 20 minutes en dehors des pointes.",
    sectors: [
      { name: "Corporate & Agences", example: "Transport de rushes, maquettes et supports de communication entre les groupes médias de Boulogne et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "Juridique & Notarial", example: "Liaisons entre les directions juridiques de Boulogne et les cabinets conseil de Paris.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "E-commerce & Luxe", example: "Livraisons same-day pour les e-commerçants et boutiques de Boulogne.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Médical", example: "Transport entre les cliniques et laboratoires de Boulogne.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Événementiel", example: "Livraisons de matériel pour tournages et événements sur l'île Seguin.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte entreprise pour TF1, M6 et les grands groupes médias de Boulogne.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["TF1", "M6", "Groupes médias", "Studios de production", "Agences communication"],
    distanceParis: "~15 min de Paris 16e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Boulogne-Billancourt — Livraison express 92100 | ONE CONNEXION",
      description: "Coursier express à Boulogne-Billancourt (92). Groupes médias, studios de production, corporate. Course dédiée, enlèvement < 45 min.",
      keywords: ["coursier Boulogne-Billancourt", "livraison express 92100", "coursier médias Boulogne", "coursier 92 Boulogne"],
    },
  },
  {
    slug: "neuilly-sur-seine",
    dept: "92200",
    name: "Neuilly-sur-Seine",
    fullName: "Neuilly-sur-Seine — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Avenue Charles de Gaulle", "American Hospital", "Île de la Jatte", "Pont de Neuilly", "La Défense (limite)"],
    intro: "Neuilly-sur-Seine est l'un des centres névralgiques du monde des affaires francilien. Avenue Charles de Gaulle, des dizaines de sièges de grands groupes, de banques privées et de cabinets d'avocats d'affaires côtoient l'American Hospital, référence médicale internationale.",
    logisticsContext: "Neuilly est à 10 minutes de La Défense et à 20 minutes du 8e arrondissement. Nos motos routières empruntent le pont de Neuilly et la A14 pour des liaisons ultra-rapides.",
    sectors: [
      { name: "Juridique & Notarial", example: "Transport de contrats d'affaires et de documents notariaux entre les cabinets premium de Neuilly et leurs clients.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "Médical & Laboratoires", example: "Transport urgent de prélèvements et de dossiers médicaux depuis l'American Hospital et les cliniques de Neuilly.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Corporate & Agences", example: "Navettes entre les sièges de grands groupes de Neuilly et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "E-commerce & Luxe", example: "Livraisons premium pour les boutiques et résidences de prestige de Neuilly.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison luxe" },
      { name: "Événementiel", example: "Transport de matériel pour les réceptions et événements corporate de Neuilly.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte entreprise pour les grands groupes et banques privées de Neuilly.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["American Hospital", "Banques privées", "Grands groupes avenue Charles de Gaulle", "Cabinets d'avocats d'affaires"],
    distanceParis: "~10 min de Paris 17e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Neuilly-sur-Seine — Livraison express 92200 | ONE CONNEXION",
      description: "Coursier express à Neuilly-sur-Seine (92). American Hospital, grands groupes, cabinets d'affaires. Course dédiée, enlèvement < 45 min.",
      keywords: ["coursier Neuilly-sur-Seine", "livraison express 92200", "coursier American Hospital Neuilly", "coursier 92 Neuilly"],
    },
  },
  {
    slug: "levallois-perret",
    dept: "92300",
    name: "Levallois-Perret",
    fullName: "Levallois-Perret — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Tribunal de Nanterre", "Île de la Jatte", "A86", "Porte de Champerret"],
    intro: "Levallois-Perret est l'une des villes les plus denses de France et un pôle économique majeur. Elle concentre des sièges de groupes de distribution, d'agences de communication et de PME innovantes. La proximité avec Neuilly et Paris 17e en fait un lieu stratégique.",
    logisticsContext: "Levallois est accessible en moins de 15 minutes depuis Paris intramuros via la Porte de Champerret. Nos scooters desservent toute la ville en moins de 30 minutes depuis nos relais.",
    sectors: [
      { name: "Corporate & Agences", example: "Transport entre les agences et sièges de distribution de Levallois et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "Juridique & Notarial", example: "Liaison entre les cabinets de Levallois et le Tribunal de Nanterre.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les e-commerçants et boutiques de Levallois.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Médical", example: "Transport entre les cliniques de Levallois et les hôpitaux voisins.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Événementiel", example: "Livraisons pour les événements corporate des grandes entreprises de Levallois.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte pour les groupes de distribution et sièges de Levallois.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Groupes de distribution", "Agences communication", "PME innovantes", "Sièges sociaux"],
    distanceParis: "~15 min de Paris 17e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Levallois-Perret — Livraison express 92300 | ONE CONNEXION",
      description: "Coursier express à Levallois-Perret (92). Sièges sociaux, agences, corporate. Enlèvement < 45 min.",
      keywords: ["coursier Levallois-Perret", "livraison express 92300", "coursier 92 Levallois"],
    },
  },
  {
    slug: "issy-les-moulineaux",
    dept: "92130",
    name: "Issy-les-Moulineaux",
    fullName: "Issy-les-Moulineaux — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Fort d'Issy", "Canal Seine", "Microsoft France", "Numericable", "A86"],
    intro: "Issy-les-Moulineaux est la Silicon Valley française : Microsoft, SFR, Canal+, Vivendi y ont leur siège. La concentration de groupes tech et médias génère des besoins de transport urgent constants pour les équipes juridiques, communication et R&D.",
    logisticsContext: "Issy est à 20 minutes de Paris 15e via le périphérique Sud. Nos coursiers couvrent tout le parc d'activités d'Issy en moins de 30 minutes.",
    sectors: [
      { name: "Corporate & Agences", example: "Navettes entre les sièges tech d'Issy (Microsoft, SFR, Canal+) et leurs partenaires et sous-traitants parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "Juridique & Notarial", example: "Transport de contrats entre les directions juridiques d'Issy et leurs cabinets conseil.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "Médical", example: "Transport entre les cliniques d'Issy et les hôpitaux voisins.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les boutiques et e-commerçants d'Issy.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Événementiel", example: "Livraisons pour les événements corporate des groupes tech d'Issy.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte pour Microsoft, SFR et Canal+ avec imputation par département.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Microsoft France", "SFR / Canal+", "Vivendi", "Groupes tech"],
    distanceParis: "~20 min de Paris 15e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Issy-les-Moulineaux — Microsoft, SFR, Canal+ | ONE CONNEXION",
      description: "Coursier express à Issy-les-Moulineaux (92). Microsoft, SFR, Canal+, groupes tech. Course dédiée, enlèvement < 45 min.",
      keywords: ["coursier Issy-les-Moulineaux", "livraison express 92130", "coursier Microsoft Issy", "coursier 92 Issy"],
    },
  },

  // ─────────────────────────────────────────────
  // SEINE-SAINT-DENIS (93) — Villes clés
  // ─────────────────────────────────────────────
  {
    slug: "saint-denis",
    dept: "93200",
    name: "Saint-Denis",
    fullName: "Saint-Denis — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Stade de France", "Plaine Saint-Denis", "Basilique Saint-Denis", "A1", "Université Paris 8"],
    intro: "Saint-Denis est en pleine transformation. La Plaine Saint-Denis concentre désormais des centaines de sièges sociaux, studios de créa et entreprises technologiques. Le Stade de France génère des flux événementiels importants. One Connexion dessert tout ce secteur avec la même exigence qu'à Paris.",
    logisticsContext: "Saint-Denis est à 20 minutes de Paris 18e via la Porte de Clignancourt. La proximité de l'A1 permet des liaisons rapides vers Roissy et le nord de l'Île-de-France.",
    sectors: [
      { name: "Corporate & Agences", example: "Navettes entre les sièges de la Plaine Saint-Denis et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "Événementiel", example: "Livraisons urgentes de matériel pour les événements au Stade de France et dans les salles de concert.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Médical", example: "Transport entre le Centre Hospitalier de Saint-Denis et les laboratoires.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Juridique & Notarial", example: "Liaison entre les cabinets de Saint-Denis et le Tribunal de Bobigny.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les e-commerçants et boutiques de Saint-Denis.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Grands comptes", example: "Compte pour les entreprises de la Plaine Saint-Denis.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Stade de France", "Sièges Plaine Saint-Denis", "CH Saint-Denis", "Studios créatifs"],
    distanceParis: "~20 min de Paris 18e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Saint-Denis — Plaine Saint-Denis, Stade de France | ONE CONNEXION",
      description: "Coursier express à Saint-Denis (93). Plaine Saint-Denis, Stade de France, corporate. Enlèvement < 45 min.",
      keywords: ["coursier Saint-Denis 93", "livraison express 93200", "coursier Plaine Saint-Denis", "coursier 93"],
    },
  },
  {
    slug: "montreuil",
    dept: "93100",
    name: "Montreuil",
    fullName: "Montreuil — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Murs à pêches", "Centre-ville", "Croix-de-Chavaux", "A3", "Vincennes (limite)"],
    intro: "Montreuil est devenue la capitale française de l'économie créative et de l'économie sociale et solidaire. Ses nombreux ateliers, studios et entreprises numériques génèrent des besoins logistiques B2B réguliers, et sa proximité immédiate avec Paris 20e en fait une zone de desserte naturelle.",
    logisticsContext: "Montreuil est à 10 minutes de Paris 20e par la Porte de Montreuil. Nos scooters couvrent tout Montreuil en moins de 25 minutes.",
    sectors: [
      { name: "Corporate & Agences", example: "Navettes entre les studios créatifs et agences de Montreuil et leurs clients parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "E-commerce & Luxe", example: "Livraisons same-day pour les e-commerçants de Montreuil.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Médical", example: "Transport entre les centres de santé et hôpitaux du secteur.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Juridique & Notarial", example: "Liaison entre les cabinets de Montreuil et les juridictions voisines.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "Événementiel", example: "Livraisons pour les événements culturels et concerts de Montreuil.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte pour les entreprises créatives et ESS de Montreuil.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Studios créatifs", "Entreprises ESS", "Agences numériques", "Artisans"],
    distanceParis: "~10 min de Paris 20e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Montreuil — Livraison express 93100 | ONE CONNEXION",
      description: "Coursier express à Montreuil (93). Studios créatifs, ESS, e-commerçants. Enlèvement < 45 min.",
      keywords: ["coursier Montreuil", "livraison express 93100", "coursier 93 Montreuil"],
    },
  },

  // ─────────────────────────────────────────────
  // VAL-DE-MARNE (94) — Villes clés
  // ─────────────────────────────────────────────
  {
    slug: "vincennes",
    dept: "94300",
    name: "Vincennes",
    fullName: "Vincennes — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Château de Vincennes", "Bois de Vincennes", "Hippodrome", "A4", "Paris 12e (limite)"],
    intro: "Vincennes est une ville résidentielle et économique prisée, limitrophe du 12e arrondissement. Elle accueille des cabinets juridiques, des directions de PME et des professions libérales. La proximité immédiate avec Paris en fait une destination naturelle pour la flotte de One Connexion.",
    logisticsContext: "Vincennes est à 5 minutes de Paris 12e via la Porte de Vincennes. Nos scooters desservent toute Vincennes et rejoignent Bercy ou la Bastille en moins de 20 minutes.",
    sectors: [
      { name: "Juridique & Notarial", example: "Liaison entre les cabinets de Vincennes et les juridictions parisiennes.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "Médical", example: "Transport entre les cliniques de Vincennes et les laboratoires et hôpitaux voisins.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Corporate & Agences", example: "Navettes entre les PME et directions de Vincennes et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les boutiques et e-commerçants de Vincennes.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Événementiel", example: "Livraisons pour les événements à l'hippodrome de Vincennes.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte pour les PME et professions libérales de Vincennes.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Cabinets juridiques", "Cliniques privées", "PME", "Hippodrome"],
    distanceParis: "~5 min de Paris 12e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Vincennes — Livraison express 94300 | ONE CONNEXION",
      description: "Coursier express à Vincennes (94). Cabinets juridiques, médical, PME. Enlèvement < 45 min. Limitrophe Paris 12e.",
      keywords: ["coursier Vincennes", "livraison express 94300", "coursier 94 Vincennes"],
    },
  },
  {
    slug: "saint-mande",
    dept: "94160",
    name: "Saint-Mandé",
    fullName: "Saint-Mandé — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Bois de Vincennes", "Château de Vincennes (limite)", "A4", "Paris 12e (limite)"],
    intro: "Saint-Mandé est le siège social de One Connexion. Cette position au cœur du Val-de-Marne nous permet d'intervenir avec un délai encore plus court dans toute la petite couronne Est. Nos coursiers partent de Saint-Mandé et couvrent Paris et les 3 départements de petite couronne en moins de 30 minutes.",
    logisticsContext: "Siège One Connexion : 5 Square Nungesser, 94160 Saint-Mandé. Nos équipes sont en permanence disponibles depuis cette base, à 5 minutes de la Porte de Vincennes.",
    sectors: [
      { name: "Médical & Laboratoires", example: "Transport depuis l'Hôpital Bégin de Saint-Mandé vers les laboratoires partenaires de toute la petite couronne.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Juridique & Notarial", example: "Liaison entre les études de Saint-Mandé et Vincennes et les juridictions parisiennes.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "Corporate & Agences", example: "Navettes depuis Saint-Mandé vers les pôles d'affaires de Paris et de la petite couronne.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les commerces et boutiques de Saint-Mandé.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Événementiel", example: "Transport depuis notre siège vers n'importe quel site événementiel en Île-de-France.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte entreprise géré directement depuis notre siège de Saint-Mandé.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Hôpital Bégin", "Sièges PME", "Professions libérales", "Résidences de prestige"],
    distanceParis: "~5 min de Paris 12e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Saint-Mandé — Siège ONE CONNEXION, Val-de-Marne 94160",
      description: "Saint-Mandé abrite le siège de One Connexion. Coursier express 94, interventions ultra-rapides en petite couronne et Paris. Enlèvement < 45 min.",
      keywords: ["coursier Saint-Mandé", "livraison express 94160", "coursier 94 Saint-Mandé", "One Connexion Saint-Mandé"],
    },
  },
  {
    slug: "creteil",
    dept: "94000",
    name: "Créteil",
    fullName: "Créteil — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Préfecture Val-de-Marne", "Hôpital Henri-Mondor", "Lac de Créteil", "A86", "Université Paris-Est Créteil"],
    intro: "Créteil est la préfecture du Val-de-Marne. Elle concentre l'Hôpital Henri-Mondor, référence médicale nationale, la préfecture, les tribunaux et l'université. Ces institutions génèrent quotidiennement des besoins en transport urgent de documents, prélèvements et matériel.",
    logisticsContext: "Créteil est bien desservi par l'A86 et la N186. Nos motos routières relient Créteil à Paris 12e en moins de 20 minutes.",
    sectors: [
      { name: "Médical & Laboratoires", example: "Transport de prélèvements biologiques depuis Henri-Mondor vers les laboratoires de référence et inter-services hospitaliers.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Juridique & Notarial", example: "Liaisons entre la Préfecture, le Tribunal de Créteil et les cabinets d'avocats.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "Corporate & Agences", example: "Navettes entre les entreprises de Créteil et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les boutiques du centre commercial Créteil Soleil.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Événementiel", example: "Transport pour les événements et congrès médicaux à Henri-Mondor.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte entreprise pour Henri-Mondor et la Préfecture.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Hôpital Henri-Mondor", "Préfecture Val-de-Marne", "Tribunal de Créteil", "Université Paris-Est"],
    distanceParis: "~20 min de Paris 12e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Créteil — Henri-Mondor, Tribunal, Préfecture 94 | ONE CONNEXION",
      description: "Coursier express à Créteil (94). Henri-Mondor, Préfecture, Tribunal. Transport médical, plis confidentiels. Enlèvement < 45 min.",
      keywords: ["coursier Créteil", "livraison express 94000", "coursier hôpital Henri-Mondor", "coursier 94 Créteil"],
    },
  },
  {
    slug: "ivry-sur-seine",
    dept: "94200",
    name: "Ivry-sur-Seine",
    fullName: "Ivry-sur-Seine — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Hôpital Charles-Foix", "Centre-ville", "A4", "Paris 13e (limite)", "Quais de Seine"],
    intro: "Ivry-sur-Seine est limitrophe du 13e arrondissement et accueille de nombreuses entreprises industrielles, ateliers et sociétés de services. L'Hôpital Charles-Foix est un établissement gérontologique de référence nationale. La densité économique d'Ivry génère des besoins logistiques B2B réguliers.",
    logisticsContext: "Ivry est à 5 minutes de Paris 13e. Nos coursiers assurent des liaisons ultra-rapides entre Ivry et la Pitié-Salpêtrière, Bercy ou Bastille.",
    sectors: [
      { name: "Médical & Laboratoires", example: "Transport entre l'Hôpital Charles-Foix et les laboratoires partenaires.", serviceHref: "/services/transport-medical", serviceLabel: "Transport médical" },
      { name: "Corporate & Agences", example: "Navettes entre les entreprises d'Ivry et leurs partenaires parisiens.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Course dédiée" },
      { name: "Juridique & Notarial", example: "Liaison entre les études et cabinets d'Ivry et les juridictions.", serviceHref: "/services/plis-confidentiels", serviceLabel: "Plis confidentiels" },
      { name: "E-commerce & Luxe", example: "Livraisons pour les e-commerçants et boutiques d'Ivry.", serviceHref: "/services/livraison-e-commerce", serviceLabel: "Livraison e-commerce" },
      { name: "Événementiel", example: "Transport pour les événements culturels d'Ivry.", serviceHref: "/services/transport-evenementiel", serviceLabel: "Transport événementiel" },
      { name: "Grands comptes", example: "Compte entreprise pour les industriels et sociétés de services d'Ivry.", serviceHref: "/services/compte-entreprise", serviceLabel: "Compte entreprise" },
    ],
    keyClients: ["Hôpital Charles-Foix", "Industriels", "PME services", "Ateliers"],
    distanceParis: "~5 min de Paris 13e",
    pricingZone: "standard",
    seo: {
      title: "Coursier Ivry-sur-Seine — Livraison express 94200 | ONE CONNEXION",
      description: "Coursier express à Ivry-sur-Seine (94). Hôpital Charles-Foix, industriels, PME. Enlèvement < 45 min. Limitrophe Paris 13e.",
      keywords: ["coursier Ivry-sur-Seine", "livraison express 94200", "coursier 94 Ivry"],
    },
  },

    {
    slug: "la-defense",
    dept: "92400",
    name: "La Défense",
    fullName: "La Défense — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Grande Arche","Esplanade","CNIT","Tour First","Quartier Valmy"],
    intro: "La Défense est le premier quartier d'affaires européen. Il concentre les sièges sociaux des plus grandes multinationales, banques et compagnies d'assurance. Ce bouillonnement économique génère un besoin constant de courses express et de plis confidentiels entre les tours de La Défense et Paris intramuros.",
    logisticsContext: "L'esplanade piétonne et les accès souterrains de La Défense peuvent être un labyrinthe pour les non-initiés. Nos coursiers maîtrisent les accès livraisons, les quais de déchargement et les protocoles de sécurité des grandes tours, garantissant une remise en main propre sans retard.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaisons urgentes de contrats et documents financiers entre les tours de La Défense et les cabinets parisiens.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Remise de documents légaux pour les directions juridiques des grands groupes.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'analyses depuis les centres médicaux d'entreprise.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons premium pour les cadres dirigeants (conciergerie d'entreprise).",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de matériel pour les salons professionnels au CNIT.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Tournées inter-sites pour les multinationales implantées sur le parvis.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Multinationales CAC 40","Banques et Assurances","Directions Juridiques","Centres de congrès"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier La Défense — Livraison express Quartier d'Affaires | ONE CONNEXION",
      "description": "Coursier express à La Défense (92). Spécialiste des accès tours, plis confidentiels, navettes corporate. Enlèvement < 45 min.",
      "keywords": [
        "coursier La Défense",
        "livraison express 92400",
        "coursier tour La Défense",
        "coursier quartier affaires"
      ]
    }
  },
  {
    slug: "nanterre",
    dept: "92000",
    name: "Nanterre",
    fullName: "Nanterre — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Préfecture des Hauts-de-Seine","Tribunal de Grande Instance","Université Paris Nanterre","Terrasses de l'Arche"],
    intro: "Nanterre abrite la Préfecture des Hauts-de-Seine et le Tribunal de Grande Instance, en faisant le centre névralgique juridique et administratif du département. Sa proximité avec La Défense attire également de nombreux sièges sociaux et PME dynamiques.",
    logisticsContext: "Située dans le prolongement de La Défense, Nanterre bénéficie d'excellentes infrastructures routières (A86, A14). Nos coursiers effectuent quotidiennement des dizaines de liaisons entre les tribunaux de Nanterre et les cabinets parisiens.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôt de conclusions au TGI de Nanterre et navettes avec les cabinets d'avocats.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes de documents administratifs avec la Préfecture du 92.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'échantillons médicaux pour les laboratoires locaux et cliniques.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons rapides pour les commerçants du centre-ville et les étudiants du campus.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de supports de communication pour les événements universitaires.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Compte entreprise pour les administrations et sièges sociaux de l'Arche.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Tribunal de Nanterre","Préfecture 92","Cabinets d'avocats","Université Paris Nanterre"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Nanterre — Préfecture, Tribunal 92 | ONE CONNEXION",
      "description": "Coursier express à Nanterre (92). Spécialiste des liaisons TGI, Préfecture et Université. Plis confidentiels et transport B2B. Enlèvement < 45 min.",
      "keywords": [
        "coursier Nanterre",
        "livraison express 92000",
        "coursier tribunal Nanterre",
        "coursier préfecture 92"
      ]
    }
  },
  {
    slug: "clamart",
    dept: "92140",
    name: "Clamart",
    fullName: "Clamart — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Hôpital d'Instruction des Armées Percy","Forêt de Meudon","Centre-ville","Parc d'activités Novéos"],
    intro: "Clamart est réputée pour son pôle médical d'excellence, notamment avec l'Hôpital Percy. La ville abrite également le parc d'activités Novéos qui rassemble des entreprises innovantes et des centres de recherche de premier plan.",
    logisticsContext: "Située sur un plateau, Clamart est rapidement accessible depuis Paris via la N118 et l'A86. Nos coursiers spécialisés interviennent en urgence pour des transports sous température dirigée ou des courses tertiaires.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Navettes urgentes de prélèvements et produits sanguins pour l'Hôpital Percy et laboratoires.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Liaisons régulières pour les entreprises de la zone d'activités Novéos.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Remise de documents légaux pour les notaires et experts-comptables de la ville.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Distribution de commandes e-commerce same-day pour les résidents clamartois.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Installation événementielle pour les séminaires d'entreprises locales.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Externalisation complète des navettes inter-sites pour les centres de recherche.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Percy","Centres de recherche","Entreprises Novéos","Laboratoires d'analyses"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Clamart — Hôpital Percy, Novéos | ONE CONNEXION",
      "description": "Coursier express à Clamart (92). Spécialisé transport médical (Hôpital Percy) et livraisons B2B pour le pôle Novéos. Enlèvement < 45 min.",
      "keywords": [
        "coursier Clamart",
        "livraison express 92140",
        "coursier médical Clamart",
        "coursier Novéos"
      ]
    }
  },
  {
    slug: "chatillon",
    dept: "92320",
    name: "Châtillon",
    fullName: "Châtillon — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Centre de recherche ONERA","Vieux Bourg","Parc des Sarments","Technicentre TGV"],
    intro: "Châtillon combine un esprit village avec une forte présence de centres de recherche technologique et de télécommunications. Son dynamisme attire de nombreuses PME spécialisées dans le numérique et l'ingénierie.",
    logisticsContext: "Proche de la Porte de Châtillon, la ville est directement connectée à Paris intra-muros. Cette proximité permet à nos chauffeurs d'effectuer des allers-retours très rapides avec le sud de la capitale.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Transfert sécurisé de maquettes et plans pour les bureaux d'études et ingénierie.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Acheminement quotidien de prélèvements depuis les centres médicaux locaux.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transmission de contrats et documents confidentiels pour les agences du numérique.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons du dernier kilomètre pour les commerces spécialisés du centre-ville.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Événementiel",
        "example": "Transport de supports de présentation pour les réunions technologiques.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Contrats mensuels pour la gestion des courriers des centres de recherche.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Bureaux d'études","Entreprises du numérique","Centres d'ingénierie","Laboratoires"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Châtillon — Livraison express 92320 | ONE CONNEXION",
      "description": "Coursier express à Châtillon (92). Bureaux d'études, entreprises technologiques, PME. Course dédiée avec enlèvement en moins de 45 minutes.",
      "keywords": [
        "coursier Châtillon",
        "livraison express 92320",
        "coursier entreprise Châtillon"
      ]
    }
  },
  {
    slug: "montrouge",
    dept: "92120",
    name: "Montrouge",
    fullName: "Montrouge — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Campus Crédit Agricole","Beffroi de Montrouge","Avenue de la République","Porte d'Orléans (limite)"],
    intro: "Limitrophe du 14e arrondissement de Paris, Montrouge est une extension naturelle de la capitale. La ville accueille les sièges de grands groupes bancaires, des maisons d'édition et une forte communauté de professions libérales.",
    logisticsContext: "Le trafic dense de la Porte d'Orléans n'est pas un obstacle pour nos coursiers moto. Nous assurons des navettes hyper-rapides entre Montrouge, Paris Rive Gauche et les autres pôles du 92.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaisons sécurisées pour les campus bancaires et institutions financières.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Événementiel",
        "example": "Livraison de matériel et traiteur pour les expositions et congrès au Beffroi.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Navettes administratives pour les sièges d'entreprises et études notariales.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Acheminement de colis médicaux urgents vers les hôpitaux parisiens voisins.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Tournées de livraison e-commerce pour le secteur de l'édition et de l'imprimerie.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison B2B"
      },
      {
        "name": "Grands comptes",
        "example": "Facturation centralisée et navettes inter-sites pour les grands groupes de la ville.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Institutions financières","Maisons d'édition","Le Beffroi (Congrès)","Professions libérales"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Montrouge — Sièges bancaires, Édition | ONE CONNEXION",
      "description": "Coursier express à Montrouge (92). Spécialiste des liaisons bancaires, édition et congrès. Ultra-réactif aux portes de Paris (Porte d'Orléans).",
      "keywords": [
        "coursier Montrouge",
        "livraison express 92120",
        "coursier banque Montrouge",
        "coursier Beffroi Montrouge"
      ]
    }
  },
  {
    slug: "antony",
    dept: "92160",
    name: "Antony",
    fullName: "Antony — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Hôpital Privé d'Antony","Parc de Sceaux (limite)","Croix de Berny","Pôle d'activités Antonypole"],
    intro: "Antony est le grand pôle du sud des Hauts-de-Seine. Son Hôpital Privé (le 1er d'Île-de-France) et le quartier d'affaires Antonypole concentrent des activités liées à la santé, la haute technologie et la recherche.",
    logisticsContext: "Située à la croisée de l'A86, l'A10 et proche d'Orly, Antony est un nœud logistique stratégique. Nos coursiers desservent cette zone avec la même garantie d'enlèvement en moins de 45 minutes qu'à Paris.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Urgences sanguines, greffons et prélèvements biologiques pour l'Hôpital Privé d'Antony.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes express pour les pôles R&D et entreprises de haute technologie d'Antonypole.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transport de documents légaux pour les nombreuses agences et études de la ville.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons express et tournées régulières pour les commerçants du centre.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Transport de PLV et matériel d'exposition pour les zones d'activités.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Partenariats de coursiers réguliers pour les pôles de santé.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Privé d'Antony","Pôles technologiques Antonypole","Laboratoires d'analyses","PME d'ingénierie"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Antony — Antonypole, Hôpital Privé 92 | ONE CONNEXION",
      "description": "Coursier express à Antony (92). Spécialiste transport médical (Hôpital Privé d'Antony) et navettes d'entreprise Antonypole. Enlèvement < 45 min.",
      "keywords": [
        "coursier Antony",
        "livraison express 92160",
        "coursier médical Antony",
        "coursier Antonypole"
      ]
    }
  },
  {
    slug: "suresnes",
    dept: "92150",
    name: "Suresnes",
    fullName: "Suresnes — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Hôpital Foch","Mont Valérien","Quais de Seine","Belvédère"],
    intro: "Adossée au bois de Boulogne et bordée par la Seine, Suresnes est une ville prisée pour les sièges d'entreprises de l'audiovisuel, des laboratoires pharmaceutiques et abrite l'Hôpital Foch, pionnier en neurosciences et pneumologie.",
    logisticsContext: "Le relief de Suresnes et ses quais très fréquentés nécessitent une parfaite connaissance du terrain. Nos motos routières assurent des temps de parcours optimisés vers La Défense et Paris Ouest.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Transport ultra-rapide de greffons et d'analyses spécialisées pour l'Hôpital Foch et l'EFS.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes confidentielles de documents de recherche pour les laboratoires pharmaceutiques locaux.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges de contrats entre les directions d'entreprises des quais et les avocats.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons discrètes pour les quartiers résidentiels du haut de Suresnes.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison premium"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de décors et matériel pour les tournages audiovisuels.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Comptes entreprises sur mesure pour l'industrie pharmaceutique.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Foch","Laboratoires pharmaceutiques","Sociétés de production","Sièges sociaux des quais"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Suresnes — Hôpital Foch, Laboratoires Pharmaceutiques | ONE CONNEXION",
      "description": "Coursier express à Suresnes (92). Spécialiste pharmaceutique, médical (Hôpital Foch) et audiovisuel. Enlèvement rapide garanti en moins de 45 min.",
      "keywords": [
        "coursier Suresnes",
        "livraison express 92150",
        "coursier médical Suresnes",
        "coursier laboratoire 92"
      ]
    }
  },
  {
    slug: "puteaux",
    dept: "92800",
    name: "Puteaux",
    fullName: "Puteaux — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["La Défense (Quartier Sud)","Île de Puteaux","Hôtel de Ville","Quais de Dion-Bouton"],
    intro: "Puteaux englobe une grande partie du quartier d'affaires de La Défense ainsi qu'un tissu dense de PME et d'agences le long de ses quais. La diversité de son économie en fait l'une des villes les plus dynamiques du 92.",
    logisticsContext: "La circulation entre la dalle de La Défense et les petites rues du vieux Puteaux exige une flexibilité que seule notre flotte de scooters garantit, évitant systématiquement les embouteillages des quais de Seine.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaisons régulières entre les agences de communication de Puteaux et les sièges sociaux des tours.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transmission rapide de parapheurs et contrats pour les directions financières.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'analyses pour les cabinets médicaux et spécialistes de la ville.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons en gants blancs pour la clientèle premium de l'Île de Puteaux.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Événementiel",
        "example": "Livraison de cadeaux d'affaires et invitations pour les galas corporate.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Facturation au centre de coûts pour les multinationales chevauchant La Défense et Puteaux.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Tours de La Défense (Sud)","Agences de communication","Sièges sociaux","Cabinets de conseil"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Puteaux — La Défense, Quais de Seine 92 | ONE CONNEXION",
      "description": "Coursier express à Puteaux (92). Navettes d'entreprises, accès tours de La Défense, agences de communication. Enlèvement < 45 min, service 7j/7.",
      "keywords": [
        "coursier Puteaux",
        "livraison express 92800",
        "coursier La Défense Puteaux",
        "navette entreprise 92"
      ]
    }
  },
  {
    slug: "courbevoie",
    dept: "92400",
    name: "Courbevoie",
    fullName: "Courbevoie — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["La Défense (Quartier Nord)","Tour CB21","Quartier de Bécon","Parc Diderot"],
    intro: "Courbevoie partage avec Puteaux le parvis de La Défense. La ville accueille les tours les plus emblématiques et une concentration impressionnante d'institutions financières, d'auditeurs et de géants du conseil.",
    logisticsContext: "Le secteur nord de La Défense est complexe sur le plan routier avec de nombreux accès souterrains. Nos coursiers disposent des habilitations et de l'expérience nécessaires pour des livraisons fluides et sans accroc.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Envois express de rapports financiers et dossiers d'audit pour les Big Four.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts urgents de documents pour signatures entre directions générales.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Approvisionnement des pharmacies de garde et centres médicaux.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons rapides de matériel IT de pointe pour le télétravail des cadres.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de kakémonos et flyers pour les assemblées générales.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Partenariat logistique avec reporting détaillé pour les cabinets d'audit.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Cabinets d'audit (Big 4)","Banques d'investissement","Géants du conseil","Grandes entreprises"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Courbevoie — La Défense Nord, Cabinets d'Audit | ONE CONNEXION",
      "description": "Coursier express à Courbevoie (92). Spécialiste des plis confidentiels pour l'audit et la finance à La Défense. Traçabilité totale, enlèvement < 45 min.",
      "keywords": [
        "coursier Courbevoie",
        "livraison express 92400",
        "coursier La Défense Nord",
        "coursier audit finance"
      ]
    }
  },
  {
    slug: "asnieres-sur-seine",
    dept: "92600",
    name: "Asnières-sur-Seine",
    fullName: "Asnières-sur-Seine — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Château d'Asnières","Quartier de la Gare","Parc d'Affaires des Grésillons","Les bords de Seine"],
    intro: "Asnières-sur-Seine a su opérer une transition remarquable de son passé industriel vers une économie tertiaire florissante. La ville héberge les sièges français de grandes marques prestigieuses et de nombreuses start-ups du numérique.",
    logisticsContext: "Asnières est le trait d'union entre le nord des Hauts-de-Seine et Paris (Porte de Clichy). Nos coursiers utilisent cet axe stratégique pour des livraisons records vers le nord et l'ouest parisien.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Navettes de prototypes et d'échantillons pour les sièges de marques cosmétiques et luxe.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges de documents commerciaux pour les start-ups et PME.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport de produits de santé entre cliniques vétérinaires et laboratoires.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Logistique du dernier kilomètre pour l'e-commerce mode et beauté.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Livraisons de scénographies pour les studios photo et agences créatives.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Tournées programmées pour le secteur cosmétique.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Sièges marques cosmétiques","Start-ups numériques","Agences créatives","Studios photo"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Asnières-sur-Seine — Sièges Marques & Start-ups | ONE CONNEXION",
      "description": "Coursier express à Asnières-sur-Seine (92). Transports d'échantillons, navettes corporate et e-commerce. Course dédiée, enlèvement < 45 min.",
      "keywords": [
        "coursier Asnières-sur-Seine",
        "livraison express 92600",
        "coursier cosmétique Asnières",
        "coursier express 92"
      ]
    }
  },
  {
    slug: "colombes",
    dept: "92700",
    name: "Colombes",
    fullName: "Colombes — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Stade Yves-du-Manoir","Parc d'activités Kleber","Hôpital Louis-Mourier","La Petite Garenne"],
    intro: "Colombes mêle zones pavillonnaires résidentielles et parcs d'activités tertiaires. L'Hôpital Louis-Mourier en fait également un point focal pour le transport de santé sur la boucle nord des Hauts-de-Seine.",
    logisticsContext: "Desservie par l'A86, Colombes offre un accès rapide à La Défense et à Gennevilliers. Nos coursiers garantissent une prise en charge rapide pour toutes les zones d'activités et le pôle hospitalier.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Urgences biologiques et transport de sang pour l'Hôpital Louis-Mourier.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transferts de dossiers d'ingénierie et de R&D pour les parcs d'activités.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transmissions sécurisées d'actes pour les notaires de la ville.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Distribution express de commandes internet aux particuliers et commerçants.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Logistique sportive et événementielle en lien avec le Stade Yves-du-Manoir.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Contrats logistiques pour les établissements de santé.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Louis-Mourier","Pôles de R&D","Infrastructures sportives","PME d'ingénierie"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Colombes — Hôpital Louis-Mourier, Pôles Tertiaires | ONE CONNEXION",
      "description": "Coursier express à Colombes (92). Spécialiste transport médical hospitalier et navettes pour les parcs d'activités. Enlèvement < 45 min.",
      "keywords": [
        "coursier Colombes",
        "livraison express 92700",
        "coursier hôpital Colombes",
        "coursier médical 92"
      ]
    }
  },
  {
    slug: "gennevilliers",
    dept: "92230",
    name: "Gennevilliers",
    fullName: "Gennevilliers — Hauts-de-Seine",
    category: "hauts-de-seine",
    landmarks: ["Port de Gennevilliers","Parc des Chanteraines","A86 / A15","Zone Industrielle"],
    intro: "Gennevilliers est le poumon logistique et industriel des Hauts-de-Seine, abritant le premier port fluvial d'Île-de-France. Les immenses zones d'activités hébergent transporteurs, grossistes et industries de pointe nécessitant une réactivité à la minute.",
    logisticsContext: "Le maillage autoroutier exceptionnel (A86, A15) et la vocation fret de Gennevilliers en font un territoire idéal pour nos fourgons et véhicules dédiés au transport B2B volumineux ou urgent.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Acheminement urgent de pièces détachées industrielles et d'outillage aéronautique.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Livraison de stands et matériel volumineux depuis les plateformes logistiques.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport fret"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'équipements médicaux lourds et réassort de pharmacies.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transmission des bons de douane et documents de transit maritime du Port.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Injection de colis et réassort d'entrepôts e-commerce same-day.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Solutions logistiques sur-mesure pour les acteurs industriels de la zone.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Industriels","Acteurs du Port fluvial","Logisticiens","Grossistes et distributeurs"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Gennevilliers — Port Fluvial, Zones Industrielles 92 | ONE CONNEXION",
      "description": "Coursier express à Gennevilliers (92). Spécialiste de la course B2B urgente, pièces détachées et documents douaniers. Flotte moto et utilitaires.",
      "keywords": [
        "coursier Gennevilliers",
        "livraison express 92230",
        "coursier port Gennevilliers",
        "coursier industriel 92"
      ]
    }
  },
  {
    slug: "pantin",
    dept: "93500",
    name: "Pantin",
    fullName: "Pantin — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Canal de l'Ourcq","Grands Moulins","Centre National de la Danse","Cité de l'Artisanat"],
    intro: "Souvent surnommée le \"Brooklyn parisien\", Pantin connaît un essor fulgurant. Les ateliers de haute couture (Hermès, Chanel), les agences de publicité et les galeries d'art ont remplacé les anciennes usines le long du canal de l'Ourcq.",
    logisticsContext: "La proximité immédiate avec Paris 19e et La Villette permet des temps de trajet records. Nos coursiers manipulent quotidiennement des marchandises à forte valeur ajoutée exigeant le plus grand soin.",
    sectors: [
      {
        "name": "E-commerce & Luxe",
        "example": "Transport ultra-sécurisé de maroquinerie, parfumerie et pièces de haute couture.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transferts de dossiers créatifs et d'échantillons textiles pour les studios de design.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Manutention et transport d'œuvres d'art pour les nouvelles galeries pantinoises.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport d'art"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Liaisons régulières avec les centres de santé de l'Est parisien.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Navettes de documents juridiques pour les nouvelles implantations d'entreprises.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Grands comptes",
        "example": "Service gant blanc pour les maisons du luxe implantées sur le canal.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Maisons de Haute Couture","Agences de communication","Galeries d'art","Studios de design"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Pantin — Canal de l'Ourcq, Luxe & Création 93 | ONE CONNEXION",
      "description": "Coursier express à Pantin (93500). Spécialiste haute couture, galeries d'art et agences de pub. Course dédiée, traçabilité et discrétion garantie.",
      "keywords": [
        "coursier Pantin",
        "livraison express 93500",
        "coursier luxe Pantin",
        "coursier canal de l'ourcq"
      ]
    }
  },
  {
    slug: "aubervilliers",
    dept: "93300",
    name: "Aubervilliers",
    fullName: "Aubervilliers — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Campus Condorcet","Fashion Center (CIFA)","Canal Saint-Denis","Porte d'Aubervilliers"],
    intro: "Aubervilliers est l'une des plaques tournantes du commerce de gros en Europe, particulièrement pour le textile (CIFA). Le récent Campus Condorcet ajoute une forte dimension universitaire et de recherche à la ville.",
    logisticsContext: "Les embouteillages fréquents autour des zones de grossistes rendent la livraison en camionnette fastidieuse. Nos coursiers en deux-roues s'affranchissent du trafic pour livrer échantillons et documents dans des délais imbattables.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Acheminement ultra-rapide de prototypes textiles et d'échantillons de mode.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Liaisons B2B pour le réassort urgent des grossistes et importateurs.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges de documents académiques et administratifs avec le Campus Condorcet.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Desserte des laboratoires de recherche en sciences humaines et sociales.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Matériel promotionnel pour les showrooms de prêt-à-porter.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Tournées logistiques pour les acteurs majeurs du commerce international.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Grossistes Textile (CIFA)","Campus Condorcet","Importateurs","Studios TV (Parc des Portes de Paris)"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Aubervilliers — Fashion Center, Campus Condorcet | ONE CONNEXION",
      "description": "Coursier express à Aubervilliers (93). Transport d'échantillons textiles, liaisons grossistes, navettes Campus Condorcet. Enlèvement rapide.",
      "keywords": [
        "coursier Aubervilliers",
        "livraison express 93300",
        "coursier grossiste Aubervilliers",
        "coursier mode 93"
      ]
    }
  },
  {
    slug: "bobigny",
    dept: "93000",
    name: "Bobigny",
    fullName: "Bobigny — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Préfecture de Seine-Saint-Denis","Tribunal Judiciaire de Bobigny","Hôpital Avicenne","Canal de l'Ourcq"],
    intro: "En tant que préfecture du 93, Bobigny est le cœur administratif et judiciaire du département. Le Tribunal Judiciaire de Bobigny, l'un des plus importants de France, génère un flux constant d'échanges d'actes juridiques. L'Hôpital Avicenne y représente l'excellence médicale universitaire.",
    logisticsContext: "Dotée d'un réseau de transport central, Bobigny est le carrefour de la Seine-Saint-Denis. Nos coursiers naviguent quotidiennement entre le tribunal, la préfecture et les cabinets d'avocats de toute l'Île-de-France.",
    sectors: [
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts urgents au Palais de Justice, significations et tocs.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'analyses et sang (ADR) pour l'Hôpital Avicenne et ses partenaires.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Navettes administratives avec les services de la Préfecture du 93.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons B2B pour le tissu entrepreneurial des zones industrielles.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Logistique pour les événements institutionnels du département.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Gestion centralisée des expéditions pour les juridictions et hôpitaux.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Tribunal Judiciaire de Bobigny","Hôpital Avicenne","Préfecture de Seine-Saint-Denis","Cabinets d'Avocats"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Bobigny — Tribunal Judiciaire, Hôpital Avicenne 93 | ONE CONNEXION",
      "description": "Coursier express à Bobigny (93). Expert en dépôt juridique au Palais de Justice, transport médical (Avicenne) et administratif. Enlèvement < 45 min.",
      "keywords": [
        "coursier Bobigny",
        "livraison express 93000",
        "coursier tribunal Bobigny",
        "coursier médical Avicenne"
      ]
    }
  },
  {
    slug: "noisy-le-grand",
    dept: "93160",
    name: "Noisy-le-Grand",
    fullName: "Noisy-le-Grand — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Quartier d'Affaires du Mont d'Est","Espaces d'Abraxas","Arènes de Picasso","RER A - Autoroute A4"],
    intro: "Principal pôle tertiaire de l'Est parisien (Marne-la-Vallée), Noisy-le-Grand est une ville dynamique abritant les sièges de nombreuses ETI, de centres de formation et d'entreprises du bâtiment et de l'ingénierie.",
    logisticsContext: "Traversée par l'autoroute A4, Noisy-le-Grand bénéficie d'un accès ultra-rapide vers Paris Bercy (15 min) et vers l'Est de la région. Nos flottes adaptées (moto et utilitaires) répondent aux besoins variés des entreprises du Mont d'Est.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaisons régulières d'appels d'offres et plans d'architectes pour le secteur de l'ingénierie.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges de contrats de travail pour les sièges sociaux et centres d'affaires.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Distribution de dispositifs médicaux pour les cliniques privées de l'Est francilien.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Fourniture IT et bureautique express pour le quartier d'affaires du Mont d'Est.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison B2B"
      },
      {
        "name": "Événementiel",
        "example": "Matériel pour les séminaires organisés dans les grands hôtels locaux.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Contrats de navettes régulières inter-sites (Noisy <-> Paris).",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Sièges d'entreprises ETI","Bureaux d'études (Mont d'Est)","Centres de formation","Acteurs du BTP"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Noisy-le-Grand — Quartier Mont d'Est 93 | ONE CONNEXION",
      "description": "Coursier express à Noisy-le-Grand (93). Navettes pour le quartier d'affaires Mont d'Est, bureaux d'études et ingénierie. Accès rapide par l'A4.",
      "keywords": [
        "coursier Noisy-le-Grand",
        "livraison express 93160",
        "coursier Mont d'Est",
        "coursier 93 est"
      ]
    }
  },
  {
    slug: "bondy",
    dept: "93140",
    name: "Bondy",
    fullName: "Bondy — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Hôpital Jean-Verdier","Canal de l'Ourcq","Autoroute A3","Forêt de Bondy (limite)"],
    intro: "Bondy occupe une position centrale en Seine-Saint-Denis. La ville s'articule autour d'axes logistiques majeurs (A3, N3) et accueille l'Hôpital Jean-Verdier (AP-HP), spécialiste en assistance médicale à la procréation et hépato-gastroentérologie.",
    logisticsContext: "Le maillage routier de Bondy permet à nos chauffeurs d'irriguer facilement tout le 93. Nos véhicules équipés assurent les missions sanitaires les plus critiques depuis et vers Jean-Verdier en respectant la chaîne du froid.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Acheminement ultra-sensible (ADR) et cryogénique pour l'Hôpital Jean-Verdier.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Approvisionnement urgent de pièces et fournitures pour les PME locales.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Navettes administratives pour les structures de l'économie sociale et solidaire.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons du dernier kilomètre pour les e-commerçants de l'est parisien.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Événementiel",
        "example": "Logistique pour les manifestations sportives et associatives locales.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Prestations hospitalières sous contrat pour le groupe AP-HP.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Jean-Verdier (AP-HP)","PME industrielles","Associations","E-commerçants"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Bondy — Hôpital Jean-Verdier, Transport Médical | ONE CONNEXION",
      "description": "Coursier express à Bondy (93). Transport médical spécialisé (Hôpital Jean-Verdier) et livraisons PME urgentes. Enlèvement garanti < 45 min.",
      "keywords": [
        "coursier Bondy",
        "livraison express 93140",
        "coursier médical Bondy",
        "coursier Jean-Verdier"
      ]
    }
  },
  {
    slug: "aulnay-sous-bois",
    dept: "93600",
    name: "Aulnay-sous-Bois",
    fullName: "Aulnay-sous-Bois — Seine-Saint-Denis",
    category: "seine-saint-denis",
    landmarks: ["Hôpital Robert Ballanger","Autoroute A1 / A3","O'Parinor","Parc d'activités Garonor"],
    intro: "Aulnay-sous-Bois est un hub logistique incontournable du nord de Paris, porté par Garonor et sa proximité avec l'aéroport de Roissy-CDG. C'est le terrain de jeu des transitaires, douaniers et industriels.",
    logisticsContext: "Nos coursiers et chauffeurs VL naviguent en permanence entre les plateformes de Garonor, les douanes de Roissy et les entreprises parisiennes pour des remises en express de documents d'import-export ou de fret léger.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Acheminement urgent de carnets ATA, liasses douanières et lettres de voiture (LTA).",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course douane"
      },
      {
        "name": "Événementiel",
        "example": "Navettes de pièces industrielles depuis les plateformes logistiques de Garonor.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport B2B"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transport d'analyses et de sang pour le Centre Hospitalier Robert Ballanger.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges de documents commerciaux pour les directions de zones d'activités.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Réassort express de stocks depuis les entrepôts d'O'Parinor.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison e-commerce"
      },
      {
        "name": "Grands comptes",
        "example": "Partenariats avec les transitaires pour les enlèvements sous douane.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Transitaires et Logisticiens (Garonor)","Hôpital Ballanger","Douanes","Importateurs"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Aulnay-sous-Bois — Garonor, Hôpital Ballanger | ONE CONNEXION",
      "description": "Coursier express à Aulnay-sous-Bois (93). Expert en documents douaniers (Garonor), fret léger et transport médical. Enlèvement < 45 min.",
      "keywords": [
        "coursier Aulnay-sous-Bois",
        "livraison express 93600",
        "coursier douane Garonor",
        "coursier Roissy"
      ]
    }
  },
  {
    slug: "saint-maur-des-fosses",
    dept: "94100",
    name: "Saint-Maur-des-Fossés",
    fullName: "Saint-Maur-des-Fossés — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Boucles de la Marne","Place de la Louvière","La Varenne Saint-Hilaire","Hôtel de Ville"],
    intro: "Presqu'île verdoyante de la petite couronne, Saint-Maur-des-Fossés abrite une clientèle résidentielle aisée, de nombreuses cliniques privées, et un réseau dense d'artisans, d'architectes et de professions libérales.",
    logisticsContext: "La géographie singulière de la boucle de la Marne, avec ses ponts parfois engorgés, ne ralentit pas nos scooters qui assurent une liaison ultra-fluide vers Paris et le pôle de Créteil.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Liaisons de santé entre les nombreuses cliniques de Saint-Maur et les laboratoires spécialisés.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Signatures et remises d'actes authentiques pour les études notariales locales.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transmission de plans et maquettes pour les cabinets d'architectes et d'urbanisme.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraison premium en main propre pour les boutiques indépendantes et épiceries fines.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Événementiel",
        "example": "Logistique délicate pour les mariages et réceptions de la Varenne Saint-Hilaire.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Service sur-mesure pour les gestionnaires de patrimoine et family offices.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Cliniques privées","Études Notariales","Architectes","Boutiques Premium"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Saint-Maur-des-Fossés — Médical & Professions Libérales | ONE CONNEXION",
      "description": "Coursier express à Saint-Maur-des-Fossés (94). Spécialiste cliniques privées, professions libérales et livraisons premium. Enlèvement < 45 min.",
      "keywords": [
        "coursier Saint-Maur-des-Fossés",
        "livraison express 94100",
        "coursier La Varenne Saint-Hilaire",
        "coursier 94"
      ]
    }
  },
  {
    slug: "vitry-sur-seine",
    dept: "94400",
    name: "Vitry-sur-Seine",
    fullName: "Vitry-sur-Seine — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["MAC VAL (Musée d'Art Contemporain)","Exploradôme","Les Ardoines","Bords de Seine"],
    intro: "Vitry-sur-Seine est la plus grande ville du Val-de-Marne. Avec le MAC VAL, elle s'affirme comme un pôle culturel, tandis que le vaste projet des Ardoines dynamise son tissu industriel et biotechnologique avec l'implantation de nouveaux centres de recherche (Sanofi, etc.).",
    logisticsContext: "Limitrophe de Paris (13e), Vitry dispose d'un accès rapide au périphérique. Nos chauffeurs s'y déploient pour des missions exigeantes, du transport d'art délicat à la livraison d'échantillons biologiques.",
    sectors: [
      {
        "name": "Événementiel",
        "example": "Transport d'œuvres d'art avec emballage spécifique pour les galeries et le MAC VAL.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport d'art"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Acheminement sous température dirigée pour les pôles biotechnologiques des Ardoines.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Liaisons urgentes de pièces et composants pour l'industrie pharmaceutique.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Dépôts administratifs pour les grandes entreprises industrielles.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Fourniture et approvisionnement des PME du secteur culturel et artistique.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison B2B"
      },
      {
        "name": "Grands comptes",
        "example": "Tournées pour les géants de la recherche médicale implantés à Vitry.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Institutions culturelles (MAC VAL)","Centres de recherche biotechnologique","Industries","PME Innovantes"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Vitry-sur-Seine — MAC VAL, Biotechnologies | ONE CONNEXION",
      "description": "Coursier express à Vitry-sur-Seine (94). Expert en logistique pour les biotechnologies (Les Ardoines) et le transport d'art (MAC VAL).",
      "keywords": [
        "coursier Vitry-sur-Seine",
        "livraison express 94400",
        "coursier art Vitry",
        "coursier médical biotechnologie"
      ]
    }
  },
  {
    slug: "alfortville",
    dept: "94140",
    name: "Alfortville",
    fullName: "Alfortville — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Confluent Marne/Seine","Chinagora","Pont à l'Anglais","Gare Maisons-Alfort - Alfortville"],
    intro: "Bordée par la Seine et la Marne, Alfortville attire une jeune garde entrepreneuriale, des ateliers d'artisans, des studios de création numérique et bénéficie du dynamisme touristique lié à Chinagora.",
    logisticsContext: "Séparée de Paris par le périphérique et de Vitry par la Seine, Alfortville requiert une logistique agile. Nos coursiers en deux-roues connectent rapidement ces entreprises au 12e et 13e arrondissements en quelques minutes.",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Liaison expresse pour les agences web et les studios de production vidéo.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Événementiel",
        "example": "Livraison de matériel d'exposition pour le complexe hôtelier de Chinagora.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Transport de documents administratifs pour les PME et artisans locaux.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Navettes d'échantillons avec les cliniques vétérinaires (proximité École Vétérinaire).",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraison du dernier kilomètre pour les artisans et petits créateurs de la ville.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Grands comptes",
        "example": "Contrats de coursiers mensuels pour les entreprises de la zone d'activités.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôtels et tourisme","Studios de production","Artisans d'art","Agences web"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Alfortville — Artisans, Création Numérique | ONE CONNEXION",
      "description": "Coursier express à Alfortville (94). Navettes pour les artisans, studios de création et complexes hôteliers (Chinagora). Enlèvement < 45 min.",
      "keywords": [
        "coursier Alfortville",
        "livraison express 94140",
        "coursier 94",
        "navette entreprise Alfortville"
      ]
    }
  },
  {
    slug: "champigny-sur-marne",
    dept: "94500",
    name: "Champigny-sur-Marne",
    fullName: "Champigny-sur-Marne — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Bords de Marne","Parc du Plateau","Hôpital Privé Paul d'Égine","Vieux Saint-Maur (limite)"],
    intro: "Champigny-sur-Marne allie un vaste tissu pavillonnaire à des pôles d'activités tertiaires et médicaux majeurs, à l'image de l'Hôpital Privé Paul d'Égine, véritable centre de référence de l'Est parisien.",
    logisticsContext: "Bien desservie par l'A4 qui longe la ville, Champigny est une plateforme logistique idéale pour desservir la grande couronne est (77) tout en restant à 20 minutes de Paris intra-muros.",
    sectors: [
      {
        "name": "Médical & Laboratoires",
        "example": "Rapatriement d'urgences sanguines et de biologie moléculaire pour Paul d'Égine.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Corporate & Agences",
        "example": "Transferts de dossiers d'appels d'offres pour les entreprises du bâtiment locales.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Signatures de compromis entre les agences immobilières et notaires campinois.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons volumineuses ou express pour les zones commerciales de la ville.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison express"
      },
      {
        "name": "Événementiel",
        "example": "Distribution d'équipements pour les événements de plein air sur les bords de Marne.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Facturation sur mesure pour les cliniques et centres d'imagerie médicale.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Hôpital Privé Paul d'Égine","Entreprises du BTP","Cliniques","Notaires"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Champigny-sur-Marne — Hôpital Paul d'Égine 94 | ONE CONNEXION",
      "description": "Coursier express à Champigny-sur-Marne (94). Transport de santé (Paul d'Égine), BTP et courses B2B régulières. Enlèvement rapide garanti.",
      "keywords": [
        "coursier Champigny-sur-Marne",
        "livraison express 94500",
        "coursier médical Champigny"
      ]
    }
  },
  {
    slug: "charenton-le-pont",
    dept: "94220",
    name: "Charenton-le-Pont",
    fullName: "Charenton-le-Pont — Val-de-Marne",
    category: "val-de-marne",
    landmarks: ["Bois de Vincennes","Centre commercial Bercy 2","Siège Natixis","Quai des Carrières"],
    intro: "Limitrophe du 12e arrondissement (Bercy), Charenton-le-Pont est le verrou stratégique du sud-est parisien. Elle héberge le gigantesque complexe Bercy 2, des sièges bancaires (Natixis) et de grands négociants en vins.",
    logisticsContext: "Charenton est au croisement du périphérique et de l'A4. Nos coursiers franchissent quotidiennement cette frontière invisible pour lier les grands comptes de Charenton à l'hyper-centre parisien en un temps record (moins de 15 minutes pour Bercy).",
    sectors: [
      {
        "name": "Corporate & Agences",
        "example": "Navettes ultra-rapides de documents financiers sécurisés pour les sièges bancaires.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Course dédiée"
      },
      {
        "name": "Juridique & Notarial",
        "example": "Échanges d'actes pour les cabinets d'avocats installés aux portes de Paris.",
        "serviceHref": "/services/plis-confidentiels",
        "serviceLabel": "Plis confidentiels"
      },
      {
        "name": "E-commerce & Luxe",
        "example": "Livraisons d'échantillons de crus millésimés pour les négociants en vins de Bercy.",
        "serviceHref": "/services/livraison-e-commerce",
        "serviceLabel": "Livraison luxe"
      },
      {
        "name": "Médical & Laboratoires",
        "example": "Transferts de matériel optique pour le géant mondial (Essilor) situé à proximité.",
        "serviceHref": "/services/transport-medical",
        "serviceLabel": "Transport médical"
      },
      {
        "name": "Événementiel",
        "example": "Acheminement de décors de stands pour les événements du centre commercial.",
        "serviceHref": "/services/transport-evenementiel",
        "serviceLabel": "Transport événementiel"
      },
      {
        "name": "Grands comptes",
        "example": "Navettes régulières pour les institutions financières et sièges sociaux.",
        "serviceHref": "/services/compte-entreprise",
        "serviceLabel": "Compte entreprise"
      }
    ],
    keyClients: ["Banques (Natixis)","Négociants en Vins","Sièges sociaux","Centres commerciaux"],
    pricingZone: "standard",
    seo: {
      "title": "Coursier Charenton-le-Pont — Sièges Bancaires, Bercy 2 | ONE CONNEXION",
      "description": "Coursier express à Charenton-le-Pont (94). Aux portes de Paris (Bercy), spécialiste des navettes bancaires et sièges sociaux. Enlèvement < 45 min.",
      "keywords": [
        "coursier Charenton-le-Pont",
        "livraison express 94220",
        "coursier banque Charenton",
        "navette entreprise 94"
      ]
    }
  },
];

export const ZONE_SLUGS = ZONES.map((z) => z.slug);

export function getZone(slug: string): Zone | undefined {
  return ZONES.find((z) => z.slug === slug);
}

export function getZonesByCategory(category: Zone["category"]): Zone[] {
  return ZONES.filter((z) => z.category === category);
}
