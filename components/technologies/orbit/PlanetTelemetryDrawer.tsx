import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, XIcon } from 'lucide-react'
import { WebTechPlanet } from '@/types/animation'
import { PlanetIcon } from './PlanetIcon'

interface PlanetTelemetryDrawerProps {
  planet: WebTechPlanet | null
  isDark: boolean
  onClose: () => void
}

export const PlanetTelemetryDrawer: React.FC<PlanetTelemetryDrawerProps> = ({
  planet,
  isDark,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {planet && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`fixed top-20 sm:top-24 right-3 sm:right-6 left-3 sm:left-auto w-auto sm:w-96 max-w-[calc(100vw-24px)] rounded-2xl border p-5 backdrop-blur-2xl shadow-2xl z-50 pointer-events-auto space-y-4 ${
            isDark
              ? 'bg-black/95 border-zinc-800 text-white shadow-black/80'
              : 'bg-white/95 border-zinc-200 text-black shadow-zinc-400/30'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${planet.color}15`,
                  borderColor: planet.color,
                  color: planet.color,
                }}
              >
                <PlanetIcon name={planet.name} className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold font-display text-base">
                    {planet.name}
                  </h3>
                  <span
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase"
                    style={{
                      backgroundColor: `${planet.color}20`,
                      color: planet.color,
                    }}
                  >
                    {planet.domain}
                  </span>
                </div>
                <p
                  className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
                >
                  {planet.role}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className={`text-xs p-1 rounded-lg cursor-pointer ${
                isDark
                  ? 'hover:bg-zinc-900 text-zinc-400'
                  : 'hover:bg-zinc-100 text-zinc-600'
              }`}
            >
              <XIcon className='w-5 h-5'/>
            </button>
          </div>

          <p
            className={`text-xs leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
          >
            {planet.description}
          </p>

          <div>
            <span
              className={`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              Architectural Capabilities
            </span>
            <div className="space-y-1">
              {planet.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-(--teal) shrink-0" />
                  <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
