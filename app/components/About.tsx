import { siteConfig } from "@/app/data/config";
import Image from "next/image";

const ArrowRight = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const bullets = [
  "Speak React, TypeScript, NestJS and MongoDB with equal fluency",
  "Experienced in social platforms, marketplaces, QMS and AI-powered apps",
  "Built full-stack SaaS, CRM, AI-powered and real-time mobile applications",
  "Experienced with Stripe, AWS S3, Socket.io, Claude AI, GHL, Twilio and API integrations",
  "Developed scalable systems using React, Next.js, React Native, NestJS and MongoDB",
  "Strong experience with modern frontend UI implementation from Figma designs",
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><span className="dot" />About</div>
        </div>
        <h2 className="h-section reveal d1">
          A developer who ships.<br />A builder who cares.
        </h2>

        <div className="about-grid">
          <div className="reveal d2">
            <div className="about-portrait">
              <Image
                src="/rr.jpg"
                alt={siteConfig.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="floater tl">
                <span className="live" />
                Currently shipping
              </div>
              <div className="floater br">📍 Philippines</div>
              <div className="floater bl">8+ years experience</div>
            </div>
          </div>

          <div className="reveal d3">
            <p className="lede" style={{ marginTop: 0 }}>
              {siteConfig.bio[0]}
            </p>
            <ul className="about-bullets">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "10px", marginTop: "32px", flexWrap: "wrap" }}>
              <a className="btn btn-ghost" href="#contact">
                Get in touch <ArrowRight />
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/russelrex"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
