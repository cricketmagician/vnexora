"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Counter } from "@/components/ui/Counter";
import { useConsultation } from "@/context/ConsultationContext";

export const YieldIntelligence = () => {
  const { openConsultation } = useConsultation();
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
              From <span className="text-[#E3B448]">Rooms To Revenue.</span> <br />
              Faster Growth with VNEXORA.
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              VNEXORA connects with your PMS, channel manager, and OTAs to improve pricing, bookings, and demand every day. We work like your in-house hotel growth team to increase occupancy, boost room rates, grow revenue, and improve overall profits.
            </p>
          </div>

          <div>
            <button 
              onClick={openConsultation}
              className="px-12 py-6 bg-[#E3B448] text-black text-sm font-bold rounded-full hover:bg-white transition-all duration-300 shadow-2xl shadow-[#E3B448]/20"
            >
              Book a 20-min consult
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
