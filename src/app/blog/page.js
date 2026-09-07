import React from 'react';
import Container from '../../components/Common/Container';
import BlogListClient from '../../components/Blog/BlogListClient';
import { siteData } from '../../data/siteData';

export const metadata = {
  title: "Blog | Web Development, AI Automation & Marketing Insights — Orbit Digital",
  description: "Practical insights on web development, AI automation, design, and digital marketing from the Orbit Digital team — written to help you make better decisions, faster.",
  openGraph: {
    title: "Blog | Web Development, AI Automation & Marketing Insights — Orbit Digital",
    description: "Practical insights on web development, AI automation, design, and digital marketing from the Orbit Digital team — written to help you make better decisions, faster.",
    url: "https://orbitdigital.app/blog",
    siteName: "Orbit Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  const { hero, posts } = siteData.blog;

  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '860px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">{hero.badge}</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 20px' }}>
              {hero.titlePart}
              <span className="frprotech-gradient-text">{hero.highlight}</span>
              {hero.titleEnd}
            </h1>
            <p className="text-lead" style={{ maxWidth: '780px', marginInline: 'auto' }}>
              {hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <BlogListClient posts={posts} />
        </Container>
      </section>
    </>
  );
}
