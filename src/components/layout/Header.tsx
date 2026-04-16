'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { handymanServices, remodelingServices } from '@/lib/services'

const navLinkClass =
  'font-sans text-[0.8rem] text-stone-700 hover:text-gold tracking-[0.03em] transition-colors duration-150 bg-transparent border-0 cursor-pointer p-0'

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [remodelingOpen, setRemodelingOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const servicesRef = useRef<HTMLDivElement>(null)
  const remodelingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.75 : 20
      setScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Close dropdowns + mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setRemodelingOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (remodelingRef.current && !remodelingRef.current.contains(e.target as Node)) {
        setRemodelingOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Focus trap for mobile drawer
  const drawerRef = useRef<HTMLDivElement>(null)
  const handleDrawerKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!mobileOpen) return
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
  }, [mobileOpen])

  // Move focus into drawer when opened
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      firstFocusable?.focus()
    }
  }, [mobileOpen])

  const closeAll = () => {
    setServicesOpen(false)
    setRemodelingOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHome && !scrolled
            ? '-translate-y-full'
            : 'translate-y-0 bg-cream/70 backdrop-blur-md shadow-sm py-3'
        }`}
      >
        <div className="container-editorial flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Hasselquist Contracting  -  Home" onClick={closeAll}>
            <div className="relative w-20 h-20 flex-shrink-0 -my-2">
              <Image
                src="/images/logo/logo.webp"
                alt="Hasselquist Contracting logo"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-[1.1rem] font-medium tracking-wide text-stone-900 leading-tight">
                Hasselquist
              </span>
              <span className="block font-sans text-[0.6rem] uppercase tracking-[0.15em] text-stone-500">
                Contracting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">

            <Link href="/" className={navLinkClass} onClick={closeAll}>Home</Link>
            <Link href="/about" className={navLinkClass} onClick={closeAll}>About</Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                className={`${navLinkClass} flex items-center gap-1.5`}
                onClick={() => { setServicesOpen((o) => !o); setRemodelingOpen(false) }}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                aria-controls="services-menu"
              >
                Services
                <Chevron open={servicesOpen} />
              </button>

              {servicesOpen && (
                <div id="services-menu" role="menu" className="absolute top-full left-0 mt-3 w-52 bg-cream/95 backdrop-blur-md border border-stone-200 shadow-xl py-2 z-50">
                  {handymanServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 font-sans text-[0.8rem] text-stone-700 hover:text-gold hover:bg-cream-dark transition-colors duration-150"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                  <div className="border-t border-stone-200 mt-1 pt-1">
                    <Link
                      href="/services"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 font-sans text-[0.8rem] text-gold hover:text-gold-dark transition-colors duration-150 font-medium"
                    >
                      All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Remodeling Dropdown */}
            <div ref={remodelingRef} className="relative">
              <button
                className={`${navLinkClass} flex items-center gap-1.5`}
                onClick={() => { setRemodelingOpen((o) => !o); setServicesOpen(false) }}
                aria-expanded={remodelingOpen}
                aria-haspopup="menu"
                aria-controls="remodeling-menu"
              >
                Remodeling
                <Chevron open={remodelingOpen} />
              </button>

              {remodelingOpen && (
                <div id="remodeling-menu" role="menu" className="absolute top-full left-0 mt-3 w-52 bg-cream/95 backdrop-blur-md border border-stone-200 shadow-xl py-2 z-50">
                  {remodelingServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/remodeling/${s.slug}`}
                      role="menuitem"
                      onClick={() => setRemodelingOpen(false)}
                      className="block px-5 py-2.5 font-sans text-[0.8rem] text-stone-700 hover:text-gold hover:bg-cream-dark transition-colors duration-150"
                    >
                      {s.shortTitle} Remodeling
                    </Link>
                  ))}
                  <div className="border-t border-stone-200 mt-1 pt-1">
                    <Link
                      href="/remodeling"
                      role="menuitem"
                      onClick={() => setRemodelingOpen(false)}
                      className="block px-5 py-2.5 font-sans text-[0.8rem] text-gold hover:text-gold-dark transition-colors duration-150 font-medium"
                    >
                      All Remodeling →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/service-areas" className={navLinkClass} onClick={closeAll}>Service Areas</Link>
            <Link href="/blog" className={navLinkClass} onClick={closeAll}>Journal</Link>
            <Link href="/contact" className={navLinkClass} onClick={closeAll}>Contact</Link>
          </nav>

          {/* CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.8rem] tracking-wide px-5 py-2.5 transition-colors duration-200"
              onClick={closeAll}
            >
              Free Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-3"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-px bg-stone-800 transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-6 h-px bg-stone-800 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-stone-800 transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onKeyDown={handleDrawerKeyDown}
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-charcoal border-l border-gold/20 transition-transform duration-300 ease-out overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-20">
          <div className="mb-8">
            <p className="font-sans text-[0.6rem] uppercase tracking-[0.15em] text-gold/60 mb-4">Services</p>
            <div className="space-y-3">
              {handymanServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block font-sans text-[0.9rem] text-cream/80 hover:text-gold transition-colors duration-150"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="font-sans text-[0.6rem] uppercase tracking-[0.15em] text-gold/60 mb-4">Remodeling</p>
            <div className="space-y-3">
              {remodelingServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/remodeling/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block font-sans text-[0.9rem] text-cream/80 hover:text-gold transition-colors duration-150"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 space-y-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/service-areas', label: 'Service Areas' },
              { href: '/blog', label: 'Journal' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-[1rem] text-cream hover:text-gold transition-colors duration-150"
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
            <a href="tel:+16122576073" className="block font-sans text-[0.9rem] text-gold hover:text-gold-light transition-colors duration-150">
              612-257-6073
            </a>
            <p className="font-sans text-[0.75rem] text-cream/40 mt-1">Shakopee, MN  -  Lic. BC808643</p>
          </div>
        </div>
      </div>
    </>
  )
}
