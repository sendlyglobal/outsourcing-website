import React from 'react'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesCapabilities from '@/components/services/ServicesCapabilities'
import DeliveryMethodology from '@/components/services/DeliveryMethodology'
import TransformationForm from '@/components/services/TransformationForm'

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      <ServicesHero />
      <ServicesCapabilities />
      <DeliveryMethodology />
      <TransformationForm />
    </div>
  )
}