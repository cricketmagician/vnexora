"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface RoadmapNode {
  title: string;
  category: string;
  icon: LucideIcon;
  img: string;
  desc?: string;
}

interface RoadmapCarouselProps {
  nodes: RoadmapNode[];
}

export default function RoadmapCarousel({ nodes }: RoadmapCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12 z-30">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/10 transition-all duration-500",
            canScrollLeft ? "bg-white/10 text-white hover:bg-white hover:text-black opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12 z-30">
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/10 transition-all duration-500",
            canScrollRight ? "bg-white/10 text-white hover:bg-white hover:text-black opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 px-4 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {nodes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="w-[85vw] md:w-[600px] shrink-0 aspect-[16/10] relative overflow-hidden group snap-center shadow-2xl bg-[#0A0A0A] border border-white/5 rounded-none"
          >
            <Image 
              src={item.img} 
              alt={item.title} 
              fill 
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-[#CFA052]/40" />
                <span className="text-[9px] font-black tracking-[0.5em] uppercase text-[#CFA052]">{item.category}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">{item.title}</h3>
              {item.desc && (
                <p className="text-white/40 text-sm font-light mt-4 max-w-sm line-clamp-2">{item.desc}</p>
              )}
            </div>
            
            {/* Icon Bubble */}
            <div className="absolute top-10 right-10 w-14 h-14 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
              <item.icon size={24} className="text-[#CFA052]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
