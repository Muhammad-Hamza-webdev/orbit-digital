import React from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';

export default function CtaSection() {
  return (
    <section className="section section-bg-dark" style={{ textAlign: 'center' }}>
      <Container>
        <div style={{ maxWidth: '760px', marginInline: 'auto' }}>
          <span className="section-badge section-badge-accent" style={{ marginBottom: '20px' }}>
            Ready to Accelerate?
          </span>
          
          <h2 className="heading-1" style={{ marginBottom: '20px', color: '#FFFFFF' }}>
            Let's Build Your Next <span className="text-gradient">Fluid Digital</span> Experience.
          </h2>

          <p className="text-lead" style={{ marginBottom: '36px', color: 'var(--color-text-light)' }}>
            Schedule a technical strategy session with Orbit Digital architects today. We'll analyze your requirements and deliver a detailed engineering roadmap.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href="/services" variant="accent" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
