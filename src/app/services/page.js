import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import ServiceCard from '../../components/Services/ServiceCard';
import CTASection from '../../components/Common/CTASection';
import { siteData } from '../../data/siteData';

export const metadata = {
  title: "Our Services | Web Development, AI Automation, Design & Marketing — Orbit Digital",
  description: "Explore Orbit Digital's services: WordPress & Shopify development, custom Next.js websites, AI automation, graphic design, video editing, social media, performance marketing, and SEO.",
  openGraph: {
    title: "Our Services | Web Development, AI Automation, Design & Marketing — Orbit Digital",
    description: "Explore Orbit Digital's services: WordPress & Shopify development, custom Next.js websites, AI automation, graphic design, video editing, social media, performance marketing, and SEO.",
    url: "https://orbitdigital.app/services",
    siteName: "Orbit Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  const { hero, categories, cta } = siteData.services;

  return (
    <>
      {/* 1. Hero Section */}
      <section className="section section-bg-surface">
        <Container>
          <div className="section-heading section-heading--wide text-center">
            <span className="section-badge">{hero.badge}</span>
            <h1 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
              {hero.titlePart}
              <span className="frprotech-gradient-text">{hero.highlight}</span>
            </h1>
            <p className="text-lead">
              {hero.description}
            </p>

            {/* Quick Category Jump Bar */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '32px' }}>
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="btn btn-secondary btn-sm"
                >
                  {cat.title} ({cat.services.length})
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Four Service Categories */}
      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          style={{ scrollMarginTop: '90px' }}
          className={`section services-category-section ${index % 2 === 1 ? 'section-bg-surface' : ''}`}
        >
          <Container>
            <SectionHeading
              badge={category.badge}
              title={category.heading}
              description={category.description}
            />

            <div className="grid grid-2" style={{ marginTop: '36px' }}>
              {category.services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* 3. Closing CTA */}
      <CTASection
        titlePart={cta.titlePart}
        titleHighlight={cta.titleHighlight}
        titleQuestion={cta.titleQuestion}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
        buttonVariant={cta.buttonVariant}
        bgSurface={cta.bgSurface}
      />
    </>
  );
}
