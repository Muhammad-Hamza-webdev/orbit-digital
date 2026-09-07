import React from 'react';
import Container from '../../components/Common/Container';
import ContactForm from '../../components/Contact/ContactForm';

export const metadata = {
  title: "Contact Orbit Digital | Get a Free Consultation",
  description: "Get in touch with Orbit Digital for web development, AI automation, design, or digital marketing. Book a free consultation and get a response within one business day.",
  openGraph: {
    title: "Contact Orbit Digital | Get a Free Consultation",
    description: "Get in touch with Orbit Digital for web development, AI automation, design, or digital marketing. Book a free consultation and get a response within one business day.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">Get in Touch</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              Let's Build Your <span className="text-gradient">Next Project</span>.
            </h1>
            <p className="text-lead">
              Tell us a bit about your business and what you're looking to develop, automate, create, or grow — we'll get back to you within one business day with next steps and, if it's a fit, a free consultation call.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            
            {/* Contact Information & Channels */}
            <div>
              <span className="section-badge section-badge-accent">Direct Contact</span>
              <h2 className="heading-2" style={{ marginBlock: '16px 24px' }}>
                We'd Love to Hear From You
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                Whether you need a full digital product engineering team, a responsive UI overhaul, or specialized Next.js consulting, our senior team is ready.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                
                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    ✉
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px' }}>
                      <a href="mailto:theorbitdigitalpk@gmail.com" style={{ color: 'var(--color-primary)' }}>
                        theorbitdigitalpk@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    💬
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone / WhatsApp</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px' }}>
                      <a href="https://wa.me/923015292380" target="_blank" rel="noopener noreferrer" style={{ color: '#166534' }}>
                        +92 301 5292380
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    📍
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Studio Address</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px', color: 'var(--color-text)' }}>
                      Islamabad, Pakistan
                    </h4>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-offset)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    ⏱
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Response Time</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px', color: 'var(--color-text)' }}>
                      Within 1 business day
                    </h4>
                  </div>
                </div>

              </div>

              {/* Closing Line & Calendar Booking CTA */}
              <div className="card" style={{ padding: '24px', backgroundColor: 'var(--color-surface-offset)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text)' }}>
                  Prefer a quick call instead of a form?
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                  Book a free 20-minute discovery consultation with our team to discuss your goals and get immediate guidance.
                </p>
                <a
                  href="https://wa.me/923015292380?text=Hi%2C%20I'd%20like%20to%20book%20a%20free%20consultation%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', padding: '10px 20px', textDecoration: 'none' }}
                >
                  <span>📅</span>
                  <span>Book a Meeting</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </Container>
      </section>
    </>
  );
}
