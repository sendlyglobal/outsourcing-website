import React from 'react'
import { Smartphone, Server, Cpu, Globe } from 'lucide-react'
import { TechDomain } from '@/types/animation'

interface OrbitCoreStarProps {
  isDark: boolean
  activeDomain: TechDomain
  coreLabel: string
  coreSub: string
  onTogglePlay: () => void
}

export const OrbitCoreStar: React.FC<OrbitCoreStarProps> = ({
  isDark,
  activeDomain,
  coreLabel,
  coreSub,
  onTogglePlay,
}) => {
  return (
    <div
      className="absolute z-20 flex flex-col items-center justify-center rounded-full cursor-pointer group"
      onClick={onTogglePlay}
      title="Click to Play/Pause Orbit"
    >
      <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-(--teal)/20 via-cyan-400/20 to-blue-600/20 blur-xl animate-pulse" />
      <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-(--teal)/30 to-emerald-400/20 blur-md" />

      <div
        className={`relative w-24 h-24 rounded-full border-2 transition-transform duration-300 group-hover:scale-105 flex flex-col items-center justify-center ${
          isDark
            ? 'bg-black border-(--teal)/80 shadow-[0_0_35px_rgba(10,138,158,0.5)]'
            : 'bg-white border-(--teal) shadow-[0_0_30px_rgba(10,138,158,0.25)]'
        }`}
      >
        <div className="absolute inset-1 rounded-full border border-(--teal)/20 animate-[spin_16s_linear_infinite]" />
        <div className="absolute inset-2.5 rounded-full border border-dashed border-cyan-400/30 animate-[spin_24s_linear_infinite_reverse]" />

        {activeDomain === 'mobile' ? (
          <Smartphone className="w-5 h-5 text-(--teal) mb-0.5 animate-pulse" />
        ) : activeDomain === 'erp' ? (
          <Server className="w-5 h-5 text-blue-400 mb-0.5 animate-pulse" />
        ) : activeDomain === 'custom' ? (
          <Cpu className="w-5 h-5 text-emerald-400 mb-0.5 animate-pulse" />
        ) : (
          <Globe className="w-5 h-5 text-(--teal) mb-0.5 animate-pulse" />
        )}

        <span
          className={`text-sm font-display font-extrabold tracking-widest ${
            isDark
              ? 'text-white drop-shadow-[0_0_8px_rgba(10,138,158,0.8)]'
              : 'text-black'
          }`}
        >
          {coreLabel}
        </span>
        <span className="text-[7.5px] font-mono tracking-wider text-(--teal) uppercase font-bold">
          {coreSub}
        </span>
      </div>
    </div>
  )
}
