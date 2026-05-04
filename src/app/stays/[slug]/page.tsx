"use client";

import { allStays } from "@/data/stays";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Star, Wifi, Coffee, Wind, Waves, ArrowLeft, Calendar, Users as UsersIcon, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BookingModal } from "@/components/ui/BookingModal";
import { useState } from "react";

const amenityIcons: Record<string, any> = {
  Wifi: Wifi,
  Coffee: Coffee,
  AC: Wind,
  Pool: Waves,
};

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const property = allStays.find((p) => p.slug === slug);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!property) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#020617]">
      {/* ── HERO GALLERY ── */}
      <section className="relative h-[70vh] md:h-[85vh] bg-[#020617] overflow-hidden">
        <div className="flex h-full">
          <div className="w-full md:w-2/3 h-full relative border-r border-white/5">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:flex flex-col w-1/3 h-full">
            {property.images.slice(1, 3).map((img, i) => (
              <div key={i} className="flex-1 relative border-b border-white/5 last:border-b-0">
                <Image
                  src={img}
                  alt={`${property.name} ${i + 2}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* ── CONTENT SECTION ── */}
      <Section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Details */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-[#A67C52] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {property.category} {property.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#A67C52]">
                    <Star size={14} className="fill-[#A67C52]" />
                    <span className="text-sm font-bold">{property.rating}</span>
                    <span className="text-black/30 text-xs font-medium">(200+ Verified Reviews)</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif text-[#020617] mb-6 leading-tight">
                  {property.name}
                </h1>
                
                <div className="flex items-center gap-2 text-black/40 mb-12">
                  <MapPin className="text-[#A67C52]" size={18} />
                  <span className="text-lg font-light italic">{property.location}</span>
                </div>

                <div className="space-y-8 mb-16">
                  <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#A67C52]">The Experience</h2>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-black/70">
                    {property.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {property.features.map((feature, i) => (
                    <div key={i} className="p-8 bg-white border border-black/5 rounded-3xl shadow-sm">
                      <div className="w-10 h-[1px] bg-[#A67C52] mb-6" />
                      <h3 className="text-lg font-serif mb-3">{feature.title}</h3>
                      <p className="text-sm text-black/40 leading-relaxed font-light">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="space-y-8">
                  <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#A67C52]">Curated Amenities</h2>
                  <div className="flex flex-wrap gap-12">
                    {property.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity];
                      return (
                        <div key={amenity} className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-black/[0.02] border border-black/5 flex items-center justify-center text-[#A67C52]">
                            {Icon ? <Icon size={24} strokeWidth={1} /> : <CheckCircle2 size={24} strokeWidth={1} />}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Booking Card (Sticky) */}
            <div className="w-full lg:w-[400px]">
              <div className="sticky top-32 p-10 bg-[#020617] text-white rounded-[2.5rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Price per night</span>
                      <span className="text-4xl font-serif text-white">{property.price}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-[#A67C52] mb-1">
                        <Star size={12} className="fill-[#A67C52]" />
                        <span className="text-xs font-bold">{property.rating}</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest text-white/30">Verified Stay</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <Calendar size={16} className="text-[#A67C52]" />
                        <span className="text-xs uppercase font-bold tracking-widest text-white/60">Check-in</span>
                      </div>
                      <span className="text-xs font-bold text-[#A67C52]">Add Date</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <UsersIcon size={16} className="text-[#A67C52]" />
                        <span className="text-xs uppercase font-bold tracking-widest text-white/60">Guests</span>
                      </div>
                      <span className="text-xs font-bold text-[#A67C52]">2 Adults</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-5 bg-[#A67C52] text-[#020617] text-[12px] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-white transition-all shadow-xl shadow-[#A67C52]/10 mb-6"
                  >
                    Reserve Now
                  </button>

                  <p className="text-[9px] text-white/20 text-center uppercase tracking-widest font-light">
                    Confidential Reservation. No direct charge yet.
                  </p>

                  <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-6">
                     <div className="flex items-center gap-2 opacity-40">
                        <ShieldCheck size={14} className="text-[#A67C52]" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white">Vetted</span>
                     </div>
                     <div className="flex items-center gap-2 opacity-40">
                        <CheckCircle2 size={14} className="text-[#A67C52]" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white">Premium</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="site"
        subject={`Direct Booking: ${property.name}`}
      />
    </main>
  );
}
