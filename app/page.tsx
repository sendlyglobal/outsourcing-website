import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import CapabilitiesSection from '@/components/home/CapabilitiesSection'
import OutcomesSection from '@/components/home/OutcomesSection'
import ProcessSection from '@/components/home/ProcessSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <CapabilitiesSection />
      <ProcessSection />
      <OutcomesSection />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}
