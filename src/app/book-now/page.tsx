"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

// Mock data based on Frasers style layout
const searchResults = [
  {
    id: 1,
    country: "INDIA",
    name: "Banaras Kila by Vnexora, Varanasi",
    image: "/images/reception_hero.jpg",
    price: 320,
    memberPrice: 280
  },
  {
    id: 2,
    country: "INDIA",
    name: "Heritage Kashinaama by Vnexora, Varanasi",
    image: "/images/dark_room_hero.jpg",
    price: 450,
    memberPrice: 400
  }
];

export default function BookNowPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] font-sans selection:bg-[#8d6c4c] selection:text-white">
      {/* Dark background for Navbar on this specific page */}
      <div className="bg-[#050505]">
        <Navbar />
        {/* Spacer to push content below fixed/absolute navbar if needed, or just let Navbar handle it */}
        <div className="h-24"></div> 
      </div>
      
      {/* Search Modifier Bar */}
      <div className="bg-white border-b border-zinc-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <select className="border border-zinc-300 rounded-sm px-4 py-2 text-sm text-zinc-700 min-w-[150px] outline-none focus:border-[#8d6c4c]">
              <option>All Countries</option>
              <option>UAE</option>
              <option>Saudi Arabia</option>
              <option>India</option>
            </select>
            <select className="border border-zinc-300 rounded-sm px-4 py-2 text-sm text-zinc-700 min-w-[150px] outline-none focus:border-[#8d6c4c]">
              <option>All Cities</option>
            </select>
            <div className="border border-zinc-300 rounded-sm px-4 py-2 text-sm text-zinc-700 flex items-center cursor-pointer hover:border-[#8d6c4c] whitespace-nowrap">
              24 Mar 2026 - 25 Mar 2026
            </div>
            <div className="border border-zinc-300 rounded-sm px-4 py-2 text-sm text-zinc-700 flex items-center cursor-pointer hover:border-[#8d6c4c] whitespace-nowrap">
              1 Adult, 0 Child
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 bg-[#262626] text-white text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors rounded-sm whitespace-nowrap">
              Update Search
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-[#262626]">Our Managed Hotels</h1>
          <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest font-bold">Showing {searchResults.length} properties matching your criteria</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {searchResults.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group border border-zinc-100/50">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#8d6c4c] uppercase mb-3">
                  {hotel.country}
                </p>
                <h3 className="text-xl font-serif text-[#262626] leading-tight mb-4 group-hover:text-[#8d6c4c] transition-colors">
                  {hotel.name}
                </h3>
                
                <a href="#" className="text-xs uppercase tracking-widest text-zinc-500 border-b border-zinc-300 pb-1 w-fit hover:text-[#8d6c4c] hover:border-[#8d6c4c] transition-colors mb-8">
                  View Details
                </a>

                <div className="mt-auto bg-[#fcfcfc] -mx-6 -mb-6 p-5 border-t border-zinc-100">
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex justify-between items-center border-b border-dashed border-zinc-200 pb-2">
                      <span className="text-xs text-zinc-500">FROM</span>
                      <span className="font-sans font-medium text-black">USD {hotel.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#8d6c4c] pt-1">
                      <span className="text-[10px] font-bold tracking-[0.15em]">MEMBERS ONLY</span>
                      <span className="font-sans font-bold text-lg">USD {hotel.memberPrice}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 border border-[#8d6c4c] text-[#8d6c4c] text-xs font-bold tracking-widest uppercase hover:bg-[#8d6c4c] hover:text-white transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
