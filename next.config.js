/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Allow cross-origin requests for Replit development
  allowedDevOrigins: ['*'],
}

module.exports = nextConfig