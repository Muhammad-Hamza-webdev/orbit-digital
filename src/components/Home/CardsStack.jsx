'use client';

import { useEffect, useRef } from 'react';
import { cards } from '@/data/cards';

const PIN_TOPS = cards.map((_, i) => 100 + i * 34);
const SCALE_TARGETS = cards.map((_, i) => 1 - (cards.length - 1 - i) * 0.05);

export default function CardsStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Dynamic import: GSAP + ScrollTrigger are only parsed AFTER the page is
    // interactive, so they contribute 0ms to TBT.
    let ctx;
    import('gsap').then(({ default: gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const cardEls = gsap.utils.toArray('.cs-card');

          cardEls.forEach((card, index) => {
            const pinTop = PIN_TOPS[index];

            ScrollTrigger.create({
              trigger: card,
              start: `top ${pinTop}px`,
              endTrigger: sectionRef.current,
              end: 'bottom bottom',
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });

            if (index < cardEls.length - 1) {
              const nextPinTop = PIN_TOPS[index + 1];
              gsap.to(card, {
                scale: SCALE_TARGETS[index],
                ease: 'none',
                scrollTrigger: {
                  trigger: cardEls[index + 1],
                  start: 'top 90%',
                  end: `top ${nextPinTop}px`,
                  scrub: true,
                  invalidateOnRefresh: true,
                },
              });
            }
          });

          ScrollTrigger.refresh();
        }, sectionRef);
      })
    );

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cs-section">
      <div className="cs-wrapper">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="cs-card"
            style={{
              backgroundColor: card.bgColor || '#ffffff',
              borderColor: card.borderColor || '#e5e7eb',
              zIndex: index + 1,
            }}
          >
            <div className="cs-card-header">
              <div className="cs-card-header-left">
                <h2 className="cs-card-title" style={{ color: card.titleColor || '#111827' }}>
                  {card.title}
                </h2>
                {card.description && (
                  <p className="cs-card-desc" style={{ color: card.textColor || '#111827' }}>
                    {card.description}
                  </p>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 112"
                fill="none"
                className="cs-clip"
                aria-hidden="true"
              >
                <path
                  d="M20.9199 0.00127628C26.0808 -0.0523167 31.3561 1.58044 35.3711 5.17999C39.432 8.82094 42 14.2938 42 21.4798V90.0706C41.9999 102.827 33.5208 110.777 24.5127 111.35C20.021 111.636 15.4862 110.055 12.1055 106.399C9.20158 103.259 7.296 98.7539 6.82422 92.9583V55.4085C7.1434 54.3954 8.08961 53.6607 9.20801 53.6605C10.5887 53.6605 11.7079 54.7798 11.708 56.1605V90.0706C11.708 96.3539 13.4666 100.506 15.7764 103.004C18.0751 105.489 21.1144 106.557 24.1953 106.361C30.3329 105.971 36.9999 100.434 37 90.0706V21.4798C37 15.5644 34.9296 11.4994 32.0332 8.90264C29.0906 6.26461 25.0875 4.95853 20.9717 5.00127C14.3325 5.07052 8.06587 8.53595 5.79297 14.7034H0.539062C3.01033 5.14899 12.1786 0.0923273 20.9199 0.00127628Z"
                  fill={card.titleColor || '#111827'}
                />
              </svg>
            </div>

            <div className="cs-divider" style={{ backgroundColor: card.borderColor || '#e5e7eb' }} />

            <div className="cs-body">
              <ul className="cs-services">
                {card.services.map((s, i) => (
                  <li key={i} style={{ color: card.textColor || '#111827' }}>
                    <span className="cs-service-dot" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="cs-visual">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="cs-image" loading="lazy" />
                ) : (
                  <div className="cs-gradient" style={{ background: card.pattern }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
