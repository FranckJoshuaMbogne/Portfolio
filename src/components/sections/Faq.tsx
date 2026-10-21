import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function Faq() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-title" className="bg-ivory py-section">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader id="faq-title" eyebrow="FAQ" title={lang === "fr" ? <>Questions <em>fréquentes.</em></> : <>Common <em>questions.</em></>} />
        </div>
        <ul className="border-t border-ink/15 lg:col-span-8">
          {faqs.map((f, i) => (
            <li key={i} className="border-b border-ink/15">
              <h3>
                <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink">
                  {t(f.q)}
                  <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-transform duration-300", open === i && "rotate-45 border-gold bg-gold")}>
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </button>
              </h3>
              <div id={`faq-${i}`} hidden={open !== i} className="pb-6 pr-12 text-ink-muted">
                {t(f.a)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
