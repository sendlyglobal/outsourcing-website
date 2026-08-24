'use client'

import React from 'react'
import { motion } from 'motion/react'
import { FileSearch, ShieldCheck, FileSpreadsheet, Rocket, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    timeframe: 'Hour 0 – 4',
    title: 'Technical Triage',
    desc: 'Our Principal Solutions Architect inspects your brief, evaluates complexity, and assigns a specialized domain lead.',
    icon: FileSearch,
  },
  {
    step: '02',
    timeframe: 'Day 1',
    title: 'NDA & Discovery Session',
    desc: 'We execute a mutual NDA and host a 30-minute scoping call to deep-dive into your architecture and KPIs.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    timeframe: 'Day 2 – 3',
    title: 'Architecture & Squad Plan',
    desc: 'You receive a comprehensive technical proposal including squad composition, sprint roadmap, and fixed or milestone pricing.',
    icon: FileSpreadsheet,
  },
  {
    step: '04',
    timeframe: 'Week 1',
    title: 'Sprint Zero Kickoff',
    desc: 'Git repositories provisioned, CI/CD pipelines connected, security baselines set, and development begins with daily syncs.',
    icon: Rocket,
  },
]

export default function ContactNextSteps() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-(--teal)">
            Transparent Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary) font-display mt-1">
            What Happens After You Reach Out?
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            No generic sales runarounds. Direct engineering collaboration from your very first message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 sm:p-7 rounded-3xl border border-(--border-color) bg-white dark:bg-black shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-(--teal)/10 text-(--teal) flex items-center justify-center border border-(--teal)/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-(--teal) px-2.5 py-1 rounded-lg bg-(--teal)/10">
                      {item.timeframe}
                    </span>
                  </div>

                  <span className="text-3xl font-bold font-mono text-(--text-muted)/40 block mb-2">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-bold text-(--text-primary) font-display mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-(--teal)">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-black border border-(--teal) flex items-center justify-center text-xs shadow-xs">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
