'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/dream-homes/12.webp',
  '/images/dream-homes/14.webp',
  '/images/dream-homes/15.webp',
  '/images/dream-homes/17.webp',
  '/images/dream-homes/18.webp',
  '/images/dream-homes/20.webp',
]

const SLIDE_DURATION = 5500

export default function SlideshowHero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen max-h-[560px] md:max-h-none min-h-[480px] overflow-hidden">

      {/* Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt=""
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay - darkens image for text legibility */}
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold mb-5"
        >
          Licensed Contractor · Shakopee, MN · Twin Cities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-cream text-[2.6rem] sm:text-[3.4rem] md:text-[4.4rem] leading-[1.06] max-w-3xl mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]"
        >
          Built for the life<br />
          <em className="font-light not-italic text-gold">you actually want.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-cream/90 text-[1rem] max-w-lg mb-10 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]"
        >
          From kitchens to basements, we build the spaces you&apos;ve always imagined - with craftsmanship you can see and quality you can feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.78rem] uppercase tracking-[0.14em] px-10 py-4 transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/remodeling"
            className="font-sans text-[0.78rem] uppercase tracking-[0.14em] text-cream/80 hover:text-gold border border-cream/30 hover:border-gold px-10 py-4 transition-colors duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-14 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className="flex items-center justify-center p-1"
          >
            <span className={`block rounded-full transition-all duration-500 ${
              i === current ? 'bg-gold w-5 h-1.5' : 'bg-cream/30 hover:bg-cream/60 w-1.5 h-1.5'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-cream/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-4 h-4 text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}
