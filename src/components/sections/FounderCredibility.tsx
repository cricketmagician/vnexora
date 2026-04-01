"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const FounderCredibility = () => {
  return (
    <Section id="about" className="bg-cream py-32 border-b border-dark-text/10">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/5] overflow-hidden border border-dark-text/10 shadow-2xl group"
          >
          <div className="absolute inset-0 bg-[url('/images/founder.png')] bg-cover bg-center grayscale transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-12 left-12">
              <p className="text-mustard text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Founding Pedigree</p>
              <h4 className="text-3xl font-serif text-dark-text mb-2 italic">IIT BHU Alumnus</h4>
              <p className="text-muted text-sm font-light tracking-widest uppercase">Executive Leadership</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-mustard text-xs font-bold uppercase tracking-[0.4em] mb-10">The Vnexora Pedigree</p>
            <h2 className="text-4xl md:text-6xl font-serif text-dark-text mb-10 leading-[1.1] tracking-tight">
              Trusted by <span className="text-gold-gradient italic">Global</span> Hospitality Leaders.
            </h2>
            
            <div className="space-y-8 mb-12">
              <p className="text-dark-text/70 text-lg md:text-xl font-light leading-relaxed">
                Vnexora was founded to bridge the gap between traditional hospitality management and modern asset synchronization.
              </p>
              <p className="text-muted text-base md:text-lg font-light leading-relaxed">
                Our leadership brings an engineering-mindset from IIT BHU, combined with years of field experience managing some of the most complex high-yield assets in India and across the globe.
              </p>
            </div>

            <div className="flex flex-wrap gap-10 items-center pt-8 border-t border-dark-text/10">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-dark-text italic tracking-widest">VNEXORA</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mt-2">Elite Management</span>
              </div>
              <Button variant="outline" size="lg" className="rounded-none border-dark-text/20 hover:bg-dark-text/5 text-dark-text text-sm uppercase tracking-widest h-14 px-10">
                The Vision
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
