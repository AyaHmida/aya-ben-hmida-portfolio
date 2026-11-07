import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "../i18n";
import { profile } from "../data/profile";

const rise = (i: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.08 * i } });

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-12 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p {...rise(0)} className="text-lg text-muted">{t.hero.greeting}</motion.p>
          <motion.h1 {...rise(1)} id="hero-title" className="mt-1 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p {...rise(2)} className="mt-4 font-display text-xl font-medium text-accent md:text-2xl">{t.hero.role}</motion.p>
          <motion.p {...rise(3)} className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{t.hero.intro}</motion.p>

          <motion.div {...rise(4)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary"><ArrowDown size={16} aria-hidden />{t.hero.viewProjects}</a>
            <div role="group" aria-label={t.hero.downloadCv} className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1 pl-4 text-sm font-semibold">
              <Download size={16} aria-hidden className="mr-1 text-accent" />
              <span className="mr-2">{t.hero.downloadCv}</span>
              <a href={profile.cv.fr} download lang="fr" className="rounded-full bg-bg px-3 py-1.5 hover:text-accent">{t.hero.cvFr}</a>
              <a href={profile.cv.en} download lang="en" className="rounded-full bg-bg px-3 py-1.5 hover:text-accent">{t.hero.cvEn}</a>
            </div>
          </motion.div>

          <motion.div {...rise(5)} className="mt-6 flex gap-2">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} aria-hidden /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} aria-hidden /></a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={profile.email}><Mail size={18} aria-hidden /></a>
          </motion.div>
        </div>

        <motion.div {...rise(2)} className="relative mx-auto w-full max-w-sm lg:col-span-5">
          <div aria-hidden className="absolute -right-4 top-6 h-full w-full rounded-t-full border border-accent/50" />
          <div className="relative overflow-hidden rounded-t-full border border-line bg-surface">
            <img src={profile.photo} alt={t.hero.photoAlt} width={720} height={720} fetchPriority="high" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
        </motion.div>
      </div>

      {/* Sensor-trace line: drawn once on load, purely decorative. */}
      <svg aria-hidden viewBox="0 0 1200 40" preserveAspectRatio="none" className="h-8 w-full text-accent">
        <motion.path
          d="M0 20 H380 L400 20 L412 6 L426 34 L440 20 H760 L776 20 L786 10 L798 30 L808 20 H1200"
          fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    </section>
  );
}
