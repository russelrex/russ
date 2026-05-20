import { stats } from "@/app/data/skills";
import { FaReact, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiSupabase, SiMysql } from "react-icons/si";

const ArrowRight = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowOut = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M4 10l6-6m0 0H5m5 0v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type BadgeProps = {
  label: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
};

function Badge({ label, icon, style }: BadgeProps) {
  return (
    <div className="badge" style={style}>
      <span className="glyph-icon" aria-hidden="true">{icon}</span>
      {label}
    </div>
  );
}

const badges: BadgeProps[] = [
  {
    label: "React",
    icon: <FaReact style={{ color: "#61DAFB", width: 16, height: 16 }} />,
    style: { top: "60px", right: "-10px", animationDelay: "0s" },
  },
  {
    label: "TypeScript",
    icon: <SiTypescript style={{ color: "#3178C6", width: 15, height: 15 }} />,
    style: { top: "170px", right: "140px", animationDelay: "-2s" },
  },
  {
    label: "Node.js",
    icon: <FaNodeJs style={{ color: "#83CD29", width: 16, height: 16 }} />,
    style: { bottom: "260px", right: "-20px", animationDelay: "-4s" },
  },
  {
    label: "MongoDB",
    icon: <SiMongodb style={{ color: "#47A248", width: 15, height: 15 }} />,
    style: { bottom: "360px", right: "200px", animationDelay: "-6s" },
  },
  {
    label: "Angular",
    icon: <FaAngular style={{ color: "#DD0031", width: 16, height: 16 }} />,
    style: { top: "300px", right: "60px", animationDelay: "-1s" },
  },
  {
    label: "Supabase",
    icon: <SiSupabase style={{ color: "#3ECF8E", width: 15, height: 15 }} />,
    style: { bottom: "460px", right: "-10px", animationDelay: "-3s" },
  },
  {
    label: "MySQL",
    icon: <SiMysql style={{ color: "#00758F", width: 18, height: 18 }} />,
    style: { bottom: "160px", right: "120px", animationDelay: "-5s" },
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">

        <div className="hero-top reveal">
          <div className="eyebrow">
            <span className="dot" />
            Open to opportunities
          </div>
          <div className="hero-meta">
            <span>Based in Philippines</span>
            <span className="sep" />
            <span>UTC+8</span>
            <span className="sep" />
            <span>Open to remote</span>
          </div>
        </div>

        <h1 className="reveal d1">
          <span className="row">Building</span>
          <span className="row">modern products</span>
          <span className="row">
            that <span className="grad-text">scale.</span>
          </span>
        </h1>

        <p className="lede reveal d2">
          I&apos;m <strong>Russel Rex</strong> • a full-stack developer specializing in React,
          Next.js, Node.js, and React Native. I help teams ship clean, fast, opinionated software
          from the database all the way up to polished interfaces.
        </p>

        <div className="hero-cta reveal d3">
          <a className="btn btn-primary" href="#work">
            See selected work <ArrowRight />
          </a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
          <a className="btn btn-ghost" href="https://github.com/russelrex" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowOut />
          </a>
        </div>

        <div className="hero-stats reveal d4">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {badges.map((b) => (
          <Badge key={b.label} {...b} />
        ))}

      </div>
    </section>
  );
}
