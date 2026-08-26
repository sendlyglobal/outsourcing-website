'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'motion/react'
import { Calendar, CheckCircle2 } from 'lucide-react'
import { Button, Input } from '@/components/ui'
import { useQuoteModal } from '@/providers/QuoteModalProvider'

const transformationSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Please enter a valid work email'),
  challenges: z.string().min(10, 'Please provide a brief description of your challenges (min 10 characters)'),
})

type TransformationFormData = z.infer<typeof transformationSchema>

export default function TransformationForm() {
  const { openQuoteModal } = useQuoteModal()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransformationFormData>({
    resolver: zodResolver(transformationSchema),
  })

  const onSubmit = async (data: TransformationFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('Transformation Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  return (
    <section className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl border border-(--border-color) bg-white dark:bg-black shadow-2xl shadow-black/10 dark:shadow-[0_20px_50px_rgba(10,138,158,0.15)]"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
              Start Your Transformation
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-(--text-secondary)">
              Request a technical consultation and preliminary project estimate.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-(--teal)/10 text-(--teal) flex items-center justify-center mb-4 border border-(--teal)/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-(--text-primary) font-display">
                Request Received
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-(--text-secondary) max-w-md">
                Our principal engineering team will review your requirements and reach out within 24 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs font-semibold text-(--teal) hover:underline cursor-pointer"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Input
                  label="Company/Personal Name"
                  placeholder=""
                  {...register('companyName')}
                  error={errors.companyName?.message}
                />

                <Input
                  label="Work Email"
                  type="email"
                  placeholder=""
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>

              <Input
                isTextarea
                rows={4}
                label="Current Challenges"
                placeholder="Briefly describe your existing systems, bottlenecks, or target goals..."
                {...register('challenges')}
                error={errors.challenges?.message}
              />

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-40"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>

                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-(--teal) hover:text-(--aqua) transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-(--teal)" />
                  <span>Book a Discovery Call</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
