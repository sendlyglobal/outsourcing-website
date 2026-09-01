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
  CheckCircle2,
  Server,
  Code2,
  GitBranch,
  Workflow,
  Sparkles,
  Zap,
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
      case 'server':
        return <Server className="w-4 h-4 text-(--teal)" />
      case 'code':
        return <Code2 className="w-4 h-4 text-(--teal)" />
      case 'git':
        return <GitBranch className="w-4 h-4 text-(--teal)" />
      case 'workflow':
        return <Workflow className="w-4 h-4 text-(--teal)" />
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-(--teal)" />
      case 'zap':
        return <Zap className="w-4 h-4 text-(--teal)" />
      default:
        return <Cpu className="w-4 h-4 text-(--teal)" />
    }
  }

  return (
    <div className="w-full min-h-screen py-12 sm:py-16 md:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-(--border-color)">
          {study.key_results.map((res, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-primary) font-display">
                {res.metric}
              </span>
              <span className="text-xs sm:text-sm text-(--text-secondary) mt-1 font-mono uppercase tracking-wider">
                {res.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-12 sm:space-y-16">
          <div className="p-8 sm:p-10 rounded-2xl border border-(--border-color) bg-slate-50/50 dark:bg-zinc-950/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display mb-4">
              {study.situation.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
              {study.situation.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {study.situation.vulnerabilityAlert && (
              <div className="mt-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider">
                    {study.situation.vulnerabilityAlert.title}
                  </h4>
                  <p className="text-xs mt-1 leading-relaxed opacity-90">
                    {study.situation.vulnerabilityAlert.text}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border border-(--border-color) bg-white dark:bg-black">
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display mb-4">
              {study.solution.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
              {study.solution.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {study.solution.subFeatures && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {study.solution.subFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-(--border-color) bg-slate-50/30 dark:bg-zinc-900/30 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-(--teal)/10 border border-(--teal)/20">
                      {getSubFeatureIcon(feat.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-(--text-primary) font-display">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-(--text-secondary) mt-1 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border border-(--border-color) bg-slate-50/50 dark:bg-zinc-950/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display mb-4">
              {study.result.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
              {study.result.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {study.testimonial && (
            <div className="p-8 sm:p-10 rounded-2xl border border-(--teal)/30 bg-(--teal)/5 dark:bg-(--teal)/10">
              <blockquote className="text-base sm:text-lg md:text-xl italic text-(--text-primary) leading-relaxed">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-(--teal) text-white font-bold flex items-center justify-center text-sm font-mono">
                  {study.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-(--text-primary)">
                    {study.testimonial.name}
                  </div>
                  <div className="text-xs text-(--text-secondary)">
                    {study.testimonial.title}, {study.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {relatedStudies.length > 0 && (
          <div className="pt-12 border-t border-(--border-color)">
            <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display mb-6">
              More Engineering Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedStudies.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/case-studies/${rel.slug}`}
                  className="p-6 rounded-2xl border border-(--border-color) hover:border-(--teal) transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-(--teal) font-semibold">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="text-lg font-bold text-(--text-primary) group-hover:text-(--teal) transition-colors mt-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-(--text-secondary) mt-2 line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-(--teal)">
                    <span>Read Study</span>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
