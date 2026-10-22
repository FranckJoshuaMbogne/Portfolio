import { Check } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function Offers() {
  const { t, lang, lp, ui } = useI18n();
  return (
    <section aria-labelledby="offers-title" className="bg-ivory py-section">
      <div className="container-site">
        <SectionHeader
          id="offers-title"
          eyebrow={lang === "fr" ? "Travailler ensemble" : "Ways to work with me"}
          title={lang === "fr" ? <>Trois façons de <em>commencer.</em></> : <>Three ways to <em>start.</em></>}
          align="center"
        />
        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {profile.offers.map((o, i) => (
            <Reveal as="li" key={o.index} delay={i * 0.1}>
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 transition-all duration-500 ease-editorial hover:-translate-y-2",
                  i === 1 ? "on-dark border-gold/30 bg-deep text-ivory" : "border-ink/10 bg-ivory-50 hover:border-gold/50"
                )}
              >
                <span aria-hidden="true" className={cn("absolute -right-6 -top-10 font-display text-[9rem] font-extrabold leading-none", i === 1 ? "text-ivory/[0.06]" : "text-forest/[0.06]")}>{o.index}</span>
                <span className={cn("text-sm font-semibold tabular-nums", i === 1 ? "text-gold-light" : "text-gold-dark")}>{o.index}</span>
                <h3 className="mt-4 font-display text-display-sm font-extrabold">{t(o.name)}</h3>
                <p className={cn("mt-4", i === 1 ? "text-ivory/75" : "text-ink-muted")}>{t(o.body)}</p>
                <ul className="mt-6 space-y-2.5">
                  {o.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5 text-sm font-medium">
                      <Check size={16} aria-hidden="true" className={cn("mt-0.5 shrink-0", i === 1 ? "text-gold-light" : "text-gold-dark")} /> {t(p)}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ButtonLink to={`${lp("/book")}?offer=${o.index}`} variant={i === 1 ? "light" : "primary"} className="w-full">
                    {ui.cta.bookShort}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
