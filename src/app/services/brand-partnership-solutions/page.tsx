"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  Handshake, 
  BarChart3, 
  Target, 
  Compass, 
  ShieldCheck, 
  Send 
} from "lucide-react";
import { Section } from "@/components/ui/Section";

export default function BrandPartnershipPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <main className="min-h-screen bg-[#000613] text-white selection:bg-mustard/30">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/services/brand_collab_hero.png"
          alt="Luxury Hotel Lobby"
          fill
          className="object-cover brightness-[0.4] scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000613]/80 via-transparent to-[#000613]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <Link href="/services" className="inline-flex items-center text-mustard hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Service Portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.span variants={itemVariants} className="block text-mustard font-bold text-xs md:text-sm tracking-[0.5em] uppercase mb-6">
              Strategic Global Tie-ups
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 tracking-tighter">
              Partner with <br />
              <span className="italic font-light">Global Excellence.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-12">
              Unlocking unprecedented asset value through elite brand integration, strategic matchmaking, and institutional-grade negotiation.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-4 bg-mustard text-black px-10 py-5 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 rounded-none group"
              >
                Begin Your Legacy <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] tracking-[0.5em] uppercase text-white/30 rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-mustard to-transparent" />
        </motion.div>
      </section>

      {/* 2. THE VNEXORA EDGE - VALUE PROPS */}
      <Section spacing="lg" className="bg-[#000613] border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {[
            {
              icon: Globe,
              title: "Global Distribution",
              desc: "Immediate access to world-class reservation systems of Marriott, Hilton, Hyatt, and IHG."
            },
            {
              icon: Handshake,
              title: "Expert Negotiation",
              desc: "Securing owner-centric Manchise and Franchise terms that protect your long-term interests."
            },
            {
              icon: BarChart3,
              title: "Asset Maximization",
              desc: "Strategically elevating your property's market position to drive superior ADR and RevPAR."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#000613] p-12 md:p-16 flex flex-col items-start gap-8 group hover:bg-white/5 transition-colors duration-700"
            >
              <div className="w-12 h-12 rounded-none border border-mustard/20 flex items-center justify-center group-hover:bg-mustard group-hover:border-mustard transition-all duration-500 text-mustard group-hover:text-black">
                <feature.icon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-light text-sm italic group-hover:text-white/60 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. PARTNERSHIP ORCHESTRATION - TIMELINE */}
      <Section spacing="lg" className="bg-[#000613] overflow-visible">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-mustard font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Partnership <br /><span className="italic font-light">Orchestration.</span></h2>
            <p className="text-white/40 font-light leading-relaxed mb-12">
              A meticulously structured 4-step process designed to align your asset with the industry's most prestigious global brands.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: "01", title: "Site Feasibility", desc: "Rigorous market potential analysis and objective brand fitment studies." },
              { num: "02", title: "Brand Matchmaking", desc: "Curating a shortlist of global operators that resonate with your vision." },
              { num: "03", title: "Contract Strategy", desc: "Negotiating the finest legal and financial details for an elite deal closure." },
              { num: "04", title: "Operational Launch", desc: "Seamlessly integrating the brand systems for immediate performance scaling." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-12 border-l border-white/10 pb-12 last:pb-0"
              >
                <div className="absolute top-0 left-[-1px] w-[1px] h-full bg-gradient-to-b from-mustard to-transparent" />
                <span className="text-mustard font-serif text-3xl mb-4 block">{step.num}</span>
                <h4 className="text-lg font-bold tracking-[0.2em] uppercase mb-4">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. STRATEGIC SERVICE SPECTRUM */}
      <Section spacing="lg" className="bg-[#000613] relative border-t border-white/5">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic font-light">Service Spectrum</h2>
          <div className="w-20 h-1 bg-mustard mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, name: "Asset Management", desc: "Oversight of operational performance to ensure brand compliance and ROI." },
            { icon: Compass, name: "Operator Search", desc: "Accessing a global network of management teams and hotel groups." },
            { icon: ShieldCheck, name: "Technical Services", desc: "Guidance on brand standards, design reviews, and pre-opening setup." }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-10 flex flex-col gap-6 group cursor-default"
            >
              <service.icon className="text-mustard/40 group-hover:text-mustard transition-colors duration-500" size={32} />
              <h3 className="text-lg font-bold tracking-[0.3em] uppercase">{service.name}</h3>
              <p className="text-white/30 group-hover:text-white/60 transition-colors font-light text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. BRAND PORTFOLIO - MARQUEE */}
      <section className="py-24 bg-[#000613] overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 mb-12">
           <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 text-center">In Synergy With Global Giants</h4>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center justify-around min-w-full italic font-serif text-3xl md:text-5xl text-white/10"
          >
            <span>ST. REGIS</span>
            <span className="text-mustard/20">★</span>
            <span>RITZ-CARLTON</span>
            <span className="text-mustard/20">★</span>
            <span>FOUR SEASONS</span>
            <span className="text-mustard/20">★</span>
            <span>HYATT REGENCY</span>
            <span className="text-mustard/20">★</span>
            <span>MARRIOTT BONVOY</span>
          </motion.div>
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center justify-around min-w-full italic font-serif text-3xl md:text-5xl text-white/10"
          >
            <span>ST. REGIS</span>
            <span className="text-mustard/20">★</span>
            <span>RITZ-CARLTON</span>
            <span className="text-mustard/20">★</span>
            <span>FOUR SEASONS</span>
            <span className="text-mustard/20">★</span>
            <span>HYATT REGENCY</span>
            <span className="text-mustard/20">★</span>
            <span>MARRIOTT BONVOY</span>
          </motion.div>
        </div>
      </section>

      {/* 6. CONCIERGE INQUIRY SECTION */}
      <Section id="contact" spacing="lg" className="bg-[#000613]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 italic font-light">Start Your <br />Global Journey.</h2>
            <p className="text-white/40 font-light leading-relaxed max-w-md">
              The first step towards an elite partnership begins with a confidential briefing. Let our experts guide your asset's transformation.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <form className="space-y-10">
              <div className="relative">
                <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-mustard transition-colors text-[10px] tracking-[0.3em] font-bold" />
              </div>
              <div className="relative">
                <input type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-mustard transition-colors text-[10px] tracking-[0.3em] font-bold" />
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-mustard transition-colors text-[10px] tracking-[0.3em] font-bold appearance-none cursor-pointer">
                  <option className="bg-[#000613]">HOTEL / RESORT</option>
                  <option className="bg-[#000613]">COMMERCIAL ASSET</option>
                  <option className="bg-[#000613]">NEW DEVELOPMENT</option>
                </select>
              </div>
              <div className="relative">
                <textarea rows={4} placeholder="PROJECT BRIEF" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-mustard transition-colors text-[10px] tracking-[0.3em] font-bold"></textarea>
              </div>
              
              <button className="w-full flex items-center justify-center gap-4 bg-white text-black py-6 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-mustard transition-all duration-500 rounded-none group">
                Request Consultation <Send size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </Section>

    </main>
  );
}
