import type { SkillGroup } from "./types"

/** Add a category or a skill by editing this array. Cards render automatically. */
export const skillGroups: SkillGroup[] = [
  {
    category: "System Analysis",
    skills: [
      "Requirement Analysis",
      "UML",
      "Business Process Analysis",
      "Functional Testing",
      "System Documentation",
    ],
  },
  {
    category: "UI/UX",
    skills: ["Figma", "Wireframing", "Prototyping", "User Flow", "Interface Design"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "SPA", "PWA"],
  },
  {
    category: "Other Tools",
    skills: [
      "Postman",
      "Git / GitHub",
      "Draw.io",
      "VS Code",
      "SQL / DBMS",
      "Basic Cloud Computing",
    ],
  },
]
