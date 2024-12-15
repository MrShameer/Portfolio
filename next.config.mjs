/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repoName = "Portfolio"; // Replace with your GitHub repository name

const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
