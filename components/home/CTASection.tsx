'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui'
import { useQuoteModal } from '@/providers/QuoteModalProvider'

export default function CTASection() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="w-full py-20 sm:py-28 dark:bg-black overflow-hidden border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] font-display">
            Ready to scale your engineering and production capacity?
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            Partner with technical experts to build your next mission-critical digital asset.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openQuoteModal()}
              className="px-8 sm:px-10 py-3.5 sm:py-4 text-base"
            >
              Start a Project Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
