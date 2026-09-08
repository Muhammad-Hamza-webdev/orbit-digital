import React from 'react';
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} data-cursor-text="Read" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
      <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ height: '200px', borderRadius: '20px', overflow: 'hidden', position: 'relative', marginBottom: '20px', background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-light) 100%)' }}>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="badge" style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              {post.category}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="heading-4" style={{ marginBottom: '12px', color: 'var(--color-secondary)' }}>
            {post.title}
          </h3>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
            {post.excerpt}
          </p>

          {post.targetKeyword && (
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '0.78rem', padding: '3px 10px', borderRadius: '20px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                Keyword: {post.targetKeyword}
              </span>
            </div>
          )}
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
    </Link>
  );
}
