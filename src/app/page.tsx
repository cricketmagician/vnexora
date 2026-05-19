export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { WelcomeIntro } from "@/components/sections/WelcomeIntro";
import { HospitalitySolutions } from "@/components/sections/HospitalitySolutions";
import { TrustedBrands } from "@/components/sections/TrustedBrands";

import { GrowthDrivers } from "@/components/sections/GrowthDrivers";
import { HotelSolutions } from "@/components/sections/HotelSolutions";
import { PartnershipStructures } from "@/components/sections/PartnershipStructures";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { StrategicPartnerCTA } from "@/components/sections/StrategicPartnerCTA";
import { StrategicVisual } from "@/components/sections/StrategicVisual";

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
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E3B448]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
        </div>
        <TrustedBrands />
        <StrategicPartnerCTA />
        <PartnershipStructures targetLink="/services/brand-partnership-solutions#contact" />
        <HotelSolutions />
        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E3B448]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
        </div>
        <GrowthDrivers />
        <ProblemSection />
        <PartnerCTA />
        <StrategicVisual />
      </div>
    </main>
  );
}
