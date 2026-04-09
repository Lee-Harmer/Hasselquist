'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  direction = 'up',
  distance = 30,
}: FadeInProps) {
  const reduced = useReducedMotion()

  const directionMap = {
    up: { y: reduced ? 0 : distance },
    down: { y: reduced ? 0 : -distance },
    left: { x: reduced ? 0 : distance },
    right: { x: reduced ? 0 : -distance },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
