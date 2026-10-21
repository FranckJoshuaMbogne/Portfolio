import { useLocation } from "react-router-dom";
import { ui, type UiStrings } from "./ui";

export type Lang = "en" | "fr";
/** A translated string. */
export type L = { en: string; fr: string };
export const langs: Lang[] = ["en", "fr"];

export function langFromPath(pathname: string): Lang {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** "/fr/work" → "/work" */
export function stripLang(pathname: string) {
  if (pathname === "/fr") return "/";
  return pathname.startsWith("/fr/") ? pathname.slice(3) : pathname;
}

/** ("fr", "/work") → "/fr/work" */
export function localePath(lang: Lang, path: string) {
  if (lang === "en") return path;
  return path === "/" ? "/fr" : `/fr${path}`;
}

export function tr(x: L | string, lang: Lang) {
  return typeof x === "string" ? x : x[lang];
}

export function useI18n() {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  return {
    lang,
    t: (x: L | string) => tr(x, lang),
    lp: (path: string) => localePath(lang, path),
    ui: ui[lang] as UiStrings,
    /** Same page in the other language. */
    switchTo: (target: Lang) => localePath(target, stripLang(pathname)),
  };
}

const fmt = {
  en: new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }),
  fr: new Intl.DateTimeFormat("fr-FR", { month: "short", year: "numeric", timeZone: "UTC" }),
};

/** "2025-07" → "Jul 2025" / "juil. 2025" */
export function formatMonth(ym: string | null, lang: Lang) {
  if (!ym) return lang === "fr" ? "Aujourd'hui" : "Present";
  const d = new Date(`${ym}-01T00:00:00Z`);
  return fmt[lang].format(d);
}
