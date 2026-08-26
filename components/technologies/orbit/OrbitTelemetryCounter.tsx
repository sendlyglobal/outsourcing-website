import React from 'react'

interface OrbitTelemetryCounterProps {
  isDark: boolean
  filteredCount: number
  totalCount: number
}

export const OrbitTelemetryCounter: React.FC<OrbitTelemetryCounterProps> = ({
  isDark,
  filteredCount,
  totalCount,
}) => {
  return (
    <div
      className={`absolute bottom-6 right-6 z-30 px-3.5 py-2 rounded-2xl backdrop-blur-xl border shadow-xl flex items-center gap-3 text-xs font-mono pointer-events-none transition-colors ${
        isDark
          ? 'bg-black border-zinc-800 text-zinc-400 shadow-black/80'
          : 'bg-white border-zinc-200 text-zinc-700 shadow-zinc-300/40'
      }`}
    >
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      <span>
        Planets in Orbit:{' '}
        <strong className={isDark ? 'text-white font-bold' : 'text-black font-bold'}>
          {filteredCount}
        </strong>{' '}
        / {totalCount}
      </span>
    </div>
  )
}
