import React from 'react'

interface OrbitHeaderProps {
  isDark: boolean
  badge: string
  nodeCount: number
  title: string
  description: string
}

export const OrbitHeader: React.FC<OrbitHeaderProps> = ({
  isDark,
  title,
  description,
}) => {
  return (
    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-30 pointer-events-auto flex flex-col gap-1 max-w-[220px] sm:max-w-xs md:max-w-sm">
      <div className="pointer-events-none">
        <h1
          className={`text-lg sm:text-xl md:text-2xl font-display font-bold tracking-tight leading-snug ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-[10px] sm:text-[11px] leading-relaxed line-clamp-2 mt-0.5 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
