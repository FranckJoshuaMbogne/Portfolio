import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Infinite horizontal loop. Children are rendered twice for a seamless join. */
export function Marquee({ children, className, reverse = false }: { children: ReactNode; className?: string; reverse?: boolean }) {
  return (
    <div className={cn("relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]", className)}>
      <div className="anim-marquee flex w-max shrink-0" style={reverse ? { animationDirection: "reverse" } : undefined}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
