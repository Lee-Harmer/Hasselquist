'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/dream-homes/1.webp',
  '/images/dream-homes/2.webp',
  '/images/dream-homes/3.webp',
  '/images/dream-homes/4.webp',
  '/images/dream-homes/5.webp',
  '/images/dream-homes/6.webp',
  '/images/dream-homes/7.webp',
  '/images/dream-homes/8.webp',
  '/images/dream-homes/9.webp',
]

const SLIDE_DURATION = 3000

export default function DreamHomeIntro() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Only show once per session
    const seen = sessionStorage.getItem('dream-intro-seen')
    if (!seen) setVisible(true)
  }, [])

  const dismiss = useCallback(() => {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('dream-intro-seen', '1')
    }, 800)
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = prev + 1
        if (next >= images.length) {
          clearInterval(timer)
          return prev
        }
        return next
      })
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [visible])

  if (!visible) return null

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="dream-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-charcoal"
        >
          {/* Image slideshow */}
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.04 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-charcoal/55" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-gold mb-6"
            >
              Hasselquist Contracting
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-cream text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] leading-[1.1] max-w-3xl mb-4"
            >
              Are you looking for the home of your dreams?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-cream/70 text-[0.95rem] mb-12 max-w-md"
            >
              Let&apos;s make it happen.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              onClick={dismiss}
              className="bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.78rem] uppercase tracking-[0.14em] px-10 py-4 transition-colors duration-300"
            >
              Yes, show me what&apos;s possible
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              onClick={dismiss}
              className="mt-6 font-sans text-[0.7rem] text-cream/40 hover:text-cream/70 uppercase tracking-wider transition-colors duration-200"
            >
              Skip
            </motion.button>
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-500 ${
                  i === current
                    ? 'bg-gold w-5 h-1.5'
                    : i < current
                    ? 'bg-cream/40 w-1.5 h-1.5'
                    : 'bg-cream/20 w-1.5 h-1.5'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
