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
  { name: "Radisson", logo: "/images/logos/radisson.png" },
  { name: "The Leela", logo: "/images/logos/leela.png" },
  { name: "Bloom Hotels", logo: "/images/logos/bloom.png" },
  { name: "Taj Hotels", logo: "/images/logos/taj.png" },
  { name: "IHCL", logo: "/images/logos/ihcl.png" },
  { name: "Accor", logo: "/images/logos/accor.png" },
  { name: "Novotel", logo: "/images/logos/novotel.png" },
  { name: "Wyndham", logo: "/images/logos/wyndham.png" },
  { name: "Ginger", logo: "/images/logos/ginger.png" },
  { name: "Millennium", logo: "/images/logos/millennium.png" },
  { name: "Ascott", logo: "/images/logos/ascott.png" },
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
        <div className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-3xl" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#CFA052]/10 blur-[140px] rounded-full opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#2f0616]/40 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 mb-20 md:mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-wide leading-[1.1] mb-8 uppercase font-light"
          >
            Our Strategic <br />
            <span className="italic text-[#CFA052]">Partners</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Collaborating with the world's most distinguished hospitality brands to deliver unparalleled luxury experiences and enduring asset value.
          </motion.p>
        </div>
      </div>

      {/* Brand Marquee Flow - TFGHospitality Style */}
      <div className="relative w-full overflow-hidden flex py-10">
        {/* Transparent Overlays instead of solid colors for better blending */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        
        <motion.div 
          className="flex items-center gap-16 md:gap-24 w-max px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="h-16 md:h-[100px] lg:h-[120px] flex-shrink-0 grayscale brightness-[2.5] opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-110 hover:grayscale-0"
              style={{ mixBlendMode: 'plus-lighter' }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Right Transparent Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>
    </section>
  );
};
