"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  UsersIcon, 
  MapPin,
  Map as MapIcon,
  List as ListIcon,
  ChevronDown,
  Sparkles,
  Utensils,
  Camera,
  Scissors
} from "lucide-react";
import { WeddingCard } from "@/components/ui/WeddingCard";
import { allWeddings } from "@/data/weddings";
import { BookingModal } from "@/components/ui/BookingModal";
import { Section } from "@/components/ui/Section";

export default function WeddingsPage() {
  const [filter, setFilter] = useState<"All" | "Palace" | "Resort" | "Hotel" | "Garden">("All");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [tillDate, setTillDate] = useState("");
  
  const words = ["Wedding", "Reception", "Sangeet", "Haldi", "Corporate", "Event"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const filteredWeddings = allWeddings.filter(
    (venue) => filter === "All" || venue.type === filter
  );

  const handleBook = (name: string) => {
    setSelectedVenue(name);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#020617]">

      {/* ── CINEMATIC WEDDING HERO ── */}
      <section className="relative h-[85vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
          <motion.video
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="/videos/iwm.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] font-sans tracking-tight">
              Your Perfect{" "}
              <span className="text-[#FBBF24] inline-flex min-w-[150px] md:min-w-[300px] justify-center drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              Venue,<br />
              Just a Click Away!
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              India’s Finest Platform for Venue Booking
            </p>
          </motion.div>
        </div>

        {/* ── FLOATING SEARCH BAR (BookWedGo Style) ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 translate-y-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white rounded-full p-2 flex flex-col md:flex-row items-center shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          >
            {/* Location */}
            <div className="flex-[1.5] flex flex-col px-6 py-2 relative w-full group cursor-pointer">
              <span className="text-sm font-bold text-black/80 mb-1">Location</span>
              <input type="text" placeholder="Where do you want to host?" className="bg-transparent text-base font-medium text-[#020617] outline-none w-full placeholder:text-black/40" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black/40" />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-black/10 shrink-0" />
            
            {/* Available From */}
            <div className="flex-1 flex flex-col px-6 py-2 w-full group cursor-pointer">
              <span className="text-sm font-bold text-black/80 mb-1">Available From</span>
              <div className="relative w-full">
                {!fromDate && (
                  <div className="absolute inset-0 pointer-events-none text-black/40 text-base font-medium flex items-center">
                    Add dates
                  </div>
                )}
                <input 
                  type="date" 
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className={`bg-transparent text-base font-medium outline-none w-full relative z-10 cursor-pointer ${!fromDate ? 'text-black/0 [&::-webkit-calendar-picker-indicator]:opacity-100' : 'text-[#020617]'}`} 
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-black/10 shrink-0" />

            {/* Available Till */}
            <div className="flex-1 flex flex-col px-6 py-2 w-full group cursor-pointer">
              <span className="text-sm font-bold text-black/80 mb-1">Available Till</span>
              <div className="relative w-full">
                {!tillDate && (
                  <div className="absolute inset-0 pointer-events-none text-black/40 text-base font-medium flex items-center">
                    Add dates
                  </div>
                )}
                <input 
                  type="date" 
                  value={tillDate}
                  onChange={(e) => setTillDate(e.target.value)}
                  className={`bg-transparent text-base font-medium outline-none w-full relative z-10 cursor-pointer ${!tillDate ? 'text-black/0 [&::-webkit-calendar-picker-indicator]:opacity-100' : 'text-[#020617]'}`} 
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-black/10 shrink-0" />

            {/* Guests */}
            <div className="flex-1 flex flex-col px-6 py-2 w-full group cursor-pointer">
              <span className="text-sm font-bold text-black/80 mb-1">Guests</span>
              <input type="text" placeholder="Add guest count" className="bg-transparent text-base font-medium text-[#020617] outline-none w-full placeholder:text-black/40" />
            </div>

            {/* Button */}
            <button className="w-14 h-14 shrink-0 bg-[#e11d48] text-white rounded-full flex items-center justify-center hover:bg-[#be123c] transition-colors ml-2 shadow-lg shadow-[#e11d48]/30">
              <Search className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 3 SIMPLE STEPS SECTION ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#020617] mb-16 tracking-tight">
            Book in 3 Simple Steps!!! <span className="text-[#e11d48]">Hassle Free</span>
          </h2>
          
          <div className="relative mb-16">
            {/* Dotted line background */}
            <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] border-t-[2px] border-dashed border-gray-300 z-0">
               <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#db2777]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f97316]" />
               <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#fb923c]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  id: "01",
                  title: "Block Your Venue",
                  desc: "Let our CRM-assisted experts guide you from shortlisting the perfect spot to securing your booking, all without the stress."
                },
                {
                  id: "02",
                  title: "Visit the Venue",
                  desc: "We'll set up your appointment and handle the arrangements so you can experience the space without the back-and-forth."
                },
                {
                  id: "03",
                  title: "Confirm & Celebrate",
                  desc: "Lock in your venue and unlock exclusive offers that make your big day even better."
                }
              ].map((step, index) => (
                <div key={step.id} className="relative group h-full">
                  <div className="bg-white rounded-2xl p-8 border-2 border-transparent relative transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/5 h-full flex flex-col"
                       style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #e11d48, #f59e0b) border-box' }}>
                    <div className="w-16 h-16 bg-[#e11d48] text-white rounded-[1rem] flex items-center justify-center text-xl font-black mx-auto mb-6 shadow-lg shadow-[#e11d48]/40">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-[#020617] mb-4">{step.title}</h3>
                    <p className="text-black/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="px-10 py-5 bg-[#e11d48] text-white text-sm md:text-base font-bold rounded-full shadow-[0_10px_30px_rgba(225,29,72,0.3)] hover:bg-[#be123c] hover:shadow-[0_15px_40px_rgba(225,29,72,0.4)] hover:-translate-y-1 transition-all">
            Start Now & Make Your Dream Venue Yours!
          </button>
        </div>
      </section>

      {/* ── OUR SERVICES SECTION ── */}
      <section className="py-24 bg-gradient-to-b from-[#e0f2fe]/40 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h4 className="text-[#f97316] text-[11px] font-black uppercase tracking-[0.3em] mb-4">We Do Everything</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-16 tracking-tight">
            Our Services
          </h2>
          
          <div className="flex flex-row gap-6 items-stretch mb-16 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-4 -mx-4 md:px-0 md:mx-0">
            {[
              {
                title: "Wedding Venues",
                icon: <MapPin className="w-12 h-12 text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto" strokeWidth={1.5} />,
                desc: "Explore a wide range of stunning wedding venues with us!"
              },
              {
                title: "Decorations",
                icon: <Sparkles className="w-12 h-12 text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto" strokeWidth={1.5} />,
                desc: "Stunning decor that reflects your style and creates unforgettable memories."
              },
              {
                title: "Food & Beverages",
                icon: <Utensils className="w-12 h-12 text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto" strokeWidth={1.5} />,
                desc: "Renowned caterers, exceptional service, and unforgettable dining—perfect for your special day."
              },
              {
                title: "Photography",
                icon: <Camera className="w-12 h-12 text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto" strokeWidth={1.5} />,
                desc: "Capture your wedding precious moments with our expert photographers."
              },
              {
                title: "Makeup & Grooming",
                icon: <Scissors className="w-12 h-12 text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto" strokeWidth={1.5} />,
                desc: "We partner with top makeup artists and groomers to help you shine on your wedding day."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 w-[280px] md:w-[300px] shrink-0 group snap-center border border-black/[0.03] hover:bg-gradient-to-b hover:from-white hover:to-rose-50">
                {service.icon}
                <h3 className="text-[12px] font-black uppercase tracking-widest text-[#020617] mb-4">{service.title}</h3>
                <p className="text-black/60 text-[13px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-5xl mx-auto text-[13px] md:text-[15px] text-black/70 leading-loose text-center font-medium px-4">
            At Vnexora, we don't just plan weddings—we craft seamless, soulful experiences. From venue selection, thematic décor, gourmet catering, wedding photography, and bridal services, to complete logistics and guest management, our team offers end-to-end wedding solutions tailored to your vision, preferences, and budget. From intimate gatherings to grand celebrations to dreamy destination weddings, we offer end-to-end wedding planning solutions designed around your needs and vision.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-6 pt-24 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side Vertical Filters */}
          <aside className="w-full lg:w-48 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67C52] mb-6">Venue Type</h3>
                <div className="flex flex-col gap-2">
                  {(["All", "Palace", "Resort", "Hotel", "Garden"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                        filter === type
                          ? "bg-white text-[#020617] shadow-xl shadow-black/5 border border-black/5"
                          : "text-black/40 hover:text-[#020617] hover:bg-black/[0.02]"
                      }`}
                    >
                      {type}s
                      {filter === type && <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#A67C52]/5 p-6 rounded-3xl border border-[#A67C52]/10">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#A67C52] mb-4">Expert Help</h4>
                <p className="text-xs text-black/60 leading-relaxed mb-6">
                  Confused about the venue? Let our experts help you plan your perfect day.
                </p>
                <button className="w-full py-4 bg-[#A67C52] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-[#020617] transition-all">
                  Talk to Expert
                </button>
              </div>
            </div>
          </aside>

          {/* Property Content Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-serif text-[#020617] mb-2">Top Venues by City</h2>
                <p className="text-sm text-black/40">Start your happily-ever-after in the most breath-taking venues.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <AnimatePresence mode="popLayout">
                {filteredWeddings.map((venue) => (
                  <motion.div
                    key={venue.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <WeddingCard
                      {...venue}
                      onBook={() => handleBook(venue.name)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="site"
        subject={`Wedding Venue Inquiry: ${selectedVenue}`}
      />

      {/* ── ENQUIRY FORM SECTION ── */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="container mx-auto px-6 max-w-2xl text-[#020617]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">
              Let's Find Your Perfect Venue
            </h2>
            <p className="text-black/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              For any enquiries, please contact us or use the enquiry form below. We aim to respond within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">First Name *</label>
                <input type="text" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="First Name" />
              </div>
              <div>
                <label className="block text-sm mb-2">Last Name *</label>
                <input type="text" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="Last Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Email *</label>
                <input type="email" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="Email Address" />
              </div>
              <div>
                <label className="block text-sm mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="Phone Number" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Event Date *</label>
              <div className="relative">
                <input type="date" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Time Slot *</label>
              <div className="relative">
                <select className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm appearance-none focus:ring-1 focus:ring-[#A67C52] transition-shadow text-black/60">
                  <option value="" disabled selected>Choose a time slot</option>
                  <option>Day (Morning to Afternoon)</option>
                  <option>Evening</option>
                  <option>Full Day</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" />
              </div>
              <p className="text-xs text-black/50 mt-2">*Timings can be extended</p>
            </div>

            <div>
              <label className="block text-sm mb-2">Type of Event *</label>
              <div className="relative">
                <select className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm appearance-none focus:ring-1 focus:ring-[#A67C52] transition-shadow text-black/60">
                  <option value="" disabled selected>Choose one</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Party</option>
                  <option>Conference</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">If you selected 'Other', please specify below</label>
              <input type="text" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="Type of Event" />
            </div>

            <div>
              <label className="block text-sm mb-2">Number of Guests (minimum 150) *</label>
              <input type="number" min="150" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="Estimated guests" />
            </div>

            <div>
              <label className="block text-sm mb-2">How did you hear about us? *</label>
              <div className="relative">
                <select className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm appearance-none focus:ring-1 focus:ring-[#A67C52] transition-shadow text-black/60">
                  <option value="" disabled selected>Choose one</option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Word of Mouth</option>
                  <option>Advertisement</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">If you selected 'Other', please specify below</label>
              <input type="text" className="w-full px-4 py-4 bg-[#EBE3DB] outline-none text-sm placeholder:text-black/40 focus:ring-1 focus:ring-[#A67C52] transition-shadow" placeholder="Please specify" />
            </div>

            <div className="pt-6">
              <button type="button" className="w-full py-5 bg-[#A67C52] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-none hover:bg-[#8B643F] transition-colors shadow-lg shadow-[#A67C52]/20">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
