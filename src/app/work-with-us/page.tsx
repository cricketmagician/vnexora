"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Users2, ShieldCheck, Trophy, Sparkles, Layout, Database, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function WorkWithUsPage() {
  const slides = [
    {
      id: "01",
      title: "Become a Hospitality",
      subtitle: "Business Partner",
      tagline: "Your Network. Our Execution. Maximum Earning Potential.",
      description: "Build your own business identity with VNEXORA Luxury Estate — without investment, office setup, manpower, or operational pressure.",
      footerTagline: "Be Your Own Boss. Build With Trust. Earn Without Limits.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      property: "Vnexora Executive Mandate"
    },
    {
      id: "02",
      title: "Strategic",
      subtitle: "Consulting",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      property: "Business Lounge - Dubai, UAE"
    },
    {
      id: "03",
      title: "Global Hospitality",
      subtitle: "Advisory",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      property: "Strategic Hub - London, UK"
    },
    {
      id: "04",
      title: "Empowering",
      subtitle: "Specialists",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      property: "The Vault - Singapore, SG"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05
    })
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-mustard selection:text-black min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. CINEMATIC SLIDER HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 1 },
              scale: { duration: 2 }
            }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={slides[currentSlide].image} 
              alt="Luxury Background" 
              fill 
              className="object-cover opacity-60 grayscale-[0.2]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="container relative z-20 px-6 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-5xl"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-px bg-mustard" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-mustard">Vnexora Network</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif leading-[0.9] tracking-tighter uppercase mb-6">
                {slides[currentSlide].title} <br />
                <span className="italic font-light text-white/80 lowercase ml-[0.1em] text-4xl md:text-6xl lg:text-8xl">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              {slides[currentSlide].tagline && (
                <motion.h2 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-mustard text-[10px] md:text-xs font-black uppercase tracking-[0.6em] mb-10 border-l border-mustard/30 pl-6"
                >
                  {slides[currentSlide].tagline}
                </motion.h2>
              )}

              {slides[currentSlide].description && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-xl mb-12 tracking-wide"
                >
                  {slides[currentSlide].description}
                </motion.p>
              )}

              {slides[currentSlide].footerTagline && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/30 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] mb-16 italic"
                >
                  {slides[currentSlide].footerTagline}
                </motion.p>
              )}

              <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                <Button 
                  onClick={() => document.getElementById('membership-details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-mustard text-black hover:bg-white px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] rounded-none transition-all duration-700 shadow-2xl shadow-mustard/10"
                >
                  Join Task Force
                </Button>
                <div className="flex flex-col gap-1 border-l border-white/10 pl-8">
                  <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">Institutional Hub</span>
                  <span className="text-[11px] font-serif italic text-white/50">"Empowering the elite elite"</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Scroll Down Indicator */}
        <div className="absolute left-10 bottom-10 z-30 hidden lg:flex flex-col items-center gap-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
          <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
        </div>

        {/* Bottom Left Property Label */}
        <div className="absolute left-10 bottom-10 z-30 lg:hidden">
          <p className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">Vnexora Global Network</p>
        </div>
        <div className="absolute left-32 bottom-10 z-30 hidden lg:block">
           <AnimatePresence mode="wait">
             <motion.p 
               key={currentSlide}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase"
             >
               {slides[currentSlide].property}
             </motion.p>
           </AnimatePresence>
        </div>

        {/* Luxury Grid Pagination (1 2 3 4) */}
        <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-30">
          <div className="grid grid-cols-2 bg-black/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-[10px] md:text-xs font-black transition-all duration-700 border border-white/5 ${
                  currentSlide === index 
                    ? "bg-mustard text-black" 
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                {slide.id}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BECOME A MEMBER */}
      <section id="membership-details" className="py-24 md:py-40 bg-[#FCFAF7] text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-serif leading-tight text-black">Become a <span className="italic text-mustard">Member</span></h2>
              <div className="space-y-6">
                <p className="text-black/60 text-lg font-light leading-relaxed">
                  We would love for our VNEXORA community to continue to grow and thrive. If you are an experienced hospitality industry professional and are looking to join a network of other likeminded hospitality specialists collaborating on assignments under the VNEXORA brand umbrella, you may want to explore joining us.
                </p>
                <div className="pt-6">
                  <Button variant="outline" className="border-black/20 text-black hover:bg-black hover:text-white rounded-none px-8 font-bold tracking-[0.2em] text-[10px]">
                    LEARN OUR PROCESS
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-2 gap-4"
            >
              <div className="aspect-[4/5] relative rounded-full overflow-hidden border border-black/5 shadow-2xl">
                <Image src="/images/hero_1.jpg" alt="Member collaboration" fill className="object-cover" />
              </div>
              <div className="aspect-[4/5] relative rounded-full overflow-hidden border border-black/5 shadow-2xl mt-20">
                <Image src="/images/hero_2.jpg" alt="Strategic discussion" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FIVE REASONS SECTION */}
      <section className="py-24 md:py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard mb-6">Strategic Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Five reasons to become a <br /><span className="italic text-gold-gradient">VNEXORA Consultant</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                title: "Bigger Projects",
                icon: Trophy,
                desc: "Access international assignments you wouldn't normally reach as an individual. Stay covered by our global PI insurance."
              },
              {
                num: "02",
                title: "Part of a Team",
                icon: Users2,
                desc: "Work within a wider team of like-minded experts. Exchange ideas, backgrounds, and expertise in a real community."
              },
              {
                num: "03",
                title: "Gain Credibility",
                icon: ShieldCheck,
                desc: "Leverage the credibility of a well-established international group. Get a VNEXORA email, business cards, and network access."
              },
              {
                num: "04",
                title: "Raise Your Profile",
                icon: Sparkles,
                desc: "Get your own profile page, case study mentions, and reach a wider audience through our global social channels."
              },
              {
                num: "05",
                title: "Access Resources",
                icon: Database,
                desc: "Tap into a library of industry reports, market intelligence, and templates specific to luxury hospitality."
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative p-8 bg-white/[0.03] border border-white/5 hover:border-mustard/30 transition-all duration-700 flex flex-col items-center text-center h-full"
              >
                {/* Number Background */}
                <div className="absolute top-4 right-6 text-4xl font-serif text-white/[0.02] group-hover:text-mustard/10 transition-colors duration-700 pointer-events-none font-bold">
                  {reason.num}
                </div>

                <div className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-mustard group-hover:text-black transition-all duration-700 shadow-xl">
                  <reason.icon className="w-6 h-6 stroke-[1.2]" />
                </div>

                <div className="space-y-6 relative z-10 flex flex-col h-full">
                  <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-mustard group-hover:text-white transition-colors">
                    {reason.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-mustard/20 mx-auto group-hover:w-16 group-hover:bg-mustard/60 transition-all" />
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light group-hover:text-white transition-colors mt-auto">
                    {reason.desc}
                  </p>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-mustard/0 group-hover:bg-mustard/[0.02] transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW TO JOIN */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hotel_guests_enjoying.png" alt="Hospitality Background" fill className="object-cover opacity-[0.05] grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif italic">How to join <span className="text-mustard not-italic">VNEXORA</span></h2>
            <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Joining VNEXORA is straightforward, yet we follow a rigorous screening process to ensure we get the right people on board and add value to both the consultant and the VNEXORA network.
              </p>
              <p>
                We look for hospitality industry professionals with at least 10 years of experience at a senior level; Director, Vice President or C-suite. This can be at a hospitality brand, management company, owner/investor group or development business.
              </p>
              <p>
                We look for like-minded professionals who bring a depth of experience and breadth of perspective, integrity, creativity, curiosity and a collaborative approach.
              </p>
            </div>
            <div className="pt-8">
               <Button 
                onClick={() => document.getElementById('partnership-forms')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-mustard text-black hover:bg-white px-12 py-8 text-[11px] font-black uppercase tracking-[0.5em] rounded-none"
               >
                 Apply to Join
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP FORM SECTION */}
      <section id="partnership-forms" className="py-24 md:py-40 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 italic uppercase">Join the <span className="text-mustard not-italic">Task Force</span></h2>
            <p className="text-mustard text-sm md:text-lg font-bold uppercase tracking-[0.3em] mb-4">Elevate your expertise in offering hospitality consulting services.</p>
            <p className="text-white/40 text-sm md:text-base font-light tracking-wide">
              Submit your mandate brief. Our strategic desk will review and initiate contact within 24 institutional hours.
            </p>
          </div>

          <form className="space-y-8 p-12 bg-white border border-black/5 rounded-[2rem] shadow-2xl relative overflow-hidden text-black">
            {/* Subtle Gradient Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-mustard/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Institutional Email</label>
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Expertise Area</label>
                <select className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black/60 outline-none focus:border-mustard transition-all uppercase appearance-none">
                  <option className="bg-white">Strategic Advisory</option>
                  <option className="bg-white">Development & Asset Management</option>
                  <option className="bg-white">ESG Advisory</option>
                  <option className="bg-white">Operational Advisory</option>
                  <option className="bg-white">Branding & Marketing</option>
                  <option className="bg-white">Sales & Commercial</option>
                  <option className="bg-white">Financial Advisory</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Years of Experience</label>
                <input 
                  type="text" 
                  placeholder="10+ YEARS"
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase"
                />
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <label className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">Your Vision</label>
              <textarea 
                placeholder="HOW CAN WE BUILD TOGETHER?"
                rows={4}
                className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black placeholder:text-black/20 outline-none focus:border-mustard transition-all uppercase resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-black text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-mustard hover:text-black transition-all duration-700 shadow-2xl relative z-10"
            >
              Transmit Mandate
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
