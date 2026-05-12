import React from "react";
import Image from "next/image";

import { Phone, FileText, Mail, MapPin } from "lucide-react";

export default function UnifiedFooter() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* 1. THE SHARED BACKGROUND IMAGE */}
      {/* This image spans the entire height of both the CTA and Footer sections */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HomeBg.png" // The single shared image
          alt="Bati Profils Industrial Background"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
      </div>

      {/* 2. CTA SECTION (Yellow Overlay) */}
      <div className="relative z-10 bg-[#FFCC29]/90 backdrop-blur-[2px] py-16 px-6 md:px-12 border-t-8 border-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Logo Branding */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image src="/images/logo-black.png" alt="Bati Profils" fill className="object-contain" />
            </div>
            <div className="flex flex-col text-black">
              <span className="text-4xl md:text-5xl font-black tracking-tighter leading-none">BATI</span>
              <span className="text-lg md:text-xl font-bold tracking-[0.4em]">PROFILS</span>
            </div>
          </div>

          {/* Action Text & Buttons */}
          <div className="max-w-xl text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-black text-black uppercase mb-4 leading-tight">
              Ready to build your next project <br className="hidden md:block" /> with confidence?
            </h2>
            <p className="text-sm md:text-base text-black/80 font-medium mb-8">
              We deliver reliable, high-performance drywall profile solutions for modern construction across Central Africa.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <button className="flex items-center gap-3 bg-[#333333] text-white px-6 py-3 rounded-xl hover:bg-black transition-all font-bold shadow-md">
                <FileText size={20} />
                Download our Catalogue
              </button>
              <button className="flex items-center gap-3 bg-[#333333] text-white px-6 py-3 rounded-xl hover:bg-black transition-all font-bold shadow-md">
                Get in Touch
                <div className="bg-white rounded-full p-1 text-black">
                  <Phone size={14} fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN FOOTER (Dark Gray Overlay) */}
      <div className="relative z-10 bg-[#2B2B2B] opacity-50 backdrop-blur-md pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
            
            {/* About Us */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block text-white">About Us</h3>
              <ul className="space-y-3 text-white text-sm font-medium">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Company profile</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Media</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block text-white">Products</h3>
              <ul className="space-y-3 text-white text-sm font-medium">
                <li>UW (48 mm)</li>
                <li>CW (46.5 mm)</li>
                <li>L (25 mm)</li>
                <li>F (47 mm)</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
               <h3 className="text-sm font-black uppercase tracking-widest mb-2 border-b border-white/10 pb-2 inline-block text-white">Contact</h3>
               <div className="flex items-center gap-4 text-white text-sm">
                  <div className="bg-white/10 p-2 rounded-full"><Phone size={16} className="text-white" /></div>
                  <span>+237 6 90 12 11 35</span>
               </div>
               <div className="flex items-center gap-4 text-white text-sm">
                  <div className="bg-white/10 p-2 rounded-full"><Mail size={16} className="text-white" /></div>
                  <span>info@batiprofils.net</span>
               </div>
               <div className="flex items-start gap-4 text-white text-sm">
                  <div className="bg-white/10 p-2 rounded-full mt-1"><MapPin size={16} className="text-white" /></div>
                  <span className="leading-relaxed">Rue prince de Galles Akwa-<br />Douala-Cameroun</span>
               </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] uppercase tracking-widest text-gray-500 font-bold">
            <p>©2025 copyright: Bati Profils Ltd.</p>
            
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all">
              <Image src="/images/logo-white-icon.png" alt="icon" width={18} height={18} />
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}