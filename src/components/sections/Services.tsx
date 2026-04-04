import { services } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import React from "react";

// Mapping icons based on the slug
const IconMap = ({ slug, className }: { slug: string; className?: string }) => {
  return null; // Icons are handled by the new design using Image backgrounds
};

export const Services = () => {
  return (
    <Section spacing="lg" className="bg-[#050505]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-mustard mb-4 leading-loose">
            Discover Vnexora
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white tracking-widest uppercase">
            Our Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full perspective-1000"
            >
              <div className="h-full p-8 md:p-10 rounded-[40px] bg-[#0A0A0A]/40 border border-white/10 hover:border-mustard/40 transition-all duration-700 flex flex-col justify-between overflow-hidden backdrop-blur-[40px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:bg-[#0A0A0A]/60">
                
                {/* Dynamic Background Image - Frosted & Overlaid */}
                <div className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-1000">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-transparent to-black" />
                </div>

                {/* Animated Accent Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-mustard/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Content Overlay */}
                <div className="relative z-10">
                  <div className="mb-8">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-mustard/30" />
                        <span className="text-[10px] font-sans font-black text-mustard tracking-[0.4em] uppercase">
                          {service.label || "Expertise"}
                        </span>
                     </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-5 tracking-tight group-hover:text-mustard transition-colors duration-500 leading-[1.1]">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed mb-8 group-hover:text-white/70 transition-colors duration-500 font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* High-fidelity Highlights */}
                  {service.highlights && (
                    <div className="space-y-4 mb-14">
                      {service.highlights.map((highlight, hIndex) => (
                        <motion.div 
                          key={hIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + hIndex * 0.1 }}
                          className="flex items-center gap-4 group/item"
                        >
                          <div className="w-6 h-6 rounded-lg bg-mustard/10 flex items-center justify-center shrink-0 group-hover/item:bg-mustard group-hover/item:rotate-[15deg] transition-all duration-300">
                            <CheckCircle2 className="w-3 h-3 text-mustard group-hover/item:text-black" />
                          </div>
                          <span className="text-white/50 text-xs md:text-[14px] font-light leading-snug group-hover/item:text-white transition-colors duration-300">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA Desk - Premium Alignment */}
                <div className="relative z-10 mt-auto pt-8 border-t border-white/5 group-hover:border-mustard/20 transition-colors duration-700">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between group/btn"
                  >
                    <div className="flex flex-col text-left">
                       <span className="text-[9px] font-black tracking-[0.3em] uppercase text-mustard/60 group-hover/btn:text-mustard transition-colors">Direct Inquiry</span>
                       <span className="text-sm font-serif text-white italic">Connect with an Advisor</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-mustard group-hover/btn:border-mustard shadow-2xl group-hover/btn:shadow-mustard/20 transition-all duration-500">
                      <ArrowRight size={18} className="text-mustard group-hover/btn:text-[#050505] group-hover/btn:translate-x-1 transition-all duration-500" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
