'use client'

import { motion } from 'framer-motion'

export default function FloatingBackground() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[15%] w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-teal-light/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 left-[10%] w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-white/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/2 left-[50%] w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-teal/10 blur-3xl"
      />
    </>
  )
}
