"use client"
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function RegionalReach() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/doala.jpg" // Or a shot of a major project in Gabon/CAR
              alt="Regional Reach" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 bg-[#FFCC29] p-6 font-black uppercase text-xl">
              {t('about.leadership.title')}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none">{t('about.leadership.heading')}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('about.leadership.para1')}
          </p>
          <p className="text-gray-600 text-lg">
            {t('about.leadership.para2')}
          </p>
          <div className="pt-4">
            <Link className="cursor-pointer" href="/contact">
              <button className="bg-black text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#FFCC29] hover:text-black transition-all">
                {t('about.leadership.button')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}