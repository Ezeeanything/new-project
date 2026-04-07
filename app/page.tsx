"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ClientMarquee from "./components/ClientMarquee";
import RevenueSection from "./components/RevenueSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[#0A0A0A] min-h-screen relative overflow-x-hidden selection:bg-[#4169E1] selection:text-white">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <HeroSection />
        <WelcomeSection />
        <ClientMarquee />
        <RevenueSection />
        <ServicesSection />
        <PortfolioSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
