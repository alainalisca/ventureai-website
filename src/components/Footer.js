'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

// Logo Component for Footer (always on dark background)
const FooterLogo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-11 h-11">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#40C9B5"/>
            <stop offset="50%" stopColor="#2A9D8F"/>
            <stop offset="100%" stopColor="#234B7A"/>
          </linearGradient>
        </defs>
        <path 
          d="M8 6 L36 6 L36 38 L8 38 L8 14" 
          stroke="url(#footerLogoGrad)"
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
        <text 
          x="22" 
          y="28" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontSize="18" 
          fontWeight="300" 
          fill="url(#footerLogoGrad)"
        >
          V
        </text>
      </svg>
    </div>
    <div>
      <div className="font-medium text-lg tracking-wide text-white">
        VENTURE<span className="text-teal-light">AI</span>
      </div>
      <div className="text-[9px] text-teal-light tracking-[3px] font-medium -mt-0.5">
        SEARCH PARTNERS
      </div>
    </div>
  </div>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <ScrollReveal delay={0}>
            <div>
              <Link href="/" className="inline-block mb-6">
                <FooterLogo />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                A sister company of Blue Chip Staffing LLC
              </p>
              <p className="text-gray-400 text-sm">
                Providing Nationwide Recruitment Services
              </p>
            </div>
          </ScrollReveal>

          {/* Company Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="text-teal-light text-sm font-semibold tracking-wider mb-6">
                COMPANY
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'About Us' },
                  { href: '/team', label: 'Our Team' },
                  { href: '/why-us', label: 'Why Us' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-teal-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Industries */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="text-teal-light text-sm font-semibold tracking-wider mb-6">
                INDUSTRIES
              </h4>
              <ul className="space-y-3">
                {[
                  'AI & Emerging Tech',
                  'Venture Capital',
                  'Private Equity',
                  'Software',
                ].map((industry) => (
                  <li key={industry}>
                    <span className="text-gray-400 text-sm hover:text-teal-light transition-colors cursor-pointer">
                      {industry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="text-teal-light text-sm font-semibold tracking-wider mb-6">
                CONTACT
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>211 East 43rd Street, Floor 7</li>
                <li>New York, NY 10017</li>
                <li className="text-teal-light">[Phone TBD]</li>
                <li className="text-teal-light">[Email TBD]</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} VentureAI Search Partners. All Rights Reserved.
          </p>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-teal-light hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
