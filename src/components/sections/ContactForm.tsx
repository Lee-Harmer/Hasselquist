'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SectionLabel from '@/components/ui/SectionLabel'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please describe your project (min 10 characters)'),
  howHeard: z.string().optional(),
  honeypot: z.string().max(0).optional(),
})

type FormData = z.infer<typeof schema>

const services = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Basement Finishing',
  'Carpentry',
  'Plumbing',
  'Electrical',
  'Drywall',
  'Flooring',
  'Decks & Fences',
  'General Handyman',
  'Other',
]

const howHeardOptions = [
  'Google Search',
  'Referral from a friend',
  'Nextdoor',
  'Facebook',
  'Other',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    // Honeypot check (client-side)
    if (data.honeypot) return

    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        setServerError(err.message || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      reset()
    } catch {
      setServerError('Network error. Please try again or call us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream border border-stone-200 p-10 text-center">
        <div className="w-12 h-12 bg-gold/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <SectionLabel className="mb-3 text-center">Message Received</SectionLabel>
        <h3 className="font-serif font-light text-h3 text-stone-900 mb-3">Thank You!</h3>
        <p className="font-sans text-[0.9rem] text-stone-600 leading-relaxed">
          We&apos;ve received your message and will be in touch within one business day. In the meantime, feel free to call us at{' '}
          <a href="tel:+16122576073" className="text-gold hover:underline">612-257-6073</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <SectionLabel className="mb-6">Send Us a Message</SectionLabel>

      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        {...register('honeypot')}
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-sans text-[0.78rem] uppercase tracking-wider text-stone-500 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register('name')}
            className={`w-full bg-white border px-4 py-3 font-sans text-[0.9rem] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-gold transition-colors duration-150 ${errors.name ? 'border-red-400' : 'border-stone-200'}`}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="font-sans text-[0.75rem] text-red-500 mt-1.5">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block font-sans text-[0.78rem] uppercase tracking-wider text-stone-500 mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={`w-full bg-white border px-4 py-3 font-sans text-[0.9rem] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-gold transition-colors duration-150 ${errors.phone ? 'border-red-400' : 'border-stone-200'}`}
            placeholder="612-555-0123"
          />
          {errors.phone && <p className="font-sans text-[0.75rem] text-red-500 mt-1.5">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-[0.78rem] uppercase tracking-wider text-stone-500 mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className={`w-full bg-white border px-4 py-3 font-sans text-[0.9rem] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-gold transition-colors duration-150 ${errors.email ? 'border-red-400' : 'border-stone-200'}`}
          placeholder="jane@example.com"
        />
        {errors.email && <p className="font-sans text-[0.75rem] text-red-500 mt-1.5">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block font-sans text-[0.78rem] uppercase tracking-wider text-stone-500 mb-2">
          Service Needed *
        </label>
        <select
          id="service"
          {...register('service')}
          className={`w-full bg-white border px-4 py-3 font-sans text-[0.9rem] text-stone-900 focus:outline-none focus:border-gold transition-colors duration-150 appearance-none ${errors.service ? 'border-red-400' : 'border-stone-200'}`}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="font-sans text-[0.75rem] text-red-500 mt-1.5">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-[0.78rem] uppercase tracking-wider text-stone-500 mb-2">
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full bg-white border px-4 py-3 font-sans text-[0.9rem] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-gold transition-colors duration-150 resize-none ${errors.message ? 'border-red-400' : 'border-stone-200'}`}
          placeholder="Describe your project, timeline, and any questions you have..."
        />
        {errors.message && <p className="font-sans text-[0.75rem] text-red-500 mt-1.5">{errors.message.message}</p>}
      </div>

      <div>
        <label htmlFor="howHeard" className="block font-sans text-[0.78rem] uppercase tracking-wider text-stone-500 mb-2">
          How Did You Hear About Us?
        </label>
        <select
          id="howHeard"
          {...register('howHeard')}
          className="w-full bg-white border border-stone-200 px-4 py-3 font-sans text-[0.9rem] text-stone-900 focus:outline-none focus:border-gold transition-colors duration-150 appearance-none"
        >
          <option value="">Select one (optional)</option>
          {howHeardOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 px-4 py-3">
          <p className="font-sans text-[0.83rem] text-red-600">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed text-charcoal font-sans font-medium text-[0.8rem] uppercase tracking-wider py-4 transition-colors duration-200"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="font-sans text-[0.75rem] text-stone-400 text-center">
        Or call us directly at{' '}
        <a href="tel:+16122576073" className="text-gold hover:underline">612-257-6073</a>
      </p>
    </form>
  )
}
