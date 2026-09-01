import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import ServiceCard from '../../components/Services/ServiceCard';
import { servicesData } from '../../data/services';

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
      <section className="section section-bg-surface">
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

      <section className="section">
        <Container>
          <SectionHeading
            badge="Solutions Portfolio"
            title="Designed for Infinite Scale & Growth"
            description="Explore our specialized services built using native CSS, modern Next.js App Router, and robust cloud APIs."
            align="center"
          />

          <div className="grid grid-3">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
