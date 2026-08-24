'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { Button, Input } from '@/components/ui'

const PROJECT_TYPE_OPTIONS = [
  'Web Application',
  'Mobile Application',
  'ERP Development',
  'Custom Systems',
  'Cloud Architecture',
  'Other',
] as const

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email address'),
  company: z.string().min(2, 'Please enter your company name'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Please tell us about your technical requirements (min 10 characters)'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: 'Web Application',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('Contact form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    reset()
  }

  return (
    <div className="w-full bg-white dark:bg-black rounded-3xl border border-(--border-color) p-6 sm:p-8 md:p-10 shadow-xl shadow-black/5 dark:shadow-[0_20px_50px_rgba(10,138,158,0.08)]">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="py-12 px-4 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-(--teal)/15 text-(--teal) flex items-center justify-center mb-5 border border-(--teal)/30 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-(--text-primary) font-display">
              Request Received
            </h3>

            <p className="mt-3 text-sm sm:text-base text-(--text-secondary) max-w-md">
              Thank you for reaching out. Our engineering leads will review your technical requirements and respond within 24 hours.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-8 text-xs font-semibold text-(--teal) hover:text-(--aqua) transition-colors cursor-pointer"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                label="Name"
                placeholder=""
                error={errors.name?.message}
                {...register('name')}
              />

              <Input
                label="Email"
                type="email"
                placeholder=""
                error={errors.email?.message}
                {...register('email')}
              />
            </div>

            {/* Row 2: Company and Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                label="Company"
                placeholder=""
                error={errors.company?.message}
                {...register('company')}
              />

              <div className="w-full flex flex-col gap-1.5">
                <label
                  htmlFor="contact-project-type"
                  className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-secondary)]"
                >
                  Project Type
                </label>
                <div className="relative">
                  <select
                    id="contact-project-type"
                    {...register('projectType')}
                    className="w-full h-11 px-3.5 pr-10 rounded-xl border border-[var(--border-color)] text-sm bg-white dark:bg-black text-[var(--text-primary)] transition-all duration-200 outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] cursor-pointer appearance-none"
                  >
                    {PROJECT_TYPE_OPTIONS.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        className="bg-white dark:bg-black text-[var(--text-primary)]"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[var(--text-muted)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.projectType?.message && (
                  <span className="text-xs text-red-400 font-medium pl-0.5">
                    {errors.projectType.message}
                  </span>
                )}
              </div>
            </div>

            {/* Row 3: Message */}
            <Input
              isTextarea
              rows={5}
              label="Message"
              placeholder="Tell us about your technical requirements..."
              error={errors.message?.message}
              {...register('message')}
            />

            {/* Submit Button (without icon) */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
