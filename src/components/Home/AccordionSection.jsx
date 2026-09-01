"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AccordionSection() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ponytail: ScrollSmoother requires wrapping the full page body which disrupts sibling sections;
    // ScrollTrigger with scrub: 1 provides the exact smooth scrubbing for the accordion timeline.
    const mm = gsap.matchMedia(wrapperRef);

    // Desktop: pin and stack starting at top: 120px
    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          start: "top 120px",
          end: "+=70",
          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(".accordion .text", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });

      tl.to(
        ".accordion",
        {
          marginBottom: -15,
          stagger: 0.5,
        },
        "<"
      );
    });

    // Mobile / Tablet
    mm.add("(max-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          start: "top top",
          end: "+=70",
          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(".accordion .text", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });

      tl.to(
        ".accordion",
        {
          marginBottom: -15,
          stagger: 0.5,
        },
        "<"
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div id="wrapper" className="accordion-wrapper" ref={wrapperRef}>
      <div id="content" className="accordion-content">
        <div className="spacer"></div>
        <div className="accordions">
          <div className="accordion">
            <div className="title">
              Development
            </div>
            <div className="text">
              <p className="accordion__desc">
                Your website is the first impression most customers get. We build it to load fast, rank well, and convert — on whichever platform fits your business best.
              </p>
              <div className="accordion__pills">
                <span className="accordion__pill">WordPress Websites</span>
                <span className="accordion__pill">Shopify Stores</span>
                <span className="accordion__pill">Custom Websites (Next.js)</span>
                <span className="accordion__pill">Programming &amp; Custom Web Apps</span>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="title">
              Automate
            </div>
            <div className="text">
              <p className="accordion__desc">
                Manual, repetitive work costs your team hours every week. We automate it, so your people can focus on higher-value work.
              </p>
              <div className="accordion__pills">
                <span className="accordion__pill">AI Automation</span>
                <span className="accordion__pill">AI Tools Integration</span>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="title">
              Create
            </div>
            <div className="text">
              <p className="accordion__desc">
                Good design is what makes people stop, look, and remember you. We create visuals built around how your audience actually behaves online.
              </p>
              <div className="accordion__pills">
                <span className="accordion__pill">Graphic Designing</span>
                <span className="accordion__pill">Video Editing</span>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="title">
              Grow
            </div>
            <div className="text">
              <p className="accordion__desc">
                Traffic without conversion is just noise. Our growth services are built to turn visibility into measurable revenue.
              </p>
              <div className="accordion__pills">
                <span className="accordion__pill">Social Media Management</span>
                <span className="accordion__pill">Social Media Marketing</span>
                <span className="accordion__pill">Performance Marketing</span>
                <span className="accordion__pill">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
