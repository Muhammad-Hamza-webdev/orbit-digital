import HeroSection from "../components/Home/HeroSection";
import OurWorkSection from "../components/Home/OurWorkSection";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Our Work Section */}
      <OurWorkSection />

      {/* 3. Process, Testimonials & CTA */}
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
