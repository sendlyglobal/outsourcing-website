'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Button } from '@/components/ui'
import { useQuoteModal } from '@/providers/QuoteModalProvider'
import HeroBackground from './HeroBackground'

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16 bg-white dark:bg-black px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Interactive Orbital Particle Background */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.14] font-display"
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

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl shadow-black/15 dark:shadow-[0_20px_50px_rgba(10,138,158,0.15)] bg-white dark:bg-black group">
              <Image
                src="/images/hero_circuit_matrix.jpg"
                alt="High performance digital architecture and computing hardware"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 480px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl pointer-events-none" />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
