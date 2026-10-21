import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Monogram + name. Edit the letters in src/config/site.ts (monogram). */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 font-sans text-[0.95rem] font-extrabold tracking-[-0.04em]">
        {site.monogram}
        <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold" />
      </span>
      <span className="hidden flex-col leading-none xs:flex">
        <span className="text-[0.98rem] font-bold tracking-[-0.02em]">{site.shortName}</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] opacity-70">Mbogne</span>
      </span>
    </span>
  );
}
