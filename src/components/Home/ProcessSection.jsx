import React from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Architecture',
      description: 'We audit legacy bottlenecks, identify core technical requirements, and define scalable Next.js architecture blueprints.'
    },
    {
      number: '02',
      title: 'UI/UX & Fluid Systems',
      description: 'We design high-converting visual systems, design tokens, and fluid layout rules that adapt seamlessly from 320px to 4K.'
    },
    {
      number: '03',
      title: 'Agile Engineering',
      description: 'Our developers implement clean, modular, zero-dependency code with strict Core Web Vitals performance benchmarks.'
    },
    {
      number: '04',
      title: 'Quality Assurance & Launch',
      description: 'Rigorous cross-device testing across 15+ resolution points, security auditing, and continuous production deployment.'
    }
  ];

  return (
    <section className="section">
      <Container>
        <SectionHeading
          badge="Our Delivery Process"
          title="Engineered for Precision & Velocity"
          description="How we take complex digital requirements and deliver production-ready web products."
          align="center"
        />

        <div className="grid grid-4">
          {steps.map((step, idx) => (
            <div key={idx} className="card card-hover" style={{ position: 'relative' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary-light)', position: 'absolute', top: '20px', right: '24px' }}>
                {step.number}
              </span>
              <h3 className="heading-4" style={{ marginBottom: '16px', marginTop: '12px' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
