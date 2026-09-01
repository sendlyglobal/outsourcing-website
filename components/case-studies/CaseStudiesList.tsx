'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  Layers,
  Smartphone,
  Globe,
  Cpu,
} from 'lucide-react'
import { CASE_STUDIES } from '@/lib/case-studies'

type FilterCategory = 'all' | 'web' | 'mobile' | 'erp' | 'custom'

export default function CaseStudiesList() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === 'all') return true
    return study.category === activeFilter
  })

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

  const FILTERS: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'erp', label: 'Enterprise & ERP' },
    { id: 'custom', label: 'Backend, Cloud & AI' },
  ]

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.id
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-slate-950 text-white dark:bg-white dark:text-black shadow-md border border-slate-950 dark:border-white'
                  : 'bg-white dark:bg-black text-slate-700 dark:text-slate-300 border border-(--border-color) hover:border-(--teal) hover:text-(--teal)'
              }`}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group h-full rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={study.image || '/images/outcome_supply_chain.jpg'}
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
        </AnimatePresence>
      </div>
    </div>
  )
}
