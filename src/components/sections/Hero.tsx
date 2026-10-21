import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { MaskText } from "@/components/animations/MaskText";
import { MagneticButton } from "@/components/animations/Magnetic";
import { Portrait } from "@/components/art/Portrait";
import { profile } from "@/data/profile";
import { site } from "@/config/site";
import { useI18n } from "@/i18n";

export function Hero() {
  const { t, lang, lp, ui } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yArt = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Cursor spotlight
  const sx = useMotionValue(70);
  const sy = useMotionValue(30);
  const bg = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(44,106,79,0.55), transparent 60%)`;

  const lines = profile.heroLines[lang];

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        sx.set(((e.clientX - r.left) / r.width) * 100);
        sy.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="on-dark relative isolate overflow-hidden bg-deep text-ivory"
    >
      <motion.div aria-hidden="true" style={{ background: bg }} className="absolute inset-0 -z-10" />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay" />
      <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full opacity-[0.07]">
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M64 0H0V64" fill="none" stroke="#F1F3EA" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container-site grid items-center gap-16 pb-24 pt-32 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <motion.div style={reduce ? undefined : { y: yText, opacity: fade }} className="lg:col-span-7">
          <p className="anim-fade-up flex flex-wrap items-center gap-3 text-sm text-ivory/80" style={{ animationDelay: "0.05s" }}>
            <span className="flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/[0.04] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="anim-pulse-ring absolute inset-0 rounded-full bg-[#5fbf73]" />
                <span className="relative h-2 w-2 rounded-full bg-[#5fbf73]" />
              </span>
              {ui.footer.available}
            </span>
            <span className="font-semibold">{t(profile.title)}</span>
          </p>

          <h1 id="hero-title" className="mt-7 font-display font-extrabold leading-[1.0] tracking-[-0.04em]" style={{ fontSize: "clamp(2.6rem, 6.4vw, 6rem)" }}>
            <MaskText
              lines={[lines[0], lines[1], <span key="l" className="font-accent font-medium italic text-gold-light">{lines[2]}</span>]}
              delay={0.1}
              step={0.12}
            />
          </h1>

          <p className="anim-fade-up mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-gold-light" style={{ animationDelay: "0.45s" }}>
            {t(profile.heroAccent)}
          </p>
          <p className="anim-fade-up mt-4 max-w-xl text-lead text-ivory/75" style={{ animationDelay: "0.55s" }}>
            {t(profile.heroIntro)}
          </p>

          <div className="anim-fade-up mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center" style={{ animationDelay: "0.65s" }}>
            <MagneticButton to={lp("/book")}>{ui.cta.book}</MagneticButton>
            <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-ivory/25 px-7 font-semibold transition-colors hover:border-ivory hover:bg-ivory/[0.06]">
              <MessageCircle size={19} aria-hidden="true" className="text-gold-light" /> WhatsApp
            </a>
            <a href={site.contact.phoneHref} className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full px-4 font-semibold text-ivory/85 hover:text-ivory">
              <Phone size={18} aria-hidden="true" className="text-gold-light" /> {site.contact.phoneDisplay}
            </a>
          </div>
        </motion.div>

        <motion.div style={reduce ? undefined : { y: yArt }} className="lg:col-span-5">
          <Portrait />
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-ivory/15 lg:block">
        <span className="anim-scroll-cue absolute inset-x-0 top-0 h-1/3 bg-gold-light" />
      </div>
    </section>
  );
}
