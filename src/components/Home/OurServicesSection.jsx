"use client";

import React, { useState, useEffect } from 'react';
import Container from '../Common/Container';

const servicesData = [
  {
    id: 'branding-identity',
    tabTitle: 'Branding and Identity',
    heading: 'Branding and Identity',
    description: 'Build a memorable brand that stands out in the market and resonates with your target audience.',
    number: '01',
    tags: [
      { name: 'Logo Design', icon: 'palette' },
      { name: 'Brand Identity & Guidelines', icon: 'file-text' },
      { name: 'Sub-brand Systems', icon: 'panels' },
      { name: 'Visual Direction & Strategy', icon: 'image' },
    ],
  },
  {
    id: 'graphic-design',
    tabTitle: 'Graphic Design',
    heading: 'Graphic Design',
    description: 'Eye-catching designs that communicate your message effectively across all digital & marketing channels.',
    number: '02',
    tags: [
      { name: 'Ad Creatives', icon: 'image' },
      { name: 'Social Media Design', icon: 'share' },
      { name: 'Banners & Web Graphics', icon: 'panels' },
      { name: 'Flyers & Brochures', icon: 'file-text' },
      { name: 'Packaging & Label Design', icon: 'package' },
      { name: 'Pitch Decks & Presentations', icon: 'presentation' },
      { name: 'Marketing & Print Design', icon: 'palette' },
      { name: 'Video & Motion Graphics', icon: 'video' },
    ],
  },
  {
    id: 'ui-ux-design',
    tabTitle: 'UI/UX & Product Design',
    heading: 'UI/UX & Product Design',
    description: 'User-centered interfaces and scalable digital product design systems engineered for high conversion.',
    number: '03',
    tags: [
      { name: 'Wireframing & Prototyping', icon: 'panels' },
      { name: 'Mobile App Design', icon: 'image' },
      { name: 'SaaS Platform UI', icon: 'palette' },
      { name: 'Design Systems', icon: 'file-text' },
    ],
  },
  {
    id: 'website-development',
    tabTitle: 'Website Development',
    heading: 'Website Development',
    description: 'Fast, secure, responsive web applications built with modern Next.js App Router and optimized clean code.',
    number: '04',
    tags: [
      { name: 'Next.js & React Apps', icon: 'panels' },
      { name: 'Responsive Web Architecture', icon: 'image' },
      { name: 'Headless CMS Integration', icon: 'file-text' },
      { name: 'Core Web Vitals Optimization', icon: 'palette' },
    ],
  },
  {
    id: 'seo-marketing',
    tabTitle: 'SEO & Social Media Marketing',
    heading: 'SEO & Social Media Marketing',
    description: 'Data-driven search optimization and social media strategies designed to boost rank, traffic, and sales.',
    number: '05',
    tags: [
      { name: 'On-Page & Technical SEO', icon: 'file-text' },
      { name: 'Growth Engineering', icon: 'share' },
      { name: 'Social Campaign Strategy', icon: 'presentation' },
      { name: 'Analytics & Conversion Tracking', icon: 'panels' },
    ],
  },
];

export default function OurServicesSection() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const stickyThreshold = 180;
      let currentActive = servicesData[0].id;

      for (let i = servicesData.length - 1; i >= 0; i--) {
        const card = document.getElementById(servicesData[i].id);
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top <= stickyThreshold) {
            currentActive = servicesData[i].id;
            break;
          }
        }
      }

      setActiveTab(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToService = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section our-services-frprotech-section">
      <Container>
        {/* Section Heading */}
        <div className="section-heading text-left" style={{ marginBottom: '48px' }}>
          <p className="frprotech-subbadge">OUR SERVICES</p>
          <h2 className="heading-2">
            What We Help You <span className="frprotech-gradient-text">Build</span>
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="services-frprotech-grid">
          {/* Left Column: Sticky Tab Sidebar */}
          <div className="services-sidebar-col">
            <div className="services-sticky-sidebar">
              {servicesData.map((s, idx) => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToService(s.id)}
                    className={`services-tab-btn ${isActive ? 'is-active' : ''}`}
                  >
                    {isActive && <div className="services-active-line" />}
                    <div className="flex items-center justify-between width-full">
                      <div className="flex items-center gap-3">
                        <span className="services-tab-num">{s.number}</span>
                        <span className="services-tab-text">{s.tabTitle}</span>
                      </div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`services-tab-arrow ${isActive ? 'is-active-arrow' : ''}`}
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stacked Service Feature Cards */}
          <div className="services-cards-col">
            {servicesData.map((s, idx) => {
              const topOffset = 110 + idx * 16; // Each card stacks with a neat top header overlap
              const zIndex = idx + 1;
              const isLast = idx === servicesData.length - 1;

              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="service-detail-card service-stack-card"
                  style={{
                    position: 'sticky',
                    top: `${topOffset}px`,
                    zIndex: zIndex,
                    marginBottom: isLast ? '0px' : '28vh',
                  }}
                >
                  <div className="card-top-tag">
                    <span className="card-badge">{s.number} — Service Focus</span>
                  </div>
                  <h3 className="service-detail-heading">{s.heading}</h3>
                  <p className="service-detail-desc">{s.description}</p>

                  {/* Sub-feature Badge Tags */}
                  <div className="service-tags-flex">
                    {s.tags.map((tag, tagIdx) => (
                      <div key={tagIdx} className="service-tag-pill">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="service-tag-icon"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>{tag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}


