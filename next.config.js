/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  basePath: "",
  distDir: "out",
}

module.exports = nextConfig
