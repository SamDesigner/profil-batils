"use client";
import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal, Eye, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Importing your context hook

interface ProductType {
  id: string;
  name: string;
  category: "Ceiling" | "Partition" | "Cladding";
  src: string;
  thickness: string;
  flange: string;
  description: string;
  // Nested links object to easily match your active context state
  files: {
    en: string;
    fr: string;
  };
}

const PRODUCTS_DATA: ProductType[] = [
  {
    id: "uw-48",
    name: "UW Profile (48mm)",
    category: "Partition",
    src: "/images/UwProfile.png",
    thickness: "0.50mm - 0.70mm",
    flange: "40mm / 42mm",
    description: "High-performance floor and ceiling tracks used to secure vertical studs in drywall partition systems.",
    files: {
      en: "/documents/baten/EN-6.png",
      fr: "/documents/batfr/FR-6.png"
    }
  },
  {
    id: "cw-46",
    name: "CW Profile (46.5mm)",
    category: "Partition",
    src: "/images/CwProfile.png",
    thickness: "0.55mm - 0.70mm",
    flange: "47mm / 50mm",
    description: "Vertical framing components inserted into U-tracks, engineered for load bearing and acoustic partition integrity.",
    files: {
      en: "/documents/baten/EN-7.png",
      fr: "/documents/batfr/FR-7.png"
    }
  },
  {
    id: "l-angle",
    name: "L-Angle Profile",
    category: "Ceiling",
    src: "/images/LAngle.png",
    thickness: "0.50mm",
    flange: "25mm x 25mm",
    description: "Wall-angle perimeter components providing solid support corners for suspended ceiling frameworks.",
    files: {
      en: "/documents/baten/EN-8.png",
      fr: "/documents/batfr/FR-8.png"
    }
  },
  {
    id: "f-profile",
    name: "F Profile (47mm)",
    category: "Ceiling",
    src: "/images/FProfile.png",
    thickness: "0.60mm",
    flange: "47mm x 17mm",
    description: "Primary and secondary ceiling channels designed for seamless joints in flush plasterboard ceilings.",
    files: {
      en: "/documents/baten/EN-9.png",
      fr: "/documents/batfr/FR-9.png"
    }
  }
];

export default function PageContent() {
  const { t, language } = useLanguage(); // Pulling global language state ('en' or 'fr')
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const categories = ["All", "Partition", "Ceiling", "Cladding"];

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Page Title Wrapper */}
      <div className="bg-[#2B2B2B] text-white py-16 px-6 border-b-4 border-[#FFCC29]">
        <div className="max-w-7xl mx-auto w-full lg:px-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Technical <span className="text-[#FFCC29]">Catalog</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl font-medium">
            Precision-engineered galvanized steel profiles compliant with global structural construction standards.
          </p>
        </div>
      </div>

      {/* Main Structural Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT: Sticky Technical Filter Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 bg-[#FBFBFB] border-2 border-black p-6">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-black pb-3">
              <SlidersHorizontal size={18} />
              <h2 className="text-xs font-black uppercase tracking-widest text-black">Filter Profiles</h2>
            </div>
            
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                      activeCategory === cat
                        ? "bg-black text-[#FFCC29] border-black translate-x-2"
                        : "text-gray-600 border-transparent hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {cat} Systems
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT: Modern Product Catalog Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => {
                  // Safe fallback token typing lookup logic
                  const activeLocale = (language === "fr" ? "fr" : "en") as "en" | "fr";
                  const targetedDownloadUrl = product.files[activeLocale];

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={product.id}
                      className="relative bg-white border-2 border-black group overflow-hidden flex flex-col justify-between"
                    >
                      {/* Component Spec Tag */}
                      <div className="absolute top-4 left-4 z-20 bg-[#FFCC29] text-black px-3 py-1 text-[10px] font-black uppercase tracking-wider border border-black">
                        {product.category}
                      </div>

                      {/* Image Box */}
                      <div className="relative aspect-16/10 w-full bg-[#FAFAFA] border-b-2 border-black overflow-hidden">
                        <Image
                          src={product.src}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Meta Data Panel */}
                      <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-gray-900 mb-4">
                            {product.name}
                          </h3>
                          <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-3 mb-6 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                            <div>
                              <span className="block text-gray-400 text-[9px]">Gauge Range</span>
                              <span className="text-black font-extrabold">{product.thickness}</span>
                            </div>
                            <div>
                              <span className="block text-gray-400 text-[9px]">Standard Flange</span>
                              <span className="text-black font-extrabold">{product.flange}</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Action Elements */}
                        <div className="flex gap-3">
                          <button 
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 flex items-center justify-center gap-2 bg-[#333333] hover:bg-black text-white py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                          >
                            <Eye size={16} />
                            Quick Spec
                          </button>

                          {/* DYNAMIC LANGUAGE ANCHOR PROTOCOL */}
                          <a 
                            href={targetedDownloadUrl}
                            download={`${product.name.replace(/\s+/g, "_")}_${activeLocale.toUpperCase()}_Specification`}
                            className="flex items-center justify-center bg-gray-100 hover:bg-[#FFCC29] hover:text-black border border-gray-200 p-3 rounded-lg text-gray-700 transition-all cursor-pointer"
                            title={language === "fr" ? "Télécharger la fiche technique" : "Download technical asset"}
                          >
                            <FileText size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* QUICK VIEW DRAWER MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
            {/* Backdrop Layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Body Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative bg-white w-full max-w-2xl border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_rgba(0,0,0,1)] z-10 overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-[#FFCC29] border border-gray-200 rounded-full transition-colors text-black"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="relative aspect-square w-full bg-[#F6F6F6] border-2 border-black flex items-center justify-center">
                  <Image 
                    src={selectedProduct.src} 
                    alt={selectedProduct.name} 
                    fill 
                    className="object-contain p-6" 
                    sizes="300px"
                  />
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] bg-black text-[#FFCC29] px-3 py-1 font-black uppercase tracking-widest inline-block mb-3">
                      {selectedProduct.category} System
                    </span>
                    <h2 className="text-xl md:text-2xl font-black uppercase text-gray-900 tracking-tight leading-tight mb-4">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-[#FFCC29] p-4 space-y-2 text-xs font-bold uppercase text-gray-500">
                    <div>Gauge Options: <span className="text-black font-extrabold">{selectedProduct.thickness}</span></div>
                    <div>Flange Dimensions: <span className="text-black font-extrabold">{selectedProduct.flange}</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}