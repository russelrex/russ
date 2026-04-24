"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/app/data/config";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["Skills", "Projects", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <span className={styles.logo}>{siteConfig.name}</span>
      <ul className={styles.links}>
        {NAV_LINKS.map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
