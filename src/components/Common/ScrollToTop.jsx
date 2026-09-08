"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    let cachedScrollHeight = 0;
    let isMobile = false;

    const updateDimensions = () => {
      cachedScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      isMobile = window.innerWidth < 768;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (cachedScrollHeight <= 0) updateDimensions();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollPercentage = cachedScrollHeight > 0 ? (scrollTop / cachedScrollHeight) * 100 : 0;
          const threshold = isMobile ? 5 : 10;
          const shouldBeVisible = scrollPercentage >= threshold;
          setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    updateDimensions();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDimensions, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'is-visible' : ''}`}
      data-cursor-stick
      aria-label="Scroll to top of page"
      title="Go to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
