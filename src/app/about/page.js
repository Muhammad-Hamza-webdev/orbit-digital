import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import Button from '../../components/Common/Button';
import TeamSlider from '../../components/About/TeamSlider';
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
          <div className="section-heading section-heading--wide text-center">
            <span className="section-badge">About Us</span>
            <h1 className="heading-1">
              We Are <span className="text-gradient">Orbit Digital</span>.
            </h1>
            <p className="text-lead">
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
            <div className="card about-split__content">
              <span className="section-badge section-badge-accent">
                Our Story
              </span>
              <h2 className="heading-3">
                Closing the Gaps Between Siloed Vendors
              </h2>
              <p>
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
            {/* Content */}
            <div className="card about-split__content about-split__content--gradient">
              <span className="section-badge">
                Our Mission
              </span>
              <h2 className="heading-3">
                Built to Perform, Not Just Look Good
              </h2>
              <p>
                To make every brand we work with easier to understand, faster to load, and harder to ignore — through websites, automation, design, and marketing that are built to perform, not just look good.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="about-img-placeholder">
              <span className="about-img-placeholder__label">Image coming soon</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. What Makes Us Different */}
      <section className="section section-bg-white">
        <Container>
          <SectionHeading
            badge="Why Orbit Digital"
            title="What Makes Us Different"
            description="Four core pillars that set our unified collaborative approach apart."
            align="center"
          />

          <div className="grid grid-2 sm-gap">
            <div className="card card-hover">
              <div className="feature-card__header">
                <div className="feature-card__icon feature-card__icon--primary">
                  <Layers size={22} />
                </div>
                <h3 className="heading-4 feature-card__title">Full-stack thinking</h3>
              </div>
              <p className="feature-card__desc">
                Your website, automation, content, and ads are planned together, not separately.
              </p>
            </div>

            <div className="card card-hover">
              <div className="feature-card__header">
                <div className="feature-card__icon feature-card__icon--accent">
                  <Code2 size={22} />
                </div>
                <h3 className="heading-4 feature-card__title">Modern engineering</h3>
              </div>
              <p className="feature-card__desc">
                Next.js, headless CMS, and clean code over bloated page builders.
              </p>
            </div>

            <div className="card card-hover">
              <div className="feature-card__header">
                <div className="feature-card__icon feature-card__icon--primary">
                  <Cpu size={22} />
                </div>
                <h3 className="heading-4 feature-card__title">AI-first workflows</h3>
              </div>
              <p className="feature-card__desc">
                We use automation internally and for clients to move faster without cutting corners.
              </p>
            </div>

            <div className="card card-hover">
              <div className="feature-card__header">
                <div className="feature-card__icon feature-card__icon--accent">
                  <Target size={22} />
                </div>
                <h3 className="heading-4 feature-card__title">Real accountability</h3>
              </div>
              <p className="feature-card__desc">
                Every project is measured against a clear goal — traffic, leads, or sales.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. How We Work */}
      <section className="section section-bg-surface">
        <Container>
          <SectionHeading
            badge="Our Methodology"
            title="How We Work"
            description="A streamlined process designed for transparency, speed, and continuous growth."
            align="center"
          />

          <div className="grid grid-4 gap-24">
            <div className="card card-hover methodology-card">
              <span className="methodology-card__number">
                01
              </span>
              <h3 className="heading-4 methodology-card__title">Discovery</h3>
              <p className="methodology-card__desc">
                We learn your business, audience, and what&apos;s currently not working.
              </p>
            </div>

            <div className="card card-hover methodology-card">
              <span className="methodology-card__number">
                02
              </span>
              <h3 className="heading-4 methodology-card__title">Plan</h3>
              <p className="methodology-card__desc">
                We map the right mix of Develop, Automate, Create, and Grow for your goals.
              </p>
            </div>

            <div className="card card-hover methodology-card">
              <span className="methodology-card__number">
                03
              </span>
              <h3 className="heading-4 methodology-card__title">Build</h3>
              <p className="methodology-card__desc">
                Our team designs, develops, and sets up automations and campaigns.
              </p>
            </div>

            <div className="card card-hover methodology-card">
              <span className="methodology-card__number">
                04
              </span>
              <h3 className="heading-4 methodology-card__title">Launch &amp; Optimize</h3>
              <p className="methodology-card__desc">
                We track performance and keep improving after go-live.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Meet the Team */}
      <section className="section section-bg-white">
        <Container>
          <SectionHeading
            badge="Leadership & Expertise"
            title="Meet the Team"
            description="Real strategists, engineers, and creators dedicated to your project."
            align="center"
          />

          <TeamSlider />
        </Container>
      </section>

      {/* 7. Closing CTA */}
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
