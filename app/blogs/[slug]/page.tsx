import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

interface BlogType {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const BLOGS_DATA: Record<string, BlogType> = {
  "optimizing-acoustic-ratings": {
    id: "post-1",
    title: "Optimizing Acoustic Ratings in Drywall Frameworks",
    category: "Technical",
    date: "May 14, 2026",
    author: "Technical Director",
    image: "/images/testimonyOne.png",
    slug: "optimizing-acoustic-ratings",
    content: "When engineering modern commercial partitions, managing Sound Transmission Class (STC) ratings hinges directly on the configuration of the internal steel framework. Standard practice often defaults to adding multiple layers of gypsum board, but optimizing the steel stud layout yields superior performance at a lower material cost. Utilizing thinner-gauge steel studs (such as 0.50mm) allows the metal to remain flexible enough to absorb acoustic energy rather than transmitting it. Additionally, increasing the air cavity width between studs from 48mm to 70mm, and introducing staggered stud layouts on shared tracks, breaks the structural path of sound waves completely. This structural separation, paired with precise insulation placement, significantly increases structural dampening without over-loading wall profiles."
  },
  "corrosion-resistance-coastal": {
    id: "post-2",
    title: "Corrosion Resistance Standards in Coastal Zones",
    category: "Technical",
    date: "Apr 28, 2026",
    author: "Materials Engineer",
    image: "/images/testimonyTwo.png",
    slug: "corrosion-resistance-coastal",
    content: "In high-humidity, marine environments like Douala or Libreville, atmospheric salt concentrations rapidly accelerate the oxidation of standard structural framing. For interior drywall profiles, standard light zinc coatings can degrade pre-maturely if exposed to continuous coastal air circulation during construction phases. Bati Profils structural lines counter this by utilizing hot-dip zinc coating layers engineered to resist micro-climate moisture pockets. The molecular bond formed during our roll-forming process ensures that even if minor surface scratches occur during installation, the surrounding zinc acts as a sacrificial anode, self-healing the exposed steel base and blocking the migration of deep rust channels down the metal frame."
  },
  "distribution-expansion-gabon": {
    id: "post-3",
    title: "Bati Profils Expands Distribution Hubs Across Gabon",
    category: "Industry News",
    date: "Mar 15, 2026",
    author: "Supply Chain Head",
    image: "/images/testimonyThree.png",
    slug: "distribution-expansion-gabon",
    content: "To support the growing pace of infrastructure development across Central Africa, Bati Profils has finalized strategic logistic upgrades extending our direct pipeline into Gabon. By localizing fulfillment caches within major urban sectors, development partners can significantly reduce lead times for custom submittals from weeks down to mere days. This expansion ensures that large-scale ceiling profiles, track segments, and specialized framing accessories are continuously available on-demand, minimizing onsite downtime and ensuring large-scale structural projects maintain tight timeline compliance."
  }
};

// 1. Marked the component function as async
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the incoming params to unwrap the slug string safely
  const resolvedParams = await params;
  const post = BLOGS_DATA[resolvedParams.slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
        <h2 className="text-xl font-black uppercase text-gray-900 mb-4">Article Not Found</h2>
        <Link href="/blogs" className="text-sm font-bold uppercase tracking-wider bg-black text-[#FFCC29] px-6 py-3 border border-black">
          Back to Blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* HEADER META STRIP */}
      <div className="border-b border-gray-200 py-6 px-6 bg-[#F6F6F6]">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <Link href="/blogs" className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-600 hover:text-black transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Articles</span>
          </Link>
          <span className="text-[10px] bg-black text-[#FFCC29] px-3 py-1 font-black uppercase tracking-widest border border-black">
            {post.category} Data
          </span>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <article className="max-w-4xl mx-auto px-6 mt-12">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-[1.1] mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-6 items-center text-gray-400 text-xs font-bold uppercase border-b border-gray-100 pb-6 mb-8">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#FFCC29]" />
            <span className="text-gray-600">{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-[#FFCC29]" />
            <span className="text-gray-600">Written By {post.author}</span>
          </div>
        </div>

        {/* FEATURED MEDIA FRAME */}
        <div className="relative aspect-21/9 w-full border-2 border-black mb-10 overflow-hidden bg-gray-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* MAIN BODY COPY */}
        <div className="prose prose-neutral max-w-none">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium font-sans whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* BOTTOM STRUCTURAL CALLOUT */}
        <div className="mt-12 bg-[#FFFDF3] border-2 border-black p-6 flex items-start gap-4">
          <ShieldCheck size={24} className="text-[#FFCC29] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-gray-900 mb-1">Technical Quality Verified</h4>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              The specifications detailed in this publication adhere directly to hot-dip galvanized metallurgical performance frameworks monitored by Bati Profils lab units.
            </p>
          </div>
        </div>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(BLOGS_DATA).map((slug) => ({
    slug: slug,
  }));
}