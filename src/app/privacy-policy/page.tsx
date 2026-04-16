import type { Metadata } from 'next'
import HeroSimple from '@/components/sections/HeroSimple'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hasselquist Contracting',
  description: 'Privacy policy for Hasselquist Contracting - how we collect, use, and protect your information.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSimple
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="max-w-2xl prose prose-stone">

            <p className="font-sans text-[0.8rem] text-stone-400 mb-10">Last updated: April 2025</p>

            <h2 className="font-serif font-light text-h3 text-stone-900 mb-4">What We Collect</h2>
            <p className="font-sans text-[0.95rem] text-stone-600 leading-relaxed mb-8">
              When you submit the contact form on this website, we collect the information you provide - your name, email address, phone number, and any project details you choose to share. We do not collect any information beyond what you voluntarily submit.
            </p>

            <h2 className="font-serif font-light text-h3 text-stone-900 mb-4">How We Use It</h2>
            <p className="font-sans text-[0.95rem] text-stone-600 leading-relaxed mb-8">
              Your information is used solely to respond to your inquiry and provide you with a quote or follow-up about your project. We do not sell, rent, or share your personal information with third parties. We do not add you to any mailing list without your explicit consent.
            </p>

            <h2 className="font-serif font-light text-h3 text-stone-900 mb-4">Cookies & Analytics</h2>
            <p className="font-sans text-[0.95rem] text-stone-600 leading-relaxed mb-8">
              This website may use Google Analytics to understand how visitors find and use the site. This collects anonymous, aggregated data such as page views and traffic sources. No personally identifiable information is collected through analytics. You can opt out of Google Analytics using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark">Google Analytics opt-out browser add-on</a>.
            </p>

            <h2 className="font-serif font-light text-h3 text-stone-900 mb-4">Third-Party Services</h2>
            <p className="font-sans text-[0.95rem] text-stone-600 leading-relaxed mb-8">
              Contact form submissions are processed and delivered via Resend, a transactional email service. Your submitted information is transmitted securely and used only to deliver your message to Hasselquist Contracting.
            </p>

            <h2 className="font-serif font-light text-h3 text-stone-900 mb-4">Data Retention</h2>
            <p className="font-sans text-[0.95rem] text-stone-600 leading-relaxed mb-8">
              We retain contact form submissions only as long as necessary to respond to your inquiry. If you would like your information removed, please contact us directly and we will delete it promptly.
            </p>

            <h2 className="font-serif font-light text-h3 text-stone-900 mb-4">Contact</h2>
            <p className="font-sans text-[0.95rem] text-stone-600 leading-relaxed">
              Questions about this policy? Reach us at{' '}
              <a href="mailto:Erik@hasselquistcontracting.com" className="text-gold hover:text-gold-dark">
                Erik@hasselquistcontracting.com
              </a>{' '}
              or by phone at{' '}
              <a href="tel:+16122576073" className="text-gold hover:text-gold-dark">
                612-257-6073
              </a>.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}
