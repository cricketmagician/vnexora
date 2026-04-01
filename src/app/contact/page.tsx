"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight, MessageCircle, ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-mustard selection:text-white pt-24 pb-24">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] mt-12 md:mt-20 mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto border border-black/5"
        >
          {/* LEFT: Branding & Image (40%) */}
          <div className="lg:w-[40%] relative bg-[#050505] p-10 md:p-16 flex flex-col justify-between overflow-hidden">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/hero/ultimate_luxury.png" 
                alt="Contact Vnexora" 
                fill 
                className="object-cover opacity-50 mix-blend-luminosity scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-forest/20 mix-blend-overlay" />
            </div>
             
            <div className="relative z-10 flex flex-col h-full py-12 md:py-16">
              {/* BRANDING: Vnexora Bird & Logo */}
              <div className="flex items-center gap-3 mb-16 md:mb-24 scale-110 origin-left">
                <div className="relative w-10 h-10">
                  <Image 
                    src="/images/vnexora-bird-full.png"
                    alt="Vnexora"
                    fill
                    className="object-contain brightness-125"
                  />
                </div>
                <span className="text-white text-xl font-serif tracking-[0.2em] uppercase">Vnexora</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Global <br/><span className="italic text-mustard">Concierge.</span>
              </h2>
              <p className="text-white/60 font-light text-sm md:text-lg mb-16 max-w-sm leading-relaxed">
                Whether diagnosing an underperforming asset or structuring a new luxury development, our team is ready to execute.
              </p>
               
              <div className="space-y-10">
                {/* Contact Item 1 */}
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-mustard border border-white/10 transition-all group-hover:bg-mustard group-hover:text-black">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[9px] font-bold tracking-widest uppercase mb-1">Central Hub</span>
                    <p className="text-sm md:text-base text-white/90 font-light">5th Floor, CDC Building, AIC<br/>BHU Campus, Varanasi - 221005</p>
                  </div>
                </div>

                {/* Contact Item 2 */}
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-mustard border border-white/10 transition-all group-hover:bg-mustard group-hover:text-black">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[9px] font-bold tracking-widest uppercase mb-1">Inquiries</span>
                    <a href="mailto:connect@vnexora.com" className="text-sm md:text-base text-white/90 font-light hover:text-mustard transition-colors">connect@vnexora.com</a>
                  </div>
                </div>

                {/* Contact Item 3 */}
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-mustard border border-white/10 transition-all group-hover:bg-mustard group-hover:text-black">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="block text-white/40 text-[9px] font-bold tracking-widest uppercase mb-1">Direct Lines</span>
                    <a href="tel:+918318195911" className="text-sm md:text-base text-white/90 font-light hover:text-mustard transition-colors">+91 83181 95911</a>
                    <a href="tel:+917980829403" className="text-sm md:text-base text-white/90 font-light hover:text-mustard transition-colors">+91 79808 29403</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Minimalist Form (60%) */}
          <div className="lg:w-[60%] p-10 md:p-16 lg:px-24 pt-24 pb-32 md:pt-32 md:pb-40 bg-white flex flex-col relative overflow-hidden">
            
            {/* FLOATING 3D TELEPHONE ASSET */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                rotate: 0,
                y: [0, -10, 0] // subtle floating animation
              }}
              transition={{ 
                opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-16 -right-4 md:-top-24 md:-right-8 w-[300px] h-[300px] md:w-[450px] md:h-[450px] pointer-events-none z-0 mix-blend-multiply brightness-[1.1] contrast-[1.2] opacity-80"
            >
              <Image
                src="/images/contact-phone.png"
                alt="Luxury Concierge Phone"
                fill
                className="object-contain"
              />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#0A0A0A] tracking-tight mb-16 relative z-10 text-forest">
              Contact Us
            </h2>

            <form className="space-y-12 max-w-2xl relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* First Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    className="peer w-full border-b border-[#0A0A0A]/10 bg-transparent py-3 text-[#0A0A0A] placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light text-lg" 
                    placeholder="First Name" 
                  />
                  <label 
                    htmlFor="firstName" 
                    className="absolute left-0 -top-5 text-[10px] text-[#0A0A0A]/40 font-bold uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-mustard peer-focus:font-bold peer-focus:uppercase"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    className="peer w-full border-b border-[#0A0A0A]/10 bg-transparent py-3 text-[#0A0A0A] placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light text-lg" 
                    placeholder="Last Name" 
                  />
                  <label 
                    htmlFor="lastName" 
                    className="absolute left-0 -top-5 text-[10px] text-[#0A0A0A]/40 font-bold uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-mustard peer-focus:font-bold peer-focus:uppercase"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="peer w-full border-b border-[#0A0A0A]/10 bg-transparent py-3 text-[#0A0A0A] placeholder-transparent focus:border-mustard focus:outline-none transition-colors font-light text-lg" 
                  placeholder="E-mail" 
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-5 text-[10px] text-[#0A0A0A]/40 font-bold uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-mustard peer-focus:font-bold peer-focus:uppercase"
                >
                  E-mail
                </label>
              </div>

              {/* Message */}
              <div className="relative group pt-4">
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="peer w-full border border-[#0A0A0A]/10 bg-white/40 p-4 text-[#0A0A0A] placeholder-transparent focus:border-mustard focus:ring-1 focus:ring-mustard/30 focus:outline-none transition-all font-light text-base resize-none rounded-2xl" 
                  placeholder="Message" 
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-0 -translate-y-1/2 bg-white px-2 text-[10px] text-[#0A0A0A]/40 font-bold uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:bg-white peer-focus:text-[10px] peer-focus:text-mustard peer-focus:font-bold peer-focus:uppercase"
                >
                  Message
                </label>
              </div>

              {/* Submit Button & Response Time */}
              <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-xs text-[#0A0A0A]/40 font-light max-w-[200px]">
                  Executive responses are curated within 24 hours.
                </p>
                <button 
                  type="submit"
                  className="relative overflow-hidden group bg-forest text-white px-12 md:px-16 py-5 rounded-full font-bold tracking-[0.2em] uppercase text-xs transition-all duration-500 hover:bg-[#14201b] hover:shadow-xl hover:shadow-forest/20 flex items-center gap-4"
                >
                  <span className="relative z-10">Submit</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* NEW SEPARATE SECTION: GLOBAL ADVISORY HUBS */}
      <section className="py-32 bg-forest relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mustard/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-mustard text-[10px] font-bold tracking-[0.4em] uppercase block mb-6"
            >
              Strategic Reach
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Global Advisory <br/>
              <span className="italic text-gold-gradient">& Operational Hubs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                region: "Innovation Hub",
                city: "Varanasi, India",
                status: "Central Hub",
                address: "5th Floor, CDC Building, AIC, BHU Campus - 221005",
                desc: "Strategic operations, talent development, and asset management oversight."
              },
              {
                region: "Corporate Desk",
                city: "New Delhi, India",
                status: "Corporate Node",
                address: "E-595, Ramphal Chowk, Sector-7 Dwarka, Delhi - 110075",
                desc: "Innovation and administrative operations for property owners across the local landscape."
              },
              {
                region: "European Division",
                city: "London, UK",
                status: "Strategic Node",
                address: "128 City Road, London, United Kingdom, EC1V 2NX",
                desc: "High-end advisory and strategic partnerships for the European luxury market."
              },
              {
                region: "NA Advisory",
                city: "Brookline, US",
                status: "Growth Node",
                address: "69 Columbia St. Brookline, MA 02446",
                desc: "North American property development consulting and hospitality asset management."
              }
            ].map((hub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-[#A67C52]/10 to-[#1A1A1A] backdrop-blur-xl rounded-[2.5rem] p-10 lg:p-12 border border-white/5 hover:border-mustard/40 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
              >
                {/* SUBTLE BACKGROUND ORANGE GLOW */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-mustard/10 blur-[80px] group-hover:bg-mustard/20 transition-all duration-700" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-mustard to-[#8d6c4c] flex items-center justify-center text-black shadow-[0_10px_20px_rgba(166,124,82,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-mustard/30 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#A67C52]/20 border border-mustard/20 text-[10px] font-bold text-mustard uppercase tracking-widest mb-4">
                      {hub.status}
                    </span>
                    <h4 className="text-3xl font-serif text-white mb-2">{hub.city}</h4>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">{hub.region}</span>
                  </div>
                </div>
                
                <p className="text-white/60 font-light text-sm leading-relaxed mb-8 min-h-[60px]">
                  {hub.desc}
                </p>

                <div className="flex items-center gap-4 text-mustard group/btn cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-mustard/20 flex items-center justify-center group-hover/btn:bg-mustard group-hover/btn:text-black transition-all duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase border-b border-mustard/20 pb-1 group-hover/btn:border-mustard transition-all duration-300">{hub.address}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Direct Support Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="max-w-md">
              <h5 className="text-white text-xl font-serif mb-3">Priority Executive Line</h5>
              <p className="text-white/30 text-sm font-light">For sensitive board-level inquiries or emergency asset diagnostics.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="text-center md:text-right flex flex-col gap-2">
                <span className="text-[10px] text-mustard font-bold uppercase tracking-[0.2em] block">Direct Connect</span>
                <span className="text-white text-lg font-light tracking-wider">+91 83181 95911</span>
                <span className="text-white text-lg font-light tracking-wider">+91 79808 29403</span>
              </div>
              <a 
                href="https://wa.me/918318195911"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-full border border-white/10 transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">WhatsApp Direct</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
