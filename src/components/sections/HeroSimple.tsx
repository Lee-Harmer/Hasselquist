'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
}

export default function HeroSimple({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  dark = false,
}: HeroSimpleProps) {
  return (
    <section
      className={`pt-36 pb-16 md:pt-44 md:pb-20 ${
        dark ? 'bg-charcoal' : 'bg-cream'
      }`}
    >
      <div className="container-editorial">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 font-sans text-[0.75rem]">
              <li>
                <Link
                  href="/"
                  className={`${dark ? 'text-cream/40 hover:text-gold' : 'text-stone-400 hover:text-gold'} transition-colors duration-150`}
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={dark ? 'text-cream/20' : 'text-stone-300'}>·</span>
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className={`${dark ? 'text-cream/40 hover:text-gold' : 'text-stone-400 hover:text-gold'} transition-colors duration-150`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={dark ? 'text-cream/60' : 'text-stone-600'}>
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
              dark ? 'text-cream' : 'text-stone-900'
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
                dark ? 'text-cream/65' : 'text-stone-600'
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className={`mt-10 h-px ${dark ? 'bg-gold/20' : 'bg-stone-200'}`} />
      </div>
    </section>
  )
}
