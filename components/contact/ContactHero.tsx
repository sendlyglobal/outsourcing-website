'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function ContactHero() {
  return (
    <section className="relative w-full pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-2 md:pb-10 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl font-bold tracking-tight text-(--text-primary) font-display leading-[1.15]"
        >
          Let's Build Something Great Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed max-w-2xl mx-auto"
        >
          Ready to accelerate your technical initiatives? Reach out below and our team will get back to you within 24 hours.
        </motion.p>
      </div>
    </section>
  )
}
