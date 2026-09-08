import React from 'react';
import Link from 'next/link';
import { siteData } from '../../data/siteData';

// Static Server Component — pure CSS marquee loop, zero client JS overhead, instant FCP/LCP.
export default function OurWorkSection() {
  const { badge, title, highlight, items } = siteData.home.ourWork;

  return (
    <section className="section our-work-fullwidth-section">
      <div className="section-heading text-center" style={{ marginBottom: '44px', paddingInline: '20px' }}>
        <p className="section-badge frprotech-subbadge">{badge}</p>
        <h2 className="heading-2">
          {title}
          <span className="frprotech-gradient-text">{highlight}</span>
        </h2>
      </div>

      <div className="work-fullwidth-container">
        <div className="work-marquee" aria-label="Portfolio work samples">
          {/* Two copies so the CSS loop is seamless */}
          {[0, 1].map((copy) => (
            <div key={copy} className="work-marquee__track" aria-hidden={copy === 1}>
              {items.map((item) => (
                <Link key={item.id} href={item.link} className="work-card-item" data-cursor-text="View">
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
