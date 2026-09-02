'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  X, 
  ChevronLeft, 
  ChevronDown
} from 'lucide-react'
import { Button, Input } from '@/components/ui'
import Cal from '@calcom/embed-react'

export type ProjectType =
  | 'web-development'
  | 'mobile-development'
  | 'backend-api-development'
  | 'enterprise-software'
  | 'cloud-devops'
  | 'ai-automation'
  | 'software-modernization'
  | 'qa-testing'
  | 'custom'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialProjectType?: string
}

interface ProjectOption {
  id: ProjectType
  title: string
  desc: string
  eventSlug: string
}

export function normalizeProjectType(type?: string): ProjectType {
  if (!type) return 'web-development'
  const normalized = type.toLowerCase().trim()

  if (normalized.includes('mobile') || normalized === 'ios' || normalized === 'android' || normalized === 'flutter') {
    return 'mobile-development'
  }
  if (normalized.includes('backend') || normalized.includes('api') || normalized === 'apis') {
    return 'backend-api-development'
  }
  if (normalized.includes('enterprise') || normalized.includes('erp') || normalized === 'sap' || normalized === 'odoo') {
    return 'enterprise-software'
  }
  if (normalized.includes('cloud') || normalized.includes('devops') || normalized.includes('kubernetes')) {
    return 'cloud-devops'
  }
  if (normalized.includes('ai') || normalized.includes('automation') || normalized.includes('ml')) {
    return 'ai-automation'
  }
  if (normalized.includes('modern') || normalized.includes('legacy') || normalized.includes('refactor')) {
    return 'software-modernization'
  }
  if (normalized.includes('qa') || normalized.includes('test') || normalized.includes('testing')) {
    return 'qa-testing'
  }
  if (normalized === 'custom' || normalized.includes('bespoke')) {
    return 'custom'
  }
  if (normalized.includes('web') || normalized.includes('frontend') || normalized.includes('design') || normalized.includes('portal')) {
    return 'web-development'
  }

  return 'web-development'
}

const PROJECT_OPTIONS: ProjectOption[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Responsive web apps, customer portals, dashboards & SaaS systems',
    eventSlug: 'globnetics',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    desc: 'Native iOS/Android & cross-platform apps',
    eventSlug: 'globnetics',
  },
  {
    id: 'backend-api-development',
    title: 'Backend & APIs',
    desc: 'Microservices, REST/gRPC APIs & authentication systems',
    eventSlug: 'globnetics',
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software & ERP',
    desc: 'Business-critical systems, custom ERPs & workflows',
    eventSlug: 'globnetics',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    desc: 'Cloud infrastructure, Kubernetes, CI/CD & auto-scaling',
    eventSlug: 'globnetics',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    desc: 'Intelligent assistants, document OCR & automated workflows',
    eventSlug: 'globnetics',
  },
  {
    id: 'software-modernization',
    title: 'Software Modernization',
    desc: 'Microservices transition, cloud migration & refactoring',
    eventSlug: 'globnetics',
  },
  {
    id: 'qa-testing',
    title: 'QA & Testing',
    desc: 'Automated E2E testing, security audits & load testing',
    eventSlug: 'globnetics',
  },
  {
    id: 'custom',
    title: 'Custom Systems & Architecture',
    desc: 'Bespoke architectures & complex workflows',
    eventSlug: 'globnetics',
  },
]

const qualifySchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email address'),
  company: z.string().min(2, 'Please enter your company name'),
  projectType: z.enum([
    'web-development',
    'mobile-development',
    'backend-api-development',
    'enterprise-software',
    'cloud-devops',
    'ai-automation',
    'software-modernization',
    'qa-testing',
    'custom',
  ]),
  notes: z.string().optional(),
})

type QualifyFormData = z.infer<typeof qualifySchema>

