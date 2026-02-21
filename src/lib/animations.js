// Animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// For navigation
export const navAnimation = {
  initial: { y: -100 },
  animate: { 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// For hero text reveal
export const heroTextReveal = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

// For cards with hover
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// For buttons
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  tap: { scale: 0.98 }
}

// Page transitions
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
}

// For statistics counting
export const countAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// For industry tags
export const tagAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 10 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// Parallax scroll effect values
export const parallaxValues = {
  slow: { y: [0, -50] },
  medium: { y: [0, -100] },
  fast: { y: [0, -150] }
}

// Custom easing curves
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  snappy: [0.4, 0, 0.2, 1]
}
