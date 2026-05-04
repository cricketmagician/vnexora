"use client";

import { Section } from "@/components/ui/Section";
import { StayCard } from "@/components/ui/StayCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useMemo } from "react";
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
      <section className="relative h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/images/stays/hero_premium.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF9F6]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-[12px] font-black uppercase tracking-[0.8em] text-white/80 mb-6 block">
              Curated Collections
            </span>
            <h1 className="text-5xl md:text-9xl font-serif mb-8 leading-tight text-white drop-shadow-2xl">
              Extraordinary <br />
              <span className="italic font-light text-[#A67C52]">Stays.</span>
            </h1>
          </motion.div>
        </div>

        {/* ── FLOATING SEARCH TAB ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 translate-y-1/2 z-30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white border border-black/5 rounded-[2.5rem] p-3 flex flex-col md:flex-row items-center gap-2 shadow-[0_30px_100px_rgba(0,0,0,0.12)]"
          >
            <div className="flex-1 flex items-center gap-4 px-6 py-4 border-r border-black/5">
              <Search className="w-5 h-5 text-[#A67C52]" />
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">Location</span>
                <input type="text" placeholder="Where to?" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/20" />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 px-6 py-4 border-r border-black/5">
              <Calendar className="w-5 h-5 text-[#A67C52]" />
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">Check In</span>
                <input type="text" placeholder="Add dates" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/20" />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 px-6 py-4 border-r border-black/5">
              <Calendar className="w-5 h-5 text-[#A67C52]" />
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">Check Out</span>
                <input type="text" placeholder="Add dates" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/20" />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 px-6 py-4">
              <UsersIcon className="w-5 h-5 text-[#A67C52]" />
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">Guests</span>
                <input type="text" placeholder="2 Guests" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/20" />
              </div>
            </div>
            <button className="px-10 py-5 bg-[#A67C52] text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-[1.8rem] hover:bg-[#020617] transition-all shadow-xl shadow-[#A67C52]/20">
              Go
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side Vertical Filters */}
          <aside className="w-full lg:w-48 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52] mb-6">Categories</h3>
                <div className="flex flex-col gap-2">
                  {(["All", "Hotel", "Homestay"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                        filter === type
                          ? "bg-white text-[#020617] shadow-xl shadow-black/5 border border-black/5"
                          : "text-black/40 hover:text-[#020617] hover:bg-black/[0.02]"
                      }`}
                    >
                      {type}s
                      {filter === type && <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52] mb-6">View Mode</h3>
                <div className="bg-black/5 p-1.5 rounded-2xl border border-black/5 flex flex-col gap-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${viewMode === "list" ? "bg-white text-[#020617] shadow-md" : "text-black/40"}`}
                  >
                    <ListIcon size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">List View</span>
                  </button>
                  <button
                    onClick={() => setViewMode("split")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${viewMode === "split" ? "bg-white text-[#020617] shadow-md" : "text-black/40"}`}
                  >
                    <MapIcon size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Map View</span>
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

      {/* ── FOOTER CTA ── */}
      <Section className="py-32 bg-[#020617] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 leading-tight">
              Ready to Experience <br />
              <span className="italic text-[#A67C52] font-light text-6xl md:text-9xl">Vnexora?</span>
            </h2>
            <button className="px-16 py-6 bg-[#A67C52] text-white text-[12px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white hover:text-[#020617] transition-all shadow-2xl shadow-[#A67C52]/20">
              Explore Our Portfolio
            </button>
         </div>
      </Section>
    </main>
  );
}
