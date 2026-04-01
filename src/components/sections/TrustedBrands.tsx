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
    <section className="bg-[#2f0616] py-24 md:py-32 relative overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-20 md:mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-wide leading-[1.1] mb-8 uppercase font-light"
          >
            Our Strategic <br />
            <span className="italic text-mustard">Partners</span>
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
      <div className="relative w-full overflow-hidden flex bg-[#2f0616]">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#2f0616] to-transparent z-10" />
        
        <motion.div 
          className="flex items-center gap-16 md:gap-24 w-max px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="h-20 md:h-[120px] lg:h-[150px] flex-shrink-0 grayscale brightness-[2] opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105"
              style={{ mixBlendMode: 'screen' }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#2f0616] to-transparent z-10" />
      </div>
    </section>
  );
};
