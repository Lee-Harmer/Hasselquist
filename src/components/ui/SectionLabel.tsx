import { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <p className={`label-style ${light ? 'text-gold/60' : 'text-gold'} ${className}`}>
      {children}
    </p>
  )
}
