import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import ServiceCard from '../../components/Services/ServiceCard';
import Button from '../../components/Common/Button';
import { serviceCategories } from '../../data/services';

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
  return (
    <>
      {/* 1. Hero Section */}
      <section className="section section-bg-surface" style={{ paddingBottom: 'clamp(40px, 6vw, 80px)' }}>
        <Container>
          <div className="section-heading section-heading--wide text-center">
            <span className="section-badge">Our Services</span>
            <h1 className="heading-1">
              Everything Your Brand Needs to <span className="text-gradient">Develop, Automate, Create, and Grow.</span>
            </h1>
            <p className="text-lead">
              We group our services into four categories so you always know exactly where to start.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Four Service Categories */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`section services-category-section ${index % 2 === 1 ? 'section-bg-surface' : ''}`}
        >
          <Container>
            <SectionHeading
              badge={category.badge}
              title={category.heading}
              description={category.description}
            />

            <div className="grid grid-2" style={{ marginTop: '36px' }}>
              {category.services.map((service, sIdx) => (
                <ServiceCard key={sIdx} service={service} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* 3. Closing CTA */}
      <section className="section">
        <Container>
          <div className="card cta-banner-card">
            <h2 className="heading-2 cta-banner-card__title">
              Not Sure Which Service Fits Your Business?
            </h2>
            <p className="cta-banner-card__text">
              Tell us what&apos;s not working today — we&apos;ll recommend the right mix of Develop, Automate, Create, and Grow for your goals and budget.
            </p>
            <Button href="/contact" variant="accent" size="lg" className="frprotech-btn-pill">
              Talk to Our Team ↗
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
