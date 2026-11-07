const fr = {
  meta: {
    title: "Aya Ben Hmida – Développeuse logiciel | Web, Mobile & IoT",
    description: "Portfolio d’Aya Ben Hmida, développeuse Full-Stack (Web, Mobile & IoT), diplômée d’un Master en Développement des Systèmes IoT.",
  },
  nav: { home: "Accueil", about: "À propos", skills: "Compétences", experience: "Expérience", projects: "Projets", education: "Formation", contact: "Contact" },
  ui: {
    skip: "Aller au contenu", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", mainNav: "Navigation principale",
    toLight: "Passer au thème clair", toDark: "Passer au thème sombre", language: "Langue", toTop: "Retour en haut",
  },
  hero: {
    greeting: "Bonjour, je suis",
    role: "Développeuse logiciel | Web, Mobile & IoT",
    intro: "Développeuse Full-Stack diplômée d’un Master en Développement des Systèmes IoT. Je conçois des applications web et mobiles, des APIs REST et des solutions connectées basées sur ESP32.",
    viewProjects: "Voir les projets",
    downloadCv: "Télécharger le CV",
    cvFr: "Français", cvEn: "English",
    photoAlt: "Portrait d’Aya Ben Hmida",
  },
  about: {
    title: "À propos",
    p: [
      "Titulaire d’un Master Professionnel en Développement des Systèmes IoT (ISET Mahdia), après une Licence en Technologie de l’Informatique (ISET Kélibia) et un Baccalauréat en informatique, je développe des applications complètes, de l’API au capteur.",
      "Mon expérience couvre le web (React, ASP.NET Core, Laravel, Node.js), le mobile (React Native, Expo) et les systèmes IoT (ESP32, MQTT, SignalR), à travers plusieurs stages et  projets.",
      "Rigoureuse, curieuse et passionnée par l’automatisation des processus, je suis motivée à apprendre les technologies RPA et à évoluer dans un environnement international.",
    ],
    location: "Localisation", languages: "Langues", qualities: "Qualités professionnelles",
  },
  skills: {
    title: "Compétences",
    intro: "Les technologies que j’utilise dans mes stages et projets.",
    groups: {
      frontend: "Développement Frontend", backend: "Développement Backend", mobile: "Développement Mobile",
      languages: "Langages de programmation", databases: "Bases de données", iot: "IoT & systèmes embarqués",
      tools: "Outils & technologies", methods: "Méthodologies & concepts",
    } as Record<string, string>,
  },
  experience: {
    title: "Expérience",
    intro: "Stages et expériences professionnelles.",
    tasks: "Missions", tech: "Technologies", sourceCode: "Code source", visitSite: "Site de l’entreprise",
  },
  projects: {
    title: "Projets",
    intro: "Projets personnels, universitaires et de stage.",
    filtersLabel: "Filtrer par catégorie",
    filters: { all: "Tous", web: "Développement Web", mobile: "Développement Mobile", iot: "IoT", other: "Autre" },
    categories: { web: "Web", mobile: "Mobile", iot: "IoT", other: "Autre" },
    features: "Fonctionnalités", github: "Code source", demo: "Démo en ligne",
    empty: "Aucun projet dans cette catégorie pour le moment.",
  },
  education: { title: "Formation", intro: "Parcours académique.", specialization: "Spécialité" },
  contact: {
    title: "Contact",
    cta: "Travaillons ensemble",
    text: "Une opportunité, un projet ou une question ? Écrivez-moi, je réponds avec plaisir.",
    email: "E-mail", phone: "Téléphone", location: "Localisation",
    form: {
      name: "Nom", email: "E-mail", subject: "Sujet", message: "Message", send: "Envoyer le message", sending: "Envoi en cours…",
      errors: {
        name: "Indiquez votre nom.", email: "Indiquez une adresse e-mail valide.", subject: "Indiquez un sujet.",
        message: "Écrivez un message d’au moins 10 caractères.",
      },
      successSent: "Message envoyé. Merci, je vous répondrai rapidement.",
      successMailto: "Votre application de messagerie s’ouvre avec le message prérempli. Rien n’est envoyé depuis ce site : validez l’envoi dans votre messagerie.",
      failure: "Le message n’a pas pu être envoyé. Réessayez ou écrivez directement à",
    },
  },
  footer: { nav: "Navigation", rights: "Tous droits réservés." },
};
export default fr;
export type Dict = typeof fr;
