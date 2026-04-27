'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
        emoji="📜"
        image="/terms-bg.jpg"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-8">
              By accessing and using the services of Elite Football Academy (EFA), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. Enrollment and Fees</h2>
            <p className="text-muted-foreground mb-8">
              Enrollment in EFA programs is subject to availability and meeting our admission requirements. Fees must be paid in advance or according to the agreed payment schedule. Fees are non-refundable unless otherwise specified.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">3. Code of Conduct</h2>
            <p className="text-muted-foreground mb-8">
              All players and staff are expected to maintain high standards of discipline, respect, and sportsmanship. EFA reserves the right to terminate enrollment for any individual who violates our code of conduct.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-8">
              All content on this website, including text, graphics, logos, and images, is the property of Elite Football Academy and is protected by copyright laws. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-8">
              EFA shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">6. Changes to Terms</h2>
            <p className="text-muted-foreground mb-8">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of our services after any changes indicates your acceptance of the new terms.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
