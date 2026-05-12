"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PARTNERS = [
  { name: "Laboc", logo: "/images/laboc.svg" },
  { name: "Emir Cavus", logo: "/images/emir.svg" },
  { name: "SID", logo: "/images/sid.svg" },
  { name: "Vision", logo: "/images/vision.svg" },
  // Duplicate for seamless loop
  { name: "Laboc-clone", logo: "/images/laboc.svg" },
  { name: "Emir-clone", logo: "/images/emir.svg" },
  { name: "SID-clone", logo: "/images/sid.svg" },
  { name: "Vision-clone", logo: "/images/vision.svg" },
];

export default function OurPartners() {
  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-gray-800">
            Our Partners
          </h2>
        </div>

        <div className="relative flex items-center group">
          
          {/* Manual Nav - Left (Hidden on mobile, visible on group hover) */}
          <button className="absolute left-0 z-20 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-yellow-400">
            <ChevronLeft size={24} />
          </button>

          {/* The Marquee Container */}
          <div className="flex w-full overflow-hidden relative">
            <motion.div 
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap py-4"
              animate={{
                x: ["0%", "-50%"], // Moves halfway because the list is duplicated
              }}
              transition={{
                duration: 25, // Adjust speed here
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {PARTNERS.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="relative w-32 md:w-48 h-20 md:h-28 shrink-0"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </motion.div>

            {/* Gradient Fades for a "Smooth" Edge transition */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

          {/* Manual Nav - Right */}
          <button className="absolute right-0 z-20 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-yellow-400">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}