import type { Settings } from "@/content/types";

/** Default settings — the admin (/admin → Settings) overrides these. */
export const settings: Settings = {
  portrait: "",
  aboutImage: "",
  showreel: "",
  showreelPoster: "",
  available: true,
  email: "franckjoshuambogne@gmail.com",
  phone: "+918522997932",
  phoneDisplay: "+91 85229 97932",
  location: { en: "Hyderabad, India · Douala, Cameroon", fr: "Hyderabad, Inde · Douala, Cameroun" },
  linkedin: "https://www.linkedin.com/in/franckjoshua/",
  social: [],
  ctaLabel: { en: "Book a strategy consultation", fr: "Réserver une consultation stratégique" },
  ctaHref: "/book",
  whatsappText: { en: "Hi Franck, I'd like to talk about my project.", fr: "Bonjour Franck, j'aimerais parler de mon projet." },
};
