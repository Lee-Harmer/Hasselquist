import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  lastModified?: string
  author: string
  category: string
  tags: string[]
  readTime: string
  coverImage: string
  featured?: boolean
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
        slug,
        frontmatter: {
          ...(data as BlogFrontmatter),
          readTime: rt.text,
        },
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return undefined

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    frontmatter: {
      ...(data as BlogFrontmatter),
      readTime: rt.text,
    },
    content,
  }
}

export function getRelatedPosts(currentSlug: string, category: string, count = 3): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.frontmatter.category === category)
    .slice(0, count)
}

export function getFeaturedPosts(count = 3): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.frontmatter.featured)
    .slice(0, count)
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
