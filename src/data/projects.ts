import type { L } from "@/i18n";
import type { Project, ProjectKind } from "@/content/types";
export type { Project, ProjectKind };

/**
 * PROJECTS — websites, brand identities and campaigns.
 *
 * Pictures: put a screenshot in public/images/work/ (e.g. blutailor.jpg, 1600×1000)
 * and set `image: "/images/work/blutailor.jpg"`. Until then an animated
 * illustration in the project's colours is shown.
 * Video: put an .mp4 in public/videos/ and set `video: "/videos/blutailor.mp4"`.
 */
export const kindLabel: Record<ProjectKind, L> = {
  website: { en: "Website", fr: "Site web" },
  brand: { en: "Brand identity", fr: "Identité de marque" },
  campaign: { en: "Campaigns", fr: "Campagnes" },
};

export const projects: Project[] = [
  {
    slug: "blutailor",
    name: "BluTailor",
    kind: "website",
    url: "https://www.blutailor.com",
    urlLabel: "blutailor.com",
    org: "my-perfect-fit",
    featured: true,
    period: { en: "Dec 2025 – present", fr: "Déc. 2025 – aujourd'hui" },
    role: { en: "Digital Services Officer — Shopify, SEO, ads, data", fr: "Responsable des services digitaux — Shopify, SEO, pub, data" },
    summary: {
      en: "Rebuilding the digital system of a luxury bespoke tailoring brand: Shopify store, SEO, Google & Meta Ads and the data connecting them.",
      fr: "Refonte du système digital d'une marque de tailleur sur mesure de luxe : boutique Shopify, SEO, Google & Meta Ads et les données qui les relient.",
    },
    context: {
      en: "BluTailor makes luxury custom suits, tuxedos and wedding outfits, with studios across India and the U.S. When I joined, the Shopify site was badly configured and the links between Meta, Google, the website and the CRM didn't work reliably. The mission: make BluTailor the digital leader of luxury custom-made outfits.",
      fr: "BluTailor confectionne costumes, smokings et tenues de mariage sur mesure de luxe, avec des studios en Inde et aux États-Unis. À mon arrivée, le site Shopify était mal configuré et les liens entre Meta, Google, le site et le CRM ne fonctionnaient pas de façon fiable. La mission : faire de BluTailor le leader digital de la tenue sur mesure de luxe.",
    },
    did: [
      { en: "Technical SEO: product schema, sitemap, broken links and duplicate pages fixed, collection titles and meta descriptions rewritten", fr: "SEO technique : schema produit, sitemap, liens cassés et pages dupliquées corrigés, titres et méta-descriptions des collections réécrits" },
      { en: "Custom Shopify sections: shoppable video feed, size-guide modal with call/WhatsApp CTAs, contact capture with automatic address fill", fr: "Sections Shopify sur mesure : vidéos shoppables, guide des tailles avec CTA appel/WhatsApp, formulaire de contact avec adresse auto-remplie" },
      { en: "Page-speed work: INP audit that found and removed a duplicate script, lazy loading, deferred scripts, preconnect hints", fr: "Performance : audit INP qui a identifié et supprimé un script en double, lazy loading, scripts différés, préconnexions" },
      { en: "Content: a cross-linked blog cluster (city guides, fabric mills, U.S. tailoring market) and studio expansion pages", fr: "Contenu : un cluster d'articles maillés (guides par ville, filatures, marché américain) et des pages d'expansion des studios" },
      { en: "Google Ads & Meta Ads structured around CAC and lead quality, with tracking between ads, site and CRM", fr: "Google Ads & Meta Ads structurés autour du CAC et de la qualité des leads, avec un tracking entre pub, site et CRM" },
    ],
    outcome: {
      en: "A store and acquisition system built to scale across India and the U.S. — one brand, one data flow, measurable at every step.",
      fr: "Une boutique et un système d'acquisition conçus pour passer à l'échelle entre l'Inde et les États-Unis — une marque, un flux de données, mesurable à chaque étape.",
    },
    stack: ["Shopify", "Liquid", "Google Ads", "Meta Ads", "GA4", "Schema.org", "TeleCRM"],
    domains: ["performance-marketing", "web-ecommerce-seo", "data-automation-ai", "growth-strategy"],
    look: { bg: "#0b2942", fg: "#f3ede2", accent: "#c5a059", headline: "Bespoke, made for you.", sub: "Suits · Tuxedos · Wedding", font: "serif" },
  },
  {
    slug: "mudraa-design",
    name: "Mudraa Design",
    kind: "website",
    url: "https://www.mudraadesign.com",
    urlLabel: "mudraadesign.com",
    org: "my-perfect-fit",
    featured: true,
    period: { en: "Dec 2025 – present", fr: "Déc. 2025 – aujourd'hui" },
    role: { en: "Website & U.S. digital coverage", fr: "Site web et couverture digitale U.S." },
    summary: {
      en: "The U.S. branch: bespoke Indian menswear — sherwanis, suits and kurtas — with acquisition and messaging adapted to the American market.",
      fr: "La branche américaine : tenues indiennes sur mesure pour homme — sherwanis, costumes et kurtas — avec une acquisition et des messages adaptés au marché américain.",
    },
    context: {
      en: "Same craft, a completely different market. U.S. customers search differently, compare differently and expect different proof — so the website, the copy and the campaigns had to be rethought, not translated.",
      fr: "Le même savoir-faire, un marché complètement différent. Les clients américains cherchent, comparent et attendent des preuves autrement — le site, les textes et les campagnes devaient être repensés, pas traduits.",
    },
    did: [
      { en: "Built and maintained the U.S. storefront", fr: "Création et maintenance de la boutique U.S." },
      { en: "Adapted positioning and messaging to U.S. buyers", fr: "Positionnement et messages adaptés aux acheteurs américains" },
      { en: "Ran digital acquisition for the U.S. branch", fr: "Pilotage de l'acquisition digitale de la branche U.S." },
      { en: "SEO for U.S. locations and studio pages", fr: "SEO des implantations et pages studios aux États-Unis" },
    ],
    outcome: {
      en: "A dedicated U.S. presence instead of an Indian site shown to American visitors.",
      fr: "Une présence dédiée aux États-Unis plutôt qu'un site indien montré à des visiteurs américains.",
    },
    stack: ["Shopify", "Google Ads", "Meta Ads", "SEO"],
    domains: ["web-ecommerce-seo", "performance-marketing"],
    look: { bg: "#1d1410", fg: "#f6efe4", accent: "#c9a25e", headline: "Heritage, tailored.", sub: "Sherwanis · Suits · Kurtas", font: "serif" },
  },
  {
    slug: "springs-360",
    name: "Springs 360",
    kind: "website",
    url: "https://leadzindb.web.app",
    urlLabel: "Springs 360",
    org: "springs-360",
    featured: true,
    period: { en: "2026", fr: "2026" },
    role: { en: "Founder — strategy, design and development", fr: "Fondateur — stratégie, design et développement" },
    summary: {
      en: "My 360° digital marketing agency and its website: a conversion-led React site with a built-in CMS and lead dashboard.",
      fr: "Mon agence de marketing digital 360° et son site : un site React orienté conversion, avec CMS intégré et tableau de bord des leads.",
    },
    context: {
      en: "Springs 360 brings social media, ads, websites, content and lead follow-up under one team. The site had to explain that simply, load instantly and turn visitors into strategy calls.",
      fr: "Springs 360 réunit réseaux sociaux, publicité, sites web, contenu et suivi des leads dans une seule équipe. Le site devait l'expliquer simplement, se charger instantanément et transformer les visiteurs en appels stratégiques.",
    },
    did: [
      { en: "Designed the brand, the 360° growth wheel and the conversion journey", fr: "Conception de la marque, de la roue de croissance 360° et du parcours de conversion" },
      { en: "Built it in React, TypeScript and Tailwind with Framer Motion animations", fr: "Développement en React, TypeScript et Tailwind avec animations Framer Motion" },
      { en: "Pre-rendered every page for SEO, with structured data and a sitemap", fr: "Pré-rendu de chaque page pour le SEO, avec données structurées et sitemap" },
      { en: "Firebase back end: lead capture, insights CMS and an admin dashboard", fr: "Back-end Firebase : capture des leads, CMS d'articles et tableau d'administration" },
    ],
    outcome: {
      en: "One site that explains the offer, ranks, and books calls — managed without a developer.",
      fr: "Un site qui explique l'offre, se référence et génère des appels — géré sans développeur.",
    },
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Firebase", "Vite"],
    domains: ["web-ecommerce-seo", "data-automation-ai", "growth-strategy"],
    look: { bg: "#0A2118", fg: "#F5F1E8", accent: "#B89B62", headline: "Your All-in-One 360° Agency", sub: "Social · Ads · Web · Leads", font: "sans" },
  },
  {
    slug: "kashmir-vale",
    name: "Kashmir Vale",
    kind: "website",
    ongoing: true,
    url: "https://kashmirvale.lovable.app/shop",
    urlLabel: "kashmirvale.lovable.app",
    org: "springs-360",
    period: { en: "2026 – ongoing", fr: "2026 – en cours" },
    role: { en: "Website design & development", fr: "Design et développement du site" },
    summary: {
      en: "A tourism website for Kashmir — discovering the valley, planning the trip and shopping local, in one place.",
      fr: "Un site de tourisme pour le Cachemire — découvrir la vallée, préparer son voyage et acheter local, au même endroit.",
    },
    context: {
      en: "Travellers to Kashmir usually juggle agencies, blogs and marketplaces. Kashmir Vale brings inspiration, trip planning and a shop of local products into a single experience built to convert visitors into bookings and orders.",
      fr: "Les voyageurs vers le Cachemire jonglent souvent entre agences, blogs et marketplaces. Kashmir Vale réunit l'inspiration, la préparation du voyage et une boutique de produits locaux dans une seule expérience pensée pour convertir les visiteurs en réservations et en commandes.",
    },
    did: [
      { en: "Site structure and visitor journey from inspiration to enquiry", fr: "Structure du site et parcours visiteur, de l'inspiration à la demande" },
      { en: "Online shop for local products", fr: "Boutique en ligne de produits locaux" },
      { en: "Design and development of the website", fr: "Design et développement du site web" },
    ],
    outcome: {
      en: "In progress — the site is live and being expanded.",
      fr: "En cours — le site est en ligne et continue d'évoluer.",
    },
    stack: ["Lovable", "React", "Ecommerce"],
    domains: ["web-ecommerce-seo"],
    look: { bg: "#0f2a2e", fg: "#f4efe6", accent: "#c9a25e", headline: "Paradise, planned.", sub: "Travel · Stays · Shop", font: "serif" },
  },
  {
    slug: "kaslyn-atelier",
    name: "Kaslyn Atelier",
    kind: "website",
    ongoing: true,
    url: "https://kaslynatelier.co.in/",
    urlLabel: "kaslynatelier.co.in",
    org: "springs-360",
    period: { en: "2026 – ongoing", fr: "2026 – en cours" },
    role: { en: "Website design & development", fr: "Design et développement du site" },
    summary: {
      en: "The website of a luxury model management agency — talent roster, casting and brand booking.",
      fr: "Le site d'une agence de mannequins haut de gamme — roster de talents, casting et réservation par les marques.",
    },
    context: {
      en: "Kaslyn Atelier represents models and creative talent for fashion houses and brands in India. The site had to feel as refined as an editorial, while making it easy for brands to find the right face and book.",
      fr: "Kaslyn Atelier représente mannequins et talents créatifs pour les maisons de mode et les marques en Inde. Le site devait être aussi raffiné qu'un éditorial, tout en permettant aux marques de trouver facilement le bon profil et de réserver.",
    },
    did: [
      { en: "Talent roster with model profiles and brand credits", fr: "Roster de talents avec profils et références de marques" },
      { en: "Talent Matcher: pick a campaign mood to get a selection of models", fr: "Talent Matcher : choisir l'ambiance d'une campagne pour obtenir une sélection de mannequins" },
      { en: "Casting, services, portfolio and “Book talent” journeys", fr: "Parcours casting, services, portfolio et « Réserver un talent »" },
    ],
    outcome: {
      en: "In progress — the site is live and being expanded.",
      fr: "En cours — le site est en ligne et continue d'évoluer.",
    },
    stack: ["Website development", "UX design", "Branding"],
    domains: ["web-ecommerce-seo", "brand-content-social"],
    look: { bg: "#111111", fg: "#f5f1e8", accent: "#c5a059", headline: "Refining the art of influence.", sub: "Talent · Casting · Campaigns", font: "serif" },
  },
  {
    slug: "gic-ifta-brand",
    name: "GIC IFTA",
    kind: "brand",
    featured: true,
    period: { en: "Freelance", fr: "Freelance" },
    role: { en: "Brand identity designer", fr: "Designer identité de marque" },
    summary: {
      en: "The complete brand toolkit for a youth collective driving agro-industrial transformation in Africa.",
      fr: "La charte graphique complète d'un collectif de jeunes au cœur de la transformation agro-industrielle en Afrique.",
    },
    context: {
      en: "GIC IFTA needed an identity as strong as its ambition: collective strength, roots in the land and the will to build a sovereign economy — without looking too institutional or too conceptual.",
      fr: "GIC IFTA avait besoin d'une identité à la hauteur de son ambition : la force du collectif, l'ancrage au territoire et la volonté de bâtir une économie souveraine — sans paraître trop institutionnelle ni trop conceptuelle.",
    },
    did: [
      { en: "A symbolic logo — stars, gears, silhouettes and straw — telling the collective's story", fr: "Un logo symbolique — étoiles, engrenages, silhouettes, pailles — qui raconte le collectif" },
      { en: "A bright, strategic palette: cyan green, forest green, yellow and anthracite", fr: "Une palette vive et stratégique : vert cyan, vert forêt, jaune et anthracite" },
      { en: "Clear typography (Oswald, Raleway) and patterns", fr: "Une typographie claire (Oswald, Raleway) et des motifs" },
      { en: "Usage rules to keep every support consistent", fr: "Des règles d'utilisation pour la cohérence sur tous les supports" },
    ],
    outcome: {
      en: "An identity that makes people feel the GIC IFTA experience: inspiring, pragmatic, collective.",
      fr: "Une identité qui fait vivre l'expérience GIC IFTA : inspirante, pragmatique, collective.",
    },
    stack: ["Adobe Illustrator", "Adobe Photoshop", "Brand guidelines"],
    domains: ["brand-content-social"],
    look: { bg: "#123B2A", fg: "#ffffff", accent: "#2ec4b6", headline: "Faire. Unir. Transformer.", sub: "Brand toolkit", font: "sans" },
  },
  {
    slug: "rp237-brand",
    name: "RP 237",
    kind: "brand",
    org: "rp237",
    period: { en: "Oct 2025 – present", fr: "Oct. 2025 – aujourd'hui" },
    role: { en: "Head of design & brand identity", fr: "Responsable design et identité de marque" },
    summary: {
      en: "Leading design and brand identity for Cameroon's professional network after its conference “L'expérience Parle”.",
      fr: "Direction du design et de l'identité de marque du Réseau des Professionnels du Cameroun après la conférence « L'expérience Parle ».",
    },
    context: {
      en: "As the network grows, design is no longer optional: it is an asset for communicating efficiently.",
      fr: "Avec la croissance du réseau, le design n'est plus une option : c'est un actif pour communiquer efficacement.",
    },
    did: [
      { en: "Lead the graphic creation team", fr: "Direction de l'équipe de création graphique" },
      { en: "Keep the brand identity consistent across all communication", fr: "Cohérence de l'identité sur toute la communication" },
    ],
    outcome: {
      en: "A recognisable network brand that supports its growth.",
      fr: "Une marque de réseau reconnaissable au service de sa croissance.",
    },
    stack: ["Adobe Illustrator", "Adobe Photoshop"],
    domains: ["brand-content-social"],
    look: { bg: "#0F3023", fg: "#F1F3EA", accent: "#D2BC8E", headline: "L'expérience parle.", sub: "Réseau des Professionnels", font: "serif" },
  },
  {
    slug: "afg-bank-campaigns",
    name: "AFG Bank Cameroun",
    kind: "campaign",
    org: "afg-bank",
    period: { en: "Jul – Dec 2025", fr: "Juil. – déc. 2025" },
    role: { en: "Marketing & customer experience analyst", fr: "Analyste marketing et expérience client" },
    summary: {
      en: "Campaigns, business cases and customer-data analysis for the third-largest bank in Cameroon.",
      fr: "Campagnes, business cases et analyse des données clients pour la 3e banque du Cameroun.",
    },
    context: {
      en: "Working in the Marketing, Communication & Customer Experience department alongside the product manager.",
      fr: "Au sein de la direction Marketing, Communication et Expérience Client, aux côtés du chargé de produit.",
    },
    did: [
      { en: "Campaigns: CHAZU, CRESCO and Bancassurance Week", fr: "Campagnes : CHAZU, CRESCO et Semaine de la Bancassurance" },
      { en: "Event coverage: Orange Excellence Plus ceremony, baccalaureate prize-giving", fr: "Couverture d'événements : cérémonie Orange Excellence Plus, remise de lots aux lauréats du bac" },
      { en: "Benchmarks of prepaid and debit VISA card offers", fr: "Benchmarks des offres de cartes VISA prépayées et de débit" },
      { en: "Churn, satisfaction and product-adoption analysis", fr: "Analyse du churn, de la satisfaction et de l'adhésion aux produits" },
    ],
    outcome: {
      en: "Offers and campaigns grounded in customer data.",
      fr: "Des offres et des campagnes fondées sur les données clients.",
    },
    stack: ["Business cases", "Customer analytics", "Campaign planning"],
    domains: ["brand-content-social", "data-automation-ai", "growth-strategy"],
    look: { bg: "#123B2A", fg: "#F1F3EA", accent: "#B89B62", headline: "CHAZU · CRESCO", sub: "Bancassurance Week", font: "sans" },
  },
  {
    slug: "king-arthur-social",
    name: "King Arthur",
    kind: "campaign",
    org: "king-arthur",
    period: { en: "Dec 2023 – Jun 2025", fr: "Déc. 2023 – juin 2025" },
    role: { en: "Marketing communications manager", fr: "Responsable communications marketing" },
    summary: {
      en: "Social media and a web-plus-field marketing strategy to grow visibility and support sales.",
      fr: "Réseaux sociaux et stratégie marketing web et terrain pour la visibilité et les ventes.",
    },
    context: {
      en: "Digital and traditional channels working together for one brand image.",
      fr: "Canaux digitaux et traditionnels au service d'une seule image de marque.",
    },
    did: [
      { en: "Social media communication", fr: "Communication sur les réseaux sociaux" },
      { en: "Marketing strategy for web, social and field", fr: "Stratégie marketing web, réseaux sociaux et terrain" },
      { en: "Support for the year's sales targets", fr: "Accompagnement des objectifs de vente de l'année" },
    ],
    outcome: {
      en: "A consistent brand across online and offline touchpoints.",
      fr: "Une marque cohérente en ligne comme hors ligne.",
    },
    stack: ["Meta Business Suite", "Canva", "Field marketing"],
    domains: ["brand-content-social", "performance-marketing"],
    look: { bg: "#1B4D38", fg: "#F1F3EA", accent: "#D2BC8E", headline: "Visible. Everywhere.", sub: "Social · Web · Field", font: "sans" },
  },
];

