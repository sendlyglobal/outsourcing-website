'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { WebTechPlanet, ThemeProps, TechDomain } from '@/types/animation'
import { allTechPlanets, domainMeta } from '@/lib/data'
import { OrbitHeader } from './orbit/OrbitHeader'
import { OrbitControls } from './orbit/OrbitControls'
import { OrbitCoreStar } from './orbit/OrbitCoreStar'
import { OrbitPlanetNode } from './orbit/OrbitPlanetNode'
import { PlanetTelemetryDrawer } from './orbit/PlanetTelemetryDrawer'

export interface WebOrbitProps extends ThemeProps {
  initialDomain?: TechDomain
}

const ORBIT_RADII = [150, 240, 330, 420]

export const WebOrbitPage: React.FC<WebOrbitProps> = ({
  isDark = true,
  initialDomain = 'web',
}) => {
  const activeDomain: TechDomain = initialDomain
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0)
  const [activeCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [hoveredPlanet, setHoveredPlanet] = useState<WebTechPlanet | null>(null)
  const [selectedPlanet, setSelectedPlanet] = useState<WebTechPlanet | null>(null)
  const [showOrbits, setShowOrbits] = useState<boolean>(true)
  const [rotationOffset, setRotationOffset] = useState<number>(0)
  const [scaleFactor, setScaleFactor] = useState<number>(1)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(performance.now())

  useEffect(() => {
    const handleScroll = () => {
      if (hoveredPlanet || selectedPlanet) {
        setHoveredPlanet(null)
        setSelectedPlanet(null)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hoveredPlanet, selectedPlanet])

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const minDim = Math.min(w, h)
      if (minDim < 640) {
        setScaleFactor(0.58)
      } else if (minDim < 900) {
        setScaleFactor(0.75)
      } else {
        setScaleFactor(0.95)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const animate = (now: number) => {
      const delta = (now - lastTimeRef.current) / 1000
      lastTimeRef.current = now

      if (isPlaying) {
        setRotationOffset((prev) => (prev + delta * 0.16 * speedMultiplier) % (Math.PI * 2))
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [isPlaying, speedMultiplier])

  const domainPlanets = useMemo(() => {
    return allTechPlanets.filter((p) => p.domain === activeDomain)
  }, [activeDomain])

  const filteredPlanets = useMemo(() => {
    let list = domainPlanets
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.role.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    return list
  }, [domainPlanets, activeCategory, searchQuery])

  const currentMeta = domainMeta[activeDomain] || domainMeta.web

  return (
    <div
      ref={containerRef}
      id="web-orbit-screen"
      className={`relative w-full h-full min-h-[640px] max-h-[820px] transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      } overflow-hidden select-none font-sans`}
    >
      <div
        className={`absolute inset-0 bg-space-grid ${isDark ? 'opacity-25' : 'opacity-10'} pointer-events-none`}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[160px] rounded-full pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: isDark
            ? activeDomain === 'mobile'
              ? 'rgba(97, 218, 251, 0.07)'
              : activeDomain === 'erp'
                ? 'rgba(0, 143, 211, 0.07)'
                : activeDomain === 'custom'
                  ? 'rgba(16, 185, 129, 0.08)'
                  : 'rgba(0, 216, 255, 0.07)'
            : activeDomain === 'mobile'
              ? 'rgba(97, 218, 251, 0.15)'
              : activeDomain === 'erp'
                ? 'rgba(0, 143, 211, 0.15)'
                : activeDomain === 'custom'
                  ? 'rgba(16, 185, 129, 0.15)'
                  : 'rgba(0, 216, 255, 0.15)',
        }}
      />

      <OrbitHeader
        isDark={isDark}
        badge={currentMeta.badge}
        nodeCount={domainPlanets.length}
        title={currentMeta.title}
        description={currentMeta.description}
      />

      <OrbitControls
        isDark={isDark}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        showOrbits={showOrbits}
        setShowOrbits={setShowOrbits}
        speedMultiplier={speedMultiplier}
        setSpeedMultiplier={setSpeedMultiplier}
      />

      <div className="w-full h-full flex items-center justify-center relative">
        <div className="relative w-0 h-0 flex items-center justify-center">
          {showOrbits &&
            ORBIT_RADII.map((radius, idx) => {
              const scaledRadius = radius * scaleFactor
              return (
                <div
                  key={`orbit-ring-${idx}`}
                  className={`absolute rounded-full border pointer-events-none transition-all duration-300 ${
                    isDark ? 'border-zinc-800' : 'border-zinc-200'
                  }`}
                  style={{
                    width: `${scaledRadius * 2}px`,
                    height: `${scaledRadius * 2}px`,
                    boxShadow: isDark
                      ? 'inset 0 0 25px rgba(10, 138, 158, 0.04)'
                      : 'inset 0 0 25px rgba(10, 138, 158, 0.06)',
                    borderStyle: idx % 2 === 1 ? 'dashed' : 'solid',
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-(--teal)/40" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-(--teal)/40" />
                </div>
              )
            })}

          <OrbitCoreStar
            isDark={isDark}
            activeDomain={activeDomain}
            coreLabel={currentMeta.coreLabel}
            coreSub={currentMeta.coreSub}
            onTogglePlay={() => setIsPlaying((prev) => !prev)}
          />

          {filteredPlanets.map((planet) => (
            <OrbitPlanetNode
              key={planet.id}
              planet={planet}
              rotationOffset={rotationOffset}
              scaleFactor={scaleFactor}
              isDark={isDark}
              isHovered={hoveredPlanet?.id === planet.id}
              isSelected={selectedPlanet?.id === planet.id}
              onHover={setHoveredPlanet}
              onClick={(p) => setSelectedPlanet(selectedPlanet?.id === p.id ? null : p)}
            />
          ))}
        </div>
      </div>

      <PlanetTelemetryDrawer
        planet={hoveredPlanet || selectedPlanet}
        isDark={isDark}
        onClose={() => {
          setSelectedPlanet(null)
          setHoveredPlanet(null)
        }}
      />
    </div>
  )
}
