'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  overlay?: 'dark' | 'medium' | 'light'
}

export default function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Get a Free Quote', href: '/contact' },
  ctaSecondary,
  imageSrc,
  imageAlt,
  eyebrow,
  overlay = 'dark',
}: HeroProps) {
  const overlayClass = {
    dark: 'bg-charcoal/60',
    medium: 'bg-charcoal/40',
    light: 'bg-charcoal/25',
  }[overlay]

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
        {/* Warm gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial w-full">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-style text-gold mb-6"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif font-light italic text-cream leading-[1.05] text-[clamp(2.5rem,6vw,5rem)] mb-6 text-balance"
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-[clamp(1rem,2vw,1.125rem)] text-cream/70 font-light leading-relaxed mb-10 max-w-xl"
            >
              {subheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.8rem] uppercase tracking-wider px-8 py-4 transition-colors duration-200"
            >
              {ctaPrimary.label}
            </Link>

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 text-cream/80 hover:text-gold font-sans text-[0.8rem] uppercase tracking-wider transition-colors duration-200 border-b border-cream/30 hover:border-gold pb-0.5"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="label-style text-cream/40 text-[0.6rem]">Scroll</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
