"use client";
import { useState, use } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Star, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft,
  Share2,
  Heart,
  Music,
  Utensils,
  Camera,
  Car,
  Wifi
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { allWeddings } from "@/data/weddings";
import { BookingModal } from "@/components/ui/BookingModal";
import { Section } from "@/components/ui/Section";
import { notFound } from "next/navigation";

const amenityIcons: Record<string, any> = {
  "In-house DJ": Music,
  "Catering": Utensils,
  "Photography": Camera,
  "Valet Parking": Car,
  "WiFi": Wifi,
  "Decoration": CheckCircle2,
  "Luxury Suites": CheckCircle2,
  "AC Ballroom": CheckCircle2,
  "Bridal Room": CheckCircle2,
  "Guest Parking": Car,
  "Security": CheckCircle2,
  "Thematic Decor": CheckCircle2,
  "Buffet Service": Utensils
};

export default function WeddingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const venue = allWeddings.find((v) => v.slug === slug);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!venue) notFound();

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#020617]">
      {/* ── TOP NAV / ACTIONS ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/weddings" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-[#A67C52] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Venues
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors"><Share2 className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors"><Heart className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* ── HERO GALLERY ── */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden">
            <div className="md:col-span-2 relative group overflow-hidden">
              <Image src={venue.images[0]} alt={venue.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-1 grid grid-rows-2 gap-4">
              <div className="relative group overflow-hidden">
                <Image src={venue.images[1] || venue.images[0]} alt={venue.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative group overflow-hidden">
                <Image src={venue.images[0]} alt={venue.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <div className="md:col-span-1 relative group overflow-hidden">
              <Image src={venue.images[1] || venue.images[0]} alt={venue.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white text-xs font-black uppercase tracking-widest">View All Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <section className="pb-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-12">
                <div className="flex items-center gap-2 text-[#A67C52] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-widest">{venue.location}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif mb-6">{venue.name}</h1>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 fill-[#A67C52] text-[#A67C52]" />
                    <span className="text-sm font-bold">{venue.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-[#A67C52]" />
                    <span className="text-sm font-bold">{venue.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-[#A67C52]" />
                    <span className="text-sm font-bold">{venue.type} Venue</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-16">
                <h3 className="text-xl font-serif mb-4 italic">About the Venue</h3>
                <p className="text-black/60 leading-relaxed text-lg font-light">
                  {venue.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {venue.features.map((feature) => (
                  <div key={feature} className="p-8 bg-white border border-black/5 rounded-[2rem] shadow-xl shadow-black/[0.02]">
                    <div className="w-12 h-12 rounded-full bg-[#A67C52]/10 flex items-center justify-center text-[#A67C52] mb-6">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">{feature}</h4>
                    <p className="text-xs text-black/40 leading-relaxed">Exclusively curated for your special day.</p>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-serif mb-8 italic">Venue Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {venue.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || CheckCircle2;
                    return (
                      <div key={amenity} className="flex items-center gap-4 p-4 bg-white border border-black/5 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-black/[0.03] flex items-center justify-center text-[#A67C52]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-black/60">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="w-full lg:w-[400px]">
              <div className="sticky top-32 bg-white border border-black/5 p-8 rounded-[3rem] shadow-2xl shadow-black/[0.05]">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-black/5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-1">Starting from</span>
                    <span className="text-3xl font-serif text-[#020617]">{venue.price}</span>
                  </div>
                  <div className="bg-[#A67C52]/10 text-[#A67C52] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Best Price
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-black/[0.02] border border-black/5 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">Check Availability</span>
                      <span className="text-xs font-bold text-[#020617]">Select Dates</span>
                    </div>
                    <Calendar className="w-4 h-4 text-[#A67C52]" />
                  </div>
                  <div className="p-4 bg-black/[0.02] border border-black/5 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-1">Guest Count</span>
                      <span className="text-xs font-bold text-[#020617]">Up to {venue.capacity.split('-')[1]}</span>
                    </div>
                    <Users className="w-4 h-4 text-[#A67C52]" />
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-6 bg-[#A67C52] text-white text-[12px] font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-[#020617] transition-all shadow-xl shadow-[#A67C52]/20 mb-4"
                >
                  Book Venue
                </button>
                <p className="text-[10px] text-center text-black/30 uppercase tracking-widest">No hidden charges • Direct Booking</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="site"
        subject={`Booking Request: ${venue.name}`}
      />
    </main>
  );
}
