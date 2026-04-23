"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const drivers = [
  {
    title: "Luxury & Boutique Hotels",
    image: "/images/partner/room.png",
  },
  {
    title: "Resorts & Vacation Properties",
    image: "/images/home/resorts.png",
  },
  {
    title: "Independent Hotels",
    image: "/images/home/independent.png",
  },
];

export const GrowthDrivers = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight max-w-4xl">
            Drive higher occupancy, stronger rates, and more revenue
          </h2>
          <p className="text-[#4A5568] text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Trusted by 150+ hotels worldwide to boost sales, streamline costs, and drive profits.
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
                <div className="bg-[#021A59] py-6 px-8 flex items-center justify-center text-center">
                  <span className="text-white text-base md:text-lg font-bold tracking-tight">
                    {driver.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
