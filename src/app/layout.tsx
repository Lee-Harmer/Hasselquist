import type { Metadata, Viewport } from 'next'
import './globals.css'
import { cormorant, inter } from '@/styles/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/motion/PageTransition'
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C2027',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hasselquistcontracting.com'),
  title: {
    default: 'Hasselquist Contracting | Home Remodeling & Handyman Services Shakopee MN',
    template: '%s | Hasselquist Contracting',
  },
  description:
    'Licensed home remodeling and handyman services in Shakopee, MN. Kitchen remodeling, bathroom renovation, basement finishing, carpentry, and general handyman work serving the Twin Cities area.',
  keywords: [
    'handyman Shakopee MN',
    'home remodeling Shakopee',
    'kitchen remodeling Twin Cities',
    'bathroom renovation Shakopee',
    'basement finishing Minnesota',
    'contractor Shakopee MN',
    'Hasselquist Contracting',
  ],
  openGraph: {
    siteName: 'Hasselquist Contracting',
    locale: 'en_US',
    type: 'website',
    url: 'https://hasselquistcontracting.com',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Hasselquist Contracting — Home Remodeling & Handyman Services Shakopee MN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasselquist Contracting | Home Remodeling & Handyman Services Shakopee MN',
    description: 'Licensed home remodeling and handyman services in Shakopee, MN. Kitchen remodeling, bathroom renovation, basement finishing, and more.',
    images: ['/og-default.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://hasselquistcontracting.com' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://hasselquistcontracting.com/#business',
  name: 'Hasselquist Contracting',
  url: 'https://hasselquistcontracting.com',
  telephone: '+16122576073',
  email: 'Erik@hasselquistcontracting.com',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6801 Oak Ridge Ct',
    addressLocality: 'Shakopee',
    addressRegion: 'MN',
    postalCode: '55379',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.7974,
    longitude: -93.5272,
  },
  areaServed: [
    'Shakopee', 'Eden Prairie', 'Chanhassen', 'Chaska', 'Savage', 'Prior Lake',
    'Burnsville', 'Apple Valley', 'Eagan', 'Lakeville', 'Bloomington', 'Edina',
    'Minnetonka', 'Hopkins', 'St. Louis Park', 'Richfield', 'Minneapolis',
    'Jordan', 'Waconia', 'Victoria', 'Carver', 'Farmington', 'Rosemount', 'New Prague',
    'Plymouth', 'Wayzata', 'Excelsior', 'Mendota Heights', 'Maple Grove',
  ].map((name) => ({ '@type': 'City', name })),
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'Minnesota Residential Contractor License',
    identifier: 'BC808643',
  },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-800">
        <a
          href="#main-content"
          className="skip-nav"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  )
}
