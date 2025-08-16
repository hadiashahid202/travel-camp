// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // static export for GitHub Pages
  basePath: isProd ? "/travel-camp" : "",
  assetPrefix: isProd ? "/travel-camp/" : "",
  images: { unoptimized: true }, // required if you use next/image on GH Pages
  // optional but often helpful on GH Pages:
  // trailingSlash: true,
};

export default nextConfig;
