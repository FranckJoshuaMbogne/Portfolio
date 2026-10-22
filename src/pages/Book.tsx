import { Clock, Mail, MessageCircle, Phone, Video } from "lucide-react";
import { Seo } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { site } from "@/config/site";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { MaskText } from "@/components/animations/MaskText";

export default function Book() {
  const { ui, lang } = useI18n();
  const expect =
    lang === "fr"
      ? ["Vos objectifs et votre situation actuelle", "Une revue rapide de votre pub, site et données", "2 ou 3 priorités concrètes à appliquer", "Une proposition claire, seulement si c'est pertinent"]
      : ["Your goals and where you are today", "A quick review of your ads, website and data", "2–3 concrete priorities you can act on", "A clear proposal — only if it makes sense"];
  return (
    <>
      <Seo
        title={ui.form.title}
        description={
          lang === "fr"
            ? "Réservez une consultation stratégique gratuite de 30 minutes avec Franck Joshua Mbogne — marketing de performance, site web, SEO, data."
            : "Book a free 30-minute strategy consultation with Franck Joshua Mbogne — performance marketing, websites, SEO, data."
        }
        path="/book"
      />
      <section className="on-dark relative overflow-hidden bg-deep pb-40 pt-36 text-ivory sm:pt-44">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(30,82,58,0.3),transparent_55%)]" />
        <div className="container-site relative grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="anim-fade-up eyebrow text-gold-light">{ui.form.free}</p>
            <h1 className="mt-6 font-display text-display-xl font-extrabold">
              <MaskText lines={lang === "fr" ? ["Réservons", <em key="e">30 minutes.</em>] : ["Let's book", <em key="e">30 minutes.</em>]} delay={0.1} />
            </h1>
          </div>
          <ul className="anim-fade-up space-y-3 self-end lg:col-span-6" style={{ animationDelay: "0.3s" }}>
            {expect.map((e) => (
              <li key={e} className="flex items-center gap-3 text-ivory/85">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-ivory pb-section">
        <div className="container-site -mt-28 grid gap-8 lg:grid-cols-12">
          <div className="relative min-w-0 rounded-[2rem] border border-ink/10 bg-ivory-50 p-5 shadow-soft sm:p-10 lg:col-span-8">
            <ConsultationForm />
          </div>
          <aside className="min-w-0 space-y-3 lg:col-span-4 lg:pt-6">
            <div className="rounded-[1.5rem] bg-deep p-6 text-ivory">
              <p className="flex items-center gap-2 text-sm font-semibold"><Clock size={17} className="text-gold-light" aria-hidden="true" /> 30 min</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold"><Video size={17} className="text-gold-light" aria-hidden="true" /> Google Meet · WhatsApp · {lang === "fr" ? "Téléphone" : "Phone"}</p>
              <p className="mt-4 text-sm text-ivory/70">{lang === "fr" ? "Disponible en anglais et en français." : "Available in English and French."}</p>
            </div>
            <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[1.5rem] border border-ink/10 bg-ivory-50 p-5 transition-colors hover:border-gold">
              <MessageCircle className="text-forest" aria-hidden="true" />
              <span><span className="block font-semibold text-ink">{ui.cta.whatsapp}</span><span className="text-sm text-ink-soft">{site.contact.phoneDisplay}</span></span>
            </a>
            <a href={site.contact.phoneHref} className="flex items-center gap-4 rounded-[1.5rem] border border-ink/10 bg-ivory-50 p-5 transition-colors hover:border-gold">
              <Phone className="text-forest" aria-hidden="true" />
              <span className="font-semibold text-ink">{ui.cta.call}</span>
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-4 rounded-[1.5rem] border border-ink/10 bg-ivory-50 p-5 transition-colors hover:border-gold">
              <Mail className="text-forest" aria-hidden="true" />
              <span className="min-w-0"><span className="block font-semibold text-ink">{ui.cta.email}</span><span className="block truncate text-sm text-ink-soft">{site.contact.email}</span></span>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
