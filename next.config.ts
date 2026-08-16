import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muvment-prod.s3.eu-west-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
