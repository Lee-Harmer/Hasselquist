'use client'

import { useEffect, useRef } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  poster?: string
}

export default function LazyVideo({ src, className, poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.src = src
          el.play().catch(() => {})
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className={className}
    />
  )
}
