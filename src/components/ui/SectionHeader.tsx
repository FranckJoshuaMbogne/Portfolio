import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", light ? "text-gold-light" : "text-gold-dark", className)}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  light,
  align = "left",
  id,
  className,
  action,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  id?: string;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between", align === "center" && "items-center text-center lg:flex-col lg:items-center", className)}>
      <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && <Eyebrow light={light} className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
        <h2 id={id} className={cn("mt-5 font-display text-display-lg font-extrabold", light ? "text-ivory" : "text-ink")}>
          {title}
        </h2>
        {intro && <p className={cn("mt-5 max-w-2xl text-lead", light ? "text-ivory/75" : "text-ink-muted", align === "center" && "mx-auto")}>{intro}</p>}
      </Reveal>
      {action && <Reveal delay={0.1} className="shrink-0">{action}</Reveal>}
    </div>
  );
}
