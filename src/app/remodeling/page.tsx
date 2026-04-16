import type { Metadata } from 'next'
import HeroSimple from '@/components/sections/HeroSimple'
import ServiceCard from '@/components/sections/ServiceCard'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import QuirkyComment from '@/components/ui/QuirkyComment'
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

      <section className="section-padding bg-dark-base">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <SectionLabel className="mb-4">Full-Service Remodeling</SectionLabel>
              <p className="font-sans text-[1rem] text-cream/60 leading-relaxed">
                Whether you&apos;re dreaming of a chef&apos;s kitchen, a spa-like master bathroom, or a finished basement that your family will love  -  we bring the expertise, project management, and craftsmanship to make it happen.
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

          <FadeIn>
            <div className="mt-10 flex justify-end">
              <QuirkyComment
                text="Spoiler: once one room's done, you'll want to redo everything."
                arrow="up-left"
                rotate={2}
                dark
                align="right"
                className="max-w-xs"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="bg-dark-base pt-10 pb-0">
        <div className="container-editorial flex justify-center">
          <QuirkyComment
            text="Show this to whoever needs convincing."
            arrow="down-right"
            rotate={-1}
            dark
            align="center"
            className="max-w-xs"
          />
        </div>
      </div>
      <CtaBanner title="Let's Plan Your Remodel" subtitle="Every renovation starts with a conversation. Tell us your vision and we'll make it happen." />
    </>
  )
}
