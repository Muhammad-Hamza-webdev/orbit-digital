import React from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';

export default function HeroSection() {
  return (
    <section className="section hero-frprotech-style">
      {/* Ambient background glow & dot grid overlay */}
      <div className="hero-bg-glow" />

      <Container>
        <div className="hero-center-content">
          
          {/* Top Badge */}
          <div className="hero-top-badge-wrapper">
            <span className="hero-top-badge">
              <span className="hero-top-badge-icon">★</span>
              <span>Top Rated Product & Engineering Agency</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-display hero-title">
            If People <span className="text-gradient">Don't Understand</span> Your Product, They <span className="text-gradient">Won't Trust</span> It.
          </h1>

          {/* Subtitle */}
          <p className="text-lead hero-description">
            We turn unclear, forgettable digital products into clear, credible ones with Next.js architecture, UI/UX design, SEO, and high-converting web applications that win trust and customers.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <Button href="/contact" variant="primary" size="lg" className="hero-btn-pill">
              Get Started ↗
            </Button>
            <Button href="/services" variant="secondary" size="lg" className="hero-btn-pill">
              View Services ↗
            </Button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="hero-metrics-row">
            <div className="hero-metric-item">
              <div className="hero-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <span className="hero-metric-text">3,000+ Projects Completed</span>
            </div>

            <div className="hero-metric-item">
              <div className="hero-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="hero-metric-text">2,000+ 5-Star Reviews</span>
            </div>

            <div className="hero-metric-item">
              <div className="hero-metric-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="hero-metric-text">10 Years Experience</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
