"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const allLogos = [
  { name: "Marriott", src: "/images/logos/brand_batch_2/1.png" },
  { name: "Hilton", src: "/images/logos/brand_batch_2/2.png" },
  { name: "Taj Hotels", src: "/images/logos/taj.png" },
  { name: "Hyatt", src: "/images/logos/brand_batch_2/3.png" },
  { name: "Radisson", src: "/images/logos/radisson.png" },
  { name: "Intercontinental", src: "/images/logos/brand_batch_2/4.png" },
  { name: "The Leela", src: "/images/logos/leela.png" },
  { name: "Accor", src: "/images/logos/accor.png" },
  { name: "Wyndham", src: "/images/logos/wyndham.png" },
  { name: "IHCL", src: "/images/logos/ihcl.png" },
  { name: "Novotel", src: "/images/logos/novotel.png" },
  { name: "Bloom", src: "/images/logos/bloom.png" },
  { name: "Ginger", src: "/images/logos/ginger.png" },
  { name: "Millennium", src: "/images/logos/millennium.png" },
  { name: "Ascott", src: "/images/logos/ascott.png" },
  { name: "Brand 1", src: "/images/logos/1.png" },
  { name: "Brand 2", src: "/images/logos/2.png" },
  { name: "Brand 3", src: "/images/logos/3.png" },
  { name: "Brand 4", src: "/images/logos/4.png" },
  { name: "Brand 5", src: "/images/logos/5.png" },
  { name: "Brand 6", src: "/images/logos/6.png" },
  { name: "Brand 7", src: "/images/logos/7.png" },
  { name: "Brand 8", src: "/images/logos/8.png" },
  { name: "Brand 9", src: "/images/logos/9.png" },
  { name: "Brand 10", src: "/images/logos/10.png" },
];

export function BrandGridSlider() {
  // Triple the list to ensure smooth infinite loop
  const duplicatedLogos = [...allLogos, ...allLogos, ...allLogos];

  return (
    <div className="relative w-full aspect-[4/3] bg-black border border-white/10 shadow-2xl overflow-hidden group rounded-xl">
      {/* Top and Bottom Fading Masks */}
      <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_40px_60px_-20px_rgba(0,0,0,1),inset_0_-40px_60px_-20px_rgba(0,0,0,1)]" />
      
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="relative h-full overflow-hidden">
            <motion.div
              animate={{ 
                y: colIndex % 2 === 0 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] 
              }}
              transition={{ 
                duration: 20 + (colIndex * 3), 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-2"
            >
              {duplicatedLogos.map((brand, idx) => (
                <div
                  key={`${colIndex}-${idx}`}
                  className="aspect-square flex items-center justify-center p-6 border border-white/[0.05] bg-white/[0.02] rounded-lg"
                >
                  <div className="relative w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <img
                      src={brand.src}
                      alt={brand.name}
                      style={{ filter: "brightness(0) invert(1)" }}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-3 right-5 z-30 text-[7px] font-black tracking-[0.5em] text-white/20 uppercase">
        Vnexora Strategic Partners
      </div>
      
      {/* Top Golden Accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-mustard to-transparent opacity-50 z-30" />
    </div>
  );
}
