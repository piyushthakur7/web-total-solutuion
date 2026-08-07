/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern formats first — cuts image weight significantly on mobile.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      // Portfolio screenshots and technology logos rendered via next/image.
      { protocol: 'https', hostname: 'api.microlink.io' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'www.vectorlogo.zone' },
    ],
  },
  // Keeps lucide-react and motion from pulling their full barrel into each page.
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
