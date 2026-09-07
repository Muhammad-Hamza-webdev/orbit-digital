import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/Common/Container';
import BlogCard from '../../../components/Blog/BlogCard';
import { blogData } from '../../../data/blog';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Orbit Digital',
    };
  }

  return {
    title: `${post.title} | Orbit Digital`,
    description: post.metaDescription,
    keywords: [post.targetKeyword, post.category, 'Orbit Digital blog', 'web development insights'],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://orbitdigital.app/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current)
  const relatedPosts = blogData
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Article Header & Breadcrumbs */}
      <article className="section section-bg-surface" style={{ paddingBottom: 'clamp(40px, 5vw, 60px)' }}>
        <Container>
          <div style={{ maxWidth: '840px', marginInline: 'auto' }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: '24px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ marginInline: '8px' }}>/</span>
              <Link href="/blog" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                Blog
              </Link>
              <span style={{ marginInline: '8px' }}>/</span>
              <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                {post.category}
              </span>
            </nav>

            {/* Badges & Meta */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>
                {post.category}
              </span>
              {post.targetKeyword && (
                <span style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                  Target Keyword: {post.targetKeyword}
                </span>
              )}
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {post.readTime}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="heading-1" style={{ marginBottom: '24px', lineHeight: '1.2' }}>
              {post.title}
            </h1>

            {/* Author bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
              <div>
                <span style={{ fontWeight: '700', color: 'var(--color-secondary)', fontSize: '0.95rem' }}>
                  {post.author}
                </span>
                <span style={{ marginInline: '8px', color: 'var(--color-text-muted)' }}>•</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Published on {post.date}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div style={{ marginTop: '32px', borderRadius: '20px', overflow: 'hidden', maxHeight: '440px', boxShadow: 'var(--shadow-lg)' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </Container>
      </article>

      {/* Main Article Body */}
      <section className="section" style={{ paddingTop: 'clamp(40px, 6vw, 70px)' }}>
        <Container>
          <div style={{ maxWidth: '840px', marginInline: 'auto' }}>
            {/* Intro Lead Callout Box */}
            <div
              style={{
                backgroundColor: 'var(--color-primary-light)',
                borderLeft: '4px solid var(--color-primary)',
                padding: '24px 28px',
                borderRadius: '0 16px 16px 0',
                marginBottom: '48px',
              }}
            >
              <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-primary-dark)', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Executive Summary
              </span>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-secondary)', margin: 0, fontWeight: '500' }}>
                {post.excerpt}
              </p>
            </div>

            {/* Structured Sections */}
            {post.sections && post.sections.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: '48px' }}>
                <h2 className="heading-2" style={{ marginBottom: '20px', color: 'var(--color-secondary)' }}>
                  {sec.heading}
                </h2>

                {sec.content && sec.content.map((paragraph, pIdx) => {
                  if (paragraph.startsWith('• ')) {
                    return (
                      <li key={pIdx} style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text)', marginLeft: '24px', marginBottom: '8px' }}>
                        {paragraph.replace('• ', '')}
                      </li>
                    );
                  }
                  if (/^\d+\.\s/.test(paragraph)) {
                    return (
                      <p key={pIdx} style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '14px', paddingLeft: '8px', borderLeft: '2px solid var(--color-accent)' }}>
                        <strong>{paragraph}</strong>
                      </p>
                    );
                  }
                  return (
                    <p key={pIdx} style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--color-text)', marginBottom: '18px' }}>
                      {paragraph}
                    </p>
                  );
                })}

                {/* Key Stats Callout if present */}
                {sec.stats && (
                  <div className="grid grid-3" style={{ gap: '16px', marginBlock: '28px' }}>
                    {sec.stats.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="card"
                        style={{
                          textAlign: 'center',
                          padding: '20px 16px',
                          borderRadius: '14px',
                          border: '1px solid var(--color-card-border)',
                          backgroundColor: 'var(--color-surface)',
                        }}
                      >
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '6px' }}>
                          {st.label}
                        </span>
                        <strong style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '800' }}>
                          {st.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                )}

                {/* Table if present */}
                {sec.table && (
                  <div style={{ overflowX: 'auto', marginBlock: '28px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--color-secondary)', color: '#FFFFFF', textAlign: 'left' }}>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} style={{ padding: '14px 18px', fontSize: '0.9rem' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((r, rIdx) => (
                          <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? 'var(--color-surface)' : '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
                            {r.map((cell, cIdx) => (
                              <td key={cIdx} style={{ padding: '14px 18px', fontSize: '0.9rem', color: cIdx === 0 ? 'var(--color-secondary)' : 'var(--color-text)', fontWeight: cIdx === 0 ? '700' : '400' }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

            {/* In-Article Conversion Callout */}
            <div
              className="card"
              style={{
                marginTop: '60px',
                background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1a162b 100%)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(28px, 5vw, 48px)',
                textAlign: 'center',
              }}
            >
              <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', marginBottom: '16px' }}>
                Take Action
              </span>
              <h3 className="heading-3" style={{ color: '#FFFFFF', marginBottom: '14px' }}>
                Need Help Executing This in Your Business?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '560px', marginInline: 'auto', marginBottom: '28px', fontSize: '1rem', lineHeight: '1.6' }}>
                Whether you need a high-converting website, AI automated pipelines, brand creative, or revenue-driven marketing — Orbit Digital handles it all under one roof.
              </p>
              <Link href="/contact" className="button button-primary">
                Book a Free Discovery Call →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="section section-bg-surface">
          <Container>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="section-badge">More Insights</span>
              <h2 className="heading-2">Related Articles</h2>
            </div>
            <div className="grid grid-3">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
