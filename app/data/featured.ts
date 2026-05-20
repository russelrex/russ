export type FeaturedProjectDisplay = {
  projectId: string;
  index: string;
  title: string;
  role: string;
  visualVariant?: "default" | "alt" | "dark";
  urlLabel: string;
};

/** Homepage "Things I've built" — links to `PROJECTS` in projects.ts */
export const FEATURED_PROJECT_IDS = [
  "flickbook",
  "recipestash",
  "fassadigital",
  "suitespot",
  "leadprospectingai",
] as const;

export const FEATURED_PROJECTS: FeaturedProjectDisplay[] = [
  {
    projectId: "flickbook",
    index: "01 / 05",
    title: "FlickBook — full-stack pickleball social platform",
    role: "FULL-STACK DEVELOPER · SOLO PROJECT",
    visualVariant: "default",
    urlLabel: "flickbook.online",
  },
  {
    projectId: "recipestash",
    index: "02 / 05",
    title: "RecipeStash — AI-powered recipe management app",
    role: "FULL-STACK DEVELOPER · SOLO PROJECT",
    visualVariant: "alt",
    urlLabel: "recipestash.food",
  },
  {
    projectId: "fassadigital",
    index: "03 / 05",
    title: "FassaDigital — digital agency web platform",
    role: "WIX DEVELOPER · CONTRACT",
    visualVariant: "dark",
    urlLabel: "fassadigital.com.au",
  },
  {
    projectId: "suitespot",
    index: "04 / 05",
    title: "SuiteSpot — AI-powered property maintenance platform",
    role: "FULL-STACK DEVELOPER · CONTRACT",
    visualVariant: "default",
    urlLabel: "suitespot.ai",
  },
  {
    projectId: "leadprospectingai",
    index: "05 / 05",
    title: "LeadProspectingAI — all-in-one AI CRM for small businesses",
    role: "FULL-STACK DEVELOPER · CONTRACT",
    visualVariant: "alt",
    urlLabel: "leadprospecting.ai",
  },
];
