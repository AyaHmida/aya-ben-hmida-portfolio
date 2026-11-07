import { GraduationCap } from "lucide-react";
import Section from "../components/Section";
import { useLang } from "../i18n";
import { education } from "../data/education";

export default function Education() {
  const { t, pick } = useLang();
  return (
    <Section id="education" title={t.education.title} intro={t.education.intro}>
      <ol className="relative space-y-8 border-l border-line pl-8">
        {education.map((e) => (
          <li key={e.id} className="relative">
            <span aria-hidden className="absolute -left-[45px] top-0 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg text-accent">
              <GraduationCap size={14} />
            </span>
            <p className="text-sm text-muted">{pick(e.period)}</p>
            <h3 className="mt-1 font-display text-lg font-semibold">{pick(e.degree)}</h3>
            {e.institution && <p className="font-medium text-accent">{e.institution}</p>}
            {e.specialization && <p className="mt-1 text-sm text-muted">{t.education.specialization} : {pick(e.specialization)}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
