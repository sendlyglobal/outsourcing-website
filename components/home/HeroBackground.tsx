'use client'

import React, { useEffect, useRef } from 'react'
import { useTheme } from '@/providers/ThemeProvider'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  alpha: number
  colorOffset: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
  color: string
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const stateRef = useRef({
    isDark,
    particleCount: 75,
    showGrid: true,
    connectionDistance: 130,
    cursorRadius: 150,
    isVisible: true,
  })

  useEffect(() => {
    stateRef.current.isDark = isDark
  }, [isDark])

  // Brand Palette: Teal & Aqua matching the design system
  const getThemeColors = (dark: boolean) => ({
    primary: dark ? '#6fe3d6' : '#0a8a9e',
    secondary: dark ? '#0a8a9e' : '#087586',
    particleRgb: dark ? '111, 227, 214' : '10, 138, 158',
    cursorGlow: dark ? 'rgba(10, 138, 158, 0.16)' : 'rgba(10, 138, 158, 0.08)',
    lineRgb: dark ? '10, 138, 158' : '10, 138, 158',
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const particles: Particle[] = []
    const ripples: Ripple[] = []

    // Cursor tracking with section relative offset
    const cursor = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      down: false,
    }

    // Initialize particles
    const initParticles = (count: number) => {
      particles.length = 0
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2 + 1.2
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius,
          baseRadius: radius,
          alpha: Math.random() * 0.45 + 0.3,
          colorOffset: Math.random(),
        })
      }
    }

    initParticles(stateRef.current.particleCount)

    // Resize handling with Parent bounds
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
      initParticles(stateRef.current.particleCount)
    }

    window.addEventListener('resize', handleResize)

    // Pointer Event Listeners with offset coordinates
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()

      let clientX = 0
      let clientY = 0

      if ('touches' in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX
          clientY = e.touches[0].clientY
        }
      } else {
        clientX = e.clientX
        clientY = e.clientY
      }

      // Check if cursor is within or close to the hero section
      const isInside =
        clientX >= rect.left - 40 &&
        clientX <= rect.right + 40 &&
        clientY >= rect.top - 40 &&
        clientY <= rect.bottom + 40

      if (isInside) {
        cursor.active = true
        cursor.targetX = clientX - rect.left
        cursor.targetY = clientY - rect.top
      } else {
        cursor.active = false
      }
    }

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()

      let clientX = 0
      let clientY = 0

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else if ('clientX' in e) {
        clientX = e.clientX
        clientY = e.clientY
      }

      const isInside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom

      if (isInside) {
        cursor.down = true
        const posX = clientX - rect.left
        const posY = clientY - rect.top

        const colors = getThemeColors(stateRef.current.isDark)
        ripples.push({
          x: posX,
          y: posY,
          radius: 0,
          maxRadius: 180,
          alpha: 0.7,
          color: colors.primary,
        })

        // Scatter nearby particles on click
        for (const p of particles) {
          const dx = p.x - posX
          const dy = p.y - posY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180 && dist > 0) {
            const force = (180 - dist) / 180
            p.vx += (dx / dist) * force * 4
            p.vy += (dy / dist) * force * 4
          }
        }
      }
    }

    const handlePointerUp = () => {
      cursor.down = false
    }

    const handleMouseLeave = () => {
      cursor.active = false
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true })
    window.addEventListener('touchmove', handlePointerMove, { passive: true })
    window.addEventListener('mousedown', handlePointerDown, { passive: true })
    window.addEventListener('touchstart', handlePointerDown, { passive: true })
    window.addEventListener('mouseup', handlePointerUp, { passive: true })
    window.addEventListener('touchend', handlePointerUp, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    // Visibility Observer to pause when scrolled past Hero
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          stateRef.current.isVisible = entry.isIntersecting
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    // Animation Loop
    const render = () => {
      if (!stateRef.current.isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const {
        isDark: dark,
        showGrid: grid,
        connectionDistance: maxDist,
        cursorRadius: cRadius,
      } = stateRef.current
      const colors = getThemeColors(dark)

      // Smooth cursor interpolation
      cursor.x += (cursor.targetX - cursor.x) * 0.15
      cursor.y += (cursor.targetY - cursor.y) * 0.15

      // Clear canvas with matching background
      ctx.fillStyle = dark ? '#000000' : '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // Radar Grid
      if (grid) {
        const gridSize = 48
        const dotColor = dark
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(0, 0, 0, 0.05)'
        const activeDotColor = dark
          ? `rgba(${colors.particleRgb}, 0.35)`
          : `rgba(${colors.particleRgb}, 0.3)`

        for (let x = 0; x < width; x += gridSize) {
          for (let y = 0; y < height; y += gridSize) {
            const dx = cursor.x - x
            const dy = cursor.y - y
            const dist = Math.sqrt(dx * dx + dy * dy)

            ctx.beginPath()
            if (cursor.active && dist < cRadius) {
              const glow = 1 - dist / cRadius
              ctx.arc(x, y, 1.1 + glow * 1.5, 0, Math.PI * 2)
              ctx.fillStyle = activeDotColor
            } else {
              ctx.arc(x, y, 0.8, 0, Math.PI * 2)
              ctx.fillStyle = dotColor
            }
            ctx.fill()
          }
        }
      }

      // Cursor Ambient Radial Glow
      if (cursor.active) {
        const gradient = ctx.createRadialGradient(
          cursor.x,
          cursor.y,
          0,
          cursor.x,
          cursor.y,
          cRadius * 1.2
        )
        gradient.addColorStop(0, colors.cursorGlow)
        gradient.addColorStop(
          0.6,
          dark
            ? `rgba(${colors.particleRgb}, 0.03)`
            : `rgba(${colors.particleRgb}, 0.015)`
        )
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cursor.x, cursor.y, cRadius * 1.2, 0, Math.PI * 2)
        ctx.fill()

        // Cursor Core Indicator
        ctx.beginPath()
        ctx.arc(cursor.x, cursor.y, cursor.down ? 4.5 : 3, 0, Math.PI * 2)
        ctx.fillStyle = colors.primary
        ctx.shadowColor = colors.primary
        ctx.shadowBlur = cursor.down ? 14 : 6
        ctx.fill()
        ctx.shadowBlur = 0

        // Outer Subtle Ring
        ctx.beginPath()
        ctx.arc(cursor.x, cursor.y, cursor.down ? 20 : 12, 0, Math.PI * 2)
        ctx.strokeStyle = dark
          ? `rgba(${colors.particleRgb}, 0.3)`
          : `rgba(${colors.particleRgb}, 0.35)`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.radius += 4
        r.alpha *= 0.94

        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${colors.particleRgb}, ${r.alpha})`
        ctx.lineWidth = 1.8
        ctx.stroke()

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1)
        }
      }

      // Particles Physics & Orbit
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99

        if (Math.abs(p.vx) < 0.15) p.vx += (Math.random() - 0.5) * 0.08
        if (Math.abs(p.vy) < 0.15) p.vy += (Math.random() - 0.5) * 0.08

        if (p.x < 0) {
          p.x = 0
          p.vx *= -1
        } else if (p.x > width) {
          p.x = width
          p.vx *= -1
        }

        if (p.y < 0) {
          p.y = 0
          p.vy *= -1
        } else if (p.y > height) {
          p.y = height
          p.vy *= -1
        }

        // Orbital pull around cursor
        if (cursor.active) {
          const dx = cursor.x - p.x
          const dy = cursor.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < cRadius) {
            const normalizedDist = 1 - dist / cRadius
            const angle = Math.atan2(dy, dx)
            const tangentAngle = angle + Math.PI / 2
            p.vx +=
              Math.cos(tangentAngle) * normalizedDist * 0.55 +
              Math.cos(angle) * 0.1
            p.vy +=
              Math.sin(tangentAngle) * normalizedDist * 0.55 +
              Math.sin(angle) * 0.1
            p.radius = p.baseRadius + normalizedDist * 1.8
          } else {
            p.radius = p.baseRadius
          }
        }

        // Connection Lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (dark ? 0.28 : 0.16)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${colors.lineRgb}, ${lineAlpha})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }

        // Draw Particle Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors.particleRgb}, ${p.alpha})`
        if (p.radius > p.baseRadius + 0.4) {
          ctx.shadowColor = colors.primary
          ctx.shadowBlur = 5
        }
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('touchmove', handlePointerMove)
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('touchstart', handlePointerDown)
      window.removeEventListener('mouseup', handlePointerUp)
      window.removeEventListener('touchend', handlePointerUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
