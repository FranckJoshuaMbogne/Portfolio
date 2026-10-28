import type { Field } from "./fields";
import type { Domain, Faq, Industry, Organisation, Project, Role, Certification, Education } from "@/content/types";

const L = { en: "", fr: "" };

export const settingsFields: Field[] = [
  { k: "portrait", label: "Home page portrait", type: "image", maxSide: 1400, hint: "Portrait photo (vertical). Shown in the hero. Leave empty for the animated FJ monogram." },
  { k: "aboutImage", label: "About page photo", type: "image", hint: "Optional. If empty, the hero portrait is used." },
  { k: "available", label: "Show “Available for new projects”", type: "bool" },
  { k: "ctaLabel", label: "Main button label", type: "L" },
  { k: "ctaHref", label: "Main button link", type: "text", hint: "/book uses the built-in booking form. You can also paste a Calendly/Google Calendar link." },
  { k: "email", label: "Email", type: "text" },
  { k: "phone", label: "Phone / WhatsApp (international)", type: "text", placeholder: "+918522997932" },
  { k: "phoneDisplay", label: "Phone as displayed", type: "text", placeholder: "+91 85229 97932" },
  { k: "whatsappText", label: "Pre-filled WhatsApp message", type: "L" },
  { k: "location", label: "Location", type: "L" },
  { k: "linkedin", label: "LinkedIn URL", type: "url" },
  {
    k: "social",
    label: "Other links (Instagram, Behance, GitHub…)",
    type: "list",
    itemTitle: (x) => x.label,
    newItem: () => ({ label: "", href: "" }),
    addLabel: "Add link",
    fields: [
      { k: "label", label: "Label", type: "text" },
      { k: "href", label: "URL", type: "url" },
    ],
  },
  { k: "showreel", label: "Showreel video link", type: "url", hint: "YouTube, Vimeo, Google Drive or a direct .mp4 link. Shown on the home page." },
  { k: "showreelPoster", label: "Showreel cover image", type: "image" },
];

export const profileFields: Field[] = [
  { k: "title", label: "Name / title (hero)", type: "L" },
  { k: "role", label: "Role line (About page)", type: "L" },
  {
    k: "heroLines",
    label: "Hero headline — 3 lines",
    type: "Llist",
    hint: "Line 3 appears in gold italics.",
    addLabel: "Add line",
  },
  { k: "heroAccent", label: "Gold line under the headline", type: "L" },
  { k: "heroIntro", label: "Hero introduction", type: "L", multiline: true },
  { k: "statement", label: "Big statement (scroll reveal)", type: "L", multiline: true, hint: "Wrap words in *asterisks* to highlight them in gold." },
  {
    k: "stats",
    label: "Numbers",
    type: "list",
    itemTitle: (x) => `${x.value}${x.suffix ?? ""} — ${x.label?.en ?? ""}`,
    newItem: () => ({ value: 0, suffix: "", label: { ...L } }),
    addLabel: "Add number",
    fields: [
      { k: "value", label: "Number", type: "number" },
      { k: "suffix", label: "Suffix (+, %, …)", type: "text" },
      { k: "label", label: "Label", type: "L" },
    ],
  },
  { k: "problems", label: "Problems you solve (left card)", type: "Llist" },
  { k: "fixes", label: "How you solve them (right card)", type: "Llist" },
  {
    k: "offers",
    label: "Ways to work with me",
    type: "list",
    itemTitle: (x) => `${x.index} · ${x.name?.en ?? ""}`,
    newItem: () => ({ index: "0", name: { ...L }, body: { ...L }, points: [] }),
    addLabel: "Add offer",
    fields: [
      { k: "index", label: "Number", type: "text" },
      { k: "name", label: "Name", type: "L" },
      { k: "body", label: "Description", type: "L", multiline: true },
      { k: "points", label: "Bullet points", type: "Llist" },
    ],
  },
  { k: "story", label: "About — story paragraphs", type: "Llist", multiline: true, addLabel: "Add paragraph" },
  {
    k: "background",
    label: "About — background cards",
    type: "list",
    itemTitle: (x) => x.title?.en ?? "",
    newItem: () => ({ title: { ...L }, body: { ...L } }),
    fields: [
      { k: "title", label: "Title", type: "L" },
      { k: "body", label: "Text", type: "L", multiline: true },
    ],
  },
  { k: "principle", label: "About — principle (scroll reveal)", type: "L", multiline: true, hint: "Wrap words in *asterisks* to highlight them." },
  { k: "languages", label: "About — languages line", type: "L" },
];

