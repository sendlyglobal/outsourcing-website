'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useQuoteModal } from '@/providers/QuoteModalProvider'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'quote' | 'ghost' | 'teal'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ProjectType = 'erp' | 'mobile' | 'web' | 'custom'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Button size scale */
  size?: ButtonSize
  /** Optional title prop (alternative or fallback to children) */
  title?: string
  /** Icon element or component */
  icon?: React.ReactNode | React.ComponentType<{ className?: string; size?: number }>
  /** Placement of the icon relative to text */
  iconPosition?: 'left' | 'right'
  /** Whether to show a trailing arrow (optional) */
  showArrow?: boolean
  /** For 'quote' variant: specify target discovery track */
  projectType?: ProjectType
  /** Optional href to render as Next.js Link (ignored for 'quote' variant) */
  href?: string
  /** Loading state with spinner */
  isLoading?: boolean
  /** Full width expansion */
  fullWidth?: boolean
  /** Additional CSS classnames */
  className?: string
  /** Children content */
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      title,
      icon,
      iconPosition = 'right',
      showArrow = false,
      projectType,
      href,
      isLoading = false,
      fullWidth = false,
      className = '',
      children,
      onClick,
      disabled,
      type = 'button',
      ...restProps
    },
    ref
  ) => {
    const { openQuoteModal } = useQuoteModal()

    // Determine variant-specific click handler
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) {
        e.preventDefault()
        return
      }

      if (variant === 'quote') {
        openQuoteModal(projectType)
      }

      if (onClick) {
        onClick(e)
      }
    }

    // Size mappings
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'text-xs py-2 px-4 gap-1.5 min-h-[36px]',
      md: 'text-sm py-2.5 px-5.5 gap-2 min-h-[42px]',
      lg: 'text-base py-3.5 px-7 gap-2.5 min-h-[48px]',
    }

    // Variant mappings adhering strictly to brand tokens
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        'bg-[#0b2545] text-white border border-white/15 hover:border-[var(--aqua)] hover:shadow-[0_10px_24px_rgba(11,37,69,0.35)] btn-primary',
      quote:
        'bg-[#0b2545] text-white border border-white/15 hover:border-[var(--aqua)] hover:shadow-[0_10px_24px_rgba(11,37,69,0.35)] btn-primary',
      secondary:
        'bg-transparent text-[var(--teal)] border border-[var(--teal)] hover:bg-[var(--teal)]/10 hover:border-[var(--aqua)] hover:text-[var(--aqua)] hover:shadow-[0_8px_20px_rgba(10,138,158,0.2)]',
      outline:
        'bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--teal)] hover:bg-[var(--line)]/20',
      teal:
        'bg-[var(--teal)] text-white border border-[var(--teal)] hover:bg-[var(--teal-hover)] hover:shadow-[0_8px_24px_rgba(10,138,158,0.35)]',
      ghost:
        'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20 border border-transparent',
    }

    const baseClasses =
      'btn group inline-flex items-center justify-center font-semibold rounded-full select-none cursor-pointer transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

    const combinedClasses = [
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Content resolution
    const buttonText = children ?? title ?? (variant === 'quote' ? 'Get a Quote' : '')

    // Render Icon helper
    const renderIcon = () => {
      if (isLoading) {
        return <Loader2 className="w-4 h-4 animate-spin shrink-0 text-[var(--aqua)]" />
      }

      if (icon) {
        if (React.isValidElement(icon)) {
          return icon
        }

        if (typeof icon === 'function' || typeof icon === 'object') {
          const IconComponent = icon as React.ComponentType<{ className?: string; size?: number }>
          const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16
          return <IconComponent size={iconSize} className="shrink-0" />
        }
      }

      if (showArrow) {
        const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16
        return (
          <ArrowRight
            size={iconSize}
            className="shrink-0 transition-transform group-hover:translate-x-0.5 text-[var(--aqua)]"
          />
        )
      }

      return null
    }

    const renderedIcon = renderIcon()

    const innerContent = (
      <>
        {renderedIcon && iconPosition === 'left' && renderedIcon}
        {buttonText && <span>{buttonText}</span>}
        {renderedIcon && iconPosition === 'right' && renderedIcon}
      </>
    )

    // Render as Next.js Link if href is provided and not a quote trigger
    if (href && variant !== 'quote') {
      return (
        <Link href={href} className={combinedClasses}>
          {innerContent}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        onClick={handleClick}
        className={combinedClasses}
        {...restProps}
      >
        {innerContent}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
