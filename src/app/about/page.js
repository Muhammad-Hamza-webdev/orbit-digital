import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import CTASection from '../../components/Common/CTASection';
import TeamSlider from '../../components/About/TeamSlider';
import { siteData } from '../../data/siteData';
import { Layers, Code2, Cpu, Target } from 'lucide-react';

const iconMap = { Layers, Code2, Cpu, Target };

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
  const { hero, story, mission, differentiators, methodology, cta } = siteData.about;

  return (
    <>
      {/* 1. Page Heading Hero */}
      <section className="section section-bg-surface text-center">
        <Container>
          <div className="section-heading section-heading--wide text-center">
            <span className="section-badge">{hero.badge}</span>
            <h1 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
              {hero.title}
              <span className="frprotech-gradient-text">{hero.highlight}</span>
              {hero.titleEnd}
            </h1>
            <p className="text-lead">
              {hero.description}
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
                {story.badge}
              </span>
              <h2 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
                {story.title}
              </h2>
              <p>
                {story.paragraph}
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
                {mission.badge}
              </span>
              <h2 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
                {mission.title}
              </h2>
              <p>
                {mission.paragraph}
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
            title={
              <>
                What Makes Us <span className="frprotech-gradient-text">Different</span>
              </>
            }
            description="Four core pillars that set our unified collaborative approach apart."
            align="center"
          />

          <div className="grid grid-2 sm-gap">
            {differentiators.map((item) => {
              const IconComponent = iconMap[item.iconName] || Layers;
              return (
                <div key={item.id} className="card card-hover">
                  <div className="feature-card__header">
                    <div className={`feature-card__icon feature-card__icon--${item.iconVariant}`}>
                      <IconComponent size={22} />
                    </div>
                    <h3 className="heading-4 feature-card__title">{item.title}</h3>
                  </div>
                  <p className="feature-card__desc">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. How We Work */}
      <section className="section section-bg-surface">
        <Container>
          <SectionHeading
            badge="Our Methodology"
            title={
              <>
                How We <span className="frprotech-gradient-text">Work</span>
              </>
            }
            description="A streamlined process designed for transparency, speed, and continuous growth."
            align="center"
          />

          <div className="grid grid-4 gap-24">
            {methodology.map((step) => (
              <div key={step.number} className="card card-hover methodology-card">
                <span className="methodology-card__number">
                  {step.number}
                </span>
                <h3 className="heading-4 methodology-card__title">{step.title}</h3>
                <p className="methodology-card__desc">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Meet the Team */}
      <section className="section section-bg-white">
        <Container>
          <SectionHeading
            badge="Leadership & Expertise"
            title={
              <>
                Meet the <span className="frprotech-gradient-text">Team</span>
              </>
            }
            description="Real strategists, engineers, and creators dedicated to your project."
            align="center"
          />

          <TeamSlider />
        </Container>
      </section>

      {/* 7. Closing CTA */}
      <CTASection
        titlePart={cta.titlePart}
        titleHighlight={cta.titleHighlight}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
        buttonVariant={cta.buttonVariant}
        bgSurface={cta.bgSurface}
      />
    </>
  );
}
