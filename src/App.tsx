import { MotionConfig } from "framer-motion";
import { LangProvider, useLang } from "./i18n";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function Page() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">{t.ui.skip}</a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LangProvider><Page /></LangProvider>
    </MotionConfig>
  );
}
