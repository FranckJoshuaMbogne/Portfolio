import { Reveal } from "@/components/animations/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { useContent, useMedia } from "@/content/ContentProvider";
import { useI18n } from "@/i18n";

/** Shown only when a showreel link is set in /admin → Settings. */
export function Showreel() {
  const { lang } = useI18n();
  const { settings } = useContent();
  const poster = useMedia(settings.showreelPoster);
  if (!settings.showreel) return null;
  return (
    <section aria-label="Showreel" className="bg-deep py-section-sm">
      <div className="container-site">
        <Reveal className="overflow-hidden rounded-[2rem] border border-ivory/10">
          <VideoEmbed src={settings.showreel} poster={poster} title={lang === "fr" ? "Vidéo de présentation" : "Showreel video"} />
        </Reveal>
      </div>
    </section>
  );
}
