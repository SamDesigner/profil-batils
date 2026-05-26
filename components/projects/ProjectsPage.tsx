"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Building2, Layers, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Importing your language context hook

interface LocalizedString {
  en: string;
  fr: string;
}

interface ProjectType {
  id: string;
  title: LocalizedString;
  location: string; // Stays global as cities/countries usually don't change drastically here
  sector: "Commercial" | "Residential" | "Industrial" | "Infrastructure";
  scope: LocalizedString;
  image: string;
  details: LocalizedString;
}

const PROJECTS_DATA: ProjectType[] = [
  {
    id: "proj-1",
    title: {
      en: "Akwa Commercial Complex",
      fr: "Complexe Commercial d'Akwa"
    },
    location: "Douala, Cameroon",
    sector: "Commercial",
    scope: {
      en: "Premium partition walls and ceiling frameworks across 12 floors.",
      fr: "Cloisons de séparation premium et ossatures de plafond sur 12 étages."
    },
    image: "/images/testimonyOne.png",
    details: {
      en: "Supplied complete CW and UW galvanized steel partition systems engineered to strict acoustic attenuation and high-load partition rigidity criteria.",
      fr: "Fourniture de systèmes complets de cloisons en acier galvanisé CW et UW, conçus selon des critères stricts d'atténuation acoustique et de rigidité sous forte charge."
    }
  },
  {
    id: "proj-2",
    title: {
      en: "Libreville Shopping Hub",
      fr: "Centre Commercial de Libreville"
    },
    location: "Libreville, Gabon",
    sector: "Commercial",
    scope: {
      en: "Suspended flush plasterboard ceilings spanning 8,500 sqm.",
      fr: "Plafonds suspendus en plaques de plâtre lisses sur 8 500 m²."
    },
    image: "/images/testimonyTwo.png",
    details: {
      en: "Utilized F-Profiles and primary channels configured for seamless large-scale installations under highly demanding internal climate fluctuations.",
      fr: "Utilisation de profilés en F et de rails primaires configurés pour des installations transparentes à grande échelle sous des fluctuations climatiques internes exigeantes."
    }
  },
  {
    id: "proj-3",
    title: {
      en: "Brazzaville Administrative Towers",
      fr: "Tours Administratives de Brazzaville"
    },
    location: "Brazzaville, Republic of Congo",
    sector: "Infrastructure",
    scope: {
      en: "Heavy-gauge wall framing and corner reinforcements.",
      fr: "Ossature murale de forte épaisseur et renforts d'angles."
    },
    image: "/images/testimonyThree.png",
    details: {
      en: "Delivered precise L-Angle and reinforced steel profiles matching specific regional structural load tolerances for ministerial facilities.",
      fr: "Livraison de cornières en L précises et de profilés en acier renforcé correspondant aux tolérances de charge structurelle régionales spécifiques pour les installations ministérielles."
    }
  }
];

export default function ProjectsPage() {
  const { t, language } = useLanguage(); // Extracting active localization metrics
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Type-safe locale fallback assessment variable
  const activeLocale = (language === "fr" ? "fr" : "en") as "en" | "fr";

  // Dynamic filter lists keys mapping translation tokens
  const filters = ["All", "Commercial", "Industrial", "Infrastructure"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.sector === activeFilter);

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. HERO HEADER BANNER */}
      <div className="bg-[#2B2B2B] text-white py-20 px-6 border-b-4 border-[#FFCC29]">
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FFCC29] block mb-3">
            {activeLocale === "fr" ? "Infrastructure Éprouvée" : "Proven Infrastructure"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {activeLocale === "fr" ? <>Nos <span className="text-[#FFCC29]">Projets</span></> : <>Our <span className="text-[#FFCC29]">Projects</span></>}
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl font-medium leading-relaxed">
            {activeLocale === "fr" 
              ? "Un historique complet d'applications de profilés en acier de précision à travers des constructions structurelles critiques dans la zone CEMAC."
              : "A comprehensive track record of precision-engineered steel profile applications across critical structural builds in the CEMAC region."
            }
          </p>
        </div>
      </div>

      {/* 2. FILTER CONTROLS BAR */}
      <div className="bg-[#F6F6F6] border-b border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-3 items-center">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500 mr-2">
            {activeLocale === "fr" ? "Filtrer par Secteur:" : "Sector Filter:"}
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                activeFilter === filter
                  ? "bg-black text-[#FFCC29] border-black shadow-[4px_4px_0px_rgba(255,204,41,1)]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {filter === "All" ? (activeLocale === "fr" ? "Tous" : "All") : filter}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PROJECTS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-white border-2 border-black flex flex-col justify-between group shadow-sm hover:shadow-[8px_8px_0px_rgba(43,43,43,1)] transition-all duration-300"
              >
                <div>
                  {/* Image Holder */}
                  <div className="relative aspect-16/11 w-full overflow-hidden bg-gray-100 border-b-2 border-black">
                    <Image
                      src={project.image}
                      alt={project.title[activeLocale]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Sector Floating Tag */}
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20">
                      {project.sector}
                    </div>
                  </div>

                  {/* Text Meta Container */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wide mb-3">
                      <MapPin size={14} className="text-[#FFCC29]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4 leading-tight group-hover:text-[#FFCC29] transition-colors">
                      {project.title[activeLocale]}
                    </h3>

                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      {project.scope[activeLocale]}
                    </p>
                  </div>
                </div>

                {/* Footer Trigger Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-between bg-gray-50 hover:bg-black group-hover:bg-[#FFCC29] text-black p-4 border border-black transition-all font-bold text-xs uppercase tracking-wider"
                  >
                    <span>{activeLocale === "fr" ? "Voir Spécifications Techniques" : "View Project Specifications"}</span>
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. TECHNICAL PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              className="relative bg-white w-full max-w-3xl border-4 border-black p-6 md:p-10 shadow-[12px_12px_0px_rgba(255,204,41,1)] z-10 overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-black hover:text-[#FFCC29] border border-gray-200 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                {/* Media Column */}
                <div className="relative aspect-4/3 w-full bg-gray-100 border-2 border-black">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title[activeLocale]}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>

                {/* Meta Description Column */}
                <div className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] bg-black text-[#FFCC29] px-3 py-1 font-black uppercase tracking-widest inline-block border border-black">
                      {selectedProject.sector} {activeLocale === "fr" ? "Infrastructure" : "Infrastructure"}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 tracking-tighter leading-none">
                      {selectedProject.title[activeLocale]}
                    </h2>
                    
                    <div className="space-y-2 border-t border-b border-gray-100 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} /> {activeLocale === "fr" ? "Emplacement:" : "Location:"} 
                        <span className="text-black ml-1">{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 size={14} /> {activeLocale === "fr" ? "Catégorie:" : "Category:"} 
                        <span className="text-black ml-1">{selectedProject.sector} {activeLocale === "fr" ? "Développement" : "Development"}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed pt-2">
                      {selectedProject.details[activeLocale]}
                    </p>
                  </div>

                  <div className="mt-6 bg-[#F6F6F6] p-4 border-l-4 border-black text-xs font-semibold text-gray-600 flex items-center gap-3">
                    <Layers size={18} className="text-[#FFCC29] shrink-0" />
                    <span>
                      {activeLocale === "fr" 
                        ? "Les profilés utilisés répondent aux spécifications standard de galvanisation à haute résistance." 
                        : "Profiles used meet high-tensile galvanization standard specs."}
                    </span>
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