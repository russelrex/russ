import Image from "next/image";
import { Fragment } from "react";
import { PROJECTS } from "@/app/data/projects";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import styles from "./Projects.module.css";

export default function Projects() {
  const videoProjects = PROJECTS.filter((project) =>
    project.images.some((img) => img.src.toLowerCase().endsWith(".mp4")),
  ).sort((a, b) => {
    if (a.id === "flickbook") return -1;
    if (b.id === "flickbook") return 1;
    return 0;
  });
  const nonVideoProjects = PROJECTS.filter(
    (project) => !project.images.some((img) => img.src.toLowerCase().endsWith(".mp4")),
  );
  const realEstateProjects = nonVideoProjects.filter((project) =>
    project.id.startsWith("version-"),
  );
  const cafeProjects = nonVideoProjects.filter((project) =>
    project.id.startsWith("cafe-"),
  );
  const moreProjects = nonVideoProjects.filter(
    (project) => !project.id.startsWith("version-") && !project.id.startsWith("cafe-"),
  );

  const portfolioDetailProjects = [
    {
      title: "FassaDigital",
      subtitle: "fassadigital.com.au · Sydney, AU",
      badge: "Wix Studio",
      href: "https://www.fassadigital.com.au",
      description:
        "A bespoke digital marketing agency based in Sydney, offering services including web design & UX, SEO, paid search & digital ads, social media marketing, content marketing, email & SMS marketing, corporate training, and marketing research. Their mission is to strengthen relationships between businesses and their customers through customised online strategies, backed by over 15 years of experience.",
      tech: ["Wix Studio", "Node.js (Velo)", "Figma", "Google Sheets"],
      features: [
        "Converted Figma designs into responsive, production-ready UI",
        "Built custom backend logic using Node.js via Velo by Wix",
        "Integrated Google Sheets for data storage and automation",
        "Form handling, validations & dynamic CMS content",
        "Optimized site performance and SEO best practices",
      ],
      accentClass: styles.portfolioTeal,
    },
    {
      title: "SuiteSpot Technology",
      subtitle: "suitespot.ai · Toronto, CA",
      badge: "MEAN Stack",
      href: "https://www.suitespot.ai",
      description:
        "An AI-powered platform for multifamily property maintenance and capital operations. Streamlines workflows across work orders, inspections, make-ready boards, resident management, and reporting. Key products include SuiteSpot Maintenance™, SuiteSpot Capital™ for CapEx management, and SAM™ — an AI maintenance agent handling requests 24/7. Trusted by large multifamily operators, the platform claims to cut unit turn times by 50%.",
      tech: ["MongoDB", "Express.js", "Angular", "Node.js", "Ionic", "RxJS"],
      features: [
        "Maintained APIs, AG Grid, forms, email templates & mobile apps",
        "Key modules: Make Ready Board, Work Orders, Inspections",
        "RxJS for resolving and managing fetched data objects",
        "Third-party integrations with HomeSpy and Yardi",
        "RESTful APIs with Node.js, Express & MongoDB",
      ],
      accentClass: styles.portfolioBlue,
    },
    {
      title: "LeadProspectingAI",
      subtitle: "leadprospecting.ai · Twin Falls, ID",
      badge: "AI · SaaS",
      href: "https://www.leadprospecting.ai",
      description:
        "An all-in-one AI-powered CRM and revenue growth platform built for small businesses. Combines a CRM, Google Maps lead scraper, email warming, AI email campaigns, blog writer, social media scheduler, AI receptionist, website design, and SEO tools — replacing 8+ separate tools from $99/month. Co-founded by an Army veteran, with US-based human support, a 14-day free trial, and no contracts.",
      tech: ["Next.js", "React", "MongoDB", "GoHighLevel", "Stripe", "Ably"],
      features: [
        "AI-powered lead discovery and qualification system",
        "Stripe payments with tiered plans: Free, Pro, Enterprise",
        "Real-time in-app chat using Ably for instant messaging",
        "GoHighLevel CRM sync, lead management & automation",
        "Role-based access control & secure authentication",
        "Dashboard for analytics, usage tracking & subscriptions",
      ],
      accentClass: styles.portfolioPurple,
    },
  ];

  const renderPortfolioDetailSection = () => (
    <div className={styles.nonVideoSection}>
      <div className={`${styles.nonVideoGrid} ${styles.portfolioDetailGrid}`}>
        {portfolioDetailProjects.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 0.06}>
            <article className={`${styles.realEstateCard} ${styles.portfolioDetailCard} ${project.accentClass}`}>
              <div className={`${styles.realEstateOverlay} ${styles.portfolioDetailOverlay}`}>
                <div className={styles.portfolioDetailHeader}>
                  <div>
                    <p className={styles.nonVideoMeta}>{project.subtitle}</p>
                    <h4 className={styles.nonVideoName}>{project.title}</h4>
                  </div>
                  <span className={styles.portfolioBadge}>{project.badge}</span>
                </div>

                <p className={styles.portfolioDescription}>{project.description}</p>
                <hr className={styles.portfolioDivider} />

                <div className={styles.portfolioTech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.portfolioChip}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className={styles.portfolioFeatures}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.nonVideoLink}
                >
                  Visit
                </a>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );

  const renderConceptSections = () => (
    <>
      {realEstateProjects.length > 0 && (
        <div className={styles.nonVideoSection}>
          <RevealOnScroll>
            <h3 className={styles.nonVideoTitle}>Real Estate Website Concepts</h3>
          </RevealOnScroll>
          <div className={styles.nonVideoGrid}>
            {realEstateProjects.map((project, index) => {
              const thumb = project.images[0];
              return (
                <RevealOnScroll key={project.id} delay={index * 0.06}>
                  <article className={styles.realEstateCard}>
                    {thumb?.isReal && thumb.src ? (
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        width={1200}
                        height={760}
                        className={styles.realEstateImage}
                      />
                    ) : (
                      <div className={styles.nonVideoPlaceholder}>{thumb?.alt ?? "Project preview"}</div>
                    )}

                    <div className={styles.realEstateOverlay}>
                      <p className={styles.nonVideoMeta}>{project.year}</p>
                      <h4 className={styles.nonVideoName}>{project.title}</h4>
                      {project.caseStudyHref && (
                        <a
                          href={project.caseStudyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.nonVideoLink}
                        >
                          Visit Project
                        </a>
                      )}
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      )}

      {cafeProjects.length > 0 && (
        <div className={styles.nonVideoSection}>
          <RevealOnScroll>
            <h3 className={styles.nonVideoTitle}>Cafe Website Concepts</h3>
          </RevealOnScroll>
          <div className={styles.nonVideoGrid}>
            {cafeProjects.map((project, index) => {
              const thumb = project.images[0];
              return (
                <RevealOnScroll key={project.id} delay={index * 0.06}>
                  <article className={styles.realEstateCard}>
                    {thumb?.isReal && thumb.src ? (
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        width={1200}
                        height={760}
                        className={styles.realEstateImage}
                      />
                    ) : (
                      <div className={styles.nonVideoPlaceholder}>{thumb?.alt ?? "Project preview"}</div>
                    )}

                    <div className={styles.realEstateOverlay}>
                      <p className={styles.nonVideoMeta}>{project.year}</p>
                      <h4 className={styles.nonVideoName}>{project.title}</h4>
                      {project.caseStudyHref && (
                        <a
                          href={project.caseStudyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.nonVideoLink}
                        >
                          Visit Project
                        </a>
                      )}
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      )}
    </>
  );

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <RevealOnScroll>
          <p className={styles.label}>Selected Work</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className={styles.title}>Projects</h2>
        </RevealOnScroll>
      </div>

      {videoProjects.map((project, index) => (
        <Fragment key={project.id}>
          <div className={styles.entry}>
            <div className={styles.left}>
              <span className={styles.number}>
                {project.number ?? String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>

              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {project.caseStudyHref && (
                  <a
                    href={project.caseStudyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkCoral}
                  >
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkGhost}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <div className={styles.right}>
              {project.images.map((img, i) => (
                <RevealOnScroll key={`${project.id}-${img.src}-${i}`} delay={i * 0.1}>
                  <div className={styles.visual}>
                    {img.isReal && img.src ? (
                      img.src.toLowerCase().endsWith(".mp4") ? (
                        <video controls preload="metadata" className={styles.mediaVideo}>
                          <source src={img.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={800}
                          height={500}
                          className={styles.media}
                          style={{ height: "auto" }}
                        />
                      )
                    ) : (
                      <div className={styles.mediaVideo} aria-label={img.alt} />
                    )}
                    {img.caption && <p className={styles.caption}>{img.caption}</p>}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
          {project.id === "recipestash" && (
            <>
              {renderPortfolioDetailSection()}
              {renderConceptSections()}
            </>
          )}
        </Fragment>
      ))}

      {moreProjects.length > 0 && (
        <div className={styles.nonVideoSection}>
          <RevealOnScroll>
            <h3 className={styles.nonVideoTitle}>More Projects</h3>
          </RevealOnScroll>
          <div className={styles.nonVideoGrid}>
            {moreProjects.map((project, index) => {
              const thumb = project.images[0];
              return (
                <RevealOnScroll key={project.id} delay={index * 0.06}>
                  <article className={styles.nonVideoCard}>
                    <p className={styles.nonVideoMeta}>{project.year}</p>
                    <h4 className={styles.nonVideoName}>{project.title}</h4>
                    {thumb?.isReal && thumb.src ? (
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        width={540}
                        height={320}
                        className={styles.nonVideoImage}
                      />
                    ) : (
                      <div className={styles.nonVideoPlaceholder}>{thumb?.alt ?? "Project preview"}</div>
                    )}
                    {project.caseStudyHref && (
                      <a
                        href={project.caseStudyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.nonVideoLink}
                      >
                        Visit Project
                      </a>
                    )}
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
