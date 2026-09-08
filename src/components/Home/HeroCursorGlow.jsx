"use client";

import { useEffect, useRef } from "react";

export default function HeroCursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || !hasFinePointer) return;

    const cursorGlow = glowRef.current;
    const heroSection = cursorGlow?.closest("#heroSection");
    if (!heroSection || !cursorGlow) return;

    let raf = null;
    let cachedRect = null;

    const updateRect = () => {
      cachedRect = heroSection.getBoundingClientRect();
    };

    const handleMouseEnter = () => {
      updateRect();
      cursorGlow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursorGlow.style.opacity = "0";
    };

    const handleMouseMove = (e) => {
      if (!cachedRect) updateRect();
      const x = e.clientX - cachedRect.left;
      const y = e.clientY - cachedRect.top;

      if (raf) return;
      raf = requestAnimationFrame(() => {
        cursorGlow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        raf = null;
      });
    };

    heroSection.addEventListener("mousemove", handleMouseMove, { passive: true });
    heroSection.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    heroSection.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", updateRect, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseenter", handleMouseEnter);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" id="cursorGlow" />;
}
