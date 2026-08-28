'use client'

import React, { useState } from 'react'
import CareersHero from '@/components/careers/CareersHero'
import CareersCulture from '@/components/careers/CareersCulture'
import CareersOpenings from '@/components/careers/CareersOpenings'
import CareerApplicationModal from '@/components/careers/CareerApplicationModal'

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="w-full flex flex-col min-h-screen">
      <CareersHero onOpenModal={() => setIsModalOpen(true)} />
      <CareersCulture />
      <CareersOpenings onOpenModal={() => setIsModalOpen(true)} />
      <CareerApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}