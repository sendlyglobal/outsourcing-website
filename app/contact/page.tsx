import type { Metadata } from 'next'
import React from 'react'
import {
  ContactHero,
  ContactForm,
  ContactDirect,
} from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Us | TechNexus Solutions',
  description:
    'Ready to accelerate your technical initiatives? Reach out and our engineering team will get back to you within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-4rem)] pb-16 sm:pb-24">
      {/* Centered Hero Header */}
      <ContactHero />

      {/* Main Grid: Left Form, Right Cards */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 mt-4 sm:mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Form (7 cols on desktop) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Cards: Quick Call & Contact Info (5 cols on desktop) */}
            <div className="lg:col-span-5">
              <ContactDirect />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}