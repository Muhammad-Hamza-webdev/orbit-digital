"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const workItems = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    subtitle: 'Branding & Visual Identity',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Guidelines',
    subtitle: 'Brand Manual & Asset Systems',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'website-design',
    title: 'Website Design',
    subtitle: 'High-Converting Web UI/UX',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'pitch-deck',
    title: 'Pitch Deck & Presentation Design',
    subtitle: 'Investor Decks & Keynotes',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'social-media',
    title: 'Social Media Posts & Ads',
    subtitle: 'Performance Ad Creatives',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'marketing-collateral',
    title: 'Marketing Collateral',
    subtitle: 'Print & Digital Collateral',
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'packaging-labels',
    title: 'Packaging & Label Design',
    subtitle: 'Product Packaging Systems',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
  {
    id: 'video-motion',
    title: 'Video & Motion',
    subtitle: '2D/3D Motion Graphics & Reels',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    link: '/portfolio',
  },
];

// Manual CSS marquee — no Swiper JS bundle, no TBT cost.
// Pure CSS animation: two identical lists side by side create seamless loop.
export default function OurWorkSection() {
  return (
    <section className="section our-work-fullwidth-section">
      <div className="section-heading text-center" style={{ marginBottom: '44px', paddingInline: '20px' }}>
        <p className="section-badge frprotech-subbadge">OUR WORK</p>
        <h2 className="heading-2">
          Design That Turns Visitors <span className="frprotech-gradient-text">Into Customers</span>
        </h2>
      </div>

      <div className="work-fullwidth-container">
        <div className="work-marquee" aria-label="Portfolio work samples">
          {/* Two copies so the CSS loop is seamless */}
          {[0, 1].map((copy) => (
            <div key={copy} className="work-marquee__track" aria-hidden={copy === 1}>
              {workItems.map((item) => (
                <Link key={item.id} href={item.link} className="work-card-item">
                  <div className="work-card-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="work-card-img"
                      width="320"
                      height="240"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="work-card-bottom-bar">
                      <p className="work-card-title">{item.title}</p>
                    </div>
                    <div className="work-card-hover-curtain">
                      <div className="work-card-hover-content">
                        <p className="work-card-hover-title">{item.title}</p>
                        <div className="work-card-hover-btn">
                          <span>View Projects</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
