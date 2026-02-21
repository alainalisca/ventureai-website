'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Rotating words component (like "High speed/trust/precision")
export function RotatingWords({ 
  words, 
  interval = 2000,
  className = ''
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className={`relative h-[60px] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// Stacked rotating words (shows all words, highlights current)
export function StackedRotatingWords({
  words,
  interval = 2000,
  className = '',
  activeClassName = 'opacity-100',
  inactiveClassName = 'opacity-30'
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.div
          key={word}
          animate={{
            opacity: index === currentIndex ? 1 : 0.3,
            y: index === currentIndex ? 0 : 0,
            scale: index === currentIndex ? 1 : 0.95
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={index === currentIndex ? activeClassName : inactiveClassName}
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}

// Text reveal animation (character by character)
export function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03
}) {
  const characters = text.split('')

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * staggerDelay,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Underline animation on text
export function AnimatedUnderline({
  children,
  className = '',
  underlineColor = '#40C9B5',
  delay = 0.5
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-0 w-full h-[3px] origin-left"
        style={{ backgroundColor: underlineColor }}
      />
    </span>
  )
}

// Typewriter effect
export function Typewriter({
  text,
  className = '',
  speed = 50,
  delay = 0
}) {
  const [displayText, setDisplayText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, started])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1"
      />
    </span>
  )
}
