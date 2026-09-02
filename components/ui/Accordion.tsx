'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  id?: string | number
  question: string
  answer: string
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenIndex?: number | null
  allowMultiple?: boolean
  className?: string
}

export function Accordion({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = '',
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  )

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index)

        return (
          <motion.div
            key={item.id ?? item.question}
            initial={false}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'border-(--teal)/50 bg-(--teal)/5 dark:bg-black/90 shadow-xs'
                : 'border-(--border-color) bg-white dark:bg-black hover:border-(--border-color)/80'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
              aria-expanded={isOpen}
            >
              <span
                className={`text-sm sm:text-base font-bold font-display transition-colors duration-200 ${
                  isOpen ? 'text-(--teal)' : 'text-(--text-primary) group-hover:text-(--teal)'
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-8 h-8 rounded-full border border-(--border-color) flex items-center justify-center text-(--teal) shrink-0 group-hover:border-(--teal) transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.22, delay: 0.04 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.14 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-(--text-secondary) leading-relaxed border-t border-(--border-color)/40 pt-3.5">
                    {item.answer}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
