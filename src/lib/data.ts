import {
  Package,
  Trees,
  HandHelping,
  Sparkles,
  Clock,
  ShieldCheck,
  MessageCircle,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type ServicePole = {
  id: string;
  title: string;
  short: string;
  description: string;
  href: string;
  icon: LucideIcon;
  items: string[];
  image: string;
  imageAlt: string;
};

export const SERVICE_POLES: ServicePole[] = [
  {
    id: "debarras",
    title: "Débarras",
    short: "Grenier, cave, garage, maison, succession…",
    description:
      "On vide, on trie, on évacue. Greniers encombrés, caves oubliées, garages saturés ou succession à gérer : on s’occupe du chantier de A à Z.",
    href: "/services#debarras",
    icon: Package,
    items: [
      "Grenier, cave, garage",
      "Maison complète",
      "Succession / vide-maison",
      "Évacuation et tri responsables",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    imageAlt: "Garage encombré prêt pour un débarras",
  },
  {
    id: "nettoyage",
    title: "Nettoyage",
    short: "Remise en état, après chantier ou déménagement",
    description:
      "Un espace vidé mérite d’être propre. Nettoyage de fin de chantier, après déménagement ou remise en état : on laisse un lieu utilisable.",
    href: "/services#nettoyage",
    icon: Sparkles,
    items: [
      "Après débarras",
      "Avant / après déménagement",
      "Remise en état légère",
      "Espaces de stockage",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
    imageAlt: "Nettoyage professionnel d’un intérieur",
  },
  {
    id: "exterieur",
    title: "Extérieur",
    short: "Feuilles, terrasse, cour, déchets verts…",
    description:
      "L’extérieur aussi, on s’en occupe. Ramassage de feuilles, nettoyage de terrasse ou de cour, évacuation de déchets verts.",
    href: "/services#exterieur",
    icon: Trees,
    items: [
      "Ramassage de feuilles",
      "Terrasse et cour",
      "Déchets verts",
      "Petits travaux d’entretien",
    ],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    imageAlt: "Jardin et extérieur à entretenir",
  },
  {
    id: "coups-de-main",
    title: "Coups de main",
    short: "Rangement, déplacement, aide ponctuelle",
    description:
      "Besoin d’une paire de bras de confiance ? Rangement, déplacement de meubles, préparation de déménagement : on intervient sans complication.",
    href: "/services#coups-de-main",
    icon: HandHelping,
    items: [
      "Rangement et organisation",
      "Déplacement de meubles",
      "Aide au déménagement",
      "Petites missions ponctuelles",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
    imageAlt: "Équipe en intervention — coups de main",
  },
];

/** Exemples illustratifs avant / après (stock — à remplacer par de vrais chantiers) */
export const BEFORE_AFTER = {
  before:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  after:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  beforeAlt: "Exemple — espace encombré avant intervention",
  afterAlt: "Exemple — espace dégagé après intervention",
};

export type Formule = {
  name: string;
  price: string;
  description: string;
  includes: string[];
  highlighted?: boolean;
};

export const FORMULES: Formule[] = [
  {
    name: "Coup de main",
    price: "À partir de 45 € / h",
    description:
      "Intervention ponctuelle : rangement, déplacement, petite aide. Idéal quand vous avez juste besoin d’un coup de pouce.",
    includes: ["1 intervenant", "Matériel de base", "Devis clair avant démarrage"],
  },
  {
    name: "Débarras",
    price: "Sur devis",
    description:
      "Évacuation d’un volume défini (grenier, cave, pièce…). Tri, chargement et enlèvement inclus selon le devis.",
    includes: [
      "Évaluation du volume",
      "Tri / évacuation",
      "Remise en état légère possible",
    ],
    highlighted: true,
  },
  {
    name: "Formule complète",
    price: "Sur devis",
    description:
      "Débarras + nettoyage + extérieur si besoin. Une seule équipe, un seul interlocuteur, zéro charge mentale.",
    includes: [
      "Plusieurs pôles combinés",
      "Planning adapté",
      "Suivi jusqu’à la fin",
    ],
  },
];

export const WHY_US = [
  {
    icon: Clock,
    title: "Rapide et simple",
    text: "Vous décrivez le besoin, on vous répond vite avec un devis clair. Pas de parcours compliqué.",
  },
  {
    icon: ShieldCheck,
    title: "Travail soigné",
    text: "On respecte vos lieux, on trie ce qui peut l’être, et on laisse derrière nous un espace utilisable.",
  },
  {
    icon: MessageCircle,
    title: "Contact humain",
    text: "Un vrai interlocuteur local, joignable, qui explique ce qui sera fait et à quel prix.",
  },
  {
    icon: MapPin,
    title: "Proximité Essonne",
    text: "Basés en Essonne, on intervient dans un rayon local en Île-de-France. Réactivité garantie.",
  },
];

/** Exemples de retours typiques — pas de vrais avis tant que l’activité démarre */
export const REVIEWS = [
  {
    name: "Exemple — Marie",
    city: "Essonne",
    text: "Grenier et cave vidés rapidement. Communication claire, devis respecté. Exactement ce qu’on cherche.",
    rating: 5,
  },
  {
    name: "Exemple — Thomas",
    city: "Essonne",
    text: "Après déménagement, tout remis en ordre. Gain de temps énorme, zéro prise de tête.",
    rating: 5,
  },
  {
    name: "Exemple — Sophie",
    city: "Île-de-France",
    text: "Succession à gérer, pas le moral. Une équipe qui prend tout en charge, ça change tout.",
    rating: 5,
  },
];

export const COMMUNES = [
  "Évry-Courcouronnes",
  "Corbeil-Essonnes",
  "Massy",
  "Palaiseau",
  "Saclay",
  "Orsay",
  "Gif-sur-Yvette",
  "Les Ulis",
  "Longjumeau",
  "Chilly-Mazarin",
  "Savigny-sur-Orge",
  "Sainte-Geneviève-des-Bois",
  "Viry-Châtillon",
  "Athis-Mons",
  "Juvisy-sur-Orge",
  "Brunoy",
  "Yerres",
  "Draveil",
  "Vigneux-sur-Seine",
  "Ris-Orangis",
];

export const TARIFS_INDICATIFS = [
  {
    label: "Coup de main (1 personne)",
    value: "45 – 55 € / h",
    note: "Minimum 2 h en général",
  },
  {
    label: "Équipe (2 personnes)",
    value: "80 – 100 € / h",
    note: "Idéal pour débarras / déménagement",
  },
  {
    label: "Petit volume (cave / pièce)",
    value: "À partir de 180 €",
    note: "Selon accès et volume",
  },
  {
    label: "Débarras maison / succession",
    value: "Sur devis",
    note: "Visite ou estimation photo",
  },
  {
    label: "Extérieur (feuilles, terrasse…)",
    value: "À partir de 90 €",
    note: "Selon surface et accès",
  },
  {
    label: "Formule complète",
    value: "Sur devis",
    note: "Pack multi-services",
  },
];

export const NEED_OPTIONS = [
  { value: "debarras", label: "Débarras" },
  { value: "nettoyage", label: "Nettoyage" },
  { value: "exterieur", label: "Extérieur" },
  { value: "coups-de-main", label: "Coups de main" },
  { value: "formule-complete", label: "Formule complète" },
  { value: "autre", label: "Autre / je ne sais pas" },
] as const;

export const URGENCY_OPTIONS = [
  { value: "flexible", label: "Flexible (dans les 2–3 semaines)" },
  { value: "soon", label: "Sous 7 jours" },
  { value: "urgent", label: "Urgent (ASAP)" },
] as const;
