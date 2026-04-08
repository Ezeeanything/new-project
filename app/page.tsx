import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ClientMarquee from "./components/ClientMarquee";
import RevenueSection from "./components/RevenueSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen relative overflow-x-hidden selection:bg-[#4169E1] selection:text-white">
      <HeroSection />
      <ClientMarquee />
      <WelcomeSection />
      <RevenueSection />
      <ServicesSection />
      <PortfolioSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
