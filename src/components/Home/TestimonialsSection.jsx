import React from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section section-bg-surface">
      <Container>
        <SectionHeading
          badge="Client Testimonials"
          title="Trusted by Fast-Growing Enterprise Teams"
          description="Hear what digital leaders say about partnering with Orbit Digital for product development and web architecture."
          align="center"
        />

        <div className="grid grid-2">
          {testimonialsData.map((item) => (
            <div key={item.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#F59E0B', fontSize: '1.2rem' }}>
                  {'★'.repeat(item.rating)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-text)', marginBottom: '24px', lineHeight: '1.6' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem' }}>
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>{item.author}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {item.role} • <strong style={{ color: 'var(--color-secondary)' }}>{item.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
