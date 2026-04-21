"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Smartphone, 
  Layers, 
  Globe, 
  Layout, 
  Workflow, 
  Zap,
  Target,
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MobileAppDevelopmentPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const FAQS = [
    { question: "What types of mobile apps do you develop?", answer: "We specialize in developing a wide range of mobile apps, including business, e-commerce, educational, and entertainment apps for both iOS and Android platforms. Our experienced team crafts customized solutions tailored to your unique requirements." },
    { question: "How much does it cost to develop a mobile app?", answer: "The cost depends entirely on the features, complexity, and technology stack chosen. We offer highly tailored luxury solutions, starting with a comprehensive scoping phase to provide an exact architectural estimate." },
    { question: "How long does it take to develop a mobile app?", answer: "Typical deployment windows range from 3 to 6 months. This ensures we have the necessary time to guarantee rigorous high-fidelity design standards and zero-tolerance bug testing before going live." },
    { question: "Do you offer post-launch support?", answer: "Absolutely. Deployment is just the beginning. Our enterprise tier includes continuous monitoring, performance enhancements, and regular updates to ensure your digital flagship stays operating at peak capacity." },
    { question: "Can you help with app store submissions?", answer: "Yes, we handle the entire submission process for both the Apple App Store and Google Play Store, guaranteeing compliance with all institutional technical guidelines." },
    { question: "Do you build native or hybrid apps?", answer: "We build both. Our strategic consulting team will analyze your business use-case and recommend whether a pure native environment (Swift/Kotlin) or a rigorous hybrid framework (React Native/Flutter) is optimal for your growth." }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden relative">
      
      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 border-b border-white/5">
        {/* Background Ambient Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            alt="Development Setup"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Header Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
                Pioneering Excellent <br />
                <span className="text-mustard font-serif italic font-light">Mobile App Development</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Get your digital flagship off the ground and running with our cutting-edge mobile app development tailored exactly to your institutional needs. Our solutions guarantee a sophisticated user experience that elevates your business.
              </p>
              
              {/* Trust Badges */}
              <div className="flex gap-6 py-6 border-y border-white/10 w-max">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-2 shadow-lg shadow-black/40">
                    <span className="text-xs font-bold text-white tracking-widest text-[9px] uppercase">Clutch</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-2 shadow-lg shadow-black/40 text-[9px] uppercase">
                    <span className="text-mustard font-bold">Top 1%</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-2 shadow-lg shadow-black/40 text-[9px] uppercase">
                    <span className="text-white font-bold tracking-widest">Awards</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                 <Link href="#consultation">
                    <Button className="bg-mustard text-black hover:bg-mustard/90 px-10 py-6 text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all hover:scale-105">
                      Initialize Project
                    </Button>
                 </Link>
              </div>
            </motion.div>

            {/* Right Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              id="consultation"
            >
              {/* Form Glow */}
              <div className="absolute -inset-1 bg-mustard/20 blur-xl rounded-2xl opacity-50" />
              
              <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-3xl font-medium text-black tracking-tight mb-2">
                  Get Free <span className="text-mustard">Consultation</span>
                </h3>
                <p className="text-stone-500 font-light mb-8 text-sm">
                  Let our extended strategic team be part of your architectural journey.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full border border-stone-200 rounded-lg px-4 py-3.5 text-black placeholder:text-stone-400 focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard transition-all"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full border border-stone-200 rounded-lg px-4 py-3.5 text-black placeholder:text-stone-400 focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard transition-all"
                    />
                    <input 
                      type="tel" 
                      placeholder="Enter Mobile No. With Country Code" 
                      className="w-full border border-stone-200 rounded-lg px-4 py-3.5 text-black placeholder:text-stone-400 focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard transition-all"
                    />
                    <textarea 
                      placeholder="Your Project Description" 
                      rows={4}
                      className="w-full border border-stone-200 rounded-lg px-4 py-3.5 text-black placeholder:text-stone-400 focus:outline-none focus:border-mustard focus:ring-1 focus:ring-mustard transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full bg-mustard hover:bg-mustard/90 text-black font-bold uppercase tracking-[0.2em] text-sm py-4 rounded-lg transition-colors">
                    Submit Brief
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. SERVICES GRID */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-4xl mx-auto"
          >
            <h4 className="text-mustard font-bold uppercase tracking-[0.2em] text-sm mb-4">Explore Our Operations</h4>
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              Pioneering Mobile Solutions: Empower and Connect with Every Tap
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom iOS & Android Development",
                icon: Smartphone,
                desc: "Create distinctive applications that engage and transform interactions. Our approach utilizes deep analytics to ensure optimal cross-platform performance."
              },
              {
                title: "Native & Cross-Platform Excellence",
                icon: Layers,
                desc: "Build with the best of both worlds. We ensure consistency and elite functionality guaranteeing a pristine native feel everywhere."
              },
              {
                title: "Multi-Platform Adaptations",
                icon: Globe,
                desc: "Start strong and expand without compromise. We preserve core feature parity while multiplying your impact across the diverse user base."
              },
              {
                title: "Progressive Web Apps (PWAs)",
                icon: Layout,
                desc: "Combine the reach of the web with the architecture of native apps for high-speed, installable, and robust digital platforms."
              },
              {
                title: "Advanced UI/UX Design",
                icon: Search,
                desc: "Harness sophisticated UX structures designed for quiet luxury logic, focusing entirely on conversion flows and architectural coherence."
              },
              {
                title: "Strategic Consulting & Prototyping",
                icon: Workflow,
                desc: "Mitigate risk before coding begins. We frame the strategic mandate and deploy rapid prototypes validating market viability."
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-mustard/10 flex items-center justify-center text-mustard border border-mustard/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4 pr-10">{service.title}</h3>
                  <p className="text-stone-400 font-light leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 3. SECTOR-SPECIFIC IMAGES GRID */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              Experience Sector-Specific Innovations for Enhanced Business Efficiency
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "E-Commerce & Retail",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
              },
              {
                name: "Travel & Hospitality",
                img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
              },
              {
                name: "Global Logistics",
                img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-[480px] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <Image 
                  src={sector.img}
                  alt={sector.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Dark Bottom Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-medium text-white">{sector.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. VERTICAL TIMELINE PROCESS */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
              Our Process: Guiding You to Success
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
              As businesses evolve, so do their needs. We empower you to scale, navigate, and innovate with our tried-and-tested aesthetic paradigm approach. Here is how we execute:
            </p>
          </motion.div>

          {/* Dotted Spine */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 -ml-[1px] w-0 border-l-2 border-dotted border-mustard/40 hidden md:block" />

            <div className="space-y-24 md:space-y-32">
              {[
                {
                  step: 1,
                  title: "Strategy Development",
                  desc: "We start by crafting strategies that identify your strengths and weaknesses. Our goal is to enhance overall user experience, positioning your footprint for aggressive scaling.",
                  icon: Target
                },
                {
                  step: 2,
                  title: "Analysis & Planning",
                  desc: "We dive deep into understanding your specific requirements. We outline necessary features, logic flows, and edge cases to formulate an airtight roadmap.",
                  icon: Search
                },
                {
                  step: 3,
                  title: "UI/UX Architecture",
                  desc: "In this phase we focus on the high-fidelity Quiet Luxury aesthetic. We ensure the layout operates beautifully converting passive users into active investors.",
                  icon: PenTool
                },
                {
                  step: 4,
                  title: "App Development",
                  desc: "We transform design directly into functional structure. Utilizing premium tech stacks, our architects construct the logic ensuring rapid data flows.",
                  icon: Code2
                },
                {
                  step: 5,
                  title: "Quality Assurance",
                  desc: "Quality is paramount. We aggressively stress-test the compiled builds ensuring uncompromising stability and zero-tolerance for bugs.",
                  icon: ShieldCheck
                },
                {
                  step: 6,
                  title: "Enterprise Deployment",
                  desc: "Finally, we formally deploy your application to the App Store and Google Play infrastructures. Support never ends; we monitor for perfection.",
                  icon: Rocket
                }
              ].map((phase, index) => {
                const isEven = index % 2 === 0;
                const Icon = phase.icon;

                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                    {/* Circle on the timeline (Desktop only) */}
                    <div className="absolute left-1/2 top-12 -ml-2.5 w-5 h-5 rounded-full border-4 border-[#050505] bg-mustard z-10 hidden md:block shadow-[0_0_15px_rgba(207,160,82,0.5)]" />
                    
                    {/* Left Column Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-20 text-right md:-mt-10" : "order-2 md:order-1"}`}>
                      {isEven && (
                        <motion.div 
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="flex flex-col items-end"
                        >
                          <span className="text-mustard font-bold font-mono tracking-widest text-sm mb-6 flex items-center gap-4">
                            STEP {phase.step} <span className="w-16 h-px bg-mustard/40 hidden md:block" />
                          </span>
                          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-mustard shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-500">
                             <Icon size={32} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-2xl font-medium text-white mb-4">{phase.title}</h3>
                          <p className="text-stone-400 font-light leading-relaxed max-w-sm">{phase.desc}</p>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Column Content */}
                    <div className={`w-full md:w-1/2 mt-10 md:mt-0 ${!isEven ? "md:pl-20 text-left md:mt-10" : "order-1 md:order-2"}`}>
                      {!isEven && (
                        <motion.div 
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="flex flex-col items-start"
                        >
                          <span className="text-mustard font-bold font-mono tracking-widest text-sm mb-6 flex flex-row-reverse items-center gap-4">
                            STEP {phase.step} <span className="w-16 h-px bg-mustard/40 hidden md:block" />
                          </span>
                          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-mustard shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-500">
                             <Icon size={32} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-2xl font-medium text-white mb-4">{phase.title}</h3>
                          <p className="text-stone-400 font-light leading-relaxed max-w-sm">{phase.desc}</p>
                        </motion.div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MOBILE APP DEVELOPMENT FAQS */}
      <section className="py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-16 max-w-4xl">
            Mobile App Development <span className="text-mustard font-serif italic">FAQs</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Accordion */}
            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isActive = activeFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer
                      ${isActive ? "border-mustard bg-mustard/10 shadow-[0_0_20px_rgba(207,160,82,0.15)]" : "border-white/10 hover:border-white/30 bg-[#0A0A0A]"}
                    `}
                    onClick={() => setActiveFaq(isActive ? null : index)}
                  >
                    <div className="p-6 flex items-center justify-between">
                      <h4 className={`text-lg font-medium pr-8 ${isActive ? "text-mustard" : "text-white"}`}>
                        {index + 1}. {faq.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={isActive ? "text-mustard" : "text-stone-500"}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-stone-300 font-light leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right: Architectural Image Mask */}
            <div className="relative justify-self-center lg:justify-self-end w-full max-w-md mt-10 lg:mt-0">
              {/* Back Gold Border offset */}
              <div 
                className="absolute inset-0 border-2 border-mustard/50 -right-6 -bottom-6 translate-x-6 translate-y-6"
                style={{ borderRadius: "500px 500px 0 0" }}
              />
              
              {/* Image Node */}
              <div 
                className="relative w-full aspect-[3/4] bg-[#0A0A0A] overflow-hidden shadow-2xl relative z-10"
                style={{ borderRadius: "500px 500px 0 0" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
