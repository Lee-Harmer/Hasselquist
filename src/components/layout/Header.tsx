'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { handymanServices, remodelingServices } from '@/lib/services'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [remodelingOpen, setRemodelingOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change or ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal/98 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Hasselquist Contracting — Home">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="Hasselquist Contracting logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-[1.1rem] font-medium tracking-wide text-cream leading-tight">
                Hasselquist
              </span>
              <span className="block label-style text-gold/80 text-[0.6rem]">
                Contracting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link flex items-center gap-1.5">
                Services
                <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-charcoal border border-gold/20 shadow-2xl py-2 z-50">
                  {handymanServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-5 py-2.5 text-[0.8rem] text-cream/80 hover:text-gold hover:bg-white/5 transition-colors duration-150 font-sans"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                  <div className="border-t border-gold/20 mt-1 pt-1">
                    <Link href="/services" className="block px-5 py-2.5 text-[0.8rem] text-gold hover:text-gold-light transition-colors duration-150 font-sans font-medium">
                      All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Remodeling Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRemodelingOpen(true)}
              onMouseLeave={() => setRemodelingOpen(false)}
            >
              <button className="nav-link flex items-center gap-1.5">
                Remodeling
                <svg className={`w-3 h-3 transition-transform duration-200 ${remodelingOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {remodelingOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-charcoal border border-gold/20 shadow-2xl py-2 z-50">
                  {remodelingServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/remodeling/${s.slug}`}
                      className="block px-5 py-2.5 text-[0.8rem] text-cream/80 hover:text-gold hover:bg-white/5 transition-colors duration-150 font-sans"
                    >
                      {s.shortTitle} Remodeling
                    </Link>
                  ))}
                  <div className="border-t border-gold/20 mt-1 pt-1">
                    <Link href="/remodeling" className="block px-5 py-2.5 text-[0.8rem] text-gold hover:text-gold-light transition-colors duration-150 font-sans font-medium">
                      All Remodeling →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/service-areas" className="nav-link">Areas Served</Link>
            <Link href="/blog" className="nav-link">Journal</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.8rem] tracking-wide px-5 py-2.5 transition-colors duration-200"
            >
              Free Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-1.5 group"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-6 h-px bg-cream transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-charcoal border-l border-gold/20 transition-transform duration-300 ease-out overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile menu"
      >
        <div className="p-8 pt-20">
          {/* Services */}
          <div className="mb-8">
            <p className="label-style text-gold/60 mb-4">Services</p>
            <div className="space-y-3">
              {handymanServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-cream/80 hover:text-gold font-sans text-[0.9rem] transition-colors duration-150"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Remodeling */}
          <div className="mb-8">
            <p className="label-style text-gold/60 mb-4">Remodeling</p>
            <div className="space-y-3">
              {remodelingServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/remodeling/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-cream/80 hover:text-gold font-sans text-[0.9rem] transition-colors duration-150"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 space-y-4">
            {[
              { href: '/service-areas', label: 'Areas Served' },
              { href: '/blog', label: 'Journal' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-cream font-sans text-[1rem] hover:text-gold transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 w-full flex items-center justify-center bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.85rem] tracking-wide py-3.5 transition-colors duration-200"
          >
            Get a Free Quote
          </Link>

          <div className="mt-8 pt-8 border-t border-gold/20">
            <a href="tel:+16122576073" className="block text-gold font-sans text-[0.9rem] hover:text-gold-light transition-colors duration-150">
              612-257-6073
            </a>
            <p className="text-cream/40 font-sans text-[0.75rem] mt-1">Shakopee, MN — Lic. BC808643</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 0.8rem;
          color: rgba(240, 235, 224, 0.75);
          letter-spacing: 0.03em;
          transition: color 0.15s ease;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .nav-link:hover {
          color: #C9A84C;
        }
      `}</style>
    </>
  )
}
