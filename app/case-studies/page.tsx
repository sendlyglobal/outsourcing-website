import type { Metadata } from 'next'
import React from 'react'
import CaseStudiesList from '@/components/case-studies/CaseStudiesList'

export const metadata: Metadata = {
  title: 'Featured Outcomes & Case Studies | TechNexus Solutions',
  description:
    'Discover how we engineer robust, scalable software architectures and production-grade digital solutions tailored to solve mission-critical enterprise challenges.',
}

export default function CaseStudiesPage() {
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-4rem)] pb-20 sm:pb-28">
      <section className="relative w-full pt-14 pb-8 sm:pt-20 sm:pb-12 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 text-center border-b border-(--border-color)">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) font-display leading-[1.12]">
            Featured Outcomes
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed max-w-2xl mx-auto">
            Discover how we engineer robust, scalable software architectures and production-grade digital solutions tailored to solve mission-critical enterprise challenges.
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
