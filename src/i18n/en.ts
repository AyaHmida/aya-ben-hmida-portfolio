import type { Dict } from "./fr";

const en: Dict = {
  meta: {
    title: "Aya Ben Hmida – Software Developer | Web, Mobile & IoT",
    description: "Portfolio of Aya Ben Hmida, Full-Stack developer (Web, Mobile & IoT) with a Master’s degree in IoT Systems Development.",
  },
  nav: { home: "Home", about: "About", skills: "Skills", experience: "Experience", projects: "Projects", education: "Education", contact: "Contact" },
  ui: {
    skip: "Skip to content", openMenu: "Open menu", closeMenu: "Close menu", mainNav: "Main navigation",
    toLight: "Switch to light theme", toDark: "Switch to dark theme", language: "Language", toTop: "Back to top",
  },
  hero: {
    greeting: "Hi, I’m",
    role: "Software Developer | Web, Mobile & IoT",
    intro: "Full-Stack developer with a Master’s degree in IoT Systems Development. I build web and mobile applications, REST APIs and connected solutions based on ESP32.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    cvFr: "Français", cvEn: "English",
    photoAlt: "Portrait of Aya Ben Hmida",
  },
  about: {
    title: "About",
    p: [
      "I hold a Professional Master’s degree in IoT Systems Development (ISET Mahdia), following a Bachelor’s degree in Information Technology (ISET Kélibia) and a Baccalaureate in Computer Science. I build complete applications, from the API down to the sensor.",
      "My experience spans web (React, ASP.NET Core, Laravel, Node.js), mobile (React Native, Expo) and IoT systems (ESP32, MQTT, SignalR), through several internships and  projects.",
      "Rigorous, curious and passionate about process automation, I am eager to learn RPA technologies and to grow in an international environment.",
    ],
    location: "Location", languages: "Languages", qualities: "Professional qualities",
  },
  skills: {
    title: "Skills",
    intro: "The technologies I use in my internships and projects.",
    groups: {
      frontend: "Frontend Development", backend: "Backend Development", mobile: "Mobile Development",
      languages: "Programming Languages", databases: "Databases", iot: "IoT & Embedded Systems",
      tools: "Tools & Technologies", methods: "Methodologies & Concepts",
    },
  },
  experience: {
    title: "Experience",
    intro: "Internships and professional experience.",
    tasks: "Responsibilities", tech: "Technologies", sourceCode: "Source code", visitSite: "Company website",
  },
  projects: {
    title: "Projects",
    intro: "Personal, academic and internship projects.",
    filtersLabel: "Filter by category",
    filters: { all: "All", web: "Web Development", mobile: "Mobile Development", iot: "IoT", other: "Other" },
    categories: { web: "Web", mobile: "Mobile", iot: "IoT", other: "Other" },
    features: "Features", github: "Source code", demo: "Live demo",
    empty: "No projects in this category yet.",
  },
  education: { title: "Education", intro: "Academic background.", specialization: "Specialization" },
  contact: {
    title: "Contact",
    cta: "Let’s work together",
    text: "An opportunity, a project or a question? Write to me, I’ll be glad to reply.",
    email: "Email", phone: "Phone", location: "Location",
    form: {
      name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send message", sending: "Sending…",
      errors: {
        name: "Enter your name.", email: "Enter a valid email address.", subject: "Enter a subject.",
        message: "Write a message of at least 10 characters.",
      },
      successSent: "Message sent. Thank you, I’ll get back to you soon.",
      successMailto: "Your email app is opening with the message prefilled. Nothing is sent from this site: confirm the send in your email app.",
      failure: "The message could not be sent. Try again or write directly to",
    },
  },
  footer: { nav: "Navigation", rights: "All rights reserved." },
};
export default en;
