"use client";

import React, { useState, useEffect } from 'react';
import Container from '../Common/Container';

const servicesData = [
  {
    id: 'branding-identity',
    tabTitle: 'Branding and Identity',
    heading: 'Branding and Identity',
    description: 'Build a memorable brand that stands out in the market and resonates with your target audience.',
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
      const triggerPoint = window.innerHeight * 0.4;
      let currentActive = servicesData[0].id;

      for (const service of servicesData) {
        const element = document.getElementById(service.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= 100) {
            currentActive = service.id;
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
      const yOffset = -120;
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
              {servicesData.map((s) => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToService(s.id)}
                    className={`services-tab-btn ${isActive ? 'is-active' : ''}`}
                  >
                    {isActive && <div className="services-active-line" />}
                    <div className="flex items-center justify-between width-full">
                      <span className="services-tab-text">{s.tabTitle}</span>
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
            {servicesData.map((s) => (
              <div key={s.id} id={s.id} className="service-detail-card">
                <h3 className="service-detail-heading">{s.heading}</h3>
                <p className="service-detail-desc">{s.description}</p>

                {/* Sub-feature Badge Tags */}
                <div className="service-tags-flex">
                  {s.tags.map((tag, idx) => (
                    <div key={idx} className="service-tag-pill">
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
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}



