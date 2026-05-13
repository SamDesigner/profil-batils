"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const { t } = useLanguage();

  const TESTIMONIALS = [
    {
      rating: 5,
      quoteKey: "testimonials.quote1",
      image: "/images/testimonyOne.png",
      authorKey: "testimonials.author1",
      locationKey: "testimonials.location1",
    },
    {
      rating: 4,
      quoteKey: "testimonials.quote2",
      image: "/images/testimonyTwo.png",
      authorKey: "testimonials.author2",
      locationKey: "testimonials.location2",
    },
    {
      rating: 5,
      quoteKey: "testimonials.quote3",
      image: "/images/testimonyThree.png",
      authorKey: "testimonials.author3",
      locationKey: "testimonials.location3",
    },
  ];

  const nextStep = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, [TESTIMONIALS.length]);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [TESTIMONIALS.length]);

  // Autoplay Logic
  useEffect(() => {
    const interval = setInterval(nextStep, 10000);
    return () => clearInterval(interval);
  }, [nextStep]);

  return (
    <section className="bg-[#f9f9f9] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with your signature double-line divider */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="flex flex-col gap-1 w-24">
            <div className="h-0.5 bg-yellow-400 w-full" />
            <div className="h-0.5 bg-yellow-400 w-1/2 mx-auto" />
          </div>
        </div>

        <div className="relative group">
          {/* Slider Container */}
          <div className="relative h-137.5 md:h-112.5">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* We show 3 cards at a time, looping through the array */}
                {[0, 1, 2].map((offset) => {
                  const itemIndex = (currentIndex + offset) % TESTIMONIALS.length;
                  const item = TESTIMONIALS[itemIndex];
                  return (
                    <div 
                      key={itemIndex}
                      className="bg-white border-t-4 border-yellow-400 rounded-xl p-8 shadow-xl flex flex-col justify-between group/card hover:-translate-y-2 transition-transform duration-300"
                    >
                      <div>
                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-4 text-gray-100 w-12 h-12 -z-10" />
                          <p className="text-gray-700 italic leading-relaxed text-sm">
                            &quot;{t(item.quoteKey)}&quot;
                          </p>
                        </div>
                      </div>

                      <div className="mt-8">
                        {/* Project Image */}
                        <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4 grayscale group-hover/card:grayscale-0 transition-all">
                          <Image src={item.image} alt="Project" fill className="object-cover" />
                        </div>
                        {/* Attribution */}
                        <div className="border-l-2 border-yellow-400 pl-3">
                          <p className="font-bold text-xs uppercase text-gray-900 tracking-tight">
                            {t(item.authorKey)}
                          </p>
                          <p className="text-[11px] text-gray-500 font-medium">
                            {t(item.locationKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevStep}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:bg-yellow-400 transition-colors z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextStep}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:bg-yellow-400 transition-colors z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Autoplay Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentIndex === idx ? "w-12 bg-yellow-400" : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}