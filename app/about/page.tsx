import type { Metadata } from 'next'
import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import CoreValues from '@/components/about/CoreValues'
import LeadershipTeam from '@/components/about/LeadershipTeam'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About Us | RiseUp Solutions',
  description:
    'Born from a collective of enterprise architects and high-growth startup veterans, our mission is to deliver technical excellence without compromise.',
}

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <AboutHero />
      <CoreValues />
      <LeadershipTeam />
      <AboutCTA />
    </div>
  )
}