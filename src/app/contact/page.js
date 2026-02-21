'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingBackground from '@/components/FloatingBackground'
import { MapPin, Phone, Mail, Linkedin, Globe, Send, CheckCircle } from 'lucide-react'

// ===========================================
// FORMSPREE SETUP:
// 1. Go to https://formspree.io and create free account
// 2. Create a new form
// 3. Copy your form ID (e.g., "xyzabcde")
// 4. Replace 'YOUR_FORMSPREE_ID' below with your actual ID
// ===========================================
const FORMSPREE_ID = 'xpwzgkqr' // Replace with actual Formspree ID

const contactInfo = [
  {
    icon: MapPin,
    label: 'Corporate Office',
    value: '211 East 43rd Street, Floor 7\nNew York, NY 10017',
    highlight: false
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '[Phone Number TBD]',
    highlight: true
  },
  {
    icon: Mail,
    label: 'Email',
    value: '[Email Address TBD]',
    highlight: true
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '[LinkedIn URL TBD]',
    highlight: true
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

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
            Let's Build Your
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold"
          >
            Leadership Team<span className="text-teal-light">.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-1 bg-teal-light mx-auto my-6 sm:my-8"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl text-navy font-semibold mb-6 sm:mb-8">Get In Touch</h2>
              </ScrollReveal>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ x: 4, backgroundColor: 'rgba(42, 157, 143, 0.04)' }}
                      className="flex gap-4 sm:gap-5 p-3 rounded-xl transition-colors"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal-light/20 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon size={20} className="text-teal" />
                      </motion.div>
                      <div>
                        <h4 className="text-navy font-medium mb-1">{item.label}</h4>
                        <p className={`text-sm whitespace-pre-line ${item.highlight ? 'text-teal' : 'text-gray-600'}`}>
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Nationwide Banner */}
              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-xl bg-gradient-to-br from-teal/10 to-teal-light/10 border border-teal/30 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🇺🇸</span>
                    <div>
                      <h4 className="text-navy font-semibold">Nationwide Services</h4>
                      <p className="text-gray-600 text-sm">Executive search in all 50 states</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <motion.div
                whileHover={{ boxShadow: '0 20px 60px rgba(27, 54, 93, 0.1)' }}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-lg transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl text-navy font-semibold mb-6 sm:mb-8">Send Us a Message</h3>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-teal" />
                    </div>
                    <h4 className="text-xl text-navy font-semibold mb-2">Message Sent!</h4>
                    <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-teal font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all hover:border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all hover:border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Company
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all hover:border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-navy text-sm font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your hiring needs..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all resize-none hover:border-gray-300"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-navy to-teal text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal/30 transition-all disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE
                          <Send size={16} />
                        </>
                      )}
                    </motion.button>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
