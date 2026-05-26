import Image from "next/image";
import {
  FEATURED_PROJECT_IDS,
  FEATURED_PROJECTS,
  type FeaturedProjectDisplay,
} from "@/app/data/featured";
import {
  PROJECTS,
  type Project,
  type ProjectCategory,
  type ProjectImage,
  type ProjectThumbFit,
} from "@/app/data/projects";

const ArrowOut = () => (
  <svg className="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M4 10l6-6m0 0H5m5 0v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getProjectMedia(project: Project) {
  const videos = project.images.filter(
    (img) => img.src && img.src.toLowerCase().endsWith(".mp4"),
  );
  const images = project.images.filter(
    (img) =>
      img.isReal &&
      img.src &&
      !img.src.toLowerCase().endsWith(".mp4"),
  );
  return { videos, images };
}

function ProjectVideoStack({
  videos,
  urlLabel,
  visualVariant,
}: {
  videos: ProjectImage[];
  urlLabel: string;
  visualVariant?: FeaturedProjectDisplay["visualVariant"];
}) {
  const variantClass =
    visualVariant === "alt" ? "alt" : visualVariant === "dark" ? "dark" : "";

  return (
    <div className="project-videos">
      {videos.map((video) => (
        <figure
          key={video.src}
          className={`project-video-wrap ${variantClass}`.trim()}
        >
          <div className="pv-bar">
            <span className="b-dot" />
            <span className="b-dot" />
            <span className="b-dot" />
            <span className="url">{urlLabel}</span>
          </div>
          <video controls preload="metadata" playsInline>
            <source src={video.src} type="video/mp4" />
          </video>
          {video.caption && (
            <figcaption className="project-video-caption">{video.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function ProjectImageStack({
  images,
  urlLabel,
  visualVariant,
}: {
  images: ProjectImage[];
  urlLabel: string;
  visualVariant?: FeaturedProjectDisplay["visualVariant"];
}) {
  const variantClass =
    visualVariant === "alt" ? "alt" : visualVariant === "dark" ? "dark" : "";

  return (
    <div className="project-videos">
      {images.map((image) => (
        <figure
          key={image.src}
          className={`project-video-wrap project-image-wrap ${variantClass}`.trim()}
        >
          <div className="pv-bar">
            <span className="b-dot" />
            <span className="b-dot" />
            <span className="b-dot" />
            <span className="url">{urlLabel}</span>
          </div>
          <div className="project-image-frame">
            <Image
              src={image.src}
              alt={image.alt}
              width={1280}
              height={720}
              className="project-image"
            />
          </div>
          {image.caption && (
            <figcaption className="project-video-caption">{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function ProjectVisual({
  display,
}: {
  display: FeaturedProjectDisplay;
}) {
  const variantClass =
    display.visualVariant === "alt"
      ? "alt"
      : display.visualVariant === "dark"
        ? "dark"
        : "";

  return (
    <div className={`project-visual ${variantClass}`.trim()}>
      <div className="pv-bar">
        <span className="b-dot" />
        <span className="b-dot" />
        <span className="b-dot" />
        <span className="url">{display.urlLabel}</span>
      </div>

      {display.visualVariant === "alt" ? (
        <div className="p-mock">
          <div className="row">
            <div className="block lg" style={{ background: "#fff", maxWidth: "140px" }} />
          </div>
          <div
            className="p-mock"
            style={{
              position: "static",
              inset: "unset",
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "8px",
            }}
          >
            <div className="tile" />
            <div className="tile b" />
            <div className="tile c" />
            <div className="tile c" />
            <div className="tile" />
            <div className="tile b" />
          </div>
          <div className="row">
            <div className="block accent" />
            <div
              className="block sm"
              style={{ background: "var(--ink)", width: "90px", flex: "0 0 90px" }}
            />
          </div>
        </div>
      ) : display.visualVariant === "dark" ? (
        <div className="p-mock">
          <div className="row">
            <div
              className="block lg"
              style={{ background: "rgba(255,255,255,0.08)", maxWidth: "180px" }}
            />
          </div>
          <div className="row" style={{ flex: 1 }}>
            <div
              className="card-mini"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                maxWidth: "120px",
              }}
            >
              <div className="block" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div className="block" style={{ background: "rgba(255,255,255,0.1)", width: "70%" }} />
              <div className="block" style={{ background: "rgba(79,140,255,0.4)" }} />
            </div>
            <div
              className="card-mini"
              style={{
                background: "linear-gradient(135deg,#1e293b,#0f172a)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            />
          </div>
        </div>
      ) : display.index.startsWith("04") ? (
        <div className="p-mock">
          <div className="grid-mini" style={{ gridTemplateColumns: "repeat(2,1fr)", flex: 1 }}>
            <div className="tile b" />
            <div className="tile" />
            <div className="tile c" />
            <div className="tile" />
          </div>
        </div>
      ) : (
        <div className="p-mock">
          <div className="row">
            <div className="block lg accent" style={{ maxWidth: "200px" }} />
            <div className="block sm" />
            <div className="block sm" />
          </div>
          <div className="row" style={{ flex: 1 }}>
            <div className="card-mini">
              <div className="block sm" />
              <div className="block lg" />
              <div className="block" />
              <div className="block" style={{ width: "60%" }} />
            </div>
            <div className="card-mini">
              <div className="block sm" />
              <div className="block lg" />
              <div className="block" />
              <div className="block" style={{ width: "80%" }} />
            </div>
            <div className="card-mini">
              <div className="block sm" />
              <div className="block lg accent" />
              <div className="block" />
              <div className="block" style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectMedia({
  project,
  display,
}: {
  project: Project;
  display: FeaturedProjectDisplay;
}) {
  const { videos, images } = getProjectMedia(project);

  if (videos.length > 0) {
    return (
      <ProjectVideoStack
        videos={videos}
        urlLabel={display.urlLabel}
        visualVariant={display.visualVariant}
      />
    );
  }

  if (images.length > 0) {
    return (
      <ProjectImageStack
        images={images}
        urlLabel={display.urlLabel}
        visualVariant={display.visualVariant}
      />
    );
  }

  return <ProjectVisual display={display} />;
}

function getProjectThumbnail(project: Project) {
  return project.images.find(
    (img) =>
      img.isReal &&
      img.src &&
      !img.src.toLowerCase().endsWith(".mp4"),
  );
}

const featuredIdSet = new Set<string>(FEATURED_PROJECT_IDS);

function sortMoreProjects(a: Project, b: Project) {
  const yearDiff = Number(b.year) - Number(a.year);
  if (yearDiff !== 0) return yearDiff;
  return (Number(b.number) || 0) - (Number(a.number) || 0);
}

const MORE_PROJECTS = PROJECTS.filter((p) => !featuredIdSet.has(p.id)).sort(sortMoreProjects);

const MORE_CLIENT = MORE_PROJECTS.filter((p) => p.category !== "concept");
const MORE_CONCEPTS = MORE_PROJECTS.filter((p) => p.category === "concept");

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  client: "Client work",
  concept: "Design concept",
};

function resolveThumbFit(project: Project): ProjectThumbFit {
  if (project.thumbFit) return project.thumbFit;
  return project.category === "concept" ? "preview" : "logo";
}

function MoreWorkCard({ project }: { project: Project }) {
  const thumb = getProjectThumbnail(project);
  const thumbFit = resolveThumbFit(project);
  const isExternal = project.caseStudyHref?.startsWith("http") ?? false;
  const category = project.category ?? "client";

  const card = (
    <>
      <div className={`more-work-thumb more-work-thumb--${thumbFit}`}>
        {thumb ? (
          <Image
            src={thumb.src}
            alt={thumb.alt}
            width={1024}
            height={528}
            className="more-work-image"
            style={{
              objectFit: "contain",
              objectPosition: thumbFit === "preview" ? "top center" : "center",
            }}
          />
        ) : (
          <span className="more-work-placeholder">{project.title}</span>
        )}
      </div>
      <div className="more-work-body">
        <div className="more-work-meta">
          <span className="more-work-meta-left">
            <span>{project.year}</span>
            <span className={`more-work-category more-work-category--${category}`}>
              {CATEGORY_LABEL[category]}
            </span>
          </span>
          <span>{project.role}</span>
        </div>
        <h4 className="more-work-name">{project.title}</h4>
        <p className="more-work-desc">{project.description}</p>
        <div className="tags more-work-tags">
          {project.tech.slice(0, 4).map((t) => (
            <span className="chip chip-tag" key={t}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="chip chip-tag">+{project.tech.length - 4}</span>
          )}
        </div>
        {project.caseStudyHref && (
          <span className="more-work-link">
            {category === "concept" ? "View concept" : "View project"} <ArrowOut />
          </span>
        )}
      </div>
    </>
  );

  if (project.caseStudyHref) {
    return (
      <a
        className="card more-work-card reveal"
        href={project.caseStudyHref}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {card}
      </a>
    );
  }

  return <article className="card more-work-card reveal">{card}</article>;
}

function MoreWorkGroup({
  title,
  lede,
  projects,
}: {
  title: string;
  lede: string;
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return (
    <div className="more-work-group">
      <div className="more-work-group-head">
        <h4 className="more-work-group-title">{title}</h4>
        <p className="more-work-group-lede">{lede}</p>
      </div>
      <div className="more-work-grid">
        {projects.map((project) => (
          <MoreWorkCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function MoreWork() {
  if (MORE_PROJECTS.length === 0) return null;

  return (
    <div className="more-work reveal">
      <div className="more-work-head">
        <div className="eyebrow">
          <span className="dot" />
          More work
        </div>
        <h3 className="more-work-title">Beyond the featured four.</h3>
        <p className="lede more-work-lede">
          Client builds and design explorations — each with a live preview or deployment.
        </p>
      </div>

      <MoreWorkGroup
        title="Shipped work"
        lede="Production sites and products delivered for clients and teams."
        projects={MORE_CLIENT}
      />

      <MoreWorkGroup
        title="Design concepts"
        lede="UI explorations, portfolio variants, and experimental layouts — separate from shipped client work."
        projects={MORE_CONCEPTS}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <div className="projects-head">
          <div>
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot" />
                Selected work
              </div>
            </div>
            <h2 className="h-section reveal d1">
              Things I&apos;ve built
              <br />
              that I&apos;m proud of.
            </h2>
          </div>
          <p className="lede reveal d2">
            Five hand-picked projects from recent years • each shipped to production and used by real people every day.
          </p>
        </div>

        <div className="projects-stack">
          {FEATURED_PROJECTS.map((display) => {
            const project = PROJECTS.find((p) => p.id === display.projectId);
            if (!project) return null;

            const { videos } = getProjectMedia(project);

            return (
              <article
                className={`project-entry reveal${videos.length > 0 ? " project-entry--videos" : ""}`}
                key={display.projectId}
              >
                <div className="project-meta">
                  <div
                    className="index"
                    style={{ fontFamily: "var(--nf-mono, monospace)" }}
                  >
                    {display.index} • {project.year}
                  </div>
                  <h3>{display.title}</h3>
                  <div
                    className="role"
                    style={{ fontFamily: "var(--nf-mono, monospace)" }}
                  >
                    {display.role}
                  </div>
                  <p className="desc">{project.description}</p>
                  <div className="tags">
                    {project.tech.map((t) => (
                      <span className="chip chip-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.caseStudyHref && (
                    <div className="proj-links">
                      <a
                        className="btn btn-ghost"
                        href={project.caseStudyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ height: "42px" }}
                      >
                        Live site <ArrowOut />
                      </a>
                    </div>
                  )}
                </div>

                <ProjectMedia project={project} display={display} />
              </article>
            );
          })}
        </div>

        <MoreWork />
      </div>
    </section>
  );
}
