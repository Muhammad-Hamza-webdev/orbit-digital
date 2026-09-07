"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stackCards = [
  {
    number: "01",
    title: "Development",
    desc: "Your website is the first impression most customers get. We build it to load fast, rank well, and convert — on whichever platform fits your business best.",
    pills: [
      "WordPress Websites",
      "Shopify Stores",
      "Custom Websites (Next.js)",
      "Programming & Custom Web Apps",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    alt: "Website & Web App Development",
  },
  {
    number: "02",
    title: "Automate",
    desc: "Manual, repetitive work costs your team hours every week. We automate it, so your people can focus on higher-value work.",
    pills: ["AI Automation", "AI Tools Integration"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    alt: "AI Automation & Workflow Integration",
  },
  {
    number: "03",
    title: "Create",
    desc: "Good design is what makes people stop, look, and remember you. We create visuals built around how your audience actually behaves online.",
    pills: ["Graphic Designing", "Video Editing"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
    alt: "Creative Graphic Design & Video Editing",
  },
  {
    number: "04",
    title: "Grow",
    desc: "Traffic without conversion is just noise. Our growth services are built to turn visibility into measurable revenue.",
    pills: [
      "Social Media Management",
      "Social Media Marketing",
      "Performance Marketing",
      "SEO",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    alt: "Performance Marketing, SEO & Digital Growth",
  },
];

export default function AccordionSection() {
  const sectionRef = useRef(null);

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
            key={index}
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
                  {card.pills.map((pill, pIdx) => (
                    <span key={pIdx} className="cs-stack-card__pill">
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
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
