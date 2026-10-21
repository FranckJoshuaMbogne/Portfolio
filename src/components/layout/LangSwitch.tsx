import { Link } from "react-router-dom";
import { langs, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function LangSwitch({ className }: { className?: string }) {
  const { lang, switchTo, ui } = useI18n();
  return (
    <div role="group" aria-label={ui.language} className={cn("flex items-center rounded-full border border-soft p-0.5 text-xs font-semibold", className)}>
      {langs.map((l) => (
        <Link
          key={l}
          to={switchTo(l)}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "true" : undefined}
          className={cn("rounded-full px-2.5 py-1.5 uppercase transition-colors", l === lang ? "bg-gold text-deep" : "opacity-70 hover:opacity-100")}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
