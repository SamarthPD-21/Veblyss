import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.builder.io",
      "pngtree.com",
      "cdn-icons-png.flaticon.com",
    ],
    // disable Next.js Image Optimization API to allow static export (output: 'export')
    unoptimized: true,
  },
  output: "export", 
};

export default nextConfig;
