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
    <section className="bg-charcoal section-padding-sm">
      <div className="container-editorial">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p className="label-style text-gold mb-5">Start Your Project</p>
            <h2 className="font-serif font-light text-h2 md:text-[2.8rem] text-cream leading-tight mb-5 text-balance">
              {title}
            </h2>
            <p className="font-sans text-[1rem] text-cream/60 leading-relaxed mb-10">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[0.8rem] uppercase tracking-wider px-8 py-4 transition-colors duration-200"
              >
                {primaryCta.label}
              </Link>

              {phone && (
                <a
                  href="tel:+16122576073"
                  className="inline-flex items-center gap-2 text-cream/70 hover:text-gold font-sans text-[0.85rem] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
