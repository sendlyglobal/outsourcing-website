'use client'

import React from 'react'
import Link from 'next/link'

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Careers', href: '/careers' },
]

export default function Footer() {
  return (
    <footer className="w-full rounded-t-2xl bg-[#020b18] text-white border-t border-white/10 px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 border-b border-white/10">
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between pr-0 md:pr-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <div className="w-8.5 h-8.5 rounded-lg bg-[#0b2545] border border-white/15 flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter group-hover:border-(--teal) transition-colors">
                  TN
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight text-white font-display">
                    RiseUp
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-(--teal) font-medium">
                    Engineering
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                Engineering scalable infrastructure and enterprise applications for the modern web. Built for high-volume transactions and mission-critical reliability.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-(--teal) font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-(--teal) font-semibold mb-4">
              Legal & Resources
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} RiseUp Solutions. All rights reserved.</p>
          <p className="text-zinc-600">Enterprise Engineering · Mission Critical Systems</p>
        </div>
      </div>
    </footer>
  )
}
