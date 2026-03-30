import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import ProcessSteps from '@/components/sections/ProcessSteps'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import CtaBanner from '@/components/sections/CtaBanner'
import ServiceCard from '@/components/sections/ServiceCard'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import { handymanServices, remodelingServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Home Remodeling & Handyman Services Shakopee MN',
  description:
    'Hasselquist Contracting — licensed home remodeling and handyman services in Shakopee, MN. Kitchen remodeling, bathroom renovation, basement finishing, and more. Serving the Twin Cities metro.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <Hero
        eyebrow="Shakopee, MN — Est. 2024"
        headline="Homes Crafted With Intention"
        subheadline="From kitchen remodels to basement transformations — we build the spaces where your life unfolds, with the detail and care they deserve."
        imageSrc="/images/hero/hero-home.jpg"
        imageAlt="Beautifully remodeled kitchen interior in Shakopee, Minnesota"
        ctaPrimary={{ label: 'Get a Free Quote', href: '/contact' }}
        ctaSecondary={{ label: 'View Our Services', href: '/services' }}
      />

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <SectionLabel className="mb-5">Our Philosophy</SectionLabel>
              <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900 leading-[1.08] mb-6 text-balance">
                Work Done Right,<br />
                <em className="font-light not-italic text-gold">Every Single Time</em>
              </h2>
              <div className="h-px w-12 bg-gold/50 mb-6" />
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-4">
                Hasselquist Contracting was built on a simple belief: that your home deserves the same care and attention you give it. We bring that standard to every project — from a single drywall repair to a complete kitchen transformation.
              </p>
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-8">
                Based in Shakopee and serving the southwest Twin Cities, we combine experienced craftsmanship with clear communication and honest pricing. No surprises. No shortcuts. Just beautiful work you&apos;ll be proud of for years to come.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { label: 'Licensed & Insured', value: 'Lic. BC808643' },
                  { label: 'Free Estimates', value: 'Always' },
                  { label: 'Satisfaction', value: 'Guaranteed' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-serif text-[1.5rem] font-light text-stone-900">{item.value}</p>
                    <p className="font-sans text-[0.75rem] text-stone-400 uppercase tracking-widest">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden bg-cream-dark">
                  <Image
                    src="/images/hero/hero-home.jpg"
                    alt="Hasselquist Contracting craftsman at work"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Decorative offset box */}
                <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-gold/30 -z-10" />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-cream -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div>
                <SectionLabel className="mb-4">What We Do</SectionLabel>
                <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900">
                  Handyman Services
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-sans text-[0.8rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200 flex-shrink-0"
              >
                All Services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {handymanServices.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} baseHref="/services" />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="bg-stone-50 py-2">
        <div className="container-editorial">
          <Divider withDiamond />
        </div>
      </div>

      {/* ── Remodeling Feature ───────────────────────────────────── */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div>
                <SectionLabel className="mb-4">Transform Your Home</SectionLabel>
                <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900">
                  Remodeling Services
                </h2>
              </div>
              <Link
                href="/remodeling"
                className="inline-flex items-center gap-2 font-sans text-[0.8rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200 flex-shrink-0"
              >
                All Remodeling
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remodelingServices.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} baseHref="/remodeling" />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <ProcessSteps dark />

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <TestimonialSlider />

      {/* ── Service Area Strip ───────────────────────────────────── */}
      <section className="py-12 bg-cream border-y border-stone-200">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex-shrink-0">
                <SectionLabel className="mb-2">Service Area</SectionLabel>
                <p className="font-serif font-light text-h3 text-stone-900">
                  Proudly Serving the Twin Cities
                </p>
              </div>
              <Divider className="hidden md:block flex-1" />
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {[
                  'Shakopee', 'Eden Prairie', 'Chanhassen', 'Savage', 'Prior Lake',
                  'Burnsville', 'Apple Valley', 'Bloomington', 'Edina', 'Minnetonka',
                ].map((city) => (
                  <Link
                    key={city}
                    href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-sans text-[0.78rem] text-stone-500 hover:text-gold transition-colors duration-150 uppercase tracking-wide"
                  >
                    {city}
                  </Link>
                ))}
                <Link
                  href="/service-areas"
                  className="font-sans text-[0.78rem] text-gold hover:text-gold-dark transition-colors duration-150 uppercase tracking-wide font-medium"
                >
                  + More →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaBanner />
    </>
  )
}
