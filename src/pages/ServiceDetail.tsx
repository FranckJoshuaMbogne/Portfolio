import { Link, useParams } from "react-router-dom";
import { Seo, breadcrumbLd, serviceLd } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { domains, getDomain } from "@/data/services";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectPreview } from "@/components/art/ProjectPreview";
import { ButtonLink, Arrow } from "@/components/ui/Button";
import { site } from "@/config/site";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const { t, lp, ui, lang } = useI18n();
  const d = getDomain(slug);
  if (!d) return <NotFound />;
  const orgs = experience.filter((o) => d.orgs.includes(o.id));
  const work = d.projects.map(getProject).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const others = domains.filter((x) => x.slug !== d.slug);
  return (
    <>
      <Seo
        title={t(d.name)}
        description={`${t(d.tagline)} ${t(d.description)}`.slice(0, 300)}
        path={`/services/${d.slug}`}
        jsonLd={[
          serviceLd({ name: t(d.name), description: t(d.description), path: lp(`/services/${d.slug}`) }),
          breadcrumbLd([
            { name: ui.nav.home, path: lp("/") },
            { name: ui.nav.services, path: lp("/services") },
            { name: t(d.name), path: lp(`/services/${d.slug}`) },
          ]),
        ]}
      />
      <PageHero
        eyebrow={`${d.index} · ${ui.nav.services}`}
        lines={[t(d.name)]}
        intro={t(d.description)}
        crumbs={[{ label: ui.nav.services, to: lp("/services") }, { label: t(d.name), to: lp(`/services/${d.slug}`) }]}
      >
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <ButtonLink to={lp("/book")} variant="light" size="lg">{ui.cta.book}</ButtonLink>
          <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-ivory/30 px-7 font-semibold hover:border-ivory">WhatsApp</a>
        </div>
      </PageHero>

      <section className="bg-ivory py-section-sm">
        <div className="container-site">
          <p className="font-accent text-[clamp(1.5rem,3vw,2.4rem)] italic text-forest">{t(d.tagline)}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.services.map((s, j) => (
              <Reveal as="li" key={j} delay={(j % 3) * 0.06} className="rounded-2xl border border-ink/10 bg-ivory-50 p-6">
                <span className="text-xs font-semibold tabular-nums text-gold-dark">{d.index}.{j + 1}</span>
                <h2 className="mt-2 text-lg font-bold text-ink">{t(s.name)}</h2>
                <p className="mt-1.5 text-sm text-ink-muted">{t(s.desc)}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{ui.tools}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {d.tools.map((x) => (
                <li key={x} className="rounded-full bg-sage-100 px-3 py-1.5 text-sm font-medium text-forest">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="on-dark bg-deep py-section-sm text-ivory">
        <div className="container-site">
          <h2 className="font-display text-display-md font-extrabold">{ui.whereIDidIt}</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {orgs.map((o, i) => (
              <Reveal as="li" key={o.id} delay={i * 0.06} className="rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-6">
                <p className="font-display text-xl font-extrabold">{o.name}</p>
                <p className="mt-1 text-sm text-gold-light">{o.roles.map((r) => t(r.title)).join(" · ")}</p>
                <p className="mt-3 text-sm text-ivory/70">{t(o.roles[0].summary)}</p>
              </Reveal>
            ))}
          </ul>
          <Link to={lp("/experience")} className="group/btn mt-8 inline-flex items-center gap-3 font-semibold">
            <span className="link-underline">{ui.cta.fullExperience}</span> <Arrow />
          </Link>
        </div>
      </section>

      {work.length > 0 && (
        <section className="bg-ivory py-section-sm">
          <div className="container-site">
            <h2 className="font-display text-display-md font-extrabold text-ink">{ui.relatedWork}</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {work.map((p) => (
                <li key={p.slug}>
                  <Link to={lp(`/work/${p.slug}`)} className="group block">
                    <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                      <ProjectPreview project={p} parallax={false} />
                    </div>
                    <p className="mt-4 font-display text-xl font-extrabold text-ink">{p.name}</p>
                    <p className="mt-1 text-sm text-ink-muted">{t(p.role)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-ivory pb-section-sm">
        <div className="container-site">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{lang === "fr" ? "Autres expertises" : "Other areas"}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={lp(`/services/${o.slug}`)} className="inline-flex rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink hover:border-forest hover:bg-forest hover:text-ivory">{t(o.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
