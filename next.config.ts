/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // required for static HTML
  basePath: "/travel-camp", // 👈 must match your repo name
  assetPrefix: "/travel-camp/",
  images: {
    unoptimized: true, // required for GitHub Pages
  },
};

module.exports = nextConfig;
