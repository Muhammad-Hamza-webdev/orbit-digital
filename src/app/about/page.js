import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import Button from '../../components/Common/Button';
import { teamData } from '../../data/team';
import { Layers, Code2, Cpu, Target } from 'lucide-react';

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
          <div style={{ maxWidth: '840px', marginInline: 'auto' }}>
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

      {/* 2. Our Story & Mission */}
      <section className="section">
        <Container>
          <div className="grid grid-2" style={{ alignItems: 'stretch', gap: '32px' }}>
            {/* Story Card */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

            {/* Mission Card */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, var(--color-surface) 0%, #FFFFFF 100%)' }}>
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
      <section className="section section-bg-surface">
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
      <section className="section">
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
      <section className="section section-bg-surface">
        <Container>
          <SectionHeading
            badge="Leadership & Expertise"
            title="Meet the Team"
            description="Real strategists, engineers, and creators dedicated to your project."
            align="center"
          />

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {teamData.map((member) => (
              <div key={member.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '24px' }}>
                <div style={{ width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', marginInline: 'auto', marginBottom: '18px', border: '3px solid var(--color-primary-light)' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <h3 className="heading-4" style={{ marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '700', marginBottom: '12px' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginTop: 'auto' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <section className="section">
        <Container>
          <div
            className="card text-center"
            style={{
              padding: '60px 24px',
              maxWidth: '900px',
              marginInline: 'auto',
              background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
              color: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #374151',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
            }}
          >
            <h2 className="heading-2" style={{ color: '#ffffff', marginBottom: '16px', maxWidth: '700px', marginInline: 'auto' }}>
              Want a team that treats your project like their own? Let&apos;s talk.
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '600px', marginInline: 'auto', marginBottom: '32px' }}>
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
