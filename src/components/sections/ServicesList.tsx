import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { domains } from "@/data/services";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink, Arrow } from "@/components/ui/Button";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

const orgName = (id: string) => experience.find((o) => o.id === id)?.name.split(" · ")[0] ?? id;

/** Interactive list of the five domains; opening one reveals services and proof. */
export function ServicesList({ light = false }: { light?: boolean }) {
  const { t, lp, lang, ui } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section aria-labelledby="services-title" className={cn("py-section", light ? "bg-ivory" : "on-dark bg-deep text-ivory")}>
      <div className="container-site">
        <SectionHeader
          id="services-title"
          light={!light}
          eyebrow={lang === "fr" ? "Ce que je fais" : "What I do"}
          title={lang === "fr" ? <>Cinq expertises. <em>Un seul système.</em></> : <>Five areas. <em>One system.</em></>}
          intro={
            lang === "fr"
              ? "Chaque service est relié à l'endroit où je l'ai déjà fait — en entreprise, pour des clients ou pour mes propres marques."
              : "Every service links to where I've already done it — in-house, for clients, or for my own brands."
          }
          action={<ButtonLink to={lp("/services")} variant={light ? "outline" : "outline-light"}>{ui.cta.allServices}</ButtonLink>}
        />
        <ul className={cn("mt-14 border-t", light ? "border-ink/15" : "border-ivory/15")}>
          {domains.map((d, i) => {
            const isOpen = open === i;
            return (
              <li key={d.slug} className={cn("border-b", light ? "border-ink/15" : "border-ivory/15")}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`dom-${d.slug}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center gap-5 py-7 text-left sm:gap-8"
                  >
                    <span className={cn("w-8 shrink-0 text-sm font-semibold tabular-nums", light ? "text-gold-dark" : "text-gold-light")}>{d.index}</span>
                    <span className="flex-1 font-display text-[clamp(1.4rem,3.2vw,2.6rem)] font-extrabold leading-tight tracking-[-0.03em] transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                      {t(d.name)}
                    </span>
                    <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500", isOpen ? "rotate-45 border-gold bg-gold text-deep" : light ? "border-ink/20" : "border-ivory/25")}>
                      <Plus size={18} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`dom-${d.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 sm:pl-16 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                          <p className={cn("font-accent text-xl italic", light ? "text-forest" : "text-gold-light")}>{t(d.tagline)}</p>
                          <p className={cn("mt-4", light ? "text-ink-muted" : "text-ivory/75")}>{t(d.description)}</p>
                          <p className={cn("mt-6 text-xs font-semibold uppercase tracking-[0.2em]", light ? "text-ink-soft" : "text-ivory/60")}>{ui.whereIDidIt}</p>
                          <p className="mt-2 text-sm font-semibold">{d.orgs.map(orgName).join(" · ")}</p>
                          <Link to={lp(`/services/${d.slug}`)} className="group/btn mt-6 inline-flex items-center gap-3 font-semibold">
                            <span className="link-underline">{ui.cta.learnMore}</span> <Arrow />
                          </Link>
                        </div>
                        <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
                          {d.services.map((s, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 * j + 0.1, duration: 0.5 }}
                              className={cn("rounded-2xl border p-4", light ? "border-ink/10 bg-ivory-50" : "border-ivory/10 bg-ivory/[0.03]")}
                            >
                              <p className="font-semibold">{t(s.name)}</p>
                              <p className={cn("mt-1 text-sm", light ? "text-ink-muted" : "text-ivory/65")}>{t(s.desc)}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
