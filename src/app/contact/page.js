import React from 'react';
import Container from '../../components/Common/Container';
import ContactForm from '../../components/Contact/ContactForm';
import { siteData } from '../../data/siteData';

export const metadata = {
  title: "Contact Orbit Digital | Get a Free Consultation",
  description: "Get in touch with Orbit Digital for web development, AI automation, design, or digital marketing. Book a free consultation and get a response within one business day.",
  openGraph: {
    title: "Contact Orbit Digital | Get a Free Consultation",
    description: "Get in touch with Orbit Digital for web development, AI automation, design, or digital marketing. Book a free consultation and get a response within one business day.",
  },
};

export default function ContactPage() {
  const { company, socialLinks, contact } = siteData;

  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">{contact.hero.badge}</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              {contact.hero.titlePart}
              <span className="frprotech-gradient-text">{contact.hero.highlight}</span>
              {contact.hero.titleEnd}
            </h1>
            <p className="text-lead">
              {contact.hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            
            {/* Contact Information & Channels */}
            <div>
              <span className="section-badge section-badge-accent">{contact.directContact.badge}</span>
              <h2 className="heading-2" style={{ marginBlock: '16px 24px' }}>
                {contact.directContact.titlePart}
                <span className="frprotech-gradient-text">{contact.directContact.highlight}</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                {contact.directContact.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                
                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '20px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    ✉
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px' }}>
                      <a href={`mailto:${company.email}`} style={{ color: 'var(--color-primary)' }}>
                        {company.email}
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '20px', backgroundColor: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    💬
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone / WhatsApp</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px' }}>
                      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: '#166534' }}>
                        {company.phone}
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '20px', backgroundColor: 'var(--color-surface-offset)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '800' }}>
                    ⏱
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Response Time</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2px', color: 'var(--color-text)' }}>
                      {company.responseTime}
                    </h4>
                  </div>
                </div>

              </div>

              {/* Closing Line & Calendar Booking CTA */}
              <div className="card" style={{ padding: '24px', backgroundColor: 'var(--color-surface-offset)', border: '1px solid var(--color-border)', borderRadius: '20px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text)' }}>
                  {contact.quickCallCta.title}
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                  {contact.quickCallCta.description}
                </p>
                <a
                  href={socialLinks.whatsappConsultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', padding: '10px 20px', textDecoration: 'none' }}
                >
                  <span>📅</span>
                  <span>{contact.quickCallCta.buttonText}</span>
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
