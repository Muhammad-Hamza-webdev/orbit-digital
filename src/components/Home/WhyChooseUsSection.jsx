'use client';

import React, { useState } from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';
import { siteData } from '../../data/siteData';
import { Users, Code2, BarChart3, UserCheck, CheckCircle2 } from 'lucide-react';

const iconMap = { Users, Code2, BarChart3, UserCheck };

export default function WhyChooseUsSection() {
  const [flippedCards, setFlippedCards] = useState({});
  const reasons = siteData.home.whyChooseUs;

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section section-bg-white">
      <Container>
        <SectionHeading
          badge="Why Orbit Digital"
          title={
            <>
              Why Businesses Choose{' '}
              <span className="frprotech-gradient-text">Orbit Digital</span>
            </>
          }
          description="We group our services into four connected pillars to replace disjointed vendors with a single, high-performing partner."
          align="center"
        />

        {/* 4 Cards in 1 Row on Desktop */}
        <div className="why-choose-grid">
          {reasons.map((item) => {
            const IconComponent = iconMap[item.iconName] || Users;
            const isFlipped = !!flippedCards[item.number];

            return (
              <div
                key={item.number}
                className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(item.number)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(item.number);
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
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
