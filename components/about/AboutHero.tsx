'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui'

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-(--text-primary) leading-[1.15] font-display"
            >
              Architecting the Digital Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed"
            >
              RiseUp Solutions, we don&apos;t just write code; we engineer scalable, robust systems that drive business transformation. Born from a collective of enterprise architects and high-growth startup veterans, our mission is to deliver technical excellence without compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="my-7"
            >
              <Button
                variant="primary"
                size="md"
                href="/careers"
                className="rounded-full px-7"
              >
                View Careers
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-(--text-secondary) leading-relaxed"
            >
              Our mission is to provide uncompromising technical excellence. We don&apos;t just build software; we build the foundations of modern business. By combining deep domain expertise with a passion for clean code, we ensure your infrastructure is ready for whatever comes next.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-(--border-color) shadow-2xl shadow-black/20 dark:shadow-[0_20px_50px_rgba(10,138,158,0.2)] bg-white dark:bg-black group">
              <Image
                src="/images/about_office_team.jpg"
                alt="Engineering Team Collaborating in Modern Office"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
