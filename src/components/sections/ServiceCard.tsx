import Link from 'next/link'
import Image from 'next/image'
import { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  baseHref?: string
}

export default function ServiceCard({ service, baseHref }: ServiceCardProps) {
  const href = baseHref
    ? `${baseHref}/${service.slug}`
    : service.category === 'remodeling'
    ? `/remodeling/${service.slug}`
    : `/services/${service.slug}`

  return (
    <Link
      href={href}
      className="group block bg-stone-50 hover:bg-cream transition-colors duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="label-style text-gold mb-2">
          {service.category === 'remodeling' ? 'Remodeling' : 'Handyman'}
        </p>
        <h3 className="font-serif font-medium text-h4 text-stone-900 mb-2 group-hover:text-charcoal transition-colors duration-200">
          {service.shortTitle}
        </h3>
        <p className="font-sans text-[0.85rem] text-stone-600 leading-relaxed line-clamp-2">
          {service.description}
        </p>
        <div className="flex items-center gap-1.5 mt-4 text-gold text-[0.78rem] font-sans font-medium uppercase tracking-wider">
          Learn more
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
