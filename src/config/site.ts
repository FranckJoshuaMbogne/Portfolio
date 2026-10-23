/**
 * SITE SETTINGS — your contact details, links and media live here.
 * Change a value, save, and the whole site updates.
 */
const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env ?? {};

function stripSlash(url: string) {
  return url.replace(/\/+$/, "");
}

const phone = "+918522997932"; // international format, no spaces
const phoneDisplay = "+91 85229 97932";

export const site = {
  name: "Franck Joshua Mbogne",
  shortName: "Franck Joshua",
  monogram: "FJ",
  /** Production URL. Set VITE_SITE_URL in .env once your domain is connected. */
  url: stripSlash(env.VITE_SITE_URL || "https://franckpros.web.app"),
  defaultOgImage: "/og/franck-og.png",

  contact: {
    email: "franckjoshuambogne@gmail.com",
    phoneDisplay,
    phoneHref: `tel:${phone}`,
    whatsappHref: `https://wa.me/${phone.replace("+", "")}`,
    location: { en: "Hyderabad, India · Douala, Cameroon", fr: "Hyderabad, Inde · Douala, Cameroun" },
  },

  social: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/franckjoshua/" }],

  media: {
    /**
     * Your portrait. Put a photo at public/images/franck-portrait.jpg
     * (portrait format, ~1200×1500px) and change null to "/images/franck-portrait.jpg".
     */
    portrait: null as string | null,
    /**
     * Optional showreel video shown on the home page.
     * Put an .mp4 at public/videos/showreel.mp4 and change null to "/videos/showreel.mp4".
     */
    showreel: null as string | null,
    showreelPoster: null as string | null,
  },

  /** Optional webhook (Zapier/Make/CRM) that also receives consultation requests. */
  leadWebhook: (env.VITE_LEAD_WEBHOOK_URL as string | undefined) || null,
} as const;

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappLink(text?: string) {
  return text ? `${site.contact.whatsappHref}?text=${encodeURIComponent(text)}` : site.contact.whatsappHref;
}
