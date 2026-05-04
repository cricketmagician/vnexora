"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  UsersIcon, 
  MapPin,
  Map as MapIcon,
  List as ListIcon,
  ChevronDown
} from "lucide-react";
import { WeddingCard } from "@/components/ui/WeddingCard";
import { allWeddings } from "@/data/weddings";
import { BookingModal } from "@/components/ui/BookingModal";
import { Section } from "@/components/ui/Section";

export default function WeddingsPage() {
  const [filter, setFilter] = useState<"All" | "Palace" | "Resort" | "Hotel" | "Garden">("All");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("");
  const filteredWeddings = allWeddings.filter(
    (venue) => filter === "All" || venue.type === filter
  );

  const handleBook = (name: string) => {
    setSelectedVenue(name);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#020617]">

      {/* ── CINEMATIC WEDDING HERO ── */}
      <section className="relative h-[85vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/images/weddings/hero.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-[12px] font-black uppercase tracking-[0.8em] text-white/80 mb-6 block">
              Luxury Venues
            </span>
            <h1 className="text-5xl md:text-9xl font-serif mb-8 leading-tight text-white drop-shadow-2xl">
              Your Perfect <br />
              <span className="italic font-light text-[#A67C52]">Venue.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light tracking-widest uppercase mb-12">
              India's Only Venue Booking Platform
            </p>
          </motion.div>
        </div>

        {/* ── FLOATING SEARCH BAR (BookWedGo Style) ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 translate-y-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white rounded-full p-2 flex flex-col md:flex-row items-center shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          >
            {/* Location */}
            <div className="flex-[1.5] flex flex-col px-6 py-2 relative w-full group cursor-pointer">
              <span className="text-[10px] font-bold text-black/80 mb-0.5">Location</span>
              <input type="text" placeholder="Where do you want to host?" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black/40" />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-black/10 shrink-0" />
            
            {/* Available From */}
            <div className="flex-1 flex flex-col px-6 py-2 w-full group cursor-pointer">
              <span className="text-[10px] font-bold text-black/80 mb-0.5">Available From</span>
              <input type="text" placeholder="Add dates" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
            </div>

            <div className="hidden md:block w-px h-8 bg-black/10 shrink-0" />

            {/* Available Till */}
            <div className="flex-1 flex flex-col px-6 py-2 w-full group cursor-pointer">
              <span className="text-[10px] font-bold text-black/80 mb-0.5">Available Till</span>
              <input type="text" placeholder="Add dates" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
            </div>

            <div className="hidden md:block w-px h-8 bg-black/10 shrink-0" />

            {/* Guests */}
            <div className="flex-1 flex flex-col px-6 py-2 w-full group cursor-pointer">
              <span className="text-[10px] font-bold text-black/80 mb-0.5">Guests</span>
              <input type="text" placeholder="Add guest count" className="bg-transparent text-sm text-black/60 outline-none w-full placeholder:text-black/40" />
            </div>

            {/* Button */}
            <button className="w-12 h-12 shrink-0 bg-[#e11d48] text-white rounded-full flex items-center justify-center hover:bg-[#be123c] transition-colors ml-2 shadow-lg shadow-[#e11d48]/30">
              <Search className="w-5 h-5" />
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
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52] mb-6">Venue Type</h3>
                <div className="flex flex-col gap-2">
                  {(["All", "Palace", "Resort", "Hotel", "Garden"] as const).map((type) => (
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

              <div className="bg-[#A67C52]/5 p-6 rounded-3xl border border-[#A67C52]/10">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#A67C52] mb-4">Expert Help</h4>
                <p className="text-xs text-black/60 leading-relaxed mb-6">
                  Confused about the venue? Let our experts help you plan your perfect day.
                </p>
                <button className="w-full py-4 bg-[#A67C52] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-[#020617] transition-all">
                  Talk to Expert
                </button>
              </div>
            </div>
          </aside>

          {/* Property Content Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-serif text-[#020617] mb-2">Top Venues by City</h2>
                <p className="text-sm text-black/40">Start your happily-ever-after in the most breath-taking venues.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <AnimatePresence mode="popLayout">
                {filteredWeddings.map((venue) => (
                  <motion.div
                    key={venue.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <WeddingCard
                      {...venue}
                      onBook={() => handleBook(venue.name)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="site"
        subject={`Wedding Venue Inquiry: ${selectedVenue}`}
      />

      {/* ── FOOTER CTA ── */}
      <Section className="py-32 bg-[#020617] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 leading-tight">
              Begin Your <br />
              <span className="italic text-[#A67C52] font-light text-6xl md:text-9xl">Happily Ever After.</span>
            </h2>
            <button className="px-16 py-6 bg-[#A67C52] text-white text-[12px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white hover:text-[#020617] transition-all shadow-2xl shadow-[#A67C52]/20">
              Plan Your Wedding
            </button>
         </div>
      </Section>
    </main>
  );
}
