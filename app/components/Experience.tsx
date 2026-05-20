import { EXPERIENCE } from "@/app/data/experience";

export default function Experience() {
  return (
    <section id="experience" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><span className="dot" />Experience</div>
        </div>
        <h2 className="h-section reveal d1">A short walk through the years.</h2>

        <div className="timeline reveal d2">
          {EXPERIENCE.map((e) => (
            <div className="t-row" key={e.period}>
              <div className="year" style={{ fontFamily: "var(--nf-mono, monospace)" }}>
                {e.period}
              </div>
              <div className="t-role">
                {e.role} ·{" "}
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-link"
                >
                  {e.company}
                </a>
              </div>
              <div className="place" style={{ fontFamily: "var(--nf-mono, monospace)" }}>
                {e.place}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
