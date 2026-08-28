'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function AboutCTA() {
  return (
    <section className="w-full py-14 sm:py-20 md:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl bg-[#071a30] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-(--teal)/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
              Build the Future with Us
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              We are always looking for exceptional engineering talent. Join a team where technical excellence is the baseline and innovation is expected.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#a2e9f0] hover:bg-white text-[#071a30] text-xs sm:text-sm font-semibold transition-all hover:scale-105 shadow-md font-mono"
            >
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
