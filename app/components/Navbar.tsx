export default function Navbar() {
  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top">
          <span className="mark" />
          <span>Russ</span>
        </a>
        <a className="nav-link hide-sm" href="#work">Work</a>
        <a className="nav-link hide-sm" href="#skills">Stack</a>
        <a className="nav-link hide-sm" href="#services">Services</a>
        <a className="nav-link hide-sm" href="#about">About</a>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">→</span>
        </a>
      </nav>
    </div>
  );
}
