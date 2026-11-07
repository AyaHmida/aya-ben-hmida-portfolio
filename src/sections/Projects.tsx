import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { useLang } from "../i18n";
import { projects } from "../data/projects";
import type { Category } from "../types";

type Filter = "all" | Category;
const FILTERS: Filter[] = ["all", "web", "mobile", "iot", "other"];

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <Section id="projects" title={t.projects.title} intro={t.projects.intro} wide>
      <div role="group" aria-label={t.projects.filtersLabel} className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${filter === f ? "border-accent bg-accent text-onaccent" : "border-line bg-surface text-muted hover:border-accent hover:text-ink"}`}
          >
            {t.projects.filters[f]}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
        </AnimatePresence>
      </motion.div>
      <p role="status" className={visible.length ? "sr-only" : "rounded-xl border border-dashed border-line p-8 text-center text-muted"}>
        {visible.length ? "" : t.projects.empty}
      </p>
    </Section>
  );
}
