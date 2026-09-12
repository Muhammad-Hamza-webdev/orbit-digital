import React from "react";
import dynamic from "next/dynamic";
import Container from "../Common/Container";

const TestimonialsSlider = dynamic(() => import("./TestimonialsSlider"), {
  loading: () => (
    <div style={{ minHeight: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ width: "100%", maxWidth: "600px", opacity: 0.6, height: "200px" }} />
    </div>
  ),
});

export default function TestimonialsSection() {
  return (
    <section className="section section-bg-surface">
      <Container>
        <div className="section-heading text-center">
          <span className="section-badge">Client Testimonials</span>
          <h2 className="heading-display frprotech-hero-title frprotech-fade-item fade-2">
            Trusted by Fast-Growing{" "}
            <span className="frprotech-gradient-text">Enterprise Teams</span>
          </h2>
          <p className="text-lead" style={{ marginTop: "12px" }}>
            Hear what digital leaders say about partnering with Orbit Digital for
            product development and web architecture.
          </p>
        </div>

        <TestimonialsSlider />
      </Container>
    </section>
  );
}
