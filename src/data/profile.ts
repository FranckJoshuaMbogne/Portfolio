import type { L } from "@/i18n";

/**
 * PROFILE — the words about you. Adapted from your LinkedIn "About".
 */
export const profile = {
  title: { en: "Eng. Franck Joshua Mbogne", fr: "Ing. Franck Joshua Mbogne" } as L,
  role: {
    en: "Revenue systems engineer · Performance marketing · Data & AI",
    fr: "Ingénieur en systèmes de revenus · Marketing de performance · Data & IA",
  } as L,
  heroLines: {
    en: ["I engineer", "the systems behind", "your revenue."],
    fr: ["Je construis", "les systèmes derrière", "votre croissance."],
  },
  heroAccent: {
    en: "Engineering × Data × Performance marketing.",
    fr: "Ingénierie × Data × Marketing de performance.",
  } as L,
  heroIntro: {
    en: "I help brands that invest in paid acquisition scale profitably — by fixing what sits between the ad and the sale: websites, tracking, funnels and follow-up.",
    fr: "J'aide les marques qui investissent en acquisition payante à croître de façon rentable — en réparant ce qui se trouve entre la pub et la vente : site, tracking, tunnel et relance.",
  } as L,
  statement: {
    en: "You don't scale revenue by increasing ad spend alone. You scale it by fixing the system behind it.",
    fr: "On ne fait pas croître le chiffre d'affaires en augmentant seulement le budget pub. On le fait en réparant le système qui est derrière.",
  } as L,
  stats: [
    { value: 6, suffix: "", label: { en: "organisations served", fr: "organisations accompagnées" } },
    { value: 3, suffix: "", label: { en: "markets: Cameroon · India · USA", fr: "marchés : Cameroun · Inde · USA" } },
    { value: 10, suffix: "", label: { en: "certifications in data, ML & marketing", fr: "certifications data, ML et marketing" } },
    { value: 2, suffix: "", label: { en: "degrees: engineering & information systems", fr: "diplômes : ingénierie et systèmes d'information" } },
  ],
  background: [
    {
      title: { en: "Computer systems engineering", fr: "Ingénierie des systèmes informatiques" },
      body: { en: "Data analysis, information systems, machine learning.", fr: "Analyse de données, systèmes d'information, machine learning." },
    },
    {
      title: { en: "Performance marketing", fr: "Marketing de performance" },
      body: { en: "Meta, Google and multi-channel acquisition.", fr: "Meta, Google et acquisition multicanale." },
    },
    {
      title: { en: "Revenue strategy", fr: "Stratégie de revenus" },
      body: { en: "Funnel design, unit economics, scaling systems.", fr: "Conception de tunnels, unit economics, systèmes de croissance." },
    },
  ],
  problems: [
    { en: "Your CAC is rising and scaling feels unstable.", fr: "Votre CAC augmente et la croissance devient instable." },
    { en: "You get traffic, but conversion underperforms.", fr: "Vous avez du trafic, mais la conversion ne suit pas." },
    { en: "You spend more on ads without proportional revenue.", fr: "Vous dépensez plus en pub sans hausse proportionnelle du revenu." },
    { en: "Your data exists, but it doesn't drive decisions.", fr: "Vos données existent, mais ne guident pas les décisions." },
  ] as L[],
  fixes: [
    { en: "Re-engineer acquisition: channel mix, bidding logic, signal quality", fr: "Refondre l'acquisition : mix de canaux, enchères, qualité du signal" },
    { en: "Optimise conversion: funnels, landing pages, user journey", fr: "Optimiser la conversion : tunnels, landing pages, parcours" },
    { en: "Structure data for decisions: tracking, attribution, performance loops", fr: "Structurer la data : tracking, attribution, boucles de performance" },
    { en: "Align CAC, conversion and LTV into one scalable model", fr: "Aligner CAC, conversion et LTV dans un modèle scalable" },
  ] as L[],
  offers: [
    {
      index: "01",
      name: { en: "Revenue System Audit", fr: "Audit du système de revenus" },
      body: {
        en: "A clear diagnosis of where revenue leaks — acquisition, conversion, retention — with a prioritised action plan.",
        fr: "Un diagnostic clair des fuites de revenu — acquisition, conversion, fidélisation — avec un plan d'action priorisé.",
      },
      points: [
        { en: "Ads, tracking & funnel review", fr: "Revue pub, tracking et tunnel" },
        { en: "Unit economics: CAC, conversion, LTV", fr: "Unit economics : CAC, conversion, LTV" },
        { en: "90-day roadmap", fr: "Feuille de route à 90 jours" },
      ],
    },
    {
      index: "02",
      name: { en: "System Build & Optimisation", fr: "Construction et optimisation du système" },
      body: {
        en: "I build what's missing: website or landing pages, campaigns, tracking, CRM and automations — connected end to end.",
        fr: "Je construis ce qui manque : site ou landing pages, campagnes, tracking, CRM et automatisations — reliés de bout en bout.",
      },
      points: [
        { en: "Website / Shopify / landing pages", fr: "Site / Shopify / landing pages" },
        { en: "Google & Meta campaigns", fr: "Campagnes Google & Meta" },
        { en: "Tracking, CRM, WhatsApp automation", fr: "Tracking, CRM, automatisation WhatsApp" },
      ],
    },
    {
      index: "03",
      name: { en: "Scale & Performance Retainer", fr: "Accompagnement croissance et performance" },
      body: {
        en: "Ongoing management and optimisation, with a clear monthly report on what brings customers.",
        fr: "Pilotage et optimisation continus, avec un rapport mensuel clair sur ce qui amène des clients.",
      },
      points: [
        { en: "Weekly optimisation", fr: "Optimisation hebdomadaire" },
        { en: "Monthly performance report", fr: "Rapport de performance mensuel" },
        { en: "Direct WhatsApp line", fr: "Ligne WhatsApp directe" },
      ],
    },
  ],
  story: [
    {
      en: "I started in process automation and applied physics at the University of Douala, then specialised in information systems and decision analytics at ESSEC. Engineering taught me to look for the system behind every result.",
      fr: "J'ai commencé par l'automatisation des processus et la physique appliquée à l'Université de Douala, puis je me suis spécialisé en systèmes d'information et analyse décisionnelle à l'ESSEC. L'ingénierie m'a appris à chercher le système derrière chaque résultat.",
    },
    {
      en: "In Cameroon I led marketing teams at AIESEC, ran communication for King Arthur, analysed customer data and campaigns at AFG Bank, and built brand identities — including the GIC IFTA toolkit and the design team of RP 237.",
      fr: "Au Cameroun, j'ai dirigé des équipes marketing à l'AIESEC, piloté la communication de King Arthur, analysé données clients et campagnes chez AFG Bank et conçu des identités de marque — dont la charte GIC IFTA et l'équipe design du RP 237.",
    },
    {
      en: "In Hyderabad I joined BluTailor's digital team as its third member, with ownership of BluTailor India and its U.S. branch, Mudraa Design. Fragmented tools, unreliable integrations, inconsistent data — the job was to turn them into one system for predictable, profitable growth. That's where my approach to revenue system engineering was built.",
      fr: "À Hyderabad, j'ai rejoint l'équipe digitale de BluTailor comme troisième membre, en charge de BluTailor Inde et de sa branche américaine Mudraa Design. Outils dispersés, intégrations fragiles, données incohérentes — il fallait en faire un seul système pour une croissance prévisible et rentable. C'est là que mon approche de l'ingénierie des systèmes de revenus s'est construite.",
    },
    {
      en: "Today I also run Springs 360, a 360° digital marketing agency, and work with brands that want their marketing to behave like a system — not a set of disconnected channels.",
      fr: "Aujourd'hui, je dirige aussi Springs 360, une agence de marketing digital 360°, et j'accompagne les marques qui veulent que leur marketing fonctionne comme un système — pas comme des canaux déconnectés.",
    },
  ] as L[],
  principle: {
    en: "Digital performance is not driven by tools alone, but by the systems connecting data, decisions and execution.",
    fr: "La performance digitale ne vient pas des outils seuls, mais des systèmes qui relient données, décisions et exécution.",
  } as L,
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { en: "What happens in the free consultation?", fr: "Que se passe-t-il pendant la consultation gratuite ?" },
    a: {
      en: "30 minutes on your goals, your current ads, website and data. You leave with 2–3 concrete priorities, whether or not we work together.",
      fr: "30 minutes sur vos objectifs, votre publicité, votre site et vos données. Vous repartez avec 2 ou 3 priorités concrètes, que nous travaillions ensemble ou non.",
    },
  },
  {
    q: { en: "Do you work with businesses outside India?", fr: "Travaillez-vous avec des entreprises hors d'Inde ?" },
    a: {
      en: "Yes. I've worked across Cameroon, India and the U.S., in English and French, and I work remotely with clients anywhere.",
      fr: "Oui. J'ai travaillé au Cameroun, en Inde et aux États-Unis, en anglais et en français, et j'accompagne des clients partout à distance.",
    },
  },
  {
    q: { en: "Can you build my website and run my ads?", fr: "Pouvez-vous créer mon site et gérer ma publicité ?" },
    a: {
      en: "Yes — that's the point. The website, the campaigns and the tracking work best when they're designed together.",
      fr: "Oui — c'est tout l'intérêt. Le site, les campagnes et le tracking fonctionnent mieux quand ils sont conçus ensemble.",
    },
  },
  {
    q: { en: "What about larger projects?", fr: "Et pour les projets plus importants ?" },
    a: {
      en: "For multi-service projects I work with my agency team at Springs 360, so you keep one point of contact.",
      fr: "Pour les projets multi-services, je m'appuie sur mon équipe Springs 360 — vous gardez un seul interlocuteur.",
    },
  },
];
