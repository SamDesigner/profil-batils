import Image from "next/image";

export default function RegionalReach() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/doala.jpg" // Or a shot of a major project in Gabon/CAR
              alt="Regional Reach" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 bg-[#FFCC29] p-6 font-black uppercase text-xl">
              Dominating the <br /> CEMAC Region
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none">From Douala to <br /> the <span className="text-[#FFCC29]">Continent.</span></h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Established in 2015, Bati Profils identified a gap in the Central African market for high-standard drywall components. Today, we bridge that gap by operating one of the most technologically advanced roll-forming facilities in Cameroon.
          </p>
          <p className="text-gray-600 text-lg">
            Our logistics network ensures that whether you are building a commercial hub in Libreville or an educational facility in Bangui, our profiles arrive on time, every time.
          </p>
          <div className="pt-4">
            <button className="bg-black text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#FFCC29] hover:text-black transition-all">
              Request Company Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}