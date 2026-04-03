"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Check,
  Smartphone,
  MessageSquare,
  TrendingUp,
  Bot,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Wifi
} from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    value: "12",
    unit: "min",
    label: "saved per reservation",
    description: "Eliminate manual check-in processes and paperwork entirely."
  },
  {
    value: "85",
    unit: "%",
    label: "online check-in rate",
    description: "Guests complete check-in before they even arrive at your property."
  },
  {
    value: "$220",
    unit: "",
    label: "avg. revenue uplift",
    description: "Per room, per month through intelligent upselling and personalization."
  }
];

const features = [
  {
    tag: "Check-in",
    title: "Online Check-in",
    headline: "No more queues. No more paperwork.",
    description: "Guests check in digitally before arrival — uploading IDs, signing agreements, and selecting preferences. Your front desk is free to focus on hospitality, not administration.",
    bullets: ["Digital ID verification", "Custom pre-arrival forms", "Automated room assignment"],
    icon: <Smartphone className="w-6 h-6" />,
    imagePosition: "right" as const
  },
  {
    tag: "Communication",
    title: "Guest Communication Hub",
    headline: "Every message. One unified inbox.",
    description: "Consolidate WhatsApp, SMS, email, and in-app messages into a single dashboard. Respond faster, automate routine queries, and never miss a guest request.",
    bullets: ["Omni-channel messaging", "Automated responses", "Internal task routing"],
    icon: <MessageSquare className="w-6 h-6" />,
    imagePosition: "left" as const
  },
  {
    tag: "Revenue",
    title: "Smart Upselling",
    headline: "The right offer. The right moment.",
    description: "mangoH learns guest preferences from booking data and behavior to surface relevant upgrades, spa packages, dining experiences, and late check-outs — driving ancillary revenue without being intrusive.",
    bullets: ["AI-driven recommendations", "Dynamic pricing", "Conversion analytics"],
    icon: <TrendingUp className="w-6 h-6" />,
    imagePosition: "right" as const
  },
  {
    tag: "AI",
    title: "AI Concierge",
    headline: "24/7 intelligence. Zero wait time.",
    description: "Our generative AI agent handles guest inquiries around the clock — from restaurant recommendations to transport bookings — in 30+ languages, with the warmth of a human concierge.",
    bullets: ["Multi-language support", "Context-aware responses", "Seamless human handoff"],
    icon: <Bot className="w-6 h-6" />,
    imagePosition: "left" as const
  }
];

