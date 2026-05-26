"use client";
import { motion } from "framer-motion";
import WhatsApp from '@/public/images/whatsapp.png';
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "237640191919"; // Format: Country code + number without zeros or plus signs

  // Clean welcome message context for the user
  // const initialMessage = "Hello Bati Profils, I would like to make an inquiry regarding your steel profiles.";
  const initialMessage = "Bonjour Bati Profils, je souhaite obtenir des informations concernant vos profilés en acier.";
  const encodedMessage = encodeURIComponent(initialMessage);

  const handleRedirect = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-200 pointer-events-none">
      {/* Container for animations */}
      <motion.button
        onClick={handleRedirect}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] cursor-pointer text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] border-2 border-white transition-shadow focus:outline-none group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Radar Ping Animation for visual pull */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />

        {/* Custom Lucide Icon or SVG */}
        {/* <MessageSquare size={24} className="fill-current stroke-[2.5]" /> */}

        <Image src={WhatsApp} alt="WhatsApp Icon" width={24} height={24} className="w-6 h-6" />
        {/* Clean tooltip hover flag */}
        <span className="absolute right-16 bg-black text-[#FFCC29] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-black shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat With Us
        </span>
      </motion.button>
    </div>
  );
}