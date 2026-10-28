import type { L } from "@/i18n";

/**
 * Everything the admin can edit. Stored in Firestore, collection `content`,
 * one document per section (settings, profile, faqs, projects, experience,
 * services, industries, credentials). Images are references like
 * "media:abc123.webp" (uploaded through the admin) or plain URLs.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Settings {
  portrait: string;
  aboutImage: string;
  showreel: string;
  showreelPoster: string;
  available: boolean;
  email: string;
  /** International format, e.g. +918522997932 */
  phone: string;
  phoneDisplay: string;
  location: L;
  linkedin: string;
  social: Link[];
  /** Main call-to-action. Leave href as /book to use the built-in booking form. */
  ctaLabel: L;
  ctaHref: string;
  /** Pre-filled WhatsApp message. */
  whatsappText: L;
}

export interface Stat {
  value: number;
  suffix: string;
  label: L;
}
export interface TitleBody {
  title: L;
  body: L;
}
export interface Offer {
  index: string;
  name: L;
  body: L;
  points: L[];
}

export interface Profile {
  title: L;
  role: L;
  /** Three hero lines; the third is shown in gold italics. */
  heroLines: L[];
  heroAccent: L;
  heroIntro: L;
  /** Wrap words in *asterisks* to highlight them. */
  statement: L;
  stats: Stat[];
  background: TitleBody[];
  problems: L[];
  fixes: L[];
  offers: Offer[];
  story: L[];
  principle: L;
  languages: L;
}

export interface Faq {
  q: L;
  a: L;
}

export type ProjectKind = "website" | "brand" | "campaign";

export interface Project {
  slug: string;
  name: string;
  kind: ProjectKind;
  published?: boolean;
  featured?: boolean;
  /** Shown in the "Ongoing projects" section of the Work page. */
  ongoing?: boolean;
  url?: string;
  urlLabel?: string;
  org?: string;
  period: L;
  role: L;
  summary: L;
  context: L;
  did: L[];
  outcome: L;
  stack: string[];
  domains: string[];
  image?: string;
  gallery?: string[];
  video?: string;
  look: { bg: string; fg: string; accent: string; headline: string; sub: string; font?: "serif" | "sans" };
}

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
  about: L;
  country: string;
  url?: string;
  logo?: string;
  roles: Role[];
  domains: string[];
}

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
  image?: string;
  services: ServiceItem[];
  tools: string[];
  orgs: string[];
  projects: string[];
}

export interface Industry {
  slug: string;
  name: L;
  description: L;
  image?: string;
  orgs: string[];
  projects: string[];
}

export interface Education {
  school: string;
  degree: L;
  start: string;
  end: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Content {
  settings: Settings;
  profile: Profile;
  faqs: Faq[];
  projects: Project[];
  experience: Organisation[];
  services: Domain[];
  industries: Industry[];
  education: Education[];
  certifications: Certification[];
}

/** Firestore document id → keys of Content it holds. */
export const contentDocs = {
  settings: "settings",
  profile: "profile",
  faqs: "items",
  projects: "items",
  experience: "items",
  services: "items",
  industries: "items",
  credentials: ["education", "certifications"],
} as const;
