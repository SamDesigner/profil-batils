"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import phone from '@/public/images/phone.svg'
import Link from "next/link";

const SLIDES = [
  { titleKey: "showcase.title1", image: '/images/showcaseOne.png' },
  { titleKey: "showcase.title2", image: "https://images.unsplash.com/photo-1777446039915-96505c45ca99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" },
  { titleKey: "showcase.title3", image: "https://images.unsplash.com/photo-1777446039915-96505c45ca99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useLanguage();
  // const phoneNumber = "+237640191919";
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
    <div className="relative h-[85vh] md:h-175 w-full overflow-hidden bg-gray-900 text-white">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${slide.image})`, filter: 'brightness(0.6)' }}
              />

              <div className="max-w-7xl mx-auto h-full px-6 sm:px-12 md:px-12 flex items-center">
                <div className="relative z-10 flex flex-col justify-center">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    {t(slide.titleKey)}
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                    {t('showcase.description')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href='/projects'>
                      <button className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition text-center shadow-lg">
                        {t('showcase.exploreProjects')}
                      </button>
                    </Link>
                    <Link href='/contact'>
                      <button className="bg-[#1a1c1e] text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 border border-gray-700 hover:bg-black transition-all">
                        {t('showcase.getInTouch')}
                        <Image src={phone} alt="Phone Icon" width={20} height={20} className="object-contain" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 md:right-auto md:left-24 flex justify-center md:justify-start gap-2 sm:gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === selectedIndex ? "w-12 sm:w-16 bg-yellow-400" : "w-6 sm:w-8 bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}