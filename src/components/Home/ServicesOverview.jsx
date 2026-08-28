import React from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';
import ServiceCard from '../Services/ServiceCard';
import Button from '../Common/Button';
import { servicesData } from '../../data/services';

export default function ServicesOverview({ limit = 6 }) {
  const displayedServices = servicesData.slice(0, limit);

  return (
    <section className="section">
      <Container>
        <SectionHeading
          badge="Core Capabilities"
          title="End-to-End Digital Engineering Services"
          description="We blend cutting-edge frontend architecture, intuitive UX design, and robust cloud services to build scalable digital products."
          align="center"
        />

        <div className="grid grid-3" style={{ marginBottom: '48px' }}>
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button href="/services" variant="accent" size="lg">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
