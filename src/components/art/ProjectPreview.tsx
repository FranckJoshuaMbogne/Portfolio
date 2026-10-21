import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * A browser-window frame showing the project's screenshot (project.image),
 * its video (project.video), or — until those exist — a generated preview
 * in the project's own colours.
 */
export function ProjectPreview({ project, className, parallax = true, priority = false }: { project: Project; className?: string; parallax?: boolean; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const L = project.look;
  const isBrand = project.kind !== "website";

  return (
    <div ref={ref} className={cn("overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft", className)}>
      {!isBrand && (
        <div className="flex items-center gap-2 border-b border-ink/10 bg-ivory-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5675e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e8b84b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5fbf73]" />
          <span className="ml-3 truncate rounded-full bg-ink/[0.06] px-3 py-1 text-[0.7rem] text-ink-muted">{project.urlLabel ?? project.name}</span>
        </div>
      )}
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: L.bg }}>
        <motion.div style={parallax && !reduce && (project.image || project.video) ? { y, scale: 1.12 } : undefined} className="absolute inset-0">
          {project.video ? (
            <video src={project.video} poster={project.image} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          ) : project.image ? (
            <img src={project.image} alt="" loading={priority ? "eager" : "lazy"} className="h-full w-full object-cover" />
          ) : (
            <GeneratedLook project={project} />
          )}
        </motion.div>
      </div>
    </div>
  );
}

function GeneratedLook({ project }: { project: Project }) {
  const L = project.look;
  const serif = L.font === "serif";
  if (project.kind !== "website") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between p-[7%]" style={{ color: L.fg }}>
        <svg aria-hidden="true" viewBox="0 0 400 250" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="320" cy="60" r="120" fill="none" stroke={L.accent} strokeOpacity="0.5" />
          <circle cx="320" cy="60" r="80" fill="none" stroke={L.accent} strokeOpacity="0.35" strokeDasharray="3 6" className="anim-spin-slow" />
          <circle cx="320" cy="60" r="28" fill={L.accent} fillOpacity="0.9" />
          <path d="M0 210 Q100 170 200 205 T400 190" fill="none" stroke={L.fg} strokeOpacity="0.15" />
        </svg>
        <span className="relative text-[0.65rem] font-semibold uppercase tracking-[0.3em] opacity-70">{L.sub}</span>
        <div className="relative">
          <p className={cn("text-[clamp(1.2rem,3.2vw,2.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]", serif && "font-accent font-medium italic")}>{L.headline}</p>
          <div className="mt-4 flex gap-2">
            {[L.bg, L.accent, L.fg].map((c, i) => (
              <span key={i} className="h-5 w-5 rounded-full border border-white/30" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full w-full flex-col" style={{ color: L.fg }}>
      <div className="flex items-center justify-between px-[6%] py-[3.5%] text-[0.55rem] font-semibold uppercase tracking-[0.2em] sm:text-[0.62rem]">
        <span style={{ color: L.accent }}>{project.name}</span>
        <span className="hidden gap-4 opacity-70 xs:flex">
          <span>Shop</span>
          <span>About</span>
          <span>Contact</span>
        </span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-[4%] px-[6%] pb-[6%]">
        <div className="col-span-3 flex flex-col justify-center">
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.25em] opacity-70 sm:text-[0.62rem]">{L.sub}</span>
          <p className={cn("mt-2 text-[clamp(1.05rem,2.7vw,2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]", serif && "font-accent font-medium italic")}>{L.headline}</p>
          <span className="mt-4 inline-flex w-fit rounded-full px-3 py-1.5 text-[0.55rem] font-bold uppercase tracking-[0.15em] sm:text-[0.62rem]" style={{ background: L.accent, color: L.bg }}>
            Book now
          </span>
        </div>
        <div className="col-span-2 grid grid-rows-2 gap-[8%]">
          <div className="rounded-lg" style={{ background: `linear-gradient(135deg, ${L.accent}, ${L.accent}33)` }} />
          <div className="grid grid-cols-2 gap-[8%]">
            <div className="rounded-lg" style={{ background: `${L.fg}22` }} />
            <div className="rounded-lg" style={{ background: `${L.accent}55` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
