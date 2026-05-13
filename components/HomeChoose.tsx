"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseProducts() {
  const { t } = useLanguage();

  const REASONS = [
    {
      titleKey: "choose.reason1",
      image: "/images/chooseOne.png",
      descriptionKey: "choose.desc1",
    },
    {
      titleKey: "choose.reason2",
      image: "/images/chooseTwo.png",
      descriptionKey: "choose.desc2",
    },
    {
      titleKey: "choose.reason3",
      image: "/images/chooseThree.png",
      descriptionKey: "choose.desc3",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Faint Industrial Background Overlay */}
      <div className="absolute inset-0 opacity-9 pointer-events-none">
        <Image
          src="/images/WareFactory.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center text-xl font-bold uppercase tracking-tight mb-16 text-gray-900">
          {t('choose.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {REASONS.map((reason, idx) => (
            <div key={idx} className="relative group">
              {/* The "Tabbed" Border Box */}
              <div className="relative border-2 border-gray-800 rounded-xl pt-12 pb-8 px-6 bg-white/50 backdrop-blur-sm">
                
                {/* Title Section (The Cutout look) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4">
                   <h3 className="text-sm font-extrabold uppercase text-center leading-tight whitespace-nowrap">
                    {t(reason.titleKey).split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word} <br />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square w-full mb-6 overflow-hidden shadow-xl">
                  <Image
                    src={reason.image}
                    alt={t(reason.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed text-center font-medium px-2">
                  {t(reason.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-3 bg-[#1a1a1a] text-white py-4 px-10 rounded-xl shadow-2xl hover:bg-black transition-all">
             <div className="bg-white/20 p-1.5 rounded-md">
                <Download size={18} />
             </div>
             <span className="font-bold text-sm tracking-wide">{t('choose.downloadCatalogue')}</span>
          </button>
        </div>
      </div>
    </section>
  );
}