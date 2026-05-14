"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/app/data/config";
import { SKILLS } from "@/app/data/skills";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const nameParts = siteConfig.name.split(" ");
  const first = nameParts[0] ?? siteConfig.name;
  const second = nameParts[1] ?? "";

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gradient} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.inner}>
          <motion.div
            className={styles.photoWrap}
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.photo}>
              <Image
                src="/rr.jpg"
                alt={siteConfig.name}
                width={240}
                height={240}
                className={styles.photoImg}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.text}
            variants={fadeUp}
            custom={0.45}
            initial="hidden"
            animate="visible"
          >
            {siteConfig.available && (
              <p className={styles.eyebrow}>Available for opportunities</p>
            )}
            <h1 className={styles.name}>
              {first}
              <br />
              {second}
            </h1>
            <p className={styles.title}>{siteConfig.title}</p>
            <p className={styles.desc}>
              I build thoughtful digital products and deliver clean, intuitive user
              experiences with scalable full-stack architecture.
            </p>
            <div className={styles.ctas}>
              <a href="#projects" className="btn btn-coral">
                View my work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        <div id="skills" className={styles.skillsRegion}>
          <motion.p
            className={styles.skillsLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Capabilities
          </motion.p>

          <motion.h2
            className={styles.skillsTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Skills &amp; Technologies
          </motion.h2>

          <div className={styles.skillsGrid}>
            {SKILLS.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className={styles.skillGroupTitle}>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
