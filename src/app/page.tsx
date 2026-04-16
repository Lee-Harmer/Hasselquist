import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SlideshowHero from '@/components/sections/SlideshowHero'
import QuirkyComment from '@/components/ui/QuirkyComment'
import ProcessSteps from '@/components/sections/ProcessSteps'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import CtaBanner from '@/components/sections/CtaBanner'
import ServiceCard from '@/components/sections/ServiceCard'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import LazyVideo from '@/components/ui/LazyVideo'
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
      <SlideshowHero />

      {/* ── Remodeling Feature ── LIGHT ──────────────────────────── */}
      <section className="section-padding bg-cream">
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

          {/* Featured first card + two smaller */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remodelingServices.slice(0, 1).map((service) => (
              <StaggerItem key={service.slug} className="md:col-span-2">
                <ServiceCard service={service} baseHref="/remodeling" variant="light" featured />
              </StaggerItem>
            ))}
            {remodelingServices.slice(1).map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} baseHref="/remodeling" variant="light" />
              </StaggerItem>
            ))}
            <StaggerItem className="hidden md:flex items-center justify-center">
              <QuirkyComment
                text="Careful… this is where Pinterest dreams turn into real life."
                arrow="up-left"
                rotate={-2}
                align="center"
                className="max-w-xs"
              />
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ── Services Grid ── LIGHT ────────────────────────────────── */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="mb-12">
              <QuirkyComment
                text="That list on the fridge isn't going to fix itself."
                arrow="down-right"
                rotate={-2}
                className="max-w-sm"
              />
            </div>
          </FadeIn>
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
            {handymanServices.filter((s) => s.slug !== 'other').map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} baseHref="/services" variant="light" />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Testimonials ── DARK ─────────────────────────────────── */}
      <div className="bg-dark-base pt-12 pb-0">
        <div className="container-editorial flex justify-center">
          <QuirkyComment
            text="'We'll do it next year' eventually becomes now."
            arrow="down-right"
            rotate={-1}
            dark
            align="center"
            className="max-w-xs"
          />
        </div>
      </div>
      <TestimonialSlider />

      {/* ── Intro ── LIGHT ───────────────────────────────────────── */}
      <section className="section-padding bg-cream">
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
                Your home is where your family wakes up, comes together, and makes memories. It deserves to be built with intention and looked after with the same care.
              </p>
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-8">
                Hasselquist Contracting brings precision craftsmanship to every project, from a custom kitchen that changes how your family moves through the morning, to a finished basement your kids actually want to spend time in. Clear communication, honest pricing, and work that holds up for years.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 mb-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.75rem] uppercase tracking-[0.12em] px-9 py-4 transition-all duration-300 hover:gap-4"
                >
                  Get a Free Quote
                  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+16122576073"
                  className="inline-flex items-center gap-2 text-stone-500 hover:text-gold font-sans text-[0.83rem] tracking-wide transition-colors duration-300"
                >
                  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  612-257-6073
                </a>
              </div>

              <div className="flex items-stretch gap-0 mt-8">
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

      {/* ── Process ──────────────────────────────────────────────── */}
      <ProcessSteps dark />

      {/* ── Service Area ── LIGHT ────────────────────────────────── */}
      <section className="section-padding bg-stone-50 border-y border-stone-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Copy + cities */}
            <FadeIn direction="right">
              <SectionLabel className="mb-4">Where We Work</SectionLabel>
              <h2 className="font-serif font-light text-h2 text-stone-900 mb-4">
                Serving the Twin Cities Metro
              </h2>
              <p className="font-sans text-[0.9rem] text-stone-500 leading-relaxed mb-8">
                Based in Shakopee, we work throughout the Twin Cities metro. Don&apos;t see your city listed? Reach out and we&apos;re happy to discuss your project regardless of location.
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
                    title="Hasselquist Contracting location at 6801 Oak Ridge Ct, Shakopee, MN 55379"
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

      {/* ── Community ── LIGHT ───────────────────────────────────── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: editorial text + primary social CTA */}
            <FadeIn direction="right">
              <SectionLabel className="mb-5">Follow Along</SectionLabel>
              <h2 className="font-serif font-light text-h2 text-stone-900 mb-5 leading-[1.1]">
                Inside the<br />
                <em className="font-light not-italic text-gold">process.</em>
              </h2>
              <p className="font-sans text-[0.95rem] text-stone-500 leading-relaxed mb-8 max-w-sm">
                Before and afters, work in progress, and the kind of detail that doesn&apos;t make it into the final photos. Follow to see what transformation actually looks like.
              </p>
              <a
                href="https://www.instagram.com/hasselquist_contracting?igsh=YzlnbzNuZWt0cWR0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-cream font-sans font-medium text-[0.75rem] uppercase tracking-[0.12em] px-8 py-4 transition-colors duration-300 mb-8"
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
              <div className="mb-6">
                <QuirkyComment
                  text="Follow every single one. Yes, all of them."
                  arrow="down-right"
                  rotate={-2}
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center gap-5">
                <span className="font-sans text-[0.63rem] uppercase tracking-[0.18em] text-stone-400">Also on</span>
                {[
                  {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/share/1ApToZ7oRo/',
                    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
                  },
                  {
                    label: 'TikTok',
                    href: 'https://www.tiktok.com/@hasselquist_contracting?_r=1&_t=ZS-95a7qgNIjDN',
                    icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>,
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/erik-hasselquist-4a391832?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
                  },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center bg-stone-200 hover:bg-gold hover:text-charcoal text-stone-500 transition-all duration-200"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Right: Erik videos */}
            <FadeIn direction="left" delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {['/videos/1.mp4', '/videos/2.mp4'].map((src) => (
                  <div key={src} className="aspect-[9/16] overflow-hidden bg-stone-200 relative">
                    <LazyVideo
                      src={src}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-stone-400 mt-3 text-right">
                @hasselquist_contracting
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="bg-dark-base pt-12 pb-0">
        <div className="container-editorial flex justify-center">
          <QuirkyComment
            text="You're allowed to want this."
            arrow="down-right"
            rotate={1}
            dark
            align="center"
            className="max-w-xs"
          />
        </div>
      </div>
      <CtaBanner
        title="Let's Build Something You'll Love Living In"
        subtitle="Whether you're planning a full remodel or have a list of things that need doing, we'd love to walk through your home with you. No pressure. Just a conversation."
      />
    </>
  )
}
