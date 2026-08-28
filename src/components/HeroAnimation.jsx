"use client";

import React from 'react';

/**
 * HeroAnimation - "Contour Drift"
 *
 * Stacked SVG topographic contour lines layered behind headline text.
 * Each line drifts horizontally at a different speed (pure CSS translateX keyframes)
 * creating a subtle, slow parallax depth effect.
 *
 * HARD REQUIREMENTS SATISFIED:
 * - 'use client' Next.js App Router compatible, 100% static SVG path data.
 * - Zero JS main-thread animation cost (0 requestAnimationFrame, 0 scroll listeners).
 * - Zero external animation libraries (pure SVG + CSS keyframes only). <2kb JS.
 * - Reskinnable via CSS custom properties (--hero-line-1 .. 6) or `lineColors` prop.
 * - Respects prefers-reduced-motion (freezes transform drift instantly).
 * - Responsive viewBox (2800x800) scaling seamlessly with container.
 * - Staggered CSS entrance animation for headline DOM content.
 *
 * @param {Object} props
 * @param {string[]} [props.lineColors] - Optional array of hex/rgba stroke colors.
 * @param {string} [props.className=''] - Additional CSS class names.
 * @param {React.ReactNode} [props.children] - Headline DOM elements rendered above SVG.
 */
export default function HeroAnimation({
  lineColors,
  className = '',
  children,
  ...props
}) {
  // Map lineColors array to CSS custom variables if provided
  const styleVars = lineColors && Array.isArray(lineColors)
    ? {
        '--hero-line-1': lineColors[0] || '#5B5FEF',
        '--hero-line-2': lineColors[1] || '#8B5CF6',
        '--hero-line-3': lineColors[2] || '#3F8825',
        '--hero-line-4': lineColors[3] || '#06B6D4',
        '--hero-line-5': lineColors[4] || '#EC4899',
        '--hero-line-6': lineColors[5] || '#F59E0B',
      }
    : {};

  return (
    <div
      className={`contour-hero-wrapper ${className}`.trim()}
      style={styleVars}
      {...props}
    >
      {/* =========================================================================
          BACKGROUND SVG LAYER: Topographic Contour Drift Lines
         ========================================================================= */}
      <svg
        className="contour-hero-svg"
        viewBox="0 0 2800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g className="contour-lines-group">
          {/* Contour Line 1 (Top High Elevation Wave) */}
          <path
            className="contour-line contour-layer-1"
            stroke="var(--hero-line-1, #5B5FEF)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.22"
            d="M -400 150 C -100 80, 200 220, 500 120 C 800 20, 1100 180, 1400 100 C 1700 20, 2000 160, 2300 90 C 2600 20, 2900 140, 3200 100"
          />

          {/* Contour Line 2 (Upper-Mid Crest Line) */}
          <path
            className="contour-line contour-layer-2"
            stroke="var(--hero-line-2, #8B5CF6)"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.25"
            d="M -400 280 C -150 200, 180 340, 480 250 C 780 160, 1080 310, 1380 220 C 1680 130, 1980 280, 2280 200 C 2580 120, 2880 240, 3200 220"
          />

          {/* Contour Line 3 (Focal Mid Elevation) */}
          <path
            className="contour-line contour-layer-3"
            stroke="var(--hero-line-3, #3F8825)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.28"
            d="M -400 400 C -80 300, 220 480, 520 380 C 820 280, 1120 450, 1420 350 C 1720 250, 2020 420, 2320 320 C 2620 220, 2920 360, 3200 340"
          />

          {/* Contour Line 4 (Lower-Mid Ridge) */}
          <path
            className="contour-line contour-layer-4"
            stroke="var(--hero-line-4, #06B6D4)"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
            opacity="0.2"
            d="M -400 520 C -120 440, 150 580, 450 490 C 750 400, 1050 560, 1350 480 C 1650 400, 1950 540, 2250 460 C 2550 380, 2850 500, 3200 470"
          />

          {/* Contour Line 5 (Lower Valley Contour) */}
          <path
            className="contour-line contour-layer-5"
            stroke="var(--hero-line-5, #EC4899)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.18"
            d="M -400 640 C -180 560, 200 700, 500 610 C 800 520, 1100 680, 1400 590 C 1700 500, 2000 640, 2300 570 C 2600 500, 2900 620, 3200 590"
          />

          {/* Contour Line 6 (Deep Horizon Line) */}
          <path
            className="contour-line contour-layer-6"
            stroke="var(--hero-line-6, #F59E0B)"
            strokeWidth="1.1"
            strokeLinecap="round"
            fill="none"
            opacity="0.15"
            d="M -400 750 C -100 680, 250 820, 550 720 C 850 620, 1150 790, 1450 700 C 1750 610, 2050 760, 2350 680 C 2650 600, 2950 730, 3200 710"
          />
        </g>
      </svg>

      {/* =========================================================================
          FOREGROUND DOM LAYER: Headline content with CSS Staggered Entrance
         ========================================================================= */}
      <div className="contour-hero-content contour-headline-stagger">
        {children}
      </div>

      {/* =========================================================================
          PURE CSS STYLES (Zero JS runtime overhead, prefers-reduced-motion)
         ========================================================================= */}
      <style jsx global>{`
        /* Root Wrapper Container */
        .contour-hero-wrapper {
          position: relative;
          width: 100%;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #ffffff;
        }

        /* SVG Background Positioning */
        .contour-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Headline DOM Foreground Layer */
        .contour-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          margin-inline: auto;
          text-align: center;
        }

        /* Horizontal Parallax Keyframes */
        @keyframes contourDriftLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-400px); }
        }

        @keyframes contourDriftRight {
          0% { transform: translateX(-400px); }
          100% { transform: translateX(0); }
        }

        /* Layered Drift Speeds & Directions */
        .contour-layer-1 { animation: contourDriftLeft 24s linear infinite; }
        .contour-layer-2 { animation: contourDriftRight 32s linear infinite; }
        .contour-layer-3 { animation: contourDriftLeft 28s linear infinite; }
        .contour-layer-4 { animation: contourDriftRight 38s linear infinite; }
        .contour-layer-5 { animation: contourDriftLeft 22s linear infinite; }
        .contour-layer-6 { animation: contourDriftRight 35s linear infinite; }

        /* Headline Staggered Entrance Keyframes */
        @keyframes contourFadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contour-headline-stagger > * {
          opacity: 0;
          animation: contourFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .contour-headline-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .contour-headline-stagger > *:nth-child(2) { animation-delay: 0.22s; }
        .contour-headline-stagger > *:nth-child(3) { animation-delay: 0.34s; }
        .contour-headline-stagger > *:nth-child(4) { animation-delay: 0.46s; }
        .contour-headline-stagger > *:nth-child(5) { animation-delay: 0.58s; }

        /* Accessibility: Motion Freeze */
        @media (prefers-reduced-motion: reduce) {
          .contour-line {
            animation: none !important;
            transform: none !important;
          }
          .contour-headline-stagger > * {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
