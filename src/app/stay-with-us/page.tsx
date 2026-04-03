"use client";

import { Section } from "@/components/ui/Section";

import { motion } from "framer-motion";
import { 
  Waves, 
  UtensilsCrossed, 
  Sparkles, 
  Moon, 
  ArrowRight,
  ShieldCheck,
  Star
} from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Signature Wellness",
    description: "Holistic spa treatments and rejuvenation programs designed to restore balance and vitality.",
    image: "/images/pool_hero.jpg",
    icon: <Waves className="w-6 h-6" />
  },
  {
    title: "Curated Dining",
    description: "Exceptional culinary journeys led by world-class chefs, celebrating local flavors and global techniques.",
    image: "/images/bar_hero.jpg",
    icon: <UtensilsCrossed className="w-6 h-6" />
  },
  {
    title: "Bespoke Service",
    description: "Tailored guest experiences that anticipate every need — from check-in to final farewell.",
    image: "/images/reception_hero.jpg",
    icon: <Sparkles className="w-6 h-6" />
  }
];

export default function StayWithUsPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-mustard selection:text-white">
      
      {/* NEW RESTRUCTURED HERO - CENTERED ALIGNMENT */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="container mx-auto max-w-[1500px]">
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center gap-8 mb-12">
                <span className="text-mustard text-[11px] font-bold tracking-[0.8em] uppercase">The Art of Living</span>
                
                {/* LOGO BELOW THE ART OF LIVING */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <div className="relative w-[240px] h-[120px] md:w-[360px] md:h-[180px] flex items-center justify-center p-3 border border-white/5 bg-white/2 rounded-[2rem] backdrop-blur-md shadow-2xl transition-all duration-700 hover:border-mustard/30">
                    <img 
                      src="/images/mango1.png" 
                      alt="mangoH Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <div className="w-[1px] h-12 bg-gradient-to-b from-mustard to-transparent" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white tracking-tighter leading-[0.9] mb-12">
                Beyond <br />
                <span className="italic text-gold-gradient">Hospitality.</span>
              </h1>
              
              <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Every property is meticulously managed to deliver measurable returns for owners and unforgettable experiences for guests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Pillars */}
      <Section spacing="lg" className="bg-[#050505] relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-10 border border-white/5 relative">
                   <div 
                     className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                     style={{ backgroundImage: `url('${exp.image}')` }}
                   />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                   <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-mustard/20 backdrop-blur-md flex items-center justify-center text-mustard border border-mustard/30 transition-transform group-hover:scale-110">
                      {exp.icon}
                   </div>
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-mustard transition-colors">
                  {exp.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed mb-8">
                   {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Standards Section */}
      <Section spacing="lg" className="bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="bg-forest rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 border border-cream/5">
              <div className="lg:w-1/2">
                 <span className="text-mustard text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block">Our Commitment</span>
                 <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
                    Clinical Precision. <br />
                    <span className="italic text-gold-gradient">Invisible Effort.</span>
                 </h2>
                 <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
                    We transcend the standard checklist to create environments that breathe. Through proprietary training and algorithmic service monitoring, we ensure that every touchpoint—from arrival to departure—is flawlessly executed.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                       <ShieldCheck className="w-5 h-5 text-mustard mt-1" />
                       <div>
                          <span className="block text-white font-medium mb-1">Global Safety</span>
                          <p className="text-white/30 text-xs">Exceeding international security standards.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Star className="w-5 h-5 text-mustard mt-1" />
                       <div>
                          <span className="block text-white font-medium mb-1">Star Quality</span>
                          <p className="text-white/30 text-xs">Consistent clinical audit performance.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 relative">
                 <div className="aspect-square rounded-[3rem] overflow-hidden border border-cream/10">
                    <img src="/images/reception_hero.jpg" alt="Guest Experience" className="w-full h-full object-cover opacity-60" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-mustard p-10 rounded-[2rem] text-forest-dark hidden md:block">
                    <Moon className="w-10 h-10 mb-6" />
                    <span className="text-2xl font-serif font-bold italic leading-tight block">Sleep Optimization <br />System</span>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" className="text-center bg-[#050505]">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-serif text-white mb-10">
              The mangoH Standard
           </h2>
           <p className="text-white/40 max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed">
              If you are a guest looking for our latest property updates or an investor interested in our service standards, we invite you to connect with our concierge team.
           </p>
           <Link href="/contact">
              <button className="px-12 py-6 bg-transparent border border-white/20 text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                 Connect With Concierge
              </button>
           </Link>
        </div>
      </Section>

    </main>
  );
}
