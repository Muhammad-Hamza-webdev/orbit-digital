import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/Common/Container';
import { siteData } from '../../../data/siteData';

const allCategories = siteData.services.categories;
const allServices = allCategories.flatMap((cat) => cat.services);

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Orbit Digital',
    };
  }

  return {
    title: service.seoTitle || `${service.title} | Orbit Digital`,
    description: service.metaDescription,
    keywords: [service.focusKeyword, service.category, 'Orbit Digital services', service.title].filter(Boolean),
    openGraph: {
      title: service.seoTitle || `${service.title} | Orbit Digital`,
      description: service.metaDescription,
      url: `https://orbitdigital.app/services/${service.slug}`,
      siteName: 'Orbit Digital',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services in same category or sibling categories
  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .concat(allServices.filter((s) => s.slug !== service.slug && s.category !== service.category))
    .slice(0, 3);

  const cta = service.closingCta || {
    title: `Ready to get started with ${service.title.toLowerCase()}?`,
    description: "Tell us about your project and we'll get back to you within one business day.",
    buttonText: "Get a Free Consultation",
    buttonHref: `/contact?service=${service.slug}`,
  };

  return (
    <>
      {/* 1. Hero Section */}
      <header className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '880px', marginInline: 'auto', textAlign: 'center' }}>
            {/* Breadcrumbs */}
            <nav style={{ marginBottom: '20px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }} aria-label="Breadcrumb">
              <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ marginInline: '8px' }}>/</span>
              <Link href="/services" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                Services
              </Link>
              <span style={{ marginInline: '8px' }}>/</span>
              <Link href={`/services#${service.category.toLowerCase()}`} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                {service.category}
              </Link>
              <span style={{ marginInline: '8px' }}>/</span>
              <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                {service.title}
              </span>
            </nav>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span className="badge" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                {service.category}
              </span>
              {service.focusKeyword && (
                <span className="badge" style={{ backgroundColor: 'rgba(91, 95, 239, 0.08)', color: 'var(--color-secondary)' }}>
                  Focus: {service.focusKeyword}
                </span>
              )}
            </div>

            {/* H1 Heading */}
            <h1 className="heading-1" style={{ marginBottom: '24px', lineHeight: '1.2' }}>
              {service.h1Heading || service.title}
            </h1>

            {/* Intro Paragraph */}
            <p className="text-lead" style={{ marginInline: 'auto', maxWidth: '780px', marginBottom: '32px' }}>
              {service.intro || service.description}
            </p>

            {/* Hero Quick Actions */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={`/contact?service=${service.slug}`} className="button button-primary">
                {cta.buttonText || "Get a Free Consultation"} &rarr;
              </Link>
              <a href="#whats-included" className="button button-secondary">
                What&apos;s Included &darr;
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* 2. What's Included & Why Orbit Digital Sections */}
      <section id="whats-included" className="section" style={{ scrollMarginTop: '80px' }}>
        <Container>
          <div className="grid grid-2" style={{ gap: '36px', alignItems: 'stretch' }}>
            {/* What's Included */}
            <div className="card" style={{ padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '20px' }}>
                <span className="section-badge">Deliverables</span>
                <h2 className="heading-3" style={{ marginTop: '8px' }}>
                  What&apos;s Included
                </h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                {service.deliverables && service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.98rem',
                      lineHeight: '1.55',
                      color: 'var(--color-text)',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Orbit Digital */}
            <div className="card" style={{ padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-surface)' }}>
              <div style={{ marginBottom: '20px' }}>
                <span className="section-badge">The Advantage</span>
                <h2 className="heading-3" style={{ marginTop: '8px' }}>
                  Why Orbit Digital
                </h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                {service.whyUs && service.whyUs.map((reason, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.98rem',
                      lineHeight: '1.55',
                      color: 'var(--color-text)',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(91, 95, 239, 0.12)',
                        color: 'var(--color-secondary)',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      ★
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section section-bg-surface">
          <Container>
            <div style={{ maxWidth: '840px', marginInline: 'auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span className="section-badge">Common Questions</span>
                <h2 className="heading-2">
                  Frequently Asked <span className="frprotech-gradient-text">Questions</span>
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '24px 28px',
                      borderRadius: '20px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <h3
                      className="heading-4"
                      style={{
                        marginBottom: '10px',
                        color: 'var(--color-secondary)',
                        fontSize: '1.08rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                      }}
                    >
                      <span style={{ color: 'var(--color-primary)', fontWeight: '800' }}>Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.95rem',
                        lineHeight: '1.65',
                        margin: 0,
                        paddingLeft: '24px',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4. Service Specific Closing CTA */}
      <section className="section">
        <Container>
          <div
            className="card"
            style={{
              maxWidth: '880px',
              marginInline: 'auto',
              background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1a162b 100%)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 56px)',
              textAlign: 'center',
            }}
          >
            <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', marginBottom: '16px' }}>
              Get Started
            </span>
            <h2 className="heading-2" style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              {cta.title}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '580px', marginInline: 'auto', marginBottom: '28px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              {cta.description}
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={`/contact?service=${service.slug}`} className="button button-primary">
                {cta.buttonText} &rarr;
              </Link>
              <Link href="/services" className="button button-secondary" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                Explore Other Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Related Services */}
      {relatedServices.length > 0 && (
        <section className="section section-bg-surface">
          <Container>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="section-badge">More Options</span>
              <h2 className="heading-2">
                Related <span className="frprotech-gradient-text">Services</span>
              </h2>
            </div>
            <div className="grid grid-3">
              {relatedServices.map((rService) => (
                <div
                  key={rService.slug}
                  className="card card-hover"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}
                >
                  <div>
                    <span className="badge" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', marginBottom: '12px' }}>
                      {rService.category}
                    </span>
                    <h3 className="heading-4" style={{ marginBottom: '10px' }}>
                      <Link href={`/services/${rService.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {rService.title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.55', marginBottom: '18px' }}>
                      {rService.intro ? rService.intro.slice(0, 130) + '...' : rService.description}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '14px' }}>
                    <Link href={`/services/${rService.slug}`} className="btn btn-secondary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                      Learn More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
