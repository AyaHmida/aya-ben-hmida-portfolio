import type { SkillGroup } from "../types";

// Only technologies listed in the CVs.
export const skillGroups: SkillGroup[] = [
  { id: "frontend", icon: "layout", items: ["React", "Angular", "Material UI", "TypeScript", "JavaScript"] },
  { id: "backend", icon: "server", items: ["ASP.NET Core (.NET 8)", "Laravel", "Node.js", "Express.js", "REST APIs", "SignalR"] },
  { id: "mobile", icon: "smartphone", items: ["React Native", "Expo"] },
  { id: "languages", icon: "code", items: ["C#", "Java", "PHP", "JavaScript", "TypeScript", "Python"] },
  { id: "databases", icon: "database", items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"] },
  { id: "iot", icon: "cpu", items: ["ESP32", "Arduino", "PlatformIO", "MQTT", "HTTP"] },
  { id: "tools", icon: "wrench", items: ["Git", "GitHub", "Postman", "Swagger", "Selenium", "Trello", "Jira", "Azure"] },
  { id: "methods", icon: "workflow", items: ["Agile / Scrum", "UML", "OOP", "MVC", "Algorithmics", "Business process analysis", "Workflow modeling", "Functional testing"] },
];
