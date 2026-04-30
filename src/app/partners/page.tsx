"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ConciergeBell, Users, Building2, MapPin, Calendar, GlassWater, Trophy, Megaphone, CalendarCheck, Banknote, UserCheck, Settings2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function PartnersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#FDFCFB] selection:bg-[#CFA052] selection:text-white">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/partners/hero.png" 
            alt="Vnexora Partnerships Hero" 
            fill 
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6 md:gap-10"
          >
            <div className="w-px h-16 bg-white/40 mb-4" />
            
            <div className="space-y-4">
              <h1 className="text-white text-[6vw] md:text-5xl lg:text-7xl font-playfair font-light tracking-tight leading-[1.1] max-w-4xl mx-auto">
                Elevating Every Journey, <br />
                <span className="italic">Every Partnership</span>
              </h1>
              <p className="text-[#CFA052] text-sm md:text-xl uppercase tracking-[0.3em] font-medium max-w-2xl mx-auto">
                The smartest way to grow travel, corporate, and event business.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide">
                From travel agents and corporates to event planners and group partners, VNEXORA transforms demand into revenue, efficiency, and seamless experiences.
              </p>
              <p className="text-white/60 text-sm md:text-base font-light italic leading-relaxed">
                Powered by speed, intelligent systems, and precision execution, we deliver partnerships that don&apos;t just work — they outperform.
              </p>
            </div>

            <div className="mt-8">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.8em]">Vnexora Strategic Desk</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Left Contact Action */}
        <div className="absolute bottom-12 left-12 z-20 hidden md:flex items-center gap-6">
           <Link href="/contact">
             <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all backdrop-blur-md bg-white/5">
               <MapPin className="mr-2 w-4 h-4" />
               Contact Us
             </Button>
           </Link>
        </div>

        {/* Center Bottom Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.5em] [writing-mode:vertical-rl] opacity-60">Visit</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-white/40"
          />
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-48 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#CFA052] mb-12">Collaborations</h2>
          <h3 className="text-4xl md:text-6xl font-playfair text-[#1A1A1A] leading-tight mb-16">
            OUR <br />
            <span className="italic text-[#CFA052]">Partnerships</span>
          </h3>
          <div className="space-y-10">
            <p className="text-2xl md:text-3xl font-playfair text-[#1A1A1A] leading-snug">
              Turn your demand into <span className="italic">higher revenue</span>, better margins, and zero operational stress.
            </p>
            <p className="text-lg text-black/60 font-light leading-relaxed tracking-wide">
              Whether you&apos;re a travel agent, corporate, or event planner, VNEXORA gives you direct access to premium inventory, custom group pricing, and fast, reliable execution.
            </p>
            <p className="text-lg text-black/60 font-light leading-relaxed tracking-wide">
              From tailored quotes to end-to-end delivery, we handle everything — so you can close faster, scale bigger, and deliver better experiences every time.
            </p>
            <div className="pt-8">
              <p className="text-[#CFA052] text-sm uppercase tracking-[0.4em] font-black italic">
                Partner with VNEXORA. Grow faster. Earn more.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. CATEGORY GRID */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "TRAVEL", 
              subtitle: "agents", 
              img: "/images/partners/travel-agents.png",
              points: [
                "Higher Earnings & Better Margins",
                "Reasonable Rates, Strong Conversions",
                "Fast Confirmations, Zero Hassle",
                "Reliable Execution, Happy Clients"
              ]
            },
            { 
              title: "BUSINESS /", 
              subtitle: "corporate", 
              img: "/images/partners/business.png",
              points: [
                "Optimized Spend, Maximum Value",
                "Seamless Bookings, Zero Hassle",
                "Consistent Quality Across Stays",
                "Reliable Execution, Assured Experience"
              ]
            },
            { 
              title: "EVENTS", 
              subtitle: "and Groups", 
              img: "/images/partners/events.png",
              points: [
                "Optimized Budgets, Maximum Impact",
                "Seamless Planning, Zero Hassle",
                "Scalable Venues & Experiences",
                "Flawless Execution, Memorable Outcomes"
              ]
            }
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative aspect-[3/4.5] md:aspect-[3/5] overflow-hidden cursor-pointer"
            >
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 pb-12 text-center text-white">
                <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-2">{cat.title}</h4>
                <span className="text-4xl md:text-5xl font-playfair italic font-light mb-8">{cat.subtitle}</span>
                
                <div className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                  {cat.points.map((p, i) => (
                    <div key={i} className="flex items-center justify-center gap-3">
                      <div className="w-1 h-1 bg-[#CFA052] rounded-full" />
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/80">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="h-px w-8 bg-white transition-all group-hover:w-20" />
                <span className="mt-8 text-[9px] font-bold uppercase tracking-[0.2em]">Discover</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TRAVEL AGENTS SECTION (Image Right) */}
      <section className="py-24 md:py-48 border-t border-black/5 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-6xl font-playfair text-[#1A1A1A] leading-tight">
                for <br />
                <span className="italic text-[#CFA052]">Travel Agents</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Higher Earnings & Better Margins",
                  "Reasonable Rates, Strong Conversions",
                  "Fast Confirmations, Zero Hassle",
                  "Reliable Execution, Happy Clients"
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 border border-black/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-center min-h-[120px]"
                  >
                    <div className="w-6 h-px bg-[#CFA052] mb-4" />
                    <p className="text-lg font-light text-black/80 leading-snug">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-8 pt-6">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                  Learn More
                </Button>
                <Button 
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#5B0F2D] text-white hover:bg-black rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  Request a Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/partners/travel-agents.png" 
                alt="Travel Agents Partnership" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS TRAVELS SECTION (Image Left) */}
      <section className="py-24 md:py-48 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image 
                src="/images/partners/business.png" 
                alt="Business Travels" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10 order-1 lg:order-2"
            >
              <h2 className="text-5xl md:text-6xl font-playfair text-[#1A1A1A] leading-tight">
                for <br />
                <span className="italic text-[#CFA052]">Business/Corporate Travel</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Optimized Spend, Maximum Value",
                  "Seamless Bookings, Zero Hassle",
                  "Consistent Quality Across Stays",
                  "Reliable Execution, Assured Experience"
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 border border-black/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-center min-h-[120px]"
                  >
                    <div className="w-6 h-px bg-[#CFA052] mb-4" />
                    <p className="text-lg font-light text-black/80 leading-snug">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-8 pt-6">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                  Learn More
                </Button>
                <Button 
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#5B0F2D] text-white hover:bg-black rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. EVENTS AND GROUPS SECTION (Image Right) */}
      <section className="py-24 md:py-48 border-t border-black/5 overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-6xl font-playfair text-[#1A1A1A] leading-tight">
                for <br />
                <span className="italic text-[#CFA052]">Events and Groups</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Optimized Budgets, Maximum Impact",
                  "Seamless Planning, Zero Hassle",
                  "Scalable Venues & Experiences",
                  "Flawless Execution, Memorable Outcomes"
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 border border-black/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-center min-h-[120px]"
                  >
                    <div className="w-6 h-px bg-[#CFA052] mb-4" />
                    <p className="text-lg font-light text-black/80 leading-snug">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-8 pt-6">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                  <Calendar className="mr-2 w-4 h-4" />
                  Event Portfolio
                </Button>
                <Button 
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#5B0F2D] text-white hover:bg-black rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  Request a Proposal
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/partners/events.png" 
                alt="Events and Groups" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. PARTNER BENEFITS SECTION */}
      <section className="py-24 md:py-48 bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#5B0F2D] uppercase">
              Partner Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 max-w-6xl mx-auto">
            {[
              { 
                title: "Competitive Rates", 
                desc: "Special pricing for partners", 
                icon: Trophy 
              },
              { 
                title: "Marketing Support", 
                desc: "Promotional materials and training", 
                icon: Megaphone 
              },
              { 
                title: "Easy Booking", 
                desc: "Online portal and dedicated support", 
                icon: CalendarCheck 
              },
              { 
                title: "Commission Structure", 
                desc: "Transparent and competitive", 
                icon: Banknote 
              },
              { 
                title: "Account Management", 
                desc: "Dedicated relationship managers", 
                icon: UserCheck 
              },
              { 
                title: "Flexible Terms", 
                desc: "Accommodation for various client needs", 
                icon: Settings2 
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 flex items-center justify-center text-black/80">
                  <benefit.icon className="w-10 h-10 stroke-[1.25]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-playfair text-[#5B0F2D] uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-black/50 font-light tracking-wide">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INQUIRY FORM SECTION (REPLACING CTA) */}
      <section id="inquiry-form" className="py-24 md:py-32 bg-[#F9F4F0] border-t border-black/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-playfair tracking-tight text-[#5B0F2D] uppercase leading-tight mb-4">
              SEND <br />
              <span className="italic normal-case font-serif opacity-80 text-4xl md:text-5xl">a request</span>
            </h2>
            <a 
              href="mailto:connect@vnexora.com" 
              className="text-sm uppercase tracking-[0.2em] text-[#5B0F2D] border-b border-[#5B0F2D]/30 pb-1 hover:border-[#5B0F2D] transition-all"
            >
              connect@vnexora.com
            </a>
          </motion.div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 1 */}
              <input 
                type="text" 
                placeholder="Surname" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />
              <input 
                type="text" 
                placeholder="First name" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />
              
              {/* Row 2 */}
              <input 
                type="text" 
                placeholder="Society / Company" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />
              <select 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all text-black/40"
              >
                <option value="" disabled selected>Type of event</option>
                <option value="corporate">Corporate Event</option>
                <option value="travel_agent">Travel Agent Inquiry</option>
                <option value="wedding">Wedding / Private Event</option>
                <option value="group">Group Booking</option>
                <option value="partnership">Strategic Partnership</option>
              </select>

              {/* Row 3 */}
              <input 
                type="text" 
                placeholder="Number of people" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />
              <input 
                type="text" 
                placeholder="Budget" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />

              {/* Row 4 */}
              <div className="relative">
                <span className="absolute left-6 top-1 text-[10px] uppercase tracking-tighter text-black/20">Beginning date</span>
                <input 
                  type="date" 
                  className="w-full bg-white/50 border border-black/10 px-6 pt-5 pb-3 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all text-black/40"
                />
              </div>
              <div className="relative">
                <span className="absolute left-6 top-1 text-[10px] uppercase tracking-tighter text-black/20">Ending date</span>
                <input 
                  type="date" 
                  className="w-full bg-white/50 border border-black/10 px-6 pt-5 pb-3 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all text-black/40"
                />
              </div>

              {/* Row 5 */}
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30"
              />
            </div>

            {/* Message Row */}
            <textarea 
              rows={4}
              placeholder="Your message" 
              className="w-full bg-white/50 border border-black/10 px-6 py-4 rounded-sm text-sm italic focus:outline-none focus:border-[#5B0F2D]/30 transition-all placeholder:text-black/30 resize-none"
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button 
                type="submit"
                className="bg-[#5B0F2D] text-white px-16 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#3d0a1e] transition-all duration-500 shadow-xl"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}
