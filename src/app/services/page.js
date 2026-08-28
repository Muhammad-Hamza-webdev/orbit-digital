import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import ServiceCard from '../../components/Services/ServiceCard';
import CtaSection from '../../components/Home/CtaSection';
import { servicesData } from '../../data/services';

export const metadata = {
  title: "Our Services | Orbit Digital",
  description: "Explore Orbit Digital's full-stack digital product engineering, Next.js architecture, UI/UX design, and cloud solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">Capabilities</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              Full-Stack Digital <span className="text-gradient">Engineering Services</span>
            </h1>
            <p className="text-lead">
              From initial architecture discovery to production cloud deployment, Orbit Digital delivers end-to-end engineering tailored for enterprise performance.
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

      <CtaSection />
    </>
  );
}
