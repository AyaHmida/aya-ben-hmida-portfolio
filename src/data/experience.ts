import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "pfe-master",
    company: { fr: "Pépinière d’entreprises de Mahdia", en: "Business Incubator – Mahdia" },
    role: { fr: "Stage PFE Master – Développeuse IoT, Web & Mobile", en: "Master’s Final Project Internship – IoT, Web & Mobile Developer" },
    period: { fr: "Fév 2026 – Mai 2026", en: "Feb 2026 – May 2026" },
    tech: ["ESP32", "ASP.NET Core", "React", "React Native", "Expo Go", "SignalR", "MQTT", "HTTP", "PostgreSQL", "Llama 3.1", "Groq Cloud"],
    tasks: {
      fr: [
        "Développement d’un système anti-incendie (ESP32, capteurs).",
        "Création d’APIs REST avec ASP.NET Core.",
        "Développement d’une interface web et d’une application mobile (React, React Native + Expo Go).",
        "Alertes temps réel (SignalR) et communication IoT via MQTT/HTTP.",
        "Base de données PostgreSQL pour les données capteurs et utilisateurs.",
        "Intégration de Llama 3.1 via Groq Cloud pour un chatbot intelligent basé sur les données IoT.",
      ],
      en: [
        "Developed a fire detection system using ESP32 and sensors.",
        "Built REST APIs with ASP.NET Core.",
        "Developed a web interface and a mobile application (React, React Native with Expo Go).",
        "Implemented real-time alerts with SignalR and IoT communication via MQTT/HTTP.",
        "Used PostgreSQL to store sensor and user data.",
        "Integrated Llama 3.1 (via Groq Cloud) for an AI chatbot based on IoT data.",
      ],
    },
    outcome: {
      fr: "Livrable : système anti-incendie connecté avec alertes en temps réel et chatbot IA.",
      en: "Deliverable: a connected fire detection system with real-time alerts and an AI chatbot.",
    },
    github: "https://github.com/AyaHmida/FireProtectionSystem",
  },
  {
    id: "tse",
    company: { fr: "TSE Consultant INT", en: "TSE Consultant INT" },
    companyUrl: "https://softwareengineerconsultant.tech/",
    role: { fr: "Stage d’été – Développement Web", en: "Summer Internship – Web Development" },
    period: { fr: "Juil 2025 – Août 2025", en: "July 2025 – August 2025" },
    tech: [".NET 8", "React", "Swagger", "Selenium"],
    tasks: {
      fr: [
        "Développement d’une plateforme de gestion des stagiaires.",
        "Création d’APIs REST en .NET 8 et d’un front-end en React.",
        "Tests automatisés des APIs (Swagger/Selenium).",
      ],
      en: [
        "Developed an intern management platform.",
        "Created REST APIs with .NET 8 and a React front-end application.",
        "Performed automated API testing with Swagger and Selenium.",
      ],
    },
    outcome: { fr: "Livrable : plateforme de gestion des stagiaires.", en: "Deliverable: an intern management platform." },
  },
  {
    id: "v5",
    company: { fr: "V5 Agency", en: "V5 Agency" },
    role: { fr: "Stage PFE – Développement Web", en: "Final Project Internship – Web Development" },
    period: { fr: "Fév 2024 – Mai 2024", en: "Feb 2024 – May 2024" },
    tech: ["Laravel", "React", "Postman", "GitHub"],
    tasks: {
      fr: [
        "Création d’APIs REST avec Laravel.",
        "Développement de l’interface avec React.",
        "Tests des APIs avec Postman et gestion du code source avec GitHub.",
      ],
      en: [
        "Created REST APIs with Laravel.",
        "Built the front-end interface with React.",
        "Tested APIs with Postman and managed source code with GitHub.",
      ],
    },
    outcome: { fr: "Livrable : plateforme sociale pour startups.", en: "Deliverable: a social platform for startups." },
  },
];
