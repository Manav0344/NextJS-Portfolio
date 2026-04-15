import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: ["192.168.1.36"], // 👈 ADD THIS
};

export default nextConfig;