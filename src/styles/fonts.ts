import { Bodoni_Moda, Figtree, Caveat } from 'next/font/google'

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-caveat',
  display: 'swap',
})

export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})
