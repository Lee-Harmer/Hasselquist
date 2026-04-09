interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  // External URLs pass through unchanged
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src
  }
  return `${basePath}${src}`
}
