/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static export
  basePath: "/travel-camp", // replace with your repo name
  images: {
    unoptimized: true, // required because Next.js image optimization doesn’t work on static hosting
  },
};

module.exports = nextConfig;