export const faqFields: Field[] = [
  { k: "q", label: "Question", type: "L" },
  { k: "a", label: "Answer", type: "L", multiline: true },
];
export const newFaq = (): Faq => ({ q: { ...L }, a: { ...L } });

export const projectFields: Field[] = [
  { k: "name", label: "Project name", type: "text" },
  { k: "slug", label: "URL slug", type: "text", hint: "Used in the address: /work/<slug>. Lowercase letters, numbers and dashes." },
  { k: "published", label: "Published (visible on the site)", type: "bool" },
  { k: "featured", label: "Featured on the home page", type: "bool" },
  { k: "ongoing", label: "Ongoing project (shown under “Ongoing projects”)", type: "bool" },
  {
    k: "kind",
    label: "Type",
    type: "select",
    options: [
      { value: "website", label: "Website" },
      { value: "brand", label: "Brand identity" },
      { value: "campaign", label: "Campaigns" },
    ],
  },
  { k: "image", label: "Main image / screenshot", type: "image", hint: "Landscape works best (16:10)." },
  { k: "gallery", label: "Gallery", type: "images", hint: "Extra images shown on the project page." },
  { k: "video", label: "Video link", type: "url", hint: "YouTube, Vimeo, Google Drive or .mp4." },
  { k: "url", label: "Live website / link", type: "url" },
  { k: "urlLabel", label: "Link label", type: "text", placeholder: "blutailor.com" },
  { k: "org", label: "Company (from Experience)", type: "ref", source: "experience" },
  { k: "period", label: "Period", type: "L" },
  { k: "role", label: "Your role", type: "L" },
  { k: "summary", label: "Summary (cards)", type: "L", multiline: true },
  { k: "context", label: "Context", type: "L", multiline: true },
  { k: "did", label: "What I did", type: "Llist", multiline: true, addLabel: "Add point" },
  { k: "outcome", label: "Why it matters / result", type: "L", multiline: true },
  { k: "stack", label: "Tools", type: "tags" },
  { k: "domains", label: "Related services", type: "refs", source: "services" },
  {
    k: "look",
    label: "Preview colours (used when there is no image)",
    type: "group",
    fields: [
      { k: "bg", label: "Background", type: "color" },
      { k: "fg", label: "Text", type: "color" },
      { k: "accent", label: "Accent", type: "color" },
      { k: "headline", label: "Headline", type: "text" },
      { k: "sub", label: "Small line", type: "text" },
      {
        k: "font",
        label: "Headline style",
        type: "select",
        options: [
          { value: "sans", label: "Bold sans" },
          { value: "serif", label: "Italic serif" },
        ],
      },
    ],
  },
];
export const newProject = (): Project => ({
  slug: "",
  name: "New project",
  kind: "website",
  published: false,
  featured: false,
  ongoing: false,
  period: { ...L },
  role: { ...L },
  summary: { ...L },
  context: { ...L },
  did: [],
  outcome: { ...L },
  stack: [],
  domains: [],
  gallery: [],
  look: { bg: "#050807", fg: "#F1F3EA", accent: "#B89B62", headline: "", sub: "", font: "sans" },
});

