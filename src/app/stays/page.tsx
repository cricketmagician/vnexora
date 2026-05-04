"use client";

import { Section } from "@/components/ui/Section";
import { StayCard } from "@/components/ui/StayCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Search, Calendar, Users as UsersIcon, ChevronDown, ArrowRight, Filter } from "lucide-react";

const allStays = [
  {
    id: 1,
    name: "Banaras Kila by Vnexora",
    location: "Varanasi, India",
    type: "Hotel",
    category: "Heritage",
    price: "₹12,500/night",
    rating: 4.9,
    image: "/images/reception_hero.jpg",
    amenities: ["Wifi", "Pool", "Coffee", "AC"]
  },
  {
    id: 2,
    name: "Heritage Kashinaama",
    location: "Varanasi, India",
    type: "Hotel",
    category: "Boutique",
    price: "₹8,900/night",
    rating: 4.8,
    image: "/images/dark_room_hero.jpg",
    amenities: ["Wifi", "Coffee", "AC"]
  },
  {
    id: 3,
    name: "Ganga View Retreat",
    location: "Assi Ghat, Varanasi",
    type: "Homestay",
    category: "Bespoke",
    price: "₹5,400/night",
    rating: 4.7,
    image: "/images/stays/luxury_homestay_kashi.png",
    amenities: ["Wifi", "Coffee"]
  },
  {
    id: 4,
    name: "Kashi Serene Villa",
    location: "Ramnagar, Varanasi",
    type: "Homestay",
    category: "Premium",
    price: "₹7,200/night",
    rating: 4.9,
    image: "/images/luxury_bedroom_hero.jpg",
    amenities: ["Wifi", "AC", "Pool"]
  },
  {
    id: 5,
    name: "The Ghatside Manor",
    location: "Dashashwamedh, Varanasi",
    type: "Homestay",
    category: "Heritage",
    price: "₹6,800/night",
    rating: 4.6,
    image: "/images/bar_hero.jpg",
    amenities: ["Wifi", "Coffee", "AC"]
  }
];

export default function StaysPage() {
  const [filter, setFilter] = useState<"All" | "Hotel" | "Homestay">("All");
  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredStays = allStays.filter(stay => filter === "All" || stay.type === filter);

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/images/hero_hotels_v2.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020617]" />
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
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
              Extraordinary <br />
              <span className="italic font-light text-[#A67C52]">Stays.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Discover a handpicked selection of premium hotels and bespoke homestays, where institutional precision meets heartfelt hospitality.
            </p>
          </motion.div>
        </div>

        {/* ── FLOATING SEARCH WIDGET ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 translate-y-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl shadow-black/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#A67C52]">Location</label>
                <div className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="bg-transparent text-sm text-white focus:outline-none w-full placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#A67C52]">Check-in</label>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-white/30" />
                  <span className="text-sm text-white/50">Add dates</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#A67C52]">Guests</label>
                <div className="flex items-center gap-3">
                  <UsersIcon className="w-4 h-4 text-white/30" />
                  <span className="text-sm text-white/50">2 Adults, 1 Room</span>
                </div>
              </div>

              <div className="flex items-center">
                <button className="w-full h-14 bg-[#A67C52] text-[#020617] text-[10px] font-black uppercase tracking-[0.4em] rounded-xl hover:bg-[#8B6440] hover:text-white transition-all shadow-lg flex items-center justify-center gap-3 group">
                  Search
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS SECTION ── */}
      <Section className="pt-44 md:pt-64 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Portfolio</h2>
              <p className="text-white/40 text-sm font-light">Explore {filteredStays.length} premium properties curated for your next journey.</p>
            </div>

            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
              {(["All", "Hotel", "Homestay"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === type
                      ? "bg-[#A67C52] text-[#020617]"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {type}s
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredStays.map((stay) => (
                <StayCard
                  key={stay.id}
                  {...stay}
                  type={stay.type as "Hotel" | "Homestay"}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* ── BRAND PHILOSOPHY ── */}
      <Section className="bg-[#FAF9F6] py-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#A67C52] mb-8 block">
                The Vnexora Difference
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#020617] mb-8 leading-tight">
                Beyond Just a <span className="italic font-light text-[#A67C52]">Place to Sleep.</span>
              </h2>
              <p className="text-[#020617]/50 text-lg md:text-xl font-light mb-16 leading-relaxed">
                Whether it's the institutional excellence of our luxury hotels or the personal touch of our boutique homestays, every property is managed with the same rigorous standards of hospitality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { title: "Vetted Quality", desc: "Every property undergoes a 120-point quality check before entering our portfolio." },
                   { title: "Digital First", desc: "Smart check-ins and AI-powered guest services via our MangoH platform." },
                   { title: "Local Soul", desc: "Deeply rooted in local culture, providing authentic experiences in every destination." }
                 ].map((item, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white shadow-xl shadow-black/[0.03] border border-black/[0.05] text-left">
                      <div className="w-12 h-[1px] bg-[#A67C52] mb-6" />
                      <h3 className="text-lg font-serif text-[#020617] mb-3">{item.title}</h3>
                      <p className="text-[#020617]/40 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </motion.div>
         </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="py-24 bg-[#020617] relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Ready to Experience Vnexora?</h2>
            <button className="px-12 py-5 bg-[#A67C52] text-[#020617] text-[12px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all shadow-2xl">
              Explore All Properties
            </button>
         </div>
      </section>
    </main>
  );
}
