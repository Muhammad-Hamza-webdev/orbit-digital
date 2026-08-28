"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../Common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Track scroll position for subtle shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {/* ==========================================
         DESKTOP HEADER: FLOATING PILL NAVBAR
         ========================================== */}
      <header className={`header-desktop-pill ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-pill__container">
          {/* Logo */}
          <Link href="/" className="header-pill__logo">
            <span className="header-pill__logo-badge">O</span>
            <span className="header-pill__logo-text">
              Orbit<span className="text-gradient">Digital</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="header-pill__nav" aria-label="Desktop Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`header-pill__link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ==========================================
         MOBILE HEADER: TOP BAR + HAMBURGER MENU
         ========================================== */}
      <header className="header-mobile-bar">
        <div className="header-mobile-bar__inner">
          {/* Logo */}
          <Link href="/" className="header-pill__logo">
            <span className="header-pill__logo-badge">O</span>
            <span className="header-pill__logo-text">
              Orbit<span className="text-gradient">Digital</span>
            </span>
          </Link>

          {/* Hamburger Menu Trigger Button */}
          <button
            type="button"
            className={`mobile-hamburger-btn ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span className="mobile-hamburger-line" />
            <span className="mobile-hamburger-line" />
            <span className="mobile-hamburger-line" />
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation Overlay (Slides in Left to Right) */}
      <div 
        id="mobile-navigation-drawer"
        className={`mobile-drawer-overlay ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Mobile Drawer Top Bar with explicit Close Button */}
        <div className="mobile-drawer__header">
          <Link href="/" className="header-pill__logo" onClick={() => setIsMenuOpen(false)}>
            <span className="header-pill__logo-badge">O</span>
            <span className="header-pill__logo-text">
              Orbit<span className="text-gradient">Digital</span>
            </span>
          </Link>

          {/* Explicit Close ('X') Button */}
          <button
            type="button"
            className="mobile-drawer__close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mobile-drawer__content">
          <nav className="mobile-drawer__nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-drawer__link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`mobile-drawer__link ${pathname === '/contact' ? 'active' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="mobile-drawer__footer">
            {/* <Button href="/contact" variant="primary" size="lg" fullWidth onClick={() => setIsMenuOpen(false)}>
              Get Started ↗
            </Button> */}
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              hello@orbitdigital.com • +1 (800) 555-0199
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
