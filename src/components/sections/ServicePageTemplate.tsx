import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/lib/services'
import HeroSimple from '@/components/sections/HeroSimple'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import QuirkyComment from '@/components/ui/QuirkyComment'

interface ServicePageTemplateProps {
  service: Service
  relatedServices: Service[]
  basePath: string
  parentLabel: string
  parentHref: string
}

export default function ServicePageTemplate({
  service,
  relatedServices,
  basePath,
  parentLabel,
  parentHref,
}: ServicePageTemplateProps) {
  return (
    <>
      <HeroSimple
        eyebrow={parentLabel}
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: parentLabel, href: parentHref },
          { label: service.shortTitle },
        ]}
      />

      {/* Main Content */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Content */}
            <FadeIn direction="right" className="order-2 lg:order-1">
              <SectionLabel className="mb-5">Overview</SectionLabel>
              <h2 className="font-serif font-light text-h2 text-stone-900 mb-6">
                Expert {service.shortTitle} in Shakopee & the Twin Cities
              </h2>
              <Divider className="mb-6 w-12" />
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h3 className="font-serif font-medium text-h4 text-stone-900 mb-5">
                What&apos;s Included
              </h3>
              <ul className="space-y-3 mb-10">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-2" />
                    <span className="font-sans text-[0.9rem] text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-cream p-6 border border-stone-200">
                <p className="label-style text-gold mb-2">Ready to Get Started?</p>
                <p className="font-sans text-[0.875rem] text-stone-600 mb-4">
                  Contact us for a free, no-obligation quote. We serve Shakopee, Eden Prairie, Prior Lake, and all of the southwest Twin Cities.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.78rem] uppercase tracking-wider px-6 py-3 transition-colors duration-200"
                >
                  Get a Free Quote
                </Link>
              </div>
            </FadeIn>

            {/* Right: Image */}
            <FadeIn direction="left" delay={0.15} className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden bg-cream-dark">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/25 -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <FadeIn>
              <SectionLabel className="mb-4">Pricing</SectionLabel>
              <h2 className="font-serif font-light text-h3 text-stone-900 mb-3">
                Estimated Pricing
              </h2>
              <p className="font-sans text-[0.82rem] text-stone-500 mb-10 max-w-2xl">
                These are estimated prices per job and may not include additional costs for materials or specific job requirements.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border border-stone-200 divide-y divide-stone-200">
                {service.pricing.map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 sm:p-6 group hover:bg-stone-50 transition-colors duration-150">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2,8 6,12 14,4" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif font-medium text-[1rem] text-stone-900">{item.name}</p>
                      <p className="font-sans text-[0.8rem] text-stone-500 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-5 sm:gap-6 flex-shrink-0">
                      <p className="font-serif font-medium text-stone-900 text-right whitespace-nowrap">{item.price}</p>
                      <Link
                        href="/contact"
                        className="font-sans text-[0.72rem] uppercase tracking-wider text-charcoal border border-stone-300 hover:border-gold hover:text-gold px-4 py-2 transition-colors duration-200 whitespace-nowrap"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Why Choose Us Strip */}
      <section className="py-14 bg-cream border-y border-stone-200">
        <div className="container-editorial">
          <FadeIn>
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: 'Licensed', label: 'Lic. BC808643' },
                { stat: 'Insured', label: 'Fully covered' },
                { stat: 'Free', label: 'Estimates always' },
                { stat: 'Twin Cities', label: 'Service area' },
              ].map((item) => (
                <StaggerItem key={item.stat}>
                  <div className="text-center">
                    <p className="font-serif font-light text-[1.75rem] text-stone-900 mb-1">{item.stat}</p>
                    <p className="font-sans text-[0.72rem] uppercase tracking-widest text-stone-400">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding-sm bg-stone-50">
          <div className="container-editorial">
            <FadeIn>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <SectionLabel className="mb-3">More From Us</SectionLabel>
                  <h2 className="font-serif font-light text-h3 text-stone-900">Related Services</h2>
                </div>
                <Link
                  href={parentHref}
                  className="font-sans text-[0.78rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200"
                >
                  View All →
                </Link>
              </div>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`${basePath}/${s.slug}`}
                    className="group flex items-center gap-4 p-4 bg-cream hover:bg-cream-dark transition-colors duration-200"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-stone-200">
                      <Image src={s.image} alt={s.shortTitle} fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-serif font-medium text-[1rem] text-stone-900 group-hover:text-charcoal">
                        {s.shortTitle}
                      </p>
                      <p className="font-sans text-[0.75rem] text-stone-500 mt-0.5 line-clamp-1">
                        {s.description}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      {service.quirkyComment && (
        <div className="bg-dark-base pt-12 pb-0">
          <div className="container-editorial flex justify-center">
            <QuirkyComment
              text={service.quirkyComment.text}
              arrow={service.quirkyComment.arrow ?? 'down-right'}
              rotate={service.quirkyComment.rotate ?? -2}
              align={service.quirkyComment.align ?? 'center'}
              dark
              className="max-w-sm"
            />
          </div>
        </div>
      )}
      <CtaBanner />
    </>
  )
}
