"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { 
  ChevronDown, Video, MapPin, Building, Menu, X, ArrowRight,
  Users2, Megaphone, UserPlus2, Cpu, TrendingUp, Hotel, LayoutDashboard, Paintbrush,
  Home, Store, Key, Monitor, Search, Handshake
} from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLookingForOpen, setIsLookingForOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("video");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

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
    { name: "mangoH", href: "/mango" },
  ];

  const bookingOptions = [
    { name: "Schedule a video call", icon: Video, type: "video" },
    { name: "Office visit", icon: Building, type: "office" },
    { name: "Site visit", icon: MapPin, type: "site" },
  ];

  const lookingForSections = [
    {
      title: "Business & Partnerships",
      options: [
        { name: "Brand collaboration", icon: <Users2 className="w-4 h-4" /> },
        { name: "Branding and Promotion", icon: <Megaphone className="w-4 h-4" /> },
        { name: "Talent and Staffing", icon: <UserPlus2 className="w-4 h-4" />, href: "/services/human-resource-talent-development" },
        { name: "Business development and growth", icon: <TrendingUp className="w-4 h-4" /> },
      ]
    },
    {
      title: "Management & Design",
      options: [
        { name: "Hotel operations", icon: <Hotel className="w-4 h-4" /> },
        { name: "AI Guest Management Platform", icon: <Cpu className="w-4 h-4" /> },
        { name: "Web / App / AI / Tech Support", icon: <Monitor className="w-4 h-4" /> },
        { name: "Interior", icon: <Paintbrush className="w-4 h-4" /> },
      ]
    },
    {
      title: "Real Estate & Investment",
      options: [
        { name: "Hotels & Resorts (Buy/Sell)", icon: <Key className="w-4 h-4" />, href: "/services/hotels-resorts-buy-sell" },
        { name: "Hotel Acquisition (Buy)", icon: <Search className="w-4 h-4" />, href: "/services/hotels-resorts-buy-sell" },
        { name: "Hotel Divestment (Sell)", icon: <Handshake className="w-4 h-4" />, href: "/services/hotels-resorts-buy-sell" },
        { name: "Commercial Space", icon: <Store className="w-4 h-4" /> },
        { name: "Residential Assets", icon: <Home className="w-4 h-4" /> },
        { name: "Architectural work", icon: <LayoutDashboard className="w-4 h-4" /> },
      ]
    }
  ];

  const handleBookingClick = (type: string) => {
    setSelectedType(type);
    setIsModalOpen(true);
    setIsBookingOpen(false);
    setIsLookingForOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLookingForClick = (option: string) => {
    if (option === "Hotels & Resorts (Buy/Sell)") {
      window.location.href = "/services/hotels-resorts-buy-sell";
      setIsLookingForOpen(false);
      return;
    }
    setSelectedType("video"); 
    setSelectedSubject(option);
    setIsModalOpen(true);
    setIsLookingForOpen(false);
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
                className={cn(
                  "relative py-2 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 flex items-center gap-2 group/nav",
                  link.name === "mangoH" 
                    ? "text-white px-8 py-3 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full shadow-[0_0_25px_rgba(234,179,8,0.15)] hover:shadow-[0_0_35px_rgba(234,179,8,0.25)] hover:scale-105 mx-2 overflow-hidden ring-1 ring-mustard/20" 
                    : "text-white/80 hover:text-white"
                )}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name === "mangoH" && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-mustard shadow-[0_0_10px_#EAB308] animate-pulse mr-1"
                  />
                )}
                <span className="relative z-10 transition-colors duration-500">{link.name}</span>
                
                {/* SHIMMER EFFECT FOR mangoh */}
                {link.name === "mangoH" && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[20deg]"
                    animate={{
                      x: ["-150%", "150%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {link.name !== "mangoH" && hoveredLink === link.name && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-mustard/0 via-mustard to-mustard/0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT: ACTION (INQUIRY & BOOKING) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              href="/contact" 
              className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Contact
            </Link>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsLookingForOpen(true)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 hover:text-white transition-all duration-300 group/btn whitespace-nowrap"
              >
                <span>Looking For</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-500", isLookingForOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isLookingForOpen && (
                  <motion.div
                    onMouseLeave={() => setIsLookingForOpen(false)}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute right-[-100px] md:right-0 top-full pt-6 w-[600px] md:w-[960px] z-50 px-4 md:px-0"
                  >
                    <div className="bg-black/95 backdrop-blur-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] p-8 md:p-12 overflow-hidden ring-1 ring-white/5 grid grid-cols-1 md:grid-cols-3 gap-10 rounded-[3rem]">
                      {lookingForSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-6">
                          <h3 className="text-[10px] uppercase tracking-[0.3em] font-serif font-bold text-mustard/80 mb-2 px-4 italic">
                            {section.title}
                          </h3>
                          <div className="flex flex-col gap-2">
                            {section.options.map((option) => (
                              option.href ? (
                                <Link
                                  key={option.name}
                                  href={option.href}
                                  onClick={() => setIsLookingForOpen(false)}
                                  className="w-full text-left group flex items-start gap-4 px-4 py-4 hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/10 rounded-[1.5rem] relative overflow-hidden group/item"
                                >
                                  <div className="p-3 rounded-xl bg-white/5 text-mustard group-hover/item:bg-mustard group-hover/item:text-black transition-all duration-500 shadow-lg shadow-black/20">
                                    {option.icon}
                                  </div>
                                  <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/90 group-hover/item:text-white transition-colors duration-500 leading-tight">
                                      {option.name}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-mustard opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 mt-0.5 flex-shrink-0" />
                                </Link>
                              ) : (
                                <button
                                  key={option.name}
                                  onClick={() => handleLookingForClick(option.name)}
                                  className="w-full text-left group flex items-start gap-4 px-4 py-4 hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/10 rounded-[1.5rem] relative overflow-hidden group/item"
                                >
                                  <div className="p-3 rounded-xl bg-white/5 text-mustard group-hover/item:bg-mustard group-hover/item:text-black transition-all duration-500 shadow-lg shadow-black/20">
                                    {option.icon}
                                  </div>
                                  <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/90 group-hover/item:text-white transition-colors duration-500 leading-tight">
                                      {option.name}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-mustard opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 mt-0.5 flex-shrink-0" />
                                </button>
                              )
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ACTION SUITE (BOOK APPOINTMENT) */}
            <div className="hidden sm:flex items-center gap-4 relative">
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onMouseEnter={() => setIsBookingOpen(true)}
                  className={cn(
                    "relative rounded-full border-mustard bg-mustard text-black hover:bg-white hover:text-black hover:border-white backdrop-blur-2xl transition-all duration-500 px-6 py-4 flex items-center gap-3 border-[1.5px] shadow-xl shadow-mustard/20 whitespace-nowrap"
                  )}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">Book Appointment</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-500", isBookingOpen && "rotate-180")} />
                </Button>

                <AnimatePresence>
                  {isBookingOpen && (
                    <motion.div
                      onMouseLeave={() => setIsBookingOpen(false)}
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute right-0 top-full pt-6 w-80 z-50"
                    >
                      <div className="bg-white/95 backdrop-blur-3xl border border-black/5 shadow-[0_30px_100px_rgba(0,0,0,0.1)] p-3 overflow-hidden ring-1 ring-black/5 rounded-[2rem]">
                        {bookingOptions.map((option) => (
                          <button
                            key={option.name}
                            onClick={() => handleBookingClick(option.type)}
                            className="w-full text-left group flex items-center gap-4 px-5 py-5 hover:bg-black/5 transition-all duration-300 border-b border-black/5 last:border-none rounded-xl relative overflow-hidden group/item"
                          >
                            <div className="p-3 rounded-xl bg-black/5 text-mustard group-hover/item:bg-mustard group-hover/item:text-black transition-all duration-500">
                              <option.icon className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground transition-colors duration-300 whitespace-nowrap">
                                {option.name}
                              </span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-mustard opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ml-auto" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
                <div className="flex flex-col gap-8">
                  {lookingForSections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-4">
                      <h4 className="text-[9px] uppercase tracking-[0.2em] font-serif font-bold text-mustard/60 italic">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.options.map((option) => (
                          option.href ? (
                            <Link
                              key={option.name}
                              href={option.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.1em] font-bold text-white/60 hover:text-white hover:border-mustard/30 hover:bg-mustard/5 transition-all text-center"
                            >
                              {option.name}
                            </Link>
                          ) : (
                            <button
                              key={option.name}
                              onClick={() => handleLookingForClick(option.name)}
                              className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.1em] font-bold text-white/60 hover:text-white hover:border-mustard/30 hover:bg-mustard/5 transition-all text-center"
                            >
                              {option.name}
                            </button>
                          )
                        ))}
                      </div>
                    </div>
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
        subject={selectedSubject}
      />
    </>
  );
};
