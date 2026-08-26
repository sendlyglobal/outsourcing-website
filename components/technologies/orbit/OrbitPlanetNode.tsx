import React from 'react'
import { WebTechPlanet } from '@/types/animation'
import { PlanetIcon } from './PlanetIcon'

interface OrbitPlanetNodeProps {
  planet: WebTechPlanet
  rotationOffset: number
  scaleFactor: number
  isDark: boolean
  isHovered: boolean
  isSelected: boolean
  onHover: (planet: WebTechPlanet | null) => void
  onClick: (planet: WebTechPlanet) => void
}

export const OrbitPlanetNode: React.FC<OrbitPlanetNodeProps> = ({
  planet,
  rotationOffset,
  scaleFactor,
  isDark,
  isHovered,
  isSelected,
  onHover,
  onClick,
}) => {
  const currentAngle = planet.initialAngle + rotationOffset * (planet.speed * 1.8)
  const scaledRadius = planet.orbitRadius * scaleFactor
  const x = Math.cos(currentAngle) * scaledRadius
  const y = Math.sin(currentAngle) * scaledRadius

  return (
    <div
      className="absolute z-30 transition-transform duration-75"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      {isHovered && (
        <svg
          className="absolute top-0 left-0 overflow-visible pointer-events-none z-10"
          style={{ width: '1px', height: '1px' }}
        >
          <line
            x1="0"
            y1="0"
            x2={-x}
            y2={-y}
            stroke={planet.color}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            className="opacity-70"
          />
        </svg>
      )}

      <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
        <button
          onMouseEnter={() => onHover(planet)}
          onMouseLeave={() => onHover(null)}
          onClick={() => onClick(planet)}
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer ${
            isHovered || isSelected ? 'scale-125 z-40' : 'hover:scale-115'
          }`}
          style={{
            width: `${planet.size * (scaleFactor < 0.8 ? 0.9 : 1)}px`,
            height: `${planet.size * (scaleFactor < 0.8 ? 0.9 : 1)}px`,
            backgroundColor: isDark ? '#000000' : '#ffffff',
            borderColor: planet.color,
            borderWidth: '2px',
            boxShadow: isHovered
              ? `0 0 25px ${planet.glowColor}, inset 0 0 10px ${planet.glowColor}`
              : `0 0 12px ${planet.glowColor}`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ backgroundColor: planet.color }}
          />

          <div style={{ color: planet.color }}>
            <PlanetIcon name={planet.iconName} />
          </div>
        </button>

        <div
          className={`absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-[10px] font-mono whitespace-nowrap pointer-events-none transition-all ${
            isHovered || isSelected
              ? 'bg-(--teal) text-white font-bold scale-110 shadow-lg'
              : isDark
                ? 'bg-black/90 text-zinc-300 border border-zinc-800'
                : 'bg-white/90 text-zinc-700 border border-zinc-200 shadow-sm'
          }`}
        >
          {planet.name}
        </div>
      </div>
    </div>
  )
}
