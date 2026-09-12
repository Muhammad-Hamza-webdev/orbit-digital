import React from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';
import SplashCursor from './SplashCursor';
import { siteData } from '../../data/siteData';

export default function HeroSection() {
  const { hero } = siteData.home;

  return (
    <section className="section frprotech-hero-section" id="heroSection">
      <div className="frprotech-hero-bg">
        <div className="frprotech-hero-gradient-overlay" />
        <div className="frprotech-hero-vignette" />
      </div>

      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />

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
