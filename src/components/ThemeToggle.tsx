import { Moon, Sun } from "lucide-react";
import { useLang } from "../i18n";

export default function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  const { t } = useLang();
  return (
    <button type="button" className="icon-btn" onClick={onToggle} aria-label={theme === "dark" ? t.ui.toLight : t.ui.toDark}>
      {theme === "dark" ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}
