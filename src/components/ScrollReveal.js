'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollReveal({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up', // up, down, left, right, none
  distance = 30,
  once = true,
  threshold = 0.1
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance }
      case 'down':
        return { opacity: 0, y: -distance }
      case 'left':
        return { opacity: 0, x: distance }
      case 'right':
        return { opacity: 0, x: -distance }
      case 'none':
        return { opacity: 0 }
      default:
        return { opacity: 0, y: distance }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      case 'none':
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for multiple items
export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0.2
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item to be used inside StaggerContainer
export function StaggerItem({ 
  children, 
  className = '',
  direction = 'up',
  distance = 20
}) {
  const getVariants = () => {
    const hidden = direction === 'up' || direction === 'down'
      ? { opacity: 0, y: direction === 'up' ? distance : -distance }
      : { opacity: 0, x: direction === 'left' ? distance : -distance }
    
    const visible = direction === 'up' || direction === 'down'
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 }

    return { hidden, visible }
  }

  return (
    <motion.div
      variants={{
        ...getVariants(),
        visible: {
          ...getVariants().visible,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
