'use client';

import React, { useState } from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';
import { Users, Code2, BarChart3, UserCheck, RotateCw, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    iconVariant: 'primary',
    number: '01',
    title: 'One Unified Team',
    desc: 'One team for development, design, automation, and marketing — no handoffs, no miscommunication between vendors.',
    highlight: 'Unified Strategy',
  },
  {
    icon: Code2,
    iconVariant: 'accent',
    number: '02',
    title: 'Modern Tech Stack',
    desc: 'Modern tech stack: Next.js, Shopify, WordPress, and AI-powered tools built for speed and Core Web Vitals.',
    highlight: '95+ PageSpeed',
  },
  {
    icon: BarChart3,
    iconVariant: 'primary',
    number: '03',
    title: 'Transparent Reporting',
    desc: "Transparent reporting — you see exactly what's working, and what we're changing next.",
    highlight: 'Real-Time ROI',
  },
  {
    icon: UserCheck,
    iconVariant: 'accent',
    number: '04',
    title: 'Direct Expert Access',
    desc: 'Direct access to the people doing the work, not a rotating account manager.',
    highlight: 'Dedicated Team',
  },
];

export default function WhyChooseUsSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (idx) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="section section-bg-white">
      <Container>
        <SectionHeading
          badge="Why Orbit Digital"
          title="Why Businesses Choose Orbit Digital"
          description="We group our services into four connected pillars to replace disjointed vendors with a single, high-performing partner."
          align="center"
        />

        {/* 4 Cards in 1 Row on Desktop */}
        <div className="why-choose-grid">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            const isFlipped = !!flippedCards[idx];

            return (
              <div
                key={idx}
                className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(idx);
                  }
                }}
                aria-label={`${item.title} card. Click to flip for details.`}
              >
                <div className="flip-card__inner">
                  {/* FRONT OF CARD: Only Icon & Title */}
                  <div className="flip-card__front">
                    <div className={`flip-card__front-icon feature-card__icon--${item.iconVariant}`}>
                      <IconComponent size={30} />
                    </div>
                    <h3 className="flip-card__front-title">{item.title}</h3>
                  </div>

                  {/* BACK OF CARD: Show Everything */}
                  <div className="flip-card__back">
                    <div>
                      <div className="flip-card__back-header">
                        <span className="flip-card__back-badge">
                          <CheckCircle2 size={13} />
                          {item.highlight}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: '700' }}>
                          {item.number}
                        </span>
                      </div>
                      <h4 className="flip-card__back-title">{item.title}</h4>
                      <p className="flip-card__back-desc">{item.desc}</p>
                    </div>

                    <div className="flip-card__back-footer">
                      <span>Orbit Digital Standard</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#a5b4fc' }}>
                        <RotateCw size={12} />
                        Flip back
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
