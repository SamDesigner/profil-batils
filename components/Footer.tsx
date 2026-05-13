import React from "react";
import Image from "next/image";
import { Phone, FileText, Mail, MapPin } from "lucide-react";

export default function UnifiedFooter() {
    return (
        <footer className="relative w-full overflow-hidden">
            {/* 1. SHARED BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/HomeBg.png"
                    alt="Bati Profils Industrial Background"
                    fill
                    className="object-cover grayscale brightness-[0.35]"
                    priority
                />
            </div>

            {/* 2. CTA SECTION (Yellow Overlay) */}
            {/* Removed fixed height h-125 to prevent mobile cutoff, used min-h instead */}
            <div className="relative z-10 bg-[#FFCC29]/70 backdrop-blur-[2px] py-16 md:py-24 px-6 md:px-12 border-t-8 border-white min-h-fit md:h-[500px] flex items-center">
                <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">

                    {/* Logo Branding */}
                    <div className="flex shrink-0">
                        <img
                            src="/images/footerLogo.svg"
                            alt="Bati Profils"
                            className="object-contain h-24 md:h-36 lg:h-[150px]"
                        />
                    </div>

                    {/* Action Text & Buttons */}
                    <div className="max-w-xl text-center md:text-right">
                        <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-4 leading-tight">
                            Ready to build your next project <br className="hidden md:block" /> with confidence?
                        </h2>
                        <p className="text-sm md:text-lg text-black/80 font-medium mb-8">
                            We deliver reliable, high-performance drywall profile solutions for modern construction across Central Africa.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-4">
                            <button className="flex items-center justify-center gap-3 bg-[#333333] text-white px-6 py-4 rounded-xl hover:bg-black transition-all font-bold shadow-md text-sm md:text-base">
                                <FileText size={20} />
                                Download our Catalogue
                            </button>
                            <button className="flex items-center justify-center gap-3 bg-[#333333] text-white px-6 py-4 rounded-xl hover:bg-black transition-all font-bold shadow-md text-sm md:text-base">
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
            <div className="relative z-10 bg-[#1A1A1A]/60 backdrop-blur-md pt-20 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Grid arranged for better flow on small/medium screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">

                        {/* About Us */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b-2 border-[#FFCC29] pb-2 inline-block text-white">
                                About Us
                            </h3>
                            <ul className="space-y-4 text-gray-300 text-sm font-medium">
                                <li><a href="#" className="hover:text-[#FFCC29] transition-colors">Company profile</a></li>
                                <li><a href="#" className="hover:text-[#FFCC29] transition-colors">Certifications</a></li>
                                <li><a href="#" className="hover:text-[#FFCC29] transition-colors">Media</a></li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b-2 border-[#FFCC29] pb-2 inline-block text-white">
                                Products
                            </h3>
                            <ul className="space-y-4 text-gray-300 text-sm font-medium">
                                <li className="hover:text-white cursor-default transition-colors">UW (48 mm)</li>
                                <li className="hover:text-white cursor-default transition-colors">CW (46.5 mm)</li>
                                <li className="hover:text-white cursor-default transition-colors">L (25 mm)</li>
                                <li className="hover:text-white cursor-default transition-colors">F (47 mm)</li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 border-b-2 border-[#FFCC29] pb-2 inline-block text-white">
                                Contact
                            </h3>
                            <div className="space-y-5">
                                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 text-sm group">
                                    <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#FFCC29] group-hover:text-black transition-all">
                                        <Phone size={18} />
                                    </div>
                                    <span className="font-semibold">+237 6 90 12 11 35</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 text-sm group">
                                    <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#FFCC29] group-hover:text-black transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <span className="font-semibold">info@batiprofils.net</span>
                                </div>
                                <div className="flex items-start justify-center md:justify-start gap-4 text-gray-300 text-sm group text-left">
                                    <div className="bg-white/5 p-3 rounded-full shrink-0 group-hover:bg-[#FFCC29] group-hover:text-black transition-all">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="leading-relaxed font-semibold">
                                        Rue prince de Galles Akwa,<br />
                                        Douala - Cameroun
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Bar - Cleanly arranged */}
                    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                        <p className="order-2 md:order-1">©2026 copyright: Bati Profils Ltd.</p>

                        <div className="order-1 md:order-2 transform hover:scale-110 transition-transform duration-300">
                            <Image src="/images/FooterCircle.png" alt="icon" width={60} height={60} className="opacity-80 hover:opacity-100" />
                        </div>

                        <div className="flex gap-6 order-3">
                            <a href="#" className="hover:text-[#FFCC29] transition-colors">Privacy Policy</a>
                            <span className="text-white/20">|</span>
                            <a href="#" className="hover:text-[#FFCC29] transition-colors">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}