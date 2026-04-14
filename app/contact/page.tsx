'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
import Footer from '@/components/Footer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="Get In Touch"
        subtitle="💬 We'd Love to Hear From You"
        emoji="📞"
      />

      <div className="pt-16" />

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              📍 Contact Information
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                emoji: '📍',
                title: 'Location',
                details: ['Elite Football Academy', 'Sports Complex', 'Karachi, Pakistan'],
              },
              {
                emoji: '📞',
                title: 'Phone',
                details: ['+92 (21) 1234-5678', 'Mon-Fri: 9AM-6PM', 'Available for inquiries'],
              },
              {
                emoji: '📧',
                title: 'Email',
                details: ['info@efapakistan.com', 'admissions@efapakistan.com', 'support@efapakistan.com'],
              },
            ].map((contact, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 text-center h-full">
                  <div className="text-5xl mb-4">{contact.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-4 font-poppins">{contact.title}</h3>
                  <div className="space-y-2 text-muted-foreground font-poppins">
                    {contact.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 font-poppins">✉️ Send us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 font-poppins"
                >
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="block text-white font-semibold mb-2 font-poppins">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label className="block text-white font-semibold mb-2 font-poppins">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label className="block text-white font-semibold mb-2 font-poppins">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                    placeholder="+92 (21) 1234-5678"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label className="block text-white font-semibold mb-2 font-poppins">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
                  >
                    <option value="">Select a subject...</option>
                    <option value="program_inquiry">Program Inquiry</option>
                    <option value="admission">Admission</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label className="block text-white font-semibold mb-2 font-poppins">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none font-poppins"
                    placeholder="Your message here..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </motion.div>

            {/* Quick Links & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-xl bg-card border border-border">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">🕐 Operating Hours</h3>
                <div className="space-y-3 font-poppins">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-primary font-semibold">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-primary font-semibold">7:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-primary font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">🔗 Quick Links</h3>
                <div className="space-y-3">
                  {[
                    { icon: '📚', text: 'View Programs', link: '/programs' },
                    { icon: '📝', text: 'Apply Now', link: '/apply' },
                    { icon: '👥', text: 'About Us', link: '/about' },
                    { icon: '📰', text: 'Latest News', link: '/blog' },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-poppins"
                    >
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">💡 Need Help?</h3>
                <p className="text-muted-foreground mb-6 font-poppins">
                  Our admissions team is ready to answer your questions about programs, enrollment, and career opportunities.
                </p>
                <motion.a
                  href="tel:+92212345678"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold transition-all duration-300 font-poppins"
                >
                  Call Us Now ☎️
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
