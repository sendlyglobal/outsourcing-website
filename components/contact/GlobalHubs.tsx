'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { MapPin, Clock, Phone, Building2, Globe2 } from 'lucide-react'

interface HubLocation {
  city: string
  country: string
  region: string
  role: string
  timezone: string
  address: string
  focus: string
}

const HUBS: HubLocation[] = [
  {
    city: 'San Francisco',
    country: 'United States',
    region: 'North America',
    role: 'HQ & Solutions Engineering',
    timezone: 'America/Los_Angeles',
    address: '535 Mission St, San Francisco, CA 94105',
    focus: 'Executive architecture, client partnership & US contracts',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    role: 'Client Delivery & Architecture',
    timezone: 'Europe/London',
    address: '100 Bishopsgate, London EC2N 4AG',
    focus: 'EMEA accounts, GDPR compliance & financial engineering',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    role: 'APAC Regional Hub',
    timezone: 'Asia/Singapore',
    address: 'Marina Bay Financial Centre, Tower 1, Singapore 018981',
    focus: 'High-throughput systems & cross-border cloud platforms',
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    region: 'Africa Hub',
    role: 'Core Software Development Hub',
    timezone: 'Africa/Nairobi',
    address: 'Westlands Commercial Center, Nairobi',
    focus: 'Dedicated engineering squads, mobile & ERP build teams',
  },
]

export default function GlobalHubs() {
  const [hubTimes, setHubTimes] = useState<Record<string, { timeStr: string; isWorkingHours: boolean }>>({})

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, { timeStr: string; isWorkingHours: boolean }> = {}

      HUBS.forEach((hub) => {
        try {
          const now = new Date()
          const timeStr = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          }).format(now)

          // Calculate local hour for working hours status (8 AM - 7 PM)
          const hourStr = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.timezone,
            hour: 'numeric',
            hour12: false,
          }).format(now)
          const hour = parseInt(hourStr, 10)
          const isWorkingHours = hour >= 8 && hour < 19

          times[hub.city] = { timeStr, isWorkingHours }
        } catch {
          times[hub.city] = { timeStr: '--:--', isWorkingHours: true }
        }
      })

      setHubTimes(times)
    }

    updateTimes()
    const timer = setInterval(updateTimes, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--teal)/10 border border-(--teal)/20 text-(--teal) text-xs font-mono font-medium mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Distributed Operations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Global Engineering Hubs
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            Continuous 24-hour follow-the-sun delivery with senior technical leads across key time zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {HUBS.map((hub, idx) => {
            const timeInfo = hubTimes[hub.city]
            const isOnline = timeInfo?.isWorkingHours

            return (
              <motion.div
                key={hub.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 rounded-3xl border border-(--border-color) hover:border-(--teal)/50 bg-white dark:bg-black transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-[0_15px_30px_rgba(10,138,158,0.1)] flex flex-col justify-between"
              >
                <div>
                  {/* Status Indicator & Live Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        {isOnline && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        )}
                        <span
                          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                            isOnline ? 'bg-emerald-500' : 'bg-slate-400'
                          }`}
                        />
                      </span>
                      <span className="text-[11px] font-mono font-medium text-(--text-secondary)">
                        {isOnline ? 'Active Now' : 'Asynch Mode'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-(--border-color)/30 text-[11px] font-mono text-(--text-primary)">
                      <Clock className="w-3 h-3 text-(--teal)" />
                      <span>{timeInfo?.timeStr || '--:--:--'}</span>
                    </div>
                  </div>

                  {/* City & Country */}
                  <h3 className="text-xl font-bold text-(--text-primary) font-display tracking-tight group-hover:text-(--teal) transition-colors">
                    {hub.city}
                  </h3>
                  <div className="text-xs text-(--teal) font-medium mt-0.5">
                    {hub.country} • {hub.region}
                  </div>

                  <div className="mt-3 pt-3 border-t border-(--border-color)/60">
                    <div className="text-xs font-semibold text-(--text-primary)">
                      {hub.role}
                    </div>
                    <p className="text-xs text-(--text-secondary) mt-1 leading-relaxed">
                      {hub.focus}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-(--border-color)/60 flex items-start gap-2 text-xs text-(--text-muted)">
                  <MapPin className="w-3.5 h-3.5 text-(--teal) shrink-0 mt-0.5" />
                  <span className="leading-snug">{hub.address}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
