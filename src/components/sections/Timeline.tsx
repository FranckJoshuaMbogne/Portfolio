import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/animations/Reveal";
import { formatMonth, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

const flag: Record<string, string> = { India: "IN", USA: "US", Cameroon: "CM" };

/** Experience timeline. The gold line draws as you scroll. `full` shows every role and highlight. */
export function Timeline({ full = false }: { full?: boolean }) {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-2 w-px bg-ink/15 md:left-1/2" />
      <motion.span aria-hidden="true" style={{ scaleY }} className="absolute bottom-0 left-[11px] top-2 w-px origin-top bg-gold md:left-1/2" />
      {experience.map((org, i) => {
        const roles = full ? org.roles : org.roles.slice(0, 1);
        const first = org.roles[org.roles.length - 1];
        const last = org.roles[0];
        const right = i % 2 === 1;
        return (
          <li key={org.id} className="relative pb-14 pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
            <span aria-hidden="true" className="absolute left-[4px] top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-gold bg-ivory md:left-1/2 md:-translate-x-1/2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <Reveal className={cn("md:text-right", right && "md:col-start-2 md:text-left")}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                {formatMonth(first.start, lang)} — {formatMonth(last.end, lang)} · {flag[org.country]}
              </p>
              <h3 className="mt-2 font-display text-display-sm font-extrabold text-ink">{org.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{t(org.about)}</p>
            </Reveal>
            <Reveal delay={0.1} className={cn("mt-5 md:mt-0", right && "md:col-start-1 md:row-start-1 md:text-right")}>
              <div className="space-y-5">
                {roles.map((r, j) => (
                  <div key={j} className="rounded-2xl border border-ink/10 bg-ivory-50 p-5 text-left shadow-soft">
                    <p className="font-semibold text-ink">{t(r.title)}</p>
                    <p className="mt-1 text-xs text-ink-soft">
                      {formatMonth(r.start, lang)} — {formatMonth(r.end, lang)} · {t(r.type)} · {t(r.location)}
                    </p>
                    <p className="mt-3 text-sm text-ink-muted">{t(r.summary)}</p>
                    {r.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {(full ? r.highlights : r.highlights.slice(0, 3)).map((h, k) => (
                          <li key={k} className="flex gap-2.5 text-sm text-ink">
                            <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-gold-dark" />
                            {t(h)}
                          </li>
                        ))}
                      </ul>
                    )}
                    {full && r.skills.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {r.skills.map((s) => (
                          <li key={s} className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-medium text-forest">{s}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {!full && org.roles.length > 1 && (
                  <p className="text-left text-xs font-semibold text-ink-soft">
                    + {org.roles.length - 1} {lang === "fr" ? "autre(s) rôle(s)" : "more role(s)"}
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
