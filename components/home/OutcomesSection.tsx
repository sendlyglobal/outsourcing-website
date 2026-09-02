'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Smartphone,
  Globe,
  Cpu,
} from 'lucide-react'
import { CASE_STUDIES } from '@/lib/case-studies'

export default function OutcomesSection() {
  const featuredStudies = CASE_STUDIES.slice(0, 3)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'erp':
        return <Layers className="w-3.5 h-3.5 text-(--teal)" />
      case 'mobile':
        return <Smartphone className="w-3.5 h-3.5 text-(--teal)" />
      case 'web':
        return <Globe className="w-3.5 h-3.5 text-(--teal)" />
      default:
        return <Cpu className="w-3.5 h-3.5 text-(--teal)" />
    }
  }

  return (
    <section className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold block mb-2">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--text-primary) font-display">
              Real Projects, Measurable Outcomes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-(--text-secondary) max-w-xl leading-relaxed">
              Explore how we design and build production-grade software solutions across web, mobile, and enterprise architectures.
            </p>
          </motion.div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--teal) hover:text-(--aqua) transition-colors font-mono shrink-0"
          >
            <span>View All Work</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group h-full rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={study.image || '/images/globnetics.jpg'}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-(--teal) font-semibold mb-2">
                      {getCategoryIcon(study.category)}
                      <span>{study.categoryLabel}</span>
                    </div>

                    <h3 className="text-xl font-bold text-(--text-primary) font-display group-hover:text-(--teal) transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <div className="mt-4 pt-3 border-t border-(--border-color)/50 space-y-2.5">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-zinc-500 block">
                          THE PROBLEM:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed mt-0.5 line-clamp-2">
                          {study.situation?.paragraphs?.[0] || study.summary}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-(--teal) block">
                          WHAT WE BUILT:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed mt-0.5 line-clamp-2">
                          {study.solution?.paragraphs?.[0] || study.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-(--border-color) flex flex-wrap gap-1.5 mb-5">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-(--border-color) text-(--text-secondary)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider py-2.5 px-4 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-black hover:bg-(--teal) dark:hover:bg-(--teal) dark:hover:text-white transition-all shadow-sm"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
