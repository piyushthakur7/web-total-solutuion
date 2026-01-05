/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // Recommended for static exports or if you encounter issues with Vercel's image optimization quota
  },
  // Allow cross-origin requests for Replit development
  allowedDevOrigins: ['*'],
}

module.exports = nextConfig