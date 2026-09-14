import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/800/600")],
  },
};

export default nextConfig;
