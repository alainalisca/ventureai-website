'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { StackedRotatingWords, AnimatedUnderline } from '@/components/AnimatedText'
import CountUp from '@/components/CountUp'
import { Check, Building2, Users, Briefcase, Cpu, Globe } from 'lucide-react'

const rotatingWords = ['speed', 'trust', 'precision', 'results']

const industries = [
  { name: 'AI & Emerging Tech', primary: true },
  { name: 'Venture Capital', primary: true },
  { name: 'Private Equity', primary: true },
  { name: 'Software', primary: false },
  { name: 'Healthcare & Life Sciences', primary: false },
  { name: 'Consumer Tech', primary: false },
  { name: 'Hardware Tech', primary: false },
  { name: 'Energy & Infrastructure', primary: false },
  { name: 'Industrial & Manufacturing', primary: false },
]

const whyUsPoints = [
  'No Retainer Fees - 100% contingency-based',
  '1-Year Guarantee on all placements',
  'Robert Half-trained methodology',
  'Human touch in a high-tech market',
  'Competitive pricing vs traditional firms',
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="hero-particles" />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-teal-light/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-white/5 blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left - Rotating Words */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/4"
            >
              <span className="text-white text-4xl lg:text-5xl font-light">High</span>
              <StackedRotatingWords
                words={rotatingWords}
                interval={2500}
                className="text-4xl lg:text-5xl font-light mt-4 space-y-2"
                activeClassName="text-teal-light"
                inactiveClassName="text-white/30"
              />
            </motion.div>

            {/* Right - Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:w-3/4"
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                A{' '}
                <AnimatedUnderline delay={1}>
                  <span className="text-white">human-first</span>
                </AnimatedUnderline>
                <br />
                executive search
                <br />
                experience.
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">
              The future is digital.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our difference is human.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="w-16 h-1 bg-teal mx-auto mb-10" />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              VentureAI Search Partners is a contingency-based executive search firm that builds C-suite and board 
              leadership teams for high-growth private and public companies, including VC- and PE-backed organizations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              In a high-tech world, we deliver a human-first executive search experience—built for speed, 
              driven by agility, and powered by partner expertise.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <Button href="/team" variant="outline">MEET THE TEAM</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Partner-Led Section */}
      <section className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - Dark with text */}
        <div className="bg-gray-900 px-6 lg:px-16 py-20 flex flex-col justify-center">
          <ScrollReveal direction="left">
            <h2 className="text-white text-3xl lg:text-4xl font-light mb-2">
              Partner-Led. High Touch.
            </h2>
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-8">
              Built for Outcomes.
            </h2>
            <div className="w-16 h-1 bg-teal mb-8" />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <p className="text-gray-400 leading-relaxed mb-6">
              Every search is led by a senior partner who remains accountable from kickoff through close. 
              Our boutique structure enables speed, precision, and direct access - ensuring a deep understanding 
              of each investment thesis and leadership mandate.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3}>
            <p className="text-gray-400 leading-relaxed mb-10">
              With experience spanning the full investment lifecycle - from first institutional capital to exit - 
              we understand the leadership profiles that drive performance and liquidity outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4}>
            <Button href="/team" variant="outlineDark">MEET THE TEAM</Button>
          </ScrollReveal>
        </div>

        {/* Right - Team photo grid placeholder */}
        <div className="grid grid-cols-4 grid-rows-3">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`aspect-square flex items-center justify-center border border-white/10 ${
                i % 3 === 0 ? 'bg-teal' : i % 3 === 1 ? 'bg-accent' : 'bg-navy'
              }`}
            >
              <div className="w-[70%] h-[70%] bg-white/10 rounded flex items-center justify-center text-white text-xs text-center">
                [Team<br/>Photo]
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl mb-2">
              <span className="animated-gradient-text">Welcome to a trusted name</span>
            </h2>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              in executive search.
            </h2>
            <p className="text-gray-500 mb-16">and the numbers back it up</p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
            {/* Stat 1 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-5xl lg:text-7xl font-bold gradient-text mb-2 group-hover:animated-gradient-text transition-all">
                <CountUp target={100} suffix="%" duration={2} />
              </div>
              <p className="text-gray-500 text-sm">contingency-based<br/>no retainer fees</p>
            </motion.div>

            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block w-px bg-gradient-to-b from-transparent via-teal to-transparent rotate-12" 
            />

            {/* Stat 2 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-5xl lg:text-7xl font-bold gradient-text mb-2">
                <CountUp target={1} suffix=" Year" duration={1.5} delay={0.3} />
              </div>
              <p className="text-gray-500 text-sm">guarantee on<br/>all placements</p>
            </motion.div>

            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:block w-px bg-gradient-to-b from-transparent via-teal to-transparent rotate-12" 
            />

            {/* Stat 3 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-5xl lg:text-7xl font-bold gradient-text mb-2">
                <CountUp target={50} duration={2} delay={0.6} />
              </div>
              <p className="text-gray-500 text-sm">states covered<br/>nationwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl text-white text-center mb-12">
              Industries We <span className="text-teal-light">Specialize In</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.08}>
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-block px-6 py-3 rounded-full text-sm font-medium transition-all cursor-default ${
                    industry.primary
                      ? 'bg-gradient-to-r from-teal to-teal-light text-white'
                      : 'border border-gray-700 text-white hover:border-teal'
                  }`}
                >
                  {industry.name}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 max-w-xl mx-auto p-6 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="text-xl mr-3">🇺🇸</span>
              <span className="text-white">
                Providing <strong>Nationwide</strong> Executive Search Services in All 50 States
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8">
                  Why Companies <span className="text-teal">Choose Us</span>
                </h2>
              </ScrollReveal>

              <div className="space-y-5">
                {whyUsPoints.map((point, index) => (
                  <ScrollReveal key={point} delay={index * 0.1}>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0"
                      >
                        <Check size={14} className="text-white" />
                      </motion.div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.5}>
                <div className="mt-10">
                  <Button href="/why-us">LEARN MORE</Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Stats Card */}
            <ScrollReveal direction="right">
              <div className="p-10 rounded-3xl bg-gradient-to-br from-navy/5 to-teal/5 border border-teal/20">
                <div className="mb-8">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text">
                    <CountUp target={100} suffix="+" duration={2} />
                  </div>
                  <p className="text-gray-700 text-lg mt-2">Executive Positions We Staff</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white rounded-xl shadow-sm"
                  >
                    <div className="text-3xl font-bold text-navy">50</div>
                    <p className="text-sm text-gray-500">VP+ & Board Roles</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white rounded-xl shadow-sm"
                  >
                    <div className="text-3xl font-bold text-navy">50</div>
                    <p className="text-sm text-gray-500">Senior Tech Roles</p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sister Company Banner */}
      <section className="bg-gradient-to-r from-teal to-teal-light py-16 text-center text-white">
        <ScrollReveal>
          <p className="text-sm tracking-widest mb-2 opacity-90">A SISTER COMPANY OF</p>
          <h3 className="text-3xl lg:text-4xl font-semibold mb-2">Blue Chip Staffing LLC</h3>
          <p className="text-lg opacity-90">"Providing Nationwide Recruitment Services"</p>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl text-white font-light mb-2">
              Ready to build your leadership team?
            </h2>
            <h2 className="text-3xl lg:text-4xl text-teal-light mb-10">
              Let's start the conversation.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button href="/contact" variant="outlineDark">CONTACT US</Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
