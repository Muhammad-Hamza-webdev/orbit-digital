import React from 'react';
import Container from '../Common/Container';

export default function StatsSection() {
  const stats = [
    { value: '150+', label: 'Digital Products Launched', subtext: 'Across 12 global industries' },
    { value: '99.8%', label: 'Uptime & Reliability', subtext: 'Enterprise grade SLA' },
    { value: '3.5x', label: 'Average Client ROI', subtext: 'Within 12 months post-launch' },
    { value: '24/7', label: 'Support & Engineering', subtext: 'Continuous maintenance' },
  ];

  return (
    <section className="section section-bg-surface">
      <Container>
        <div className="grid grid-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="card card-hover" style={{ textAlign: 'center' }}>
              <h3 className="text-gradient" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: '900', marginBottom: '8px' }}>
                {stat.value}
              </h3>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', fontWeight: '700' }}>
                {stat.label}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
