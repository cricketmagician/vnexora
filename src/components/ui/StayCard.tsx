"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Wifi, Coffee, Wind, Waves } from "lucide-react";
import Image from "next/image";

interface StayCardProps {
  name: string;
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

export function StayCard({ name, location, type, price, rating, image, amenities, onBook }: StayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#A67C52]/50 transition-all duration-500 backdrop-blur-md flex flex-col md:flex-row h-auto md:h-[280px]"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-[320px] h-[240px] md:h-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10">
          {type}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-white/40">
              <MapPin className="w-3.5 h-3.5 text-[#A67C52]" />
              <span className="text-[10px] uppercase tracking-widest font-medium">{location}</span>
            </div>
            <div className="bg-[#A67C52]/10 text-[#A67C52] text-[10px] font-black px-2 py-1 rounded flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#A67C52]" />
              {rating.toFixed(1)}
            </div>
          </div>
          
          <h3 className="text-xl md:text-3xl font-serif text-white mb-4 leading-tight group-hover:text-[#A67C52] transition-colors">
            {name}
          </h3>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity];
              return Icon ? (
                <div key={amenity} className="flex items-center gap-1.5 text-white/30 text-xs">
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{amenity}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Starting from</span>
            <span className="text-2xl font-serif text-white">{price}</span>
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
