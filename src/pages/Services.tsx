import { Link } from "react-router-dom";
import { Seo, breadcrumbLd } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { useContent } from "@/content/ContentProvider";
import { Industries } from "@/components/sections/Industries";
import { MediaImage } from "@/components/ui/MediaImage";
import { PageHero } from "@/components/sections/PageHero";
import { Offers } from "@/components/sections/Offers";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink, Arrow } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Services() {
  const { lang, t, lp, ui } = useI18n();
  const { services: domains, experience, projects } = useContent();
  const getProject = (slug: string) => projects.find((p) => p.slug === slug && p.published !== false);
  return (
    <>
      <Seo
        title={lang === "fr" ? "Services — marketing de performance, sites web, SEO, data et marque" : "Services — performance marketing, websites, SEO, data and brand"}
        description={
          lang === "fr"
            ? "Google Ads, Meta Ads, sites web et Shopify, SEO, tracking, Power BI, automatisation WhatsApp, IA, identité de marque et stratégie de croissance — avec les entreprises où je l'ai fait."
            : "Google Ads, Meta Ads, websites and Shopify, SEO, tracking, Power BI, WhatsApp automation, AI, brand identity and growth strategy — with the companies where I've done it."
        }
        path="/services"
        jsonLd={[breadcrumbLd([{ name: ui.nav.home, path: lp("/") }, { name: ui.nav.services, path: lp("/services") }])]}
      />
      <PageHero
        eyebrow={ui.nav.services}
        lines={lang === "fr" ? ["Tout ce qu'il faut", <em key="e">pour vendre plus.</em>] : ["Everything you need", <em key="e">to sell more.</em>]}
        intro={
          lang === "fr"
            ? "Cinq expertises qui fonctionnent ensemble — de la première impression à la vente, puis au rapport qui montre ce qui marche."
            : "Five areas that work together — from first impression to sale, to the report that shows what works."
        }
        crumbs={[{ label: ui.nav.services, to: lp("/services") }]}
      >
        <ButtonLink to={lp("/book")} variant="light" size="lg">{ui.cta.book}</ButtonLink>
      </PageHero>

      <div className="bg-ivory">
        {domains.map((d, i) => (
          <section key={d.slug} id={d.slug} aria-labelledby={`h-${d.slug}`} className={cn("py-section-sm", i % 2 === 1 && "bg-sage-100")}>
            <div className="container-site grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <span className="font-display text-[5rem] font-extrabold leading-none text-forest/10">{d.index}</span>
                <h2 id={`h-${d.slug}`} className="-mt-6 font-display text-display-md font-extrabold text-ink">{t(d.name)}</h2>
                <p className="mt-3 font-accent text-xl italic text-forest">{t(d.tagline)}</p>
                <p className="mt-4 text-ink-muted">{t(d.description)}</p>
                {d.image && <MediaImage src={d.image} className="mt-6 aspect-[16/10] w-full rounded-2xl object-cover" />}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.whereIDidIt}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {d.orgs.map((id) => (
                      <li key={id} className="rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-ivory">{experience.find((o) => o.id === id)?.name.split(" · ")[0]}</li>
                    ))}
                    {d.projects.map((s) => {
                      const p = getProject(s);
                      return p ? (
                        <li key={s}>
                          <Link to={lp(`/work/${s}`)} className="inline-flex rounded-full border border-forest/30 px-3 py-1.5 text-xs font-semibold text-forest hover:bg-forest hover:text-ivory">{p.name} ↗</Link>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
                <Link to={lp(`/services/${d.slug}`)} className="group/btn mt-8 inline-flex items-center gap-3 font-semibold text-ink">
                  <span className="link-underline">{ui.cta.learnMore}</span> <Arrow />
                </Link>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {d.services.map((s, j) => (
                  <Reveal as="li" key={j} delay={(j % 2) * 0.06} className="group rounded-2xl border border-ink/10 bg-ivory-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
                    <span className="text-xs font-semibold tabular-nums text-gold-dark">{d.index}.{j + 1}</span>
                    <p className="mt-2 text-lg font-bold text-ink">{t(s.name)}</p>
                    <p className="mt-1.5 text-sm text-ink-muted">{t(s.desc)}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
      <Industries light={false} />
      <Offers />
      <CtaBand />
    </>
  );
}
