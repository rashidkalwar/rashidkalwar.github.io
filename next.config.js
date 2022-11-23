/** @type {import('next').NextConfig} */
const repo = "portfolio";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
