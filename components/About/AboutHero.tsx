"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center overflow-hidden bg-black">
      {/* 1. Background Image with Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HomeBg.png" 
          alt="Bati Profils Industrial Excellence"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Added max-w-7xl here for consistent alignment */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* 2. Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[#FFCC29] text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
        >
          <span className="opacity-70">Home</span>
          <ChevronRight size={14} />
          <span>About Us</span>
        </motion.div>

        {/* 3. Main Narrative Hook */}
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-6"
          >
            Engineering the <br /> 
            <span className="text-[#FFCC29]">Skeleton</span> of Modern <br /> 
            Architecture.
          </motion.h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-2 w-32 bg-[#FFCC29] mb-8 origin-left"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Bati Profils is a leader in precision-engineered drywall systems, 
            delivering the structural integrity required for the CEMAC region's 
            most ambitious construction projects.
          </motion.p>
        </div>
      </div>

      {/* 4. Decorative Industrial Element */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block opacity-20">
        <div className="text-[120px] font-black text-white leading-none select-none">
          EST. 2015
        </div>
      </div>
    </section>
  );
}