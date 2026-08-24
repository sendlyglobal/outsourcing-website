'use client'

import React from 'react'
import { Calendar, MapPin, Mail, Phone } from 'lucide-react'
import { useQuoteModal } from '@/providers/QuoteModalProvider'

export default function ContactDirect() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <div className="w-full space-y-6">
      {/* Top Card: Prefer a quick call? */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-[#06162d] dark:bg-[#06152a] text-white border border-[#0d2a50] shadow-xl text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-(--teal)/20 text-(--aqua) flex items-center justify-center mb-4 border border-(--teal)/30">
          <Calendar className="w-6 h-6" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
          Prefer a quick call?
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
          Skip the form and schedule a 15-minute discovery call directly with an engineering lead.
        </p>

        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="mt-6 w-full py-3 px-6 rounded-full border border-(--teal) text-(--aqua) hover:bg-(--teal)/20 text-xs sm:text-sm font-semibold tracking-wider font-mono transition-all duration-200 cursor-pointer text-center"
        >
          Book Time
        </button>
      </div>

      {/* Bottom Card: Contact Info */}
      <div className="p-6 sm:p-8 rounded-3xl border border-(--border-color) bg-white dark:bg-black shadow-sm">
        <h3 className="text-xl font-bold text-(--text-primary) font-display mb-6">
          Contact Info
        </h3>

        <div className="space-y-5">
          {/* Headquarters */}
          <div className="flex items-start gap-3.5">
            <div className="text-(--teal) mt-0.5 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-(--text-secondary)">
                Headquarters
              </div>
              <div className="text-sm font-medium text-(--text-primary) mt-0.5 leading-snug">
                1200 Tech Boulevard, Suite 400<br />
                San Francisco, CA 94107
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="text-(--teal) mt-0.5 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-(--text-secondary)">
                Email
              </div>
              <a
                href="mailto:hello@technexus.com"
                className="text-sm font-medium text-(--text-primary) hover:text-(--teal) transition-colors mt-0.5 block"
              >
                hello@technexus.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3.5">
            <div className="text-(--teal) mt-0.5 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-(--text-secondary)">
                Phone
              </div>
              <a
                href="tel:+14155550198"
                className="text-sm font-medium text-(--text-primary) hover:text-(--teal) transition-colors mt-0.5 block font-mono"
              >
                +1 (415) 555-0198
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
