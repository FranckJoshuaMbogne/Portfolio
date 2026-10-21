import { Mail, MessageCircle, Phone } from "lucide-react";
import { MagneticButton } from "@/components/animations/Magnetic";
import { Reveal } from "@/components/animations/Reveal";
import { site } from "@/config/site";
import { useI18n } from "@/i18n";

export function CtaBand({ title }: { title?: React.ReactNode }) {
  const { lang, lp, ui } = useI18n();
  return (
    <section aria-label={ui.cta.book} className="bg-ivory pb-section">
      <div className="container-site">
        <Reveal className="on-dark relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-center text-ivory sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20" />
          <div aria-hidden="true" className="anim-spin-slow absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ivory/15" />
          <div className="relative">
            <p className="eyebrow text-gold-light">{lang === "fr" ? "Consultation gratuite · 30 min" : "Free consultation · 30 min"}</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-display-lg font-extrabold">
              {title ?? (lang === "fr" ? <>Parlons de votre <em>croissance.</em></> : <>Let's talk about your <em>growth.</em></>)}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ivory/75">
              {lang === "fr"
                ? "Vous repartez avec 2 ou 3 priorités concrètes pour votre publicité, votre site et vos données — que l'on travaille ensemble ou non."
                : "You'll leave with 2–3 concrete priorities for your ads, website and data — whether or not we work together."}
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton to={lp("/book")}>{ui.cta.book}</MagneticButton>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-ivory/80">
              <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ivory"><MessageCircle size={17} aria-hidden="true" className="text-gold-light" /> WhatsApp</a>
              <a href={site.contact.phoneHref} className="flex items-center gap-2 hover:text-ivory"><Phone size={17} aria-hidden="true" className="text-gold-light" /> {site.contact.phoneDisplay}</a>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:text-ivory"><Mail size={17} aria-hidden="true" className="text-gold-light" /> {ui.cta.email}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