const roleFields: Field[] = [
  { k: "title", label: "Job title", type: "L" },
  { k: "start", label: "Start", type: "month" },
  { k: "end", label: "End", type: "month", hint: "Leave empty if this is your current role." },
  { k: "type", label: "Type (full-time, on-site…)", type: "L" },
  { k: "location", label: "Location", type: "L" },
  { k: "summary", label: "Summary", type: "L", multiline: true },
  { k: "highlights", label: "Highlights", type: "Llist", addLabel: "Add highlight" },
  { k: "skills", label: "Skills", type: "tags" },
];
export const newRole = (): Role => ({ title: { ...L }, start: "", end: null, type: { ...L }, location: { ...L }, summary: { ...L }, highlights: [], skills: [] });

export const orgFields: Field[] = [
  { k: "name", label: "Company / organisation", type: "text" },
  { k: "id", label: "ID", type: "text", hint: "Short unique id, e.g. blutailor. Projects link to it." },
  { k: "logo", label: "Logo", type: "image", maxSide: 400 },
  { k: "url", label: "Website", type: "url" },
  { k: "about", label: "About the company", type: "L", multiline: true },
  { k: "country", label: "Country", type: "text", placeholder: "India, USA, Cameroon…" },
  { k: "domains", label: "Service areas this proves", type: "refs", source: "services" },
  {
    k: "roles",
    label: "Roles (most recent first)",
    type: "list",
    itemTitle: (r: Role) => `${r.title?.en ?? ""} · ${r.start || "?"} → ${r.end || "present"}`,
    newItem: newRole,
    addLabel: "Add role",
    fields: roleFields,
  },
];
export const newOrg = (): Organisation => ({ id: "", name: "New company", about: { ...L }, country: "", roles: [newRole()], domains: [] });

export const serviceFields: Field[] = [
  { k: "name", label: "Service area", type: "L" },
  { k: "slug", label: "URL slug", type: "text", hint: "/services/<slug>" },
  { k: "index", label: "Number", type: "text", placeholder: "01" },
  { k: "tagline", label: "Tagline", type: "L" },
  { k: "description", label: "Description", type: "L", multiline: true },
  { k: "image", label: "Image", type: "image" },
  {
    k: "services",
    label: "Services",
    type: "list",
    itemTitle: (x) => x.name?.en ?? "",
    newItem: () => ({ name: { ...L }, desc: { ...L } }),
    addLabel: "Add service",
    fields: [
      { k: "name", label: "Name", type: "L" },
      { k: "desc", label: "Description", type: "L", multiline: true },
    ],
  },
  { k: "tools", label: "Tools", type: "tags" },
  { k: "orgs", label: "Where I've done it (companies)", type: "refs", source: "experience" },
  { k: "projects", label: "Related projects", type: "refs", source: "projects" },
];
export const newService = (): Domain => ({ slug: "", index: "06", name: { en: "New service area", fr: "" }, tagline: { ...L }, description: { ...L }, services: [], tools: [], orgs: [], projects: [] });

export const industryFields: Field[] = [
  { k: "name", label: "Industry", type: "L" },
  { k: "slug", label: "ID", type: "text" },
  { k: "description", label: "Description", type: "L", multiline: true },
  { k: "image", label: "Image", type: "image" },
  { k: "projects", label: "Related projects", type: "refs", source: "projects" },
  { k: "orgs", label: "Companies", type: "refs", source: "experience" },
];
export const newIndustry = (): Industry => ({ slug: "", name: { en: "New industry", fr: "" }, description: { ...L }, projects: [], orgs: [] });

export const educationFields: Field[] = [
  { k: "school", label: "School", type: "text" },
  { k: "degree", label: "Degree", type: "L" },
  { k: "start", label: "Start", type: "month" },
  { k: "end", label: "End", type: "month" },
];
export const newEducation = (): Education => ({ school: "", degree: { ...L }, start: "", end: "" });

export const certificationFields: Field[] = [
  { k: "name", label: "Certification", type: "text" },
  { k: "issuer", label: "Issuer", type: "text" },
  { k: "date", label: "Date", type: "month" },
  { k: "url", label: "Credential link", type: "url" },
];
export const newCertification = (): Certification => ({ name: "", issuer: "", date: "" });
