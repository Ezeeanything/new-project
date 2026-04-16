"use client";

import HeroSection from "./components/HeroSection";
import PortfolioPreview from "./components/PortfolioPreview";
import TestimonialSection from "./components/TestimonialSection";
import ClientMarquee from "./components/ClientMarquee";
import WelcomeSection from "./components/WelcomeSection";
import RevenueSection from "./components/RevenueSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ExploreNext from "./components/ExploreNext";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="bg-[#0A0A0A] min-h-screen relative overflow-x-hidden selection:bg-[#4169E1] selection:text-white">
      <HeroSection />
      
      {/* High-Impact Section 2: Recently Delivered */}
      <PortfolioPreview />
      
      {/* High-Impact Section 3: Social Proof */}
      <TestimonialSection />

      <ClientMarquee />
      <WelcomeSection />
      <RevenueSection />
      <ServicesSection />
      
      {/* Main Portfolio Section (In-depth) */}
      <PortfolioSection />
      
      <FinalCTA />
      
      {/* Engagement Driver */}
      <ExploreNext currentPath={pathname} />
      
      <Footer />
    </main>
  );
}
