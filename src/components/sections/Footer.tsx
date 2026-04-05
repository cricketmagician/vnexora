"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook,
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full font-sans overflow-hidden">
      
      {/* 1. NEWSLETTER SECTION - REDUCED HEIGHT */}
      <section className="relative h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newsletter_bg.png"
            alt="Newsletter Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-2xl md:text-4xl font-serif mb-6 tracking-wider uppercase leading-tight">
              STAY IN THE LOOP
            </h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-xl mx-auto group">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-white/5 backdrop-blur-sm border-b border-white/20 text-white placeholder:text-white/30 outline-none py-3 px-2 text-sm tracking-widest focus:border-teal-accent transition-all duration-500"
                required
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group-hover:gap-5"
              >
                <span className="text-[10px] font-bold tracking-[0.3em]">CONNECT</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN FOOTER CONTENT - GLASS THEME */}
      <div className="relative bg-[#000613]/80 backdrop-blur-2xl text-white py-12 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            
            {/* Column 1: Logo & Branding */}
            <div className="lg:pr-12 lg:border-r border-white/10">
              <div className="mb-8">
                <Image 
                  src="/images/vnexora-bird-full.png" 
                  alt="Vnexora" 
                  width={150} 
                  height={40} 
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-8 max-w-xs font-light tracking-wide">
                Redefining luxury hospitality through innovation, strategic insight, and global excellence.
              </p>
              
              <div className="mb-10">
                <h4 className="text-[9px] font-bold tracking-[0.4em] text-white/40 mb-5 uppercase">Follow us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/company/vnexora/" },
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Youtube, href: "#" }
                  ].map((social, idx) => (
                    <Link 
                      key={idx} 
                      href={social.href}
                      target="_blank"
                      className="w-9 h-9 rounded-none border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                    >
                      <social.icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Legal Links (Bottom Left in Desktop) */}
              <div className="hidden lg:flex flex-wrap gap-4 text-[9px] tracking-[0.2em] font-bold text-white/30 uppercase font-sans">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="lg:px-12 lg:border-r border-white/10">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Call us
                <span className="block w-6 h-[1px] bg-teal-accent mt-2" />
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Phone size={14} className="text-white/40 group-hover:text-teal-accent transition-colors" /></div>
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">PHONE</p>
                    <a href="tel:+1234567890" className="text-xs hover:text-white transition-colors tracking-widest">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Mail size={14} className="text-white/40 group-hover:text-teal-accent transition-colors" /></div>
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">EMAIL US</p>
                    <a href="mailto:info@vnexora.com" className="text-xs hover:text-white transition-colors tracking-widest">info@vnexora.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><MapPin size={14} className="text-white/40 group-hover:text-teal-accent transition-colors" /></div>
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">VISIT US</p>
                    <p className="text-xs tracking-widest leading-relaxed text-white/70">
                      Luxury Avenue, Suite 500,<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="lg:px-12 lg:border-r border-white/10">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Quick Links
                <span className="block w-6 h-[1px] bg-teal-accent mt-2" />
              </h4>
              <ul className="space-y-5">
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
                      className="text-white/50 hover:text-teal-accent text-[10px] tracking-[0.2em] uppercase transition-colors font-bold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Explore & Awards */}
            <div className="lg:pl-12">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Explore
                <span className="block w-6 h-[1px] bg-teal-accent mt-2" />
              </h4>
              <ul className="space-y-5 mb-10">
                {[
                  { name: "Sustainability", href: "/sustainability" },
                  { name: "Careers", href: "/career" },
                  { name: "Contact", href: "/contact" },
                  { name: "Sitemap", href: "/sitemap" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white/50 hover:text-teal-accent text-[10px] tracking-[0.2em] uppercase transition-colors font-bold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Award / Social Proof */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 group cursor-default opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center p-2">
                     <span className="text-[6px] text-center font-bold text-white/40 tracking-tighter uppercase">LUXURY<br/>LEADER<br/>2026</span>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1">Global Standard</p>
                    <p className="text-[10px] font-serif text-teal-accent">Hospitality Awards</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom: Mobile Legal & Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="lg:hidden flex flex-wrap justify-center gap-4 text-[9px] tracking-[0.2em] font-bold text-white/30 uppercase">
              <Link href="#" className="hover:text-white">Privacy</Link>
              <Link href="#" className="hover:text-white">Terms</Link>
            </div>
            
            <p className="text-[8px] tracking-[0.4em] font-bold text-white/20 uppercase text-center md:text-right w-full">
              © {currentYear} VNEXORA LUXURY HOSPITALITY.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
