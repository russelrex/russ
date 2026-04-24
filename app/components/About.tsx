import { stats } from "@/app/data/skills";
import { siteConfig } from "@/app/data/config";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <RevealOnScroll>
              <p className={styles.label}>Background</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className={styles.title}>About Me</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <span className={styles.butterLine} />
            </RevealOnScroll>
            {siteConfig.bio.map((para, i) => (
              <RevealOnScroll key={`${para.slice(0, 8)}-${i}`} delay={0.2 + i * 0.1}>
                <p className={styles.para}>{para}</p>
              </RevealOnScroll>
            ))}
            <RevealOnScroll delay={0.4}>
              <a href="#contact" className="btn btn-coral" style={{ marginTop: "0.5rem" }}>
                Let&apos;s talk →
              </a>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <div className={styles.statNum}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
