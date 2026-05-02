"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const allLogos = [
  // Set 1
  { name: "Marriott Bonvoy", src: "/images/logos/brand_batch_2/1.png" },
  { name: "Hilton", src: "/images/logos/brand_batch_2/2.png" },
  { name: "Taj Hotels", src: "/images/logos/taj.png" },
  { name: "Hyatt", src: "/images/logos/brand_batch_2/3.png" },
  { name: "Radisson", src: "/images/logos/radisson.png" },
  { name: "Intercontinental", src: "/images/logos/brand_batch_2/4.png" },
  { name: "The Leela", src: "/images/logos/leela.png" },
  { name: "Accor", src: "/images/logos/accor.png" },
  { name: "Wyndham", src: "/images/logos/wyndham.png" },
  // Set 2
  { name: "IHCL", src: "/images/logos/ihcl.png" },
  { name: "Novotel", src: "/images/logos/novotel.png" },
  { name: "Bloom Hotels", src: "/images/logos/bloom.png" },
  { name: "Ginger", src: "/images/logos/ginger.png" },
  { name: "Millennium", src: "/images/logos/millennium.png" },
  { name: "Ascott", src: "/images/logos/ascott.png" },
  { name: "Brand 7", src: "/images/logos/brand_batch_2/7.png" },
  { name: "Brand 8", src: "/images/logos/brand_batch_2/8.png" },
  { name: "Brand 9", src: "/images/logos/brand_batch_2/9.png" },
  // Set 3
  { name: "Brand 10", src: "/images/logos/brand_batch_2/10.png" },
  { name: "Brand 11", src: "/images/logos/brand_batch_2/11.png" },
  { name: "Brand 12", src: "/images/logos/brand_batch_2/12.png" },
  { name: "Brand 13", src: "/images/logos/brand_batch_2/13.png" },
  { name: "Brand 14", src: "/images/logos/brand_batch_2/14.png" },
  { name: "Brand 15", src: "/images/logos/brand_batch_2/15.png" },
  { name: "Brand 16", src: "/images/logos/brand_batch_2/16.png" },
  { name: "New Brand 1", src: "/images/logos/new_brands/1.png" },
  { name: "New Brand 2", src: "/images/logos/new_brands/2.png" },
];

export function BrandGridSlider() {
  return (
    <div className="relative w-full aspect-[4/3] bg-[#0A0A0A] border border-white/5 shadow-2xl overflow-hidden group rounded-xl">
      {/* Subtle Gradient Overlay for 'Disappear' effect at top and bottom */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      
      <div className="absolute inset-0 grid grid-cols-3 gap-1 p-6">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="relative h-full overflow-hidden">
            <motion.div
              animate={{ 
                y: colIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] 
              }}
              transition={{ 
                duration: 25 + (colIndex * 5), 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-1"
            >
              {[...allLogos, ...allLogos].map((brand, idx) => (
                <div
                  key={idx}
                  className="aspect-square flex items-center justify-center p-6 border border-white/[0.03] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 rounded-lg"
                >
                  <div className="relative w-full h-full invert brightness-[100] opacity-40 hover:opacity-100 transition-all duration-700">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-4 right-6 z-20 text-[8px] font-black tracking-[0.4em] text-white/10 uppercase">
        Vnexora Strategic Partners
      </div>
      
      {/* Top Highlight Bar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mustard to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 z-20" />
    </div>
  );
}
