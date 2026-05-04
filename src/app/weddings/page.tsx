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

        {/* ── FLOATING SEARCH BAR (WEDDING STYLE) ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 translate-y-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white border border-black/10 rounded-[3rem] p-3 flex flex-col md:flex-row items-center gap-2 shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
          >
            <div className="flex-[1.5] flex items-center gap-5 px-8 py-4 border-r border-black/5 group cursor-pointer hover:bg-black/[0.02] rounded-[2rem] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#A67C52]/10 flex items-center justify-center text-[#A67C52]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A67C52] mb-1">Location</span>
                <input type="text" placeholder="Where do you want to host?" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/30" />
              </div>
            </div>
            
            <div className="flex-1 flex items-center gap-5 px-8 py-4 border-r border-black/5 group cursor-pointer hover:bg-black/[0.02] rounded-[2rem] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#A67C52]/10 flex items-center justify-center text-[#A67C52]">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A67C52] mb-1">Available From</span>
                <input type="text" placeholder="Add dates" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/30" />
              </div>
            </div>

            <div className="flex-1 flex items-center gap-5 px-8 py-4 border-r border-black/5 group cursor-pointer hover:bg-black/[0.02] rounded-[2rem] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#A67C52]/10 flex items-center justify-center text-[#A67C52]">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A67C52] mb-1">Available Till</span>
                <input type="text" placeholder="Add dates" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/30" />
              </div>
            </div>

            <div className="flex-1 flex items-center gap-5 px-8 py-4 group cursor-pointer hover:bg-black/[0.02] rounded-[2rem] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#A67C52]/10 flex items-center justify-center text-[#A67C52]">
                <UsersIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A67C52] mb-1">Guests</span>
                <input type="text" placeholder="Add guest count" className="bg-transparent text-sm font-bold text-[#020617] outline-none w-full placeholder:text-black/30" />
              </div>
            </div>

            <button className="px-12 py-6 bg-[#A67C52] text-white text-[12px] font-black uppercase tracking-[0.5em] rounded-[2.2rem] hover:bg-[#020617] transition-all shadow-xl shadow-[#A67C52]/30 active:scale-95">
              Search
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
