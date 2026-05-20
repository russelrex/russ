import { siteConfig } from "@/app/data/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot">
          <div>© 2026 Russel Rex · Built with care in the Philippines</div>
          <div className="foot-links">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
