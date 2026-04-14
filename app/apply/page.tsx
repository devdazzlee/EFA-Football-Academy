'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    position: '',
    experience: '',
    height: '',
    weight: '',
    currentTeam: '',
    achievements: '',
    motivation: '',
    guardianName: '',
    guardianPhone: '',
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setStep(1)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        position: '',
        experience: '',
        height: '',
        weight: '',
        currentTeam: '',
        achievements: '',
        motivation: '',
        guardianName: '',
        guardianPhone: '',
        agreeTerms: false,
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner title="Join Elite Football Academy" subtitle="🎯 Start Your Journey Now" emoji="🚀" />

      <div className="pt-16" />

      {/* Application Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center font-poppins"
            >
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Application Submitted Successfully!</h3>
              <p>Thank you for applying to Elite Football Academy. Our admissions team will review your application and contact you within 48 hours.</p>
            </motion.div>
          )}

          {!submitted && (
            <>
              {/* Progress Indicator */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <motion.div
                      key={s}
                      className={`flex-1 h-1 mx-2 rounded-full transition-colors duration-300 ${
                        s <= step ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-between text-center">
                  {['Personal Info', 'Football Profile', 'Guardian Info'].map((label, i) => (
                    <motion.div
                      key={i}
                      onClick={() => i + 1 <= step && setStep(i + 1)}
                      className={`flex-1 cursor-pointer font-poppins font-semibold ${
                        i + 1 <= step ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {label}
                    </motion.div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 p-8 rounded-xl bg-card border border-border"
                  >
                    <h2 className="text-2xl font-bold text-white font-poppins">👤 Personal Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="Ahmed"
                        />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="Hassan"
                        />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="ahmed@email.com"
                        />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="+92 (21) 1234-5678"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-2"
                      >
                        <label className="block text-white font-semibold mb-2 font-poppins">Date of Birth *</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Football Profile */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 p-8 rounded-xl bg-card border border-border"
                  >
                    <h2 className="text-2xl font-bold text-white font-poppins">⚽ Football Profile</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Position *</label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                        >
                          <option value="">Select Position</option>
                          <option value="goalkeeper">Goalkeeper</option>
                          <option value="defender">Defender</option>
                          <option value="midfielder">Midfielder</option>
                          <option value="forward">Forward</option>
                        </select>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Years of Experience *</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                        >
                          <option value="">Select Experience</option>
                          <option value="0-2">0-2 years</option>
                          <option value="2-5">2-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Height (cm) *</label>
                        <input
                          type="number"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="180"
                        />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Weight (kg) *</label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="75"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-2"
                      >
                        <label className="block text-white font-semibold mb-2 font-poppins">Current Team</label>
                        <input
                          type="text"
                          name="currentTeam"
                          value={formData.currentTeam}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="Your current football team"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="md:col-span-2"
                      >
                        <label className="block text-white font-semibold mb-2 font-poppins">Notable Achievements</label>
                        <textarea
                          name="achievements"
                          value={formData.achievements}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none font-poppins"
                          placeholder="Awards, tournaments, notable performances..."
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Guardian Information */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 p-8 rounded-xl bg-card border border-border"
                  >
                    <h2 className="text-2xl font-bold text-white font-poppins">👨‍👩‍👧 Guardian Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Guardian Name *</label>
                        <input
                          type="text"
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="Parent/Guardian Name"
                        />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <label className="block text-white font-semibold mb-2 font-poppins">Guardian Phone *</label>
                        <input
                          type="tel"
                          name="guardianPhone"
                          value={formData.guardianPhone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                          placeholder="+92 (21) 1234-5678"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2"
                      >
                        <label className="block text-white font-semibold mb-2 font-poppins">Why do you want to join EFA?</label>
                        <textarea
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none font-poppins"
                          placeholder="Tell us about your motivation and goals..."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2"
                      >
                        <label className="flex items-center gap-3 cursor-pointer font-poppins">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                            className="w-5 h-5 accent-primary"
                          />
                          <span className="text-white">I agree to the terms and conditions of Elite Football Academy</span>
                        </label>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-between">
                  <motion.button
                    type="button"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={step === 1}
                    className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold disabled:opacity-50 transition-all duration-300 font-poppins"
                  >
                    ← Previous
                  </motion.button>

                  {step < 3 ? (
                    <motion.button
                      type="button"
                      onClick={() => setStep(Math.min(3, step + 1))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-poppins"
                    >
                      Next →
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!formData.agreeTerms}
                      className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold disabled:opacity-50 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-poppins"
                    >
                      Submit Application 🚀
                    </motion.button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
