import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSimple from '@/components/sections/HeroSimple'
import CtaBanner from '@/components/sections/CtaBanner'
import InstagramReels from '@/components/sections/InstagramReels'
import FadeIn from '@/components/motion/FadeIn'

export const metadata: Metadata = {
  title: 'About Us | Hasselquist Contracting Shakopee MN',
  description:
    'Hasselquist Contracting started with simple handyman work and grew into full home transformations. Learn our story and what drives the way we work.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <HeroSimple
        eyebrow="About Hasselquist Contracting"
        title="Every Home Has a Story. Ours Started Small."
        breadcrumbs={[{ label: 'About' }]}
        imageSrc="/images/about-hero.png"
      />

      {/* Main Story */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Copy */}
            <FadeIn direction="right">
              <div className="space-y-6 font-sans text-[1rem] text-stone-600 leading-relaxed">
                <p>
                  Hasselquist Contracting began with simple handyman jobs  -  helping neighbours, friends, and local homeowners with the kinds of repairs most companies overlook. Small drywall patches. Minor fixes. The kind of work that builds trust one home at a time.
                </p>
                <p>
                  From those early days, word spread. Not because of marketing, but because people felt taken care of.
                </p>
                <p className="font-sans text-[1rem] text-stone-900 font-medium">
                  Today, that same foundation has grown into something much bigger.
                </p>
                <p>
                  We now design and build spaces that families truly live in. Kitchens where people gather for holidays. Basements transformed into entertainment spaces  -  from movie rooms to golf simulators. Homes that don&apos;t just look better, but feel better to live in.
                </p>
                <p>
                  But we&apos;ve never left our roots behind.
                </p>
                <p>
                  Handyman work is still a core part of what we do. Not as an afterthought, but as a commitment. Because building a home is one thing. Maintaining it, improving it, and being there for our clients long after the project is done  -  that&apos;s what builds real relationships.
                </p>
                <p>
                  We don&apos;t just complete projects and move on. We stay connected. We become the team homeowners call when something needs attention, when ideas evolve, or when it&apos;s time for the next chapter of their home.
                </p>
              </div>

              {/* Closing statement */}
              <div className="mt-12 border-l-2 border-gold pl-7 space-y-3">
                <p className="font-serif font-light italic text-[1.25rem] text-stone-800 leading-snug">
                  From small repairs to full transformations, our approach stays the same.
                </p>
                <div className="space-y-1 font-sans text-[0.875rem] text-stone-500">
                  <p>Do good work.</p>
                  <p>Treat people right.</p>
                  <p>Build spaces that are meant to be lived in.</p>
                </div>
              </div>

            </FadeIn>

            {/* Images */}
            <FadeIn direction="left" delay={0.15}>
              <div className="relative lg:sticky lg:top-32 space-y-6">
                {/* Erik portrait */}
                <div className="relative">
                  <div className="aspect-[1/1] relative overflow-hidden bg-cream-dark">
                    <Image
                      src="/images/photo-of-erik.webp"
                      alt="Erik Hasselquist  -  owner of Hasselquist Contracting, Shakopee MN"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-gold/30 -z-10" />
                  <div className="absolute -top-5 -left-5 w-20 h-20 bg-cream -z-10" />
                </div>

                {/* Vehicle / branding photo */}
                <div className="aspect-[16/9] relative overflow-hidden bg-cream-dark">
                  <Image
                    src="/images/eriks-vehicle.webp"
                    alt="Hasselquist Contracting branded vehicle serving the Twin Cities"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-14 bg-stone-50 border-y border-stone-200">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-0">
              {[
                {
                  label: 'Licensed & Insured',
                  sublabel: 'Lic. BC808643',
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
                {
                  label: 'Free Estimates',
                  sublabel: 'No obligation',
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  ),
                },
                {
                  label: 'Satisfaction',
                  sublabel: 'Guaranteed',
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  ),
                },
                {
                  label: 'Twin Cities Metro',
                  sublabel: 'Shakopee, MN',
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-10 bg-stone-200 mx-8" />}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <p className="font-sans text-[0.78rem] font-medium text-stone-800 leading-tight">{item.label}</p>
                      <p className="font-sans text-[0.68rem] text-stone-400 tracking-wide mt-0.5">{item.sublabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      <InstagramReels />

      <CtaBanner
        title="Let's Build Something Together"
        subtitle="Ready to work with a team that stays connected long after the project is done? We'd love to hear from you."
      />
    </>
  )
}
