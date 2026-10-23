import { WordReveal } from "@/components/animations/WordReveal";
import { Counter } from "@/components/animations/Counter";
import { Reveal } from "@/components/animations/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { useContent } from "@/content/ContentProvider";
import { useI18n } from "@/i18n";

export function Statement() {
  const { t, lang } = useI18n();
  const { profile } = useContent();
  return (
    <section aria-label={lang === "fr" ? "Ma conviction" : "What I believe"} className="on-dark relative overflow-hidden bg-deep py-section text-ivory">
      <div aria-hidden="true" className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full border border-gold/20" />
      <div aria-hidden="true" className="absolute -right-24 top-28 h-[320px] w-[320px] rounded-full border border-dashed border-ivory/10 anim-spin-slow" />
      <div className="container-site relative">
        <Eyebrow light>{lang === "fr" ? "Ma conviction" : "What I believe"}</Eyebrow>
        <WordReveal
          text={t(profile.statement)}
          className="mt-8 max-w-5xl font-display text-display-lg font-extrabold leading-[1.08]"
        />
        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory/15 pt-10 lg:grid-cols-4">
          {profile.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <dt className="sr-only">{t(s.label)}</dt>
              <dd>
                <span className="block font-display text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-none text-gold-light">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-3 block max-w-[14rem] text-sm text-ivory/75">{t(s.label)}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
