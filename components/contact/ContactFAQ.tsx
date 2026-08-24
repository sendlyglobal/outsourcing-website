'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: 'How quickly can a dedicated squad onboard and begin writing code?',
    answer:
      'For standard senior squads (ERP, full-stack web, mobile), we can deploy vetted engineers within 5 to 10 business days. For highly specialized architectures (e.g. niche legacy ERP refactors or high-throughput cryptography), ramp-up typically takes 2 weeks, commencing with a structured Sprint Zero.',
  },
  {
    question: 'Who owns the intellectual property (IP) and code produced?',
    answer:
      'You own 100% of all intellectual property, repository commits, documentation, and architectural artifacts from day one. All contracts include comprehensive IP assignment clauses under US, UK, or EU legal jurisdictions with full indemnification.',
  },
  {
    question: 'How do you handle timezone overlap with our in-house engineering team?',
    answer:
      'Our distributed model guarantees a minimum of 4 to 6 hours of concurrent working overlap with your time zone (US Pacific/Eastern, UK/CET, or APAC). We sync via daily standups, live pairing sessions, and asynchronous Jira/Linear tracking.',
  },
  {
    question: 'Can we run a paid 2-week pilot or architecture spike before committing?',
    answer:
      'Yes, absolutely. We frequently execute 2-week discovery spikes or proof-of-concept sprints to validate velocity, code standards, and cultural fit before signing long-term retainer agreements.',
  },
  {
    question: 'What engagement models and billing structures are available?',
    answer:
      'We offer three transparent engagement models: (1) Dedicated Engineering Squads with fixed monthly team rates, (2) Milestone-based Fixed Scope for well-defined deliverables, and (3) Architecture & Security Advisory retainers for fractional leadership.',
  },
  {
    question: 'How do we communicate and track day-to-day progress?',
    answer:
      'We integrate directly into your workspace—joining your Slack/Teams channels, Linear/Jira boards, and GitHub/GitLab repositories. You have complete transparency into branch pull requests, test coverage reports, and CI/CD pipelines.',
  },
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--teal)/10 border border-(--teal)/20 text-(--teal) text-xs font-mono font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            Key details on contracts, IP security, timezone integration, and squad onboarding.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-(--teal) bg-white dark:bg-black shadow-md shadow-(--teal)/5'
                    : 'border-(--border-color) bg-white dark:bg-black hover:border-(--teal)/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-(--text-primary) font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-(--teal)/10 border-(--teal) text-(--teal)'
                        : 'border-(--border-color) text-(--text-muted)'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-(--text-secondary) leading-relaxed border-t border-(--border-color)/50">
                        {faq.answer}
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
