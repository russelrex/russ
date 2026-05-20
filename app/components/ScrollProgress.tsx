"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const sp = document.getElementById("scrollProgress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      if (sp) sp.style.width = `${(h.scrollTop / max) * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" id="scrollProgress" />;
}
