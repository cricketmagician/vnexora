"use client";
import { motion } from "framer-motion";
import { MapPin, Star, Users, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WeddingCardProps {
  name: string;
  location: string;
  rating: number;
  price: string;
  capacity: string;
  type: string;
  images: string[];
  slug: string;
  onBook?: () => void;
}

export const WeddingCard = ({
  name,
  location,
  rating,
  price,
  capacity,
  type,
  images,
  slug,
  onBook
}: WeddingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-black/5 rounded-[2.5rem] overflow-hidden hover:border-[#A67C52]/50 transition-all duration-500 shadow-xl shadow-black/[0.02] flex flex-col md:flex-row h-auto md:h-[320px]"
    >
      {/* Image Section */}
      <Link href={`/weddings/${slug}`} className="relative w-full md:w-[320px] h-[240px] md:h-full overflow-hidden flex-shrink-0">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#020617] border border-black/5">
          {type}
        </div>
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4" />
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
          
          <Link href={`/weddings/${slug}`}>
            <h3 className="text-xl md:text-3xl font-serif text-[#020617] mb-4 leading-tight group-hover:text-[#A67C52] transition-colors">
              {name}
            </h3>
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-black/40">
              <Users className="w-4 h-4 text-[#A67C52]" />
              <span className="text-xs font-medium">{capacity}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-black/5">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-black/40 block mb-1">Starting from</span>
            <span className="text-2xl font-serif text-[#020617]">{price}</span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onBook?.(); }}
            className="px-8 py-4 bg-[#020617] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#A67C52] transition-all flex items-center gap-2 group/btn shadow-xl shadow-black/10"
          >
            Check Availability
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
