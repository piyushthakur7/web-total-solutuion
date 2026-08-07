/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern formats first — cuts image weight significantly on mobile.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Next 16 only honours quality values declared here; anything else silently
    // falls back to 75, so every value used in the components must be listed.
    qualities: [55, 60, 65, 70, 75],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      // Portfolio screenshots now live in InsForge Storage rather than being
      // hotlinked from microlink, so next/image can resize and re-encode them.
      { protocol: 'https', hostname: 'w3jcfq68.ap-southeast.insforge.app' },
      // Technology logos rendered via next/image.
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'www.vectorlogo.zone' },
    ],
  },
  experimental: {
    // Keeps lucide-react and motion from pulling their full barrel into each page.
    optimizePackageImports: ['lucide-react', 'motion'],
    // Inlines the stylesheet instead of a blocking <link>, which was costing
    // ~174ms of render-blocking time before first paint.
    inlineCss: true,
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
