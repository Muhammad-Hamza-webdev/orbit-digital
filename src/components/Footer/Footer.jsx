import React from 'react';
import Link from 'next/link';
import Container from '../Common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-frprotech">
      <Container>
        <div className="footer-main-grid">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="footer-col-brand">
            <Link href="/" className="footer-brand-link">
              <img
                src="/assets/img/logo/Logo.png"
                alt="Orbit Digital"
                className="footer-logo-img"
              />
            </Link>

            <p className="footer-bio-text">
              High-performance web architecture, UI/UX design, and Next.js applications that build trust and convert visitors into loyal clients.
            </p>

            {/* Rounded Contact Badges */}
            <div className="footer-contact-badges">
              <a href="mailto:hello@orbitdigital.com" className="footer-contact-badge">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span>hello@orbitdigital.com</span>
              </a>

              <a href="tel:+18005550199" className="footer-contact-badge">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>+1 (800) 555-0199</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col-nav">
            <h4 className="footer-col-heading">Services</h4>
            <ul className="footer-nav-list">
              <li><Link href="/services">Website Development</Link></li>
              <li><Link href="/services">UI UX Design</Link></li>
              <li><Link href="/services">Brand Identity</Link></li>
              <li><Link href="/services">Digital Strategy</Link></li>
              <li><Link href="/services">SEO & Growth</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col-nav">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Get Started</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="footer-col-connect">
            <h4 className="footer-col-heading">Connect With Us</h4>
            
            {/* Rounded Social Icon Squares */}
            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                in
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                ig
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                fb
              </a>
            </div>

            {/* Primary Pill Button */}
            <Link href="/contact" className="footer-cta-btn">
              <span>Start Your Project</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} Orbit Digital. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms of Service</Link>
          </div>
        </div>
      </Container>

      {/* Bottom Primary Brand Color Accent Strip */}
      <div className="footer-bottom-accent-strip" />
    </footer>
  );
}
