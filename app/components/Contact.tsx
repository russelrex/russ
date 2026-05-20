import { siteConfig } from "@/app/data/config";

const ArrowRight = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner reveal">
          <div className="eyebrow">
            <span className="dot" />
            Open to opportunities
          </div>
          <h2>
            Have a project<br />worth{" "}
            <span className="serif" style={{ fontFamily: "var(--nf-serif, 'Instrument Serif', serif)" }}>
              building
            </span>
            ?
          </h2>
          <p className="lede" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "52ch" }}>
            I take on a small number of engagements. If you&apos;re building something you care about,
            I&apos;d love to hear about it.
          </p>
          <div className="contact-cta">
            <a className="btn btn-white" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email} <ArrowRight />
            </a>
            <a
              className="btn btn-ghost-inv"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost-inv"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="contact-grid">
            <div className="item">
              <div className="lbl">Currently</div>
              <div className="val">{siteConfig.location}</div>
            </div>
            <div className="item">
              <div className="lbl">Availability</div>
              <div className="val">Open to remote</div>
            </div>
            <div className="item">
              <div className="lbl">Find me on</div>
              <div className="val">LinkedIn · GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
