"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import ProjectGallery from "./ProjectGallery";
import type { Project } from "../data/projects";

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-20 border-t border-espresso/[0.08] first:border-t-0"
    >
      <motion.div
        className={`lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-sage mb-3 block">
          {project.role} · {project.year}
        </span>
        <h3 className="font-black text-[clamp(28px,3.5vw,44px)] tracking-tight text-espresso leading-none mb-5">
          {project.title}
        </h3>
        <p className="text-[16px] text-espresso/60 leading-[1.7] mb-6 max-w-[420px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[12px] font-semibold px-[12px] py-[5px] rounded-full bg-espresso/[0.06] border border-espresso/[0.10] text-espresso/60"
            >
              {t}
            </span>
          ))}
        </div>

        {project.caseStudyHref && (
          <Link
            href={project.caseStudyHref}
            className="inline-flex items-center gap-2 text-[14px] font-bold text-coral no-underline hover:gap-3 transition-all"
          >
            View Case Study
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </motion.div>

      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <ProjectGallery images={project.images} />
      </div>
    </div>
  );
}
