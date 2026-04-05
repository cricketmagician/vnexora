import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { WelcomeIntro } from "@/components/sections/WelcomeIntro";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { OperationalStrategy } from "@/components/sections/OperationalStrategy";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      <Hero />
      <div className="relative z-10">
        <StatsSection />
        <WelcomeIntro />
        <TrustedBrands />
        <OperationalStrategy />
        <ProblemSection />
      </div>
    </main>
  );
}
