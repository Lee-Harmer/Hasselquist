import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/lib/mdx'
import CtaBanner from '@/components/sections/CtaBanner'
import FadeIn from '@/components/motion/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import { format } from 'date-fns'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [{ url: post.frontmatter.coverImage }],
      type: 'article',
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.lastModified || post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.frontmatter.category)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: `https://hasselquistcontracting.com${post.frontmatter.coverImage}`,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.lastModified || post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: post.frontmatter.author,
      url: 'https://hasselquistcontracting.com',
    },
    publisher: {
      '@id': 'https://hasselquistcontracting.com/#business',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 bg-cream">
        <div className="container-editorial max-w-4xl">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-2 font-sans text-[0.75rem] text-stone-400">
                <li><Link href="/" className="hover:text-gold transition-colors duration-150">Home</Link></li>
                <li>·</li>
                <li><Link href="/blog" className="hover:text-gold transition-colors duration-150">Journal</Link></li>
                <li>·</li>
                <li className="text-stone-600">{post.frontmatter.category}</li>
              </ol>
            </nav>

            <SectionLabel className="mb-4">{post.frontmatter.category}</SectionLabel>
            <h1 className="font-serif font-light text-h1 md:text-display text-stone-900 leading-[1.05] mb-6 text-balance">
              {post.frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 font-sans text-[0.78rem] text-stone-400 mb-8">
              <span>By {post.frontmatter.author}</span>
              <span>·</span>
              <span>{format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}</span>
              <span>·</span>
              <span>{post.frontmatter.readTime}</span>
            </div>

            <Divider className="mb-0" />
          </FadeIn>
        </div>
      </section>

      {/* Cover Image */}
      <div className="relative aspect-[16/6] max-h-[480px] overflow-hidden bg-stone-200">
        <Image
          src={post.frontmatter.coverImage}
          alt={post.frontmatter.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <section className="section-padding bg-stone-50">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg font-sans max-w-none">
              <MDXRemote source={post.content} />
            </article>

            {/* Tags */}
            {post.frontmatter.tags?.length > 0 && (
              <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[0.72rem] uppercase tracking-wider px-3 py-1.5 bg-cream text-stone-500 border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mid-article CTA */}
      <CtaBanner
        title="Ready to Start Your Project?"
        subtitle="Get a free, no-obligation quote from Hasselquist Contracting — serving Shakopee and the Twin Cities."
      />

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section-padding-sm bg-stone-50">
          <div className="container-editorial">
            <FadeIn>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <SectionLabel className="mb-3">Continue Reading</SectionLabel>
                  <h2 className="font-serif font-light text-h3 text-stone-900">Related Articles</h2>
                </div>
                <Link href="/blog" className="font-sans text-[0.78rem] uppercase tracking-wider text-gold hover:text-gold-dark transition-colors duration-200">
                  All Articles →
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white hover:bg-cream transition-colors duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <Image
                      src={p.frontmatter.coverImage}
                      alt={p.frontmatter.title}
                      fill
                      sizes="33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-5">
                    <p className="label-style text-gold mb-2">{p.frontmatter.category}</p>
                    <h3 className="font-serif font-medium text-[1.05rem] text-stone-900 leading-snug group-hover:text-charcoal transition-colors">
                      {p.frontmatter.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
