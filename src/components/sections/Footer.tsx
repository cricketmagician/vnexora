"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10 font-sans relative z-10 w-full overflow-hidden">
      
      {/* MASSIVE WATERMARK LOGO */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.03] overflow-hidden select-none">
        <Image
          src="/images/vnexora-bird-full.png"
          alt="Vnexora Watermark"
          width={1200}
          height={1200}
          className="object-contain scale-150 md:scale-125 translate-y-20"
        />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">

        {/* MIDDLE: Newsletter Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 mb-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
        >
          <div className="flex-shrink-0 md:w-1/4 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-16">
            <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide leading-tight">
              JOIN OUR<br />NEWSLETTER
            </h3>
          </div>
          
          <div className="flex-grow w-full max-w-2xl relative">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full bg-transparent border-none text-xl md:text-2xl text-white/50 focus:text-white placeholder:text-white/30 outline-none font-light py-4"
                required
              />
              <button 
                type="submit"
                className="ml-4 w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-white text-black flex items-center justify-center hover:bg-mustard transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* BOTTOM: Logo, Links, Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 border-t border-white/10 pt-12">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
             <Image 
                src="/images/vnexora-bird-full.png" 
                alt="Vnexora" 
                width={200} 
                height={60} 
                className="object-contain w-auto h-12 md:h-16"
             />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Our Story', 'Our Team', 'Sustainability', 'Careers', 'Legal'].map((link) => (
              <Link 
                key={link} 
                href={
                  link === 'Our Story' ? '/about-us' : 
                  link === 'Our Team' ? '/team' : 
                  link === 'Careers' ? '/career' : '#'
                }
                className="text-white/60 hover:text-white text-xs md:text-sm tracking-widest uppercase transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Copyright & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white/40 text-xs md:text-sm tracking-widest uppercase text-center md:text-right">
            <p>© {new Date().getFullYear()} VNEXORA LUXURY HOSPITALITY</p>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
