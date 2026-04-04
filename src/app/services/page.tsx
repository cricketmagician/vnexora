      {/* 1. HERO SECTION — Ultra-Premium Cinematic Experience */}
      <section className="relative h-[95vh] min-h-[750px] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image with Parallax & Ken Burns effect */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/services/luxury_brokerage_hero.png"
            alt="Vnexora Premium Services"
            fill
            priority
            className="object-cover opacity-90"
          />
          {/* Multi-layered Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent/60" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Floating Asset Performance Badge (Glassmorphic) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-32 right-12 md:right-28 z-20 hidden lg:flex"
        >
          <div className="px-6 py-4 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl flex flex-col gap-1 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">Asset Performance</span>
            </div>
            <span className="text-lg font-serif text-white italic tracking-wide">Premium Yield Focused</span>
          </div>
        </motion.div>

        {/* Decorative Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute top-[110px] left-8 right-8 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent origin-left z-10"
        />

        <div className="relative z-10 px-8 md:px-20 lg:px-32 max-w-[1680px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-12 h-[1px] bg-[#A67C52]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A67C52]">The Management Suite</span>
          </motion.div>

          {/* Editorial Headline Reveal */}
          <div className="flex flex-col gap-2 mb-16">
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="block text-white/60 font-sans uppercase tracking-[0.8em] text-[10px] md:text-[12px] font-bold"
              >
                End-to-End
              </motion.span>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                className="text-6xl md:text-9xl lg:text-[10.5rem] font-serif text-white leading-[0.85] tracking-tighter"
              >
                Hotel
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-2 md:-mt-4">
              <motion.h1 
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
                className="text-6xl md:text-9xl lg:text-[10.5rem] font-serif text-[#A67C52] italic leading-[0.85] tracking-tighter"
              >
                Management.
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-12"
          >
            <div className="max-w-sm space-y-4">
               <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em]">Core Objectives</p>
               <p className="text-white/60 text-sm md:text-base font-light tracking-[0.05em] leading-relaxed italic pr-12">
                 Transforming hospitality assets into high-yield, world-class portfolios through precision operation.
               </p>
            </div>

            <Link href="/contact" className="group/btn relative">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-14 py-6 bg-[#A67C52] text-black text-[11px] uppercase tracking-[0.5em] font-black rounded-full overflow-hidden shadow-[0_20px_50px_rgba(166,124,82,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(166,124,82,0.5)] hover:bg-[#CFA052]"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Consult Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1.5" />
                </span>
                {/* Refined Glass Highlight on Button */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.8em] text-white/20 group-hover:text-[#A67C52] transition-colors">Vertical Navigation</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent group-hover:from-[#A67C52]/40 transition-all duration-700" />
        </motion.div>
      </section>
