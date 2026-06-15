

import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";

const StatsSection = dynamic(() => import("@/components/sections/StatsSection").then(mod => mod.StatsSection));
const WelcomeIntro = dynamic(() => import("@/components/sections/WelcomeIntro").then(mod => mod.WelcomeIntro));
const HospitalitySolutions = dynamic(() => import("@/components/sections/HospitalitySolutions").then(mod => mod.HospitalitySolutions));
const TrustedBrands = dynamic(() => import("@/components/sections/TrustedBrands").then(mod => mod.TrustedBrands));
const GrowthDrivers = dynamic(() => import("@/components/sections/GrowthDrivers").then(mod => mod.GrowthDrivers));
const HotelSolutions = dynamic(() => import("@/components/sections/HotelSolutions").then(mod => mod.HotelSolutions));
const PartnershipStructures = dynamic(() => import("@/components/sections/PartnershipStructures").then(mod => mod.PartnershipStructures));
const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection").then(mod => mod.ProblemSection));
const PartnerCTA = dynamic(() => import("@/components/sections/PartnerCTA").then(mod => mod.PartnerCTA));
const StrategicPartnerCTA = dynamic(() => import("@/components/sections/StrategicPartnerCTA").then(mod => mod.StrategicPartnerCTA));

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
      </div>
    </main>
  );
}
