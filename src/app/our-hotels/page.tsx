"use client";

import { Section } from "@/components/ui/Section";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Calendar, Users as UsersIcon, ChevronRight, ChevronDown, MapPin, ArrowRight, Smartphone, Cpu, Languages, Clock, ShieldCheck, Wifi, Waves, Coffee, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { DatePicker } from "@/components/ui/DatePicker";

const hotels = [
  { 
    id: 1,
    name: "Banaras Kila by Vnexora", 
    location: "Varanasi, India", 
    category: "Heritage",
    image: "/images/reception_hero.jpg",
    slug: "banaras-kila"
  },
  { 
    id: 2,
    name: "Heritage Kashinaama by Vnexora", 
    location: "Varanasi, India", 
    category: "Boutique",
    image: "/images/dark_room_hero.jpg",
    slug: "kashinaama"
  }
];

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"];

export default function HotelsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Search state
  const [selectedProperty, setSelectedProperty] = useState("All Properties");
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("Add guests");
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  
  // Expanded Institutional Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState("1 Adult");
  const [children, setChildren] = useState("0 Children");
  const [adultsOpen, setAdultsOpen] = useState(false);
  const [childrenOpen, setChildrenOpen] = useState(false);

  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [hasSearched, setHasSearched] = useState(false);
  const searchWidgetRef = useRef<HTMLDivElement>(null);

  const propertyOptions = ["All Properties", ...hotels.map(h => h.name)];

  const handleSearch = () => {
    let results = hotels;
    if (selectedProperty !== "All Properties") {
      results = hotels.filter(h => h.name === selectedProperty);
    }
    setFilteredHotels(results);
    setHasSearched(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white pb-20">
      
      {/* ── ICONIC CINEMATIC HERO ── */}
      <section ref={heroRef} className="relative h-[92vh] overflow-hidden bg-[#020617]">
        {/* Parallax BG with Cinematic Zoom */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: bgY }} 
            className="absolute inset-0 scale-[1.12] origin-center"
          >
            <motion.div
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[url('/images/iconic_hotel_vignette.png')] bg-cover bg-center"
            />
          </motion.div>
          
          {/* Layered Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-[#020617]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020617] to-transparent" />
          
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Main Hero Content — Focused Clinical Minimalism */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24 lg:px-40"
        >
          <div className="flex flex-col gap-0 mb-14 cursor-default md:-translate-y-10">
            <div className="relative">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "120%", opacity: 0, filter: "blur(10px)", letterSpacing: "0.1em" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", letterSpacing: "-0.05em" }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-6xl md:text-8xl lg:text-[8.5vw] font-serif font-medium text-white tracking-tighter leading-[0.85] drop-shadow-2xl"
                >
                  Dream
                </motion.h1>
              </div>
              
              <div className="overflow-hidden mt-2 md:mt-4">
                <motion.h1
                  initial={{ y: "120%", opacity: 0, filter: "blur(10px)", letterSpacing: "0.1em" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", letterSpacing: "-0.05em" }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="text-6xl md:text-8xl lg:text-[8.5vw] font-serif italic text-gold-gradient tracking-tighter leading-[0.85] drop-shadow-2xl"
                >
                  Vacation.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-sm md:text-lg font-light text-white leading-relaxed max-w-2xl cursor-default"
              >
                Turning Every Stay into a Lasting Memory — Where Thoughtful Details, Genuine Care, and Seamless Experiences Come Together in Every Moment.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div ref={searchWidgetRef} id="book-widget" className="absolute bottom-0 left-0 w-full z-40">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-black/5 backdrop-blur-md py-12 px-8 md:px-24 lg:px-40 border-t border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-8 max-w-[1600px] mx-auto">
              
              {/* ── ROW 1 ── */}
              
              {/* ① NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Name</label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full h-12 px-5 rounded-md bg-white text-sm text-black placeholder:text-black/20 focus:outline-none transition-all shadow-sm"
                />
              </div>

              {/* ② EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Email</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full h-12 px-5 rounded-md bg-white text-sm text-black placeholder:text-black/20 focus:outline-none transition-all shadow-sm"
                />
              </div>

              {/* ③ PHONE */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Phone</label>
                <div className="relative flex items-center h-12 px-5 rounded-md bg-white shadow-sm focus-within:ring-2 ring-[#A67C52]/20 transition-all">
                  <span className="text-[10px] font-bold text-black/40 border-r border-black/5 pr-3 mr-3 flex items-center gap-1.5 grayscale">
                    🇮🇳 +91
                  </span>
                  <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Number"
                    className="w-full bg-transparent text-sm text-black placeholder:text-black/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* ④ HOTEL SELECTOR */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Choose the Hotel</label>
                <div className="relative">
                  <button
                    onClick={() => { setPropertyOpen(!propertyOpen); setAdultsOpen(false); setChildrenOpen(false); }}
                    className="flex items-center justify-between w-full h-12 px-5 rounded-md bg-white text-sm text-black shadow-sm transition-all hover:bg-white/95"
                  >
                    <span className={selectedProperty === "All Properties" ? "text-black/30" : "text-black"}>
                      {selectedProperty === "All Properties" ? "Select Hotel" : selectedProperty}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#A67C52]/50" />
                  </button>
                  <AnimatePresence>
                    {propertyOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-full left-0 mb-3 w-full bg-white border border-black/5 rounded-lg overflow-hidden z-[100] shadow-2xl"
                      >
                        {propertyOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setSelectedProperty(opt); setPropertyOpen(false); }}
                            className="w-full text-left px-5 py-3.5 text-sm hover:bg-[#FAF9F6] transition-colors text-black/60 hover:text-black"
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* ⑤ ADULTS */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Adults</label>
                <div className="relative">
                  <button
                    onClick={() => { setAdultsOpen(!adultsOpen); setPropertyOpen(false); setChildrenOpen(false); }}
                    className="flex items-center justify-between w-full h-12 px-5 rounded-md bg-white text-sm text-black shadow-sm transition-all hover:bg-white/95"
                  >
                    <span>{adults}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#A67C52]/50" />
                  </button>
                  <AnimatePresence>
                    {adultsOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-full left-0 mb-3 w-full bg-white border border-black/5 rounded-lg overflow-hidden z-[100] shadow-2xl"
                      >
                        {["1 Adult", "2 Adults", "3 Adults", "4 Adults", "5+ Adults"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setAdults(opt); setAdultsOpen(false); }}
                            className="w-full text-left px-5 py-3 text-sm hover:bg-[#FAF9F6] transition-colors text-black/40 hover:text-black"
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* ── ROW 2 ── */}

              {/* ⑥ CHILDREN */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Children</label>
                <div className="relative">
                  <button
                    onClick={() => { setChildrenOpen(!childrenOpen); setPropertyOpen(false); setAdultsOpen(false); }}
                    className="flex items-center justify-between w-full h-12 px-5 rounded-md bg-white text-sm text-black shadow-sm transition-all hover:bg-white/95"
                  >
                    <span>{children}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#A67C52]/50" />
                  </button>
                  <AnimatePresence>
                    {childrenOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-full left-0 mb-3 w-full bg-white border border-black/5 rounded-lg overflow-hidden z-[100] shadow-2xl"
                      >
                        {["0 Children", "1 Child", "2 Children", "3 Children", "4+ Children"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setChildren(opt); setChildrenOpen(false); }}
                            className="w-full text-left px-5 py-3 text-sm hover:bg-[#FAF9F6] transition-colors text-black/40 hover:text-black"
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* ⑦ CHECK IN */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Check In</label>
                <input 
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full h-12 px-5 rounded-md bg-white text-sm text-black shadow-sm focus:outline-none cursor-pointer"
                />
              </div>

              {/* ⑧ CHECK OUT */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1">Check Out</label>
                <input 
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full h-12 px-5 rounded-md bg-white text-sm text-black shadow-sm focus:outline-none cursor-pointer"
                />
              </div>

              {/* ⑨ PROMO CODE */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 px-1 whitespace-nowrap">Promo Code</label>
                <input 
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code"
                  className="w-full h-12 px-5 rounded-md bg-white text-sm text-black placeholder:text-black/10 focus:outline-none shadow-sm"
                />
              </div>

              {/* ⑩ BOOK NOW */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full h-12 rounded-md bg-[#A67C52] text-[#020617] text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#8B6440] hover:text-white transition-all shadow-[0_12px_40px_rgba(166,124,82,0.3)] flex items-center justify-center gap-3 group"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* ── PROPERTIES RESULTS ── */}
      <div ref={resultsRef}>
        <Section className="pt-44 md:pt-56">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#A67C52] font-bold mb-3">Portfolio</p>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-white">
                  {hasSearched && selectedProperty !== "All Properties"
                    ? selectedProperty
                    : "Our Properties"}
                </h2>
                {hasSearched && (
                  <p className="text-white/40 text-sm mt-2">
                    {filteredHotels.length} {filteredHotels.length === 1 ? "property" : "properties"} found
                    {checkIn && checkOut ? ` · ${checkIn} → ${checkOut}` : ""}
                    {guests !== "Add guests" ? ` · ${guests}` : ""}
                  </p>
                )}
              </motion.div>
              <Link href="/hotels" className="text-white/40 text-sm hover:text-white transition-colors flex items-center gap-2 font-medium">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={filteredHotels.map(h => h.id).join("-")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto"
              >
                {filteredHotels.map((hotel, index) => (
                  <motion.div
                    key={hotel.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden mb-6">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url('${hotel.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                      <div className="absolute top-5 right-5 bg-[#A67C52]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.3em] font-bold px-4 py-2 rounded-full">
                        {hotel.category}
                      </div>
                    </div>
                    
                    <div className="bg-white/[0.04] p-7 rounded-[1.5rem] border border-white/8 group-hover:border-[#A67C52]/30 transition-all duration-500 backdrop-blur-sm">
                      <h3 className="text-lg md:text-xl font-serif font-light text-white leading-tight mb-3">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-white/40">
                        <MapPin className="w-3.5 h-3.5 text-[#A67C52]/60" />
                        <span className="text-xs font-medium tracking-wide">{hotel.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No results */}
            {hasSearched && filteredHotels.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-white/40"
              >
                <p className="text-lg font-serif font-light">No properties found</p>
                <button onClick={() => { setSelectedProperty("All Properties"); setFilteredHotels(hotels); }} className="text-[#A67C52] text-sm mt-3 hover:underline">
                  Show all properties
                </button>
              </motion.div>
            )}
          </div>
        </Section>
      </div>

      {/* ── VNEXORA STANDARD ── */}
      <Section className="bg-[#FAF9F6] py-24 md:py-32 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#A67C52]/40" />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#A67C52]">Our Commitment</span>
            <div className="w-8 h-[1px] bg-[#A67C52]/40" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-[#020617] mb-6 leading-tight"
          >
            The Vnexora <span className="italic text-[#A67C52]">Standard</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#020617]/55 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Every property is meticulously managed to deliver measurable returns for owners and unforgettable experiences for guests.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Bespoke Service", desc: "Tailored guest experiences that anticipate every need — from check-in to final farewell." },
              { title: "Full-Spectrum Portfolio", desc: "Luxury resorts, city hotels, heritage properties, serviced apartments — every category, one standard." },
              { title: "Owner-First Returns", desc: "Asset-focused management that converts operational excellence into measurable profit." },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                className="p-8 rounded-[1.5rem] bg-white shadow-lg shadow-black/[0.04] border border-[#A67C52]/10 hover:border-[#A67C52]/30 hover:-translate-y-1 transition-all duration-400 text-left"
              >
                <div className="w-1 h-8 bg-[#A67C52] rounded-full mb-6" />
                <h3 className="text-lg font-serif text-[#020617] mb-3">{feature.title}</h3>
                <p className="text-[#020617]/50 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PREMIUM INSTITUTIONAL ECOSYSTEM ── */}
      <Section className="py-24 md:py-44 bg-[#0A0A0A] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Cinematic Backdrop Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A67C52]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#A67C52]/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#A67C52]">The Vnexora Ecosystem</span>
              <div className="w-12 h-[1px] bg-[#A67C52]/30" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-tight"
            >
              Institutional <br />
              <span className="italic text-[#A67C52] font-light">Excellence</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/40 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              A high-precision framework designed to deliver seamless operations and elite guest experiences across every Vnexora property.
            </motion.p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {[
              { icon: Smartphone, title: "Digital Lifecycle", desc: "Proprietary Smart Check-In & Digital Concierge systems for zero-friction arrivals." },
              { icon: Cpu, title: "AI Orchestration", desc: "MangoH-powered predictive guest profiling for anticipatory service delivery." },
              { icon: Languages, title: "Global Horizon", desc: "Unified 120+ language localization support for a truly international clientele." },
              { icon: Clock, title: "24/7 Operations", desc: "Institutional-grade strategic room booking and yield management oversight." },
              { icon: Sparkles, title: "Elite Standard", desc: "Rigorous quality control frameworks ensuring hospitality excellence in every room." },
              { icon: ShieldCheck, title: "Hi-Class Security", desc: "Advanced monitoring and safety protocols protecting every guest and asset." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#A67C52]/40 transition-all duration-700 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A67C52] mb-8 group-hover:scale-110 group-hover:bg-[#A67C52] group-hover:text-black transition-all duration-700">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.3em] text-white mb-4 group-hover:text-[#A67C52] transition-colors">{item.title}</h3>
                  <p className="text-[12px] font-light text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67C52]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mt-32 text-center"
          >
             <Link href="/services" className="inline-flex items-center gap-6 group">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 group-hover:text-[#A67C52] transition-all">Explore Institutional Services</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#A67C52] group-hover:border-[#A67C52] transition-all duration-500">
                   <ArrowRight size={16} className="text-[#A67C52] group-hover:text-black transition-all group-hover:translate-x-1" />
                </div>
             </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── THE UNIFIED EXPERIENCE (NARRATIVE) ── */}
      <Section className="py-24 md:py-44 bg-[#020617] text-white relative overflow-hidden">
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="w-12 h-[1px] bg-[#A67C52]" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif font-light mb-12 leading-[1.1]"
            >
              Redefining the <br />
              <span className="italic text-[#A67C52]">Stay</span> Logic.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl font-light text-white/50 leading-relaxed mb-16 max-w-3xl mx-auto"
            >
              From the moment of intent to the memory of departure, our unified ecosystem ensures that institutional precision meets heartfelt hospitality in every corner of our portfolio.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/about-us" className="group inline-flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A67C52] group-hover:tracking-[0.6em] transition-all duration-700">Explore the Vision</span>
                <div className="w-10 h-10 rounded-full border border-[#A67C52]/30 flex items-center justify-center group-hover:bg-[#A67C52] transition-all duration-700">
                  <ChevronRight className="w-4 h-4 text-[#A67C52] group-hover:text-white transition-all transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── MANGOH POWERED FOOTER SECTION ── */}
      <Section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-black/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-[1px] bg-[#A67C52]/30 mb-12" />
            <h3 className="text-2xl md:text-4xl font-serif text-[#020617] mb-6 leading-tight">
              Where Comfort Meets Convenience — <span className="italic text-[#A67C52]">Powered by MangoH</span>
            </h3>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#020617]/40 font-bold mb-12">
              Delivered Through AI-Driven Guest Service
            </p>
            <div className="flex items-center gap-8 opacity-20 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
               <span className="text-2xl font-serif text-black tracking-tighter">Mango<span className="text-[#A67C52]">H</span></span>
            </div>
          </motion.div>
        </div>
      </Section>

    </main>
  );
}
