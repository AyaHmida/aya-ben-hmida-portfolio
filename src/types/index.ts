export type Lang = "fr" | "en";
export type L10n<T = string> = Record<Lang, T>;
export type Category = "web" | "mobile" | "iot" | "other";

export interface Project {
  id: string;
  name: L10n;
  period?: L10n;
  categories: Category[];
  description: L10n;
  features: L10n<string[]>;
  tech: string[];
  github: string;
  demo?: string;
  /** Path under /public, e.g. "/images/projects/smartwash.webp". Falls back to an illustrated cover. */
  image?: string;
  icon: "flame" | "droplets" | "factory";
}

export interface Experience {
  id: string;
  company: L10n;
  companyUrl?: string;
  role: L10n;
  period: L10n;
  tech: string[];
  tasks: L10n<string[]>;
  outcome?: L10n;
  github?: string;
}

export interface Education {
  id: string;
  degree: L10n;
  institution: string;
  period: L10n;
  specialization?: L10n;
}

export interface SkillGroup {
  id: string;
  icon: "layout" | "server" | "smartphone" | "code" | "database" | "cpu" | "wrench" | "workflow";
  items: string[];
}
