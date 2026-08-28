import React from 'react';

export default function BlogCard({ post }) {
  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      <div>
        <div style={{ height: '180px', background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-light) 100%)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>
            {post.category}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="heading-4" style={{ marginBottom: '12px' }}>
          {post.title}
        </h3>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px' }}>
          {post.excerpt}
        </p>
      </div>

      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-secondary)' }}>
          By {post.author}
        </span>
        <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
          Read Article →
        </span>
      </div>
    </div>
  );
}
