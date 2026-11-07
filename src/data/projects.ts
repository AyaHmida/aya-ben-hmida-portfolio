import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "fire",
    icon: "flame",
    name: { fr: "Système anti-incendie", en: "Fire Detection System" },
    period: { fr: "Fév 2026 – Mai 2026", en: "Feb 2026 – May 2026" },
    categories: ["iot", "web", "mobile"],
    description: {
      fr: "Projet de fin d’études : système de détection d’incendie basé sur ESP32 et capteurs, avec alertes en temps réel et chatbot IA.",
      en: "Master’s final project: a fire detection system built on ESP32 and sensors, with real-time alerts and an AI chatbot.",
    },
    features: {
      fr: ["Alertes temps réel avec SignalR", "Communication IoT via MQTT/HTTP", "Chatbot Llama 3.1 (Groq Cloud) basé sur les données IoT", "Web (React) et mobile (React Native + Expo Go)"],
      en: ["Real-time alerts with SignalR", "IoT communication via MQTT/HTTP", "Llama 3.1 chatbot (Groq Cloud) based on IoT data", "Web (React) and mobile (React Native + Expo Go)"],
    },
    tech: ["ESP32", "ASP.NET Core", "React", "React Native", "SignalR", "MQTT", "PostgreSQL", "Llama 3.1"],
    github: "https://github.com/AyaHmida/FireProtectionSystem",
  },
  {
    id: "smartwash",
    icon: "droplets",
    name: { fr: "SmartWash", en: "SmartWash" },
    period: { fr: "Oct 2025 – Déc 2025", en: "Oct 2025 – Dec 2025" },
    categories: ["iot", "web", "mobile"],
    description: {
      fr: "Système IoT intelligent pour laverie connectée : supervision et réservation de machines à laver en temps réel.",
      en: "Intelligent IoT system for connected laundry services: real-time washing machine monitoring and reservation.",
    },
    features: {
      fr: ["Carte ESP32 (PlatformIO) qui collecte l’état des machines", "API REST sécurisée : JWT, paiement, réservation", "Dashboard web d’administration", "Application mobile client"],
      en: ["ESP32 board (PlatformIO) collecting machine status", "Secure REST API: JWT, payment, reservation", "Web administration dashboard", "Mobile client application"],
    },
    tech: ["ESP32", "PlatformIO", "ASP.NET Core 8", "SQL Server", "React", "TypeScript", "React Native", "Expo"],
    github: "https://github.com/AyaHmida/SmartWash",
  },
  {
    id: "mes",
    icon: "factory",
    name: { fr: "MES Gestion Ressources", en: "MES Resource Management" },
    categories: ["web"],
    description: {
      fr: "Plateforme web collaborative de gestion et de supervision de la production : machines, opérateurs, stocks, alertes et pannes en temps réel.",
      en: "Collaborative web platform for managing and monitoring manufacturing operations: machines, operators, stocks, alerts and breakdowns.",
    },
    features: {
      fr: ["Suivi des machines, opérateurs, stocks et pannes", "Analyse et implémentation des processus métier (production, stocks, maintenance)", "Travail en équipe en Agile/Scrum avec Jira, Git et GitHub"],
      en: ["Tracking of machines, operators, stocks and breakdowns", "Analysis and implementation of business processes (production, inventory, maintenance)", "Team work in Agile/Scrum with Jira, Git and GitHub"],
    },
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Jira", "GitHub"],
    github: "https://github.com/AyaHmida/MES-Gestion-Ressources",
  },
];
