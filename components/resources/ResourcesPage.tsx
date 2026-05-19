"use client";
import  { useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResourceType {
  id: string;
  title: string;
  category: "Catalogues" | "Technical Data" | "Certificates" | "Guides";
  description: string;
  date: string;
  fileSize: string;
}

const DOWNLOADABLE_RESOURCES: ResourceType[] = [
  {
    id: "res-1",
    title: "Main Product Technical Catalogue 2026",
    category: "Catalogues",
    description: "Complete dimension sheets, profile load charts, and structural cross-sections for UW, CW, L, and F profiles.",
    date: "Updated Jan 2026",
    fileSize: "14.2 MB"
  },
  {
    id: "res-2",
    title: "Drywall Partition Installation Manual",
    category: "Guides",
    description: "Step-by-step framework configuration, stud alignment parameters, and screw spacing guidelines for commercial framing compliance.",
    date: "Mar 2025",
    fileSize: "6.8 MB"
  },
  {
    id: "res-3",
    title: "Galvanized Steel Material Safety Data Sheet (MSDS)",
    category: "Technical Data",
    description: "Official chemical composition breakdown, hot-dip zinc coating specifications, and environmental tolerance safety certifications.",
    date: "Feb 2026",
    fileSize: "3.1 MB"
  },
  {
    id: "res-4",
    title: "ISO 9001:2015 Manufacturing Quality Compliance Certificate",
    category: "Certificates",
    description: "Official factory audit documentation verifying international standards for our roll-forming production lines in Douala.",
    date: "Nov 2025",
    fileSize: "1.9 MB"
  },
  {
    id: "res-5",
    title: "Ceiling System Load Bearing Capacity Charts",
    category: "Technical Data",
    description: "Engineering matrices calculating deflection limits and weight capacities for suspended F-profile frameworks.",
    date: "May 2025",
    fileSize: "4.5 MB"
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Catalogues", "Technical Data", "Certificates", "Guides"];

  const filteredResources = DOWNLOADABLE_RESOURCES.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* HERO BANNER */}
      <div className="bg-[#2B2B2B] text-white py-20 px-6 border-b-4 border-[#FFCC29]">
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FFCC29] block mb-3">
            Technical Submittals
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Technical <span className="text-[#FFCC29]">Resources</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl font-medium leading-relaxed">
            Access and download structural data sheets, architectural design assets, compliance records, and configuration manuals for submittal approvals.
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
                {cat === "All" ? "All Documents" : cat}
              </button>
            ))}
          </div>

          {/* Search Input Container */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search documentation files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-gray-200 px-4 py-2.5 pl-10 text-sm font-medium focus:outline-none focus:border-black transition-colors rounded-none"
            />
            <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* FILES DOCUMENT MATRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
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
                    <span className="text-[11px] font-bold text-gray-400 uppercase">
                      {item.date}
                    </span>
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
                    PDF FORM / {item.fileSize}
                  </span>
                  <button className="flex items-center gap-2 bg-black text-[#FFCC29] px-5 py-3 font-bold text-xs uppercase tracking-wider border border-black hover:bg-[#FFCC29] hover:text-black transition-colors shadow-sm">
                    <Download size={14} />
                    Download File
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Specification Results Fallback */}
        {filteredResources.length === 0 && (
          <div className="text-center py-24 border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">
              No technical documentation matching search parameters found.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}