'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Users, Cpu, ShieldCheck, Zap } from 'lucide-react'

const CULTURE_POINTS = [
  {
    icon: Users,
    title: 'Senior-Heavy Collective',
    desc: 'Collaborate with staff-level engineers and architects who care about code quality, craftsmanship, and operational excellence.',
  },
  {
    icon: Zap,
    title: 'Deep Autonomy & Ownership',
    desc: 'No bureaucracy or micromanagement. Own your architecture from RFC definition to multi-region production rollout.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Tooling',
    desc: 'Work on high-concurrency systems using Go, Rust, Next.js, Apache Kafka, Kubernetes, and distributed event streams.',
  },
  {
    icon: ShieldCheck,
    title: 'Async-First Environment',
    desc: 'We value deep work over endless meetings. Clear written communication and autonomy drive our execution.',
  },
]

export default function CareersCulture() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-b border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Why Engineers Thrive Here
          </h2>
          <p className="mt-3 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
            We built the engineering environment we always wanted to work in: focused, autonomous, and driven by technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CULTURE_POINTS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-start group"
              >
                <div className="w-11 h-11 rounded-xl bg-(--teal)/10 text-(--teal) flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-(--text-primary) font-display">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
