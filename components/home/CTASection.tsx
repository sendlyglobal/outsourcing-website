'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui'
import { useQuoteModal } from '@/providers/QuoteModalProvider'

export default function CTASection() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="w-full py-18 sm:py-26 dark:bg-black overflow-hidden border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.14] font-display">
            Have a software project or a technical problem you need help with?
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Tell us what you are working on and we can talk through the best way to approach it.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openQuoteModal()}
              className="px-8 sm:px-10 py-3.5 sm:py-4 text-base"
            >
              Start a Project
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="px-8 sm:px-10 py-3.5 sm:py-4 text-base"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
