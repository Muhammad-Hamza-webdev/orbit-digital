import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import ServicesOverview from "../components/Home/ServicesOverview";
import PortfolioOverview from "../components/Home/PortfolioOverview";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview limit={6} />
      <PortfolioOverview limit={3} />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
