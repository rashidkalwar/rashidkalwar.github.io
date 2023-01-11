/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["images.unsplash.com"],
  },
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
