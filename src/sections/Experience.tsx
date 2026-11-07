import { ExternalLink, Github } from "lucide-react";
import Section from "../components/Section";
import Chip from "../components/Chip";
import { useLang } from "../i18n";
import { experiences } from "../data/experience";

export default function Experience() {
  const { t, pick } = useLang();
  return (
    <Section id="experience" title={t.experience.title} intro={t.experience.intro}>
      <ol className="relative space-y-10 border-l border-line pl-8">
        {experiences.map((e) => (
          <li key={e.id} className="relative">
            <span aria-hidden className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="text-sm text-muted">{pick(e.period)}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{pick(e.role)}</h3>
            <p className="mt-1 font-medium text-accent">{pick(e.company)}</p>
            <h4 className="mt-4 text-sm font-semibold">{t.experience.tasks}</h4>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
              {pick(e.tasks).map((x) => <li key={x}>{x}</li>)}
            </ul>
            {e.outcome && <p className="mt-3 text-sm font-medium">{pick(e.outcome)}</p>}
            <h4 className="sr-only">{t.experience.tech}</h4>
            <ul className="mt-4 flex flex-wrap gap-1.5">{e.tech.map((x) => <Chip key={x}>{x}</Chip>)}</ul>
            {(e.github || e.companyUrl) && (
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                {e.github && <a className="inline-flex items-center gap-1.5 hover:text-accent" href={e.github} target="_blank" rel="noopener noreferrer"><Github size={15} aria-hidden />{t.experience.sourceCode}</a>}
                {e.companyUrl && <a className="inline-flex items-center gap-1.5 hover:text-accent" href={e.companyUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} aria-hidden />{t.experience.visitSite}</a>}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
