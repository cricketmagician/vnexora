import { HRHero } from "@/components/sections/HRHero";
import { ExpertiseTabs } from "@/components/sections/ExpertiseTabs";
import { RecruitmentJourney } from "@/components/sections/RecruitmentJourney";
import { ValueProps } from "@/components/sections/ValueProps";
import { HRFAQ } from "@/components/sections/HRFAQ";
import { ContactBriefForm } from "@/components/sections/ContactBriefForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HumanResourcesPage() {
  return (
    <main className="min-h-screen bg-cream pt-0 relative overflow-hidden">
      {/* Back to Home Link - Elegant Overlay */}
      <div className="container mx-auto px-4 md:px-8 absolute top-32 md:top-40 left-0 right-0 z-20 pointer-events-none">
        <Link 
          href="/" 
          className="inline-flex items-center text-white/60 hover:text-mustard transition-all group pointer-events-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to Home</span>
        </Link>
      </div>

      <HRHero />
      
      <ExpertiseTabs />
      
      <RecruitmentJourney />
      
      <ValueProps />
      
      <HRFAQ />
      
      <ContactBriefForm />
    </main>
  );
}
