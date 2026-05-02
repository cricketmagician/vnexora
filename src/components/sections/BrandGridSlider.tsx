"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const brandsPage1 = [
  { name: "Marriott Bonvoy", src: "/images/logos/brand_batch_2/1.png" },
  { name: "Hilton", src: "/images/logos/brand_batch_2/2.png" },
  { name: "Taj Hotels", src: "/images/logos/taj.png" },
  { name: "Hyatt", src: "/images/logos/brand_batch_2/3.png" },
  { name: "Radisson", src: "/images/logos/radisson.png" },
  { name: "Intercontinental", src: "/images/logos/brand_batch_2/4.png" },
  { name: "The Leela", src: "/images/logos/leela.png" },
  { name: "Accor", src: "/images/logos/accor.png" },
  { name: "Wyndham", src: "/images/logos/wyndham.png" },
];

const brandsPage2 = [
  { name: "IHCL", src: "/images/logos/ihcl.png" },
  { name: "Novotel", src: "/images/logos/novotel.png" },
  { name: "Bloom Hotels", src: "/images/logos/bloom.png" },
  { name: "Ginger", src: "/images/logos/ginger.png" },
  { name: "Millennium", src: "/images/logos/millennium.png" },
  { name: "Ascott", src: "/images/logos/ascott.png" },
  { name: "Brand 7", src: "/images/logos/brand_batch_2/7.png" },
  { name: "Brand 8", src: "/images/logos/brand_batch_2/8.png" },
  { name: "Brand 9", src: "/images/logos/brand_batch_2/9.png" },
];

const brandsPage3 = [
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

const pages = [brandsPage1, brandsPage2, brandsPage3];

export function BrandGridSlider() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] bg-white border border-black/5 shadow-2xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-4 md:p-6"
        >
          {pages[currentPage].map((brand, idx) => (
            <div
              key={brand.name + idx}
              className="relative flex items-center justify-center p-4 border border-black/[0.03] transition-all duration-500 hover:bg-zinc-50 group/item"
            >
              <div className="relative w-full h-full grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700">
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
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {pages.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${
              currentPage === i ? "w-8 bg-mustard" : "w-2 bg-black/10"
            }`}
          />
        ))}
      </div>
      
      {/* Visual Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mustard/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
    </div>
  );
}
