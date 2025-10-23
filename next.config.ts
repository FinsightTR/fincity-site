// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Next/Image optimizer kapalı
  },
};

export default nextConfig;
