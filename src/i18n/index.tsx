import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import fr, { type Dict } from "./fr";
import en from "./en";
import type { L10n, Lang } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

const dicts: Record<Lang, Dict> = { fr, en };

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: Dict; pick: <T>(v: L10n<T>) => T }
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useLocalStorage<Lang>("lang", "fr");
  const t = dicts[lang] ?? fr;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t, pick: (v) => v[lang] }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLang must be used inside LangProvider");
  return c;
}
