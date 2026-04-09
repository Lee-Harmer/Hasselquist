'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface HeroProps {
  headline: string
  subheadline?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  imageSrc: string
  imageAlt: string
  videoSrc?: string | string[]
  eyebrow?: string
  overlay?: 'dark' | 'medium' | 'light'
}

export default function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Get a Free Quote', href: '/contact' },
  ctaSecondary,
  imageSrc,
  videoSrc,
  eyebrow,
}: HeroProps) {
  const videos = Array.isArray(videoSrc) ? videoSrc : videoSrc ? [videoSrc] : []
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // When the active video ends, crossfade to the next one
  useEffect(() => {
    const el = videoRef.current
    if (!el || videos.length <= 1) return
    const handleEnded = () => {
      setActiveIndex((i) => (i + 1) % videos.length)
    }
    el.addEventListener('ended', handleEnded)
    return () => el.removeEventListener('ended', handleEnded)
  }, [activeIndex, videos.length])

  // Play from start whenever the active clip changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [activeIndex])

  return (
    <section
      aria-label={headline}
      className="relative h-screen min-h-[640px] max-h-[960px] flex items-center overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {videos.length > 0 ? (
          <AnimatePresence>
            <motion.video
              key={activeIndex}
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload={activeIndex === 0 ? 'metadata' : 'none'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src={videos[activeIndex]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
        ) : (
          <Image src={imageSrc} alt="" fill priority fetchPriority="high" sizes="100vw" className="object-cover object-center" />
        )}

        {/* Minimal overlay — bottom fade only for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial w-full pb-16">
        <div className="max-w-3xl">

          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold/90 mb-7"
            >
              {eyebrow}
            </motion.p>
          )}

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-12 h-px bg-gold mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light italic text-cream leading-[1.05] text-[clamp(2.8rem,6.5vw,5.5rem)] mb-7 text-balance"
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-sans text-[clamp(0.95rem,1.8vw,1.1rem)] text-cream/65 font-light leading-relaxed mb-12 max-w-lg"
            >
              {subheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.75rem] uppercase tracking-[0.12em] px-9 py-4 transition-all duration-300 hover:gap-4"
            >
              {ctaPrimary.label}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 text-cream/70 hover:text-gold font-sans text-[0.75rem] uppercase tracking-[0.12em] transition-all duration-300 border-b border-cream/25 hover:border-gold pb-0.5 hover:gap-3"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Video indicators */}
      {videos.length > 1 && (
        <div className="absolute bottom-10 right-10 flex gap-3 z-10" aria-label="Video controls" role="group">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full`}
              aria-label={`Play video ${i + 1}${i === activeIndex ? ' (current)' : ''}`}
              aria-pressed={i === activeIndex}
            >
              <span className={`block rounded-full transition-all duration-500 pointer-events-none ${
                i === activeIndex ? 'bg-gold w-6 h-0.5' : 'bg-cream/30 w-3 h-0.5'
              }`} />
            </button>
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-cream/35">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
