import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Section from "../components/Section";
import { useLang } from "../i18n";
import { profile } from "../data/profile";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success"; text: string } | { kind: "error"; text: string };

/** Optional: set VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) to send messages for real. */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const empty: Fields = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { t } = useLang();
  const f = t.contact.form;
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const validate = (v: Fields): Errors => ({
    ...(v.name.trim() ? {} : { name: f.errors.name }),
    ...(EMAIL_RE.test(v.email.trim()) ? {} : { email: f.errors.email }),
    ...(v.subject.trim() ? {} : { subject: f.errors.subject }),
    ...(v.message.trim().length >= 10 ? {} : { message: f.errors.message }),
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) { setStatus({ kind: "idle" }); return; }

    if (!ENDPOINT) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: "success", text: f.successMailto });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(values) });
      if (!res.ok) throw new Error(String(res.status));
      setValues(empty);
      setStatus({ kind: "success", text: f.successSent });
    } catch {
      setStatus({ kind: "error", text: `${f.failure} ${profile.email}.` });
    }
  };

  const field = (key: keyof Fields, label: string, type = "text") => {
    const common = {
      id: `c-${key}`, name: key, value: values[key], className: "field mt-1.5",
      "aria-invalid": errors[key] ? true : undefined, "aria-describedby": errors[key] ? `c-${key}-err` : undefined,
      onChange: (ev: { target: { value: string } }) => setValues({ ...values, [key]: ev.target.value }),
    };
    return (
      <div>
        <label htmlFor={`c-${key}`} className="text-sm font-medium">{label}</label>
        {key === "message" ? <textarea rows={5} {...common} /> : <input type={type} autoComplete={key === "email" ? "email" : key === "name" ? "name" : "off"} {...common} />}
        {errors[key] && <p id={`c-${key}-err`} role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors[key]}</p>}
      </div>
    );
  };

  const item = "flex items-center gap-3 text-muted hover:text-accent";
  return (
    <Section id="contact" title={t.contact.title}>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="font-display text-2xl font-semibold">{t.contact.cta}</h3>
          <p className="mt-3 text-muted">{t.contact.text}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a className={item} href={`mailto:${profile.email}`}><Mail size={18} aria-hidden className="text-accent" /><span className="sr-only">{t.contact.email} : </span>{profile.email}</a></li>
            <li><a className={item} href={profile.phoneHref}><Phone size={18} aria-hidden className="text-accent" /><span className="sr-only">{t.contact.phone} : </span>{profile.phone}</a></li>
            <li className="flex items-center gap-3 text-muted"><MapPin size={18} aria-hidden className="text-accent" /><span className="sr-only">{t.contact.location} : </span>{profile.location.fr}</li>
            <li><a className={item} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden className="text-accent" />LinkedIn</a></li>
            <li><a className={item} href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden className="text-accent" />GitHub</a></li>
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-line bg-surface p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">{field("name", f.name)}{field("email", f.email, "email")}</div>
          {field("subject", f.subject)}
          {field("message", f.message)}
          <button type="submit" className="btn btn-primary" disabled={status.kind === "sending"}>
            <Mail size={16} aria-hidden />{status.kind === "sending" ? f.sending : f.send}
          </button>
          <p role="status" aria-live="polite" className={`text-sm ${status.kind === "error" ? "text-red-600 dark:text-red-400" : "text-accent"}`}>
            {status.kind === "success" || status.kind === "error" ? status.text : ""}
          </p>
        </form>
      </div>
    </Section>
  );
}
