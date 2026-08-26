import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { 
  ArrowLeft, 
  ArrowUpRight, 
  AlertTriangle, 
  Cpu, 
  Cloud, 
  Shield, 
  Database, 
  Rocket, 
  Gauge, 
  Users,
  CheckCircle2
} from 'lucide-react'
import { CASE_STUDIES } from '@/lib/case-studies'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = CASE_STUDIES.find((c) => c.slug === slug)
  if (!study) return { title: 'Case Study Not Found' }

  return {
    title: `${study.title} | RiseUp Case Study`,
    description: study.summary,
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = CASE_STUDIES.find((c) => c.slug === slug)
  if (!study) notFound()

  // Get other case studies for related work section
  const relatedStudies = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2)

  const getSubFeatureIcon = (iconName?: string) => {
    switch (iconName) {
      case 'cpu':
        return <Cpu className="w-4 h-4 text-(--teal)" />
      case 'cloud':
        return <Cloud className="w-4 h-4 text-(--teal)" />
      case 'shield':
        return <Shield className="w-4 h-4 text-(--teal)" />
      case 'database':
        return <Database className="w-4 h-4 text-(--teal)" />
      default:
        return <Cpu className="w-4 h-4 text-(--teal)" />
    }
  }

  return (
    <div className="w-full min-h-screen py-12 sm:py-16 md:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Top Breadcrumb & Hero */}
        <div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-(--teal) hover:underline mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-(--teal)/10 text-(--teal) text-xs font-mono font-semibold uppercase tracking-wider border border-(--teal)/20">
              {study.categoryLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) font-display mt-4 leading-[1.12]">
            {study.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-4xl">
            {study.summary}
          </p>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {study.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-(--border-color)/40 text-(--text-secondary) border border-(--border-color)"
              >
                {tag}
              </span>
            ))}
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-(--teal)/5 text-(--teal) border border-(--teal)/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome Metrics Strip */}
        {/* <div>
          <h2 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display mb-6">
            Outcome Metrics
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {study.outcomeMetrics?.map((metric, idx) => {
              const isHighlight = metric.isHighlighted

              return (
                <div
                  key={idx}
                  className={`relative p-5 sm:p-6 rounded-3xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                    isHighlight
                      ? 'bg-[#06162d] dark:bg-[#06152a] text-white border-[#0d2a50] shadow-xl'
                      : 'bg-white dark:bg-black text-(--text-primary) border-(--border-color) shadow-xs'
                  }`}
                >
                  {isHighlight && (
                    <Rocket className="w-24 h-24 text-(--aqua)/10 absolute -bottom-4 -right-4 pointer-events-none" />
                  )}

                  <div>
                    <div
                      className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                        isHighlight ? 'text-slate-300' : 'text-(--text-secondary)'
                      }`}
                    >
                      {metric.label}
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl font-bold font-display tracking-tight mt-1.5 ${
                        isHighlight ? 'text-white' : 'text-(--text-primary)'
                      }`}
                    >
                      {metric.value}
                    </div>
                  </div>

                  {metric.subtext && (
                    <p
                      className={`text-xs mt-3 leading-snug ${
                        isHighlight ? 'text-slate-300/90' : 'text-(--text-secondary)'
                      }`}
                    >
                      {metric.subtext}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div> */}

        {/* 2-Column Main Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: 3 Phases (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Phase 1: The Situation */}
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-(--border-color) bg-white dark:bg-black shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display">
                {study.situation.heading}
              </h2>

              <div className="mt-4 space-y-4 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
                {study.situation.paragraphs ? (
                  study.situation.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{study.situation.detail}</p>
                )}
              </div>

              {study.situation.vulnerabilityAlert && (
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3.5">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-red-500 font-display">
                      {study.situation.vulnerabilityAlert.title}
                    </div>
                    <div className="text-xs sm:text-sm text-red-400/90 font-mono mt-1 leading-relaxed">
                      {study.situation.vulnerabilityAlert.text}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Phase 2: The Solution */}
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-(--border-color) bg-white dark:bg-black shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display">
                {study.solution.heading}
              </h2>

              <div className="mt-4 space-y-4 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
                {study.solution.paragraphs ? (
                  study.solution.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{study.solution.detail}</p>
                )}
              </div>

              {study.solution.subFeatures && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.solution.subFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl border border-(--border-color) bg-white dark:bg-black"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-(--teal)/10 flex items-center justify-center shrink-0 border border-(--teal)/20">
                          {getSubFeatureIcon(feat.icon)}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-(--text-primary) font-display">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="text-xs text-(--text-secondary) leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Phase 3: The Result */}
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-[#0d2a50] bg-[#06162d] dark:bg-[#06152a] text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {study.result.heading}
              </h2>

              <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {study.result.paragraphs ? (
                  study.result.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{study.result.detail}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Project Meta Card */}
            <div className="p-6 sm:p-7 rounded-3xl border border-(--border-color) bg-white dark:bg-black shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-(--text-secondary) font-bold pb-3 border-b border-(--border-color)">
                Project Meta
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted)">
                    Industry
                  </div>
                  <div className="text-sm font-semibold text-(--text-primary) mt-0.5">
                    {study.industry}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted)">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-(--text-primary) mt-0.5">
                    {study.location}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted)">
                    Timeline
                  </div>
                  <div className="text-sm font-semibold text-(--text-primary) mt-0.5">
                    {study.duration}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-(--text-muted)">
                    Team Size
                  </div>
                  <div className="text-sm font-semibold text-(--text-primary) mt-0.5">
                    {study.team_size}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Card */}
            {study.testimonial && (
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0a4d5c] to-[#062c35] text-white border border-(--teal)/30 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-serif text-(--aqua)/30 leading-none mb-2 select-none">
                    “
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                    {study.testimonial.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-(--teal)/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-(--aqua)/20 border border-(--aqua)/40 flex items-center justify-center font-bold text-xs text-(--aqua) font-display">
                    {study.testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {study.testimonial.name}
                    </div>
                    <div className="text-[11px] font-mono text-(--aqua)/80">
                      {study.testimonial.title}, {study.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Engineering Work Section */}
        <div className="pt-10 border-t border-(--border-color)">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display mb-8">
            Related Engineering Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedStudies.map((rel) => (
              <Link
                key={rel.slug}
                href={`/case-studies/${rel.slug}`}
                className="group p-6 sm:p-7 rounded-3xl border border-(--border-color) hover:border-(--teal)/50 bg-white dark:bg-black shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted) font-semibold">
                      {rel.industry.toUpperCase()}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-(--teal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="text-xl font-bold text-(--text-primary) font-display mt-2.5 group-hover:text-(--teal) transition-colors">
                    {rel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-(--text-secondary) mt-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {rel.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-(--border-color)/30 text-(--text-secondary) border border-(--border-color)/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
