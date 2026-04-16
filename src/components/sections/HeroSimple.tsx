'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroSimpleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  dark?: boolean
  imageSrc?: string
}

export default function HeroSimple({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  dark = false,
  imageSrc,
}: HeroSimpleProps) {
  return (
    <section
      className={`relative pt-36 pb-16 md:pt-44 md:pb-20 ${
        imageSrc ? '' : dark ? 'bg-dark-base' : 'bg-charcoal'
      }`}
    >
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </>
      )}
      <div className="relative container-editorial">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 font-sans text-[0.75rem]">
              <li>
                <Link
                  href="/"
                  className={`${dark || imageSrc ? 'text-cream/60 hover:text-gold' : 'text-cream/60 hover:text-gold'} transition-colors duration-150`}
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={dark || imageSrc ? 'text-cream/20' : 'text-cream/20'}>·</span>
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className={`${dark || imageSrc ? 'text-cream/60 hover:text-gold' : 'text-cream/60 hover:text-gold'} transition-colors duration-150`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className={dark || imageSrc ? 'text-cream/80' : 'text-cream/80'}
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="label-style text-gold mb-4"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={`font-serif font-light text-h1 md:text-display leading-[1.05] mb-5 text-balance ${
              dark || imageSrc ? 'text-cream' : 'text-cream'
            }`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-sans text-lg font-light leading-relaxed ${
                dark || imageSrc ? 'text-cream/90' : 'text-cream/80'
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className={`mt-10 h-px ${dark || imageSrc ? 'bg-gold/20' : 'bg-gold/20'}`} />
      </div>
    </section>
  )
}
