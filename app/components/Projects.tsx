import Image from "next/image";
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
  const moreProjects = nonVideoProjects.filter(
    (project) => !project.id.startsWith("version-"),
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
                      <p className={styles.nonVideoTech}>
                        Tech Stack: {project.tech.join(", ")}
                      </p>
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

      {videoProjects.map((project, index) => (
        <div key={project.id} className={styles.entry}>
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
                    <p className={styles.nonVideoTech}>
                      Tech Stack: {project.tech.join(", ")}
                    </p>
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
