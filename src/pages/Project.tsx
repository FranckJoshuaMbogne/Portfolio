import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { Seo, breadcrumbLd } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { kindLabel } from "@/data/projects";
import { useContent, useContentState, useMedia } from "@/content/ContentProvider";
import { MediaImage } from "@/components/ui/MediaImage";
import { VideoEmbed, embedUrl } from "@/components/ui/VideoEmbed";
import { PageLoading } from "@/components/ui/PageLoading";
import { ProjectPreview } from "@/components/art/ProjectPreview";
import { Reveal } from "@/components/animations/Reveal";
import { MaskText } from "@/components/animations/MaskText";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink, Arrow } from "@/components/ui/Button";
import NotFound from "./NotFound";

export default function Project() {
  const { slug = "" } = useParams();
  const { t, lp, ui, lang } = useI18n();
  const { projects: all, experience, services: domains } = useContent();
  const { ready } = useContentState();
  const projects = all.filter((x) => x.published !== false);
  const p = projects.find((x) => x.slug === slug);
  const ogImage = useMedia(p?.image);
  if (!p) return ready ? <NotFound /> : <PageLoading />;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const org = experience.find((o) => o.id === p.org);
  const related = domains.filter((d) => p.domains.includes(d.slug));

  return (
    <>
      <Seo
        title={`${p.name} — ${t(kindLabel[p.kind])}`}
        description={t(p.summary)}
        path={`/work/${p.slug}`}
        image={ogImage && !ogImage.startsWith("data:") ? ogImage : undefined}
        jsonLd={[
          breadcrumbLd([
            { name: ui.nav.home, path: lp("/") },
            { name: ui.nav.work, path: lp("/work") },
            { name: p.name, path: lp(`/work/${p.slug}`) },
          ]),
        ]}
      />
      <section className="on-dark relative isolate overflow-hidden pb-16 pt-36 text-ivory sm:pt-44" style={{ background: `linear-gradient(180deg, ${p.look.bg} 0%, #050807 100%)` }}>
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="anim-fade-up text-sm text-ivory/60">
            <Link to={lp("/work")} className="group/btn inline-flex items-center gap-2 hover:text-ivory">
              <Arrow className="rotate-180" /> {ui.nav.work}
            </Link>
          </nav>
          <p className="anim-fade-up eyebrow mt-8 text-gold-light" style={{ animationDelay: "0.05s" }}>{t(kindLabel[p.kind])} · {t(p.period)}</p>
          <h1 className="mt-5 font-display text-display-2xl font-extrabold">
            <MaskText lines={[p.name]} delay={0.1} />
          </h1>
          <p className="anim-fade-up mt-6 max-w-2xl text-lead text-ivory/80" style={{ animationDelay: "0.35s" }}>{t(p.summary)}</p>
          <div className="anim-fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.45s" }}>
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-ivory px-7 font-semibold text-deep transition-colors hover:bg-gold">
                {ui.cta.visit} <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )}
            <ButtonLink to={lp("/book")} variant="outline-light" size="lg">{ui.cta.bookShort}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-site -mt-2 pt-12">
          <Reveal>
            <ProjectPreview project={p} priority />
          </Reveal>
          {!p.image && !(p.video && !embedUrl(p.video)) && <p className="mt-3 text-center text-xs text-ink-soft">{ui.illustrativePreview}</p>}
        </div>
      </section>

      <section className="bg-ivory py-section-sm">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="space-y-6 rounded-[1.5rem] border border-ink/10 bg-ivory-50 p-7 lg:sticky lg:top-28">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.role}</dt>
                <dd className="mt-1 font-semibold text-ink">{t(p.role)}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.period}</dt>
                <dd className="mt-1 font-semibold text-ink">{t(p.period)}</dd>
              </div>
              {org && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.client}</dt>
                  <dd className="mt-1 font-semibold text-ink">{org.name}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.tools}</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-medium text-forest">{s}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-display-sm font-extrabold text-ink">{ui.context}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{t(p.context)}</p>
            </Reveal>
            <Reveal className="mt-12">
              <h2 className="font-display text-display-sm font-extrabold text-ink">{ui.whatIDid}</h2>
              <ul className="mt-6 space-y-4">
                {p.did.map((d, i) => (
                  <li key={i} className="flex gap-4 rounded-2xl border border-ink/10 bg-ivory-50 p-5 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-ivory"><Check size={15} aria-hidden="true" /></span>
                    {t(d)}
                  </li>
                ))}
              </ul>
            </Reveal>
            {p.video && embedUrl(p.video) && (
              <Reveal className="mt-12 overflow-hidden rounded-[1.5rem] border border-ink/10">
                <VideoEmbed src={p.video} title={p.name} />
              </Reveal>
            )}
            {p.gallery && p.gallery.length > 0 && (
              <Reveal className="mt-12 grid gap-4 sm:grid-cols-2">
                {p.gallery.map((g, i) => (
                  <MediaImage key={i} src={g} alt={`${p.name} — ${i + 1}`} className={i === 0 && p.gallery!.length % 2 === 1 ? "w-full rounded-2xl border border-ink/10 object-cover sm:col-span-2" : "aspect-[4/3] w-full rounded-2xl border border-ink/10 object-cover"} />
                ))}
              </Reveal>
            )}
            <Reveal className="on-dark mt-12 rounded-[1.5rem] bg-deep p-8 text-ivory">
              <h2 className="eyebrow text-gold-light">{ui.outcome}</h2>
              <p className="mt-4 font-accent text-[clamp(1.3rem,2.4vw,1.8rem)] italic leading-snug">{t(p.outcome)}</p>
            </Reveal>
            {related.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.related}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {related.map((d) => (
                    <li key={d.slug}>
                      <Link to={lp(`/services/${d.slug}`)} className="inline-flex rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-forest hover:bg-forest hover:text-ivory">
                        {t(d.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-section-sm">
        <div className="container-site">
          <Link to={lp(`/work/${next.slug}`)} className="group flex flex-col gap-2 border-t border-ink/15 pt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{lang === "fr" ? "Projet suivant" : "Next project"}</span>
            <span className="group/btn flex items-center justify-between gap-6 font-display text-display-lg font-extrabold text-ink">
              <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-3">{next.name}</span>
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest text-ivory transition-colors group-hover:bg-gold group-hover:text-deep"><Arrow /></span>
            </span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
