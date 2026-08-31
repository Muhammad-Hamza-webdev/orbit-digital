import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import Button from '../../components/Common/Button';
import { teamData } from '../../data/team';
import { Layers, Code2, Cpu, Target } from 'lucide-react';

// Inline brand SVGs — lucide-react dropped LinkedIn/Twitter brand icons
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

export const metadata = {
  title: "About Orbit Digital | Web Development & Digital Marketing Team",
  description: "Meet Orbit Digital — a full-service team building fast websites, AI-powered automation, creative content, and growth marketing for ambitious brands.",
  openGraph: {
    title: "About Orbit Digital | Web Development & Digital Marketing Team",
    description: "Meet Orbit Digital — a full-service team building fast websites, AI-powered automation, creative content, and growth marketing for ambitious brands.",
    url: "https://orbitdigital.app/about",
    siteName: "Orbit Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Heading Hero */}
      <section className="section section-bg-surface text-center">
        <Container>
          <div className="section-heading section-heading--wide text-center">
            <span className="section-badge">About Us</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 20px' }}>
              We Are <span className="text-gradient">Orbit Digital</span>.
            </h1>
            <p className="text-lead" style={{ maxWidth: '720px', marginInline: 'auto' }}>
              A full-service team building fast websites, AI-powered automation, creative content, and growth marketing for ambitious brands.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Our Story */}
      <section className="section">
        <Container>
          <div className="about-split">
            {/* Content */}
            <div className="card about-split__content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-badge section-badge-accent" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>
                Our Story
              </span>
              <h2 className="heading-3" style={{ marginBottom: '16px' }}>
                Closing the Gaps Between Siloed Vendors
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Orbit Digital started with a simple observation: most businesses were hiring three or four different vendors — a developer, a designer, a social media freelancer, and an ads agency — and losing time, budget, and consistency in the gaps between them. We built Orbit Digital to close those gaps. One team, one strategy, four disciplines working together instead of in silos.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="about-img-placeholder">
              <span className="about-img-placeholder__label">Image coming soon</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Our Mission */}
      <section className="section section-bg-surface">
        <Container>
          <div className="about-split about-split--reverse">
            {/* Image placeholder — DOM order: placeholder first so on mobile content comes first via order */}
            <div className="about-img-placeholder">
              <span className="about-img-placeholder__label">Image coming soon</span>
            </div>

            {/* Content */}
            <div className="card about-split__content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, var(--color-surface) 0%, #FFFFFF 100%)' }}>
              <span className="section-badge" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>
                Our Mission
              </span>
              <h2 className="heading-3" style={{ marginBottom: '16px' }}>
                Built to Perform, Not Just Look Good
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                To make every brand we work with easier to understand, faster to load, and harder to ignore — through websites, automation, design, and marketing that are built to perform, not just look good.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. What Makes Us Different */}
      <section className="section section-bg-surface" style={{ background: 'white' }}>
        <Container>
          <SectionHeading
            badge="Why Orbit Digital"
            title="What Makes Us Different"
            description="Four core pillars that set our unified collaborative approach apart."
            align="center"
          />

          <div className="grid grid-2" style={{ gap: '24px' }}>
            <div className="card card-hover">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Layers size={22} />
                </div>
                <h3 className="heading-4" style={{ margin: 0 }}>Full-stack thinking</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Your website, automation, content, and ads are planned together, not separately.
              </p>
            </div>

            <div className="card card-hover">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code2 size={22} />
                </div>
                <h3 className="heading-4" style={{ margin: 0 }}>Modern engineering</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Next.js, headless CMS, and clean code over bloated page builders.
              </p>
            </div>

            <div className="card card-hover">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={22} />
                </div>
                <h3 className="heading-4" style={{ margin: 0 }}>AI-first workflows</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                We use automation internally and for clients to move faster without cutting corners.
              </p>
            </div>

            <div className="card card-hover">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={22} />
                </div>
                <h3 className="heading-4" style={{ margin: 0 }}>Real accountability</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Every project is measured against a clear goal — traffic, leads, or sales.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. How We Work */}
      <section className="section section-bg-surface">
        <Container>
          <SectionHeading
            badge="Our Methodology"
            title="How We Work"
            description="A streamlined process designed for transparency, speed, and continuous growth."
            align="center"
          />

          <div className="grid grid-4" style={{ gap: '24px' }}>
            <div className="card card-hover" style={{ position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary-light)', position: 'absolute', top: '16px', right: '20px' }}>
                01
              </span>
              <h3 className="heading-4" style={{ marginBottom: '12px', marginTop: '8px' }}>Discovery</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We learn your business, audience, and what&apos;s currently not working.
              </p>
            </div>

            <div className="card card-hover" style={{ position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary-light)', position: 'absolute', top: '16px', right: '20px' }}>
                02
              </span>
              <h3 className="heading-4" style={{ marginBottom: '12px', marginTop: '8px' }}>Plan</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We map the right mix of Develop, Automate, Create, and Grow for your goals.
              </p>
            </div>

            <div className="card card-hover" style={{ position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary-light)', position: 'absolute', top: '16px', right: '20px' }}>
                03
              </span>
              <h3 className="heading-4" style={{ marginBottom: '12px', marginTop: '8px' }}>Build</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Our team designs, develops, and sets up automations and campaigns.
              </p>
            </div>

            <div className="card card-hover" style={{ position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary-light)', position: 'absolute', top: '16px', right: '20px' }}>
                04
              </span>
              <h3 className="heading-4" style={{ marginBottom: '12px', marginTop: '8px' }}>Launch &amp; Optimize</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We track performance and keep improving after go-live.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Meet the Team */}
      <section className="section section-bg-surface" style={{ background: 'white' }}>
        <Container>
          <SectionHeading
            badge="Leadership & Expertise"
            title="Meet the Team"
            description="Real strategists, engineers, and creators dedicated to your project."
            align="center"
          />

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {teamData.map((member) => (
              <div key={member.id} className="team-card">
                {/* Top accent bar */}
                <div className="team-card__bar" />

                {/* Avatar */}
                <div className="team-card__avatar-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card__avatar"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="team-card__body">
                  <h3 className="heading-4" style={{ marginBottom: '4px' }}>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>

                  {/* Social icons */}
                  <div className="team-card__socials">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="team-card__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="team-card__social-link" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon size={16} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="team-card__social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                          <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                      </a>
                    )}
                    {member.socials.dribbble && (
                      <a href={member.socials.dribbble} className="team-card__social-link" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
                        {/* Dribbble icon — not in lucide */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
                          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <section className="section section-bg-surface">
        <Container>
          <div className="card cta-banner-card">
            <h2 className="heading-2 cta-banner-card__title">
              Want a team that treats your project like their own? Let&apos;s talk.
            </h2>
            <p className="cta-banner-card__text">
              Whether you need a custom website, intelligent workflow automation, or full-funnel digital marketing, we&apos;re here to help.
            </p>
            <Button href="/contact" variant="accent" size="lg" className="frprotech-btn-pill">
              Get in Touch ↗
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
