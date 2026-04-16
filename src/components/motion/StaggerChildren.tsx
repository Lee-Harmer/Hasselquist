'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  containerDelay?: number
  className?: string
}

export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  containerDelay = 0,
  className = '',
}: StaggerChildrenProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : staggerDelay,
            delayChildren: reduced ? 0 : containerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.55, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  )
}
