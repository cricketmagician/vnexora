"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Counter } from "@/components/ui/Counter";

export const YieldIntelligence = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-[5px] max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                From <span className="text-[#D4AF37]">Rooms To Revenue.</span> <br />
                Faster Growth with VNEXORA.
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                VNEXORA connects with your PMS, channel manager, and OTAs to improve pricing, bookings, and demand every day. We work like your in-house hotel growth team to increase occupancy, boost room rates, grow revenue, and improve overall profits.
              </p>
            </div>

            <div>
              <button className="px-10 py-5 bg-[#D4AF37] text-black text-base font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-black/10">
                Book a 20-min consult
              </button>
            </div>

            {/* Stats Row with Dividers - Exact Siivo Match */}
            <div className="pt-16 grid grid-cols-2 gap-x-8 gap-y-12 max-w-lg">
              {[
                { label: "Revenue", value: 25, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/revenue.png" },
                { label: "ADR", value: 18, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/adr.png" },
                { label: "Occupancy", value: 30, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/occupancy.png" },
                { label: "Direct Bookings", value: 40, prefix: "+", suffix: "%", icon: "/images/sections/yield-stats/direct-bookings.png" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center space-x-6">
                  <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
                    <Image 
                      src={stat.icon} 
                      alt={stat.label} 
                      fill 
                      className="object-contain brightness-110 drop-shadow-2xl scale-110"
                    />
                  </div>
                  <div className={`${i % 2 === 0 ? 'pr-8 lg:pr-12 border-r border-white/10' : ''}`}>
                    <div className="text-xl md:text-2xl font-sans font-semibold text-white mb-0.5">
                      <Counter 
                        value={stat.value} 
                        prefix={stat.prefix} 
                        suffix={stat.suffix} 
                        delay={i * 0.2}
                      />
                    </div>
                    <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[1/1.1] rounded-[4rem] overflow-hidden shadow-2xl shadow-black/5">
              <Image 
                src="/images/jyi.jpeg" 
                alt="Institutional Revenue Strategy" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
