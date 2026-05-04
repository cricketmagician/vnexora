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
    <main className="min-h-screen bg-[#020617] text-white">
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/images/hero_hotels_v2.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#020617]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#A67C52] mb-6 block">
              Curated Collections
            </span>
            <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
              Extraordinary <span className="italic font-light text-[#A67C52]">Stays.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── SEARCH & FILTER BAR ── */}
      <div className="sticky top-[72px] z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6">
            {/* Top Search Tab */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 border-r border-white/10">
                <Search className="w-4 h-4 text-[#A67C52]" />
                <input type="text" placeholder="Location" className="bg-transparent text-[11px] uppercase tracking-widest font-bold text-white outline-none w-full placeholder:text-white/20" />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-2 border-r border-white/10">
                <Calendar className="w-4 h-4 text-[#A67C52]" />
                <input type="text" placeholder="Check In" className="bg-transparent text-[11px] uppercase tracking-widest font-bold text-white outline-none w-full placeholder:text-white/20" />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-2 border-r border-white/10">
                <Calendar className="w-4 h-4 text-[#A67C52]" />
                <input type="text" placeholder="Check Out" className="bg-transparent text-[11px] uppercase tracking-widest font-bold text-white outline-none w-full placeholder:text-white/20" />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-2">
                <UsersIcon className="w-4 h-4 text-[#A67C52]" />
                <input type="text" placeholder="Guests" className="bg-transparent text-[11px] uppercase tracking-widest font-bold text-white outline-none w-full placeholder:text-white/20" />
              </div>
              <button className="px-8 py-3 bg-[#A67C52] text-[#020617] text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white transition-all">
                Go
              </button>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Quick Search */}
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 w-full lg:w-auto">
                {(["All", "Hotel", "Homestay"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`flex-1 lg:flex-none px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${
                      filter === type
                        ? "bg-[#A67C52] text-[#020617]"
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {type}s
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-[#A67C52] text-[#020617]" : "text-white/40"}`}
                  >
                    <ListIcon size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("split")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "split" ? "bg-[#A67C52] text-[#020617]" : "text-white/40"}`}
                  >
                    <MapIcon size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-6 py-12">
        <div className={`flex flex-col lg:flex-row gap-8 transition-all duration-700 ${viewMode === "list" ? "justify-center" : ""}`}>
          
          {/* Property List */}
          <div className={`transition-all duration-700 ${viewMode === "list" ? "w-full max-w-6xl" : "w-full lg:w-2/3"}`}>
            <div className="grid grid-cols-1 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredStays.map((stay) => (
                  <motion.div
                    key={stay.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onMouseEnter={() => setActiveId(stay.id)}
                    className="cursor-pointer"
                  >
                    <StayCard
                      {...stay}
                      slug={stay.slug}
                      price={`${stay.price}/night`}
                      type={stay.type as "Hotel" | "Homestay"}
                      onBook={() => handleBook(stay.name)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Map */}
          {viewMode === "split" && (
            <div className="w-full lg:w-1/3 h-[400px] lg:h-[calc(100vh-250px)] sticky top-[220px] z-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-full w-full"
              >
                <PropertyMap properties={filteredStays} activeId={activeId} />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="site"
        subject={`Booking Request: ${selectedStay}`}
      />

      {/* ── FOOTER CTA ── */}
      <Section className="py-24 bg-[#020617] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Ready for your <br />
            <span className="italic text-[#A67C52] font-light">Next Chapter?</span>
          </h2>
          <button className="px-12 py-5 bg-[#A67C52] text-[#020617] text-[12px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all shadow-2xl">
            Book Appointment
          </button>
        </div>
      </Section>
    </main>
  );
}
