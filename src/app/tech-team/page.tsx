"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Users, Mail, Linkedin, Globe } from "lucide-react";

const teamMembers = [
  { 
    name: "Vikram Malhotra", 
    role: "Chief Executive Officer", 
    image: "/images/bar_hero.jpg",
    bio: "Visionary leader with 20+ years in international luxury hospitality assets.",
    links: { linkedin: "#", mail: "ceo@vnexora.com" }
  },
  { 
    name: "Ananya Sharma", 
    role: "Chief Operations Officer", 
    image: "/images/pool_hero.jpg",
    bio: "Operational expert specializing in clinical execution and guest experience optimization.",
    links: { linkedin: "#", mail: "coo@vnexora.com" }
  },
  { 
    name: "Marcus Thorne", 
    role: "Head of Asset Management", 
    image: "/images/reception_hero.jpg",
    bio: "Strategic advisor for capital appreciation and high-yield hospitality portfolios.",
    links: { linkedin: "#", mail: "assets@vnexora.com" }
  },
  { 
    name: "Elena Rossi", 
    role: "Director of Brand Partnerships", 
    image: "/images/dark_room_hero.jpg",
    bio: "Facilitator of exclusive global affiliations and market positioning strategies.",
    links: { linkedin: "#", mail: "brands@vnexora.com" }
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any } }
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-mustard selection:text-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-48 pb-24 px-4 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(207,160,82,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-flex items-center gap-2 text-mustard text-[10px] font-bold uppercase tracking-[0.5em] mb-8 py-2 px-4 rounded-full border border-mustard/20 bg-mustard/5">
              <Users className="w-3 h-3" /> Collective Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight mb-8">
              The <span className="italic text-gold-gradient">Visionaries</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Meet the architects of transformation. Our leadership combines heritage wisdom with clinical modern strategy to redefine luxury hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <Section spacing="lg" className="bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] shadow-2xl bg-forest border border-forest/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-[1s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:grayscale-0"
                  />
                  
                  {/* Hover Overlay - Glassmorph */}
                  <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                      <p className="text-white/80 text-sm font-light leading-relaxed mb-6">
                        "{member.bio}"
                      </p>
                      <div className="flex gap-4">
                        <a href={member.links.linkedin} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mustard hover:text-forest transition-colors border border-white/20">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={`mailto:${member.links.mail}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mustard hover:text-forest transition-colors border border-white/20">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-2">
                  <h3 className="text-2xl font-serif text-forest mb-2 group-hover:text-mustard transition-colors duration-500">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-mustard/40 group-hover:w-12 transition-all duration-500" />
                    <p className="text-[10px] font-bold tracking-[0.3em] text-forest/40 group-hover:text-forest uppercase transition-colors">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Join the Mission */}
      <Section spacing="lg" className="bg-forest py-32 rounded-t-[5rem] -mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Want to join our <span className="italic text-gold-gradient">Elite Network?</span></h2>
            <p className="text-white/40 text-lg font-light mb-12 max-w-2xl mx-auto italic">
              "Excellence is not a singular act, but a shared philosophy."
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="/careers" className="px-10 py-5 bg-mustard text-forest-dark text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all shadow-[0_10px_30px_rgba(207,160,82,0.2)]">
                View Careers
              </a>
              <a href="/book-now" className="px-10 py-5 bg-transparent border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Globe className="w-4 h-4" /> Contact Leadership
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

