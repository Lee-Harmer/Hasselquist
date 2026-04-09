// Set NEXT_PUBLIC_BASE_PATH=/Hasselquist when deploying as a GitHub Pages project site.
// Leave it empty (or unset) when a custom domain is configured — the subdirectory disappears.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  basePath,
  assetPrefix: basePath || undefined,
  poweredByHeader: false,
  compress: true,
  images: {
    // Image optimisation is a server feature; unoptimized is required for static export
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
