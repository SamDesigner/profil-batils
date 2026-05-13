"use client";
import React, { useState } from "react";
import Image from "next/image";

const ABOUT_DATA = {
  profile: {
    title: "Bati Profils Ltd.",
    description: `Bati Profils is a modern manufacturing company specializing in drywall profile systems. With advanced production technology and a skilled team, we deliver high-quality, durable, and cost-effective solutions tailored to the construction industry. Based in Douala, we are committed to serving Cameroon and the wider Central African market with reliable and innovative building systems.`,
  },
  gallery: { title: "Factory Gallery", description: "Explore our state-of-the-art production facility and advanced machinery." },
  certifications: { title: "Our Certifications", description: "Our commitment to quality is backed by international industry standards." }
};

const FEATURES = [
  { icon: "🌍", label: "Fast delivery across Africa", color: "bg-[#FFF9E5]" },
  { icon: "🤝", label: "5000+ Satisfied Customers", color: "bg-[#FFF9E5]" },
  { icon: "⏰", label: "20+ years Industry Experience", color: "bg-[#FFCC29]" },
  { icon: "👷", label: "100+ Employee Count", color: "bg-[#FFF9E5]" },
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold uppercase tracking-widest mb-16 text-gray-900">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/images/engineer.png" // Replace with your actual path
                alt="Factory Worker"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Content: Tabs & Text */}
          <div className="w-full lg:w-5/12 flex flex-col">
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-300 mb-8 relative">
              {["profile", "factory gallery", "certifications"].map((tab) => {
                const key = tab === "factory gallery" ? "gallery" : tab === "profile" ? "profile" : "certifications";
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-3 px-2 text-sm font-semibold transition-all duration-300 capitalize ${
                      isActive ? "bg-[#FFCC29] shadow-[4px_-4px_10px_rgba(0,0,0,0.1)] rounded-t-lg text-black z-10" : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[250px]">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {ABOUT_DATA[activeTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {ABOUT_DATA[activeTab].description}
              </p>
            </div>

            <button className="mt-8 bg-[#262626] text-white py-3 px-8 w-fit rounded-sm font-semibold hover:bg-black transition-colors">
              Learn more about us
            </button>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="w-full lg:w-3/12 flex flex-col gap-1">
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx} 
                className={`${feature.color} p-6 flex flex-col items-center justify-center text-center group transition-transform hover:scale-[1.02]`}
              >
                <div className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all">
                  {feature.icon}
                </div>
                <p className="text-[11px] font-bold uppercase leading-tight text-gray-800">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}