'use client'

import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  isTextarea?: false
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  isTextarea: true
}

export type FormFieldProps = InputProps | TextareaProps

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  (props, ref) => {
    const { label, error, helperText, className = '', id, required, isTextarea, ...restProps } = props
    const generatedId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    const baseFieldClasses =
      'w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white dark:bg-black text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all duration-200 outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] disabled:opacity-50 disabled:cursor-not-allowed'

    const borderClass = error
      ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500/30'
      : 'border-[var(--border-color)]'

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={generatedId}
            className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-secondary)] flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-[var(--teal)] ml-1">*</span>}
            </span>
          </label>
        )}

        {isTextarea ? (
          <textarea
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            id={generatedId}
            className={`${baseFieldClasses} ${borderClass} resize-none min-h-[96px] ${className}`}
            {...(restProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            id={generatedId}
            className={`${baseFieldClasses} ${borderClass} h-11 ${className}`}
            {...(restProps as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error ? (
          <span className="text-xs text-red-400 font-medium pl-0.5">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-[var(--text-muted)] pl-0.5">{helperText}</span>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
