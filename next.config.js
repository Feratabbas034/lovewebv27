/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["placeholder.svg"],
  },
  assetPrefix: "",
  basePath: "",
  // output: "export", // ❌ bunu kaldırdık çünkü API route'larla çakışıyor
  distDir: ".next", // ✅ SSR build klasörü
};

module.exports = nextConfig;
