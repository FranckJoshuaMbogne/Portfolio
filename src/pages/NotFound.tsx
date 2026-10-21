import { Seo } from "@/lib/seo";
import { useI18n } from "@/i18n";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  const { ui, lp } = useI18n();
  return (
    <>
      <Seo title={ui.notFound.title} description={ui.notFound.body} path="/404" noindex status={404} />
      <section className="on-dark flex min-h-[90svh] items-center bg-deep pb-20 pt-36 text-ivory">
        <div className="container-site">
          <p className="text-gradient-gold font-display text-[clamp(6rem,20vw,14rem)] font-extrabold leading-none tracking-[-0.06em]">404</p>
          <h1 className="mt-4 font-display text-display-md font-extrabold">{ui.notFound.title}</h1>
          <p className="mt-3 text-ivory/70">{ui.notFound.body}</p>
          <ButtonLink to={lp("/")} variant="light" size="lg" className="mt-8">{ui.notFound.home}</ButtonLink>
        </div>
      </section>
    </>
  );
}