export default function QuoteModal({ isOpen, onClose, initialProjectType = 'web-development' }: QuoteModalProps) {
  const router = useRouter()
  const modalRef = useRef<HTMLDivElement>(null)

  const [step, setStep] = useState<'qualify' | 'schedule' | 'confirmed'>('qualify')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const normalizedDefault = normalizeProjectType(initialProjectType)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QualifyFormData>({
    resolver: zodResolver(qualifySchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: normalizedDefault,
      notes: '',
    },
  })

  const watchedProjectType = watch('projectType')
  const watchedName = watch('name')
  const watchedEmail = watch('email')
  const watchedCompany = watch('company')
  const watchedNotes = watch('notes')

  useEffect(() => {
    if (isOpen && initialProjectType) {
      const norm = normalizeProjectType(initialProjectType)
      setValue('projectType', norm)
    }
  }, [isOpen, initialProjectType, setValue])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const onQualifySubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep('schedule')
    }, 300)
  }

  const handleNavigateToContact = () => {
    onClose()
    router.push('/contact')
  }

  const handleResetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStep('qualify')
      reset()
    }, 300)
  }

  const activeOption = PROJECT_OPTIONS.find((p) => p.id === watchedProjectType) || PROJECT_OPTIONS[0]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full overflow-hidden rounded-2xl border transition-all duration-300 shadow-2xl shadow-black/40 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-white dark:bg-black border-(--border-color) ${
          step === 'schedule' ? 'max-w-4xl' : 'max-w-2xl'
        }`}
      >
        <div className="flex items-center justify-between border-b border-(--border-color) px-6 py-4 bg-white dark:bg-black">
          <div className="flex items-center gap-2">
            {step === 'schedule' && (
              <button
                type="button"
                onClick={() => setStep('qualify')}
                className="mr-1 p-1 rounded-md text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--border-color)/30 transition-colors cursor-pointer"
                aria-label="Back to details"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="font-mono text-xs tracking-wider uppercase text-(--teal) font-medium">
                {step === 'qualify' ? 'Step 1 of 2: Requirements' : step === 'schedule' ? 'Step 2 of 2: Select a Time Slot' : 'Booking Confirmed'}
              </span>
              <h2 id="quote-modal-title" className="text-lg font-bold text-(--text-primary) font-display">
                {step === 'qualify' && 'Request a Scoped Architecture Estimate'}
                {step === 'schedule' && `${activeOption.title} Discovery Session`}
                {step === 'confirmed' && 'Discovery Call Scheduled'}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-(--text-muted) hover:text-(--text-primary) hover:bg-(--border-color)/30 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-white dark:bg-black">
          {step === 'qualify' && (
            <form onSubmit={handleSubmit(onQualifySubmit)} className="space-y-4">
              <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                Tell us what you&apos;re building. We&apos;ll review your requirements and prepare a realistic architecture &amp; cost estimate for your discovery call.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="w-full flex flex-col gap-1.5">
                  <label
                    htmlFor="quote-project-type"
                    className="text-xs font-mono font-medium uppercase tracking-wider text-(--text-secondary) flex items-center"
                  >
                    <span>Project Domain</span>
                    <span className="text-(--teal) ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="quote-project-type"
                      {...register('projectType')}
                      className="w-full h-11 px-3.5 pr-10 rounded-xl border border-(--border-color) text-sm bg-white dark:bg-black text-(--text-primary) transition-all duration-200 outline-none focus:border-(--teal) focus:ring-1 focus:ring-(--teal) cursor-pointer appearance-none"
                    >
                      {PROJECT_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id} className="bg-white dark:bg-black text-(--text-primary)">
                          {opt.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-(--text-muted) absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.projectType?.message && (
                    <span className="text-xs text-red-400 font-medium pl-0.5">{errors.projectType.message}</span>
                  )}
                </div>

                <Input
                  label="Company / Organization"
                  required
                  placeholder=""
                  error={errors.company?.message}
                  {...register('company')}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Your Name"
                  required
                  placeholder=""
                  error={errors.name?.message}
                  {...register('name')}
                />
                <Input
                  label="Work Email"
                  type="email"
                  required
                  placeholder=""
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>

              <Input
                label="Brief Project Overview (Optional)"
                isTextarea
                rows={2}
                placeholder="Current stack, core pain points, target launch date..."
                error={errors.notes?.message}
                {...register('notes')}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue to Schedule Discovery Call'}
                </Button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleNavigateToContact}
                  className="text-xs text-(--teal) hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Prefer email? Send us a message instead
                </button>
              </div>
            </form>
          )}

          {step === 'schedule' && (
            <div className="w-full space-y-3">
              <div className="w-full h-[420px] sm:h-[450px] rounded-xl overflow-hidden border border-(--border-color) bg-white dark:bg-black">
                <Cal
                  calLink="globnetics?timeZone=America/New_York"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }}
                  config={{
                    name: watchedName,
                    email: watchedEmail,
                    notes: `${watchedCompany ? `Company: ${watchedCompany}. ` : ''}${watchedNotes || ''}`,
                    theme: 'auto',
                    timeZone: 'America/New_York',
                  }}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 px-1 text-xs text-(--text-muted)">
                <span>
                  Selected domain: <strong className="text-(--text-primary)">{activeOption.title}</strong>
                </span>
                <button
                  type="button"
                  onClick={handleNavigateToContact}
                  className="text-(--teal) hover:underline cursor-pointer"
                >
                  Need a custom time slot? Contact us directly
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
