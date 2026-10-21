import type { L } from "@/i18n";

/**
 * SERVICES — five domains. Each one lists the services and links to the
 * companies (experience.ts ids) and projects (projects.ts slugs) that prove it.
 */
export interface ServiceItem {
  name: L;
  desc: L;
}

export interface Domain {
  slug: string;
  index: string;
  name: L;
  tagline: L;
  description: L;
  services: ServiceItem[];
  tools: string[];
  orgs: string[];
  projects: string[];
}

const s = (en: string, fr: string, den: string, dfr: string): ServiceItem => ({ name: { en, fr }, desc: { en: den, fr: dfr } });

export const domains: Domain[] = [
  {
    slug: "performance-marketing",
    index: "01",
    name: { en: "Performance Marketing", fr: "Marketing de performance" },
    tagline: { en: "Turn ad spend into predictable revenue.", fr: "Transformer le budget pub en revenu prévisible." },
    description: {
      en: "Google Ads and Meta Ads run as one acquisition system — channel mix, bidding logic and signal quality tuned against CAC, conversion and LTV, not vanity metrics.",
      fr: "Google Ads et Meta Ads pilotés comme un seul système d'acquisition — mix de canaux, logique d'enchères et qualité du signal réglés sur le CAC, la conversion et la LTV, pas sur des indicateurs de vanité.",
    },
    services: [
      s("Google Ads", "Google Ads", "Search, Performance Max, Shopping and remarketing campaigns.", "Campagnes Search, Performance Max, Shopping et remarketing."),
      s("Meta Ads", "Meta Ads", "Facebook & Instagram campaigns built for leads and sales.", "Campagnes Facebook & Instagram orientées leads et ventes."),
      s("Lead generation & client acquisition", "Génération de leads et acquisition clients", "Funnels that bring enquiries from people ready to buy.", "Des tunnels qui amènent des demandes de personnes prêtes à acheter."),
      s("Product & event promotions", "Promotion de produits et d'événements", "Launches, collections and events pushed to the right audience.", "Lancements, collections et événements poussés vers la bonne audience."),
      s("Performance management", "Pilotage de la performance", "Weekly optimisation of budgets, bids, audiences and creatives.", "Optimisation hebdomadaire des budgets, enchères, audiences et créas."),
      s("Market mapping", "Cartographie du marché", "Who buys, where they are and what competitors do — before spending.", "Qui achète, où le trouver et ce que fait la concurrence — avant de dépenser."),
    ],
    tools: ["Google Ads", "Meta Ads Manager", "GA4", "Google Tag Manager", "Merchant Center"],
    orgs: ["my-perfect-fit", "king-arthur"],
    projects: ["blutailor", "mudraa-design"],
  },
  {
    slug: "web-ecommerce-seo",
    index: "02",
    name: { en: "Websites, E-commerce & SEO", fr: "Sites web, e-commerce et SEO" },
    tagline: { en: "Websites that load fast, rank, and sell.", fr: "Des sites rapides, bien référencés, qui vendent." },
    description: {
      en: "From Shopify stores to custom React sites: conversion-focused pages, technical SEO, structured data and speed — so traffic turns into enquiries and orders.",
      fr: "De la boutique Shopify au site React sur mesure : pages pensées pour la conversion, SEO technique, données structurées et vitesse — pour que le trafic devienne demandes et commandes.",
    },
    services: [
      s("Website development", "Développement de sites web", "Responsive, fast websites built on React or Shopify.", "Sites responsives et rapides sur React ou Shopify."),
      s("Shopify e-commerce", "E-commerce Shopify", "Store setup, custom Liquid sections, products, payments and markets.", "Boutique, sections Liquid sur mesure, produits, paiements et marchés."),
      s("Landing pages & conversion optimisation", "Landing pages et optimisation de la conversion", "Pages and user journeys designed to convert.", "Pages et parcours utilisateurs conçus pour convertir."),
      s("UI/UX design", "Design UI/UX", "Modern, intuitive interfaces with a premium feel.", "Interfaces modernes, intuitives, avec une finition premium."),
      s("SEO & local SEO", "SEO et SEO local", "Technical SEO, schema, sitemaps, content clusters and Google Business Profile.", "SEO technique, schema, sitemaps, clusters de contenu et fiche Google Business."),
      s("Speed & Core Web Vitals", "Vitesse et Core Web Vitals", "Lazy loading, deferred scripts, INP audits and fixes.", "Lazy loading, scripts différés, audits INP et corrections."),
    ],
    tools: ["Shopify / Liquid", "React", "TypeScript", "Firebase", "Search Console", "Schema.org"],
    orgs: ["my-perfect-fit"],
    projects: ["blutailor", "mudraa-design", "springs-360"],
  },
  {
    slug: "data-automation-ai",
    index: "03",
    name: { en: "Data, Automation & AI", fr: "Data, automatisation et IA" },
    tagline: { en: "Data that drives decisions, not dashboards nobody reads.", fr: "Des données qui guident les décisions, pas des tableaux que personne ne lit." },
    description: {
      en: "Tracking, attribution and reporting that connect ads, website and CRM — plus the automations and AI that answer and follow up every lead.",
      fr: "Tracking, attribution et reporting qui relient publicité, site et CRM — plus les automatisations et l'IA qui répondent et relancent chaque lead.",
    },
    services: [
      s("Tracking & attribution", "Tracking et attribution", "Clean signals from Meta, Google, the website and the CRM.", "Des signaux propres entre Meta, Google, le site et le CRM."),
      s("Analysis & reporting (Power BI)", "Analyse et reporting (Power BI)", "Dashboards and monthly reports that show what brings customers.", "Tableaux de bord et rapports mensuels qui montrent ce qui amène des clients."),
      s("Leads management & CRM", "Gestion des leads et CRM", "Every lead captured, assigned and followed up.", "Chaque lead capté, attribué et relancé."),
      s("WhatsApp & marketing automation", "Automatisation WhatsApp et marketing", "Instant replies, reminders and nurturing sequences.", "Réponses instantanées, rappels et séquences de relance."),
      s("AI chatbots & agents", "Chatbots et agents IA", "Assistants that qualify leads and answer customers 24/7.", "Des assistants qui qualifient les leads et répondent 24h/24."),
      s("Machine learning & customer analytics", "Machine learning et analyse client", "Churn, satisfaction and adoption analysis; predictive models.", "Analyse du churn, de la satisfaction et de l'adoption ; modèles prédictifs."),
    ],
    tools: ["Power BI", "Python", "GA4", "TeleCRM", "WhatsApp Business API", "Kaggle / scikit-learn"],
    orgs: ["my-perfect-fit", "afg-bank", "aiesec"],
    projects: ["blutailor", "springs-360", "afg-bank-campaigns"],
  },
  {
    slug: "brand-content-social",
    index: "04",
    name: { en: "Brand, Content & Social Media", fr: "Marque, contenu et réseaux sociaux" },
    tagline: { en: "A brand people notice — and remember.", fr: "Une marque qu'on remarque — et qu'on retient." },
    description: {
      en: "Brand identity systems, design, video and consistent social media — so your positioning is clear on every channel, online and in the field.",
      fr: "Chartes graphiques, design, vidéo et réseaux sociaux réguliers — pour un positionnement clair sur chaque canal, en ligne comme sur le terrain.",
    },
    services: [
      s("Brand identity & guidelines", "Identité et charte graphique", "Logo, palette, typography, patterns and usage rules.", "Logo, palette, typographies, motifs et règles d'usage."),
      s("Social media management", "Gestion des réseaux sociaux", "Planning, publishing and community on Instagram, Facebook, LinkedIn.", "Planification, publication et communauté sur Instagram, Facebook, LinkedIn."),
      s("Content marketing", "Marketing de contenu", "Articles, posts and campaigns that build authority.", "Articles, posts et campagnes qui construisent l'autorité."),
      s("Graphic design & video editing", "Design graphique et montage vidéo", "Visuals, reels and campaign assets.", "Visuels, reels et supports de campagne."),
      s("Campaigns & event coverage", "Campagnes et couverture d'événements", "Field and digital campaigns, ceremonies and conferences.", "Campagnes terrain et digitales, cérémonies et conférences."),
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva Pro", "Meta Business Suite"],
    orgs: ["rp237", "king-arthur", "afg-bank", "aiesec"],
    projects: ["gic-ifta-brand", "rp237-brand", "afg-bank-campaigns", "king-arthur-social"],
  },
  {
    slug: "growth-strategy",
    index: "05",
    name: { en: "Growth Strategy & Digital Transformation", fr: "Stratégie de croissance et transformation digitale" },
    tagline: { en: "Fix the system behind the revenue.", fr: "Réparer le système derrière le chiffre d'affaires." },
    description: {
      en: "An engineer's view of your business: where revenue leaks across acquisition, conversion and retention — and the plan, processes and tools to fix it.",
      fr: "Un regard d'ingénieur sur votre activité : où le revenu fuit entre acquisition, conversion et fidélisation — et le plan, les process et les outils pour le corriger.",
    },
    services: [
      s("Revenue system audit", "Audit du système de revenus", "A clear diagnosis of your funnel, data and unit economics.", "Un diagnostic clair de votre tunnel, de vos données et de vos unit economics."),
      s("Growth strategy", "Stratégie de croissance", "Channel mix, funnel design and a 90-day roadmap.", "Mix de canaux, conception du tunnel et feuille de route à 90 jours."),
      s("Business analysis & business cases", "Business analysis et business cases", "Benchmarks, offers and the numbers behind decisions.", "Benchmarks, offres et chiffres derrière chaque décision."),
      s("Digital transformation & process automation", "Transformation digitale et automatisation des process", "Simpler internal systems that connect IT and operations.", "Des systèmes internes simplifiés qui relient IT et opérations."),
      s("Partnerships & B2B development", "Partenariats et développement B2B", "Structuring partnerships and international B2B relations.", "Structuration de partenariats et de relations B2B internationales."),
    ],
    tools: ["Funnel mapping", "Unit economics", "Power BI", "Notion / Google Workspace"],
    orgs: ["my-perfect-fit", "afg-bank", "aiesec"],
    projects: ["blutailor", "springs-360"],
  },
];

export function getDomain(slug: string) {
  return domains.find((d) => d.slug === slug);
}
