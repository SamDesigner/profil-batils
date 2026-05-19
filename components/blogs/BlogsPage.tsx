"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Search, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogType {
  id: string;
  title: string;
  excerpt: string;
  category: "Industry News" | "Technical" | "Case Study";
  date: string;
  author: string;
  image: string;
  slug: string;
}

const BLOGS_DATA: BlogType[] = [
  {
    id: "post-1",
    title: "Optimizing Acoustic Ratings in Drywall Frameworks",
    excerpt: "An engineering analysis of sound transmission class (STC) adjustments using varying stud gauges and air gaps in industrial partitions.",
    category: "Technical",
    date: "May 14, 2026",
    author: "Technical Director",
    image: "/images/testimonyOne.png",
    slug: "optimizing-acoustic-ratings"
  },
  {
    id: "post-2",
    title: "Corrosion Resistance Standards in Coastal Zones",
    excerpt: "Why hot-dip zinc galvanization thickness matters for infrastructure longevity within demanding coastal environments like Douala.",
    category: "Technical",
    date: "Apr 28, 2026",
    author: "Materials Engineer",
    image: "/images/testimonyTwo.png",
    slug: "corrosion-resistance-coastal"
  },
  {
    id: "post-3",
    title: "Bati Profils Expands Distribution Hubs Across Gabon",
    excerpt: "Strategic logistics routing updates enabling faster submittal turnarounds and onsite deliveries for major Libreville infrastructure projects.",
    category: "Industry News",
    date: "Mar 15, 2026",
    author: "Supply Chain Head",
    image: "/images/testimonyThree.png",
    slug: "distribution-expansion-gabon"
  }
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Technical", "Industry News", "Case Study"];

  const filteredBlogs = BLOGS_DATA.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* HERO BANNER */}
      <div className="bg-[#2B2B2B] text-white py-20 px-6 border-b-4 border-[#FFCC29]">
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FFCC29] block mb-3">
            Company Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Our <span className="text-[#FFCC29]">Blogs</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl font-medium leading-relaxed">
            Stay informed with construction breakthroughs, steel manufacturing analysis, and official company announcements from Bati Profils.
          </p>
        </div>
      </div>

      {/* CONTROL BAR */}
      <div className="bg-[#F6F6F6] border-b border-gray-200 py-6 px-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          {/* Categories Tab Bar */}
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
                {cat === "All" ? "All Posts" : cat}
              </button>
            ))}
          </div>

          {/* Search Query Input */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search articles & highlights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-gray-200 px-4 py-2.5 pl-10 text-sm font-medium focus:outline-none focus:border-black transition-colors rounded-none"
            />
            <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* BLOGS LAYOUT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((post) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                key={post.id}
                className="bg-white border-2 border-black flex flex-col justify-between group shadow-sm hover:shadow-[8px_8px_0px_rgba(43,43,43,1)] transition-all duration-300"
              >
                <div>
                  {/* Media Content Holder */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 border-b-2 border-black">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Category Overlay Label */}
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20">
                      {post.category}
                    </div>
                  </div>

                  {/* Narrative Block Info Container */}
                  <div className="p-6">
                    {/* Article Post Meta Details */}
                    <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-wide mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#FFCC29]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={13} className="text-[#FFCC29]" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4 leading-tight group-hover:text-[#FFCC29] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 font-medium leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Navigation Button Footer Element */}
                <div className="p-6 pt-0">
                  <a
                    href={`/blogs/${post.slug}`}
                    className="w-full flex items-center justify-between bg-gray-50 hover:bg-black group-hover:bg-[#FFCC29] text-black p-4 border border-black transition-all font-bold text-xs uppercase tracking-wider text-center"
                  >
                    <span>Read Full Brief</span>
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search Fallback */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-24 border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">
              No matching articles found within parameters.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}