import type { L10n } from "../types";

export const profile = {
  name: "Aya Ben Hmida",
  email: "aya.benhmida2001@gmail.com",
  phone: "51 325 648",
  phoneHref: "tel:+21651325648",
  github: "https://github.com/AyaHmida",
  linkedin: "https://www.linkedin.com/in/ben-hmida-aya-b405aa256/",
  location: { fr: "Hammamet, Nabeul", en: "Hammamet, Nabeul" } as L10n,
  photo: "/images/aya.webp",
  cv: { fr: "/cv/CV_Aya_Ben_Hmida_FR.pdf", en: "/cv/CV_Aya_Ben_Hmida_EN.pdf" },
  languages: [
    { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Maternelle", en: "Native" } },
    { name: { fr: "Français", en: "French" }, level: { fr: "Professionnel", en: "Professional" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Professionnel", en: "Professional" } },
    { name: { fr: "Allemand", en: "German" }, level: { fr: "Débutant", en: "Beginner" } },
  ] as { name: L10n; level: L10n }[],
  qualities: {
    fr: ["Esprit d’équipe", "Autonomie", "Communication", "Gestion des priorités"],
    en: ["Teamwork", "Autonomy", "Communication", "Priority management"],
  } as L10n<string[]>,
};
