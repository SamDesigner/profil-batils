"use client";

import React from "react";
import Image from "next/image";
import { Phone, FileText, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import catalogue from '@/public/images/catalogue.svg'

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20   md:px-10">
      <div className="max-w-360 mx-auto relative">
        
        {/* Main Container */}
        <div 
          className="relative bg-[#f8f8f8] overflow-hidden flex flex-col md:flex-row items-stretch rounded-[40px]  shadow-sm"
      
        >
          {/* Left Side: Factory Image */}
          <div className="relative w-full md:w-1/2 min-h-100">
            <div className="bg-white h-17.5  w-10 absolute top-[-10] z-100 rounded-2xl">

            </div>
            <Image
              src="/images/Warehouse.png" // Replace with your image
              alt="Bati Profils Factory"
              fill
              className="object-cover"
            />
            
            {/* The Floating Yellow Card */}
            <div className="absolute -right-12 bottom-12 z-20 w-72 bg-[#ffcc29] rounded-3xl p-8 shadow-xl flex flex-col justify-between aspect-square">
              <div className="flex justify-between items-start">
                <div className="bg-black/10 p-2 rounded-full">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-black leading-none">300+</p>
                  <p className="text-sm font-semibold text-black/70">{t('contractors.collaborations')}</p>
                </div>
              </div>
              
              <div className="relative">
                {/* Optional: Add a subtle map SVG overlay here to match your image */} 
                <Image src='/images/MapSvg.svg' className="absolute top-[-200]" alt="Map Image" height={250} width={250} />
                <p className="text-xl font-bold text-black leading-tight">
                  {t('contractors.trusted')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
            {/* Faint background pattern/image */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Image 
                    src="/images/WareFactory.png" 
                    alt="pattern" 
                    fill 
                    className="object-cover"
                />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t('contractors.title')}
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
                {t('contractors.description')}
              </p> 

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-[#ffcc29] hover:bg-[#e6b825] text-black font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-yellow-400/20">
                  <div className="bg-black text-white p-1 rounded-full">
                    <Phone size={14} fill="currentColor" />
                  </div>
                  {t('contractors.callFactory')}
                </button>

                <button className="flex items-center gap-3 bg-[#262626] hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition-all">
                  {/* <div className="bg-white text-black p-1 rounded-full">
                    <FileText size={14} fill="currentColor" />
                  </div> */}
                  <Image src={catalogue} alt="Catalogue Icon" width={25} height={25} className="object-contain" />

                  {t('contractors.downloadCatalogue')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}