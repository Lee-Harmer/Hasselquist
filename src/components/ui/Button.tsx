import Link from 'next/link'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variants = {
  primary: 'bg-gold hover:bg-gold-dark text-charcoal font-medium',
  secondary: 'bg-charcoal hover:bg-stone-800 text-cream font-medium',
  outline: 'border border-gold text-gold hover:bg-gold hover:text-charcoal font-medium',
  ghost: 'text-gold hover:text-gold-dark underline-offset-4 hover:underline font-medium',
}

const sizes = {
  sm: 'text-[0.75rem] px-4 py-2 tracking-wide',
  md: 'text-[0.8rem] px-6 py-3 tracking-wide',
  lg: 'text-[0.85rem] px-8 py-4 tracking-wider',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 font-sans uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
