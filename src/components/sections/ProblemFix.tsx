import { X, Check } from "lucide-react";
import { useContent } from "@/content/ContentProvider";
import { Reveal } from "@/components/animations/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { useI18n } from "@/i18n";

export function ProblemFix() {
  const { t, lang } = useI18n();
  const { profile } = useContent();
  return (
    <section aria-labelledby="problem-title" className="bg-sage-100 py-section">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <Eyebrow>{lang === "fr" ? "Le vrai problème" : "The real problem"}</Eyebrow>
          <h2 id="problem-title" className="mt-5 font-display text-display-lg font-extrabold text-ink">
            {lang === "fr" ? <>Le problème est rarement le canal. <em>C'est le système derrière.</em></> : <>The issue is rarely the channel. <em>It's the system behind it.</em></>}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-ink/10 bg-ivory-50 p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">{lang === "fr" ? "Si vous vivez ceci…" : "If you're facing this…"}</p>
            <ul className="mt-6 space-y-4">
              {profile.problems.map((p, i) => (
                <li key={i} className="flex gap-4 text-lg font-medium text-ink">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B2C2C]/10 text-[#9B2C2C]"><X size={14} aria-hidden="true" /></span>
                  {t(p)}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="on-dark rounded-[2rem] bg-deep p-7 text-ivory sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">{lang === "fr" ? "…voici comment je le résous" : "…here's how I solve it"}</p>
            <ul className="mt-6 space-y-4">
              {profile.fixes.map((p, i) => (
                <li key={i} className="flex gap-4 text-lg font-medium">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-deep"><Check size={14} aria-hidden="true" /></span>
                  {t(p)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
