import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/800/600")],
  },
  allowedDevOrigins: ["192.168.1.22"],
};

export default nextConfig;
