import type { Metadata } from 'next'
import { getServiceBySlug, remodelingServices } from '@/lib/services'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import { notFound } from 'next/navigation'

const SLUG = 'bathroom'

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/remodeling/${SLUG}` },
  }
}

export default function RemodelingServicePage() {
  const service = getServiceBySlug(SLUG)
  if (!service) notFound()
  const related = remodelingServices.filter((s) => s.slug !== SLUG)
  return (
    <ServicePageTemplate
      service={service}
      relatedServices={related}
      basePath="/remodeling"
      parentLabel="Remodeling"
      parentHref="/remodeling"
    />
  )
}
