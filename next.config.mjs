// Set NEXT_PUBLIC_BASE_PATH=/Hasselquist when deploying as a GitHub Pages project site.
// Leave it empty (or unset) when a custom domain is configured — the subdirectory disappears.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// GitHub Pages requires a fully-static export with a custom image loader.
// Netlify (no basePath) runs as SSR via @netlify/plugin-nextjs — no static export needed,
// and Next.js image optimisation works normally through Netlify's Image CDN.
const isGitHubPages = !!basePath

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGitHubPages ? { output: 'export' } : {}),
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  trailingSlash: false,
  basePath,
  assetPrefix: basePath || undefined,
  poweredByHeader: false,
  compress: true,
  images: {
    ...(isGitHubPages
      ? { loader: 'custom', loaderFile: './src/lib/image-loader.ts' }
      : {}
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
