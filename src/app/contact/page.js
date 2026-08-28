import React from 'react';
import Container from '../../components/Common/Container';
import ContactForm from '../../components/Contact/ContactForm';

export const metadata = {
  title: "Contact Us | Orbit Digital",
  description: "Get in touch with Orbit Digital to discuss your Next.js application, responsive UI redesign, or enterprise digital project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">Get in Touch</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              Let's Engineer Your <span className="text-gradient">Digital Success</span>
            </h1>
            <p className="text-lead">
              Have an upcoming product, responsive architecture challenge, or new project? Contact Orbit Digital's engineering team today.
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                
                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                    ✉
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Email Inquiries</h4>
                    <a href="mailto:hello@orbitdigital.com" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                      hello@orbitdigital.com
                    </a>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                    ☎
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Direct Phone</h4>
                    <a href="tel:+18005550199" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>
                      +1 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                    💬
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>WhatsApp Support</h4>
                    <a href="https://wa.me/18005550199" target="_blank" rel="noopener noreferrer" style={{ color: '#166534', fontWeight: '600' }}>
                      Chat directly on WhatsApp
                    </a>
                  </div>
                </div>

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
