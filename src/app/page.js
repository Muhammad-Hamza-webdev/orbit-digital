import HeroSection from "../components/Home/HeroSection";
import OurWorkSection from "../components/Home/OurWorkSection";
import AccordionSection from "../components/Home/AccordionSection";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Our Work Section */}
      <OurWorkSection />

      {/* 3. Accordion Stacking Section */}
      <AccordionSection />

      {/* 4. Process & Testimonials */}
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
}

