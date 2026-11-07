import { useLang } from "../i18n";
import type { Lang } from "../types";

const options: { code: Lang; label: string; name: string }[] = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
];

export default function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.ui.language} className="inline-flex h-10 items-center rounded-full border border-line bg-surface p-1 text-xs font-semibold">
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          lang={o.code}
          title={o.name}
          aria-pressed={lang === o.code}
          onClick={() => setLang(o.code)}
          className={`h-8 rounded-full px-3 transition-colors ${lang === o.code ? "bg-accent text-onaccent" : "text-muted hover:text-ink"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
