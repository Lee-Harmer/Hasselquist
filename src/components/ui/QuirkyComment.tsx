interface QuirkyCommentProps {
  text: string
  arrow?: 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right'
  rotate?: number
  align?: 'left' | 'center' | 'right'
  dark?: boolean        // true = on a dark background (use gold/cream), false = on light (use gold)
  className?: string
}

function Arrow({ direction, dark }: { direction: string; dark: boolean }) {
  const c = dark ? '#C9A84C' : '#C9A84C' // gold on both - stands out on light and dark

  if (direction === 'right') {
    // Arrow sits left of text, curves right and points right →
    return (
      <svg width="52" height="40" viewBox="0 0 52 40" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M4 28 C6 14 20 8 44 14" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <path d="M44 14 L34 10 M44 14 L42 24" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  if (direction === 'left') {
    // Arrow sits right of text, curves left and points left ←
    return (
      <svg width="52" height="40" viewBox="0 0 52 40" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M48 28 C46 14 32 8 8 14" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 14 L18 10 M8 14 L10 24" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  if (direction === 'up-left') {
    // Arrow sits below-right, curves up and points up-left ↖
    return (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M44 44 C36 32 18 18 8 8" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 8 L20 12 M8 8 L12 20" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  if (direction === 'up-right') {
    // Arrow sits below-left, curves up and points up-right ↗
    return (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M6 44 C14 32 32 18 42 8" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 8 L30 12 M42 8 L38 20" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  if (direction === 'down-left') {
    // Arrow sits above-right, curves down and points down-left ↙
    return (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M44 6 C36 18 18 32 8 42" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 42 L20 38 M8 42 L12 30" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  // down-right ↘
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M6 6 C14 18 32 32 42 42" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 42 L30 38 M42 42 L38 30" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function QuirkyComment({
  text,
  arrow = 'up-left',
  rotate = -3,
  align = 'left',
  dark = false,
  className = '',
}: QuirkyCommentProps) {
  const textColor = dark ? 'text-gold' : 'text-gold'
  const alignClass = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'
  const arrowAfter = arrow === 'left' || arrow === 'down-left'

  return (
    <div
      className={`flex items-end gap-3 ${alignClass} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {!arrowAfter && <Arrow direction={arrow} dark={dark} />}
      <span className={`font-handwriting text-[1.65rem] leading-tight ${textColor}`}>
        {text}
      </span>
      {arrowAfter && <Arrow direction={arrow} dark={dark} />}
    </div>
  )
}
