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
  Home, Store, Key, Monitor, Search, Handshake, Layout
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

  // Disable scroll when full-screen menu is open
  useEffect(() => {
    if (isLookingForOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLookingForOpen]);

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
    { name: "New Investor", icon: Handshake, href: "/investors" },
    { name: "Hotel Real Estate", icon: Home, href: "/services/hospitality-real-estate" },
    { name: "Check your Hotel Score", icon: TrendingUp, href: "https://skill-deploy-zt6s8l6jd1.vercel.app" },
  ];

  const lookingForSections = [
    {
      title: "Business & Partnerships",
      options: [
        { name: "Brand collaboration", icon: <Users2 className="w-4 h-4" />, href: "/services/brand-partnership-solutions" },
        { name: "Branding and Promotion", icon: <Megaphone className="w-4 h-4" />, href: "/services/sales-marketing" },
        { name: "Talent and Staffing", icon: <UserPlus2 className="w-4 h-4" />, href: "/services/human-resource-talent-development" },
        { name: "Revenue growth and profit", icon: <TrendingUp className="w-4 h-4" />, href: "/services/property-development-consulting" },
        { name: "Interior Decor", icon: <Paintbrush className="w-4 h-4" />, href: "/services/interior-decor" },
      ]
    },
    {
      title: "Management & Design",
      options: [
        { name: "Hotel operations", icon: <Hotel className="w-4 h-4" />, href: "/services/hotel-operations-management" },
        { name: "AI Guest Management Platform", icon: <Cpu className="w-4 h-4" />, href: "/mango" },
        { name: "Web / App / AI / Tech Support", icon: <Cpu className="w-4 h-4" />, href: "/services/it-solutions" },
        { name: "Construction and Renovation", icon: <Building className="w-4 h-4" />, href: "/services/construction-renovation" },
        { name: "Hotel Architecture", icon: <Layout className="w-4 h-4" />, href: "/services/hotel-architecture" },
      ]
    },
    {
      title: "Real Estate & Investment",
      options: [
        { name: "Hospitality Acquisitions", icon: <Key className="w-4 h-4" />, href: "/services/hotels-resorts-buy-sell" },
        { name: "Commercial Portfolios", icon: <Store className="w-4 h-4" />, href: "/services/commercial-space-buy-sell-lease" },
        { name: "Residential Estates", icon: <Home className="w-4 h-4" />, href: "/services/residential-buy-sell" },
        { name: "Strategic Partnerships", icon: <Handshake className="w-4 h-4" />, href: "/services/partner-with-us" },
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
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 py-2 shadow-2xl" 
            : "bg-[#050505] py-3 md:py-4 border-b border-white/5"
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
            <button 
              onClick={() => setIsLookingForOpen(true)}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 hover:text-white transition-all duration-300 group/btn whitespace-nowrap"
            >
              <span>Looking For</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-500", isLookingForOpen && "rotate-180")} />
            </button>
          </div>

            <div className="hidden sm:flex items-center gap-4 relative">
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onMouseEnter={() => setIsBookingOpen(true)}
                  className={cn(
                    "relative rounded-full border-black bg-mustard text-black hover:bg-white hover:text-black hover:border-white backdrop-blur-2xl transition-all duration-500 px-6 py-4 flex items-center gap-3 border-[1.5px] shadow-xl shadow-mustard/20 whitespace-nowrap"
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
                      className="absolute right-0 top-full pt-6 w-72 z-50"
                    >
                      <div className="bg-white/95 backdrop-blur-3xl border border-black/5 shadow-[0_30px_100px_rgba(0,0,0,0.1)] p-2.5 overflow-hidden ring-1 ring-black/5 rounded-[1.5rem]">
                        {bookingOptions.map((option) => (
                          option.href ? (
                            <a
                              key={option.name}
                              href={option.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "w-full text-left group flex items-center gap-3 px-4 py-3.5 transition-all duration-300 border-b border-black/5 last:border-none rounded-lg relative overflow-hidden group/item",
                                (option.name === "New Investor" || option.name === "Hotel Real Estate")
                                  ? "bg-mustard text-black border-2 border-black shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:bg-white" 
                                  : "hover:bg-black/5"
                              )}
                            >
                              <div className={cn(
                                "p-2.5 rounded-lg transition-all duration-500", 
                                (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "bg-black/10 text-black group-hover/item:bg-black/5" : "bg-black/5 text-mustard group-hover/item:bg-mustard group-hover/item:text-black"
                              )}>
                                <option.icon className="w-4 h-4" />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <span className={cn(
                                  "text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 whitespace-nowrap",
                                  (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-black group-hover/item:text-black" : "text-foreground"
                                )}>
                                  {option.name}
                                </span>
                              </div>
                              <ArrowRight className={cn(
                                "w-3 h-3 transition-all duration-300 ml-auto",
                                (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-black/60 opacity-100 translate-x-0 group-hover/item:translate-x-1" : "text-mustard opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                              )} />
                            </a>
                          ) : (
                            <button
                              key={option.name}
                              onClick={() => handleBookingClick(option.type!)}
                              className={cn(
                                "w-full text-left group flex items-center gap-3 px-4 py-3.5 transition-all duration-300 border-b border-black/5 last:border-none rounded-lg relative overflow-hidden group/item",
                                (option.name === "New Investor" || option.name === "Hotel Real Estate")
                                  ? "bg-mustard text-black border-2 border-black shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:bg-white" 
                                  : "hover:bg-black/5"
                              )}
                            >
                              <div className={cn(
                                "p-2.5 rounded-lg transition-all duration-500", 
                                (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "bg-black/10 text-black group-hover/item:bg-black/5" : "bg-black/5 text-mustard group-hover/item:bg-mustard group-hover/item:text-black"
                              )}>
                                <option.icon className="w-4 h-4" />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <span className={cn(
                                  "text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 whitespace-nowrap",
                                  (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-black group-hover/item:text-black" : "text-foreground"
                                )}>
                                  {option.name}
                                </span>
                              </div>
                              <ArrowRight className={cn(
                                "w-3 h-3 transition-all duration-300 ml-auto",
                                (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-black/60 opacity-100 translate-x-0 group-hover/item:translate-x-1" : "text-mustard opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                              )} />
                            </button>
                          )
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
                    option.href ? (
                      <a
                        key={option.name}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center gap-4 group w-full text-left p-2 rounded-xl transition-all",
                          (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "bg-mustard border border-mustard/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "bg-white/5"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className={cn("w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10", (option.name === "New Investor" || option.name === "Hotel Real Estate") && "bg-black/20 border-black/40")}>
                          <option.icon className={cn("w-4 h-4", (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-black" : "text-mustard")} />
                        </div>
                        <span className={cn(
                          "text-[10px] uppercase tracking-[0.2em] font-bold transition-colors",
                          (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-black" : "text-white/70"
                        )}>
                          {option.name}
                        </span>
                      </a>
                    ) : (
                      <button
                        key={option.name}
                        onClick={() => handleBookingClick(option.type!)}
                        className={cn(
                          "flex items-center gap-4 group w-full text-left p-2 rounded-xl transition-all",
                          (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "bg-mustard border border-mustard/50 shadow-[0_0_20px_rgba(186,137,61,0.3)]" : "bg-white/5"
                        )}
                      >
                        <div className={cn("w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10", (option.name === "New Investor" || option.name === "Hotel Real Estate") && "bg-white/20 border-red-400/40")}>
                          <option.icon className={cn("w-4 h-4", (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-white" : "text-mustard")} />
                        </div>
                        <span className={cn(
                          "text-[10px] uppercase tracking-[0.2em] font-bold transition-colors",
                          (option.name === "New Investor" || option.name === "Hotel Real Estate") ? "text-white" : "text-white/70"
                        )}>
                          {option.name}
                        </span>
                      </button>
                    )
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

      {/* FULL-SCREEN LOOKING FOR MENU */}
      <AnimatePresence>
        {isLookingForOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLookingForOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden bg-black border border-white/10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
              {/* Background Image with 70% Opacity */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/luxury_daylight_bg.png" 
                  alt="Luxury Daylight Background" 
                  fill 
                  className="object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
              </div>

              <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar p-8 md:p-20">
                <button 
                  onClick={() => setIsLookingForOpen(false)}
                  className="absolute top-6 right-6 md:top-10 md:right-10 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group z-50"
                >
                  <X className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                {lookingForSections.map((section, sectionIdx) => (
                  <motion.div 
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIdx * 0.1 }}
                    className="flex flex-col gap-8"
                  >
                    <h3 className="text-sm md:text-base uppercase tracking-[0.4em] font-serif font-black text-mustard border-b border-white/10 pb-4">
                      {section.title}
                    </h3>
                    <div className="flex flex-col gap-3">
                      {section.options.map((option, optionIdx) => (
                        <motion.div
                          key={option.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (sectionIdx * 0.1) + (optionIdx * 0.05) }}
                        >
                          <Link
                            href={option.href || "#"}
                            onClick={(e) => {
                              if (!option.href) {
                                e.preventDefault();
                                handleLookingForClick(option.name);
                              } else {
                                setIsLookingForOpen(false);
                              }
                            }}
                            className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-500 relative overflow-hidden"
                          >
                            <div className="p-3.5 rounded-xl bg-white/5 text-mustard group-hover:bg-mustard group-hover:text-black transition-all duration-500 shadow-lg">
                              {option.icon}
                            </div>
                            <span className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-black text-white group-hover:text-mustard transition-colors duration-500">
                              {option.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-mustard ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
