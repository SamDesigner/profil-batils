"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const SLIDES = [
  { title: "Smart Solutions For Modern Systems.", image: '/images/showcaseOne.png' },
  { title: "Innovative Engineering for Global Trade.", image: "https://images.unsplash.com/photo-1777446039915-96505c45ca99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" },
  { title: "Sustainable Local Development.", image: "https://images.unsplash.com/photo-1777446039915-96505c45ca99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-[700px] w-full overflow-hidden bg-gray-900 text-white " >
      {/* Viewport */}
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Background Image Placeholder */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${slide.image})`, filter: 'brightness(0.6)' }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 flex h-full flex-col justify-center px-12 md:px-24 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-200 mb-8 max-w-xl">
                  We help transform global opportunities into sustainable local development, 
                  from international trade to investment funding and full turnkey project delivery.
                </p>
                
                <div className="flex gap-4">
                  <button className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
                    Explore our Projects
                  </button>
                  <button className="bg-[#1a1c1e] text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 border border-gray-700">
                    Get in Touch 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Segmented Pagination Bars */}
      <div className="absolute bottom-12 left-12 md:left-24 flex gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 w-16 transition-all duration-300 rounded-full ${
              index === selectedIndex ? "bg-yellow-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}