const integrations = [
  "Opera PMS", "Mews", "Cloudbeds", "RoomRaccoon", 
  "Guesty", "Hostaway", "apaleo", "Protel"
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function MangoHPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#0A1F1C] selection:bg-[#0A1F1C] selection:text-[#FAFAF8]">
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-[1300px]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Copy */}
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#0A1F1C] flex items-center justify-center">
                    <span className="text-[#FAFAF8] text-sm font-bold">m</span>
                  </div>
                  <span className="text-sm font-semibold tracking-wide">mangoH</span>
                </div>

                <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Transform How<br />
                  You Do<br />
                  <span className="italic font-normal">Hospitality.</span>
                </h1>

                <p className="text-[#0A1F1C]/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                  From digital check-in to tailored upsells, mangoH streamlines guest journeys, drives revenue, and enhances operational efficiency.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-[#0A1F1C] text-[#FAFAF8] text-sm font-semibold tracking-wide rounded-full hover:bg-[#0A1F1C]/90 transition-all duration-300 flex items-center gap-2">
                      Book a Demo
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <span className="text-[#0A1F1C]/40 text-sm">No commitment required</span>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-[#0A1F1C] border-2 border-[#FAFAF8] flex items-center justify-center">
                          <span className="text-[6px] text-[#FAFAF8]">★</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold">4.9/5</span>
                  </div>
                  <div className="w-px h-4 bg-[#0A1F1C]/10" />
                  <span className="text-xs text-[#0A1F1C]/50">Trusted by 200+ properties</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative mx-auto w-[280px] md:w-[320px]">
                {/* Phone Frame */}
                <div className="relative bg-white rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(10,31,28,0.1)] border border-[#0A1F1C]/5">
                  <div className="rounded-[2.4rem] overflow-hidden bg-[#f5f5f0] aspect-[9/19.5]">
                    {/* Phone Screen Content */}
                    <div className="p-6 pt-12 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#0A1F1C] mx-auto mb-3 flex items-center justify-center">
                          <span className="text-[#FAFAF8] text-lg font-bold">m</span>
                        </div>
                        <p className="text-xs text-[#0A1F1C]/40">Welcome back</p>
                        <p className="text-lg font-bold">Sarah Mitchell</p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                        <p className="text-[10px] text-[#0A1F1C]/40 uppercase tracking-wider mb-1">Your Stay</p>
                        <p className="text-sm font-semibold">The Grand Palazzo</p>
                        <p className="text-xs text-[#0A1F1C]/50">Suite 412 · Apr 3 – Apr 7</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <Smartphone className="w-4 h-4 mx-auto mb-1 text-[#0A1F1C]/60" />
                          <p className="text-[9px] font-semibold">Check-in</p>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <MessageSquare className="w-4 h-4 mx-auto mb-1 text-[#0A1F1C]/60" />
                          <p className="text-[9px] font-semibold">Messages</p>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <TrendingUp className="w-4 h-4 mx-auto mb-1 text-[#0A1F1C]/60" />
                          <p className="text-[9px] font-semibold">Upgrades</p>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <Bot className="w-4 h-4 mx-auto mb-1 text-[#0A1F1C]/60" />
                          <p className="text-[9px] font-semibold">Concierge</p>
                        </div>
                      </div>

                      <div className="bg-[#0A1F1C] rounded-2xl p-4 mt-auto">
                        <p className="text-[10px] text-[#FAFAF8]/50 uppercase tracking-wider mb-1">Recommended</p>
                        <p className="text-sm font-semibold text-[#FAFAF8]">Spa & Wellness Package</p>
                        <p className="text-xs text-[#FAFAF8]/50 mt-1">Starting at $89 · Book now</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div 
                  className="absolute -left-12 top-1/3 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#0A1F1C]/5"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-semibold whitespace-nowrap">Checked in</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -right-8 bottom-1/4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#0A1F1C]/5"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#0A1F1C]" />
                    <span className="text-xs font-semibold whitespace-nowrap">+$220/room</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0A1F1C]">
        <div className="container mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.15 }}
                className="text-center md:text-left"
              >
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#FAFAF8] tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-2xl text-[#FAFAF8]/60 font-light ml-1">{metric.unit}</span>
                </div>
                <p className="text-[#FAFAF8]/80 font-semibold text-lg mb-2">{metric.label}</p>
                <p className="text-[#FAFAF8]/40 text-sm leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Statement */}
      <section className="py-24 md:py-36 px-6 text-center">
        <div className="container mx-auto max-w-[800px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm font-semibold text-[#0A1F1C]/40 uppercase tracking-[0.3em] mb-6">The Platform</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
              A complete guest experience solution
            </h2>
            <p className="text-[#0A1F1C]/50 text-lg leading-relaxed">
              The only digital platform you will ever need to increase guest satisfaction, streamline operations, and maximize revenues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-[1300px]">
          <div className="space-y-32 md:space-y-44">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
              >
                {/* Text */}
                <div className="lg:w-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1F1C]/5 text-xs font-semibold uppercase tracking-wider mb-6">
                    {feature.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-semibold text-[#0A1F1C]/80 mb-4">
                    {feature.headline}
                  </p>
                  <p className="text-[#0A1F1C]/50 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0A1F1C] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#FAFAF8]" />
                        </div>
                        <span className="text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual - Phone Mockup */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-[260px] md:w-[300px]">
                    <div className="bg-white rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(10,31,28,0.08)] border border-[#0A1F1C]/5">
                      <div className="rounded-[2.4rem] overflow-hidden bg-[#f5f5f0] aspect-[9/19.5]">
                        <div className="p-6 pt-12 h-full flex flex-col">
                          {/* Feature-specific screen */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-[#0A1F1C]/10 flex items-center justify-center">
                              {feature.icon}
                            </div>
                            <div>
                              <p className="text-sm font-bold">{feature.title}</p>
                              <p className="text-[10px] text-[#0A1F1C]/40">mangoH</p>
                            </div>
                          </div>
                          
                          {i === 0 && (
                            /* Check-in Screen */
                            <div className="space-y-3 flex-1">
                              <div className="bg-white rounded-xl p-4 shadow-sm">
                                <p className="text-[10px] text-[#0A1F1C]/40 uppercase tracking-wider mb-2">Guest Details</p>
                                <div className="space-y-2">
                                  <div className="h-2 w-3/4 bg-[#0A1F1C]/10 rounded-full" />
                                  <div className="h-2 w-1/2 bg-[#0A1F1C]/10 rounded-full" />
                                </div>
                              </div>
                              <div className="bg-white rounded-xl p-4 shadow-sm">
                                <p className="text-[10px] text-[#0A1F1C]/40 uppercase tracking-wider mb-2">ID Verification</p>
                                <div className="flex items-center gap-2">
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-xs font-medium">Verified</span>
                                </div>
                              </div>
                              <div className="bg-[#0A1F1C] rounded-xl p-4 mt-auto">
                                <p className="text-xs font-semibold text-[#FAFAF8] text-center">Complete Check-in</p>
                              </div>
                            </div>
                          )}
                          {i === 1 && (
                            /* Messages Screen */
                            <div className="space-y-3 flex-1">
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="flex gap-2">
                                  <div className="w-6 h-6 rounded-full bg-[#0A1F1C]/10 flex-shrink-0" />
                                  <div>
                                    <p className="text-[10px] font-semibold">Front Desk</p>
                                    <p className="text-[9px] text-[#0A1F1C]/50 mt-0.5">Your room is ready! 🎉</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="flex gap-2">
                                  <div className="w-6 h-6 rounded-full bg-[#0A1F1C]/10 flex-shrink-0" />
                                  <div>
                                    <p className="text-[10px] font-semibold">Spa</p>
                                    <p className="text-[9px] text-[#0A1F1C]/50 mt-0.5">Booking confirmed for 3 PM</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="flex gap-2">
                                  <div className="w-6 h-6 rounded-full bg-[#0A1F1C]/10 flex-shrink-0" />
                                  <div>
                                    <p className="text-[10px] font-semibold">Restaurant</p>
                                    <p className="text-[9px] text-[#0A1F1C]/50 mt-0.5">Table reserved for 8 PM</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-auto flex gap-2">
                                <div className="flex-1 h-8 bg-white rounded-full border border-[#0A1F1C]/10 px-3 flex items-center">
                                  <span className="text-[9px] text-[#0A1F1C]/30">Type a message...</span>
                                </div>
                              </div>
                            </div>
                          )}
                          {i === 2 && (
                            /* Upsell Screen */
                            <div className="space-y-3 flex-1">
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="aspect-[16/9] bg-[#0A1F1C]/5 rounded-lg mb-2" />
                                <p className="text-xs font-semibold">Room Upgrade</p>
                                <p className="text-[9px] text-[#0A1F1C]/50">Ocean View Suite · +$120</p>
                              </div>
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="aspect-[16/9] bg-[#0A1F1C]/5 rounded-lg mb-2" />
                                <p className="text-xs font-semibold">Late Checkout</p>
                                <p className="text-[9px] text-[#0A1F1C]/50">Until 2 PM · $45</p>
                              </div>
                            </div>
                          )}
                          {i === 3 && (
                            /* AI Concierge Screen */
                            <div className="space-y-3 flex-1">
                              <div className="bg-[#0A1F1C]/5 rounded-xl p-3 self-start max-w-[80%]">
                                <p className="text-[9px]">What restaurants do you recommend nearby?</p>
                              </div>
                              <div className="bg-[#0A1F1C] rounded-xl p-3 self-end max-w-[85%] ml-auto">
                                <p className="text-[9px] text-[#FAFAF8]">I'd recommend La Terrazza — a 5-min walk, known for their seafood risotto. Shall I book a table? 🍽️</p>
                              </div>
                              <div className="bg-[#0A1F1C]/5 rounded-xl p-3 self-start max-w-[60%]">
                                <p className="text-[9px]">Yes, for 2 at 8pm</p>
                              </div>
                              <div className="bg-[#0A1F1C] rounded-xl p-3 self-end max-w-[80%] ml-auto">
                                <p className="text-[9px] text-[#FAFAF8]">Done! Reservation confirmed at La Terrazza, 8 PM for 2 guests. ✅</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why mangoH */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0A1F1C]/[0.03]">
        <div className="container mx-auto max-w-[1300px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why properties choose mangoH</h2>
            <p className="text-[#0A1F1C]/50 max-w-xl mx-auto">Built for modern hospitality — from boutique hotels to luxury resort chains.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-5 h-5" />, title: "Save Time", desc: "Automate repetitive tasks and free your team to focus on what matters — the guest." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Drive Revenue", desc: "Intelligent upselling generates significant ancillary income with zero extra effort." },
              { icon: <Shield className="w-5 h-5" />, title: "Data Security", desc: "Enterprise-grade encryption and GDPR compliance to protect guest data." },
              { icon: <Zap className="w-5 h-5" />, title: "Quick Setup", desc: "Go live in under 48 hours with guided onboarding and dedicated support." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics", desc: "Real-time dashboards showing check-in rates, revenue, and guest satisfaction." },
              { icon: <Globe className="w-5 h-5" />, title: "Multi-language", desc: "Serve international guests in 30+ languages — automatically translated." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#0A1F1C]/5 hover:border-[#0A1F1C]/15 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#0A1F1C]/5 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-[#0A1F1C]/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="container mx-auto max-w-[1000px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-12 h-12 rounded-full bg-[#0A1F1C]/5 flex items-center justify-center mx-auto mb-6">
              <Wifi className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Seamless Integrations
            </h2>
            <p className="text-[#0A1F1C]/50 max-w-xl mx-auto mb-16">
              mangoH connects with your existing property management systems and tech stack — no disruption to your workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((name, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-[#0A1F1C]/5 hover:border-[#0A1F1C]/15 transition-colors duration-300"
              >
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-[10px] text-[#0A1F1C]/30 mt-1">PMS Integration</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-[#0A1F1C]/30 mt-8">+ 150 more integrations available</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-36 px-6 bg-[#0A1F1C]">
        <div className="container mx-auto max-w-[800px] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#FAFAF8] tracking-tight mb-6 leading-tight">
              Ready to transform your<br />guest experience?
            </h2>
            <p className="text-[#FAFAF8]/50 text-lg mb-10 max-w-lg mx-auto">
              Join 200+ properties already using mangoH to delight guests and grow revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-4 bg-[#FAFAF8] text-[#0A1F1C] text-sm font-semibold tracking-wide rounded-full hover:bg-[#FAFAF8]/90 transition-all duration-300 flex items-center gap-2">
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-10 py-4 bg-transparent border border-[#FAFAF8]/20 text-[#FAFAF8] text-sm font-semibold tracking-wide rounded-full hover:border-[#FAFAF8]/40 transition-all duration-300">
                  View All Solutions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
