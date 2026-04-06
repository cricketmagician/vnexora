"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 0,
    label: "GLOBAL ADVISORY",
    image: "/images/hero/hero_checkin.png",
    headline: "Redefining Yield through Strategic Precision.",
    description: "We engineer high-performance hospitality assets for the world's most discerning investors.",
    ctaText: "OUR STORY"
  },
  {
    id: 1,
    label: "OPERATIONAL ALPHA",
    image: "/images/hero/hero_bar.png",
    headline: "Institutional Excellence. Curated for Legacy.",
    description: "Elevating operational standards across premium boutique and luxury hotel portfolios.",
    ctaText: "CONSULT US"
  },
  {
    id: 2,
    label: "ASSET TRANSFORMATION",
    image: "/images/hero/hero_city_day.png",
    headline: "Engineering Long-Term Portfolio Viability.",
    description: "Transforming hospitality challenges into high-yield, market-leading asset collections.",
    ctaText: "OUR PORTFOLIO"
  },
  {
    id: 3,
    label: "CULTURAL HERITAGE",
    image: "/images/hero/hero_9.png",
    headline: "Sacred Heritage. Modern Global Standards.",
    description: "Bridging the spiritual soul of Varanasi with world-class hospitality architecture.",
    ctaText: "OUR VISION"
  },
  {
    id: 4,
    label: "STRATEGIC MANDATE",
    image: "/images/hero/hero_city_night.png",
    headline: "The Discrete Architect of Global Assets.",
    description: "Providing high-fidelity advisory for acquisition, development, and management.",
    ctaText: "SERVICES"
  }
];

const staggerVariants: any = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 1.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

export const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlideIndex] || slides[0];

  const handleNext = () => setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative z-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={`img-container-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.headline}
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ 
                scale: { duration: 20, ease: "linear" } 
              }}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.45] transform-gpu"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Institutional Content Layer */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full flex flex-col items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              className="flex flex-col items-center"
            >
              {/* Institutional Label */}
              <motion.span
                custom={0}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-[10px] md:text-[11px] font-black tracking-[0.7em] text-[#CFA052] uppercase mb-10 block drop-shadow-lg"
              >
                {slide.label}
              </motion.span>

              {/* High-Impact Headline */}
              <motion.h1
                custom={1}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif italic text-white leading-[1.0] tracking-tighter mb-10 drop-shadow-2xl"
              >
                {slide.headline}
              </motion.h1>

              {/* Descriptive Insight */}
              <motion.p
                custom={2}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-lg md:text-2xl text-white/50 font-light italic leading-relaxed max-w-3xl mb-16 px-4"
              >
                "{slide.description}"
              </motion.p>

              {/* Strategy CTA */}
              <motion.div
                custom={3}
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Link href={slide.ctaText === "CONSULT US" ? "/contact" : "/services"}>
                  <Button 
                    size="lg" 
                    className="px-16 py-8 bg-transparent text-white border border-white/20 hover:border-[#CFA052] hover:text-black font-black tracking-[0.5em] uppercase transition-all duration-700 backdrop-blur-3xl group shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
                  >
                    <span className="relative z-10">{slide.ctaText}</span>
                    <div className="absolute inset-0 bg-[#CFA052] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Slide Navigation - Pro Minimalist Arrows */}
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none hidden lg:flex">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto p-4 text-white/10 hover:text-[#CFA052] transition-all duration-500 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-16 h-16 transform group-hover:-translate-x-2 transition-transform" strokeWidth={0.5} />
        </button>

        <button 
          onClick={handleNext}
          className="pointer-events-auto p-4 text-white/10 hover:text-[#CFA052] transition-all duration-500 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-16 h-16 transform group-hover:translate-x-2 transition-transform" strokeWidth={0.5} />
        </button>
      </div>

      {/* Vertical Pagination Trackers */}
      <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-6 items-end">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlideIndex(i)}
            className="flex items-center gap-4 group"
          >
            <span className={cn(
               "text-[9px] font-black tracking-widest transition-all duration-500 text-white/0 group-hover:text-white/40",
               i === currentSlideIndex && "text-[#CFA052]/60"
            )}>
               0{i + 1}
            </span>
            <div
               className={cn(
                 "w-1 h-6 transition-all duration-700",
                 i === currentSlideIndex ? "bg-[#CFA052] h-10" : "bg-white/10 group-hover:bg-white/30"
               )}
            />
          </button>
        ))}
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#CFA052]/40 z-40 transition-all duration-500" style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }} />

      {/* Exploration Anchor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-12 z-20 flex flex-col items-start gap-4"
      >
        <span className="text-[9px] font-black tracking-[0.6em] uppercase text-white/30 italic">Perspective_Explore</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-[#CFA052]/50 to-transparent" />
      </motion.div>
    </section>
  );
};
