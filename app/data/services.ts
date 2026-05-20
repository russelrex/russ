export type Service = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  dark?: boolean;
};

export const SERVICES: Service[] = [
  {
    num: "SERVICE / 01",
    title: "Full-stack development",
    desc: "End-to-end product development • from database schema and API design to polished UI. React, Next.js, Node.js, NestJS, MongoDB, React Native.",
    tags: ["Web & Mobile", "API design", "From scratch or existing"],
    dark: false,
  },
  {
    num: "SERVICE / 02",
    title: "Feature sprint",
    desc: "Two focused weeks to ship a single, polished feature • a new module, a dashboard redesign, or a v2 of your mobile app. Fixed scope, clear delivery.",
    tags: ["2-week sprint", "Fixed price", "Mobile or Web"],
    dark: true,
  },
  {
    num: "SERVICE / 03",
    title: "Wix Studio build",
    desc: "Production-ready Wix Studio websites with custom backend logic via Velo, Figma-to-code delivery, CMS integration, Google Sheets automation, and SEO optimization.",
    tags: ["No-code + custom logic", "Figma to production", "SEO-ready"],
    dark: false,
  },
];
