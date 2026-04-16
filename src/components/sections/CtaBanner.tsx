import Link from 'next/link'
import FadeIn from '@/components/motion/FadeIn'

interface CtaBannerProps {
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  phone?: boolean
}

export default function CtaBanner({
  title = 'Ready to Transform Your Home?',
  subtitle = 'Every great project starts with a conversation. Let\'s talk about what you\'re envisioning.',
  primaryCta = { label: 'Get a Free Quote', href: '/contact' },
  phone = true,
}: CtaBannerProps) {
  return (
    <section className="bg-dark-base relative overflow-hidden section-padding-sm">
      {/* Subtle gold texture lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
        <div className="absolute top-1/2 left-16 w-24 h-px bg-gold/10 -translate-y-1/2" />
        <div className="absolute top-1/2 right-16 w-24 h-px bg-gold/10 -translate-y-1/2" />
      </div>

      <div className="container-editorial relative">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-7">
              <div className="h-px w-8 bg-gold/40" />
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">Start Your Project</p>
              <div className="h-px w-8 bg-gold/40" />
            </div>

            <h2 className="font-serif font-light text-[clamp(2rem,4vw,3rem)] text-cream leading-[1.1] mb-5 text-balance">
              {title}
            </h2>
            <p className="font-sans text-[0.9rem] text-cream/50 leading-relaxed mb-10 max-w-md mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.75rem] uppercase tracking-[0.12em] px-9 py-4 transition-all duration-300 hover:gap-4"
              >
                {primaryCta.label}
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              {phone && (
                <a
                  href="tel:+16122576073"
                  className="inline-flex items-center gap-2.5 text-cream/55 hover:text-gold font-sans text-[0.82rem] tracking-wide transition-colors duration-300"
                >
                  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  612-257-6073
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
