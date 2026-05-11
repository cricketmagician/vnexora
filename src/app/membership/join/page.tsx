"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Users, Handshake, ShieldCheck, Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const JoinUsPage = () => {
  const [activeTab, setActiveTab] = useState<"operators" | "suppliers" | "affiliates">("operators");

  const categoryData = {
    operators: {
      id: "operators",
      label: "Operators",
      icon: <Users className="w-5 h-5" />,
      description: "Small independent businesses to large multi-national sites, including pubs, restaurants, coffee shops, hotels, food to go, contract caterers, late night, indoor leisure, entertainment and more.",
      color: "bg-teal-500",
      accentText: "text-teal-400",
      heroImg: "/images/membership/operator.png",
      becomingHeadline: "Becoming an Operator member",
      becomingSubheadline: "restaurants", // Added based on image style
      becomingDesc: "As the lead trade body for operators in hospitality, our members form the most powerful and influential voice in the industry. By becoming a member, you'll join over 7,500 operators, suppliers and affiliates empowering an environment for hospitality to thrive.",
      benefitsHeadline: "Operator member benefits",
      benefits: [
        { num: "1", title: "Be part of the voice of the sector", desc: "By being a member of Vnexora, you ensure that your industry has one voice. We champion your needs under one collective voice." },
        { num: "2", title: "Influence policy and legislation", desc: "Our campaign agenda influences national and local policy and legislation, enabling you to shape your business operations." },
        { num: "3", title: "Receive updates on key developments", desc: "We make sure that you and your teams are kept informed of key industry developments and trends." },
        { num: "4", title: "Take advantage of our primary authority", desc: "All members benefit from our primary authority partnership to agree Assured Advice on key issues such as environmental health." },
        { num: "5", title: "Access exclusive discounts, support and services", desc: "Our exclusive offers from trusted supplier members ensure your membership works harder for you." },
        { num: "6", title: "Be part of our community", desc: "Our library allows members to access exclusive resources, actively participate and keep your details up to date." }
      ]
    },
    suppliers: {
      id: "suppliers",
      label: "Suppliers",
      icon: <Handshake className="w-5 h-5" />,
      description: "Businesses who provide support, products and professional services to help operators grow and thrive.",
      color: "bg-lime-500",
      accentText: "text-lime-400",
      heroImg: "/images/membership/supplier.png",
      becomingHeadline: "Becoming a Supplier member",
      becomingSubheadline: "innovators",
      becomingDesc: "Vnexora is the lead trade body for hospitality, representing every corner of the sector with a unified voice. By becoming a member, you'll lead on industry innovation, boost your brand awareness and have a direct influence on the future of hospitality.",
      benefitsHeadline: "Supplier member benefits",
      benefits: [
        { num: "1", title: "Be part of the voice of the sector", desc: "Be part of the body that represents your sector in which you operate. Vnexora is the trusted industry body." },
        { num: "2", title: "Gain insights and intelligence", desc: "Stay informed of developments and lead decision making with knowledge and insight, helping shape the improvement of the industry." },
        { num: "3", title: "Brand Exposure", desc: "Increase your visibility within the hospitality operator community through our exclusive platforms." },
        { num: "4", title: "Networking Excellence", desc: "Connect with key decision makers from major hospitality brands and independent operators." },
        { num: "5", title: "Strategic Partnerships", desc: "Develop long-term relationships with operators looking for reliable and innovative solutions." },
        { num: "6", title: "Industry Intelligence", desc: "Access regular reports and briefings on the state of the hospitality market." }
      ]
    },
    affiliates: {
      id: "affiliates",
      label: "Affiliates",
      icon: <ShieldCheck className="w-5 h-5" />,
      description: "Specialist industry associations, educational institutions and any other industry group supporting our sector.",
      color: "bg-pink-500",
      accentText: "text-pink-400",
      heroImg: "/images/membership/staff.png",
      becomingHeadline: "Becoming an Affiliate member",
      becomingSubheadline: "educators",
      becomingDesc: "As the lead trade body for operators in hospitality, our members form the most powerful and influential voice in the industry. By becoming a member, you'll join over 7,500 operators, suppliers and affiliates empowering an environment for hospitality to thrive.",
      benefitsHeadline: "Affiliate member benefits",
      benefits: [
        { num: "1", title: "Member directory", desc: "Connect with over 7,500 members with exclusive access to our expanding member database." },
        { num: "2", title: "Influence industry policy", desc: "Raise awareness of your specialist sector by having your concerns heard at the highest level of Government." },
        { num: "3", title: "Sponsorship opportunities", desc: "Promote your services and access target markets with opportunities to sponsor Vnexora headline events." },
        { num: "4", title: "Exclusive member content", desc: "Get access to sector-specific resources, frequently updated guidance and Government-approved FAQs." },
        { num: "5", title: "Member-only events", desc: "Grow your network and promote your services to operators and suppliers at member-only networking events." },
        { num: "6", title: "Supplier discounts", desc: "Save money on products and services with exclusive discounts from Vnexora supplier members." }
      ]
    }
  };

  const activeCategory = categoryData[activeTab];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#CFA052]" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#CFA052]">Join Us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight"
          >
            Be part of hospitality's <br />
            <span className="text-[#CFA052]">leading trade body.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 font-light italic leading-relaxed max-w-2xl"
          >
            Join the only organisation speaking with one voice on behalf of hospitality, bringing together operators, suppliers and anyone affiliated with the sector.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="relative mb-32">
          <div className="flex flex-wrap gap-4 md:gap-8 bg-white/5 backdrop-blur-2xl p-2 rounded-full w-fit border border-white/10">
            {Object.values(categoryData).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={cn(
                  "px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3",
                  activeTab === cat.id 
                    ? `${cat.color} text-black shadow-xl` 
                    : "text-white/40 hover:text-white"
                )}
              >
                <span>{cat.label}</span>
                {activeTab === cat.id && <ChevronRight className="w-3 h-3" />}
              </button>
            ))}
          </div>

          {/* Tab Content (Top Info) */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 text-left"
              >
                <div className="flex items-center justify-start gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-black", activeCategory.color)}>
                    {activeCategory.icon}
                  </div>
                  <h2 className="text-3xl font-serif italic">{activeCategory.label}</h2>
                </div>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  <span className={cn("font-bold", activeCategory.accentText)}>
                    {activeCategory.label}:
                  </span> {activeCategory.description}
                </p>
                <div className="flex flex-wrap gap-6 pt-4 justify-start">
                   <button className={cn("px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-4 text-black", activeCategory.color)}>
                      Join Us Now
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CFA052]/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-3xl flex items-center justify-center border border-white/20">
                  <activeCategory.icon.type {...activeCategory.icon.props} className="w-10 h-10 text-[#CFA052]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#050505]/20" />
            </motion.div>
          </div>
        </div>

        {/* Dynamic Detail Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-details"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* 3. BECOMING A MEMBER SECTION */}
            <section className="relative min-h-[60vh] flex flex-col md:flex-row-reverse items-stretch bg-white overflow-hidden rounded-[4rem] my-32 shadow-2xl">
              {/* Right Content (Light) */}
              <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center bg-[#FAF9F6]">
                <div className="max-w-xl text-left">
                  <h2 className="text-4xl md:text-6xl font-serif italic mb-2 leading-tight text-[#050505]">
                    {activeCategory.becomingHeadline.split(" ")[0]} {activeCategory.becomingHeadline.split(" ")[1]} <br />
                    <span className="text-[#CFA052]">{activeCategory.becomingHeadline.split(" ").slice(2).join(" ")}</span>
                  </h2>
                  <h3 className={cn("text-3xl font-serif italic mb-8", activeCategory.accentText.replace("text-", "text- opacity-70 "))}>
                    {activeCategory.becomingSubheadline}
                  </h3>
                  <p className="text-xl text-[#050505]/60 font-light italic leading-relaxed mb-12">
                    {activeCategory.becomingDesc}
                  </p>
                </div>
              </div>

              {/* Left Image */}
              <div className="flex-1 relative min-h-[400px] md:min-h-0">
                <Image 
                  src={activeCategory.heroImg} 
                  alt={activeCategory.label} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#FAF9F6] via-transparent to-transparent hidden md:block" />
              </div>
            </section>

            {/* 4. BENEFITS GRID SECTION */}
            <section className="py-32 bg-[#FAF9F6] rounded-[4rem] mb-32 overflow-hidden shadow-2xl">
              <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                  <h2 className="text-4xl md:text-7xl font-serif italic mb-6 text-[#050505]">
                    {activeCategory.benefitsHeadline.split(" ")[0]} <span className="text-[#CFA052]">{activeCategory.benefitsHeadline.split(" ").slice(1).join(" ")}</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
                  {activeCategory.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-8"
                    >
                      <div className={cn("flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-black font-black text-xl shadow-lg", activeCategory.color)}>
                        {benefit.num}
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-serif italic mb-3 text-[#050505]">{benefit.title}</h3>
                        <p className="text-lg text-[#050505]/50 font-light leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default JoinUsPage;
