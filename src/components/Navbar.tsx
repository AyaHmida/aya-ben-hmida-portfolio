import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../i18n";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "./LangSwitch";
import { NAV_IDS } from "../nav";

export default function Navbar({ theme, onToggleTheme }: { theme: "light" | "dark"; onToggleTheme: () => void }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  const link = (id: (typeof NAV_IDS)[number], mobile = false) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? "true" : undefined}
      className={
        mobile
          ? `block rounded-lg px-3 py-3 text-base font-medium ${active === id ? "bg-accent/10 text-accent" : "text-ink"}`
          : `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active === id ? "bg-accent/10 text-accent" : "text-muted hover:text-ink"}`
      }
    >
      {t.nav[id]}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">Aya Ben Hmida</a>
        <nav aria-label={t.ui.mainNav} className="hidden items-center gap-1 lg:flex">{NAV_IDS.map((id) => link(id))}</nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button type="button" className="icon-btn lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.ui.closeMenu : t.ui.openMenu} onClick={() => setOpen(!open)}>
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t.ui.mainNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-1 px-5 py-3">{NAV_IDS.map((id) => link(id, true))}</div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
