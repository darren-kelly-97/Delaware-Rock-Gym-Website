import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Empty in production; set to "/<repo-name>" by the GitHub Pages workflow for the client preview.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
