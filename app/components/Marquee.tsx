const clients = [
  "FassaDigital",
  "SuiteSpot",
  "LeadProspectingAI",
  "ATRAQ",
  "Sensoriium",
  "Road Hero",
  "NavQMS",
];

function Track() {
  return (
    <>
      <span className="item serif-item">Clients &amp; projects</span>
      {clients.map((c) => (
        <span className="item" key={c}>
          <span className="dot" />
          {c}
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-strip" style={{ padding: "60px 0" }}>
      <div className="marquee-track" aria-hidden="true">
        <Track />
        <Track />
      </div>
    </section>
  );
}
