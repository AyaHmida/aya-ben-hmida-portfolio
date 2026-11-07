import type { Education } from "../types";

export const education: Education[] = [
  {
    id: "master",
    degree: { fr: "Master Professionnel – Développement des Systèmes IoT", en: "Professional Master’s Degree – IoT Systems Development" },
    institution: "ISET Mahdia",
    period: { fr: "2024 – 2026", en: "2024 – 2026" },
    specialization: { fr: "Développement des systèmes IoT", en: "IoT systems development" },
  },
  {
    id: "licence",
    degree: { fr: "Licence en Technologie de l’Informatique", en: "Bachelor’s Degree in Information Technology" },
    institution: "ISET Kélibia",
    period: { fr: "2021 – 2024", en: "2021 – 2024" },
    specialization: { fr: "DSI", en: "DSI" },
  },
  {
    id: "bac",
    degree: { fr: "Baccalauréat en Informatique", en: "Baccalaureate in Computer Science" },
    institution: "",
    period: { fr: "Juin 2021", en: "June 2021" },
  },
];
