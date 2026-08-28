import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="card card-hover" style={{ overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Portfolio Card Banner Graphic */}
      <div style={{ height: '220px', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-accent-light) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '24px' }}>
        <div style={{ padding: '12px 20px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
          <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', marginBottom: '6px' }}>
            {project.category}
          </span>
          <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--color-secondary)' }}>{project.client}</h4>
        </div>
      </div>

      <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>{project.year}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-success)', fontWeight: '700' }}>{project.metrics}</span>
          </div>

          <h3 className="heading-4" style={{ marginBottom: '12px' }}>
            {project.title}
          </h3>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.5' }}>
            {project.description}
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
