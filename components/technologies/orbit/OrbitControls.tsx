import React from 'react'
import { Search, Play, Pause, Eye } from 'lucide-react'

interface OrbitControlsProps {
  isDark: boolean
  searchQuery: string
  setSearchQuery: (val: string) => void
  isPlaying: boolean
  setIsPlaying: (val: boolean | ((prev: boolean) => boolean)) => void
  showOrbits: boolean
  setShowOrbits: (val: boolean | ((prev: boolean) => boolean)) => void
  speedMultiplier: number
  setSpeedMultiplier: (val: number) => void
}

export const OrbitControls: React.FC<OrbitControlsProps> = ({
  isDark,
  searchQuery,
  setSearchQuery,
  isPlaying,
  setIsPlaying,
  showOrbits,
  setShowOrbits,
  speedMultiplier,
  setSpeedMultiplier,
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-auto sm:top-6 sm:right-6 sm:left-auto sm:translate-x-0 z-30 flex flex-col sm:items-end gap-2 pointer-events-auto max-w-[calc(100vw-24px)]">
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-end">
        <div
          className={`px-2.5 py-1.5 rounded-2xl backdrop-blur-xl border flex items-center gap-1.5 text-xs ${
            isDark
              ? 'bg-black/90 border-zinc-800 text-white'
              : 'bg-white/90 border-zinc-200 text-black'
          }`}
        >
          <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Search node..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs outline-none w-20 sm:w-28 placeholder:text-zinc-500"
          />
        </div>

        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className={`p-2 rounded-xl border backdrop-blur-xl transition-colors cursor-pointer ${
            isDark
              ? 'bg-black/90 border-zinc-800 text-(--teal) hover:bg-zinc-900'
              : 'bg-white/90 border-zinc-200 text-(--teal) hover:bg-zinc-100'
          }`}
          title={isPlaying ? 'Pause Orbit' : 'Resume Orbit'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={() => setShowOrbits((prev) => !prev)}
          className={`p-2 rounded-xl border backdrop-blur-xl transition-all cursor-pointer ${
            showOrbits
              ? isDark
                ? 'text-(--teal) bg-zinc-900 border-zinc-800'
                : 'text-(--teal) bg-zinc-100 border-zinc-200'
              : isDark
                ? 'text-zinc-500 hover:text-zinc-300 bg-black/90 border-zinc-800'
                : 'text-zinc-400 hover:text-zinc-700 bg-white/90 border-zinc-200'
          }`}
          title="Toggle Orbital Path Lines"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        <div
          className={`px-2.5 py-1.5 rounded-2xl backdrop-blur-xl border shadow-xl flex items-center gap-1.5 text-xs font-mono transition-colors ${
            isDark
              ? 'bg-black/90 border-zinc-800 text-zinc-400 shadow-black/80'
              : 'bg-white/90 border-zinc-200 text-zinc-600 shadow-zinc-300/40'
          }`}
        >
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={speedMultiplier}
            onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
            className={`w-12 sm:w-16 accent-(--teal) cursor-pointer h-1.5 rounded-lg ${
              isDark ? 'bg-zinc-800' : 'bg-zinc-200'
            }`}
          />
          <span className="text-(--teal) font-bold text-[11px] w-5 text-right">
            {speedMultiplier}x
          </span>
        </div>
      </div>
    </div>
  )
}
