import { Cpu, Code2, Database, Layout, Server, Smartphone, Workflow, Wrench } from "lucide-react";
import Section from "../components/Section";
import Chip from "../components/Chip";
import { useLang } from "../i18n";
import { skillGroups } from "../data/skills";

const icons = { layout: Layout, server: Server, smartphone: Smartphone, code: Code2, database: Database, cpu: Cpu, wrench: Wrench, workflow: Workflow };

export default function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" title={t.skills.title} intro={t.skills.intro}>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => {
          const Icon = icons[g.icon];
          return (
            <article key={g.id} className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
              <h3 className="flex items-center gap-2.5 font-display text-base font-semibold">
                <Icon size={18} aria-hidden className="text-accent" />{t.skills.groups[g.id]}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">{g.items.map((i) => <Chip key={i}>{i}</Chip>)}</ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
