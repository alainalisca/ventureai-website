'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function CountUp({
  target,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const count = useMotionValue(0)
  const springCount = useSpring(count, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000
  })
  
  const rounded = useTransform(springCount, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals)
    }
    return Math.round(latest)
  })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        count.set(target)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, target, count, delay])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

// Percentage counter
export function PercentageCounter({
  target,
  duration = 2,
  delay = 0,
  className = ''
}) {
  return (
    <CountUp
      target={target}
      duration={duration}
      delay={delay}
      suffix="%"
      className={className}
    />
  )
}

// Year counter (for "1 Year" style)
export function YearCounter({
  target = 1,
  duration = 1.5,
  delay = 0,
  className = ''
}) {
  return (
    <CountUp
      target={target}
      duration={duration}
      delay={delay}
      suffix={target === 1 ? " Year" : " Years"}
      className={className}
    />
  )
}

// States counter (for "50 states")
export function StatesCounter({
  target = 50,
  duration = 2,
  delay = 0,
  className = ''
}) {
  return (
    <CountUp
      target={target}
      duration={duration}
      delay={delay}
      className={className}
    />
  )
}
