import type { Metadata } from 'next'
import React from 'react'
import TechnologiesHeroBanner from '@/components/technologies/TechnologiesHeroBanner'
import TechnologiesTicker from '@/components/technologies/TechnologiesTicker'
import ServiceStacks from '@/components/technologies/ServiceStacks'
import TechnicalFAQ from '@/components/technologies/TechnicalFAQ'

export const metadata: Metadata = {
  title: 'Enterprise Technology Stacks | RiseUp',
  description:
    'Explore our production-grade technology clusters engineered for enterprise scalability across Web, Mobile, ERP, and Custom systems.',
}

export default function TechnologiesPage() {
  return (
    <div className="w-full flex justify-between flex-col min-h-screen">
      <TechnologiesHeroBanner />
      <TechnologiesTicker />
      <ServiceStacks />
      <TechnicalFAQ />
    </div>
  )
}
