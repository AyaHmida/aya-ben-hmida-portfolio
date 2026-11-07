import { motion } from "framer-motion";
import { Droplets, ExternalLink, Factory, Flame, Github } from "lucide-react";
import type { Project } from "../types";
import { useLang } from "../i18n";
import Chip from "./Chip";

const icons = { flame: Flame, droplets: Droplets, factory: Factory };

export default function ProjectCard({ project }: { project: Project }) {
  const { t, pick } = useLang();
  const Icon = icons[project.icon];
  const name = pick(project.name);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/60"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-accent/10">
        {project.image ? (
          <img src={project.image} alt={name} loading="lazy" width={640} height={360} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div aria-hidden className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgb(var(--accent)/0.28),transparent_60%)]">
            <Icon size={56} strokeWidth={1.25} className="text-accent transition-transform duration-500 group-hover:scale-110" />
          </div>
        )}
        <ul className="absolute left-3 top-3 flex gap-1.5">
          {project.categories.map((c) => (
            <li key={c} className="rounded-md bg-bg/90 px-2 py-0.5 text-xs font-semibold text-ink backdrop-blur">{t.projects.categories[c]}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-semibold">{name}</h3>
          {project.period && <span className="shrink-0 text-xs text-muted">{pick(project.period)}</span>}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{pick(project.description)}</p>
        <h4 className="mt-5 text-sm font-semibold">{t.projects.features}</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">
          {pick(project.features).map((f) => <li key={f}>{f}</li>)}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-1.5">{project.tech.map((x) => <Chip key={x}>{x}</Chip>)}</ul>
        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          <a className="btn btn-outline" href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden />{t.projects.github}<span className="sr-only"> – {name}</span>
          </a>
          {project.demo && (
            <a className="btn btn-primary" href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} aria-hidden />{t.projects.demo}<span className="sr-only"> – {name}</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
