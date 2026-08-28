import React from 'react';
import Link from 'next/link';
import Container from '../Common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-light)', paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: '30px' }}>
      <Container>
        <div className="site-footer__grid">
          {/* Column 1: Brand & Slogan */}
          <div>
            <Link href="/" className="header-pill__logo" style={{ color: '#FFFFFF', marginBottom: '20px', display: 'inline-flex' }}>
              <span className="header-pill__logo-badge">O</span>
              <span style={{ color: '#FFFFFF' }}>Orbit<span className="text-gradient">Digital</span></span>
            </Link>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', maxWidth: '340px', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <strong>If people don't understand your product, they won't trust it.</strong>
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', maxWidth: '340px', lineHeight: '1.6', fontSize: '0.9rem' }}>
              Orbit Digital is a premier digital agency building high-performance Next.js web applications, responsive user experiences, and scalable enterprise products.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.9rem' }}>LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.9rem' }}>Twitter</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.9rem' }}>GitHub</a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '700' }}>Explore</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Services</Link></li>
              <li><Link href="/portfolio" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Portfolio</Link></li>
              <li><Link href="/blog" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Blog</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '700' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Web Development</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>UI/UX Product Design</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Digital Product Strategy</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Cloud Architecture</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Brand Identity</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>SEO & Growth</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '700' }}>Get In Touch</h4>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '12px', fontSize: '0.9rem' }}>
              <strong>Email:</strong> <a href="mailto:hello@orbitdigital.com" style={{ color: '#FFFFFF' }}>hello@orbitdigital.com</a>
            </p>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '12px', fontSize: '0.9rem' }}>
              <strong>Phone:</strong> <a href="tel:+18005550199" style={{ color: '#FFFFFF' }}>+1 (800) 555-0199</a>
            </p>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '12px', fontSize: '0.9rem' }}>
              <strong>WhatsApp:</strong> <a href="https://wa.me/18005550199" style={{ color: '#FFFFFF' }}>Chat on WhatsApp</a>
            </p>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
              <strong>HQ:</strong> 100 Innovation Way, Suite 400, Tech City
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="site-footer__bottom">
          <p>© {currentYear} Orbit Digital. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/contact" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
