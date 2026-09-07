"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';

export default function BlogListClient({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Develop', 'Automate', 'Create', 'Grow'];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.targetKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const isFiltering = searchTerm !== '' || selectedCategory !== 'All';

  return (
    <>
      {/* Featured Article Banner (Visible when not actively filtering) */}
      {featuredPost && !isFiltering && (
        <div
          className="card"
          style={{
            marginBottom: '60px',
            background: 'linear-gradient(135deg, var(--color-surface) 0%, #FFFFFF 100%)',
            border: '2px solid var(--color-card-border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 44px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
            <div style={{ flex: '1.2', minWidth: '280px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>
                  Featured {featuredPost.category} Insight
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="heading-2" style={{ marginBottom: '16px', color: 'var(--color-secondary)' }}>
                <Link href={`/blog/${featuredPost.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-lead" style={{ marginBottom: '24px', maxWidth: '720px', color: 'var(--color-text-muted)' }}>
                {featuredPost.excerpt}
              </p>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href={`/blog/${featuredPost.slug}`} className="button button-primary">
                  Read Full Post →
                </Link>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  <span>By {featuredPost.author}</span> • <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>

            {featuredPost.image && (
              <div style={{ flex: '0.9', minWidth: '260px', height: '280px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filter and Search Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px', alignItems: 'center' }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat === 'All' ? 'All Insights' : cat}
              </button>
            );
          })}
        </div>

        {/* Search Filter Bar */}
        <div style={{ width: '100%', maxWidth: '560px' }}>
          <input
            type="text"
            placeholder="Search articles by topic, title, or target keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 22px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              fontSize: '0.95rem',
              color: 'var(--color-text)',
              outline: 'none',
              boxShadow: 'var(--shadow-sm)',
            }}
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h3 className="heading-3" style={{ marginBottom: '12px' }}>No articles match your search</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            Try searching for a different keyword or switch the category filter to &quot;All Insights&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="button button-secondary"
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  );
}
