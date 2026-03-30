import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroSimple from '@/components/sections/HeroSimple'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import { getAllPosts } from '@/lib/mdx'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Home Improvement Journal | Remodeling Tips & Guides Shakopee MN',
  description:
    'Home remodeling tips, cost guides, and renovation inspiration from Hasselquist Contracting in Shakopee, MN. Expert advice for Twin Cities homeowners.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <HeroSimple
        eyebrow="The Hasselquist Journal"
        title="Home Improvement Ideas & Guides"
        subtitle="Expert advice, cost guides, and renovation inspiration for Twin Cities homeowners."
        breadcrumbs={[{ label: 'Journal' }]}
      />

      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          {posts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <SectionLabel className="mb-4">Coming Soon</SectionLabel>
                <h2 className="font-serif font-light text-h2 text-stone-900 mb-4">Articles Coming Soon</h2>
                <p className="font-sans text-stone-500">Check back soon for home improvement guides and renovation tips.</p>
              </div>
            </FadeIn>
          ) : (
            <>
              {/* Featured post */}
              {posts[0] && (
                <FadeIn className="mb-14">
                  <Link href={`/blog/${posts[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-cream hover:bg-cream-dark transition-colors duration-300">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-stone-200">
                      <Image
                        src={posts[0].frontmatter.coverImage}
                        alt={posts[0].frontmatter.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <p className="label-style text-gold mb-3">{posts[0].frontmatter.category}</p>
                      <h2 className="font-serif font-light text-h2 text-stone-900 mb-4 leading-tight group-hover:text-charcoal transition-colors duration-200">
                        {posts[0].frontmatter.title}
                      </h2>
                      <p className="font-sans text-[0.9rem] text-stone-600 leading-relaxed mb-6">
                        {posts[0].frontmatter.description}
                      </p>
                      <div className="flex items-center gap-4 font-sans text-[0.75rem] text-stone-400 mb-6">
                        <span>{format(new Date(posts[0].frontmatter.date), 'MMMM d, yyyy')}</span>
                        <span>·</span>
                        <span>{posts[0].frontmatter.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gold text-[0.78rem] font-sans font-medium uppercase tracking-wider">
                        Read Article
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )}

              {/* Remaining posts grid */}
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(1).map((post) => (
                  <StaggerItem key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-white hover:bg-cream transition-colors duration-300"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                        <Image
                          src={post.frontmatter.coverImage}
                          alt={post.frontmatter.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="p-6">
                        <p className="label-style text-gold mb-2">{post.frontmatter.category}</p>
                        <h3 className="font-serif font-medium text-h4 text-stone-900 mb-2 leading-snug group-hover:text-charcoal transition-colors duration-200">
                          {post.frontmatter.title}
                        </h3>
                        <p className="font-sans text-[0.83rem] text-stone-500 line-clamp-2 mb-4">
                          {post.frontmatter.description}
                        </p>
                        <div className="flex items-center gap-3 font-sans text-[0.72rem] text-stone-400">
                          <span>{format(new Date(post.frontmatter.date), 'MMM d, yyyy')}</span>
                          <span>·</span>
                          <span>{post.frontmatter.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </>
          )}
        </div>
      </section>

      <CtaBanner title="Ready to Start Your Project?" subtitle="Our journal gives you the knowledge — we give you the craftsmanship." />
    </>
  )
}
