'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

const testimonials = [
  {
    id: 1,
    quote:
      'Erik completely transformed our basement. His attention to detail was incredible — the framing, drywall, and trim work were flawless. He finished on time and communicated every step of the way.',
    author: 'Sarah M.',
    location: 'Eden Prairie, MN',
    service: 'Basement Finishing',
  },
  {
    id: 2,
    quote:
      'We had Hasselquist Contracting remodel our main bathroom and couldn\'t be happier. The tile work is stunning, the fixtures are perfectly installed, and the whole space looks like something out of a magazine.',
    author: 'Jennifer K.',
    location: 'Chanhassen, MN',
    service: 'Bathroom Remodeling',
  },
  {
    id: 3,
    quote:
      'Finally found a contractor who actually cares about quality. Our kitchen remodel came in on budget and the craftsmanship is exceptional. I\'ve already referred Erik to three of my neighbors.',
    author: 'Michelle T.',
    location: 'Savage, MN',
    service: 'Kitchen Remodeling',
  },
  {
    id: 4,
    quote:
      'Honest, skilled, and reliable. I hired Erik for a deck repair that turned into a full replacement, and every decision he made was the right one. The finished deck is beautiful and extremely well-built.',
    author: 'Lisa R.',
    location: 'Prior Lake, MN',
    service: 'Deck Construction',
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-editorial">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">Client Stories</SectionLabel>
            <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900">
              What Our Clients Say
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              {/* Quote mark */}
              <div className="text-gold/30 font-serif text-[6rem] leading-none mb-4 -mt-8 select-none">&ldquo;</div>

              <p className="font-serif font-light text-[1.4rem] md:text-[1.65rem] leading-[1.5] text-stone-800 mb-8 text-balance">
                {t.quote}
              </p>

              <div className="h-px w-12 bg-gold/40 mx-auto mb-6" />

              <p className="font-sans font-medium text-[0.85rem] text-stone-900 tracking-wide">
                {t.author}
              </p>
              <p className="font-sans text-[0.78rem] text-stone-400 mt-1">
                {t.location} · {t.service}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-stone-200 hover:border-gold flex items-center justify-center text-stone-400 hover:text-gold transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === current ? 'bg-gold w-4' : 'bg-stone-200 hover:bg-stone-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-stone-200 hover:border-gold flex items-center justify-center text-stone-400 hover:text-gold transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
