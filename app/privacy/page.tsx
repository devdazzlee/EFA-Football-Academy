'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="Privacy Policy"
        subtitle="Your privacy and data protection are important to us"
        emoji="🔒"
        image="/privacy-bg.jpg"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-8">
              Elite Football Academy (EFA) collects personal information when you register for our programs, subscribe to our newsletter, or contact us through our website. This information may include your name, email address, phone number, and football experience.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-8">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
              <li>Process your application and enrollment</li>
              <li>Communicate with you regarding academy updates and training schedules</li>
              <li>Improve our training programs and services</li>
              <li>Send you newsletters and marketing communications (you can opt-out at any time)</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">3. Data Protection</h2>
            <p className="text-muted-foreground mb-8">
              We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secure networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">4. Cookies</h2>
            <p className="text-muted-foreground mb-8">
              Our website uses cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's systems to recognize your browser and capture and remember certain information.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">5. Third-Party Disclosure</h2>
            <p className="text-muted-foreground mb-8">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice, except as required by law.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">6. Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              If there are any questions regarding this privacy policy, you may contact us using the information on our contact page.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
