import React from 'react';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  const serviceUrl = service.href || `/services/${service.slug}`;

  return (
    <div
      id={service.slug}
      className="card card-hover"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', scrollMarginTop: '100px' }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className="badge" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
            {service.category}
          </span>
          {service.focusKeyword && (
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>
              {service.focusKeyword}
            </span>
          )}
        </div>

        <h3 className="heading-3" style={{ marginBottom: '12px' }}>
          <Link href={serviceUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
            {service.title}
          </Link>
        </h3>

        {service.h1Heading && (
          <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px', lineHeight: '1.4' }}>
            {service.h1Heading}
          </h4>
        )}

        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: '1.6', fontSize: '0.92rem' }}>
          {service.intro || service.description}
        </p>

        {service.deliverables && service.deliverables.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary)', marginBottom: '10px' }}>
              What&apos;s Included:
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0, listStyle: 'none' }}>
              {service.deliverables.map((item) => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'var(--color-text)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.45' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="service-card__actions" style={{ paddingTop: '18px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Link href={serviceUrl} className="btn btn-secondary" style={{ flex: '1', textAlign: 'center', justifyContent: 'center' }}>
          View Details &rarr;
        </Link>
        <Link href={`/contact?service=${service.slug}`} className="btn btn-primary" style={{ flex: '1', textAlign: 'center', justifyContent: 'center' }}>
          Consultation
        </Link>
      </div>
    </div>
  );
}

