'use client';
import React, { useEffect, useRef } from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';
import { siteData } from '../../data/siteData';

export default function HeroSection() {
  const { hero } = siteData.home;
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (reduceMotion || !hasFinePointer) return;

    const heroSection = heroRef.current;
    const cursorGlow = glowRef.current;
    if (!heroSection || !cursorGlow) return;

    let raf = null;

    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (cursorGlow) {
          cursorGlow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        raf = null;
      });
    };

    const handleMouseEnter = () => {
      if (cursorGlow) cursorGlow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorGlow) cursorGlow.style.opacity = '0';
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseenter', handleMouseEnter);
    heroSection.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseenter', handleMouseEnter);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="section frprotech-hero-section" id="heroSection">
      {/* Background: Signal Path (circuit-trace lines + traveling pulses + cursor-follow glow) */}
      <div className="frprotech-hero-bg">
        <div className="frprotech-hero-gradient-overlay" />

        <svg className="signal-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path className="signal-path path-a" d="M 80 500 L 80 320 L 220 320 L 220 180" />
          <path className="signal-path path-b" d="M 1120 500 L 1120 300 L 980 300 L 980 160" />
          <path className="signal-path path-c" d="M 300 60 L 500 60 L 500 20" />
          <path className="signal-path path-d" d="M 150 500 L 350 500 L 350 420" />

          <circle className="signal-node node-a1" cx="80" cy="500" r="3.5" fill="var(--color-primary)" />
          <circle className="signal-node node-a2" cx="220" cy="180" r="4" fill="var(--color-primary)" />
          <circle className="signal-node node-b1" cx="1120" cy="500" r="3.5" fill="var(--color-accent)" />
          <circle className="signal-node node-b2" cx="980" cy="160" r="4" fill="var(--color-accent)" />
          <circle className="signal-node node-c1" cx="500" cy="20" r="3" fill="var(--color-primary)" />
          <circle className="signal-node node-d1" cx="350" cy="420" r="3" fill="var(--color-accent)" />

          <circle className="signal-pulse glow-primary-pulse pulse-a1" r="3" fill="var(--color-primary)" />
          <circle className="signal-pulse glow-primary-pulse pulse-a2" r="3" fill="var(--color-primary)" />
          <circle className="signal-pulse glow-accent-pulse pulse-b1" r="3" fill="var(--color-accent)" />
          <circle className="signal-pulse glow-accent-pulse pulse-b2" r="3" fill="var(--color-accent)" />
          <circle className="signal-pulse glow-primary-pulse pulse-c1" r="2.5" fill="var(--color-primary)" />
          <circle className="signal-pulse glow-accent-pulse pulse-d1" r="2.5" fill="var(--color-accent)" />
        </svg>

        <div ref={glowRef} className="cursor-glow" id="cursorGlow" />
        <div className="frprotech-hero-vignette" />
      </div>

      <Container>
        {/* Content is visible immediately, animations are additive */}
        <div className="frprotech-hero-content is-animated" id="heroContent">

          <div className="frprotech-fade-item fade-1">
            <span className="frprotech-top-badge">
              <span className="frprotech-badge-star">★</span>
              <span>{hero.badge}</span>
            </span>
          </div>

          <h1 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
            {hero.titlePart1}
            <span className="frprotech-gradient-text">{hero.titleHighlight1}</span>
            {hero.titlePart2}
            <span className="frprotech-gradient-text">{hero.titleHighlight2}</span>
            {hero.titlePart3}
          </h1>

          <p className="text-lead frprotech-hero-desc frprotech-fade-item fade-3">
            {hero.description}
          </p>

          <div className="frprotech-cta-group frprotech-fade-item fade-4">
            <Button href={hero.primaryCta.href} variant="primary" size="lg" className="frprotech-btn-pill">
              {hero.primaryCta.text}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg" className="frprotech-btn-pill">
              {hero.secondaryCta.text}
            </Button>
          </div>

          <div className="frprotech-metrics-row frprotech-fade-item fade-5">
            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <span>{hero.metrics[0].label}</span>
            </div>

            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span>{hero.metrics[1].label}</span>
            </div>

            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span>{hero.metrics[2].label}</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
