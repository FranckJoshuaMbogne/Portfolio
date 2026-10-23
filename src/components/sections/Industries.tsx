import { Link } from "react-router-dom";
import { useContent } from "@/content/ContentProvider";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaImage } from "@/components/ui/MediaImage";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

/** Industries I've worked in — edited in /admin → Industries. */
export function Industries({ light = true }: { light?: boolean }) {
  const { t, lp, lang } = useI18n();
  const { industries, projects } = useContent();
  if (!industries.length) return null;
  const projectName = (s: string) => projects.find((p) => p.slug === s && p.published !== false)?.name;
  return (
    <section aria-labelledby="industries-title" className={cn("py-section", light ? "bg-ivory" : "bg-sage-100")}>
      <div className="container-site">
        <SectionHeader
          id="industries-title"
          eyebrow={lang === "fr" ? "Secteurs" : "Industries"}
          title={lang === "fr" ? <>Les secteurs que <em>je connais.</em></> : <>Industries <em>I know.</em></>}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={(i % 3) * 0.07} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ivory-50 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-soft">
              {ind.image ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <MediaImage src={ind.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              ) : (
                <div aria-hidden="true" className="relative aspect-[16/9] overflow-hidden bg-deep">
                  <span className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-gold/30 transition-transform duration-700 group-hover:scale-125" />
                  <span className="absolute bottom-5 left-6 font-display text-6xl font-extrabold text-ivory/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold text-ink">{t(ind.name)}</h3>
                <p className="mt-2 text-sm text-ink-muted">{t(ind.description)}</p>
                {ind.projects.length > 0 && (
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {ind.projects.map((s) => {
                      const n = projectName(s);
                      return n ? (
                        <li key={s}>
                          <Link to={lp(`/work/${s}`)} className="inline-flex rounded-full border border-forest/25 px-3 py-1 text-xs font-semibold text-forest hover:bg-forest hover:text-ivory">
                            {n} ↗
                          </Link>
                        </li>
                      ) : null;
                    })}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
