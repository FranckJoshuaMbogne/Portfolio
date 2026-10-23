import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { useContent, useMedia } from "@/content/ContentProvider";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

const chips = ["Google Ads", "Meta Ads", "Shopify", "SEO", "Power BI", "Python", "CRM", "AI"];

/**
 * Hero portrait. Uses your photo when one is set in /admin → Settings;
 * otherwise shows an animated monogram composition.
 */
export function Portrait({ className }: { className?: string }) {
  const { lang } = useI18n();
  const { settings } = useContent();
  const portrait = useMedia(settings.portrait);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <div className={cn("relative mx-auto aspect-[4/5] w-full max-w-[460px] [perspective:1200px]", className)} onMouseMove={onMove} onMouseLeave={() => (mx.set(0), my.set(0))}>
      {/* orbit rings */}
      <svg aria-hidden="true" viewBox="0 0 400 500" className="absolute -inset-[8%] h-[116%] w-[116%] overflow-visible">
        <ellipse cx="200" cy="250" rx="190" ry="235" fill="none" stroke="#B89B62" strokeOpacity="0.35" />
        <g className="anim-spin-slow" style={{ animationDuration: "60s" }}>
          <ellipse cx="200" cy="250" rx="175" ry="220" fill="none" stroke="#F1F3EA" strokeOpacity="0.14" strokeDasharray="2 10" />
          <circle cx="375" cy="250" r="4" fill="#D2BC8E" />
        </g>
      </svg>

      <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry }} className="anim-fade-in relative h-full w-full [transform-style:preserve-3d]">
        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[2.5rem] border border-gold/40 bg-gradient-to-b from-[#123826] via-[#09160f] to-[#040605] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
          {portrait ? (
            <img src={portrait} alt={site.name} className="h-full w-full object-cover" fetchPriority="high" />
          ) : (
            <div className="relative flex h-full w-full items-end justify-center">
              <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
              <div aria-hidden="true" className="absolute left-1/2 top-[18%] h-[46%] w-[62%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(210,188,142,0.45),transparent_65%)] blur-2xl" />
              <span aria-hidden="true" className="text-gradient-gold absolute top-[22%] font-display text-[clamp(7rem,15vw,11rem)] font-extrabold leading-none tracking-[-0.08em]">
                {site.monogram}
              </span>
              <div className="relative mb-[17%] text-center text-ivory">
                <p className="text-lg font-bold tracking-[-0.02em]">{site.name}</p>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold-light">{lang === "fr" ? "Ingénieur · Stratège" : "Engineer · Strategist"}</p>
              </div>
            </div>
          )}
        </div>

        {/* floating cards */}
        <div style={{ transform: "translateZ(60px)" }} className="anim-float absolute -left-[8%] top-[14%] rounded-2xl border border-ivory/15 bg-deep/80 px-4 py-3 text-ivory shadow-soft backdrop-blur-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-light">{lang === "fr" ? "Basé à" : "Based in"}</p>
          <p className="mt-1 text-sm font-semibold">Hyderabad · Douala</p>
        </div>
        <div style={{ transform: "translateZ(80px)", animationDelay: "1.5s" }} className="anim-float absolute -right-[6%] bottom-[22%] rounded-2xl bg-ivory px-4 py-3 text-deep shadow-soft">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">CAC · CVR · LTV</p>
          <p className="mt-1 text-sm font-bold">{lang === "fr" ? "Un seul système" : "One system"}</p>
        </div>
      </motion.div>

      {/* skill chips */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-8 flex flex-wrap justify-center gap-2">
        {chips.map((c, i) => (
          <span key={c} className="anim-fade-up rounded-full border border-ivory/15 bg-deep/70 px-3 py-1.5 text-[0.7rem] font-semibold text-ivory/85 backdrop-blur" style={{ animationDelay: `${0.8 + i * 0.07}s` }}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
