import React from 'react';
import Container from '../Common/Container';
import Button from '../Common/Button';

export default function ClosingCTA() {
  return (
    <section className="section section-bg-surface">
      <Container>
        <div className="card cta-banner-card">
          <h2 className="heading-2 cta-banner-card__title">
            Ready to Build Something That <span className="frprotech-gradient-text">Actually Converts</span>?
          </h2>
          <p className="cta-banner-card__text">
            Tell us where your website, marketing, or workflow is falling short — we&apos;ll show you exactly how Orbit Digital can fix it.
          </p>
          <Button href="/contact" variant="accent" size="lg" className="frprotech-btn-pill">
            Start Your Project ↗
          </Button>
        </div>
      </Container>
    </section>
  );
}
