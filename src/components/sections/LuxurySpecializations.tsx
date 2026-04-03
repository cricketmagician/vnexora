"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const specialisms = [
  {
    id: "palaces",
    title: "Palace Hotels & Heritage Resorts",
    subtitle: "Staffing India\u2019s Royal Heritage",
    bannerImage: "/images/hr/palace_hotels_banner_luxurious_indian_heritage_resort_udaipur_style_at_dusk_with_warm_lighting_wide_shot_high_resolution_cinematic_photography_1775184031949.png",
    detailImage: "/images/hr/palace_hotels_detail_interior_royal_indian_dining_hall_grand_chandelier_white_marble_intricate_carvings_elite_hospitality_luxury_1775184064158.png",
    description1: "We specialize in sourcing elite staff for India\u2019s most iconic palace hotels and heritage properties. From Udaipur to Jaipur, we understand the unique requirements of managing properties where tradition meets world-class luxury.",
    description2: "Our recruitment focuses on professionals who can maintain the grandeur of these legendary establishments while delivering the impeccable, bespoke service that elite global travelers expect.",
    rolesList: [
      "Palace Managers & Estate Directors",
      "Royal Butlers & Heritage Curators",
      "Chief Concierges & Guest Relations",
      "VVIP Liaison Managers",
      "Executive Housekeepers",
      "Banqueting & Events Specialists",
    ]
  },
  {
    id: "finedining",
    title: "Fine Dining & Culinary Excellence",
    subtitle: "Crafting India\u2019s Culinary Future",
    bannerImage: "/images/hr/fine-dining-banner.png",
    detailImage: "/images/hr/fine-dining-detail.png",
    description1: "India\u2019s fine dining scene is evolving rapidly, blending global techniques with rich regional flavors. We recruit the culinary visionaries and service professionals who elevate restaurants from dining destinations to unforgettable experiences.",
    description2: "From award-winning chefs to masterful sommeliers and front-of-house leaders, we source talent that understands the art of hospitality at the highest gastronomic level.",
    rolesList: [
      "Executive Chefs & Head Chefs",
      "Sous Chefs & Pastry Specialists",
      "Restaurant General Managers",
      "Sommeliers & Beverage Directors",
      "Ma\u00eetre d\u2019H\u00f4tel & Front of House",
      "Food & Beverage Directors",
    ]
  },
  {
    id: "business",
    title: "Global Chains & Urban Business Hubs",
    subtitle: "Leadership for Commercial Excellence",
    bannerImage: "/images/hr/urban_business_hotel_banner_sleek_modern_mumbai_city_skyline_luxury_hotel_night_shot_cinematic_hospitality_1775184164744.png",
    detailImage: "/images/hr/urban_business_hotel_detail_luxury_executive_suite_mumbai_city_view_modern_interiors_elite_hospitality_1775184201607.png",
    description1: "In India\u2019s bustling commercial hubs, we manage strategic recruitment for legendary global hotel chains and premium business hotels expanding their footprint in Mumbai, Delhi, and beyond.",
    description2: "We source high-performance general managers, operational directors, and commercial heads who drive efficiency and excellence in fast-paced, high-stakes urban hospitality environments.",
    rolesList: [
      "General Managers & Hotel Managers",
      "Directors of Operations",
      "Commercial Directors & Financial Controllers",
      "Directors of Sales & Revenue Managers",
      "Food & Beverage Management",
      "Digital Marketing Heads",
    ]
  },
  {
    id: "privateclubs",
    title: "Private Members Clubs & Elite Bars",
    subtitle: "Discreet Excellence, Every Detail",
    bannerImage: "/images/hr/private-clubs-banner.png",
    detailImage: "/images/hr/private-clubs-detail.png",
    description1: "India\u2019s private members clubs and elite bars demand a rare combination of discretion, sophistication, and impeccable service. We recruit professionals who thrive in exclusive environments where every interaction must feel effortlessly personal.",
    description2: "From legacy clubs in Mumbai and Delhi to new-generation members-only lounges, we place talent that upholds the traditions of privacy while delivering modern luxury standards.",
    rolesList: [
      "Club General Managers",
      "Head Bartenders & Mixologists",
      "Membership & Guest Relations Directors",
      "Cigar Lounge & Wine Stewards",
      "Private Events Coordinators",
      "Security & Discretion Managers",
    ]
  },
  {
    id: "weddings",
    title: "Elite Wedding Banquets & Destinations",
    subtitle: "Scale Meets Personalized Luxury",
    bannerImage: "/images/hr/luxury_wedding_banquet_banner_grand_mandap_palace_lawn_royal_floral_decor_indian_wedding_elite_hospitality_night_shot_1775184233662.png",
    detailImage: "/images/hr/luxury_wedding_banquet_detail_fine_dining_table_setup_gold_cutlery_traditional_indian_floral_centerpiece_elite_hospitality_1775184262426.png",
    description1: "The luxury wedding market in India demands unparalleled scale and precision. We provide specialized recruitment for large-scale banquet operations and elite destination wedding venues.",
    description2: "From Goa beach resorts to royal banquet halls, we source the culinary and event service talent capable of executing flawlessly for thousands of guests simultaneously.",
    rolesList: [
      "Wedding Planners & Event Directors",
      "Executive Banquet Chefs",
      "Banquet & Logistics Managers",
      "Volume F&B Directors",
      "Event Service Leads",
      "Specialty Halwais & Pastry Chefs",
    ]
  },
  {
    id: "conferences",
    title: "Conference & Event Venues",
    subtitle: "Precision at Scale, Every Time",
    bannerImage: "/images/hr/conference-events-banner.png",
    detailImage: "/images/hr/conference-events-detail.png",
    description1: "India\u2019s booming MICE industry requires talent that can manage complex, high-profile corporate events with precision and grace. We recruit experienced professionals for the country\u2019s most prestigious conference centers and event venues.",
    description2: "From international summits at five-star properties to exclusive product launches and gala nights, we ensure every event is staffed with professionals who deliver flawless execution at every scale.",
    rolesList: [
      "Conference & Events Directors",
      "AV & Technical Production Managers",
      "Corporate Hospitality Managers",
      "Catering & Banquet Operations Leads",
      "VIP Protocol Officers",
      "Venue Operations Directors",
    ]
  }
];

