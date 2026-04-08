"use client";

import { Section } from "@/components/ui/Section";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Calendar, Users as UsersIcon, ChevronRight, ChevronDown, MapPin } from "lucide-react";
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
      
      {/* ── CINEMATIC HERO ── */}
      <section ref={heroRef} className="relative h-[88vh]">
        {/* Parallax BG */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.15] origin-top">
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0 bg-[url('/images/hero_hotels_v2.png')] bg-cover bg-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Animated gold top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute top-[110px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A67C52]/50 to-transparent z-20 origin-left"
        />

        {/* Content */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24 lg:px-32 pt-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#A67C52]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">Our Properties</span>
          </motion.div>

          <div className="flex flex-col gap-1 mb-10">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="text-[13px] md:text-[15px] font-light text-white/60 tracking-[0.3em] uppercase mb-2"
              >
                mangoH Your
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light text-white tracking-tight leading-none"
              >
                Dream
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
                className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic font-light text-[#A67C52] tracking-tight leading-none"
              >
                Vacation.
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-white/45 text-xs md:text-sm uppercase tracking-[0.4em] font-bold max-w-sm"
          >
            Managed Hotels · Elite Stays · Iconic Destinations
          </motion.p>
        </motion.div>

        {/* ── SEARCH WIDGET ── */}
        <div ref={searchWidgetRef} id="book-widget" className="absolute bottom-[-9%] left-1/2 -translate-x-1/2 w-[92%] md:w-[82%] max-w-5xl z-30">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0D0D0D]/95 backdrop-blur-2xl p-5 md:p-7 rounded-[2rem] border border-[#A67C52]/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8),0_0_0_1px_rgba(166,124,82,0.15),0_0_60px_rgba(166,124,82,0.12)] flex flex-col md:flex-row items-center gap-4 md:gap-0"
          >
            {/* Gold glow accent line at top */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#A67C52]/70 to-transparent rounded-full" />
            {/* ① Our Properties */}
            <div className="relative flex-1 px-0 md:px-6 border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 w-full">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#A67C52] mb-1.5">Our Properties</p>
              <button
                onClick={() => { setPropertyOpen(!propertyOpen); setGuestsOpen(false); }}
                className="flex items-center justify-between w-full text-left text-sm text-white/70 hover:text-white transition-colors"
              >
                <span className={selectedProperty === "All Properties" ? "text-white/40" : "text-white"}>{selectedProperty}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#A67C52] transition-transform ${propertyOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {propertyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-3 w-full md:w-72 bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
                  >
                    {propertyOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSelectedProperty(opt); setPropertyOpen(false); }}
                        className={`w-full text-left px-5 py-3.5 text-sm transition-colors hover:bg-white/5 ${selectedProperty === opt ? "text-[#A67C52]" : "text-white/60"}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ② Check In */}
            <div className="flex-1 px-0 md:px-6 border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 w-full">
              <DatePicker
                label="Check In"
                value={checkIn}
                onChange={setCheckIn}
                placeholder="Select date"
              />
            </div>

            {/* ③ Check Out */}
            <div className="flex-1 px-0 md:px-6 border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 w-full">
              <DatePicker
                label="Check Out"
                value={checkOut}
                onChange={setCheckOut}
                minDate={checkIn}
                placeholder="Select date"
              />
            </div>

            {/* ④ Guests */}
            <div className="relative flex-1 px-0 md:px-6 w-full">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#A67C52] mb-1.5">Guests</p>
              <button
                onClick={() => { setGuestsOpen(!guestsOpen); setPropertyOpen(false); }}
                className="flex items-center justify-between w-full text-left text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-3.5 h-3.5 text-white/30" />
                  <span className={guests === "Add guests" ? "text-white/40" : "text-white"}>{guests}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-[#A67C52] transition-transform ${guestsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {guestsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 mt-3 w-40 bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
                  >
                    {guestOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setGuests(opt); setGuestsOpen(false); }}
                        className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-white/5 ${guests === opt ? "text-[#A67C52]" : "text-white/60"}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search button */}
            <button
              onClick={handleSearch}
              className="w-14 h-14 rounded-full bg-[#A67C52] flex items-center justify-center hover:scale-110 hover:bg-[#8B6440] active:scale-95 transition-all shadow-xl group flex-shrink-0 ml-2"
            >
              <Search className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── FLOATING BOOK NOW BUTTON ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-6 bottom-8 z-[999]"
      >
        <button
          onClick={() => searchWidgetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
          className="relative group flex items-center gap-3 px-5 py-3.5 bg-[#A67C52] text-white rounded-full shadow-[0_8px_32px_rgba(166,124,82,0.5)] hover:shadow-[0_12px_40px_rgba(166,124,82,0.65)] hover:bg-[#8B6440] transition-all duration-300 active:scale-95"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#A67C52] animate-ping opacity-20" />
          <Search className="w-4 h-4 relative z-10 flex-shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase relative z-10 whitespace-nowrap">Book Now</span>
        </button>
      </motion.div>

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

    </main>
  );
}
