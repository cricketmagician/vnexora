import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { WelcomeIntro } from "@/components/sections/WelcomeIntro";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { YieldIntelligence } from "@/components/sections/YieldIntelligence";
import { GrowthDrivers } from "@/components/sections/GrowthDrivers";
import { HotelSolutions } from "@/components/sections/HotelSolutions";
import { ServiceCards } from "@/components/sections/ServiceCards";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      <Hero />
      <div className="relative z-10">
        <StatsSection />
        <WelcomeIntro />
        <TrustedBrands />
        <HotelSolutions />
        <YieldIntelligence />
        <GrowthDrivers />
        <ServiceCards />
      </div>
    </main>
  );
}
