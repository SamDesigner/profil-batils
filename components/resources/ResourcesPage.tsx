"use client";
import { useState, useRef, useEffect } from "react";
import { Download, FileText, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResourceType {
  id: string;
  lang: string;
  title: string;
  category: "Catalogues" | "Technical Data" | "Certificates" | "Guides";
  description: string;
  date: string;
  fileSize: string;
  fileType: string;
  fileUrl: string;
}

const DOWNLOADABLE_RESOURCES: ResourceType[] = [
  {
    id: "res-1",
    lang: "en",
    title: "CW 46.5mm Drywall Stud Profile Specifications",
    category: "Technical Data",
    description: "Complete dimension sheets, material gauge metrics, and structural load-bearing parameters for the 46.5mm hot-dip galvanized steel drywall stud system.",
    date: "Updated May 2026",
    fileSize: "936 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/baten/EN-7.png"
  },
  {
    id: "res-1.1",
    lang: "fr",
    title: "Profilé Montant Drywall CW 46,5mm",
    category: "Technical Data",
    description: "Fiche technique complète, caractéristiques d'épaisseur du métal et paramètres de charge structurelle pour le système d'ossature de cloison en acier galvanisé de 46,5mm.",
    date: "Mis à jour Mai 2026",
    fileSize: "936 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/batfr/FR-7.png"
  },
  {
    id: "res-2",
    lang: "en",
    title: "What is a Drywall Profile?",
    category: "Guides",
    description: "An introductory guide explaining the fundamentals of lightweight steel profiles, framing terminology, and structural components used in modern drywall partition and ceiling installations.",
    date: "Updated May 2026",
    fileSize: "1.84 MB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/baten/EN-5.png"
  },
  {
    id: "res-2.1",
    lang: "fr",
    title: "Qu'est-ce qu'un Profilé Drywall ?",
    category: "Guides",
    description: "Un guide d'introduction expliquant les principes fondamentaux des profilés en acier léger, la terminologie de l'ossature et les composants structurels utilisés dans les installations modernes de cloisons et plafonds.",
    date: "Mis à jour Mai 2026",
    fileSize: "1.84 MO",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/batfr/FR-5.png"
  },
  {
    id: "res-3",
    lang: "en",
    title: "About Bati Profils",
    category: "Guides",
    description: "A comprehensive corporate profile detailing our manufacturing capabilities, raw material standards, and structural roll-forming solutions across the Central African industrial sector.",
    date: "Updated May 2026",
    fileSize: "838 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/baten/EN-4.png"
  },
  {
    id: "res-3.1",
    lang: "fr",
    title: "À Propos de Bati Profils",
    category: "Guides",
    description: "Un profil d'entreprise complet détaillant nos capacités de production, nos normes de matières premières et nos solutions de profilage d'acier au sein du secteur industriel d'Afrique Centrale.",
    date: "Mis à jour Mai 2026",
    fileSize: "838 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/batfr/FR-4.png"
  },
  {
    id: "res-4",
    lang: "en",
    title: "L 25mm Drywall Angle Profile",
    category: "Technical Data",
    description: "Engineering metrics and structural alignment parameters for the 25mm L-angle profile, primarily utilized for perimeter ceiling tracks and wall intersections.",
    date: "Updated May 2026",
    fileSize: "1.81 MB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/baten/EN-8.png"
  },
  {
    id: "res-4.1",
    lang: "fr",
    title: "Cornière en L 25mm pour Drywall",
    category: "Technical Data",
    description: "Caractéristiques d'ingénierie et paramètres d'alignement pour la cornière en L de 25mm, principalement utilisée pour les lisses de plafond périmétriques et les intersections de murs.",
    date: "Mis à jour Mai 2026",
    fileSize: "1.81 MO",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/batfr/FR-8.png"
  },
  {
    id: "res-5",
    lang: "en",
    title: "F 47mm Drywall Profile",
    category: "Technical Data",
    description: "Load capacity matrices and structural dimensions for the 47mm F-channel profile, engineered for high-stability suspended ceiling frameworks and screw-fix applications.",
    date: "Updated May 2026",
    fileSize: "818 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/baten/EN-9.png"
  },
  {
    id: "res-5.1",
    lang: "fr",
    title: "Fourrure F 47mm pour Plafond Drywall",
    category: "Technical Data",
    description: "Matrices de capacité de charge et dimensions structurelles pour la fourrure en F de 47mm, conçue pour les structures de plafonds suspendus à haute stabilité et les applications vissées.",
    date: "Mis à jour Mai 2026",
    fileSize: "818 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/batfr/EN-9.png"
  },
  {
    id: "res-6",
    lang: "en",
    title: "UW 48mm Partition Wall Track",
    category: "Technical Data",
    description: "Floor and ceiling runner track specification sheet for the 48mm system, designed as the secure structural base to anchor CW studs in commercial partition framing.",
    date: "Updated May 2026",
    fileSize: "949 KB",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/baten/EN-6.png"
  },
  {
    id: "res-6.1",
    lang: "fr",
    title: "Profilé Rail UW 48mm pour Cloison",
    category: "Technical Data",
    description: "Fiche technique des rails horizontaux de sol et de plafond pour le système de 48mm, servant de base structurelle pour l'ancrage des montants CW dans les cloisons sèches.",
    date: "Mis à jour Mai 2026",
    fileSize: "949 KB ",
    fileType: "IMAGE FILE",
    fileUrl: "/documents/batfr/EN-6.png"
  },
  {
    id: "res-7",
    lang: "en",
    title: "Bati Profils Corporate Profile & Product Catalogue",
    category: "Catalogues",
    description: "The complete commercial and technical catalogue detailing our full product line, structural profile dimensions, raw material certifications, and custom manufacturing solutions.",
    date: "Updated May 2026",
    fileSize: "982 KB",
    fileType: "PDF",
    fileUrl: "/documents/baten/Bati_Profils_Corporate_Catalogue_EN.pdf"
  },
  {
    id: "res-7.1",
    lang: "fr",
    title: "Profil d'Entreprise et Catalogue de Produits Bati Profils",
    category: "Catalogues",
    description: "Le catalogue commercial et technique complet détaillant notre gamme de produits, les dimensions des profilés, nos certifications de matières premières et nos solutions de fabrication sur mesure.",
    date: "Mis à jour Mai 2026",
    fileSize: "982 KB",
    fileType: "PDF",
    fileUrl: "/documents/baten/Bati_Profils_Catalogue_Corporate_FR.pdf"
  },
];

type LangType = "all" | "en" | "fr";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentLang, setCurrentLang] = useState<LangType>("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Catalogues", "Technical Data", "Certificates", "Guides"];
  const languages: { value: LangType; label: string }[] = [
    { value: "all", label: "ALL" },
    { value: "en", label: "EN" },
    { value: "fr", label: "FR" },
  ];

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResources = DOWNLOADABLE_RESOURCES.filter((item) => {
    const matchesLanguage = currentLang === "all" || item.lang === currentLang;
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLanguage && matchesCategory && matchesSearch;
  });

  const activeLangLabel = languages.find((l) => l.value === currentLang)?.label || "ALL";

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* HERO BANNER */}
      <div className="bg-[#2B2B2B] text-white py-20 px-6 border-b-4 border-[#FFCC29]">
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FFCC29] block mb-3">
            {currentLang === "fr" ? "Soumissions Techniques" : "Technical Submittals"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {currentLang === "fr" ? (
              <>Ressources <span className="text-[#FFCC29]">Techniques</span></>
            ) : (
              <>Technical <span className="text-[#FFCC29]">Resources</span></>
            )}
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl font-medium leading-relaxed">
            {currentLang === "fr" 
              ? "Accédez et téléchargez les fiches techniques structurelles, les documentations de conception, les registres de conformité et les manuels de configuration."
              : "Access and download structural data sheets, architectural design assets, compliance records, and configuration manuals for submittal approvals."}
          </p>
        </div>
      </div>

      {/* UTILITY CONTROL BAR */}
      <div className="bg-[#F6F6F6] border-b border-gray-200 py-6 px-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6 justify-between items-center">

          {/* Filter Categories */}
          <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border-2 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-black text-[#FFCC29] border-black shadow-[4px_4px_0px_rgba(255,204,41,1)]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-black hover:text-black"
                }`}
              >
                {cat === "All" ? (currentLang === "fr" ? "Tous les Documents" : "All Documents") : cat}
              </button>
            ))}
          </div>

          {/* Right Controls: Dropdown Language Selector + Search */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
            
            {/* Custom Dropdown Container */}
            <div className="relative w-full sm:w-32 ref={dropdownRef}">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between bg-white border-2 border-black px-4 py-2.5 text-xs font-black tracking-wider transition-all hover:bg-[#FFFDF3] active:translate-y-0.5"
              >
                <span>{activeLangLabel}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-1 bg-white border-2 border-black z-50 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.value}
                        onClick={() => {
                          setCurrentLang(lang.value);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-black tracking-wider transition-colors border-b border-gray-100 last:border-none ${
                          currentLang === lang.value 
                            ? "bg-black text-[#FFCC29]" 
                            : "text-gray-700 hover:bg-[#FFCC29] hover:text-black"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Input Container */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder={currentLang === "fr" ? "Rechercher des documents..." : "Search documentation files..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-gray-200 px-4 py-2.5 pl-10 text-sm font-medium focus:outline-none focus:border-black transition-colors rounded-none"
              />
              <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

        </div>
      </div>

      {/* FILES DOCUMENT MATRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => {
              const isPdf = item.fileType.toUpperCase() === "PDF";
              const fileExtension = isPdf ? "pdf" : "png";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  key={item.id}
                  className="border-2 border-black p-6 md:p-8 flex flex-col justify-between bg-white hover:bg-[#FFFDF3] hover:shadow-[6px_6px_0px_rgba(43,43,43,1)] transition-all duration-200"
                >
                  <div>
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-black text-[#FFCC29] px-2.5 py-1 border border-black">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase bg-gray-200 px-1.5 py-0.5 text-gray-700">
                          {item.lang}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400 uppercase">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Title and Icon Anchor */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 shrink-0 bg-gray-100 text-black border border-gray-200">
                        <FileText size={22} />
                      </div>
                      <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-gray-900 leading-snug">
                        {item.title}
                      </h2>
                    </div>

                    {/* Document Parameters Context */}
                    <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 pl-0 md:pl-14">
                      {item.description}
                    </p>
                  </div>

                  {/* Submittal Action Bar */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between pl-0 md:pl-14">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-wider">
                      {item.fileType} / {item.fileSize}
                    </span>

                    {/* NATIVE LINK INTERFACE SEGMENT */}
                    <a
                      href={item.fileUrl}
                      download={`${item.title.replace(/\s+/g, "_")}.${fileExtension}`}
                      className="flex items-center gap-2 bg-black text-[#FFCC29] px-5 py-3 font-bold text-xs uppercase tracking-wider border border-black hover:bg-[#FFCC29] hover:text-black transition-colors shadow-sm cursor-pointer"
                    >
                      <Download size={14} />
                      {item.lang === "fr" ? "Télécharger l'élément" : "Download Asset"}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty Specification Results Fallback */}
        {filteredResources.length === 0 && (
          <div className="text-center py-24 border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">
              {currentLang === "fr" 
                ? "Aucune documentation technique ne correspond aux paramètres de recherche."
                : "No technical documentation matching search parameters found."}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}