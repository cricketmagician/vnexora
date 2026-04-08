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
import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/contactAction";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsEmail, setNewsEmail] = useState("");
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);
  
  const [footerContact, setFooterContact] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNews(true);
    try {
      const result = await submitInquiry({
        fullName: "Newsletter Subscriber",
        email: newsEmail,
        subject: "Newsletter Signup",
        message: "User subscribed to the institutional newsletter via footer.",
        source: 'footer_newsletter'
      });
      if (result.success) {
        toast.success("Institutional connection established. Welcome to the loop.");
        setNewsEmail("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Process error occurred.");
    } finally {
      setIsSubmittingNews(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    try {
      const result = await submitInquiry({
        fullName: footerContact.name,
        email: footerContact.email,
        phone: footerContact.phone,
        subject: "Footer Strategic Inquiry",
        message: footerContact.message,
        source: 'footer_contact_bar'
      });
      if (result.success) {
        toast.success("Inquiry logged. Our desk will initiate contact.");
        setFooterContact({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Institutional processing error.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <footer className="relative z-10 w-full font-sans overflow-hidden">
      {/* 1. NEWSLETTER SECTION - DARK GLASS */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-[#050505] border-b border-white/5">
        {/* Dark Glass Layer */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-3xl md:text-5xl font-serif mb-8 tracking-[0.2em] uppercase leading-tight italic font-light drop-shadow-2xl">
              STAY IN THE <span className="text-mustard">LOOP</span>
            </h2>
            
            <form onSubmit={handleNewsSubmit} className="relative max-w-2xl mx-auto group">
              <input
                type="email"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="ENTER YOUR OFFICIAL EMAIL"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none py-5 px-6 text-xs tracking-[0.4em] font-black focus:border-mustard transition-all duration-700 shadow-2xl"
                required
              />
              <button 
                type="submit"
                disabled={isSubmittingNews}
                className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4 text-white/40 hover:text-mustard transition-colors duration-300 group-hover:gap-6 disabled:opacity-50"
              >
                <span className="text-[10px] font-black tracking-[0.5em]">{isSubmittingNews ? "WAITING..." : "CONNECT"}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN FOOTER CONTENT - WITH GUEST IMAGE BACKGROUND */}
      <div className="relative py-12 px-6 md:px-12 overflow-hidden">
        {/* Specific Background for Main Footer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hotel_guests_enjoying.png"
            alt="Luxury Hospitality Experience"
            fill
            className="object-cover brightness-[0.3] saturate-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-20 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            
            {/* Column 1: Logo & Branding */}
            <div className="lg:pr-12 lg:border-r border-white/10 text-white">
              <div className="mb-8 mt-[-10px]">
                <Image 
                  src="/images/logo.png" 
                  alt="Vnexora" 
                  width={220} 
                  height={220} 
                  className="object-contain transition-all duration-700"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs font-light tracking-wide">
                Redefining luxury hospitality through innovation, strategic insight, and global excellence.
              </p>
              
              <div className="mb-10">
                <h4 className="text-[10px] font-black tracking-[0.5em] text-mustard mb-5 uppercase">Follow us</h4>
                <div className="flex gap-3 mb-8">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/company/vnexora/" },
                    { icon: Facebook, href: "https://www.facebook.com/share/15Vve6X98p/?mibextid=wwXIfr" },
                    { 
                      icon: () => (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.012 2c-5.508 0-9.991 4.482-9.991 9.99 0 1.758.459 3.469 1.332 4.983L2 22l5.127-1.345c1.543.84 3.275 1.282 5.039 1.282 5.508 0 9.991-4.482 9.991-9.99 0-5.508-4.483-9.991-9.945-9.991zM10.42 16.035c-.174-.082-1.026-.505-1.185-.564-.159-.059-.274-.088-.389.082-.115.171-.444.564-.544.678-.1.115-.2.129-.374.041-.174-.082-.734-.271-1.398-.862-.516-.46-1.066-1.028-1.168-1.2-.102-.171-.011-.264.076-.352.079-.079.174-.204.261-.305.087-.101.115-.171.174-.286.059-.115.029-.214-.015-.298-.044-.084-.389-.938-.533-1.286-.14-.338-.282-.291-.389-.297-.1-.005-.214-.006-.329-.006-.115 0-.302.043-.46.214-.159.171-.605.591-.605 1.442s.62 1.671.706 1.786c.087.115 1.219 1.861 2.954 2.61.413.178.735.285.986.365.414.132.791.114 1.091.069.333-.051 1.023-.418 1.167-.822.145-.404.145-.75.101-.822-.045-.072-.162-.115-.336-.197z"/>
                        </svg>
                      ),
                      href: "https://wa.me/918318195911"
                    },
                    { icon: Instagram, href: "https://www.instagram.com/vnexora_hospitality/" },
                    { icon: Youtube, href: "https://youtube.com/@vnexorahospitality" }
                  ].map((social, idx) => {
                    const Icon: any = social.icon;
                    return (
                      <Link 
                        key={idx} 
                        href={social.href}
                        target="_blank"
                        className="w-9 h-9 rounded-none border border-mustard/30 text-mustard flex items-center justify-center hover:bg-mustard hover:text-black transition-all duration-500"
                      >
                        {typeof Icon === 'function' ? <Icon /> : <Icon size={16} />}
                      </Link>
                    );
                  })}
                </div>

                {/* WhatsApp Advisory Button - Moved from Column 4 */}
                <Link 
                  href="https://wa.me/918318195911"
                  target="_blank"
                  className="group/wa flex items-center justify-between p-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:border-mustard/50 hover:bg-white/10 transition-all duration-700 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-mustard/0 via-mustard/5 to-mustard/0 -translate-x-[100%] group-hover/wa:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-mustard/10 border border-mustard/30 flex items-center justify-center group-hover/wa:bg-mustard group-hover/wa:rotate-12 transition-all duration-500">
                      <svg className="w-5 h-5 text-mustard group-hover/wa:text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.012 2c-5.508 0-9.991 4.482-9.991 9.99 0 1.758.459 3.469 1.332 4.983L2 22l5.127-1.345c1.543.84 3.275 1.282 5.039 1.282 5.508 0 9.991-4.482 9.991-9.99 0-5.508-4.483-9.991-9.945-9.991zM10.42 16.035c-.174-.082-1.026-.505-1.185-.564-.159-.059-.274-.088-.389.082-.115.171-.444.564-.544.678-.1.115-.2.129-.374.041-.174-.082-.734-.271-1.398-.862-.516-.46-1.066-1.028-1.168-1.2-.102-.171-.011-.264.076-.352.079-.079.174-.204.261-.305.087-.101.115-.171.174-.286.059-.115.029-.214-.015-.298-.044-.084-.389-.938-.533-1.286-.14-.338-.282-.291-.389-.297-.1-.005-.214-.006-.329-.006-.115 0-.302.043-.46.214-.159.171-.605.591-.605 1.442s.62 1.671.706 1.786c.087.115 1.219 1.861 2.954 2.61.413.178.735.285.986.365.414.132.791.114 1.091.069.333-.051 1.023-.418 1.167-.822.145-.404.145-.75.101-.822-.045-.072-.162-.115-.336-.197z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[8px] font-black tracking-[0.3em] uppercase text-white/30 group-hover/wa:text-mustard transition-colors">Direct Desk</span>
                      <span className="text-[11px] font-bold tracking-[0.1em] text-white uppercase italic">WhatsApp Advisory</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-7 h-7 border border-white/5 rounded-full flex items-center justify-center text-white/20 group-hover/wa:text-mustard group-hover/wa:border-mustard/30 transition-all">
                     <ArrowUpRight size={14} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="lg:px-12 lg:border-r border-white/10 text-white">
              <h4 className="text-[12px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Connect us
                <span className="block w-6 h-[1px] bg-mustard mt-2" />
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Phone size={15} className="text-white/40 group-hover:text-mustard transition-colors" /></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[11px] text-white/30 uppercase tracking-widest mb-1">PHONE</p>
                    <a href="tel:+918318195911" className="text-sm text-white/70 hover:text-mustard transition-all tracking-widest font-normal">+91 83181 95911</a>
                    <a href="tel:+917980829403" className="text-sm text-white/70 hover:text-mustard transition-all tracking-widest font-normal">+91 79808 29403</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><Mail size={15} className="text-white/40 group-hover:text-mustard transition-colors" /></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[11px] text-white/30 uppercase tracking-widest mb-1">EMAIL US</p>
                    <a href="mailto:connect@vnexora.com" className="text-sm text-white/70 hover:text-mustard transition-all tracking-widest font-normal">connect@vnexora.com</a>
                    <a href="mailto:career@vnexora.com" className="text-sm text-white/70 hover:text-mustard transition-all tracking-widest font-normal">career@vnexora.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1"><MapPin size={15} className="text-white/40 group-hover:text-mustard transition-colors" /></div>
                  <div className="space-y-4">
                    <p className="text-[11px] text-white/30 uppercase tracking-widest mb-1">VISIT US</p>
                    <div>
                      <p className="text-[10px] text-mustard font-bold tracking-widest uppercase mb-1">Central Hub</p>
                      <p className="text-sm tracking-widest leading-relaxed text-white/70">
                        5th Floor, CDC Building,<br />
                        AIC BHU Campus, Varanasi - 221005
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-mustard font-bold tracking-widest uppercase mb-1">European Division</p>
                      <p className="text-sm tracking-widest leading-relaxed text-white/70">
                        128 City Road, London,<br />
                        United Kingdom, EC1V 2NX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="lg:px-12 lg:border-r border-white/10 text-white">
              <h4 className="text-[12px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Quick Links
                <span className="block w-6 h-[1px] bg-mustard mt-2" />
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Home",            href: "/" },
                  { name: "About Us",        href: "/about-us" },
                  { name: "Our Hotels",      href: "/our-hotels" },
                  { name: "Services",        href: "/services" },
                  { name: "Our Team",        href: "/team" },
                  { name: "Career",          href: "/career" },
                  { name: "Contact",         href: "/contact" },
                  { name: "Partner With Us", href: "/contact#partner" },
                  { name: "MangoH",          href: "/mango" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="group flex items-center gap-2 text-white/45 hover:text-mustard text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold"
                    >
                      <span className="w-0 h-[1px] bg-mustard group-hover:w-4 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Let's Work Together Form */}
            <div className="lg:pl-12 text-white">
              <h4 className="text-[12px] font-bold tracking-[0.4em] text-white/80 mb-8 uppercase relative inline-block">
                Let&apos;s Work Together
                <span className="block w-6 h-[1px] bg-mustard mt-2" />
              </h4>
              
              <form onSubmit={handleContactSubmit} className="space-y-6 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative overflow-hidden">
                {/* Internal Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-mustard/10 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Name</label>
                    <input 
                      type="text" 
                      required
                      value={footerContact.name}
                      onChange={(e) => setFooterContact({...footerContact, name: e.target.value})}
                      placeholder="NAME"
                      className="w-full bg-transparent border-b border-white/10 py-2 text-[11px] text-white placeholder:text-white/10 outline-none focus:border-mustard transition-all uppercase"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Mobile Number</label>
                    <input 
                      type="tel" 
                      required
                      value={footerContact.phone}
                      onChange={(e) => setFooterContact({...footerContact, phone: e.target.value})}
                      placeholder="PHONE"
                      className="w-full bg-transparent border-b border-white/10 py-2 text-[11px] text-white placeholder:text-white/10 outline-none focus:border-mustard transition-all uppercase"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={footerContact.email}
                    onChange={(e) => setFooterContact({...footerContact, email: e.target.value})}
                    placeholder="OFFICIAL EMAIL"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-[11px] text-white placeholder:text-white/10 outline-none focus:border-mustard transition-all uppercase"
                  />
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Message</label>
                  <textarea 
                    placeholder="HOW CAN WE HELP?"
                    required
                    value={footerContact.message}
                    onChange={(e) => setFooterContact({...footerContact, message: e.target.value})}
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-[11px] text-white placeholder:text-white/10 outline-none focus:border-mustard transition-all uppercase resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full py-4 bg-mustard text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl relative z-10 disabled:opacity-50"
                >
                  {isSubmittingContact ? "TRANSMITTING..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom: Unified Single Block */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-8 text-[11px] tracking-[0.3em] font-bold text-white/20 uppercase font-sans">
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
