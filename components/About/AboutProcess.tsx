"use client";

import { Settings, ShieldCheck, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ManufacturingProcess() {
  const { t } = useLanguage();
  
  const steps = [
    { title: t('about.process.step1'), icon: <Settings />, desc: t('about.process.desc1') },
    { title: t('about.process.step2'), icon: <ShieldCheck />, desc: t('about.process.desc2') },
    { title: t('about.process.step3'), icon: <Truck />, desc: t('about.process.desc3') },
  ];

  return (
    <section className="py-24 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-16 tracking-tight">{t('about.process.title')}</h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gray-300 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center md:w-1/3">
              <div className="w-20 h-20 bg-[#FFCC29] rounded-full flex items-center justify-center text-black mb-6 shadow-xl border-4 border-white">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold uppercase mb-3">{step.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}