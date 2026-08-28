'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Compass, Eye, Rocket } from 'lucide-react'

const VALUES = [
  {
    id: 'precision',
    title: 'Precision',
    icon: Compass,
    desc: 'We build with intention. Every line of code, every architectural decision is evaluated for performance, scalability, and long-term viability.',
  },
  {
    id: 'transparency',
    title: 'Transparency',
    icon: Eye,
    desc: 'No black boxes. We maintain open communication channels, providing clear insights into our processes, progress, and technical challenges.',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    icon: Rocket,
    desc: 'We are outcome-driven. Technical elegance is only valuable if it ships and solves real-world business problems efficiently.',
  },
]

export default function CoreValues() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Core Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-8 rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-start group"
              >
                <div className="w-11 h-11 rounded-xl bg-(--teal)/10 text-(--teal) flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display">
                  {val.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
