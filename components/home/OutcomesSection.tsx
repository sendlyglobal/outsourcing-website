'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const OUTCOMES = [
  {
    slug: 'global-supply-chain-optimization',
    image: '/images/outcome_supply_chain.jpg',
    metric: '40%',
    metricLabel: 'EFFICIENCY GAIN',
    category: 'Logistics ERP',
    title: 'Global Supply Chain Optimization',
    desc: 'Re-architected legacy monolithic system into scalable microservices, reducing data latency across international nodes.',
    techs: ['React', 'Node.js', 'AWS'],
  },
  {
    slug: 'secure-neo-banking-app',
    image: '/images/outcome_neobank_app.jpg',
    metric: '2.5M',
    metricLabel: 'ACTIVE USERS',
    category: 'Sendly Mobile',
    title: 'Secure Neo-Banking App',
    desc: 'Developed a high-security, low-latency mobile banking platform handling millions of daily transactions with 99.99% uptime.',
    techs: ['React Native', 'Nest Js', 'Docker'],
  },
  {
    slug: 'integrated-patient-portal',
    image: '/images/outcome_patient_portal.jpg',
    metric: '10x',
    metricLabel: 'FASTER SYNC',
    category: 'Healthcare Web',
    title: 'Integrated Patient Portal',
    desc: 'Built a HIPAA-compliant web portal that aggregates real-time diagnostics data across multiple disparate clinical systems.',
    techs: ['Vue.js', 'Python', 'Azure'],
  },
]

export default function OutcomesSection() {
  return (
    <section className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
              Featured Outcomes
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-(--text-secondary)">
              Measurable impact delivered through rigorous engineering.
            </p>
          </motion.div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--teal) hover:text-(--aqua) transition-colors font-mono"
          >
            <span>View All Cases</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OUTCOMES.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/case-studies/${item.slug}`}
                className="group block h-full rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 right-3 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#071a30] border-2 border-white/20 text-white flex flex-col items-center justify-center text-center shadow-2xl z-10">
                    <span className="font-mono font-bold text-sm sm:text-base leading-none text-teal-400">
                      {item.metric}
                    </span>
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-tighter text-slate-300 mt-0.5 leading-tight px-1">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-(--teal) font-semibold">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-bold text-(--text-primary) font-display mt-2 group-hover:text-(--teal) transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-(--border-color) flex flex-wrap gap-2">
                    {item.techs.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-(--border-color)/20 border border-(--border-color) text-(--text-secondary)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
