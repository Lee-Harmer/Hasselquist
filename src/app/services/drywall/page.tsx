import type { Metadata } from 'next'
import { getServiceBySlug, handymanServices } from '@/lib/services'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { notFound } from 'next/navigation'

const SLUG = 'drywall'

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${SLUG}` },
  }
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG)
  if (!service) notFound()
  const related = handymanServices.filter((s) => s.slug !== SLUG).slice(0, 3)
  return (
    <ServicePageTemplate
      service={service}
      relatedServices={related}
      basePath="/services"
      parentLabel="Handyman Services"
      parentHref="/services"
    />
  )
}
