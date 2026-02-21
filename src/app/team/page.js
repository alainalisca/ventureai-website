'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import FloatingBackground from '@/components/FloatingBackground'
import { Search, ChevronDown } from 'lucide-react'

// Placeholder team members - will be replaced with actual data
const teamMembers = [
  { id: 1, name: '[Team Member Name]', title: '[Title]', color: 'bg-teal' },
  { id: 2, name: '[Team Member Name]', title: '[Title]', color: 'bg-navy' },
  { id: 3, name: '[Team Member Name]', title: '[Title]', color: 'bg-teal' },
  { id: 4, name: '[Team Member Name]', title: '[Title]', color: 'bg-navy' },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg pt-28 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden">
        <FloatingBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-light mb-2"
          >
            Where executive search is
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold"
          >
            human-first<span className="text-teal-light">.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-1 bg-teal-light mx-auto my-6 sm:my-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            We take a partner-led, hands-on approach—providing direct access to experienced search leaders
            who stay engaged from day one to day done.
          </motion.p>
        </div>
      </section>

      {/* Search/Filter */}
      <section className="py-6 sm:py-10 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(42, 157, 143, 0.5)' }}
            className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-full bg-white hover:border-teal transition-all cursor-pointer hover:shadow-sm"
          >
            <span className="text-navy font-medium text-sm sm:text-base">CHOOSE TEAM MEMBER</span>
            <ChevronDown size={18} className="text-gray-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(42, 157, 143, 0.5)' }}
            className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-full bg-white hover:border-teal transition-all hover:shadow-sm"
          >
            <input
              type="text"
              placeholder="SEARCH TEAM MEMBERS"
              className="bg-transparent outline-none text-gray-500 placeholder-gray-400 w-full sm:w-48 text-sm sm:text-base"
            />
            <Search size={18} className="text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.15}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(27, 54, 93, 0.12)' }}
                  className="text-center group cursor-pointer"
                >
                  {/* Photo placeholder */}
                  <div className={`aspect-square rounded-lg mb-4 sm:mb-6 ${member.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[80%] h-[80%] bg-white/10 rounded flex items-center justify-center border-2 border-dashed border-white/30">
                        <span className="text-white text-xs sm:text-sm text-center">[Headshot<br/>Needed]</span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-medium">View Profile</span>
                    </div>
                  </div>

                  <h3 className="text-navy text-sm sm:text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{member.title}</p>

                  <div className="inline-block">
                    <span className="text-navy text-xs sm:text-sm font-semibold tracking-wide cursor-pointer">
                      MEET THE TEAM
                    </span>
                    <div className="w-10 h-0.5 bg-teal mx-auto mt-1 group-hover:w-full transition-all duration-300" />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Info needed banner */}
          <ScrollReveal delay={0.5}>
            <div className="mt-10 sm:mt-16 p-6 sm:p-8 rounded-xl bg-teal/10 border-2 border-dashed border-teal text-center">
              <p className="text-navy font-medium text-sm sm:text-lg">
                ⚠️ Team member headshots and information needed to complete this page
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
