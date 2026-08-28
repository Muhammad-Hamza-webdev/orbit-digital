import HeroSection from "../components/Home/HeroSection";
import OurWorkSection from "../components/Home/OurWorkSection";
import OurServicesSection from "../components/Home/OurServicesSection";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Our Work Section (frprotech style carousel) */}
      <OurWorkSection />

      {/* 3. Our Services Section (frprotech style sticky sidebar + feature cards) */}
      <OurServicesSection />

      {/* 4. Process, Testimonials & CTA */}
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
