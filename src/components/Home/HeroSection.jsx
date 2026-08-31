import React from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';

// Static server component — no JS, no hydration cost, instant FCP/LCP.
// The animated gradient text and the dot background are pure CSS.
export default function HeroSection() {
  return (
    <section className="section frprotech-hero-section">
      {/* Background: pure CSS dot grid, no JS nodes */}
      <div className="frprotech-hero-bg">
        <div className="frprotech-hero-gradient-overlay" />
        <div className="frprotech-hero-dots-container frprotech-css-dots" aria-hidden="true" />
        <div className="frprotech-orb orb-left" aria-hidden="true" />
        <div className="frprotech-orb orb-right" aria-hidden="true" />
        <div className="frprotech-hero-vignette" />
      </div>

      <Container>
        {/* No mounted-gate — content is visible immediately, animations are additive */}
        <div className="frprotech-hero-content is-animated">

          <div className="frprotech-fade-item fade-1">
            <span className="frprotech-top-badge">
              <span className="frprotech-badge-star">★</span>
              <span>Top Rated Product &amp; Engineering Agency</span>
            </span>
          </div>

          <h1 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
            If People <span className="frprotech-gradient-text">Don&apos;t Understand</span> Your Product, They <span className="frprotech-gradient-text">Won&apos;t Trust</span> It.
          </h1>

          <p className="text-lead frprotech-hero-desc frprotech-fade-item fade-3">
            Orbit Digital helps brands develop fast websites, automate everyday workflows with AI, create scroll-stopping content, and grow revenue with performance marketing and SEO — all from one team, so nothing gets lost between agencies.
          </p>

          <div className="frprotech-cta-group frprotech-fade-item fade-4">
            <Button href="/contact" variant="primary" size="lg" className="frprotech-btn-pill">
              Book a Free Consultation ↗
            </Button>
            <Button href="/services" variant="secondary" size="lg" className="frprotech-btn-pill">
              See Our Services ↗
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
              <span>3,000+ Projects Completed</span>
            </div>

            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span>2,000+ 5-Star Reviews</span>
            </div>

            <div className="frprotech-metric-card">
              <div className="frprotech-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
