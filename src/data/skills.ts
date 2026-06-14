// src/data/skills.ts — grouped skills, AI & Integration group first.
// No percentage/progress bars — these render as scannable tag groups.

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & Integration",
    items: [
      "LLM / ChatGPT integration",
      "AI-assisted SEO",
      "Intelligent automation & reporting",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "MobX",
      "React Query",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    label: "Mobile",
    items: [
      "React Native (CLI & Expo)",
      "App Store & Play Store deployment",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "REST APIs",
      "Prisma",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    label: "Quality & Tooling",
    items: ["Jest", "Cypress", "Git", "CI/CD", "Agile/Scrum"],
  },
];
