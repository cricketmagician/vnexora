"use client";

import { LuxuryRecruitmentHero } from "@/components/sections/LuxuryRecruitmentHero";
import { RecruitmentMarquee } from "@/components/sections/RecruitmentMarquee";
import { BrochureSection } from "@/components/sections/BrochureSection";
import { LuxurySpecializations } from "@/components/sections/LuxurySpecializations";
import { RecruitmentJourney } from "@/components/sections/RecruitmentJourney";
import { Testimonials } from "@/components/sections/Testimonials";
import { DualConversion } from "@/components/sections/DualConversion";
import { ContactBriefForm } from "@/components/sections/ContactBriefForm";
import { motion } from "framer-motion";

export default function LuxuryHospitalityRecruitmentPage() {
  return (
    <main className="min-h-screen bg-forest pt-0 relative overflow-hidden selection:bg-mustard/30 selection:text-white">
      {/* 
         ════════════════════════════════════════════════════
         ELITE RECRUITMENT PLATFORM (Level 2 Deep)
         Cinematic Dark Mode Experience
         Forest Green (#0A221F) / Mustard (#CBA055)
         ════════════════════════════════════════════════════
      */}





      <LuxuryRecruitmentHero />
      
      <RecruitmentMarquee />

      <BrochureSection />

      <LuxurySpecializations />

      <RecruitmentJourney />

      <Testimonials />

      <DualConversion />
      
      <ContactBriefForm />


    </main>
  );
}
