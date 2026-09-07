"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        const isMobile = window.innerWidth < 768;
        const threshold = isMobile ? 5 : 10;
        setIsVisible(scrollPercentage >= threshold);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
      aria-label="Scroll to top of page"
      title="Go to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
