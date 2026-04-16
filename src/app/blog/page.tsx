import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSimple from '@/components/sections/HeroSimple'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'
import QuirkyComment from '@/components/ui/QuirkyComment'
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
  const heroPost = posts.find((p) => p.frontmatter.featured) ?? posts[0]
  const restPosts = posts.filter((p) => p.slug !== heroPost?.slug)

  return (
    <>
      <HeroSimple
        eyebrow="The Hasselquist Journal"
        title="Home Improvement Ideas & Guides"
        subtitle="Expert advice, cost guides, and renovation inspiration for Twin Cities homeowners."
        breadcrumbs={[{ label: 'Journal' }]}
        imageSrc="/images/blog.webp"
      />

      <section className="section-padding bg-cream">
        <div className="container-editorial">
          {posts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <SectionLabel className="mb-4">Coming Soon</SectionLabel>
                <h2 className="font-serif font-light text-h2 text-charcoal mb-4">Articles Coming Soon</h2>
                <p className="font-sans text-stone-500">Check back soon for home improvement guides and renovation tips.</p>
              </div>
            </FadeIn>
          ) : (
            <>
              {/* Quirky intro */}
              <FadeIn>
                <div className="flex justify-end mb-8">
                  <QuirkyComment
                    text="You found our insider page. Consider yourself a VIP."
                    arrow="down-left"
                    rotate={2}
                    align="right"
                  />
                </div>
              </FadeIn>

              {/* Hero post */}
              {heroPost && (
                <FadeIn>
                  <Link
                    href={`/blog/${heroPost.slug}`}
                    className="group flex flex-col md:flex-row bg-charcoal hover:bg-dark-base border border-charcoal hover:border-gold/40 transition-all duration-300 mb-6"
                  >
                    <div className="p-10 md:p-14 flex flex-col justify-between w-full">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <p className="label-style text-gold">{heroPost.frontmatter.category}</p>
                          <span className="font-sans text-[0.65rem] uppercase tracking-widest text-gold/50 border border-gold/30 px-2 py-0.5">Featured</span>
                        </div>
                        <h2 className="font-serif font-light text-[1.9rem] md:text-[2.4rem] leading-[1.1] text-cream group-hover:text-gold transition-colors duration-200 mb-5 text-balance">
                          {heroPost.frontmatter.title}
                        </h2>
                        <p className="font-sans text-[0.9rem] text-cream/55 leading-relaxed max-w-xl">
                          {heroPost.frontmatter.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center gap-3 font-sans text-[0.72rem] text-cream/30">
                          <span>{format(new Date(heroPost.frontmatter.date), 'MMM d, yyyy')}</span>
                          <span>·</span>
                          <span>{heroPost.frontmatter.readTime}</span>
                        </div>
                        <span className="font-sans text-[0.78rem] uppercase tracking-wider text-gold/60 group-hover:text-gold transition-colors duration-200 flex items-center gap-2">
                          Read Article
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )}

              {/* Remaining posts */}
              {restPosts.length > 0 && (
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restPosts.map((post) => (
                    <StaggerItem key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col h-full bg-charcoal hover:bg-dark-base border border-charcoal hover:border-gold/40 transition-all duration-300"
                      >
                        <div className="p-7 flex flex-col flex-1">
                          <p className="label-style text-gold mb-4">{post.frontmatter.category}</p>
                          <h3 className="font-serif font-light text-[1.3rem] leading-snug text-cream group-hover:text-gold transition-colors duration-200 mb-3 flex-1">
                            {post.frontmatter.title}
                          </h3>
                          <p className="font-sans text-[0.83rem] text-cream/50 leading-relaxed line-clamp-2 mb-6">
                            {post.frontmatter.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3 font-sans text-[0.72rem] text-cream/30">
                              <span>{format(new Date(post.frontmatter.date), 'MMM d, yyyy')}</span>
                              <span>·</span>
                              <span>{post.frontmatter.readTime}</span>
                            </div>
                            <svg className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
