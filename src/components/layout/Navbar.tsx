import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LangSwitch } from "./LangSwitch";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const { ui, lp } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const nav = [
    { to: lp("/work"), label: ui.nav.work },
    { to: lp("/services"), label: ui.nav.services },
    { to: lp("/experience"), label: ui.nav.experience },
    { to: lp("/about"), label: ui.nav.about },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const all = [toggleRef.current!, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>("a,button"))];
        const idx = all.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && idx <= 0) {
          e.preventDefault();
          all[all.length - 1].focus();
        } else if (!e.shiftKey && idx === all.length - 1) {
          e.preventDefault();
          all[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300 ease-editorial",
        solid ? "border-b border-ink/10 bg-ivory/90 text-ink backdrop-blur-md" : "border-b border-transparent text-ivory"
      )}
    >
      <div className={cn("container-site flex items-center justify-between transition-[height] duration-300", solid ? "h-16" : "h-[72px] md:h-20")}>
        <Link to={lp("/")} aria-label={`${site.name} — ${ui.nav.home}`} className="relative z-10 -ml-1 rounded-full p-1">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-soft px-2 py-1.5">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => cn("relative block rounded-full px-4 py-2 text-[0.93rem] font-medium transition-opacity", isActive ? "opacity-100" : "opacity-75 hover:opacity-100")}>
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span layoutId="nav-pill" className={cn("absolute inset-0 -z-10 rounded-full", solid ? "bg-forest/10" : "bg-ivory/10")} transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                      )}
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden sm:flex" />
          <ButtonLink to={lp("/book")} variant={solid ? "primary" : "light"} className="hidden min-h-[42px] px-5 text-sm md:inline-flex">
            {ui.cta.bookShort}
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.menuClose : ui.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-6">
              <span className={cn("absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-300", open && "translate-y-[5px] rotate-45")} />
              <span className={cn("absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-300", open && "-translate-y-[5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="on-dark fixed inset-0 -z-0 flex flex-col overflow-y-auto bg-deep px-gutter pb-10 pt-28 text-ivory lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {[{ to: lp("/"), label: ui.nav.home }, ...nav, { to: lp("/book"), label: ui.nav.contact }].map((item, i) => (
                  <motion.li key={item.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) => cn("flex items-baseline gap-4 py-2.5 text-[2rem] font-bold leading-tight tracking-[-0.03em]", isActive ? "text-ivory" : "text-ivory/65")}
                    >
                      <span className="text-xs font-semibold tabular-nums text-gold-light">0{i + 1}</span>
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto space-y-6 pt-12">
              <LangSwitch className="w-fit" />
              <ButtonLink to={lp("/book")} variant="light" size="lg" className="w-full">
                {ui.cta.book}
              </ButtonLink>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/75">
                <a href={site.contact.phoneHref} className="py-1">{site.contact.phoneDisplay}</a>
                <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="py-1">WhatsApp</a>
                <a href={`mailto:${site.contact.email}`} className="py-1">{site.contact.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
