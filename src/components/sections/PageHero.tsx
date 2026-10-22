import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MaskText } from "@/components/animations/MaskText";
import { useI18n } from "@/i18n";

export function PageHero({ eyebrow, lines, intro, children, crumbs }: { eyebrow: string; lines: ReactNode[]; intro?: string; children?: ReactNode; crumbs?: { label: string; to: string }[] }) {
  const { ui, lp } = useI18n();
  return (
    <section className="on-dark relative isolate overflow-hidden bg-deep pb-20 pt-36 text-ivory sm:pb-24 sm:pt-44">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(30,82,58,0.32),transparent_60%)]" />
      <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full border border-gold/20" />
      <div aria-hidden="true" className="anim-spin-slow absolute -right-10 -top-10 -z-10 h-[340px] w-[340px] rounded-full border border-dashed border-ivory/10" />
      <div className="container-site">
        <nav aria-label="Breadcrumb" className="anim-fade-up text-sm text-ivory/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to={lp("/")} className="hover:text-ivory">{ui.nav.home}</Link></li>
            {(crumbs ?? []).map((c) => (
              <li key={c.to} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link to={c.to} className="hover:text-ivory">{c.label}</Link>
              </li>
            ))}
          </ol>
        </nav>
        <p className="anim-fade-up eyebrow mt-8 flex items-center gap-3 text-gold-light" style={{ animationDelay: "0.05s" }}>
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl font-display text-display-xl font-extrabold">
          <MaskText lines={lines} delay={0.1} />
        </h1>
        {intro && (
          <p className="anim-fade-up mt-7 max-w-2xl text-lead text-ivory/75" style={{ animationDelay: "0.4s" }}>
            {intro}
          </p>
        )}
        {children && <div className="anim-fade-up mt-10" style={{ animationDelay: "0.5s" }}>{children}</div>}
      </div>
    </section>
  );
}
