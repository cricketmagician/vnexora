"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const brands = [
  { name: "Brand 1", logo: "/images/logos/brand_batch_2/1.png" },
  { name: "Brand 2", logo: "/images/logos/brand_batch_2/2.png" },
  { name: "Brand 3", logo: "/images/logos/brand_batch_2/3.png" },
  { name: "Brand 4", logo: "/images/logos/brand_batch_2/4.png" },
  { name: "Brand 5", logo: "/images/logos/brand_batch_2/5.png" },
  { name: "Brand 6", logo: "/images/logos/brand_batch_2/6.png" },
  { name: "Brand 7", logo: "/images/logos/brand_batch_2/7.png" },
  { name: "Brand 8", logo: "/images/logos/brand_batch_2/8.png" },
  { name: "Brand 9", logo: "/images/logos/brand_batch_2/9.png" },
  { name: "Brand 10", logo: "/images/logos/brand_batch_2/10.png" },
  { name: "Brand 11", logo: "/images/logos/brand_batch_2/11.png" },
  { name: "Brand 12", logo: "/images/logos/brand_batch_2/12.png" },
  { name: "Brand 13", logo: "/images/logos/brand_batch_2/13.png" },
  { name: "Brand 14", logo: "/images/logos/brand_batch_2/14.png" },
  { name: "Brand 15", logo: "/images/logos/brand_batch_2/15.png" },
  { name: "Brand 16", logo: "/images/logos/brand_batch_2/16.png" },

  { name: "RT1 Brand 1", logo: "/images/rt1/12.png" },
  { name: "RT1 Brand 2", logo: "/images/rt1/13.png" },
  { name: "RT1 Brand 3", logo: "/images/rt1/14.png" },
  { name: "RT1 Brand 4", logo: "/images/rt1/15.png" },
  { name: "RT1 Brand 5", logo: "/images/rt1/16.png" },
  { name: "New Brand 1", logo: "/images/logos/new_brands/1.png" },
  { name: "New Brand 2", logo: "/images/logos/new_brands/2.png" },
  { name: "New Brand 3", logo: "/images/logos/new_brands/3.png" },
  { name: "New Brand 4", logo: "/images/logos/new_brands/4.png" },
];

export const TrustedBrands = () => {
  // Duplicating the brands array to ensure a seamless infinite loop 
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-b border-white/5">
      {/* Dynamic Background Elements for Frosted Glass Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#E3B448]/10 blur-[140px] rounded-full opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#E3B448]/5 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-[5px] max-w-7xl relative z-20 mb-20 md:mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#E3B448] text-sm md:text-base font-black uppercase tracking-[0.4em] mb-6 block"
          >
            STRATEGIC GLOBAL TIE-UPS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[1.05] mb-10 font-light"
          >
            Partner with <br />
            <span className="italic text-[#E3B448]">Global Excellence.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Unlocking unprecedented asset value through elite brand integration, strategic matchmaking, and institutional-grade negotiation.
          </motion.p>
        </div>
      </div>

      {/* Brand Marquee Flow - Row 1 (Right to Left) */}
      <div className="relative w-full overflow-hidden flex py-10 md:py-16">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        
        <motion.div 
          className="flex items-center gap-16 md:gap-32 w-max px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 45, // Unified Speed
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="h-12 md:h-[80px] lg:h-[100px] flex-shrink-0 opacity-100 transition-all duration-500 hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_0_20px_rgba(227,180,72,0.3)]"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
        
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>

      {/* Brand Marquee Flow - Row 2 (Left to Right) */}
      <div className="relative w-full overflow-hidden flex py-10 md:py-16 mt-8 md:mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        
        <motion.div 
          className="flex items-center gap-16 md:gap-32 w-max px-12"
          animate={{ x: ["-50%", "0%"] }} // Opposite Direction
          transition={{ 
            duration: 45, // Synchronized Speed
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Mapping the 20 new logos (1.png to 20.png) duplicated for seamless loop */}
          {[...Array(20), ...Array(20)].map((_, i) => (
            <div
              key={`new-logo-${i}`}
              className="h-12 md:h-[80px] lg:h-[100px] flex-shrink-0 opacity-100 transition-all duration-500 hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_0_20px_rgba(227,180,72,0.3)]"
            >
              <img
                src={`/images/logos/${(i % 20) + 1}.png`}
                alt={`Partner Logo ${(i % 20) + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
        
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>
    </section>
  );
};
