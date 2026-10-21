import type { L } from "@/i18n";

/**
 * EXPERIENCE — taken from your LinkedIn profile (Oct 2026).
 * Add a role: copy one object, change the fields. Dates are "YYYY-MM"; end: null = current.
 */
export interface Role {
  title: L;
  start: string;
  end: string | null;
  type: L;
  location: L;
  summary: L;
  highlights: L[];
  skills: string[];
}

export interface Organisation {
  id: string;
  name: string;
  /** Short description of the organisation. */
  about: L;
  country: "India" | "USA" | "Cameroon";
  url?: string;
  roles: Role[];
  /** Service domains this experience proves (see services.ts). */
  domains: string[];
}

export const experience: Organisation[] = [
  {
    id: "my-perfect-fit",
    name: "My Perfect Fit · BluTailor",
    about: {
      en: "Parent company of BluTailor, a premium bespoke tailoring brand (India), and Mudraa Design, its U.S. branch.",
      fr: "Maison mère de BluTailor, marque premium de tailleur sur mesure (Inde), et de Mudraa Design, sa branche américaine.",
    },
    country: "India",
    url: "https://www.blutailor.com",
    domains: ["performance", "web", "data", "brand"],
    roles: [
      {
        title: { en: "Sales and Marketing Specialist", fr: "Spécialiste ventes et marketing" },
        start: "2026-07",
        end: null,
        type: { en: "Full-time · On-site", fr: "Temps plein · Sur site" },
        location: { en: "Hyderabad, India", fr: "Hyderabad, Inde" },
        summary: {
          en: "Building the digital marketing ecosystem and market mapping, and turning campaign data into sales-growth strategy.",
          fr: "Construction de l'écosystème marketing digital et de la cartographie du marché, et conversion des données de campagne en stratégie de croissance des ventes.",
        },
        highlights: [
          { en: "Built the digital marketing ecosystem and market mapping", fr: "Construction de l'écosystème marketing digital et de la cartographie du marché" },
          { en: "Managed Google Ads and Meta Ads campaigns", fr: "Gestion des campagnes Google Ads et Meta Ads" },
          { en: "Developed sales-growth strategies based on campaign performance", fr: "Stratégies de croissance des ventes basées sur la performance des campagnes" },
          { en: "Worked with the development team on website and SEO improvements", fr: "Collaboration avec l'équipe de développement sur le site et le SEO" },
        ],
        skills: ["Google Ads", "Meta Ads", "SEO", "Market mapping"],
      },
      {
        title: { en: "Digital Services Officer", fr: "Responsable des services digitaux" },
        start: "2025-12",
        end: null,
        type: { en: "Full-time · On-site", fr: "Temps plein · Sur site" },
        location: { en: "Hyderabad, India", fr: "Hyderabad, Inde" },
        summary: {
          en: "Joined as the third member of the digital team and took ownership of BluTailor India and the U.S. branch, Mudraa Design — turning fragmented tools into one system built for predictable, profitable growth.",
          fr: "Arrivé comme troisième membre de l'équipe digitale, j'ai pris en charge BluTailor Inde et la branche américaine Mudraa Design — pour transformer des outils dispersés en un système conçu pour une croissance prévisible et rentable.",
        },
        highlights: [
          { en: "Structured and stabilised the acquisition ecosystem (Google Ads, Meta)", fr: "Structuration et stabilisation de l'écosystème d'acquisition (Google Ads, Meta)" },
          { en: "Found the funnel bottlenecks hurting conversion and lead quality", fr: "Identification des goulots du tunnel qui freinaient la conversion et la qualité des leads" },
          { en: "Rebuilt tracking and processes to improve signal quality and performance visibility", fr: "Refonte du tracking et des process pour améliorer la qualité du signal et la visibilité des performances" },
          { en: "Adapted acquisition and messaging for the U.S. market (Mudraa Design)", fr: "Adaptation de l'acquisition et des messages au marché américain (Mudraa Design)" },
          { en: "Shopify development, technical SEO and page-speed work on blutailor.com", fr: "Développement Shopify, SEO technique et performance sur blutailor.com" },
        ],
        skills: ["Data analysis", "Campaigns", "Shopify", "Tracking", "CRM", "CAC / LTV"],
      },
    ],
  },
  {
    id: "rp237",
    name: "Réseau des Professionnels du Cameroun (RP 237)",
    about: {
      en: "A professional network in Cameroon, known for the conference “L'expérience Parle”.",
      fr: "Réseau professionnel camerounais, connu pour la conférence « L'expérience Parle ».",
    },
    country: "Cameroon",
    domains: ["brand"],
    roles: [
      {
        title: { en: "Head of Design & Brand Identity", fr: "Responsable design et identité de marque" },
        start: "2025-10",
        end: null,
        type: { en: "Part-time · Hybrid", fr: "Temps partiel · Hybride" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: {
          en: "Leading the graphic design and brand identity team as communication becomes central to the network's growth.",
          fr: "Direction de l'équipe création graphique et identité de marque, alors que la communication devient centrale dans la croissance du réseau.",
        },
        highlights: [
          { en: "Lead the graphic creation and brand identity team", fr: "Direction de l'équipe création graphique et identité de marque" },
          { en: "Responsive design and brand identity across all supports", fr: "Design responsive et identité de marque sur tous les supports" },
        ],
        skills: ["Adobe Illustrator", "Adobe Photoshop", "Brand identity"],
      },
    ],
  },
  {
    id: "afg-bank",
    name: "AFG Bank Cameroun",
    about: {
      en: "The third-largest bank in Cameroon.",
      fr: "La 3e banque du Cameroun.",
    },
    country: "Cameroon",
    domains: ["brand", "data", "consulting"],
    roles: [
      {
        title: { en: "Marketing Communications & Customer Experience Analyst (Intern)", fr: "Analyste marketing, communication et expérience client (stage)" },
        start: "2025-07",
        end: "2025-12",
        type: { en: "Internship", fr: "Stage" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: {
          en: "In the Marketing, Communication & Customer Experience department, working with the product manager on offers, campaigns and customer data.",
          fr: "À la direction Marketing, Communication et Expérience Client, aux côtés du chargé de produit sur les offres, les campagnes et les données clients.",
        },
        highlights: [
          { en: "Benchmarked prepaid and debit VISA card offers", fr: "Benchmark des offres de cartes VISA prépayées et de débit" },
          { en: "Wrote business cases for banking products and exclusive packs", fr: "Business cases pour produits bancaires et packs exclusifs" },
          { en: "Campaigns: CHAZU, CRESCO, Bancassurance Week", fr: "Campagnes : CHAZU, CRESCO, Semaine de la Bancassurance" },
          { en: "Sales arguments to present products to customers", fr: "Argumentaires de vente pour présenter les produits aux clients" },
          { en: "Customer data analysis: churn, satisfaction, product adoption", fr: "Analyse des données clients : churn, satisfaction, adhésion aux produits" },
        ],
        skills: ["Business cases", "Campaigns", "Customer analytics", "Account management"],
      },
    ],
  },
  {
    id: "king-arthur",
    name: "King Arthur",
    about: { en: "A Cameroonian company.", fr: "Entreprise camerounaise." },
    country: "Cameroon",
    domains: ["brand", "performance"],
    roles: [
      {
        title: { en: "Marketing Communications Manager", fr: "Responsable communications marketing" },
        start: "2023-12",
        end: "2025-06",
        type: { en: "Full-time · Hybrid", fr: "Temps plein · Hybride" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: {
          en: "In charge of social media and the marketing strategy for web, social and field — digital and traditional — to build the brand and support sales targets.",
          fr: "En charge des réseaux sociaux et de la stratégie marketing web, réseaux sociaux et terrain — digital et traditionnel — pour l'image de marque et les objectifs de vente.",
        },
        highlights: [
          { en: "Defined the marketing strategy for web, social media and field", fr: "Définition de la stratégie marketing web, réseaux sociaux et terrain" },
          { en: "Managed social media communication", fr: "Gestion de la communication sur les réseaux sociaux" },
          { en: "Supported the company's sales objectives", fr: "Accompagnement des objectifs de vente de l'entreprise" },
          { en: "Managed IT infrastructure", fr: "Gestion des infrastructures informatiques" },
        ],
        skills: ["Social media", "Marketing strategy", "IT infrastructure"],
      },
    ],
  },
  {
    id: "aiesec",
    name: "AIESEC in Cameroon",
    about: {
      en: "Global non-profit developing young leaders through international exchanges.",
      fr: "Organisation internationale à but non lucratif qui développe le leadership des jeunes par les échanges internationaux.",
    },
    country: "Cameroon",
    domains: ["consulting", "brand", "data"],
    roles: [
      {
        title: { en: "Data Protection Officer", fr: "Délégué à la protection des données" },
        start: "2024-07",
        end: "2025-07",
        type: { en: "Full-time · On-site", fr: "Temps plein · Sur site" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: { en: "Responsible for data protection across the national entity.", fr: "Responsable de la protection des données de l'entité nationale." },
        highlights: [],
        skills: ["Data protection"],
      },
      {
        title: { en: "National Vice President — International B2B Partnerships & Exchanges", fr: "Vice-président national — Partenariats B2B internationaux et échanges" },
        start: "2024-06",
        end: "2024-12",
        type: { en: "Full-time · On-site", fr: "Temps plein · Sur site" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: { en: "Led international B2B partnerships and exchanges at national level.", fr: "Pilotage des partenariats B2B internationaux et des échanges au niveau national." },
        highlights: [],
        skills: ["Management", "Account management", "Partnerships"],
      },
      {
        title: { en: "Project, Partnerships & B2C Marketing Lead", fr: "Responsable projets, partenariats et marketing B2C" },
        start: "2023-02",
        end: "2024-05",
        type: { en: "Full-time · Hybrid", fr: "Temps plein · Hybride" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: { en: "Managed projects, partnerships and B2C marketing.", fr: "Gestion des projets, des partenariats et du marketing B2C." },
        highlights: [],
        skills: ["Management", "Strategy", "B2C marketing"],
      },
      {
        title: { en: "Marketing Team Leader", fr: "Chef d'équipe marketing" },
        start: "2022-10",
        end: "2023-02",
        type: { en: "Part-time · On-site", fr: "Temps partiel · Sur site" },
        location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
        summary: { en: "Led the marketing team.", fr: "Direction de l'équipe marketing." },
        highlights: [],
        skills: ["CRM"],
      },
    ],
  },
];

export const education = [
  {
    school: "ESSEC Business School",
    degree: {
      en: "Master's degree — Information Systems Management & Decision Analytics",
      fr: "Master — Management des systèmes d'information et analyse décisionnelle",
    },
    start: "2023-11",
    end: "2025-12",
  },
  {
    school: "University of Douala",
    degree: {
      en: "Bachelor's degree — Process Automation & Applied Physics (grade B+)",
      fr: "Licence — Automatisation des processus et physique appliquée (mention B+)",
    },
    start: "2015-10",
    end: "2019-07",
  },
];

export const certifications = [
  { name: "Business Analysis Fundamentals", issuer: "Project Management Institute", date: "2025-07" },
  { name: "Career Essentials in Data Analysis", issuer: "Microsoft & LinkedIn", date: "2025-06" },
  { name: "Data Analysis Career Track", issuer: "Microsoft", date: "2025-06" },
  { name: "Power BI: Build and Share Your First Dashboard", issuer: "LinkedIn", date: "2025-06" },
  { name: "Better Management with AI", issuer: "LinkedIn", date: "2025-06" },
  { name: "Intermediate Machine Learning", issuer: "Kaggle", date: "2025-06" },
  { name: "Intro to Machine Learning", issuer: "Kaggle", date: "2025-05" },
  { name: "Analyzing and Visualizing Data", issuer: "Kaggle", date: "2025-05" },
  { name: "Introduction to Programming Using Python", issuer: "Kaggle", date: "2025-05" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google Digital Academy (Skillshop)", date: "2023-12" },
];
