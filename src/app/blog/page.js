"use client";

import React, { useState } from 'react';
import Container from '../../components/Common/Container';
import BlogCard from '../../components/Blog/BlogCard';
import { blogData } from '../../data/blog';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogData.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = blogData.find((p) => p.featured) || blogData[0];

  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">Agency Insights</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              Thoughts on <span className="text-gradient">Engineering & UI Architecture</span>
            </h1>
            <p className="text-lead">
              Deep dives into fluid responsive design, Next.js performance optimization, and digital product strategy.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          {/* Featured Article Banner */}
          {featuredPost && !searchTerm && (
            <div className="card" style={{ marginBottom: '60px', background: 'linear-gradient(135deg, var(--color-surface) 0%, #FFFFFF 100%)', border: '2px solid var(--color-card-border)' }}>
              <span className="badge" style={{ backgroundColor: 'var(--color-accent)', color: '#FFFFFF', marginBottom: '16px' }}>
                Featured Engineering Insight
              </span>
              <h2 className="heading-2" style={{ marginBottom: '16px' }}>
                {featuredPost.title}
              </h2>
              <p className="text-lead" style={{ marginBottom: '24px', maxWidth: '800px' }}>
                {featuredPost.excerpt}
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>By {featuredPost.author}</span>
                <span>•</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{featuredPost.date}</span>
                <span>•</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>{featuredPost.readTime}</span>
              </div>
            </div>
          )}

          {/* Search Filter Bar */}
          <div style={{ maxWidth: '500px', marginInline: 'auto', marginBottom: '48px' }}>
            <input
              type="text"
              placeholder="Search articles by topic, title, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '14px 20px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', fontSize: '0.95rem' }}
            />
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
