import { Link } from "react-router-dom";
import { Link2, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { useI18n } from "@/i18n";
import { useContact, useContent } from "@/content/ContentProvider";
import { Logo } from "./Logo";
import { PrimaryCta } from "@/components/animations/Magnetic";

export function Footer() {
  const { ui, lp, t, lang } = useI18n();
  const contact = useContact();
  const { services: domains, settings } = useContent();
  const year = 2026;
  return (
    <footer className="on-dark relative overflow-hidden bg-deep text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(30,82,58,0.28),transparent_55%)]" />
      <div className="container-site relative pb-28 pt-section-sm md:pb-12">
        <div className="grid gap-12 border-b border-ivory/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {settings.available && <p className="eyebrow flex items-center gap-3 text-gold-light">
              <span className="relative flex h-2 w-2">
                <span className="anim-pulse-ring absolute inset-0 rounded-full bg-gold-light" />
                <span className="relative h-2 w-2 rounded-full bg-gold-light" />
              </span>
              {ui.footer.available}
            </p>}
            <p className="mt-6 font-display text-display-lg font-extrabold">
              {lang === "fr" ? (
                <>Construisons votre <em>système de croissance.</em></>
              ) : (
                <>Let's build your <em>growth system.</em></>
              )}
            </p>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <PrimaryCta />
            </div>
          </div>
          <div className="grid gap-3 self-end text-[0.95rem] lg:col-span-5">
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-ivory/10 px-5 py-4 transition-colors hover:border-gold/60 hover:bg-ivory/[0.03]">
              <MessageCircle size={20} className="text-gold-light" aria-hidden="true" />
              <span>WhatsApp · {contact.phoneDisplay}</span>
            </a>
            <a href={contact.phoneHref} className="group flex items-center gap-4 rounded-2xl border border-ivory/10 px-5 py-4 transition-colors hover:border-gold/60 hover:bg-ivory/[0.03]">
              <Phone size={20} className="text-gold-light" aria-hidden="true" />
              <span>{ui.cta.call}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 rounded-2xl border border-ivory/10 px-5 py-4 transition-colors hover:border-gold/60 hover:bg-ivory/[0.03]">
              <Mail size={20} className="text-gold-light" aria-hidden="true" />
              <span className="break-all">{contact.email}</span>
            </a>
          </div>
        </div>

        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-ivory/65">{ui.footer.tagline}</p>
            <p className="mt-3 text-sm text-ivory/65">{t(contact.location)}</p>
          </div>
          <nav aria-label="Footer" className="lg:col-span-3">
            <ul className="space-y-2.5 text-sm">
              {[
                [lp("/work"), ui.nav.work],
                [lp("/services"), ui.nav.services],
                [lp("/experience"), ui.nav.experience],
                [lp("/about"), ui.nav.about],
                [lp("/book"), ui.nav.contact],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="link-underline text-ivory/75 hover:text-ivory">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-2.5 text-sm lg:col-span-5">
            {domains.map((d) => (
              <li key={d.slug}>
                <Link to={lp(`/services/${d.slug}`)} className="link-underline text-ivory/75 hover:text-ivory">{t(d.name)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between md:pr-24">
          <p>© {year} {site.name}. {ui.footer.rights}</p>
          <div className="flex items-center gap-4">
            {[{ label: "LinkedIn", href: settings.linkedin }, ...settings.social].filter((s) => s.href).map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ivory">
                {s.label === "LinkedIn" ? <Linkedin size={16} aria-hidden="true" /> : <Link2 size={16} aria-hidden="true" />} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
