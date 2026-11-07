import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type Theme = "light" | "dark";

const systemTheme = (): Theme =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", systemTheme());
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return { theme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") };
}
