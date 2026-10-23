import type { Content } from "./types";
import { settings } from "@/data/settings";
import { profile, faqs } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience, education, certifications } from "@/data/experience";
import { domains } from "@/data/services";
import { industries } from "@/data/industries";

/** Built-in content, used until the admin has saved each section. */
export const defaultContent: Content = {
  settings,
  profile,
  faqs,
  projects,
  experience,
  services: domains,
  industries,
  education,
  certifications,
};

type Docs = Record<string, Record<string, unknown> | undefined>;

/** Merge Firestore `content/*` documents over the defaults. */
export function mergeContent(docs: Docs, base: Content = defaultContent): Content {
  const items = <T,>(id: string, fallback: T[]): T[] => {
    const v = docs[id]?.items;
    return Array.isArray(v) ? (v as T[]) : fallback;
  };
  const cred = docs.credentials ?? {};
  const projects = items("projects", base.projects).map((p: Content["projects"][number]) => ({ ...p, published: p.published !== false }));
  return {
    settings: { ...base.settings, ...((docs.settings as object) ?? {}) },
    profile: { ...base.profile, ...((docs.profile as object) ?? {}) },
    faqs: items("faqs", base.faqs),
    projects,
    experience: items("experience", base.experience),
    services: items("services", base.services),
    industries: items("industries", base.industries),
    education: Array.isArray(cred.education) ? (cred.education as Content["education"]) : base.education,
    certifications: Array.isArray(cred.certifications) ? (cred.certifications as Content["certifications"]) : base.certifications,
  };
}

/** Content → Firestore documents (the inverse of mergeContent). */
export function toDocs(c: Content) {
  return {
    settings: c.settings,
    profile: c.profile,
    faqs: { items: c.faqs },
    projects: { items: c.projects },
    experience: { items: c.experience },
    services: { items: c.services },
    industries: { items: c.industries },
    credentials: { education: c.education, certifications: c.certifications },
  } as unknown as Record<string, Record<string, unknown>>;
}
