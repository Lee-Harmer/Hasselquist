import type { Metadata } from 'next'
import HeroSimple from '@/components/sections/HeroSimple'
import ContactForm from '@/components/sections/ContactForm'
import FadeIn from '@/components/motion/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact Us | Free Quote Shakopee MN',
  description:
    'Contact Hasselquist Contracting for a free, no-obligation quote. Handyman and remodeling services in Shakopee, MN and throughout the Twin Cities metro.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <HeroSimple
        eyebrow="Get In Touch"
        title="Let's Talk About Your Project"
        subtitle="We'd love to hear about what you have in mind. Fill out the form and we'll be in touch within one business day."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <FadeIn direction="right">
              <SectionLabel className="mb-6">Contact Information</SectionLabel>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '612-257-6073',
                    href: 'tel:+16122576073',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'Erik@hasselquistcontracting.com',
                    href: 'mailto:Erik@hasselquistcontracting.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    value: '6801 Oak Ridge Ct\nShakopee, MN 55379',
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-cream border border-stone-200 flex items-center justify-center text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="label-style text-stone-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-sans text-[0.95rem] text-stone-800 hover:text-gold transition-colors duration-150">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-[0.95rem] text-stone-800 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-cream border border-stone-200 p-6">
                <h3 className="font-serif font-medium text-h4 text-stone-900 mb-3">Business Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday — Friday', hours: '7:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM – 4:00 PM' },
                    { day: 'Sunday', hours: 'By appointment' },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between font-sans text-[0.83rem]">
                      <span className="text-stone-500">{row.day}</span>
                      <span className="text-stone-800 font-medium">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-charcoal text-cream p-6">
                <p className="label-style text-gold mb-2">License & Insurance</p>
                <p className="font-sans text-[0.85rem] text-cream/70 leading-relaxed">
                  Hasselquist Contracting is a licensed Minnesota residential contractor (License #BC808643) and fully insured for your protection.
                </p>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 md:h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.4!2d-93.5272!3d44.7974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ3JzUwLjYiTiA5M8KwMzEnMzguMiJX!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hasselquist Contracting location in Shakopee, MN"
          className="absolute inset-0"
        />
      </section>
    </>
  )
}
