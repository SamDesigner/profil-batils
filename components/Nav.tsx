"use client";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const Links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About Us' },
    { link: '/products', label: 'Products' },
    { link: '/projects', label: 'Projects' },
    { link: '/resources', label: 'Resources' },
    { link: '/blogs', label: 'Blogs' }
  ];

  return (
    <nav className="relative w-full bg-white z-[100] border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        
        <div className="relative w-32 h-12 md:w-40 md:h-14">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Bati Profils"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          {Links.map((link, index) => {
            const isActive = pathname === link.link;
            return (
              <li key={index} className="relative group">
                <Link 
                  href={link.link}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFCC29]"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <button className="bg-[#FFCC29] text-black px-6 py-2.5 rounded-lg border-2 border-black font-black uppercase text-xs tracking-tighter hover:bg-black hover:text-white transition-all">
            Get in Touch
          </button>
        </div>

        <button 
          className="lg:hidden text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b-4 border-[#FFCC29] shadow-xl lg:hidden z-50"
          >
            <ul className="flex flex-col p-6 gap-6">
              {Links.map((link, index) => {
                const isActive = pathname === link.link;
                return (
                  <li key={index} onClick={() => setIsOpen(false)}>
                    <Link 
                      href={link.link}
                      className={`text-xl font-black uppercase tracking-tighter block ${
                        isActive ? 'text-[#FFCC29]' : 'text-black'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4">
                <button className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;