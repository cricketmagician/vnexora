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

  const partnerLogos = [
    "/images/logos/brand_batch_2/1.png", "/images/logos/brand_batch_2/2.png", "/images/logos/brand_batch_2/3.png",
    "/images/logos/brand_batch_2/4.png", "/images/logos/brand_batch_2/5.png", "/images/logos/brand_batch_2/6.png",
    "/images/logos/brand_batch_2/7.png", "/images/logos/brand_batch_2/8.png", "/images/logos/brand_batch_2/9.png",
    "/images/logos/brand_batch_2/10.png", "/images/logos/brand_batch_2/11.png", "/images/logos/brand_batch_2/12.png",
    "/images/logos/brand_batch_2/13.png", "/images/logos/brand_batch_2/14.png", "/images/logos/brand_batch_2/15.png",
    "/images/logos/brand_batch_2/16.png", "/images/logos/radisson.png", "/images/logos/leela.png",
    "/images/logos/bloom.png", "/images/logos/taj.png", "/images/logos/ihcl.png",
    "/images/logos/accor.png", "/images/logos/novotel.png", "/images/logos/wyndham.png",
    "/images/logos/ginger.png", "/images/logos/millennium.png", "/images/logos/ascott.png",
    "/images/rt1/12.png", "/images/rt1/13.png", "/images/rt1/14.png", "/images/rt1/15.png", "/images/rt1/16.png",
    "/images/logos/new_brands/1.png", "/images/logos/new_brands/2.png",
    "/images/logos/new_brands/3.png", "/images/logos/new_brands/4.png"
  ];

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

      {/* NEW: LIGHT CHOICE SECTION - ENHANCED AS BUTTONS */}
      <section className="bg-white border-y border-black/5">
        <div className="flex flex-col md:flex-row min-h-[200px] gap-8 p-8 md:p-12 max-w-[1400px] mx-auto">
          <Link 
            href="#contact" 
            className="flex-1 group relative overflow-hidden bg-white border border-black/5 p-12 flex flex-col items-center justify-center text-center transition-all duration-700 hover:border-mustard/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-mustard transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
            <span className="text-[10px] font-bold tracking-[0.4em] text-black/20 uppercase mb-4 group-hover:text-mustard transition-colors">Strategic Path 01</span>
            <h3 className="text-2xl md:text-3xl font-serif text-black mb-6 tracking-tight">
              Tie-up with a <br/><span className="italic font-light">Hotel Brand.</span>
            </h3>
            <div className="flex items-center gap-3 text-mustard/40 group-hover:text-mustard transition-colors duration-500">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Connect</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>

          <Link 
            href="#contact" 
            className="flex-1 group relative overflow-hidden bg-white border border-black/5 p-12 flex flex-col items-center justify-center text-center transition-all duration-700 hover:border-mustard/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-mustard transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <span className="text-[10px] font-bold tracking-[0.4em] text-black/20 uppercase mb-4 group-hover:text-mustard transition-colors">Strategic Path 02</span>
            <h3 className="text-2xl md:text-3xl font-serif text-black mb-6 tracking-tight">
              Build Your <br/><span className="italic font-light">Own Brand.</span>
            </h3>
            <div className="flex items-center gap-3 text-mustard/40 group-hover:text-mustard transition-colors duration-500">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Inquire</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>
        </div>
      </section>

      {/* NEW: SERVICE DEEP DIVE (LIGHT) - USES ACTUAL LOGOS */}
      <Section spacing="lg" className="bg-white text-black overflow-hidden font-sans">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Column: Brand Collage Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative w-full max-w-xl mx-auto"
          >
            <div className="absolute inset-0 bg-mustard/5 -translate-x-6 translate-y-6 md:-translate-x-12 md:translate-y-12" />
            <div className="relative z-10 w-full border border-black/5 bg-white p-2 md:p-4 overflow-hidden shadow-2xl">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[4/3] transition-all duration-700"
              >
                <Image 
                  src="/images/services/hotel_brand_collage.png"
                  alt="Elite Hotel Brands Master Collage"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[8px] font-bold tracking-[0.4em] text-black/20 uppercase rotate-90 origin-bottom-right">
              Global Network Partnerships
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-6 text-black leading-tight">
                How can we help you?
              </h2>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-mustard" />
                <span className="text-mustard font-bold text-xs md:text-sm tracking-[0.3em] uppercase">FIND THE RIGHT PARTNER</span>
              </div>
              
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed font-light">
                Whether you're exploring a <strong>Marriott, Taj, Hilton, or Radisson franchise</strong>, or evaluating a management contract with global and Indian brands, <strong>Vnexora Hospitality</strong> provides end-to-end guidance:
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  { title: "Feasibility & ROI Analysis", desc: "assess your location, market demand, concept and financial viability." },
                  { title: "Operator & Brand Search", desc: "identify the right global or domestic brand for your property." },
                  { title: "Franchise vs. Management", desc: "evaluation of the agreement structure that fits your goals (Manchise/Franchise)." },
                  { title: "Contract Negotiation Support", desc: "ensure balanced commercial terms with the chosen brand." },
                  { title: "Long-Term Asset Management", desc: "maximise performance and asset value after the tie-up." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="mt-2.5 w-1.5 h-1.5 bg-mustard rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                      <strong className="text-black font-semibold mr-2">{item.title}</strong>
                      <span className="font-light">{item.desc}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 text-mustard font-bold text-xs md:text-sm tracking-[0.3em] uppercase hover:gap-4 transition-all"
              >
                Enquire Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 2. THE VNEXORA EDGE - VALUE PROPS */}
      <Section spacing="lg" className="bg-[#000613] font-sans relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-mustard)_0%,_transparent_70%)] blur-[120px] mix-blend-screen" 
             style={{ '--color-mustard': '#CFA052' } as any} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="relative bg-[#0B0D17] p-10 md:p-14 border border-white/5 flex flex-col items-start gap-8 group hover:border-mustard/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Top Highlight */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-mustard to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              {/* Entry Accent Bar */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "24px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8 }}
                className="absolute top-0 left-0 h-[3px] bg-mustard"
              />

              <div className="w-16 h-16 rounded-none bg-mustard flex items-center justify-center text-black shadow-[0_0_30px_rgba(207,160,82,0.2)] group-hover:shadow-[0_0_40px_rgba(207,160,82,0.4)] group-hover:scale-110 transition-all duration-500">
                <feature.icon size={28} />
              </div>
              
              <div>
                <h3 className="text-2xl font-serif mb-5 tracking-tight group-hover:text-mustard transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light text-base italic group-hover:text-white/80 transition-colors duration-500">
                  {feature.desc}
                </p>
              </div>

              {/* Decorative Number or Tag */}
              <div className="absolute -bottom-4 -right-2 text-8xl font-serif text-white/[0.02] group-hover:text-mustard/[0.05] transition-colors duration-700 select-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. PARTNERSHIP ORCHESTRATION - TIMELINE */}
      <Section spacing="lg" className="bg-[#000613] overflow-visible font-sans">
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
      <Section spacing="lg" className="bg-[#000613] relative border-t border-white/5 font-sans">
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

      {/* 5. BRAND PORTFOLIO - MARQUEE (EXACT MATCH WITH HOME PAGE) */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-b border-white/5 bg-[#000613] font-sans">
        <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
           <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30">In Synergy With Global Giants</h4>
        </div>
        
        <div className="relative w-full overflow-hidden flex py-10">
          {/* Side Gradients for seamless blend */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#000613] to-transparent z-10" />
          
          <motion.div 
            className="flex items-center gap-16 md:gap-24 w-max px-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div 
                key={idx} 
                className="h-16 md:h-[100px] lg:h-[120px] flex-shrink-0 grayscale brightness-[2.5] opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-110 hover:grayscale-0"
                style={{ mixBlendMode: 'plus-lighter' }}
              >
                <img src={logo} alt="Partner logo" className="h-full w-auto object-contain" />
              </div>
            ))}
          </motion.div>
          
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#000613] to-transparent z-10" />
        </div>
      </section>

      {/* 6. CONCIERGE INQUIRY SECTION */}
      <Section id="contact" spacing="lg" className="bg-[#000613] font-sans">
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
