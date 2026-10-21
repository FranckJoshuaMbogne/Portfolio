import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Seo } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { projects, kindLabel, type ProjectKind } from "@/data/projects";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectPreview } from "@/components/art/ProjectPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { Arrow } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Work() {
  const { lang, t, lp, ui } = useI18n();
  const [filter, setFilter] = useState<ProjectKind | "all">("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.kind === filter);
  const filters: (ProjectKind | "all")[] = ["all", "website", "brand", "campaign"];
  return (
    <>
      <Seo
        title={lang === "fr" ? "Réalisations — sites web, marques et campagnes" : "Work — websites, brands and campaigns"}
        description={
          lang === "fr"
            ? "Les sites, identités de marque et campagnes réalisés par Franck Joshua Mbogne : BluTailor, Mudraa Design, Springs 360, GIC IFTA, AFG Bank et plus."
            : "Websites, brand identities and campaigns by Franck Joshua Mbogne: BluTailor, Mudraa Design, Springs 360, GIC IFTA, AFG Bank and more."
        }
        path="/work"
      />
      <PageHero
        eyebrow={ui.nav.work}
        lines={lang === "fr" ? ["Ce que j'ai", <em key="e">construit.</em>] : ["What I've", <em key="e">built.</em>]}
        intro={lang === "fr" ? "Sites web, identités de marque et campagnes — avec, pour chacun, ce que j'ai fait concrètement." : "Websites, brand identities and campaigns — each with exactly what I did."}
        crumbs={[{ label: ui.nav.work, to: lp("/work") }]}
      />
      <section className="bg-ivory py-section-sm">
        <div className="container-site">
          <LayoutGroup>
            <div role="group" aria-label="Filter" className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={cn("relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors", filter === f ? "text-ivory" : "text-ink hover:bg-ink/[0.05]")}
                >
                  {filter === f && <motion.span layoutId="work-filter" className="absolute inset-0 -z-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  <span className="relative">{f === "all" ? (lang === "fr" ? "Tout" : "All") : t(kindLabel[f])}</span>
                </button>
              ))}
            </div>
            <motion.ul layout className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {list.map((p, i) => (
                  <motion.li
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(i % 2 === 1 && "md:mt-20")}
                  >
                    <Link to={lp(`/work/${p.slug}`)} className="group block">
                      <div className="transition-transform duration-700 ease-editorial group-hover:-translate-y-2">
                        <ProjectPreview project={p} parallax={false} />
                      </div>
                      <div className="mt-5 flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{t(kindLabel[p.kind])} · {t(p.period)}</p>
                          <h2 className="mt-2 font-display text-display-sm font-extrabold text-ink">{p.name}</h2>
                          <p className="mt-2 max-w-md text-ink-muted">{t(p.summary)}</p>
                        </div>
                        <span className="group/btn mt-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-ivory">
                          <Arrow />
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </LayoutGroup>
        </div>
      </section>
      <CtaBand title={lang === "fr" ? <>Votre projet <em>est le prochain ?</em></> : <>Is your project <em>next?</em></>} />
    </>
  );
}
