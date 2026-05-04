"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Wifi, Coffee, Wind, Waves } from "lucide-react";
import Link from "next/link";

interface StayCardProps {
  name: string;
  slug: string;
  location: string;
  type: "Hotel" | "Homestay";
  price: string;
  rating: number;
  image: string;
  amenities: string[];
  onBook?: () => void;
}

const amenityIcons: Record<string, any> = {
  Wifi: Wifi,
  Coffee: Coffee,
  AC: Wind,
  Pool: Waves,
};

export function StayCard({ name, slug, location, type, price, rating, image, amenities, onBook }: StayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-black/5 rounded-[2.5rem] overflow-hidden hover:border-[#A67C52]/50 transition-all duration-500 shadow-xl shadow-black/[0.02] flex flex-col md:flex-row h-auto md:h-[320px]"
    >
      {/* Image Section */}
      <Link href={`/stays/${slug}`} className="relative w-full md:w-[320px] h-[240px] md:h-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10">
          {type}
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-black/40">
              <MapPin className="w-3.5 h-3.5 text-[#A67C52]" />
              <span className="text-[10px] uppercase tracking-widest font-medium">{location}</span>
            </div>
            <div className="bg-[#A67C52]/10 text-[#A67C52] text-[10px] font-black px-2 py-1 rounded flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#A67C52]" />
              {rating.toFixed(1)}
            </div>
          </div>
          
          <Link href={`/stays/${slug}`}>
            <h3 className="text-xl md:text-3xl font-serif text-[#020617] mb-4 leading-tight group-hover:text-[#A67C52] transition-colors">
              {name}
            </h3>
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity];
              return Icon ? (
                <div key={amenity} className="flex items-center gap-1.5 text-black/30 text-xs">
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{amenity}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-black/5">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-black/40 block mb-1">Starting from</span>
            <span className="text-2xl font-serif text-[#020617]">{price}</span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onBook?.(); }}
            className="px-8 py-3 bg-transparent border border-[#A67C52] text-[#A67C52] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#A67C52] hover:text-[#020617] transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
