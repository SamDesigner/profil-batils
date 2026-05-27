import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // 💡 Add this line right here
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;