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
      {/* GLOBAL FOOTER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer_luxe_bg.png"
          alt="Luxury Architecture Background"
          fill
          className="object-cover brightness-[0.6] saturate-[1.2]"
          priority
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/10" />
      </div>

      {/* 1. NEWSLETTER SECTION - UNIFIED WITH GLOBAL BACKGROUND */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-3xl md:text-5xl font-serif mb-8 tracking-[0.2em] uppercase leading-tight italic font-light drop-shadow-2xl">
              STAY IN THE LOOP
            </h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-2xl mx-auto group">
              <input
                type="email"
                placeholder="ENTER YOUR OFFICIAL EMAIL"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none py-5 px-6 text-xs tracking-[0.4em] font-black focus:border-mustard transition-all duration-700 shadow-2xl"
                required
              />
              <button 
                type="submit"
                className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4 text-white/80 hover:text-mustard transition-colors duration-300 group-hover:gap-6"
              >
                <span className="text-[10px] font-black tracking-[0.5em]">CONNECT</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN FOOTER CONTENT - UNIFIED, NO BLUR */}
      <div className="relative bg-black/60 text-white py-8 px-6 md:px-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            
            {/* Column 1: Logo & Branding */}
            <div className="lg:pr-12 lg:border-r border-white/10">
              <div className="mb-8 mt-[-10px]">
                <Image 
                  src="/images/logo.png" 
                  alt="Vnexora" 
                  width={180} 
                  height={180} 
                  className="object-contain"
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
                    { icon: Facebook, href: "https://www.facebook.com/share/15Vve6X98p/?mibextid=wwXIfr" },
                    { icon: Instagram, href: "https://www.instagram.com/vnexora_hospitality/" },
                    { icon: Youtube, href: "https://youtube.com/@vnexorahospitality" }
                  ].map((social, idx) => (
                    <Link 
                      key={idx} 
                      href={social.href}
                      target="_blank"
                      className="w-9 h-9 rounded-none border border-mustard/30 text-mustard flex items-center justify-center hover:bg-mustard hover:text-black transition-all duration-500"
                    >
                      <social.icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="lg:px-12 lg:border-r border-white/10">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Call us
                <span className="block w-6 h-[1px] bg-mustard mt-2" />
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Phone size={14} className="text-white/40 group-hover:text-mustard transition-colors" /></div>
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">PHONE</p>
                    <a href="tel:+918318195911" className="text-xs hover:text-white transition-colors tracking-widest font-bold">+91 83181 95911</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Mail size={14} className="text-white/40 group-hover:text-mustard transition-colors" /></div>
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">EMAIL US</p>
                    <a href="mailto:connect@vnexora.com" className="text-xs hover:text-white transition-colors tracking-widest">connect@vnexora.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><MapPin size={14} className="text-white/40 group-hover:text-mustard transition-colors" /></div>
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">VISIT US</p>
                    <p className="text-xs tracking-widest leading-relaxed text-white/70">
                      5th Floor, CDC Building,<br />
                      AIC BHU Campus, Varanasi - 221005
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="lg:px-12 lg:border-r border-white/10">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Quick Links
                <span className="block w-6 h-[1px] bg-mustard mt-2" />
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
                      className="text-white/50 hover:text-mustard text-[10px] tracking-[0.2em] uppercase transition-colors font-bold"
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
                <span className="block w-6 h-[1px] bg-mustard mt-2" />
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
                      className="text-white/50 hover:text-mustard text-[10px] tracking-[0.2em] uppercase transition-colors font-bold"
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
                    <p className="text-[10px] font-serif text-mustard">Hospitality Awards</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom: Unified Single Block */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-8 text-[9px] tracking-[0.3em] font-bold text-white/20 uppercase font-sans">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
              <span>© {currentYear} VNEXORA LUXURY HOSPITALITY.</span>
            </div>
            
            <motion.div 
               whileHover={{ scale: 1.1 }}
               className="text-[10px] tracking-[0.2em] text-white/10 font-bold hidden md:block"
            >
               ESTABLISHED 2024
            </motion.div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
