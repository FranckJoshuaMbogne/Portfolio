import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { stripLang, useI18n } from "@/i18n";

export function StickyCta() {
  const { ui, lp } = useI18n();
  const { pathname } = useLocation();
  const base = stripLang(pathname);
  if (base === "/book" || base === "/thank-you") return null;
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-full border border-ivory/10 bg-deep/95 p-1.5 shadow-soft backdrop-blur md:hidden">
        <Link to={lp("/book")} className="flex h-11 flex-1 items-center justify-center rounded-full bg-gold px-4 text-sm font-semibold text-deep">
          {ui.cta.bookShort}
        </Link>
        <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory">
          <MessageCircle size={20} aria-hidden="true" />
        </a>
        <a href={site.contact.phoneHref} aria-label={ui.cta.call} className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory">
          <Phone size={19} aria-hidden="true" />
        </a>
      </div>
      {/* Desktop floating WhatsApp */}
      <a
        href={site.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.cta.whatsapp}
        className="group fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-3 rounded-full border border-gold/40 bg-deep pl-4 pr-4 text-ivory shadow-soft transition-all duration-300 hover:border-gold hover:pr-6 md:flex"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="anim-pulse-ring absolute inset-0 rounded-full bg-gold/60" />
          <MessageCircle size={22} aria-hidden="true" className="relative" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width] duration-500 group-hover:max-w-[12rem]">{ui.cta.whatsapp}</span>
      </a>
    </>
  );
}
