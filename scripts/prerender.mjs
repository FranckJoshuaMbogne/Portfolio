/**
 * Build-time prerendering: renders every page in English and French to
 * static HTML (with its own <head>, lang and hreflang), plus sitemap.xml,
 * robots.txt and 404.html.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, site, projects, domains } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

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
  const { html, head, lang, status } = await render(r.path);
  if (status !== 200 && !r.noindex) throw new Error(`Route ${r.path} rendered with status ${status}`);
  const file = r.file ?? (r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`);
  const out = path.join(dist, file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(
    out,
    template
      .replace('<html lang="en">', `<html lang="${lang}">`)
      .replace("<!--app-head-->", `${preloadFonts}\n    ${head}`)
      .replace("<!--app-html-->", html)
      // 404.html is served for any unknown URL (in either language), so the
      // browser re-renders it instead of hydrating mismatched markup.
      .replace('<div id="root">', r.file === "404.html" ? '<div id="root" data-fallback>' : '<div id="root">')
  );
  count++;
}

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
  `User-agent: *\nAllow: /\nDisallow: /thank-you\nDisallow: /fr/thank-you\n\nSitemap: ${site.url}/sitemap.xml\n`
);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`  Prerendered ${count} pages (EN + FR), sitemap.xml and robots.txt for ${site.url}`);
