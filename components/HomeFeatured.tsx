import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const PROJECTS = [
  {
    title: "Doula Office Complex",
    image: "/images/doula.png",
    desc: "We were entrusted with the interior partition and ceiling systems for a commercial office complex...",
  },
  {
    title: "Libreville Residential Development (Gabon)",
    image: "/images/libreville.png",
    desc: "For a high-end residential development in Libreville, we provided complete drywall profile...",
  },
  {
    title: "Bangui Education Facility (Central African Republic)",
    image: "/images/bangui.png",
    desc: "In Bangui, we delivered cost-effective drywall profile solutions for an educational facility...",
  },
  {
    title: "Malabo Hotel (Equatorial Guinea)",
    image: "/images/malabo.png",
    desc: "For a large hospitality project in Malabo, we supplied and supported the installation of...",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-600 py-20 px-4 md:px-0 relative overflow-hidden">
        {/* Decorative Background Pattern (Optional overlay) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none grayscale">
            <Image src="/images/HomeBg.png" alt="pattern" fill className="object-cover" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-xl font-bold uppercase tracking-widest mb-12 text-white drop-shadow-md">
          Featured Projects
        </h2>

        {/* Main Light Gray Container */}
        <div className="bg-[#e9e9e9] p-8 md:p-12 shadow-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Project Title */}
                <h3 className="font-bold text-[13px] md:text-sm text-gray-900 mb-4 h-10 flex items-center justify-center">
                  {project.title}
                </h3>

                {/* Project Image */}
                <div className="relative aspect-square w-full mb-6 overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Description */}
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6 px-2 line-clamp-3">
                  {project.desc}
                </p>

                {/* "See more" Button */}
                <button className="flex items-center gap-2 bg-[#FFCC29] hover:bg-[#e6b825] text-black text-[11px] font-bold py-2 px-4 rounded-md shadow-sm transition-colors">
                  See more <ChevronDown size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Global Action Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#FFCC29] hover:bg-[#e6b825] text-black font-extrabold py-4 px-12 rounded-xl shadow-lg border-2 border-black/5 transition-all text-sm  tracking-wide">
            Explore our Projects
          </button>
        </div>
      </div>
    </section>
  );
}