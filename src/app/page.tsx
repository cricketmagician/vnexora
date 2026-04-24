import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { WelcomeIntro } from "@/components/sections/WelcomeIntro";
import { HospitalitySolutions } from "@/components/sections/HospitalitySolutions";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { YieldIntelligence } from "@/components/sections/YieldIntelligence";
import { GrowthDrivers } from "@/components/sections/GrowthDrivers";
import { HotelSolutions } from "@/components/sections/HotelSolutions";
import { PartnershipStructures } from "@/components/sections/PartnershipStructures";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      <Hero />
      <div className="relative z-10">
        <StatsSection />
        <WelcomeIntro />
        <HospitalitySolutions />
        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
        </div>
        <TrustedBrands />
        <PartnershipStructures />
        <HotelSolutions />
        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
        </div>
        <YieldIntelligence />
        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
        </div>
        <GrowthDrivers />
        <ProblemSection />
      </div>
    </main>
  );
}
