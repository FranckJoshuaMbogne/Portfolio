import { Marquee } from "@/components/animations/Marquee";
import { useI18n } from "@/i18n";

const names = ["BluTailor", "Mudraa Design", "My Perfect Fit", "Springs 360", "AFG Bank Cameroun", "AIESEC", "King Arthur", "RP 237", "GIC IFTA"];

export function OrgMarquee() {
  const { lang } = useI18n();
  return (
    <section aria-label={lang === "fr" ? "Organisations accompagnées" : "Organisations I've worked with"} className="border-y border-ink/10 bg-ivory py-8">
      <p className="container-site mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
        {lang === "fr" ? "Marques et organisations avec qui j'ai travaillé" : "Brands and organisations I've worked with"}
      </p>
      <Marquee>
        {names.map((n) => (
          <span key={n} className="mx-8 flex items-center gap-8 whitespace-nowrap text-[clamp(1.3rem,2.4vw,2rem)] font-extrabold tracking-[-0.03em] text-forest/80">
            {n}
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
