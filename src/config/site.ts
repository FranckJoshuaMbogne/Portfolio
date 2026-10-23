/**
 * Fixed site identity. Everything you update regularly (photo, contact
 * details, links, projects, experience…) is edited in /admin instead.
 */
const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env ?? {};

function stripSlash(url: string) {
  return url.replace(/\/+$/, "");
}

export const site = {
  name: "Franck Joshua Mbogne",
  shortName: "Franck Joshua",
  monogram: "FJ",
  /** Production URL. Set VITE_SITE_URL in .env once a custom domain is connected. */
  url: stripSlash(env.VITE_SITE_URL || "https://franckpros.web.app"),
  defaultOgImage: "/og/franck-og.png",
  /** Optional webhook (Zapier/Make/CRM) that also receives consultation requests. */
  leadWebhook: (env.VITE_LEAD_WEBHOOK_URL as string | undefined) || null,
} as const;

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path) || path.startsWith("data:")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
