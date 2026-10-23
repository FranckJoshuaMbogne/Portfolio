import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Arrow } from "@/components/ui/Button";
import { useContent } from "@/content/ContentProvider";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

/**
 * A pill button pulled toward the cursor that fills with gold on hover.
 * Internal paths ("/book") use the router; full URLs open in a new tab.
 */
export function MagneticButton({ to, children, className, dark = false }: { to: string; children: ReactNode; className?: string; dark?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const cls = cn(
    "group/btn relative inline-flex min-h-[56px] items-center justify-center gap-3 overflow-hidden rounded-full px-8 text-base font-semibold",
    dark ? "bg-forest text-ivory" : "bg-ivory text-deep",
    className
  );
  const inner = (
    <>
      <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-gold transition-transform duration-500 ease-editorial group-hover/btn:translate-y-0" />
      <span className="relative">{children}</span>
      <Arrow className="relative" />
    </>
  );

  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return (
      <motion.a ref={ref} href={to} target={to.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className={cls}>
        {inner}
      </motion.a>
    );
  }
  return (
    <MotionLink ref={ref} to={to} onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className={cls}>
      {inner}
    </MotionLink>
  );
}

/** The main call-to-action button (label and link set in /admin → Settings). */
export function PrimaryCta({ className, dark }: { className?: string; dark?: boolean }) {
  const { settings } = useContent();
  const { t, lp } = useI18n();
  const href = settings.ctaHref || "/book";
  return (
    <MagneticButton to={href.startsWith("/") ? lp(href) : href} className={className} dark={dark}>
      {t(settings.ctaLabel)}
    </MagneticButton>
  );
}
