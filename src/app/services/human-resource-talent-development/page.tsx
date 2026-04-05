"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LuxuryRecruitmentHero } from "@/components/sections/LuxuryRecruitmentHero";
import { RecruitmentMarquee } from "@/components/sections/RecruitmentMarquee";
import { BrochureSection } from "@/components/sections/BrochureSection";
import { LuxurySpecializations } from "@/components/sections/LuxurySpecializations";
import { RecruitmentJourney } from "@/components/sections/RecruitmentJourney";
import { Testimonials } from "@/components/sections/Testimonials";
import { DualConversion } from "@/components/sections/DualConversion";
import { ContactBriefForm } from "@/components/sections/ContactBriefForm";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HumanResourcesPage() {
  return (
    <main className="min-h-screen bg-forest pt-0 relative overflow-hidden selection:bg-mustard/30 selection:text-white">
      {/* 
         ════════════════════════════════════════════════════
         ELITE RECRUITMENT PLATFORM (FULL RESTORATION)
         Cinematic Dark Mode Experience
         Forest Green (#0A221F) / Mustard (#CBA055)
         ════════════════════════════════════════════════════
      */}

      <Navbar />

      {/* Floating Back Navigation */}
      <div className="absolute top-32 left-8 md:left-12 z-50 pointer-events-none">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 1 }}
           className="pointer-events-auto"
        >
          <Link 
            href="/" 
            className="flex items-center gap-3 text-white/40 hover:text-mustard transition-all group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mustard/50 transition-all">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] hidden md:block">Back to Showcase</span>
          </Link>
        </motion.div>
      </div>

      <LuxuryRecruitmentHero />
      
      <RecruitmentMarquee />

      <BrochureSection />

      <LuxurySpecializations />

      <RecruitmentJourney />

      <Testimonials />

      <DualConversion />
      
      <ContactBriefForm />

      <Footer />
    </main>
  );
}
