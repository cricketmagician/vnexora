"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Star, 
  Crown, 
  Zap, 
  ChevronRight, 
  Check, 
  ArrowRight,
  Globe,
  Gem,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingModal } from "@/components/ui/BookingModal";

const MembershipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers = [
    {
      name: "Gold",
      tagline: "The Foundation of Luxury",
      icon: <Star className="w-6 h-6" />,
      price: "Enquire",
      features: [
        "Priority Booking Access",
        "10% Discount on Stays",
        "Welcome Amenities",
        "Late Checkout (Subject to availability)",
        "Members-only Newsletter"
      ],
      color: "from-amber-200 to-amber-500",
      accent: "#EAB308"
    },
    {
      name: "Platinum",
      tagline: "Elevated Experiences",
      icon: <Crown className="w-6 h-6" />,
      price: "Enquire",
      features: [
        "All Gold Privileges",
        "Room Upgrades upon Arrival",
        "20% Discount on Dining",
        "Dedicated Lifestyle Manager",
        "Exclusive Event Access",
        "Airport Transfers"
      ],
      color: "from-slate-300 to-slate-500",
      accent: "#94A3B8",
      popular: true
    },
    {
      name: "Black",
      tagline: "The Ultimate Distinction",
      icon: <Gem className="w-6 h-6" />,
      price: "Enquire",
      features: [
        "All Platinum Privileges",
        "Guaranteed Room Availability",
        "Private Jet Concierge",
        "Personalized Butler Service",
        "Invitations to Global Gala Events",
        "Complimentary Annual Stay"
      ],
      color: "from-neutral-700 to-neutral-900",
      accent: "#171717"
    }
  ];

  const handleEnquire = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with 100% Opacity */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/membership/hero.jpeg" 
            alt="Membership Hero" 
            fill 
            className="object-cover opacity-100"
            priority
          />
          {/* Subtle gradient to ensure text readability if needed, but keeping it minimal for 100% opacity feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#CFA052]" />
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#CFA052]">Elite Circle</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif italic mb-8 leading-[1.1] tracking-tight">
              The voice of <br />
              <span className="text-[#CFA052]">hospitality.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 font-light italic leading-relaxed max-w-xl mb-12">
              "We are the premier body for hospitality excellence. We champion the hospitality sector and provide expert advisory and guidance."
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/membership/join"
                className="px-10 py-5 bg-[#CFA052] text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 shadow-2xl shadow-[#CFA052]/20"
              >
                Become a Member
              </Link>
              <Link 
                href="#tiers"
                className="px-10 py-5 bg-transparent border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:border-[#CFA052] transition-all duration-500"
              >
                Explore Tiers
              </Link>
            </div>
          </motion.div>


        </div>
      </section>

      {/* 2. TEAM SECTION */}
      <section className="relative min-h-[60vh] flex flex-col md:flex-row items-stretch bg-[#050505] overflow-hidden">
        {/* Left Content (Dark) */}
        <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center bg-[#081820]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">
              Talk to <br />
              <span className="text-[#CFA052]">the team.</span>
            </h2>
            <p className="text-xl text-white/50 font-light italic leading-relaxed mb-12">
              If you would like to learn more information on how Vnexora can support your business, speak to a member of our team who will be happy to assist.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#CFA052] hover:text-white transition-all duration-500"
            >
              <span className="border-b-2 border-[#CFA052] pb-1 group-hover:border-white">Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-h-[400px] md:min-h-0">
          <Image 
            src="/images/membership/team.png" 
            alt="Vnexora Team" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081820] via-transparent to-transparent hidden md:block" />
        </div>
      </section>

      {/* 3. BECOMING A MEMBER SECTION */}
      <section className="relative min-h-[60vh] flex flex-col md:flex-row-reverse items-stretch bg-white overflow-hidden">
        {/* Right Content (Light) */}
        <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center bg-[#FAF9F6]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight text-[#050505]">
              Becoming a <br />
              <span className="text-[#CFA052]">Vnexora member.</span>
            </h2>
            <p className="text-xl text-[#050505]/60 font-light italic leading-relaxed mb-12">
              As the lead trade body for operators in hospitality, our members form the most powerful and influential voice in the industry. By becoming a member, you'll join over 7,500 operators, suppliers and affiliates empowering an environment for hospitality to thrive.
            </p>
          </motion.div>
        </div>

        {/* Left Image */}
        <div className="flex-1 relative min-h-[400px] md:min-h-0">
          <Image 
            src="/images/membership/staff.png" 
            alt="Hospitality Excellence" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FAF9F6] via-transparent to-transparent hidden md:block" />
        </div>
      </section>

      {/* 4. BENEFITS GRID SECTION */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-serif italic mb-6 text-[#050505]">Member <span className="text-[#CFA052]">benefits.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
            {[
              { 
                num: "1", 
                title: "Member directory", 
                desc: "Connect with over 7,500 members with exclusive access to our expanding member database." 
              },
              { 
                num: "2", 
                title: "Influence industry policy", 
                desc: "Raise awareness of your specialist sector by having your concerns heard at the highest level of Government." 
              },
              { 
                num: "3", 
                title: "Sponsorship opportunities", 
                desc: "Promote your services and access target markets with opportunities to sponsor Vnexora headline events." 
              },
              { 
                num: "4", 
                title: "Exclusive member content", 
                desc: "Get access to sector-specific resources, frequently updated guidance and Government-approved FAQs." 
              },
              { 
                num: "5", 
                title: "Member-only events", 
                desc: "Grow your network and promote your services to operators and suppliers at member-only networking events." 
              },
              { 
                num: "6", 
                title: "Supplier discounts", 
                desc: "Save money on products and services with exclusive discounts from Vnexora supplier members." 
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#CFA052] flex items-center justify-center text-black font-black text-xl shadow-lg shadow-[#CFA052]/20">
                  {benefit.num}
                </div>
                <div>
                  <h3 className="text-2xl font-serif italic mb-3 text-[#050505]">{benefit.title}</h3>
                  <p className="text-lg text-[#050505]/50 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="tiers" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Choose Your <span className="text-[#CFA052]">Legacy.</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto font-light">Select a membership tier that aligns with your lifestyle and aspirations. Each level offers a unique portal into the world of Vnexora.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className={cn(
                  "relative group bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 flex flex-col transition-all duration-700 hover:bg-white/10 hover:border-white/20",
                  tier.popular && "scale-105 border-[#CFA052]/30 shadow-[0_30px_100px_rgba(207,160,82,0.1)]"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#CFA052] text-black text-[9px] font-black uppercase tracking-[0.3em] rounded-full">
                    Most Coveted
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br", tier.color)}>
                    <div className="text-black">{tier.icon}</div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black tracking-widest text-white/30 uppercase">Inquiry Only</p>
                    <p className="text-xl font-serif italic text-[#CFA052]">{tier.price}</p>
                  </div>
                </div>

                <h3 className="text-3xl font-serif italic mb-2">{tier.name}</h3>
                <p className="text-sm text-white/40 mb-10">{tier.tagline}</p>

                <div className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#CFA052]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#CFA052]" />
                      </div>
                      <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleEnquire(tier.name)}
                  className={cn(
                    "w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500",
                    tier.popular 
                      ? "bg-[#CFA052] text-black hover:bg-white shadow-xl shadow-[#CFA052]/10" 
                      : "bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black"
                  )}
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRIVILEGES GRID */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Bespoke Travels", desc: "Curated itineraries across the globe.", icon: <Globe className="w-5 h-5" /> },
                { title: "Priority Stays", desc: "First access to our finest suites.", icon: <Star className="w-5 h-5" /> },
                { title: "Elite Concierge", desc: "24/7 personal lifestyle management.", icon: <Crown className="w-5 h-5" /> },
                { title: "Global Events", desc: "Invitations to the world's most exclusive galas.", icon: <Award className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#CFA052]/10 flex items-center justify-center mb-6 group-hover:bg-[#CFA052] transition-all duration-500">
                    <div className="text-[#CFA052] group-hover:text-black transition-colors">{item.icon}</div>
                  </div>
                  <h4 className="text-xl font-serif italic mb-3">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="w-14 h-1 px-1 bg-[#CFA052] mb-8" />
              <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
                A World of <br />
                <span className="text-[#CFA052]">Unrivaled Access.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed font-light italic">
                "Membership is more than a status; it is a gateway to experiences that remain beyond the reach of others. From private vineyard tours in Tuscany to penthouse soirées in Mumbai, your journey is redefined."
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "No Blackout Dates for Gold and Above",
                  "Complimentary High-Speed Connectivity",
                  "Elite Lounge Access in Major Hubs",
                  "Direct Line to Executive Leadership"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold tracking-widest text-white/70">
                    <Zap className="w-4 h-4 text-[#CFA052]" />
                    {item.toUpperCase()}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#CFA052]/5 blur-[150px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-serif italic mb-10">Your Journey <br /> <span className="text-[#CFA052]">Begins Here.</span></h2>
            <p className="text-xl text-white/40 font-light mb-16 italic">"Exclusivity is a choice. Make it today."</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-16 py-8 bg-[#CFA052] text-black text-[12px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all duration-700 shadow-2xl shadow-[#CFA052]/40"
            >
              Request Invitation
            </button>
          </motion.div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="video" 
        subject={selectedTier ? `Membership Inquiry: ${selectedTier}` : "Membership Inquiry"}
      />
    </main>
  );
};

export default MembershipPage;
