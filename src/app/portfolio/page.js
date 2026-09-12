import React from 'react';
import Container from '../../components/Common/Container';
import PortfolioListClient from '../../components/Portfolio/PortfolioListClient';
import { siteData } from '../../data/siteData';

export const metadata = {
  title: "Portfolio | Digital Case Studies & Web Architecture — Orbit Digital",
  description: "Explore Orbit Digital's portfolio of web development, UI/UX design, cloud platforms, and brand systems for fast-growing businesses.",
  openGraph: {
    title: "Portfolio | Digital Case Studies & Web Architecture — Orbit Digital",
    description: "Explore Orbit Digital's portfolio of web development, UI/UX design, cloud platforms, and brand systems for fast-growing businesses.",
    url: "https://orbitdigital.app/portfolio",
    siteName: "Orbit Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function PortfolioPage() {
  const { hero, categories, projects } = siteData.portfolio;

  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">{hero.badge}</span>
            <h1 className="heading-display frprotech-hero-title frprotech-fade-item fade-2" style={{ marginBlock: '16px 24px' }}>
              {hero.titlePart}
              <span className="frprotech-gradient-text">{hero.highlight}</span>
            </h1>
            <p className="text-lead">
              {hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <PortfolioListClient categories={categories} projects={projects} />
        </Container>
      </section>
    </>
  );
}
