'use client'

import { useState } from 'react'

interface MapFacadeProps {
  src: string
  title: string
  className?: string
}

export default function MapFacade({ src, title, className }: MapFacadeProps) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
      />
    )
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-stone-100 hover:bg-stone-200 transition-colors duration-200 group"
      aria-label="Load map"
    >
      <svg className="w-8 h-8 text-stone-400 group-hover:text-gold transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      <span className="font-sans text-[0.75rem] uppercase tracking-wider text-stone-500 group-hover:text-stone-700 transition-colors duration-200">
        Click to load map
      </span>
    </button>
  )
}
