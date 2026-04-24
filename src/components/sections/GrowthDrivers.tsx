"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const drivers = [
  {
    title: "Luxury & Boutique Hotels",
    description: "High-end, design-led, and lifestyle-driven properties focused on premium positioning, exceptional guest experiences, and distinctive brand identity to command stronger rates and lasting market appeal.",
    image: "/images/partner/room.png",
  },
  {
    title: "Resorts & Vacation Properties",
    description: "Beach, mountain, spa, and leisure destinations where success is driven by room revenue alongside premium dining, wellness experiences, recreation, and curated guest activities.",
    image: "/images/home/resorts.png",
  },
  {
    title: "Independent Hotels",
    description: "Owner-managed and independent hotels that compete through location, value, and operational efficiency, while seeking stronger brand presence, direct demand, and healthier profit margins.",
    image: "/images/home/independent.png",
  },
];

export const GrowthDrivers = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-[5px] max-w-7xl relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight max-w-4xl mb-8">
            Drive Higher Occupancy. <br />
            <span className="text-[#D4AF37] italic font-light">More Revenue & Stronger Rates</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Partnering with leading hospitality brands to optimize operational performance, refine revenue strategy, and unlock sustainable asset value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {drivers.map((driver, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative cursor-pointer h-[500px] rounded-[3rem] overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={driver.image}
                  alt={driver.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.7] group-hover:brightness-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight transition-all duration-500 group-hover:text-[#D4AF37] mb-2">
                  {driver.title}
                </h3>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                      {driver.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                      <span className="text-[#D4AF37] text-xs font-black uppercase tracking-widest">
                        Book a Consult
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
