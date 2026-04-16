import Link from 'next/link'
import Image from 'next/image'
import { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  baseHref?: string
  variant?: 'light' | 'dark'
  featured?: boolean
}

export default function ServiceCard({ service, baseHref, variant = 'dark', featured = false }: ServiceCardProps) {
  const href = baseHref
    ? `${baseHref}/${service.slug}`
    : service.category === 'remodeling'
    ? `/remodeling/${service.slug}`
    : `/services/${service.slug}`

  const isLight = variant === 'light'

  if (featured) {
    return (
      <Link href={href} className="group grid grid-cols-1 md:grid-cols-2 overflow-hidden" aria-label={`${service.shortTitle}: learn more`}>
        {/* Image - larger for featured */}
        <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${isLight ? 'bg-stone-100' : 'bg-charcoal'}`} aria-hidden="true">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Content - more generous on featured */}
        <div className={`flex flex-col justify-center p-8 md:p-12 ${isLight ? 'bg-stone-50' : 'bg-charcoal'}`}>
          <h3 className={`font-serif font-light text-[1.9rem] md:text-[2.2rem] leading-[1.15] mb-4 group-hover:text-gold transition-colors duration-300 ${isLight ? 'text-stone-900' : 'text-cream'}`}>
            {service.shortTitle}
          </h3>
          <p className={`font-sans text-[0.9rem] leading-relaxed mb-5 ${isLight ? 'text-stone-500' : 'text-cream/50'}`}>
            {service.description}
          </p>
          {service.hook && (
            <p className="font-serif italic text-[1rem] text-gold/80 mb-6">{service.hook}</p>
          )}
          <div className="flex items-center gap-2 text-gold text-[0.7rem] font-sans uppercase tracking-[0.12em]" aria-hidden="true">
            <span>Explore</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group flex flex-col h-full overflow-hidden" aria-label={`${service.shortTitle}: learn more`}>
      {/* Image */}
      <div className={`relative aspect-[3/2] overflow-hidden ${isLight ? 'bg-stone-100' : 'bg-charcoal'}`} aria-hidden="true">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Gradient reveal on hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors duration-500" />
        {/* Gold bottom border reveal */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Content */}
      <div className={`p-6 ${isLight ? 'bg-stone-50' : 'bg-charcoal'}`}>
        <h3 className={`font-serif font-light text-[1.35rem] mb-2 group-hover:text-gold transition-colors duration-300 ${isLight ? 'text-stone-900' : 'text-cream'}`}>
          {service.shortTitle}
        </h3>
        <p className={`font-sans text-[0.83rem] leading-relaxed line-clamp-2 mb-3 ${isLight ? 'text-stone-500' : 'text-cream/50'}`}>
          {service.description}
        </p>
        {service.hook && (
          <p className="font-serif italic text-[0.95rem] text-gold/80 mb-3">{service.hook}</p>
        )}
        <div className="flex items-center gap-2 text-gold text-[0.7rem] font-sans uppercase tracking-[0.12em]" aria-hidden="true">
          <span>Explore</span>
          <svg className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
