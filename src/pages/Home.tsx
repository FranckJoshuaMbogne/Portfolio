import { Seo, personLd, websiteLd, faqLd } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { useContent, useMedia } from "@/content/ContentProvider";
import { Industries } from "@/components/sections/Industries";
import { Hero } from "@/components/sections/Hero";
import { OrgMarquee } from "@/components/sections/OrgMarquee";
import { Statement } from "@/components/sections/Statement";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesList } from "@/components/sections/ServicesList";
import { ProblemFix } from "@/components/sections/ProblemFix";
import { Timeline } from "@/components/sections/Timeline";
import { Offers } from "@/components/sections/Offers";
import { Showreel } from "@/components/sections/Showreel";
import { Credentials } from "@/components/sections/Credentials";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  const { lang, t, lp, ui } = useI18n();
  const { faqs, settings } = useContent();
  const portrait = useMedia(settings.portrait);
  const description =
    lang === "fr"
      ? "Franck Joshua Mbogne — ingénieur en systèmes de revenus. Marketing de performance (Google & Meta Ads), sites web et Shopify, SEO, data et IA pour une croissance prévisible et rentable."
      : "Franck Joshua Mbogne — revenue systems engineer. Performance marketing (Google & Meta Ads), websites and Shopify, SEO, data and AI for predictable, profitable growth.";
  return (
    <>
      <Seo
        title={lang === "fr" ? "Franck Joshua Mbogne — Ingénieur en systèmes de revenus" : "Franck Joshua Mbogne — Revenue Systems Engineer"}
        description={description}
        path="/"
        jsonLd={[personLd(description, settings, portrait), websiteLd(), faqLd(faqs.map((f) => ({ question: t(f.q), answer: t(f.a) })))]}
      />
      <Hero />
      <OrgMarquee />
      <Statement />
      <FeaturedWork />
      <ServicesList />
      <Industries />
      <ProblemFix />
      <section aria-labelledby="xp-title" className="bg-ivory py-section">
        <div className="container-site">
          <SectionHeader
            id="xp-title"
            eyebrow={lang === "fr" ? "Parcours" : "Experience"}
            title={lang === "fr" ? <>Trois pays. <em>Une même méthode.</em></> : <>Three countries. <em>One method.</em></>}
            intro={
              lang === "fr"
                ? "De Douala à Hyderabad : banque, retail, réseaux professionnels et e-commerce de luxe."
                : "From Douala to Hyderabad: banking, retail, professional networks and luxury e-commerce."
            }
            action={<ButtonLink to={lp("/experience")} variant="outline">{ui.cta.fullExperience}</ButtonLink>}
          />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>
      <Offers />
      <Showreel />
      <Credentials />
      <Faq />
      <CtaBand />
    </>
  );
}
