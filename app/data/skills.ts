export type SkillGroup = {
  category: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Wix Studio",
      "WordPress",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "MySQL",
      "PHP",
      "CodeIgniter",
      "REST APIs",
    ],
  },
  {
    category: "Tooling & Infra",
    skills: [
      "GitHub",
      "GitLab",
      "AWS Amplify",
      "MongoDB Atlas",
      "Docker",
      "Jira",
      "Cypress",
      "Stripe",
    ],
  },
  {
    category: "Workflow & AI",
    skills: ["Cursor", "Claude AI", "Postman", "Responsive UI/UX"],
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "8+", label: "Years building products" },
  { value: "40+", label: "Projects shipped" },
  { value: "18+", label: "Happy clients" },
  { value: "99%", label: "On-time delivery" },
];
