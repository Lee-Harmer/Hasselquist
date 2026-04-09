/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hasselquistcontracting.com',
  outDir: './out',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priorities
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.startsWith('/services') || path.startsWith('/remodeling')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.startsWith('/service-areas')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.startsWith('/blog')) {
      priority = 0.7
      changefreq = 'weekly'
    } else if (path === '/contact') {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
