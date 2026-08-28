import React from 'react';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span className="badge" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
            {service.category}
          </span>
        </div>

        <h3 className="heading-3" style={{ marginBottom: '12px' }}>
          {service.title}
        </h3>

        <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
          {service.description}
        </p>

        {service.deliverables && service.deliverables.length > 0 && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            {service.deliverables.map((item, idx) => (
              <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
        <Link href={`/contact?service=${service.slug}`} className="btn-secondary btn btn-sm" style={{ width: '100%' }}>
          Request Service
        </Link>
      </div>
    </div>
  );
}
