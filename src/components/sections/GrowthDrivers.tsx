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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-[5px] max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight max-w-4xl">
            Drive Higher Occupancy, More Revenue & Stronger Rates
          </h2>
          <p className="text-[#4A5568] text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
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
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#050505]">
                {/* Image Container */}
                <div className="relative aspect-[1.1/1] overflow-hidden">
                  <Image
                    src={driver.image}
                    alt={driver.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Bottom Bar */}
                <div className="bg-[#021A59] py-8 px-10 flex flex-col items-center justify-center text-center min-h-[180px]">
                  <span className="text-white text-lg md:text-xl font-bold tracking-tight mb-4">
                    {driver.title}
                  </span>
                  <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed">
                    {driver.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
