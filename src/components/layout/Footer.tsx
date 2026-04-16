import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative text-cream bg-charcoal" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/footer-bg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative container-editorial pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1 - Brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-36 h-36 flex-shrink-0">
                <div className="absolute inset-8 rounded-full bg-white/90" />
                <Image
                  src="/images/logo/logo.webp"
                  alt="Hasselquist Contracting"
                  fill
                  sizes="144px"
                  className="object-contain relative"
                />
              </div>
              <div>
                <span className="block font-serif text-[1rem] font-medium text-cream leading-tight">Hasselquist</span>
                <span className="block font-sans text-[0.58rem] uppercase tracking-[0.15em] text-gold">Contracting</span>
              </div>
            </Link>

            <p className="font-sans text-[0.82rem] text-cream/80 leading-relaxed mb-6 max-w-xs">
              Licensed remodeling and home services in Shakopee, MN. Kitchens, bathrooms, basements, and precision home care across the Twin Cities metro.
            </p>

            <div className="space-y-2">
              <a href="tel:+16122576073" className="flex items-center gap-2.5 font-sans text-[0.82rem] text-gold hover:text-gold-light transition-colors duration-200">
                <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                612-257-6073
              </a>
              <a href="mailto:Erik@hasselquistcontracting.com" className="flex items-center gap-2.5 font-sans text-[0.82rem] text-cream/80 hover:text-gold transition-colors duration-200">
                <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Erik@hasselquistcontracting.com
              </a>
              <p className="flex items-start gap-2.5 font-sans text-[0.82rem] text-cream/70">
                <svg aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                6801 Oak Ridge Ct, Shakopee, MN 55379
              </p>
            </div>
          </div>

          {/* Col 2 - Pages */}
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-5">Pages</p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/remodeling', label: 'Remodeling' },
                { href: '/about', label: 'About Us' },
                { href: '/service-areas', label: 'Areas Served' },
                { href: '/blog', label: 'Journal' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[0.82rem] text-cream/80 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - CTA */}
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-5">Start Your Project</p>
            <p className="font-sans text-[0.82rem] text-cream/80 leading-relaxed mb-6">
              Ready to talk through your project? We offer free consultations, no pressure, just an honest conversation about your home.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.75rem] uppercase tracking-[0.12em] px-7 py-3.5 transition-all duration-300 hover:gap-4"
            >
              Book a Free Consultation
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <div className="mt-8">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-4">Follow Along</p>
              <div className="flex items-center gap-3">
                {[
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/hasselquist_contracting?igsh=YzlnbzNuZWt0cWR0',
                    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
                  },
                  {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/share/1ApToZ7oRo/',
                    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
                  },
                  {
                    label: 'TikTok',
                    href: 'https://www.tiktok.com/@hasselquist_contracting?_r=1&_t=ZS-95a7qgNIjDN',
                    icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>,
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/erik-hasselquist-4a391832',
                    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
                  },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center text-cream/60 hover:text-gold transition-colors duration-200"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gold/30 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-sans text-[0.72rem] text-cream/60">
            © {new Date().getFullYear()} Hasselquist Contracting. All rights reserved. Lic. BC808643.
          </p>
          <Link
            href="/privacy-policy"
            className="font-sans text-[0.72rem] text-cream/60 hover:text-cream transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  )
}
