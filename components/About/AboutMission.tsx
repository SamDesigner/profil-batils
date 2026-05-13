"use client";
import React from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="text-[#FFCC29]" size={32} />,
      text: "To provide high-performance drywall systems that simplify construction without compromising on structural integrity, ensuring every build in the CEMAC region stands on a foundation of excellence.",
    },
    {
      title: "Our Vision",
      icon: <Eye className="text-[#FFCC29]" size={32} />,
      text: "To be the standard-bearer for industrial manufacturing across Central Africa, driving innovation in steel profile engineering and sustainable urban development.",
    },
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card, idx) => (
          <div key={idx} className="group relative pt-8">
            {/* The Clean Tab Header */}
            <div className="absolute top-0 left-0 bg-black text-[#FFCC29] px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] z-10">
              {card.title}
            </div>
            
            {/* The Main Card Body */}
            <div className="border-t-2 border-l-2 border-black p-10 bg-[#FBFBFB] flex flex-col items-center text-center transition-all duration-300 group-hover:bg-white group-hover:shadow-[20px_20px_0px_rgba(255,204,41,1)]">
              <div className="mb-6 bg-black p-4 rounded-full">
                {card.icon}
              </div>
              <p className="text-gray-800 leading-relaxed font-medium text-lg">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}