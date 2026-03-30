interface DividerProps {
  className?: string
  withDiamond?: boolean
}

export default function Divider({ className = '', withDiamond = false }: DividerProps) {
  if (withDiamond) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex-1 h-px bg-gold/25" />
        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
        <div className="flex-1 h-px bg-gold/25" />
      </div>
    )
  }

  return <div className={`h-px bg-gold/25 ${className}`} />
}
