import type { IconType } from "react-icons";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAmazonwebservices,
  SiNestjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type SkillIcon = {
  Icon: IconType;
  color: string;
};

type Skill = {
  name: string;
  icons: SkillIcon[];
  pct: string;
  years: string;
  level: string;
};

const skills: Skill[] = [
  {
    name: "React + Next.js",
    icons: [
      { Icon: FaReact, color: "#61DAFB" },
      { Icon: RiNextjsFill, color: "#000000" },
    ],
    pct: "72%",
    years: "3 yrs",
    level: "PROFICIENT",
  },
  {
    name: "TypeScript",
    icons: [{ Icon: SiTypescript, color: "#3178C6" }],
    pct: "65%",
    years: "2 yrs",
    level: "PROFICIENT",
  },
  {
    name: "Node.js + NestJS",
    icons: [
      { Icon: FaNodeJs, color: "#339933" },
      { Icon: SiNestjs, color: "#E0234E" },
    ],
    pct: "68%",
    years: "3 yrs",
    level: "PROFICIENT",
  },
  {
    name: "MongoDB",
    icons: [{ Icon: DiMongodb, color: "#47A248" }],
    pct: "62%",
    years: "2 yrs",
    level: "INTERMEDIATE",
  },
  {
    name: "Angular",
    icons: [{ Icon: FaAngular, color: "#DD0031" }],
    pct: "58%",
    years: "2 yrs",
    level: "INTERMEDIATE",
  },
  {
    name: "React Native",
    icons: [{ Icon: TbBrandReactNative, color: "#61DAFB" }],
    pct: "60%",
    years: "1 yr",
    level: "INTERMEDIATE",
  },
  {
    name: "AWS + Supabase",
    icons: [
      { Icon: SiAmazonwebservices, color: "#FF9900" },
      { Icon: SiSupabase, color: "#3ECF8E" },
    ],
    pct: "52%",
    years: "1 yr",
    level: "LEARNING",
  },
  {
    name: "Tailwind CSS",
    icons: [{ Icon: SiTailwindcss, color: "#06B6D4" }],
    pct: "70%",
    years: "2 yrs",
    level: "PROFICIENT",
  },
];

const delays = ["", "d1", "d2", "d3", "", "d1", "d2", "d3"];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills-head">
          <div>
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot" />
                The stack
              </div>
            </div>
            <h2 className="h-section reveal d1">
              Tools sharpened over a decade of shipping.
            </h2>
          </div>
          <p className="lede reveal d2" style={{ maxWidth: "42ch" }}>
            Not a checklist • these are the tools I reach for daily and have opinions about.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              className={`card skill-card reveal ${delays[i]}`.trim()}
              key={s.name}
            >
              <div
                className={`icon${s.icons.length > 1 ? " icon-multi" : ""}`}
                aria-hidden
              >
                {s.icons.map(({ Icon, color }, iconIndex) => (
                  <Icon key={iconIndex} style={{ color }} aria-hidden />
                ))}
              </div>
              <div className="name">{s.name}</div>
              <div className="bar">
                <i style={{ width: s.pct }} />
              </div>
              <div
                className="skill-meta"
                style={{ fontFamily: "var(--nf-mono, monospace)" }}
              >
                <span>{s.years}</span>
                <span>{s.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
