"use client";

import React, { useEffect, useState } from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate grid matrix of animated floating dots matching frprotech hero background
  const dotColumns = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];
  const dotRows = [10, 30, 50, 70, 90, 110];

  return (
    <section className="section frprotech-hero-section">
      {/* Background Animated Layer */}
      <div className="frprotech-hero-bg">
        <div className="frprotech-hero-gradient-overlay" />

        {/* Floating Matrix Particle Dots */}
        <div className="frprotech-hero-dots-container">
          {dotRows.map((top, rIdx) =>
            dotColumns.map((left, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                className="frprotech-floating-dot"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${(rIdx + cIdx) * 0.3}s`,
                  animationDuration: `${4 + ((rIdx * cIdx) % 5)}s`
                }}
              />
            ))
          )}
          {/* Ambient Accent Floating Orbs */}
          <div className="frprotech-orb orb-left" />
          <div className="frprotech-orb orb-right" />
        </div>

        {/* Vignette radial mask */}
        <div className="frprotech-hero-vignette" />
      </div>

      <Container>
        <div className={`frprotech-hero-content ${mounted ? 'is-animated' : ''}`}>
          
          {/* Top Badge */}
          <div className="frprotech-fade-item fade-1">
            <span className="frprotech-top-badge">
              <span className="frprotech-badge-star">★</span>
              <span>Top Rated Product & Engineering Agency</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
            If People <span className="frprotech-gradient-text">Don't Understand</span> Your Product, They <span className="frprotech-gradient-text">Won't Trust</span> It.
          </h1>

          {/* Subtitle */}
          <p className="text-lead frprotech-hero-desc frprotech-fade-item fade-3">
            We turn unclear, forgettable digital products into clear, credible ones with Next.js architecture, UI/UX design, SEO, and high-converting web applications that win trust and customers.
          </p>

          {/* CTA Group */}
          <div className="frprotech-cta-group frprotech-fade-item fade-4">
            <Button href="/contact" variant="primary" size="lg" className="frprotech-btn-pill">
              Get Started ↗
            </Button>
            <Button href="/services" variant="secondary" size="lg" className="frprotech-btn-pill">
              View Services ↗
            </Button>
          </div>

          {/* Trust Metrics Row */}
          <div className="frprotech-metrics-row frprotech-fade-item fade-5">
            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <span>3,000+ Projects Completed</span>
            </div>

            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span>2,000+ 5-Star Reviews</span>
            </div>

            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span>10 Years Experience</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
