import React from 'react';

export default function SectionHeading({ 
  badge, 
  title, 
  description, 
  align = 'left', 
  badgeAccent = false,
  className = '' 
}) {
  return (
    <div className={`section-heading ${align === 'center' ? 'text-center' : ''} ${className}`.trim()}>
      {badge && (
        <span className={`section-badge ${badgeAccent ? 'section-badge-accent' : ''}`}>
          {badge}
        </span>
      )}
      {title && <h2 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">{title}</h2>}
      {description && <p className="text-lead" style={{ marginTop: '12px' }}>{description}</p>}
    </div>
  );
}
