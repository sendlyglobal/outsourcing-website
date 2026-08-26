'use client'

import React from 'react'
import { useParams, notFound } from 'next/navigation'
import { WebOrbitPage } from '@/components/technologies/WebOrbit'
import TechnicalFAQ from '@/components/technologies/TechnicalFAQ'
import { useTheme } from '@/providers/ThemeProvider'
import { TechDomain } from '@/types/animation'

const VALID_DOMAINS: TechDomain[] = ['web', 'mobile', 'erp', 'custom']

export default function TechnologyDomainPage() {
  const params = useParams()
  const domain = params?.domain as TechDomain
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (!VALID_DOMAINS.includes(domain)) {
    notFound()
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-white dark:bg-black">
      <section className="relative w-full h-[660px] sm:h-[740px] lg:h-[800px] overflow-hidden border-b border-(--border-color)">
        <WebOrbitPage
          isDark={isDark}
          initialDomain={domain}
        />
      </section>

      <TechnicalFAQ domain={domain} />
    </div>
  )
}
