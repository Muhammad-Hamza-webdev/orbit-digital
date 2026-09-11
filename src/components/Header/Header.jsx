"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteData } from '../../data/siteData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu and dropdowns during render when pathname changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }

  // Handle hash scroll on route navigation
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [pathname]);

  const handleSubLinkClick = (href) => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    if (pathname === '/services') {
      const hash = href.split('#')[1];
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteData.navigation.main;
  const logoUrl = siteData.company.logo;

  return (
    <>
      {/* ==========================================
         DESKTOP HEADER: FLOATING PILL NAVBAR
         ========================================== */}
      <header className={`header-desktop-pill ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-pill__container">
          {/* Logo */}
          <Link href="/" className="header-pill__logo">
            <img
              src={logoUrl}
              alt="Orbit Digital"
              className="header-logo-img"
              width="115"
              height="32"
            />
          </Link>

          {/* Nav Links */}
          <nav className="header-pill__nav" aria-label="Desktop Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.categories || link.subLinks) {
                return (
                  <div
                    key={link.href}
                    className="header-pill__dropdown"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`header-pill__link header-pill__dropdown-trigger ${isActive ? 'active' : ''}`}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <svg
                        className={`header-dropdown-chevron ${isServicesOpen ? 'is-open' : ''}`}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Link>

                    {link.categories ? (
                      <div
                        className={`header-pill__dropdown-menu header-pill__dropdown-menu--mega ${isServicesOpen ? 'is-open' : ''}`}
                        role="menu"
                        aria-label={`${link.name} submenu`}
                      >
                        <div className="header-mega-grid">
                          {link.categories.map((cat) => (
                            <div key={cat.name} className="header-mega-col">
                              <Link
                                href={cat.href}
                                className="header-mega-category-title"
                                onClick={() => handleSubLinkClick(cat.href)}
                              >
                                {cat.name}
                              </Link>
                              <ul className="header-mega-list">
                                {cat.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="header-mega-item"
                                      role="menuitem"
                                      onClick={() => handleSubLinkClick(item.href)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="header-mega-footer">
                          <Link
                            href="/services"
                            className="header-mega-footer-link"
                            onClick={() => handleSubLinkClick('/services')}
                          >
                            Explore All Services &rarr;
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`header-pill__dropdown-menu ${isServicesOpen ? 'is-open' : ''}`}
                        role="menu"
                        aria-label={`${link.name} submenu`}
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="header-pill__dropdown-item"
                            role="menuitem"
                            onClick={() => handleSubLinkClick(subLink.href)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

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
            <img
              src={logoUrl}
              alt="Orbit Digital"
              className="header-logo-img"
              width="115"
              height="32"
            />
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
            <img
              src={logoUrl}
              alt="Orbit Digital"
              className="header-logo-img"
              width="115"
              height="32"
            />
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
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.categories || link.subLinks) {
                return (
                  <div key={link.href} className="mobile-drawer__dropdown-group">
                    <div className="mobile-drawer__dropdown-row">
                      <Link
                        href={link.href}
                        className={`mobile-drawer__link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        className="mobile-drawer__dropdown-toggle"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        aria-label={`Toggle ${link.name} submenu`}
                        aria-expanded={isMobileServicesOpen}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`mobile-drawer__chevron ${isMobileServicesOpen ? 'is-open' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>

                    {isMobileServicesOpen && (
                      <div className="mobile-drawer__subnav">
                        {link.categories ? (
                          <>
                            {link.categories.map((cat) => (
                              <div key={cat.name} className="mobile-drawer__cat-group">
                                <Link
                                  href={cat.href}
                                  className="mobile-drawer__cat-title"
                                  onClick={() => handleSubLinkClick(cat.href)}
                                >
                                  {cat.name}
                                </Link>
                                <div className="mobile-drawer__cat-items">
                                  {cat.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="mobile-drawer__sublink"
                                      onClick={() => handleSubLinkClick(item.href)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '1px solid var(--color-border)' }}>
                              <Link
                                href="/services"
                                className="mobile-drawer__sublink"
                                style={{ fontWeight: '700', color: 'var(--color-primary)' }}
                                onClick={() => handleSubLinkClick('/services')}
                              >
                                View All Services &rarr;
                              </Link>
                            </div>
                          </>
                        ) : (
                          link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="mobile-drawer__sublink"
                              onClick={() => handleSubLinkClick(subLink.href)}
                            >
                              {subLink.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-drawer__link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
