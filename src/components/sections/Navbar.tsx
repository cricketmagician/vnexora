"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronDown, Video, MapPin, Building, Menu, X, ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLookingForOpen, setIsLookingForOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("video");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "/about-us" },
    { name: "Our Hotels", href: "/our-hotels" },
    { name: "Services", href: "/services" },
    { name: "mangoH", href: "/stay-with-us" },
    { name: "Contact", href: "/contact" },
  ];

  const bookingOptions = [
    { name: "Schedule a video call", icon: Video, type: "video" },
    { name: "Office visit", icon: Building, type: "office" },
    { name: "Site visit", icon: MapPin, type: "site" },
  ];

  const lookingForOptions = [
    "Brand collaboration",
    "Branding and Promotion",
    "Talent and Staffing",
    "AI Guest Management Platform",
    "Business development and growth",
    "Hotel operations",
    "Architectural work",
    "Interior"
  ];

  const handleBookingClick = (type: string) => {
    setSelectedType(type);
    setIsModalOpen(true);
    setIsBookingOpen(false);
    setIsLookingForOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLookingForClick = (option: string) => {
    // For now, open the general booking modal
    setSelectedType("video"); 
    setIsModalOpen(true);
    setIsLookingForOpen(false);
    setMobileMenuOpen(false);
    // In a real scenario, we'd pass 'option' as the initial inquiry subject
  };

  return (
    <>
      <nav
        suppressHydrationWarning
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-16",
          isScrolled 
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 py-2 shadow-2xl" 
            : "bg-black/10 backdrop-blur-md py-3 md:py-4"
        )}
      >
        <div className="container mx-auto max-w-[1600px] flex items-center justify-between gap-8 h-12 md:h-16">
          {/* LEFT: IDENTITY */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative w-14 h-14 md:w-20 md:h-20 transition-all duration-700 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Vnexora"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* CENTER: NAVIGATION */}
          <div className="hidden lg:flex items-center justify-center gap-10 xl:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-2 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 flex items-center gap-2 group/nav",
                  link.name === "mangoH" 
                    ? "text-mustard px-6 py-3 bg-gradient-to-r from-mustard/15 via-mustard/5 to-mustard/15 border border-mustard/40 rounded-full shadow-[0_0_25px_rgba(234,179,8,0.2)] hover:shadow-[0_0_35px_rgba(234,179,8,0.3)] hover:scale-105 mx-2 overflow-hidden" 
                    : "text-white/80 hover:text-white"
                )}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* SIGNATURE PULSE INDICATOR */}
                {link.name === "mangoH" && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mustard opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mustard"></span>
                  </span>
                )}

                <span className="relative z-10">{link.name}</span>

                {/* SIGNATURE SHIMMER EFFECT */}
                {link.name === "mangoH" && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                  />
                )}

                {link.name !== "mangoH" && hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-mustard to-transparent"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT: ACTION (INQUIRY & BOOKING) */}
          <div className="hidden lg:flex items-center gap-6 relative">
            {/* LOOKING FOR DROPDOWN - TWO COLUMN LAYOUT */}
            <div 
              className="relative pr-6 border-r border-white/10 h-10 flex items-center"
              onMouseEnter={() => setIsLookingForOpen(true)}
              onMouseLeave={() => setIsLookingForOpen(false)}
            >
              <button 
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/70 hover:text-mustard flex items-center gap-2 transition-colors group/lf"
              >
                <span>Looking For</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isLookingForOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isLookingForOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full pt-4 w-[500px] md:w-[600px] z-50"
                  >
                    <div className="bg-white/95 backdrop-blur-3xl border border-black/10 shadow-2xl p-4 overflow-hidden ring-1 ring-mustard/20 grid grid-cols-2 gap-3">
                      {lookingForOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleLookingForClick(option)}
                          className="w-full text-left group flex items-center justify-between gap-4 px-6 py-5 hover:bg-mustard/10 transition-all duration-500 border border-black/5 hover:border-mustard/20 rounded-2xl bg-black/[0.03] backdrop-blur-sm relative overflow-hidden"
                        >
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/60 group-hover:text-black transition-colors relative z-10">
                            {option}
                          </span>
                          <ArrowRight className="w-4 h-4 text-mustard opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out relative z-10" />
                          
                          {/* HOVER GLOW EFFECT */}
                          <div className="absolute inset-0 bg-gradient-to-r from-mustard/0 via-mustard/5 to-mustard/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsBookingOpen(true)}
              onMouseLeave={() => setIsBookingOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-mustard/20 blur-md rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={cn(
                    "relative rounded-full border-mustard bg-mustard text-black hover:bg-white hover:text-black hover:border-white backdrop-blur-2xl transition-all duration-500 px-6 py-4 flex items-center gap-3 border-[1.5px] shadow-xl shadow-mustard/20",
                    isBookingOpen && "bg-white text-black border-white"
                  )}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Book Appointment</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isBookingOpen && "rotate-180")} />
                </Button>
              </motion.div>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {isBookingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full pt-4 w-72 z-50"
                  >
                    <div className="bg-black/95 backdrop-blur-3xl border border-white/10 shadow-2xl p-2 overflow-hidden ring-1 ring-mustard/20">
                      {bookingOptions.map((option) => (
                        <button
                          key={option.name}
                          onClick={() => handleBookingClick(option.type)}
                          className="w-full text-left group flex items-center gap-4 px-5 py-4 hover:bg-mustard/10 transition-all duration-300 border-b border-white/5 last:border-none"
                        >
                          <div className="p-2 rounded-none bg-white/5 group-hover:bg-mustard/20 transition-colors">
                            <option.icon className="w-4 h-4 text-mustard" />
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 group-hover:text-white transition-colors">
                            {option.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden fixed inset-x-0 bottom-0 top-[72px] bg-black/98 backdrop-blur-3xl z-[100] flex flex-col p-8 gap-10 border-t border-white/10 overflow-y-auto h-[calc(100vh-72px)]"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-2xl font-serif transition-all duration-300 border-b border-white/5 pb-2 flex items-center justify-between",
                      link.name === "mangoH" ? "text-mustard font-bold" : "text-white/90 hover:text-mustard"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    {link.name === "mangoH" && <div className="w-2 h-2 rounded-full bg-mustard shadow-[0_0_10px_rgba(234,179,8,0.5)]" />}
                  </Link>
                ))}
              </div>

               <div className="mt-8 border-t border-white/5 pt-8">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-mustard mb-6 opacity-60">Looking For</h3>
                <div className="flex flex-wrap gap-2">
                  {lookingForOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleLookingForClick(option)}
                      className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.1em] font-bold text-white/60 hover:text-white hover:border-mustard/30 hover:bg-mustard/5 transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-white/5 pt-8 mb-12">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-mustard mb-6 opacity-60">Bookings</h3>
                <div className="flex flex-col gap-4">
                  {bookingOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => handleBookingClick(option.type)}
                      className="flex items-center gap-4 group w-full text-left"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10">
                        <option.icon className="w-4 h-4 text-mustard" />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/70">
                        {option.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={selectedType} 
      />
    </>
  );
};
