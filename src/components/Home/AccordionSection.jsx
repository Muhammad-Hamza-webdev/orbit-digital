"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "../../data/siteData";

export default function AccordionSection() {
  const sectionRef = useRef(null);
  const stackCards = siteData.home.servicesStack;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia(sectionRef);

    // Desktop: subtle progressive scale down and brightness depth on prior cards
    mm.add("(min-width: 769px)", () => {
      const cardEls = gsap.utils.toArray(".cs-stack-card");

      cardEls.forEach((card, index) => {
        if (index < cardEls.length - 1) {
          const nextCard = cardEls[index + 1];
          gsap.to(card, {
            scale: 0.96 - (cardEls.length - 2 - index) * 0.02,
            scrollTrigger: {
              trigger: nextCard,
              start: "top 85%",
              end: "top 120px",
              scrub: true,
            },
          });
        }
      });
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, []);

  return (
    <section id="services-stack" className="cs-stack-section" ref={sectionRef}>
      <div className="cs-stack-wrapper">
        {stackCards.map((card, index) => (
          <div
            key={card.number}
            className="cs-stack-card"
            style={{
              "--card-index": index,
              zIndex: index + 1,
            }}
          >
            <div className="cs-stack-card__inner">
              <span className="cs-stack-card__num">{card.number}</span>
              <div className="cs-stack-card__content">
                <div className="cs-stack-card__header">
                  <h3 className="cs-stack-card__title">{card.title}</h3>
                </div>
                <p className="cs-stack-card__desc">{card.desc}</p>
                <div className="cs-stack-card__pills">
                  {card.pills.map((pill) => (
                    <span key={pill} className="cs-stack-card__pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="cs-stack-card__visual">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="cs-stack-card__img"
                  width="1000"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
