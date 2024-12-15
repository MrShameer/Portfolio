/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repoName = "Portfolio"; // Replace with your GitHub repository name

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: isProd ? `/${repoName}/` : "", // Prefix all assets with the repo name for GitHub Pages
  basePath: isProd ? `/${repoName}` : "", // Add the repo name as the base path
  trailingSlash: true, // Ensure trailing slashes for static export compatibility
  output: "export", // Enable static export
};

export default nextConfig;
