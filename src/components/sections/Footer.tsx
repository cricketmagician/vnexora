"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full font-sans overflow-hidden">
      
      {/* 1. NEWSLETTER SECTION - FULL WIDTH */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newsletter_bg.png"
            alt="Newsletter Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-3xl md:text-5xl font-serif mb-8 tracking-wider uppercase leading-tight">
              STAY IN THE LOOP
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-10 max-w-xl mx-auto uppercase tracking-[0.2em]">
              Subscribe to receive the latest updates and exclusive insights from Vnexora.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-2xl mx-auto group">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-white/10 border-b border-white/30 text-white placeholder:text-white/40 outline-none py-4 px-2 text-sm md:text-base tracking-widest focus:border-teal-accent transition-all duration-500"
                required
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 text-white hover:text-teal-accent transition-colors duration-300 group-hover:gap-5"
              >
                <span className="text-xs md:text-sm font-bold tracking-[0.3em]">LET'S TALK</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN FOOTER CONTENT - TEAL GRAY */}
      <div className="bg-teal-gray text-white py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            
            {/* Column 1: Logo & Branding */}
            <div className="lg:pr-12 lg:border-r border-white/20">
              <div className="mb-8">
                <Image 
                  src="/images/vnexora-bird-full.png" 
                  alt="Vnexora" 
                  width={180} 
                  height={50} 
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-xs font-light">
                Redefining luxury hospitality through innovation, strategic insight, and unparalleled service excellence globally.
              </p>
              
              <div className="mb-12">
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/50 mb-6 uppercase">Follow us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/company/vnexora/" },
                    { icon: Instagram, href: "#" },
                    { icon: Youtube, href: "#" }
                  ].map((social, idx) => (
                    <Link 
                      key={idx} 
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal-accent hover:border-teal-accent transition-all duration-300"
                    >
                      <social.icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Legal Links (Bottom Left in Desktop) */}
              <div className="hidden lg:flex flex-wrap gap-4 text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Use</Link>
                <Link href="#" className="hover:text-white">Legal</Link>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="lg:px-12 lg:border-r border-white/20">
              <h4 className="text-[11px] font-bold tracking-[0.4em] text-white mb-10 uppercase relative inline-block">
                Call us
                <span className="block w-8 h-[2px] bg-teal-accent mt-2" />
              </h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Phone size={16} className="text-white/60 group-hover:text-teal-accent transition-colors" /></div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">PHONE</p>
                    <a href="tel:+1234567890" className="text-sm hover:text-teal-accent transition-colors tracking-wider">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Mail size={16} className="text-white/60 group-hover:text-teal-accent transition-colors" /></div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">EMAIL US</p>
                    <a href="mailto:info@vnexora.com" className="text-sm hover:text-teal-accent transition-colors tracking-wider">info@vnexora.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><MapPin size={16} className="text-white/60 group-hover:text-teal-accent transition-colors" /></div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">VISIT US</p>
                    <p className="text-sm tracking-wider leading-relaxed">
                      123 Luxury Avenue,<br />
                      Suite 500, Dubai, UAE
                    </p>
                    <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-teal-accent mt-4 uppercase tracking-[0.3em] hover:gap-4 transition-all">
                      Visit Map <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="lg:px-12 lg:border-r border-white/20">
              <h4 className="text-[11px] font-bold tracking-[0.4em] text-white mb-10 uppercase relative inline-block">
                Quick Links
                <span className="block w-8 h-[2px] bg-teal-accent mt-2" />
              </h4>
              <ul className="space-y-6">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about-us" },
                  { name: "Our Team", href: "/team" },
                  { name: "Services", href: "/services" },
                  { name: "Portfolio", href: "/portfolio" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white/70 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Explore & Awards */}
            <div className="lg:pl-12">
              <h4 className="text-[11px] font-bold tracking-[0.4em] text-white mb-10 uppercase relative inline-block">
                Explore
                <span className="block w-8 h-[2px] bg-teal-accent mt-2" />
              </h4>
              <ul className="space-y-6 mb-12">
                {[
                  { name: "Sustainability", href: "/sustainability" },
                  { name: "Careers", href: "/career" },
                  { name: "Contact", href: "/contact" },
                  { name: "Sitemap", href: "/sitemap" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white/70 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Award / Social Proof */}
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                     {/* Placeholder for award logo */}
                     <span className="text-[8px] text-center font-bold text-white/40 tracking-tighter">LUXURY<br/>LEADERS<br/>2026</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">Top Rated Service</p>
                    <p className="text-xs font-serif text-teal-accent">Hospitality Awards 2026</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom: Mobile Legal & Copyright */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="lg:hidden flex flex-wrap justify-center gap-4 text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Use</Link>
              <Link href="#" className="hover:text-white">Legal</Link>
            </div>
            
            <p className="text-[10px] tracking-[0.3em] font-bold text-white/40 uppercase text-center md:text-right w-full">
              © {currentYear} VNEXORA LUXURY HOSPITALITY. ALL RIGHTS RESERVED.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
