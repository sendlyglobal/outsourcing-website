import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface OrbitHeaderProps {
  isDark: boolean
  badge: string
  nodeCount: number
  title: string
  description: string
}

export const OrbitHeader: React.FC<OrbitHeaderProps> = ({
  isDark,
  badge,
  nodeCount,
  title,
  description,
}) => {
  return (
    <div className="absolute top-20 sm:top-24 left-6 z-30 pointer-events-auto flex flex-col gap-3">
      <div className="pointer-events-none max-w-sm">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
              isDark
                ? 'bg-(--teal)/10 border-(--teal)/30 text-(--teal)'
                : 'bg-(--teal)/10 border-(--teal)/40 text-(--teal)'
            }`}
          >
            {badge}
          </span>
          <span
            className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}
          >
            {nodeCount} Nodes
          </span>
        </div>
        <h1
          className={`text-xl sm:text-2xl font-display font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-[11px] leading-relaxed line-clamp-2 mt-0.5 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
