import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://host.docker.internal:8000/api/:path*/'
      },
    ]
  },
};
