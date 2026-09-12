import React from 'react';
import Container from '../Common/Container';
import { siteData } from '../../data/siteData';

export default function ProcessSection() {
  const { badge, title, highlight, description, steps } = siteData.home.process;

  return (
    <section className="section padding-top-zero">
      <Container>
        <div className="section-heading text-center">
          <span className="section-badge">{badge}</span>
          <h2 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
            {title}
            <span className="frprotech-gradient-text">{highlight}</span>
          </h2>
          <p className="text-lead" style={{ marginTop: '12px' }}>
            {description}
          </p>
        </div>

        <div className="grid grid-2 sm-gap">
          {steps.map((step) => (
            <div key={step.number} className="card card-hover" style={{ position: 'relative' }}>
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
