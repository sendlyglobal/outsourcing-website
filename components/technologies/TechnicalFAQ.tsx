'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { TechDomain } from '@/types/animation'
import { GENERAL_FAQS, DOMAIN_FAQS } from '@/lib/technologies-faqs'

interface TechnicalFAQProps {
  domain?: TechDomain
}

const DOMAIN_TITLES: Record<TechDomain, { title: string; subtitle: string }> = {
  web: {
    title: 'Web Platforms FAQ',
    subtitle: 'Answers to key frontend, SSR, performance, and architecture questions.',
  },
  mobile: {
    title: 'Mobile Engineering FAQ',
    subtitle: 'Insights into our cross-platform, native, offline sync, and App Store methodologies.',
  },
  erp: {
    title: 'ERP & Systems FAQ',
    subtitle: 'Architectural insights into legacy integrations, transactional sagas, and compliance.',
  },
  custom: {
    title: 'Custom Software FAQ',
    subtitle: 'Deep-dive questions on low-latency microservices, distributed messaging, and kernel observability.',
  },
}

export default function TechnicalFAQ({ domain }: TechnicalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = domain && DOMAIN_FAQS[domain] ? DOMAIN_FAQS[domain] : GENERAL_FAQS
  const header = domain && DOMAIN_TITLES[domain] ? DOMAIN_TITLES[domain] : {
    title: 'Technical FAQ',
    subtitle: 'Insights into our engineering methodology.',
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            {header.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            {header.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-(--border-color) bg-(--bg-card) overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-(--border-color)/15 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-(--text-primary) font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-(--text-secondary) shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-(--teal)' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-(--border-color)/50 mt-1">
                        <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
