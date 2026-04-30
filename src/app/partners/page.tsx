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
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="w-px h-16 bg-white/40 mb-4" />
            <h1 className="text-white text-[12vw] md:text-[8vw] lg:text-8xl font-playfair font-light tracking-tight leading-tight">
              Elevating <br />
              <span className="italic">Hospitality Synergy</span>
            </h1>
            <div className="mt-8">
              <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.8em]">Vnexora Partners</span>
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
          <h3 className="text-4xl md:text-6xl font-playfair text-[#1A1A1A] leading-tight mb-12">
            OUR <br />
            <span className="italic text-[#CFA052]">partnerships</span>
          </h3>
          <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed tracking-wide">
            Explore our exclusive offerings, designed specifically for travel agents, business trips, and event planning worldwide. 
            Benefit from tailored solutions, personalized quotes for group stays and events, and connect with our dedicated 
            sales team to bring your next project to life at a Vnexora curated property.
          </p>
        </motion.div>
      </section>

      {/* 3. CATEGORY GRID */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "TRAVEL", subtitle: "agents", img: "/images/partners/travel-agents.png" },
            { title: "BUSINESS", subtitle: "travels", img: "/images/partners/business.png" },
            { title: "EVENTS", subtitle: "and Groups", img: "/images/partners/events.png" }
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center text-white">
                <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-2">{cat.title}</h4>
                <span className="text-3xl font-playfair italic font-light mb-8">{cat.subtitle}</span>
                <div className="h-px w-8 bg-white transition-all group-hover:w-20" />
                <span className="mt-8 text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Discover</span>
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
                TRAVEL <br />
                <span className="italic text-[#CFA052]">agents</span>
              </h2>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                At Vnexora, we foster strong, trusted relationships with all our travel partners. Whether you&apos;re an international agency or an independent agent, we are committed to providing your clients with bespoke hospitality and exceptional service. 
              </p>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Our sales team ensures the best rates and conditions, making every project an unforgettable experience for your clients.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-8 pt-6">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                  Learn More
                </Button>
                <Link href="/contact">
                  <Button className="bg-[#5B0F2D] text-white hover:bg-black rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                    Request a Quote
                  </Button>
                </Link>
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
                BUSINESS <br />
                <span className="italic text-[#CFA052]">travels</span>
              </h2>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Transform your business trips into extraordinary experiences with Vnexora&apos;s personalized services. Whether for a quick stay or an extended retreat, enjoy preferential rates tailored to your needs, including access to our exceptional offerings.
              </p>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Reach out to our sales team to discover our customized packages and book a professional stay designed to combine elegance, comfort, and productivity.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-8 pt-6">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                  Learn More
                </Button>
                <Link href="/contact">
                  <Button className="bg-[#5B0F2D] text-white hover:bg-black rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                    Request a Quote
                  </Button>
                </Link>
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
                EVENTS <br />
                <span className="italic text-[#CFA052]">and groups</span>
              </h2>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                From intimate corporate retreats to grand international summits, Vnexora provides the canvas for your most significant gatherings. Our dedicated events team works tirelessly to ensure every detail reflects your vision and exceeds expectations.
              </p>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Benefit from priority booking, customized catering, and state-of-the-art technological support across our global portfolio of exceptional properties.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-8 pt-6">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                  <Calendar className="mr-2 w-4 h-4" />
                  Event Portfolio
                </Button>
                <Link href="/contact">
                  <Button className="bg-[#5B0F2D] text-white hover:bg-black rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em]">
                    Request a Proposal
                  </Button>
                </Link>
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

      {/* 8. CALL TO ACTION */}
      <section className="py-24 md:py-48 text-center bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/partners/hero.png" 
            alt="CTA Background" 
            fill 
            className="object-cover grayscale" 
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-12 italic">
            Join the <span className="not-italic text-[#CFA052]">Vnexora</span> Circle.
          </h2>
          <p className="text-lg text-white/40 font-light mb-16 italic">
            &quot;True luxury is about creating value that endures. Let&apos;s build a legacy of excellence together.&quot;
          </p>
          <Link href="/contact">
            <Button className="bg-[#CFA052] text-white hover:bg-white hover:text-black rounded-none px-12 py-8 text-[11px] font-black uppercase tracking-[0.4em] transition-all transform hover:scale-105 border-none">
              Initiate Strategic Brief
            </Button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
