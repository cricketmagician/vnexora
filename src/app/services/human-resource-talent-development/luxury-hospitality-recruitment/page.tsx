import { LuxuryRecruitmentHero } from "@/components/sections/LuxuryRecruitmentHero";
import { RecruitmentMarquee } from "@/components/sections/RecruitmentMarquee";
import { BrochureSection } from "@/components/sections/BrochureSection";
import { LuxurySpecializations } from "@/components/sections/LuxurySpecializations";
import { Testimonials } from "@/components/sections/Testimonials";
import { DualConversion } from "@/components/sections/DualConversion";
import { ContactBriefForm } from "@/components/sections/ContactBriefForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LuxuryHospitalityRecruitmentPage() {
  return (
    <main className="min-h-screen bg-cream pt-0 relative overflow-hidden">
      {/* Back to Services Link - Elegant Overlay */}
      <div className="container mx-auto px-4 md:px-8 absolute top-32 md:top-40 left-0 right-0 z-20 pointer-events-none">
        <Link 
          href="/services/human-resource-talent-development" 
          className="inline-flex items-center text-white/50 hover:text-mustard transition-all group pointer-events-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to Personnel Support</span>
        </Link>
      </div>

      <LuxuryRecruitmentHero />
      <RecruitmentMarquee />
      <BrochureSection />
      <LuxurySpecializations />
      <Testimonials />
      <DualConversion />
      
      {/* Standard HR Contact form at the bottom */}
      <ContactBriefForm />
    </main>
  );
}
