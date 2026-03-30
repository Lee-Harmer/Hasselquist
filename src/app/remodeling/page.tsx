import type { Metadata } from 'next'
import HeroSimple from '@/components/sections/HeroSimple'
import ServiceCard from '@/components/sections/ServiceCard'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import { remodelingServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Home Remodeling Services Shakopee MN | Kitchen, Bathroom & Basement',
  description:
    'Complete home remodeling in Shakopee, MN. Kitchen remodeling, bathroom renovation, and basement finishing. Serving the Twin Cities metro with quality craftsmanship.',
  alternates: { canonical: '/remodeling' },
}

export default function RemodelingPage() {
  return (
    <>
      <HeroSimple
        eyebrow="Transform Your Home"
        title="Remodeling Services"
        subtitle="From kitchens to basements, we manage full home transformations with the skill, detail, and transparency you deserve."
        breadcrumbs={[{ label: 'Remodeling' }]}
      />

      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <SectionLabel className="mb-4">Full-Service Remodeling</SectionLabel>
              <p className="font-sans text-[1rem] text-stone-600 leading-relaxed">
                Whether you&apos;re dreaming of a chef&apos;s kitchen, a spa-like master bathroom, or a finished basement that your family will love — we bring the expertise, project management, and craftsmanship to make it happen.
              </p>
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

      <CtaBanner title="Let's Plan Your Remodel" subtitle="Every renovation starts with a conversation. Tell us your vision and we'll make it happen." />
    </>
  )
}
