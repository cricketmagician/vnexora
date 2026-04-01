"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronDown, Video, MapPin, Building, Menu, X } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
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
    { name: "Experience", href: "/stay-with-us" },
    { name: "Contact", href: "/contact" },
  ];

  const bookingOptions = [
    { name: "Schedule a video call", icon: Video, type: "video" },
    { name: "Office visit", icon: Building, type: "office" },
    { name: "Site visit", icon: MapPin, type: "site" },
  ];

  const handleBookingClick = (type: string) => {
    setSelectedType(type);
    setIsModalOpen(true);
    setIsBookingOpen(false);
    setMobileMenuOpen(false);
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
                className="relative py-2 text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 hover:text-white transition-all duration-300"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
                {hoveredLink === link.name && (
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

          {/* RIGHT: ACTION (BOOKING DROPDOWN) */}
          <div className="hidden lg:flex items-center gap-6 relative">
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
                    "relative rounded-none border-mustard bg-mustard/10 text-mustard hover:bg-mustard hover:text-black transition-all duration-500 px-8 py-6 flex items-center gap-3 border-[1.5px] shadow-lg shadow-mustard/5",
                    isBookingOpen && "bg-mustard text-black"
                  )}
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Book Appointment</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isBookingOpen && "rotate-180")} />
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
                    className="text-2xl font-serif text-white/90 hover:text-mustard transition-colors border-b border-white/5 pb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8">
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
