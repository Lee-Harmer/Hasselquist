'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

function StarRating({ label = '5 out of 5 stars' }: { label?: string }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={label}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} aria-hidden="true" className="w-3.5 h-3.5 text-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  )
}

const testimonials = [
  {
    id: 1,
    quote: 'I needed some immediate assistance with a construction project and the Hasselquist team was there the next day to help! Very professional as well! I will be using their services again, and would recommend them to anyone needing a hand on interior or exterior projects.',
    author: 'Tanner Gadomski',
    service: 'Construction Project',
    verified: true,
  },
  {
    id: 2,
    quote: 'We recently had our bathroom remodeled and the experience was fantastic from start to finish. Hasselquist Contracting has a professional team, they are punctual, and incredibly detail-oriented. They took the time to listen to what we wanted, offered helpful suggestions, and delivered a final result that exceeded our expectations. The quality of the workmanship really shows — everything from the tile work to the fixtures looks amazing. Our new bathroom looks beautiful and feels like a spa. We will be using them to replace our deck this summer.',
    author: 'Maverick Perry',
    service: 'Bathroom Remodeling',
    verified: true,
  },
  {
    id: 3,
    quote: 'I worked with Hasselquist Contracting on a home remodel and the work was exceptional! Erik was super personable and professional, made the whole process really smooth. Would highly recommend this company!',
    author: 'Jordan Hahn',
    service: 'Home Remodel',
    verified: true,
  },
  {
    id: 4,
    quote: 'Erik was awesome! Considerate, timely and professional. He came out the same day when we had an immediate problem to fix. We called again right away for another project. Highly recommended!!',
    author: 'Lisa Maddock',
    service: 'Home Services',
    verified: true,
  },
  {
    id: 5,
    quote: 'We loved working with Erik, he does great work. Would recommend him for anyone looking for construction or handyman work.',
    author: 'Nicole Wilson',
    service: 'Construction & Handyman',
    verified: true,
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
            <SectionLabel className="mb-4">Client Reviews</SectionLabel>
            <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900">
              What Our Clients Say
            </h2>
            {/* Aggregate rating */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <StarRating />
              <span className="font-sans text-[0.8rem] text-stone-500">5.0 · {testimonials.length} Google reviews</span>
              <svg aria-hidden="true" className="w-4 h-4 text-stone-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
              </svg>
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {/* Live region announces review changes to screen readers */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Review {current + 1} of {testimonials.length}: {t.author} says {t.quote}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Review card */}
              <div className="bg-white border border-stone-100 shadow-sm px-10 py-10 md:px-14 md:py-12 relative">
                {/* Quote mark */}
                <div aria-hidden="true" className="text-gold/20 font-serif text-[5rem] leading-none absolute top-4 left-8 select-none">&ldquo;</div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <StarRating />
                    {t.verified && (
                      <span className="flex items-center gap-1.5 font-sans text-[0.65rem] uppercase tracking-wider text-stone-400">
                        <svg aria-hidden="true" className="w-3 h-3 text-gold" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.491 4.491 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        Verified Google Review
                      </span>
                    )}
                  </div>

                  <p className="font-serif font-light text-[1.2rem] md:text-[1.35rem] leading-[1.65] text-stone-700 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-gold font-medium text-[1rem]">
                        {t.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[0.85rem] text-stone-900">{t.author}</p>
                      <p className="font-sans text-[0.72rem] text-stone-400 mt-0.5">{t.service}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10" role="group" aria-label="Review navigation">
            <button
              onClick={prev}
              className="w-12 h-12 border border-stone-200 hover:border-gold flex items-center justify-center text-stone-400 hover:text-gold transition-colors duration-200"
              aria-label="Previous review"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex gap-1" role="tablist" aria-label="Reviews">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Review ${i + 1} of ${testimonials.length}`}
                  className="flex items-center justify-center w-8 h-8"
                >
                  <span className={`block rounded-full transition-all duration-300 pointer-events-none ${
                    i === current ? 'bg-gold w-5 h-1.5' : 'bg-stone-200 hover:bg-stone-300 w-1.5 h-1.5'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-stone-200 hover:border-gold flex items-center justify-center text-stone-400 hover:text-gold transition-colors duration-200"
              aria-label="Next review"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
