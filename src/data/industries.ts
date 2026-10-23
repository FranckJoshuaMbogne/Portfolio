import type { Industry } from "@/content/types";

/** Default industries — editable in /admin → Industries. */
export const industries: Industry[] = [
  {
    slug: "luxury-fashion",
    name: { en: "Luxury fashion & bespoke tailoring", fr: "Mode de luxe et sur-mesure" },
    description: {
      en: "E-commerce, SEO and paid acquisition for premium custom menswear across India and the U.S.",
      fr: "E-commerce, SEO et acquisition payante pour la mode homme sur mesure premium, en Inde et aux États-Unis.",
    },
    orgs: ["my-perfect-fit"],
    projects: ["blutailor", "mudraa-design"],
  },
  {
    slug: "banking-finance",
    name: { en: "Banking & financial services", fr: "Banque et services financiers" },
    description: {
      en: "Product benchmarks, business cases, campaigns and customer analytics.",
      fr: "Benchmarks produits, business cases, campagnes et analyse client.",
    },
    orgs: ["afg-bank"],
    projects: ["afg-bank-campaigns"],
  },
  {
    slug: "marketing-agencies",
    name: { en: "Marketing & digital agencies", fr: "Agences marketing et digitales" },
    description: {
      en: "Agency positioning, conversion websites and lead management.",
      fr: "Positionnement d'agence, sites de conversion et gestion des leads.",
    },
    orgs: [],
    projects: ["springs-360"],
  },
  {
    slug: "agro-industry",
    name: { en: "Agro-industry", fr: "Agro-industrie" },
    description: {
      en: "Brand identity for collectives building local value chains.",
      fr: "Identité de marque pour des collectifs qui bâtissent des filières locales.",
    },
    orgs: [],
    projects: ["gic-ifta-brand"],
  },
  {
    slug: "networks-nonprofits",
    name: { en: "Professional networks & non-profits", fr: "Réseaux professionnels et associations" },
    description: {
      en: "Brand, partnerships, events and data protection for member organisations.",
      fr: "Marque, partenariats, événements et protection des données pour des organisations de membres.",
    },
    orgs: ["rp237", "aiesec"],
    projects: ["rp237-brand"],
  },
];
