import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    instantNavigationDevToolsToggle: false,
    ppr: false,
  },
};

export default nextConfig;