export const LuxurySpecializations = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Section className="bg-forest py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Section with Leaf Accents */}
        <div className="flex flex-col items-center justify-center text-center mb-20 space-y-8">
           <div className="flex items-center gap-6 md:gap-12 animate-fade-in">
              <div className="w-12 h-12 md:w-20 md:h-20 opacity-20 transform -scale-x-100">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-mustard">
                  <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
                Our Luxury Hospitality Specialisms
              </h2>
              <div className="w-12 h-12 md:w-20 md:h-20 opacity-20">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-mustard">
                  <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
                </svg>
              </div>
           </div>
           <p className="text-mustard font-bold uppercase tracking-[0.6em] text-[10px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
             Strategic Specialist Recruitment for the Indian Market
           </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {specialisms.map((item, idx) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Accordion Banner — always visible */}
              <button 
                onClick={() => toggleAccordion(item.id)}
                className="relative w-full h-24 md:h-32 overflow-hidden group transition-all duration-700"
              >
                <img 
                  src={item.bannerImage} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${activeId === item.id ? 'bg-forest/80' : 'bg-black/50 group-hover:bg-black/40'}`} />
                
                <div className="absolute inset-0 px-8 md:px-16 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-mustard text-xs font-black uppercase tracking-[0.3em] hidden md:block">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl md:text-3xl font-serif text-white italic text-left">{item.title}</h3>
                  </div>
                  <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-white transition-all duration-500 ${activeId === item.id ? 'bg-mustard border-mustard rotate-0' : 'border-white/30 group-hover:bg-mustard group-hover:border-mustard'}`}>
                    {activeId === item.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                    )}
                  </div>
                </div>
              </button>

              {/* Accordion Detail (Open State) */}
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-cream">
                      <div className="grid lg:grid-cols-[1fr_1.5fr_1.1fr] min-h-[600px]">
                        {/* Column 1: Vertical Image with Botanical Leaf */}
                        <div className="relative overflow-hidden hidden lg:block">
                          <img 
                            src={item.detailImage} 
                            alt={item.title} 
                            className="absolute inset-0 w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/10" />
                          {/* Botanical Leaf Watermark */}
                          <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[180%] aspect-square opacity-[0.08] pointer-events-none">
                            <svg viewBox="0 0 100 100" fill="currentColor" className="text-forest">
                              <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
                            </svg>
                          </div>
                        </div>

                        {/* Column 2: Content & Expertise */}
                        <div className="p-10 md:p-16 flex flex-col justify-center space-y-10">
                          <div className="space-y-5">
                             <h4 className="text-3xl md:text-4xl font-serif text-forest italic leading-[1.15]">
                               {item.subtitle}
                             </h4>
                          </div>
                          
                          <div className="space-y-6">
                             <p className="text-base text-forest/80 leading-[1.8] font-light">
                               {item.description1}
                             </p>
                             <p className="text-sm text-forest/55 leading-[1.8] font-light">
                               {item.description2}
                             </p>
                          </div>

                          <button 
                            onClick={() => setActiveId(null)}
                            className="flex items-center gap-3 text-mustard hover:text-forest font-black uppercase tracking-[0.4em] text-[10px] transition-colors duration-300 group/back"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                            Minimize
                          </button>
                        </div>

                        {/* Column 3: Premium Roles Card */}
                        <div className="p-6 md:p-10 flex flex-col justify-center">
                          <div className="relative border border-forest/10 bg-gradient-to-b from-white via-cream to-cream/80 shadow-[0_20px_60px_rgba(10,34,31,0.08)] overflow-hidden">
                            {/* Gold corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-mustard/40" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-mustard/40" />
                            
                            <div className="p-8 md:p-10 space-y-6 relative z-10">
                              <div className="space-y-4">
                                <h5 className="text-xl font-serif text-forest italic">Roles we recruit include:</h5>
                                <div className="w-20 h-[2px] bg-gradient-to-r from-mustard via-mustard/60 to-transparent" />
                              </div>
                              
                              <div className="flex flex-col">
                                {item.rolesList.map((role, rIdx) => (
                                  <div 
                                    key={rIdx} 
                                    className="group/role py-4 border-b border-mustard/15 last:border-b-0 flex items-center gap-3 transition-all duration-300 hover:pl-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-mustard/50 group-hover/role:bg-mustard group-hover/role:shadow-[0_0_8px_rgba(202,160,85,0.5)] transition-all duration-300 shrink-0" />
                                    <span className="text-mustard font-serif italic text-[15px] group-hover/role:text-forest transition-colors duration-300 cursor-default">
                                      {role}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="pt-6">
                                <button className="w-full relative overflow-hidden border-2 border-forest text-forest hover:text-white px-8 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 group/btn">
                                  <span className="relative z-10">Submit Enquiry</span>
                                  <div className="absolute inset-0 bg-forest translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                                </button>
                              </div>
                            </div>

                            {/* Subtle botanical watermark in card */}
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.03] pointer-events-none">
                              <svg viewBox="0 0 100 100" fill="currentColor" className="text-forest">
                                <path d="M50 0 C70 30 100 50 100 100 L0 100 C0 50 30 30 50 0 Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
