import { createContext, useContext, useEffect, type ReactNode } from "react";
import { absoluteUrl, site } from "@/config/site";
import { localePath, useI18n, type Lang } from "@/i18n";
import type { Settings } from "@/content/types";

export interface SeoProps {
  title: string;
  description: string;
  /** Path WITHOUT the language prefix, e.g. "/work/blutailor". */
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

export interface HeadTag {
  tag: "title" | "meta" | "link" | "script";
  attrs: Record<string, string>;
  text?: string;
}

export function fullTitle(title: string) {
  return title.includes(site.name) ? title : `${title} — ${site.name}`;
}

export function buildHeadTags(p: SeoProps, lang: Lang): HeadTag[] {
  const title = fullTitle(p.title);
  const url = absoluteUrl(localePath(lang, p.path));
  const image = absoluteUrl(p.image || site.defaultOgImage);
  const tags: HeadTag[] = [
    { tag: "title", attrs: {}, text: title },
    { tag: "meta", attrs: { name: "description", content: p.description } },
    { tag: "link", attrs: { rel: "canonical", href: url } },
    { tag: "meta", attrs: { name: "robots", content: p.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large" } },
    { tag: "meta", attrs: { property: "og:site_name", content: site.name } },
    { tag: "meta", attrs: { property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" } },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:title", content: title } },
    { tag: "meta", attrs: { property: "og:description", content: p.description } },
    { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: title } },
    { tag: "meta", attrs: { name: "twitter:description", content: p.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
  ];
  if (!p.noindex) {
    tags.push(
      { tag: "link", attrs: { rel: "alternate", hreflang: "en", href: absoluteUrl(localePath("en", p.path)) } },
      { tag: "link", attrs: { rel: "alternate", hreflang: "fr", href: absoluteUrl(localePath("fr", p.path)) } },
      { tag: "link", attrs: { rel: "alternate", hreflang: "x-default", href: absoluteUrl(localePath("en", p.path)) } }
    );
  }
  p.jsonLd?.forEach((ld) =>
    tags.push({ tag: "script", attrs: { type: "application/ld+json" }, text: JSON.stringify(ld).replace(/</g, "\\u003c") })
  );
  return tags;
}

function escapeAttr(v: string) {
  return v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeText(v: string) {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function headTagsToString(tags: HeadTag[]) {
  return tags
    .map(({ tag, attrs, text }) => {
      const a = Object.entries({ ...attrs, "data-seo": "" })
        .map(([k, v]) => (v === "" ? k : `${k}="${escapeAttr(v)}"`))
        .join(" ");
      if (tag === "meta" || tag === "link") return `<${tag} ${a}>`;
      const body = tag === "script" ? text ?? "" : escapeText(text ?? "");
      return `<${tag} ${a}>${body}</${tag}>`;
    })
    .join("\n    ");
}

function applyHeadTags(tags: HeadTag[], lang: Lang) {
  const head = document.head;
  document.documentElement.lang = lang;
  head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
  for (const t of tags) {
    if (t.tag === "title") {
      document.title = t.text ?? "";
      continue;
    }
    const el = document.createElement(t.tag);
    Object.entries(t.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    el.setAttribute("data-seo", "");
    if (t.text) el.textContent = t.text;
    head.appendChild(el);
  }
}

export interface HeadCollector {
  data?: SeoProps;
  lang?: Lang;
  status?: number;
}

const HeadContext = createContext<HeadCollector | null>(null);

export function HeadProvider({ collector, children }: { collector?: HeadCollector; children: ReactNode }) {
  return <HeadContext.Provider value={collector ?? null}>{children}</HeadContext.Provider>;
}

export function Seo(props: SeoProps & { status?: number }) {
  const collector = useContext(HeadContext);
  const { lang } = useI18n();
  if (collector && typeof window === "undefined") {
    collector.data = props;
    collector.lang = lang;
    if (props.status) collector.status = props.status;
  }
  const key = JSON.stringify(props) + lang;
  useEffect(() => {
    applyHeadTags(buildHeadTags(props, lang), lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return null;
}

/* Structured data */
export const personLd = (description: string, s: Settings, portraitSrc?: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  jobTitle: "Revenue Systems Engineer — Performance Marketing, Data & AI",
  description,
  email: `mailto:${s.email}`,
  telephone: s.phone,
  ...(portraitSrc && !portraitSrc.startsWith("data:") ? { image: absoluteUrl(portraitSrc) } : {}),
  sameAs: [s.linkedin, ...s.social.map((x) => x.href)].filter(Boolean),
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "ESSEC Business School" },
    { "@type": "CollegeOrUniversity", name: "University of Douala" },
  ],
  knowsLanguage: ["en", "fr"],
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: ["en", "fr"],
  author: { "@id": `${site.url}/#person` },
});

export const serviceLd = (o: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  provider: { "@id": `${site.url}/#person` },
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
});

export const faqLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
});
