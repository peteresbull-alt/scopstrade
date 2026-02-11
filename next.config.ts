import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Only proxy in production — local dev calls backend directly
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/api/:path*",
        destination: "https://scoptrade-backend.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
