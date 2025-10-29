import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Build sırasında lint hatalarını tamamen yok say
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript hataları yine dursun
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
