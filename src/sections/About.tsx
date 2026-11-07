import { MapPin } from "lucide-react";
import Section from "../components/Section";
import { useLang } from "../i18n";
import { profile } from "../data/profile";

export default function About() {
  const { t, pick, lang } = useLang();
  return (
    <Section id="about" title={t.about.title}>
      <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
        {t.about.p.map((p) => <p key={p}>{p}</p>)}
      </div>
      <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold">{t.about.location}</dt>
          <dd className="mt-2 flex items-center gap-2 text-muted"><MapPin size={16} aria-hidden className="text-accent" />{pick(profile.location)}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">{t.about.languages}</dt>
          <dd className="mt-2 space-y-1 text-muted">
            {profile.languages.map((l) => (
              <p key={l.name.en}><span className="font-medium text-ink">{l.name[lang]}</span> : {l.level[lang]}</p>
            ))}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-semibold">{t.about.qualities}</dt>
          <dd className="mt-2"><ul className="flex flex-wrap gap-2">{profile.qualities[lang].map((q) => <li key={q} className="chip">{q}</li>)}</ul></dd>
        </div>
      </dl>
    </Section>
  );
}
