'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

const vpRoles = {
  'VC & Investor Firm Leadership': [
    'Managing Partner', 'General Partner', 'Partner', 'Operating Partner',
    'Venture Partner', 'Managing Director', 'VP Investments', 'VP Portfolio Operations',
    'VP Business Development', 'VP Investor Relations', 'VP Fund Operations', 'VP Strategy'
  ],
  'Private Equity Leadership': [
    'Senior Partner', 'Partner PE', 'Managing Director PE', 'Operating Partner',
    'Principal', 'VP Portfolio Operations', 'VP M&A', 'VP Value Creation',
    'VP Business Development', 'VP Investor Relations', 'VP Fund Management', 'VP Strategy'
  ],
  'Portfolio Company C-Suite': [
    'CEO', 'President', 'COO', 'CFO', 'CRO', 'CCO', 'CMO', 'CPO',
    'CTO', 'CIO', 'CDO', 'CAIO', 'CISO', 'CHRO'
  ],
  'AI & Engineering Leadership VP+': [
    'VP Engineering', 'VP Software Engineering', 'VP Platform', 'VP AI',
    'VP Machine Learning', 'VP Data Science', 'VP Data Engineering', 'VP Product',
    'VP Research', 'VP Applied AI', 'VP ML Platform', 'VP Infrastructure'
  ]
}

const seniorRoles = {
  'AI, ML & Data Science': [
    'Senior ML Engineer', 'Lead ML Engineer', 'Staff ML Engineer', 'Principal ML Engineer',
    'Senior AI Engineer', 'Lead AI Engineer', 'Staff AI Engineer', 'Principal AI Engineer',
    'Senior LLM Engineer', 'Lead LLM Engineer', 'Senior Data Scientist', 'Lead Data Scientist',
    'Staff Data Scientist', 'Principal Data Scientist', 'Applied Scientist'
  ],
  'MLOps & Data Engineering': [
    'Senior MLOps Engineer', 'Lead MLOps Engineer', 'Staff MLOps Engineer', 'Principal MLOps Engineer',
    'ML Platform Engineer', 'Senior ML Platform Engineer', 'Lead ML Platform Engineer',
    'Senior Data Engineer', 'Lead Data Engineer', 'Staff Data Engineer', 'Principal Data Engineer',
    'Data Platform Engineer', 'Senior Analytics Engineer', 'Lead Analytics Engineer', 'Staff Analytics Engineer'
  ],
  'Software Engineering': [
    'Senior Software Engineer', 'Lead Software Engineer', 'Staff Software Engineer', 'Principal Software Engineer',
    'Senior Backend Engineer', 'Lead Backend Engineer', 'Staff Backend Engineer',
    'Senior Full Stack Engineer', 'Lead Full Stack Engineer', 'Staff Full Stack Engineer',
    'Senior Frontend Engineer', 'Lead Frontend Engineer'
  ],
  'Architecture, Platform & Cloud': [
    'Solutions Architect', 'Senior Solutions Architect', 'Principal Solutions Architect',
    'Software Architect', 'Principal Architect', 'Platform Engineer', 'Senior Platform Engineer',
    'Staff Platform Engineer'
  ]
}

const PositionTag = ({ name }) => (
  <motion.span
    whileHover={{ scale: 1.05, y: -2 }}
    className="inline-block px-4 py-2 bg-gray-50 text-navy text-sm rounded-lg border border-gray-200 hover:border-teal hover:bg-teal/5 transition-all cursor-default"
  >
    {name}
  </motion.span>
)

export default function PositionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl text-white font-light mb-2"
          >
            Executive, Board & Senior
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-white font-bold"
          >
            Roles We Place<span className="text-teal-light">.</span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-1 bg-teal-light mx-auto my-8"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            100+ curated leadership positions across Venture Capital, Private Equity, and AI-driven high-growth companies
          </motion.p>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* VP+ Roles Column */}
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 pb-4 mb-8 border-b-4 border-teal">
                  <div className="px-5 py-3 bg-gradient-to-br from-navy to-teal rounded-lg">
                    <span className="text-white text-2xl font-bold">50</span>
                  </div>
                  <h2 className="text-2xl text-navy font-semibold">VP+ and Board-Level Roles</h2>
                </div>
              </ScrollReveal>

              {Object.entries(vpRoles).map(([category, roles], catIndex) => (
                <ScrollReveal key={category} delay={catIndex * 0.1}>
                  <div className="mb-8">
                    <h3 className="text-teal font-semibold mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((role) => (
                        <PositionTag key={role} name={role} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Senior Roles Column */}
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 pb-4 mb-8 border-b-4 border-teal">
                  <div className="px-5 py-3 bg-gradient-to-br from-navy to-teal rounded-lg">
                    <span className="text-white text-2xl font-bold">50</span>
                  </div>
                  <h2 className="text-2xl text-navy font-semibold">Senior Technical Roles</h2>
                </div>
              </ScrollReveal>

              {Object.entries(seniorRoles).map(([category, roles], catIndex) => (
                <ScrollReveal key={category} delay={catIndex * 0.1}>
                  <div className="mb-8">
                    <h3 className="text-teal font-semibold mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((role) => (
                        <PositionTag key={role} name={role} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
