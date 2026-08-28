'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui'

interface CareersHeroProps {
  onOpenModal: () => void
}

export default function CareersHero({ onOpenModal }: CareersHeroProps) {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-18 md:pt-24 md:pb-20 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-b border-(--border-color)">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--teal)/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-(--text-primary) leading-[1.12] font-display"
        >
          Build Systems That Move Industries.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-2xl mx-auto"
        >
          We are a senior-heavy engineering collective solving high-concurrency, complex architectural challenges for companies worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenModal}
            className="w-full sm:w-auto min-w-[220px]"
          >
            Submit General Application
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="/about"
            className="w-full sm:w-auto"
          >
            Learn About Our Culture
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
