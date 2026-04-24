import { siteConfig } from "@/app/data/config";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        {`© ${year} ${siteConfig.name}. Built with care.`}
      </p>
      <p className={styles.location}>{siteConfig.location}</p>
    </footer>
  );
}
