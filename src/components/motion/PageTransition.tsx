'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

// Tracks whether the app has loaded in this browser session.
// Module-level so it persists across component remounts (page navigations).
let hasInitiallyLoaded = false

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const reduced = useReducedMotion()

  // First page load: start at full opacity so SSR content is immediately visible.
  // Subsequent navigations: fade in from transparent.
  const isFirstLoad = !hasInitiallyLoaded
  hasInitiallyLoaded = true

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: isFirstLoad || reduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
