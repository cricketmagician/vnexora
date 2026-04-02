"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    rating: 5,
    title: "Head and Shoulders Above the Rest",
    quote: "I cannot recommend this agency more! Amazing agency with a great approach to clients and candidates. The whole process from registration, securing interviews, and communication was very clear, quick and smooth.",
    author: "Claudie",
    role: "Private Housekeeper to UHNWF"
  },
  {
    rating: 5,
    title: "The much-needed difference in recruitment",
    quote: "Professional, friendly and prompt. I have been working in the private sector for many years and dealt with lots of recruitment agencies. From the very start of the process, Jana was so professional, friendly and informative.",
    author: "Simon",
    role: "House Manager to UHNW Family"
  },
  {
    rating: 5,
    title: "Legendary Talent for Iconic Brands",
    quote: "As a five-star hotel, our standards are uncompromising. VNEXORA consistently delivers candidates who not only meet but exceed our operational requirements. They are our go-to partner for elite hospitality search.",
    author: "Marcus",
    role: "General Manager, Iconic 5-Star Hotel"
  },
  {
    rating: 5,
    title: "The Standard of Culinary Excellence",
    quote: "Finding Michelin-standard culinary talent is notoriously difficult. VNEXORA understands our brand ethos and consistently sources the visionary chefs and front-of-house experts that define our guest experience.",
    author: "Elena",
    role: "Executive Chef, Fine Dining Group"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-[#3A4A4F] overflow-hidden relative border-t border-white/5">
       {/* Background botanical accents */}
       <div className="absolute top-0 left-0 w-[40%] h-full opacity-5 pointer-events-none -translate-x-1/2">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
             <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
          </svg>
       </div>
       
       <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
             <h2 className="text-4xl md:text-6xl font-serif text-white italic">Why Partners Choose to Work With Us</h2>
          </div>
          
          <div className="max-w-5xl mx-auto relative h-[500px] md:h-auto">
             <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="grid md:grid-cols-2 gap-8 items-stretch"
                >
                   {/* We display 2 at a time on desktop, 1 on mobile */}
                   {[
                     testimonials[currentIndex],
                     testimonials[(currentIndex + 1) % testimonials.length]
                   ].map((item, idx) => (
                      <div key={idx} className={`bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl space-y-8 flex flex-col justify-between ${idx === 1 ? 'hidden md:flex' : 'flex'}`}>
                         <div className="space-y-6">
                            <div className="flex gap-1">
                               {[...Array(item.rating)].map((_, i) => (
                                 <Star key={i} className="w-5 h-5 fill-mustard text-mustard" />
                               ))}
                            </div>
                            <div className="space-y-4">
                               <h3 className="text-2xl lg:text-3xl font-serif text-forest leading-tight tracking-tight italic font-bold">
                                  &quot;{item.title}&quot;
                               </h3>
                               <p className="text-forest/70 text-lg leading-relaxed font-light italic">
                                  {item.quote}
                               </p>
                            </div>
                         </div>
                         
                         <div className="pt-8 border-t border-forest/5 space-y-1">
                            <p className="font-serif text-xl text-forest">{item.author}</p>
                            <p className="text-mustard text-xs uppercase font-bold tracking-[0.2em]">{item.role}</p>
                         </div>
                      </div>
                   ))}
                </motion.div>
             </AnimatePresence>

             {/* Carousel Pagers */}
             <div className="flex justify-center gap-4 mt-16">
                {testimonials.map((_, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setCurrentIndex(idx)}
                     className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-mustard w-10' : 'bg-white/20'}`}
                   />
                ))}
             </div>
          </div>
       </div>
    </Section>
  );
};
