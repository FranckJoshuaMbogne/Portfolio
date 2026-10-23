/**
 * Build-time prerendering: renders every page in English and French to
 * static HTML (with its own <head>, lang and hreflang), plus sitemap.xml,
 * robots.txt, 404.html and app.html (shell for /admin and pages added
 * after the last build).
 *
 * Content comes from Firestore (collection `content`, edited in /admin) and
 * falls back to the built-in content in src/data/ if Firestore is
 * unreachable. Images uploaded in the admin are exported to dist/media/.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, site, defaultContent, mergeContent } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

/* ---------------- Content from Firestore ---------------- */
const projectId = process.env.VITE_FIREBASE_PROJECT_ID || "franckjoshua";
const apiKey = process.env.VITE_FIREBASE_API_KEY || "AIzaSyAKqNmseCfZUOV59zCFdcrbPdeU-7CtLj4";
const api = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

function val(v) {
  if (!v) return undefined;
  if ("stringValue" in v) return v.stringValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("timestampValue" in v) return v.timestampValue;
  if ("nullValue" in v) return null;
  if ("arrayValue" in v) return (v.arrayValue.values ?? []).map(val);
  if ("mapValue" in v) return Object.fromEntries(Object.entries(v.mapValue.fields ?? {}).map(([k, x]) => [k, val(x)]));
  return undefined;
}

async function getJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

let content = defaultContent;
if (process.env.PRERENDER_CMS !== "false") {
  try {
    const json = await getJson(`${api}/content?key=${apiKey}&pageSize=50`);
    const docs = Object.fromEntries((json.documents ?? []).map((d) => [d.name.split("/").pop(), val({ mapValue: { fields: d.fields ?? {} } })]));
    content = mergeContent(docs);
    console.log(`  CMS: ${Object.keys(docs).length} content section(s) from Firestore`);
  } catch (err) {
    console.warn(`  CMS: skipped (${err.message}) — using built-in content`);
  }
}

// Export uploaded images ("media:<id>") as static files.
const mediaIds = new Set();
JSON.stringify(content, (_k, v) => {
  if (typeof v === "string" && v.startsWith("media:")) mediaIds.add(v.slice(6));
  return v;
});
const builtMedia = [];
await fs.mkdir(path.join(dist, "media"), { recursive: true });
for (const id of mediaIds) {
  if (!/^[\w-]+\.(webp|jpe?g|png|gif|svg)$/i.test(id)) continue;
  try {
    const doc = await getJson(`${api}/media/${id}?key=${apiKey}`);
    const data = val(doc.fields?.data);
    const m = /^data:[^;]+;base64,(.*)$/.exec(data ?? "");
    if (!m) continue;
    await fs.writeFile(path.join(dist, "media", id), Buffer.from(m[1], "base64"));
    builtMedia.push(id);
  } catch (err) {
    console.warn(`  media ${id}: ${err.message}`);
  }
}
if (mediaIds.size) console.log(`  Media: exported ${builtMedia.length}/${mediaIds.size} image(s)`);

const initial = { content, builtMedia };
const payload = `<script id="__CONTENT__" type="application/json">${JSON.stringify(initial).replace(/</g, "\\u003c")}</script>`;
const projects = content.projects.filter((p) => p.published !== false);
const domains = content.services;

const base = [
  { path: "/", priority: 1.0 },
  { path: "/work", priority: 0.9 },
  ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: 0.8 })),
  { path: "/services", priority: 0.9 },
  ...domains.map((d) => ({ path: `/services/${d.slug}`, priority: 0.8 })),
  { path: "/experience", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/book", priority: 0.9 },
  { path: "/thank-you", noindex: true },
];

const fr = (p) => (p === "/" ? "/fr" : `/fr${p}`);
const routes = [...base, ...base.map((r) => ({ ...r, path: fr(r.path), alt: r.path })), { path: "/404", noindex: true, file: "404.html" }];

const assets = await fs.readdir(path.join(dist, "assets"));
const preloadFonts = assets
  .filter((f) => /^(plus-jakarta-sans-latin-wght-normal|playfair-display-latin-wght-italic)-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join("\n    ");

let count = 0;
for (const r of routes) {
  const { html, head, lang, status } = await render(r.path, initial);
  if (status !== 200 && !r.noindex) throw new Error(`Route ${r.path} rendered with status ${status}`);
  const file = r.file ?? (r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`);
  const out = path.join(dist, file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(
    out,
    template
      .replace('<html lang="en">', `<html lang="${lang}">`)
      .replace("<!--app-head-->", `${preloadFonts}\n    ${head}`)
      .replace("<!--app-html-->", () => html)
      .replace("<!--app-data-->", () => payload)
      // 404.html is served for any unknown URL (in either language), so the
      // browser re-renders it instead of hydrating mismatched markup.
      .replace('<div id="root">', r.file === "404.html" ? '<div id="root" data-fallback>' : '<div id="root">')
  );
  count++;
}

// SPA shell: /admin, and projects or services added after the last build.
await fs.writeFile(
  path.join(dist, "app.html"),
  template
    .replace("<!--app-head-->", `${preloadFonts}\n    <title>${site.name}</title>\n    <meta name="robots" content="noindex">`)
    .replace("<!--app-html-->", "")
    .replace("<!--app-data-->", () => payload)
);

const today = new Date().toISOString().slice(0, 10);
const indexable = base.filter((r) => !r.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${indexable
  .flatMap((r) =>
    [r.path, fr(r.path)].map(
      (p) => `  <url>
    <loc>${site.url}${p}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${site.url}${r.path}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${site.url}${fr(r.path)}"/>
    <lastmod>${today}</lastmod>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
  )
  .join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
await fs.writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /thank-you\nDisallow: /fr/thank-you\n\nSitemap: ${site.url}/sitemap.xml\n`
);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`  Prerendered ${count} pages (EN + FR), sitemap.xml and robots.txt for ${site.url}`);
