import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/experience";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatMonth, useI18n } from "@/i18n";

export function Credentials() {
  const { t, lang } = useI18n();
  return (
    <section aria-labelledby="cred-title" className="bg-ivory-200/60 py-section">
      <div className="container-site">
        <SectionHeader
          id="cred-title"
          eyebrow={lang === "fr" ? "Formation et certifications" : "Education & certifications"}
          title={lang === "fr" ? <>Ingénieur de formation. <em>Data par conviction.</em></> : <>Engineer by training. <em>Data by conviction.</em></>}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <ul className="space-y-4 lg:col-span-5">
            {education.map((e, i) => (
              <Reveal as="li" key={e.school} delay={i * 0.08} className="rounded-[1.5rem] bg-deep p-7 text-ivory">
                <GraduationCap aria-hidden="true" className="text-gold-light" />
                <p className="mt-4 font-display text-xl font-extrabold">{e.school}</p>
                <p className="mt-2 text-ivory/75">{t(e.degree)}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {formatMonth(e.start, lang)} — {formatMonth(e.end, lang)}
                </p>
              </Reveal>
            ))}
          </ul>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.name} delay={(i % 4) * 0.05} className="flex gap-4 rounded-2xl border border-ink/10 bg-ivory-50 p-5 transition-colors hover:border-gold/60">
                <Award size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-gold-dark" />
                <div>
                  <p className="font-semibold leading-snug text-ink">{c.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {c.issuer} · {formatMonth(c.date, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
