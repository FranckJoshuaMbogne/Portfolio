import { Seo, personLd } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { useContact, useContent, useMedia } from "@/content/ContentProvider";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/animations/Reveal";
import { WordReveal } from "@/components/animations/WordReveal";
import { Portrait } from "@/components/art/Portrait";
import { ProblemFix } from "@/components/sections/ProblemFix";
import { CtaBand } from "@/components/sections/CtaBand";

export default function About() {
  const { lang, t, lp, ui } = useI18n();
  const { profile, settings } = useContent();
  const contact = useContact();
  const portrait = useMedia(settings.portrait);
  const aboutImage = useMedia(settings.aboutImage);
  const description =
    lang === "fr"
      ? "Ingénieur en systèmes informatiques, spécialiste du marketing de performance et de la stratégie de revenus. Cameroun, Inde, États-Unis."
      : "Computer systems engineer, performance marketer and revenue strategist. Cameroon, India, USA.";
  return (
    <>
      <Seo title={lang === "fr" ? "À propos" : "About"} description={description} path="/about" jsonLd={[personLd(description, settings, portrait)]} />
      <PageHero
        eyebrow={ui.nav.about}
        lines={lang === "fr" ? ["Ingénieur, marketeur,", <em key="e">bâtisseur de systèmes.</em>] : ["Engineer, marketer,", <em key="e">system builder.</em>]}
        intro={t(profile.role)}
        crumbs={[{ label: ui.nav.about, to: lp("/about") }]}
      />
      <section className="bg-ivory py-section-sm">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="on-dark rounded-[2rem] bg-deep p-8 pb-14 lg:col-span-5 lg:self-start lg:sticky lg:top-28">
            {aboutImage ? <img src={aboutImage} alt="" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" loading="lazy" /> : <Portrait />}
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-7">
            {profile.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className={i === 0 ? "text-xl font-medium text-ink" : undefined}>{t(p)}</p>
              </Reveal>
            ))}
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {profile.background.map((b, i) => (
                <Reveal key={i} delay={i * 0.06} className="rounded-2xl border border-ink/10 bg-ivory-50 p-5">
                  <p className="text-base font-bold text-ink">{t(b.title)}</p>
                  <p className="mt-1.5 text-sm">{t(b.body)}</p>
                </Reveal>
              ))}
            </div>
            <p className="pt-4 text-base">
              {t(profile.languages)}{" "}
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest underline decoration-gold underline-offset-4">LinkedIn ↗</a>
            </p>
          </div>
        </div>
      </section>
      <section className="on-dark bg-deep py-section text-ivory">
        <div className="container-site">
          <WordReveal text={t(profile.principle)} className="max-w-5xl font-display text-display-lg font-extrabold leading-[1.1]" />
        </div>
      </section>
      <ProblemFix />
      <CtaBand />
    </>
  );
}
