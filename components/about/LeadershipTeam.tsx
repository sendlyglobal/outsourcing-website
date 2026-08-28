'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const LEADERS = [
  {
    name: 'Sarah Jenkins',
    role: 'Chief Executive Officer',
    image: '/images/leader_sarah_jenkins.jpg',
  },
  {
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    image: '/images/leader_marcus_chen.jpg',
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP of Engineering',
    image: '/images/leader_elena_rodriguez.jpg',
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    image: '/images/leader_david_kim.jpg',
  },
]

export default function LeadershipTeam() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Leadership Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-(--border-color) bg-slate-900 shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-bold text-(--text-primary) font-display leading-tight">
                  {leader.name}
                </h3>
                <p className="font-mono text-xs text-(--teal) mt-1 tracking-tight">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
