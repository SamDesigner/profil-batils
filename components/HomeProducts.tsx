"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// 1. Updated the interface to match your actual data keys
interface Product {
  name: string;
  src: string;
}

interface ProductCardProps {
  product: Product;
}

const products: Product[] = [
  { name: "UW Profile", src: "/images/UwProfile.png" },
  { name: "CW Profile", src: "/images/CwProfile.png" },
  { name: "L-Angle Profile", src: "/images/LAngle.png" },
  { name: "F Profile", src: "/images/FProfile.png" },
];

export default function HotProducts() {
  const { t } = useLanguage();
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);

  return (
    <section className="bg-white py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12"> {/* Changed to max-w-7xl for consistency with your other sections */}
        
        {/* FIRST ROW OF CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {firstRow.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* MIDDLE TITLE DIVIDER */}
        <div className="flex items-center justify-center gap-6 py-4">
          <div className="flex flex-col gap-1 flex-1 max-w-[250px]">
            <div className="h-[1px] bg-yellow-400 w-full" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight whitespace-nowrap uppercase">
            {t('products.title')}
          </h2>
          
          <div className="flex flex-col gap-1 flex-1 max-w-[250px]">
            <div className="h-[1px] bg-yellow-400 w-full" />
          </div>
        </div>

        {/* SECOND ROW OF CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {secondRow.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative bg-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] group overflow-hidden">
      <div className="relative aspect-video w-full">
        <Image
          src={product.src}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="w-[92%] bg-white/40 backdrop-blur-sm py-2.5 shadow-sm border border-white/40">
          <p className="text-center text-gray-800 font-bold text-sm md:text-base tracking-wide">
            {product.name}
          </p>
        </div>
      </div>
    </div>
  );
}