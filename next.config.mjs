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
    // Use the custom loader (which prepends basePath) only for the GitHub Pages build.
    // Without a basePath there is nothing to prepend, so unoptimized is simpler and avoids
    // webpack issues with the loaderFile in dev mode.
    ...(basePath
      ? { loader: 'custom', loaderFile: './src/lib/image-loader.ts' }
      : { unoptimized: true }
    ),
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
