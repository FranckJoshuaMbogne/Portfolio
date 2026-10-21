import { Seo, breadcrumbLd } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { Timeline } from "@/components/sections/Timeline";
import { Credentials } from "@/components/sections/Credentials";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/config/site";

export default function Experience() {
  const { lang, lp, ui } = useI18n();
  return (
    <>
      <Seo
        title={lang === "fr" ? "Parcours — expériences, formation et certifications" : "Experience — roles, education and certifications"}
        description={
          lang === "fr"
            ? "Le parcours de Franck Joshua Mbogne : BluTailor / My Perfect Fit, RP 237, AFG Bank Cameroun, King Arthur, AIESEC — plus ESSEC, Université de Douala et 10 certifications."
            : "Franck Joshua Mbogne's experience: BluTailor / My Perfect Fit, RP 237, AFG Bank Cameroun, King Arthur, AIESEC — plus ESSEC, University of Douala and 10 certifications."
        }
        path="/experience"
        jsonLd={[breadcrumbLd([{ name: ui.nav.home, path: lp("/") }, { name: ui.nav.experience, path: lp("/experience") }])]}
      />
      <PageHero
        eyebrow={ui.nav.experience}
        lines={lang === "fr" ? ["Ce que j'ai fait,", <em key="e">et où.</em>] : ["What I've done,", <em key="e">and where.</em>]}
        intro={lang === "fr" ? "Chaque entreprise, chaque rôle, et ce que j'y ai concrètement réalisé." : "Every company, every role, and what I actually delivered there."}
        crumbs={[{ label: ui.nav.experience, to: lp("/experience") }]}
      >
        <a href={site.social[0].href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center rounded-full border border-ivory/30 px-7 font-semibold hover:border-ivory">
          LinkedIn ↗
        </a>
      </PageHero>
      <section className="bg-ivory py-section-sm">
        <div className="container-site">
          <Timeline full />
        </div>
      </section>
      <Credentials />
      <CtaBand />
    </>
  );
}
