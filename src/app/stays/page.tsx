"use client";

import { Section } from "@/components/ui/Section";
import { StayCard } from "@/components/ui/StayCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useMemo, useEffect } from "react";
import { Search, Calendar, Users as UsersIcon, ChevronDown, ArrowRight, Map as MapIcon, List as ListIcon } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { allStays } from "@/data/stays";
import dynamic from "next/dynamic";

// Dynamically import Map to avoid SSR issues with Leaflet
const PropertyMap = dynamic(() => import("@/components/ui/PropertyMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 animate-pulse rounded-2xl flex items-center justify-center">
      <span className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold">Initializing Map...</span>
    </div>
  ),
});

export default function StaysPage() {
  const [filter, setFilter] = useState<"All" | "Hotel" | "Homestay">("All");
  const [viewMode, setViewMode] = useState<"list" | "split">("split");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStay, setSelectedStay] = useState<string | null>(null);

  const filteredStays = useMemo(() => 
    allStays.filter(stay => filter === "All" || stay.type === filter),
    [filter]
  );

  const handleBook = (name: string) => {
    setSelectedStay(name);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#020617]">

      {/* ── CINEMATIC PREMIUM HERO ── */}
      <section className="relative h-[85vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/images/stays/hero_premium.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#A67C52] mb-6">
              {["Weddings", "Corporate Events", "Parties", "Conferences", "Any Scale", "Fully Personalized"].map((item, index, arr) => (
                <span key={item} className="flex items-center gap-2">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                  >
                    {item}
                  </motion.span>
                  {index < arr.length - 1 && (
                    <motion.span 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 0.5 }} 
                      transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
                    >
                      |
                    </motion.span>
                  )}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-white drop-shadow-2xl">
              Where Every Occasion <br />
              <span className="italic font-light">Becomes an Experience.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light mb-4">
              From weddings and corporate events to private parties and global conferences — curated with precision, delivered with elegance.
            </p>
            <p className="text-white/60 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Whether it’s an intimate celebration or a large-scale gathering, we bring together the finest venues, stays, and end-to-end execution — ensuring every moment is seamless, elevated, and truly memorable.
            </p>
          </motion.div>
        </div>

        {/* ── FLOATING SEARCH BAR (Sleek Style) ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 translate-y-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white rounded-[2rem] md:rounded-full p-4 md:p-2 flex flex-col md:flex-row items-center gap-4 md:gap-0 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          >
            {/* Location */}
            <div className="flex-[1.5] flex flex-col px-4 md:px-6 py-2 relative w-full group cursor-pointer border-b md:border-b-0 border-black/5 pb-4 md:pb-2">
              <span className="text-sm font-bold text-black/80 mb-0.5">Location</span>
              <input type="text" placeholder="Where are you going?" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black/40" />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-black/10 shrink-0" />
            
            {/* Check In */}
            <div className="flex-1 flex flex-col px-4 md:px-6 py-2 w-full group cursor-pointer border-b md:border-b-0 border-black/5 pb-4 md:pb-2">
              <span className="text-sm font-bold text-black/80 mb-0.5">Check In</span>
              <input type="text" placeholder="Add dates" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
            </div>

            <div className="hidden md:block w-px h-8 bg-black/10 shrink-0" />

            {/* Check Out */}
            <div className="flex-1 flex flex-col px-4 md:px-6 py-2 w-full group cursor-pointer border-b md:border-b-0 border-black/5 pb-4 md:pb-2">
              <span className="text-sm font-bold text-black/80 mb-0.5">Check Out</span>
              <input type="text" placeholder="Add dates" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
            </div>

            <div className="hidden md:block w-px h-8 bg-black/10 shrink-0" />

            {/* Guests */}
            <div className="flex-1 flex flex-col px-4 md:px-6 py-2 w-full group cursor-pointer">
              <span className="text-sm font-bold text-black/80 mb-0.5">Guests</span>
              <input type="text" placeholder="Add guests" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
            </div>

            {/* Button */}
            <button className="w-full md:w-12 h-12 shrink-0 bg-[#A67C52] text-white rounded-xl md:rounded-full flex items-center justify-center hover:bg-[#8B6B48] transition-colors md:ml-2 shadow-lg shadow-[#A67C52]/30 mt-2 md:mt-0">
              <Search className="w-5 h-5 mr-2 md:mr-0" />
              <span className="md:hidden font-bold tracking-widest text-sm">SEARCH</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side Vertical Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-32 bg-white/40 backdrop-blur-xl border border-black/5 p-8 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-[1px] bg-[#A67C52]/40" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52]">Categories</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {(["All", "Hotel", "Homestay"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`group flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${
                        filter === type
                          ? "bg-[#0A0A0A] text-white shadow-2xl shadow-black/20"
                          : "bg-white/50 text-black/40 hover:text-[#0A0A0A] hover:bg-white hover:shadow-xl hover:shadow-black/5 border border-transparent hover:border-black/5"
                      }`}
                    >
                      {type}s
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${filter === type ? "bg-[#A67C52] scale-125" : "bg-black/10 group-hover:bg-[#A67C52]/40"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-[1px] bg-[#A67C52]/40" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52]">View Mode</h3>
                </div>
                <div className="bg-black/5 p-2 rounded-2xl border border-black/5 flex flex-col gap-2">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-500 ${
                      viewMode === "list" 
                        ? "bg-white text-[#0A0A0A] shadow-xl" 
                        : "text-black/40 hover:text-black/60"
                    }`}
                  >
                    <ListIcon size={16} className={viewMode === "list" ? "text-[#A67C52]" : "text-black/20"} />
                    <span className="text-[10px] font-black uppercase tracking-widest">List View</span>
                  </button>
                  <button
                    onClick={() => setViewMode("split")}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-500 ${
                      viewMode === "split" 
                        ? "bg-white text-[#0A0A0A] shadow-xl" 
                        : "text-black/40 hover:text-black/60"
                    }`}
                  >
                    <MapIcon size={16} className={viewMode === "split" ? "text-[#A67C52]" : "text-black/20"} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Map View</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Property Content Area */}
          <div className="flex-1 flex flex-col lg:flex-row gap-12">
            {/* Property List */}
            <div className={`transition-all duration-700 ${viewMode === "list" ? "w-full max-w-5xl mx-auto" : "w-full lg:w-2/3"}`}>
              <div className="grid grid-cols-1 gap-12">
                <AnimatePresence mode="popLayout">
                  {filteredStays.map((stay) => (
                    <motion.div
                      key={stay.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onMouseEnter={() => setActiveId(stay.id)}
                    >
                      <StayCard
                        {...stay}
                        price={`${stay.price}/night`}
                        onBook={() => handleBook(stay.name)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Interactive Map */}
            {viewMode === "split" && (
              <div className="w-full lg:w-1/3 h-[500px] lg:h-[calc(100vh-200px)] sticky top-32 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full w-full"
                >
                  <PropertyMap properties={filteredStays} activeId={activeId} />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="site"
        subject={`Booking Request: ${selectedStay}`}
      />

    </main>
  );
}
