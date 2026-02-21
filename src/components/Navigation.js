'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'COMPANY' },
  { href: '/team', label: 'TEAM' },
  { href: '/positions', label: 'POSITIONS' },
  { href: '/why-us', label: 'WHY US' },
  { href: '/contact', label: 'CONTACT' },
]

// Logo Component with gradient frame matching the brand
const Logo = ({ isLight = false }) => (
  <div className="flex items-center gap-3">
    {/* Icon with partial frame */}
    <div className="relative w-11 h-11">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id={isLight ? "logoGradLight" : "logoGrad"} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#40C9B5"/>
            <stop offset="50%" stopColor="#2A9D8F"/>
            <stop offset="100%" stopColor={isLight ? "#234B7A" : "#1B365D"}/>
          </linearGradient>
        </defs>
        {/* Partial square frame - top, right, bottom */}
        <path 
          d="M8 6 L36 6 L36 38 L8 38 L8 14" 
          stroke={`url(#${isLight ? "logoGradLight" : "logoGrad"})`}
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
        {/* V letter */}
        <text 
          x="22" 
          y="28" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontSize="18" 
          fontWeight="300" 
          fill={`url(#${isLight ? "logoGradLight" : "logoGrad"})`}
        >
          V
        </text>
      </svg>
    </div>
    {/* Text */}
    <div>
      <div className={`font-medium text-lg tracking-wide ${isLight ? 'text-white' : 'text-navy'}`}>
        VENTURE<span className="text-teal">AI</span>
      </div>
      <div className="text-[9px] text-teal-light tracking-[3px] font-medium -mt-0.5">
        SEARCH PARTNERS
      </div>
    </div>
  </div>
)

export default function Navigation({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const navBackground = transparent && !scrolled
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-sm'

  const textColor = transparent && !scrolled
    ? 'text-white'
    : 'text-navy'

  const isLightLogo = transparent && !scrolled

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Logo isLight={isLightLogo} />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${textColor} hover:text-teal nav-link ${isActive(link.href) ? 'text-teal active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                className={`${textColor} hover:text-teal transition-colors`}
              >
                <Mail size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${textColor} p-2`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-medium ${isActive(link.href) ? 'text-teal' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
