import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCityBySlug, getAllCitySlugs, cities } from '@/lib/cities'
import { services } from '@/lib/services'
import HeroSimple from '@/components/sections/HeroSimple'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  if (!city) return {}

  return {
    title: `Handyman & Remodeling Services in ${city.name}, MN`,
    description: `Licensed handyman and home remodeling services in ${city.name}, MN. Kitchen remodeling, bathroom renovation, basement finishing, carpentry, and more from Hasselquist Contracting in Shakopee.`,
    alternates: { canonical: `/service-areas/${citySlug}` },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  if (!city) notFound()

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://hasselquistcontracting.com/#business',
    name: 'Hasselquist Contracting',
    url: 'https://hasselquistcontracting.com',
    telephone: '+16122576073',
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Minnesota',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Does Hasselquist Contracting serve ${city.name}, MN?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! Hasselquist Contracting proudly serves ${city.name} and surrounding areas in ${city.county} County. We're based in Shakopee, just ${city.distanceMiles} miles away, and provide the same high-quality service to all of our service area communities.`,
        },
      },
      {
        '@type': 'Question',
        name: `What services do you offer in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We offer a full range of handyman and remodeling services in ${city.name}, including kitchen remodeling, bathroom renovation, basement finishing, carpentry, plumbing, electrical, drywall, flooring, and deck & fence construction.`,
        },
      },
      {
        '@type': 'Question',
        name: `How do I get a quote for my ${city.name} home project?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Getting a quote is easy. You can call us at 612-257-6073, email Erik@hasselquistcontracting.com, or fill out the contact form on our website. We offer free, no-obligation estimates for all projects in ${city.name} and throughout the Twin Cities.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are you licensed and insured to work in ${city.name}, MN?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Hasselquist Contracting holds Minnesota Residential Contractor License #BC808643 and is fully insured. We meet all licensing requirements to perform residential contracting work throughout Minnesota, including ${city.name}.`,
        },
      },
    ],
  }

  const nearbyAreas = cities.filter((c) => c.slug !== citySlug).slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <HeroSimple
        eyebrow={`${city.county} County, MN`}
        title={`Handyman & Remodeling Services in ${city.name}`}
        subtitle={`Licensed, insured, and dedicated to quality  -  Hasselquist Contracting brings expert craftsmanship to homeowners in ${city.name} and throughout ${city.county} County.`}
        breadcrumbs={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: city.name },
        ]}
      />

      {/* City Intro */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
            <FadeIn direction="right">
              <SectionLabel className="mb-5">Serving {city.name}</SectionLabel>
              <h2 className="font-serif font-light text-h2 text-stone-900 mb-5">
                Quality Craftsmanship in {city.name}, MN
              </h2>
              <Divider className="mb-6 w-12" />
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-4">
                {city.description}
              </p>
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-8">
                Hasselquist Contracting is based in Shakopee, just {city.distanceMiles} miles away, and regularly serves homeowners throughout {city.name}. Whether you&apos;re planning a kitchen remodel, finishing your basement, or need reliable handyman work, we bring the same dedication to every project  -  on time, on budget, and built to last.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.8rem] uppercase tracking-wider px-8 py-4 transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-cream border border-stone-200 p-8 space-y-5">
                <h3 className="font-serif font-medium text-h4 text-stone-900">Quick Facts</h3>
                {[
                  { label: 'County', value: `${city.county} County, MN` },
                  { label: 'Distance from Base', value: `~${city.distanceMiles} miles from Shakopee` },
                  { label: 'Population', value: city.population },
                  { label: 'License', value: 'MN Lic. BC808643' },
                  { label: 'Free Estimates', value: 'Yes  -  always' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-stone-200 pb-3">
                    <span className="font-sans text-[0.78rem] uppercase tracking-wider text-stone-400">{item.label}</span>
                    <span className="font-sans text-[0.875rem] text-stone-800 font-medium">{item.value}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <a href="tel:+16122576073" className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-150 font-sans text-[0.875rem] font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call 612-257-6073
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <FadeIn>
            <SectionLabel className="mb-5">Services Available in {city.name}</SectionLabel>
            <h2 className="font-serif font-light text-h2 text-stone-900 mb-10">What We Offer</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={service.category === 'remodeling' ? `/remodeling/${service.slug}` : `/services/${service.slug}`}
                  className="group flex items-start gap-4 p-5 bg-cream hover:bg-cream-dark border border-stone-200 hover:border-gold/30 transition-all duration-200"
                >
                  <div className="flex-1">
                    <p className="label-style text-gold mb-1.5">
                      {service.category === 'remodeling' ? 'Remodeling' : 'Handyman'}
                    </p>
                    <h3 className="font-serif font-medium text-[1.05rem] text-stone-900 group-hover:text-charcoal transition-colors duration-200">
                      {service.shortTitle}
                    </h3>
                    <p className="font-sans text-[0.78rem] text-stone-500 mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-stone-300 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-editorial max-w-3xl">
          <FadeIn>
            <SectionLabel className="mb-5">FAQ</SectionLabel>
            <h2 className="font-serif font-light text-h2 text-stone-900 mb-10">
              Common Questions from {city.name} Homeowners
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                q: `Does Hasselquist Contracting serve ${city.name}, MN?`,
                a: `Yes! We proudly serve ${city.name} and surrounding areas in ${city.county} County. Based in Shakopee  -  just ${city.distanceMiles} miles away  -  we bring the same high standard to every project, wherever you are in the southwest Twin Cities.`,
              },
              {
                q: `What services do you offer in ${city.name}?`,
                a: `We offer a full range of handyman and remodeling services in ${city.name}: kitchen remodeling, bathroom renovation, basement finishing, carpentry, plumbing, electrical, drywall, flooring, and deck & fence construction.`,
              },
              {
                q: `How do I get a quote for my ${city.name} home?`,
                a: `Easy  -  call us at 612-257-6073, email Erik@hasselquistcontracting.com, or fill out our contact form. We offer free, no-obligation estimates with no pressure.`,
              },
              {
                q: `Are you licensed and insured to work in ${city.name}?`,
                a: `Yes. We hold Minnesota Residential Contractor License #BC808643 and are fully insured  -  protecting both you and our team on every project.`,
              },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-stone-50 border border-stone-200 p-6">
                  <h3 className="font-serif font-medium text-[1.1rem] text-stone-900 mb-3">{faq.q}</h3>
                  <p className="font-sans text-[0.875rem] text-stone-600 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 bg-stone-50 border-t border-stone-200">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
              <p className="label-style text-stone-400 flex-shrink-0">Also Serving</p>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="font-sans text-[0.78rem] uppercase tracking-wide text-stone-500 hover:text-gold transition-colors duration-150"
                  >
                    {area.name}
                  </Link>
                ))}
                <Link
                  href="/service-areas"
                  className="font-sans text-[0.78rem] uppercase tracking-wide text-gold hover:text-gold-dark transition-colors duration-150 font-medium"
                >
                  All Areas →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner title={`Let's Work Together in ${city.name}`} subtitle="We'd love to hear about your project. Free quotes, honest pricing, exceptional results." />
    </>
  )
}
