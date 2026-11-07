import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useLang } from "../i18n";
import { profile } from "../data/profile";
import { NAV_IDS } from "../nav";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{t.hero.role}</p>
          <div className="mt-4 flex gap-2">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} aria-hidden /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} aria-hidden /></a>
          </div>
        </div>
        <nav aria-label={t.footer.nav}>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {NAV_IDS.map((id) => (
              <li key={id}><a className="text-muted hover:text-accent" href={`#${id}`}>{t.nav[id]}</a></li>
            ))}
          </ul>
        </nav>
        <a href="#home" className="btn btn-outline self-start"><ArrowUp size={16} aria-hidden />{t.ui.toTop}</a>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted md:px-8">© {new Date().getFullYear()} {profile.name}. {t.footer.rights}</p>
    </footer>
  );
}
