import { SERVICES } from "@/app/data/services";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><span className="dot" />Services</div>
        </div>
        <h2 className="h-section reveal d1">Three ways we can work together.</h2>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              className={`card service-card reveal d${i + 1} ${s.dark ? "dark" : ""}`.trim()}
              key={s.num}
            >
              <div className="num" style={{ fontFamily: "var(--nf-mono, monospace)" }}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="feat">
                {s.tags.map((tag) => (
                  <span
                    className={`chip ${s.dark ? "chip-dark" : "chip-tag"}`}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
