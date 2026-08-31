import React from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: '1. Develop',
      description: 'We build the digital home your brand lives in — a WordPress site, a Shopify store, or a fully custom Next.js web app engineered for speed and built to scale as your business grows.'
    },
    {
      number: '02',
      title: '2. Automate',
      description: 'We connect the tools you already use and remove the manual, repetitive work slowing your team down — from lead follow-ups to customer support — using AI automation and smart integrations.'
    },
    {
      number: '03',
      title: '3. Create',
      description: 'We design the visuals your audience actually stops scrolling for — logos, brand identities, social content, and video edits that make your brand instantly recognizable.'
    },
    {
      number: '04',
      title: '4. Grow',
      description: 'We turn traffic into revenue with organic social growth, paid performance campaigns, and technical SEO — tracked against real numbers, not vanity metrics.'
    }
  ];

  return (
    <section className="section">
      <Container>
        <SectionHeading
          badge="What We Do"
          title="What We Do — Four Ways We Help You Win"
          description="Everything we do falls under four connected pillars. You can start with one, or run all four together as a single growth engine."
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
