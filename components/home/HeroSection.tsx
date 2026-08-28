'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui'
import { useQuoteModal } from '@/providers/QuoteModalProvider'
import HeroBackground from './HeroBackground'
import { CubeStage } from './Cube'

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
      {/* Interactive Orbital Particle Background */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>DEDICATED SENIOR ENGINEERING SQUADS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] font-display"
            >
              Engineering High Performance Digital Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
            >
              ERP, Mobile, and Web systems built for scale. We deliver technical excellence designed to drive your business forward with uncompromising reliability and agility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto min-w-[170px]"
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/services"
                className="w-full sm:w-auto min-w-[170px]"
              >
                View Services
              </Button>
            </motion.div>
          </div>

          {/* Right 3D Cube Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center w-full relative"
          >
            <div className="w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] aspect-square relative flex items-center justify-center">
              <CubeStage
                expansionFactor={1.35}
                className="h-[400px] sm:h-[460px] md:h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
