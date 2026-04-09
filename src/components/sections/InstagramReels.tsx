'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const reels = [
  'https://www.instagram.com/reel/DWhXshwjJAw/',
  'https://www.instagram.com/reel/DWZpba6DHJL/',
  'https://www.instagram.com/reel/DV3_c8tjPwg/',
]

export default function InstagramReels() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => window.instgrm?.Embeds.process()
    document.body.appendChild(script)
  }, [])

  return (
    <section className="section-padding bg-cream border-y border-stone-200">
      <div className="container-editorial">
        <div className="text-center mb-12">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-3">Follow Along</p>
          <h2 className="font-serif font-light text-h2 text-stone-900">See Our Work in Action</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {reels.map((url) => (
            <div key={url} className="w-full max-w-[340px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: 0,
                  boxShadow: 'none',
                  margin: '0 auto',
                  maxWidth: '340px',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
