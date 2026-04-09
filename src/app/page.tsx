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
    'Hasselquist Contracting  -  licensed home remodeling and handyman services in Shakopee, MN. Kitchen remodeling, bathroom renovation, basement finishing, and more. Serving the Twin Cities metro.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <Hero
        eyebrow="Licensed Contractor · Shakopee, MN · Twin Cities"
        headline="Homes You'll Love Living In, For Years to Come"
        subheadline="From kitchens to basements, we remodel the spaces you use every day, with craftsmanship you can see and quality you can feel."
        imageSrc="/images/hero/hero-home.jpg"
        imageAlt="Beautifully remodeled kitchen interior in Shakopee, Minnesota"
        videoSrc={[
          `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/videos/2.mp4`,
          `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/videos/1.mp4`,
        ]}
        ctaPrimary={{ label: 'Get a Free Quote', href: '/contact' }}
        ctaSecondary={{ label: 'View Our Services', href: '/services' }}
      />

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <SectionLabel className="mb-5">Why Hasselquist</SectionLabel>
              <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900 leading-[1.08] mb-6 text-balance">
                Built on Trust.<br />
                <em className="font-light not-italic text-gold">Backed by Craftsmanship.</em>
              </h2>
              <div className="h-px w-12 bg-gold/50 mb-6" />
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-4">
                Your home is where your family wakes up, comes together, and makes memories. It deserves to be built with intention — and looked after with the same care.
              </p>
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-8">
                Hasselquist Contracting brings precision craftsmanship to every project — from a custom kitchen that changes how your family moves through the morning, to a finished basement your kids actually want to spend time in. Clear communication, honest pricing, and work that holds up for years.
              </p>
              <div className="flex items-stretch gap-0 mt-2">
                {[
                  {
                    label: 'Licensed & Insured',
                    sublabel: 'Lic. BC808643',
                    icon: (
                      <svg aria-hidden="true" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Free Estimates',
                    sublabel: 'No obligation',
                    icon: (
                      <svg aria-hidden="true" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Satisfaction',
                    sublabel: 'Guaranteed',
                    icon: (
                      <svg aria-hidden="true" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center">
                    {i > 0 && <div className="w-px h-10 bg-stone-200 mx-6" />}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <p className="font-sans text-[0.78rem] font-medium text-stone-800 leading-tight">{item.label}</p>
                        <p className="font-sans text-[0.68rem] text-stone-400 tracking-wide mt-0.5">{item.sublabel}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden bg-cream-dark">
                  <Image
                    src="/images/photo-of-erik.webp"
                    alt="Erik Hasselquist  -  owner of Hasselquist Contracting, Shakopee MN"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
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
                <SectionLabel className="mb-4">Repairs & Improvements</SectionLabel>
                <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900">
                  Every Detail. Done Right.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-sans text-[0.8rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200 flex-shrink-0"
              >
                All Services
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                <SectionLabel className="mb-4">Full-Scope Remodeling</SectionLabel>
                <h2 className="font-serif font-light text-h2 md:text-h1 text-stone-900">
                  Spaces Designed Around Your Life
                </h2>
              </div>
              <Link
                href="/remodeling"
                className="inline-flex items-center gap-2 font-sans text-[0.8rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200 flex-shrink-0"
              >
                All Remodeling
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

      {/* ── Service Area ─────────────────────────────────────────── */}
      <section className="section-padding bg-cream border-y border-stone-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Copy + cities */}
            <FadeIn direction="right">
              <SectionLabel className="mb-4">Where We Work</SectionLabel>
              <h2 className="font-serif font-light text-h2 text-stone-900 mb-4">
                Serving the Twin Cities Metro
              </h2>
              <p className="font-sans text-[0.9rem] text-stone-500 leading-relaxed mb-8">
                Based in Shakopee, we work throughout the Twin Cities metro. Don&apos;t see your city listed? Reach out — we&apos;re happy to discuss your project regardless of location.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                {[
                  'Shakopee', 'Eden Prairie', 'Chanhassen', 'Prior Lake', 'Savage',
                  'Burnsville', 'Apple Valley', 'Bloomington', 'Edina', 'Minnetonka',
                  'Plymouth', 'Wayzata', 'Excelsior', 'Maple Grove', 'Mendota Heights',
                ].map((city) => (
                  <Link
                    key={city}
                    href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-sans text-[0.75rem] text-stone-500 hover:text-gold transition-colors duration-150 uppercase tracking-wide"
                  >
                    {city}
                  </Link>
                ))}
              </div>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 font-sans text-[0.75rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200"
              >
                View all service areas
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </FadeIn>

            {/* Map */}
            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden border border-stone-200">
                  <iframe
                    title="Hasselquist Contracting location — 6801 Oak Ridge Ct, Shakopee, MN 55379"
                    src="https://www.google.com/maps?q=6801+Oak+Ridge+Ct,+Shakopee,+MN+55379&output=embed&z=13"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <svg aria-hidden="true" className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="font-sans text-[0.75rem] text-stone-400">6801 Oak Ridge Ct, Shakopee, MN 55379</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaBanner
        title="Let's Build Something You'll Love Living In"
        subtitle="Whether you're planning a full remodel or have a list of things that need doing — we'd love to walk through your home with you. No pressure. Just a conversation."
      />
    </>
  )
}
