"use client";

import { useState } from "react";
import { ChevronDown, Calendar, MapPin, Users, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const BookNowWidget = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-sm flex flex-col md:flex-row relative z-30 md:-mt-12 lg:-mt-16"
    >
      <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-zinc-100 p-2 md:p-0">
        
        {/* Hotel/Destination */}
        <div className="flex-1 p-4 md:px-8 md:py-6 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">Destination</p>
            <p className="text-sm font-sans text-black font-medium flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-zinc-400" />
              Select Hotel or City
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-zinc-400" />
        </div>

        {/* Dates */}
        <div className="flex-1 p-4 md:px-8 md:py-6 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">Check In - Out</p>
            <p className="text-sm font-sans text-black font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-zinc-400" />
              Add Dates
            </p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 p-4 md:px-8 md:py-6 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">Guests</p>
            <p className="text-sm font-sans text-black font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-zinc-400" />
              1 Adult, 0 Child
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-zinc-400" />
        </div>

        {/* Promo Code */}
        <div className="flex-1 p-4 md:px-8 md:py-6 flex items-center">
          <div className="w-full">
            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">Promo Code</p>
            <input 
              type="text" 
              placeholder="Enter Code" 
              className="w-full text-sm font-sans text-black font-medium outline-none placeholder:text-zinc-300 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-2 md:p-0 md:w-[220px]">
        <Link href="/book-now" className="w-full h-full min-h-[60px] md:min-h-full bg-[#262626] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors flex items-center justify-center rounded-sm md:rounded-l-none cursor-pointer border border-[#262626]">
          Find Rooms
        </Link>
      </div>
    </motion.div>
  );
};
