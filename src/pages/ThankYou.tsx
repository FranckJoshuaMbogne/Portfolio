import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Seo } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { site } from "@/config/site";

export default function ThankYou() {
  const { ui, lp } = useI18n();
  return (
    <>
      <Seo title={ui.thanks.title} description={ui.thanks.body} path="/thank-you" noindex />
      <section className="on-dark flex min-h-[90svh] items-center bg-deep pb-20 pt-36 text-ivory">
        <div className="container-site max-w-3xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold text-deep anim-fade-up">
            <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h1 className="anim-fade-up mt-8 font-display text-display-lg font-extrabold" style={{ animationDelay: "0.1s" }}>{ui.thanks.title}</h1>
          <p className="anim-fade-up mt-5 text-lead text-ivory/75" style={{ animationDelay: "0.2s" }}>{ui.thanks.body}</p>
          <p className="mt-10 text-sm text-ivory/60">{ui.thanks.faster}</p>
          <div className="mt-4 flex flex-col justify-center gap-3 xs:flex-row">
            <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ivory px-7 font-semibold text-deep hover:bg-gold">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp
            </a>
            <Link to={lp("/")} className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-ivory/30 px-7 font-semibold hover:border-ivory">{ui.thanks.home}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
