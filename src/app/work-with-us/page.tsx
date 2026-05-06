"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users2, ShieldCheck, Trophy, Sparkles, Layout, Database, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function WorkWithUsPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-mustard selection:text-black min-h-screen">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/luxury_daylight_bg.png" 
            alt="Work With Us Hero" 
            fill 
            className="object-cover opacity-40 grayscale-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-mustard/30 rounded-full bg-mustard/5 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-mustard animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-mustard">Vnexora Network</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight uppercase">
              Become a <br />
              <span className="italic text-gold-gradient">Task Force</span>
            </h1>
            
            <div className="max-w-4xl mx-auto pt-8 space-y-6">
              <h2 className="text-white/90 text-2xl md:text-4xl font-serif leading-relaxed italic">
                "We empower consultants to maximize their value"
              </h2>
              <div className="w-12 h-[1px] bg-mustard/40 mx-auto my-8" />
              <p className="text-white/60 text-base md:text-xl font-light leading-relaxed">
                Uncover the possibilities within the hospitality industry. We are always seeking talented and experienced consultants who are interested in expanding their horizons. Take your talent across the country while exploring new cities and growing your career in the hospitality industry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <Button 
                onClick={() => document.getElementById('membership-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-mustard text-black hover:bg-white px-10 py-7 text-[11px] font-black uppercase tracking-[0.3em] rounded-none"
              >
                Explore Opportunities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BECOME A MEMBER */}
      <section id="membership-details" className="py-24 md:py-40 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Become a <span className="italic text-mustard">Member</span></h2>
            <div className="space-y-6">
              <p className="text-white/60 text-lg font-light leading-relaxed">
                We would love for our VNEXORA community to continue to grow and thrive. If you are an experienced hospitality industry professional and are looking to join a network of other likeminded hospitality specialists collaborating on assignments under the VNEXORA brand umbrella, you may want to explore joining us.
              </p>
              <div className="pt-6">
                <Button variant="outline" className="border-mustard/30 text-mustard hover:bg-mustard hover:text-black rounded-none px-8">
                  Learn Our Process
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
            <div className="aspect-[4/5] relative rounded-full overflow-hidden border border-white/10">
              <Image src="/images/hero_1.jpg" alt="Member collaboration" fill className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative rounded-full overflow-hidden border border-white/10 mt-20">
              <Image src="/images/hero_2.jpg" alt="Strategic discussion" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FIVE REASONS SECTION */}
      <section className="py-24 md:py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-mustard mb-6">Strategic Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Five reasons to become a <br /><span className="italic text-gold-gradient">VNEXORA Consultant</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-6 group"
              >
                <div className="text-6xl font-serif text-white/5 group-hover:text-mustard/20 transition-colors duration-500">
                  {reason.num}
                </div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-mustard">{reason.title}</h4>
                <p className="text-white/40 text-[12px] leading-relaxed font-light">
                  {reason.desc}
                </p>
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
            <p className="text-white/40 text-sm md:text-base font-light tracking-wide">
              Submit your mandate brief. Our strategic desk will review and initiate contact within 24 institutional hours.
            </p>
          </div>

          <form className="space-y-8 p-12 bg-black border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            {/* Ambient Background Effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-mustard/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-mustard transition-all uppercase"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Institutional Email</label>
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-mustard transition-all uppercase"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Expertise Area</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white/60 outline-none focus:border-mustard transition-all uppercase appearance-none">
                  <option className="bg-black">Strategic Advisory</option>
                  <option className="bg-black">Development & Asset Management</option>
                  <option className="bg-black">ESG Advisory</option>
                  <option className="bg-black">Operational Advisory</option>
                  <option className="bg-black">Branding & Marketing</option>
                  <option className="bg-black">Sales & Commercial</option>
                  <option className="bg-black">Financial Advisory</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Years of Experience</label>
                <input 
                  type="text" 
                  placeholder="10+ YEARS"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-mustard transition-all uppercase"
                />
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Your Vision</label>
              <textarea 
                placeholder="HOW CAN WE BUILD TOGETHER?"
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-mustard transition-all uppercase resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-mustard text-black text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-700 shadow-2xl relative z-10"
            >
              Transmit Mandate
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
