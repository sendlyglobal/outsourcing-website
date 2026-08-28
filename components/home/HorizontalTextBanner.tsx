'use client'

import React from 'react'
import { motion } from 'motion/react'

const BANNER_WORDS = [
  'DEDICATED SENIOR SQUADS',
  '99.999% SLA AVAILABILITY',
  'HIGH-CONCURRENCY ARCHITECTURES',
  'DISTRIBUTED SYSTEMS',
  'ZERO-DEBT MODERNIZATION',
  'MULTI-REGION FAILOVER',
  'SUB-MILLISECOND LATENCY',
  'GLOBAL TALENT NETWORK',
]

export default function HorizontalTextBanner() {
  return (
    <section className="relative w-full overflow-hidden py-2.5 sm:py-3 bg-[var(--teal)]/5 dark:bg-[var(--teal)]/10 border-y border-[var(--border-color)] select-none">
      {/* Subtle backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--teal)]/10 to-transparent pointer-events-none" />

      {/* Infinite Horizontal Stream */}
      <div className="flex w-max overflow-hidden group">
        <motion.div
          className="flex shrink-0 items-center gap-6 sm:gap-10 text-sm sm:text-base md:text-lg font-bold font-display uppercase tracking-wider"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 48,
          }}
        >
          {[...BANNER_WORDS, ...BANNER_WORDS].map((word, idx) => (
            <div
              key={`${word}-${idx}`}
              className="inline-flex items-center gap-6 sm:gap-10 cursor-default transition-transform hover:scale-105"
            >
              <span className="bg-gradient-to-r from-[var(--text-primary)] via-[var(--teal)] to-[var(--aqua)] bg-clip-text text-transparent drop-shadow-xs">
                {word}
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--teal)] shadow-[0_0_6px_var(--teal)] animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
