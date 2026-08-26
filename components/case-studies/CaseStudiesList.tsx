'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  Layers,
  Smartphone,
  Globe,
  Cpu,
} from 'lucide-react'
import { CASE_STUDIES } from '@/lib/case-studies'

type FilterCategory = 'all' | 'erp' | 'mobile' | 'web'

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
    { id: 'all', label: 'All' },
    { id: 'erp', label: 'ERP' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
  ]

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.id
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'dark:bg-black bg-white text-(--teal) dark:text-white shadow-md border border-(--teal)'
                  : 'dark:bg-black text-black dark:text-white border border-(--border-color) hover:border-(--teal)/60 hover:text-(--text-primary)'
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
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block h-full rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between"
              >
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

                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-(--teal) font-semibold">
                      {getCategoryIcon(study.category)}
                      <span>{study.categoryLabel}</span>
                    </div>

                    <h3 className="text-xl font-bold text-(--text-primary) font-display mt-2 group-hover:text-(--teal) transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                      {study.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-(--border-color) flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-(--border-color)/20 border border-(--border-color) text-(--text-secondary)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-(--teal) hover:text-(--aqua) group-hover:gap-2.5 transition-all">
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
