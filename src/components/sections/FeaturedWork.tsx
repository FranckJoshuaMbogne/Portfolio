import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { kindLabel } from "@/data/projects";
import type { Project } from "@/content/types";
import { useContent } from "@/content/ContentProvider";
import { ProjectPreview } from "@/components/art/ProjectPreview";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { useI18n } from "@/i18n";

function Card({ project, i, n, progress }: { project: Project; i: number; n: number; progress: MotionValue<number> }) {
  const { t, lp, ui } = useI18n();
  const reduce = useReducedMotion();
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.035]);
  return (
    <div className="sticky" style={{ top: `calc(6rem + ${i * 1.75}rem)` }}>
      <motion.article
        style={reduce ? undefined : { scale }}
        className="origin-top overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory-50 shadow-[0_-20px_60px_-30px_rgba(10,33,24,0.35)]"
      >
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="flex flex-col lg:col-span-5">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              <span className="tabular-nums text-gold-dark">0{i + 1}</span>
              <span className="h-px w-6 bg-ink/20" />
              {t(kindLabel[project.kind])}
            </div>
            <h3 className="mt-5 font-display text-display-md font-extrabold text-ink">{project.name}</h3>
            <p className="mt-2 text-sm font-medium text-forest-600">{t(project.role)}</p>
            <p className="mt-5 text-ink-muted">{t(project.summary)}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((s) => (
                <li key={s} className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink-muted">{s}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
              <ButtonLink to={lp(`/work/${project.slug}`)} variant="primary">{ui.cta.viewProject}</ButtonLink>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-ink/20 px-5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink">
                  {ui.cta.visit} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          <Link to={lp(`/work/${project.slug}`)} tabIndex={-1} aria-hidden="true" className="group block lg:col-span-7">
            <div className="transition-transform duration-700 ease-editorial group-hover:-rotate-1 group-hover:scale-[1.015]">
              <ProjectPreview project={project} />
            </div>
          </Link>
        </div>
      </motion.article>
    </div>
  );
}

export function FeaturedWork() {
  const { lang, lp, ui } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const { projects } = useContent();
  const featured = projects.filter((p) => p.featured && p.published !== false);
  return (
    <section aria-labelledby="work-title" className="bg-ivory py-section">
      <div className="container-site">
        <SectionHeader
          id="work-title"
          eyebrow={lang === "fr" ? "Réalisations" : "Selected work"}
          title={lang === "fr" ? <>Des sites et des marques <em>que j'ai construits.</em></> : <>Websites and brands <em>I've built.</em></>}
          intro={
            lang === "fr"
              ? "Pas des maquettes : des sites en ligne, des identités utilisées et des campagnes lancées. Cliquez pour voir ce que j'ai fait sur chacun."
              : "Not mock-ups: live websites, identities in use and campaigns that ran. Open any project to see exactly what I did."
          }
          action={<ButtonLink to={lp("/work")} variant="outline">{ui.cta.allWork}</ButtonLink>}
        />
        <div ref={ref} className="mt-14 space-y-8 pb-8">
          {featured.map((p, i) => (
            <Card key={p.slug} project={p} i={i} n={featured.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
