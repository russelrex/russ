"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-espresso/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "py-3" : "py-[18px]"
      }`}
      style={{
        background: "rgba(242,233,221,0.85)",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      <Link
        href="/"
        className="text-[17px] font-extrabold tracking-tight text-espresso no-underline"
      >
        Your Name
      </Link>
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm font-medium text-espresso/60 no-underline hover:text-espresso transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#contact"
            className="bg-coral text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(242,108,94,0.35)] transition-all"
          >
            Let&apos;s Talk
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link href="/about" className="duration-200 text-zinc-400 hover:text-zinc-100">
              About Me
            </Link>
            <Link href="/projects" className="duration-200 text-zinc-400 hover:text-zinc-100">
              Projects
            </Link>
            <Link href="/contact" className="duration-200 text-zinc-400 hover:text-zinc-100">
              Contact
            </Link>
          </div>

          <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
