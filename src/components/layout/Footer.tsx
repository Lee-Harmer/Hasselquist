import Link from 'next/link'
import Image from 'next/image'
import { handymanServices, remodelingServices } from '@/lib/services'
import { cities } from '@/lib/cities'

export default function Footer() {
  const featuredCities = cities.slice(0, 10)

  return (
    <footer className="bg-charcoal text-cream/70">
      {/* Main Footer */}
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo/logo.png"
                  alt="Hasselquist Contracting"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-serif text-[1.05rem] font-medium text-cream leading-tight">
                  Hasselquist
                </span>
                <span className="block label-style text-gold/70 text-[0.6rem]">
                  Contracting
                </span>
              </div>
            </Link>

            <p className="font-sans text-[0.85rem] leading-relaxed text-cream/60 mb-6 max-w-xs">
              Experienced craftsmanship and comprehensive home improvement solutions serving the Twin Cities and southwest metro since 2024.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+16122576073"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-150 font-sans text-[0.85rem]"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                612-257-6073
              </a>
              <a
                href="mailto:Erik@hasselquistcontracting.com"
                className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-150 font-sans text-[0.85rem]"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Erik@hasselquistcontracting.com
              </a>
              <p className="flex items-start gap-2 text-cream/50 font-sans text-[0.8rem]">
                <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                6801 Oak Ridge Ct<br />Shakopee, MN 55379
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="label-style text-gold mb-5">Services</h3>
            <ul className="space-y-2.5">
              {handymanServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-sans text-[0.83rem] text-cream/60 hover:text-gold transition-colors duration-150"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="font-sans text-[0.83rem] text-gold/70 hover:text-gold transition-colors duration-150">
                  All Services →
                </Link>
              </li>
            </ul>

            <h3 className="label-style text-gold mb-5 mt-8">Remodeling</h3>
            <ul className="space-y-2.5">
              {remodelingServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/remodeling/${s.slug}`}
                    className="font-sans text-[0.83rem] text-cream/60 hover:text-gold transition-colors duration-150"
                  >
                    {s.shortTitle} Remodeling
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/remodeling" className="font-sans text-[0.83rem] text-gold/70 hover:text-gold transition-colors duration-150">
                  All Remodeling →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served Column */}
          <div>
            <h3 className="label-style text-gold mb-5">Areas Served</h3>
            <ul className="space-y-2.5">
              {featuredCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="font-sans text-[0.83rem] text-cream/60 hover:text-gold transition-colors duration-150"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/service-areas" className="font-sans text-[0.83rem] text-gold/70 hover:text-gold transition-colors duration-150">
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="label-style text-gold mb-5">Company</h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { href: '/blog', label: 'Journal' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/service-areas', label: 'Service Areas' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[0.83rem] text-cream/60 hover:text-gold transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-gold/15 p-4">
              <p className="label-style text-gold/70 mb-2">Get a Free Quote</p>
              <p className="font-sans text-[0.8rem] text-cream/50 mb-3 leading-relaxed">
                Ready to start your project? We&apos;d love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.75rem] tracking-wide px-4 py-2.5 transition-colors duration-200"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/15">
        <div className="container-editorial py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[0.75rem] text-cream/35 text-center sm:text-left">
            © {new Date().getFullYear()} Hasselquist Contracting. All rights reserved. License #BC808643.
          </p>
          <p className="font-sans text-[0.75rem] text-cream/35">
            Shakopee, MN 55379 · Serving the Twin Cities
          </p>
        </div>
      </div>
    </footer>
  )
}
