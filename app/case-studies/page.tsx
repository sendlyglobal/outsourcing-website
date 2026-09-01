import type { Metadata } from 'next'
import React from 'react'
import CaseStudiesList from '@/components/case-studies/CaseStudiesList'

export const metadata: Metadata = {
  title: 'Our Work | RiseUp Engineering',
  description:
    'Our work shows the kind of problems we can solve. Each project explains what the problem was, what we built, how we built it, and the result.',
}

export default function CaseStudiesPage() {
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-4rem)] pb-20 sm:pb-28 bg-white dark:bg-black">
      <section className="relative w-full pt-16 pb-12 sm:pt-22 sm:pb-16 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 text-center border-b border-(--border-color)">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold block mb-2.5">
            PROVEN ENGINEERING PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) font-display leading-[1.12]">
            Our Work
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed max-w-2xl mx-auto">
            Our work shows the kind of problems we can solve. Each project explains what the problem was, what we built, how we built it, and the result.
          </p>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 mt-10 sm:mt-14">
        <div className="max-w-6xl mx-auto">
          <CaseStudiesList />
        </div>
      </section>
    </div>
  )
}
