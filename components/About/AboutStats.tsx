export default function StatsBar() {
  const stats = [
    { num: "500+", label: "Projects Delivered" },
    { num: "0.7mm", label: "Precision Standards" },
    { num: "4+", label: "Active Countries" },
    { num: "100%", label: "Quality Compliant" },
  ];

  return (
    <div className="bg-[#2B2B2B] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center border-r border-white/10 last:border-0">
              <div className="text-3xl md:text-5xl font-black text-[#FFCC29] mb-1">{stat.num}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}