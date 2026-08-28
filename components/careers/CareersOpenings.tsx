'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Inbox } from 'lucide-react'
import { Button } from '@/components/ui'

interface CareersOpeningsProps {
  onOpenModal: () => void
}

export default function CareersOpenings({ onOpenModal }: CareersOpeningsProps) {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Current Openings
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-(--text-secondary)">
            Explore opportunities to build with our distributed engineering team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-(--border-color) bg-white dark:bg-black p-8 sm:p-12 text-center shadow-xl flex flex-col items-center justify-center space-y-6 overflow-hidden relative"
        >
          <div className="w-16 h-16 rounded-2xl bg-(--teal)/10 text-(--teal) flex items-center justify-center">
            <Inbox size={32} />
          </div>

          <div className="max-w-lg space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display">
              No Active Openings At This Time
            </h3>
            <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
              We don&apos;t have open headcounts right now, but we are constantly meeting standout engineers, architects, and technical leaders. Submit a general profile and we will reach out as new team slots become available.
            </p>
          </div>

          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenModal}
              className="px-7"
            >
              Submit General Application
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
