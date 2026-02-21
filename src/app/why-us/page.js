'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import ScrollReveal from '@/components/ScrollReveal'

const differentiators = [
  {
    number: '01',
    title: 'Robert Half Heritage',
    description: 'Our founder started their career at Robert Half Technology, the world\'s largest specialized talent solutions firm founded in 1948. This foundation shapes our disciplined, proven approach to executive search.'
  },
  {
    number: '02',
    title: 'Ethical Recruiting',
    description: 'We believe in transparent, honest recruiting practices. No hidden fees, no misleading candidates, no cutting corners. Integrity is at the core of everything we do.'
  },
  {
    number: '03',
    title: 'No Retainer Fees',
    description: '100% contingency-based. You only pay when we successfully place a candidate. We succeed when you succeed—our interests are fully aligned with yours.'
  },
  {
    number: '04',
    title: '1-Year Guarantee',
    description: 'Every placement comes with a full 1-year guarantee. If it doesn\'t work out, we\'ll find a replacement at no additional cost. That\'s our commitment to quality.'
  },
  {
    number: '05',
    title: 'Human Touch',
    description: 'Many of our recruiters have worked in the industries they recruit for. We understand your business because we\'ve lived it. Technology enables us, but relationships define us.'
  },
  {
    number: '06',
    title: 'Affordable Pricing',
    description: 'We offer competitive rates significantly below traditional executive search firms without sacrificing quality. Premium service doesn\'t have to come with a premium price tag.'
  },
  {
    number: '07',
    title: 'Up-to-Date Technology',
    description: 'We leverage the latest recruiting technology and AI tools to source candidates faster and more effectively. Modern problems require modern solutions.'
  },
]

export default function WhyUsPage() {
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
            Why Choose
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-white font-bold"
          >
            VentureAI<span className="text-teal-light">?</span>
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
            className="text-lg text-gray-200"
          >
            7 reasons why leading companies trust us with their executive search
          </motion.p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 5, boxShadow: '0 10px 40px rgba(42, 157, 143, 0.15)' }}
                className="flex gap-6 p-8 mb-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-teal/30 transition-all cursor-default group"
              >
                <div className="text-4xl font-bold gradient-text flex-shrink-0 w-16 group-hover:animated-gradient-text">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl text-navy mb-6">Ready to experience the difference?</h2>
            <Button href="/contact">GET IN TOUCH</Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
