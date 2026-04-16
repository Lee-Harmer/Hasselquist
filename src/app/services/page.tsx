import type { Metadata } from 'next'
import HeroSimple from '@/components/sections/HeroSimple'
import ServiceCard from '@/components/sections/ServiceCard'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import QuirkyComment from '@/components/ui/QuirkyComment'
import { handymanServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Handyman Services Shakopee MN | Carpentry, Plumbing, Electrical & More',
  description:
    'Professional handyman services in Shakopee, MN. Carpentry, plumbing, electrical, drywall, flooring, decks & fences. Licensed and insured, serving the Twin Cities metro area.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <HeroSimple
        eyebrow="What We Do"
        title="Handyman Services"
        subtitle="Skilled, reliable, and detail-oriented  -  we handle the full range of home repairs and improvements that keep your home at its best."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section-padding bg-dark-base">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <SectionLabel className="mb-4">Our Services</SectionLabel>
              <p className="font-sans text-[1rem] text-cream/60 leading-relaxed">
                From carpentry and plumbing to flooring and electrical, we bring professional-grade skill to every project  -  no matter the size. Every job is handled with the same care and attention to detail.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {handymanServices.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} baseHref="/services" />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <div className="mt-10">
              <QuirkyComment
                text="One thing fixed and suddenly you'll see ten more. Fair warning."
                arrow="up-right"
                rotate={-2}
                dark
                className="max-w-xs"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner title="Have a Project in Mind?" subtitle="Tell us what you need  -  we'll provide a free, transparent quote with no pressure." />
    </>
  )
}
