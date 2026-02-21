'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  href,
  variant = 'primary', // primary, outline, outlineDark
  size = 'md', // sm, md, lg
  showArrow = true,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-full transition-all duration-300"
  
  const variants = {
    primary: "btn-gradient text-white hover:shadow-lg hover:shadow-teal/30",
    outline: "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white",
    outlineDark: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy",
    ghost: "bg-transparent text-navy hover:bg-navy/5",
    teal: "bg-teal text-white hover:bg-teal-dark",
  }

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const buttonContent = (
    <>
      {children}
      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        </motion.span>
      )}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        <motion.span
          {...motionProps}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass}`}
        >
          {buttonContent}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {buttonContent}
    </motion.button>
  )
}
