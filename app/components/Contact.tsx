import { siteConfig } from "@/app/data/config";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import styles from "./Contact.module.css";

const contactLinks = [
  {
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="14" height="10" rx="2" stroke="#A9B79A" strokeWidth="1.5" />
        <path d="M1 5l7 5 7-5" stroke="#A9B79A" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: siteConfig.linkedin,
    label: "linkedin.com/in/russelrex",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#A9B79A" strokeWidth="1.5" />
        <path
          d="M4 6.5v5M4 4v.5M7 11.5V9c0-1.1.9-2 2-2s2 .9 2 2v2.5M7 6.5v5"
          stroke="#A9B79A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: siteConfig.github,
    label: "github.com/russelrex",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          fill="#A9B79A"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <RevealOnScroll>
          <p className={styles.label}>Get in touch</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className={styles.title}>
            Let&apos;s Build
            <br />
            Something Together
          </h2>
        </RevealOnScroll>

        <div className={styles.grid}>
          <RevealOnScroll delay={0.15}>
            <p className={styles.blurb}>
              Whether it&apos;s a new product, a collaboration, or just a conversation
              about ideas, my inbox is always open.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <div className={styles.links}>
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <span className={styles.linkIcon}>{link.icon}</span>
                  <span className={styles.linkText}>{link.label}</span>
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
