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

          {/* Col 1 — Brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-36 h-36 flex-shrink-0">
                <Image
                  src="/images/logo/logo.webp"
                  alt="Hasselquist Contracting"
                  fill
                  sizes="144px"
                  className="object-contain"
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

          {/* Col 2 — Pages */}
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

          {/* Col 3 — CTA */}
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-5">Start Your Project</p>
            <p className="font-sans text-[0.82rem] text-cream/80 leading-relaxed mb-6">
              Ready to talk through your project? We offer free consultations — no pressure, just an honest conversation about your home.
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
