import { site } from "@/config/site";
import { Reveal } from "@/components/animations/Reveal";
import { useI18n } from "@/i18n";

/** Shown only when site.media.showreel is set (src/config/site.ts). */
export function Showreel() {
  const { lang } = useI18n();
  if (!site.media.showreel) return null;
  return (
    <section aria-label="Showreel" className="bg-deep py-section-sm">
      <div className="container-site">
        <Reveal className="overflow-hidden rounded-[2rem] border border-ivory/10">
          <video
            src={site.media.showreel}
            poster={site.media.showreelPoster ?? undefined}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black object-cover"
            aria-label={lang === "fr" ? "Vidéo de présentation" : "Showreel video"}
          />
        </Reveal>
      </div>
    </section>
  );
}
