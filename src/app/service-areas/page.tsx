import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSimple from '@/components/sections/HeroSimple'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import { cities } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Service Areas | Handyman & Remodeling Twin Cities MN',
  description:
    'Hasselquist Contracting serves Shakopee, Eden Prairie, Burnsville, Apple Valley, Prior Lake, and all of the southwest Twin Cities metro. Get a free quote today.',
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasPage() {
  return (
    <>
      <HeroSimple
        eyebrow="Where We Work"
        title="Serving the Southwest Twin Cities"
        subtitle="Based in Shakopee, we travel throughout the southwest metro — serving homes within a 45-minute radius with the same care and quality, every time."
        breadcrumbs={[{ label: 'Service Areas' }]}
      />

      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <SectionLabel className="mb-4">Our Coverage Area</SectionLabel>
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed">
                From Shakopee to Eden Prairie, Prior Lake to Bloomington, we serve homeowners across Scott, Carver, Dakota, and Hennepin counties. If you&apos;re within the southwest metro, we&apos;d love to work with you.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <StaggerItem key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="group flex items-start justify-between p-5 bg-cream hover:bg-cream-dark border border-stone-200 hover:border-gold/40 transition-all duration-200"
                >
                  <div>
                    <h2 className="font-serif font-medium text-h4 text-stone-900 group-hover:text-charcoal transition-colors duration-200">
                      {city.name}
                    </h2>
                    <p className="font-sans text-[0.75rem] text-stone-400 mt-1">
                      {city.county} County · ~{city.distanceMiles} mi from Shakopee
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-stone-300 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="mt-14 bg-charcoal p-8 md:p-12 text-center">
            <SectionLabel className="mb-4 text-gold/60">Don&apos;t See Your City?</SectionLabel>
            <h3 className="font-serif font-light text-h2 text-cream mb-4">
              We May Still Be Able to Help
            </h3>
            <p className="font-sans text-[0.9rem] text-cream/60 mb-6 max-w-lg mx-auto">
              If you&apos;re within 45 minutes of Shakopee and don&apos;t see your city listed, give us a call. We&apos;re always happy to discuss your project.
            </p>
            <a
              href="tel:+16122576073"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.8rem] uppercase tracking-wider px-8 py-4 transition-colors duration-200"
            >
              Call 612-257-6073
            </a>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
