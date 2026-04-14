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
        subtitle="Your Data Protection is Our Priority"
        emoji="🔒"
        image="/facilities.jpg"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8 font-poppins"
          >
            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elite Football Academy ("we," "us," "our," or "Company") operates the website and related services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">1. Information Collection and Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Data:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">2. Use of Data</h2>
              <div className="text-muted-foreground space-y-3">
                <p>Elite Football Academy uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">3. Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">4. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-foreground">
                <p>Email: privacy@eliteacademy.com</p>
                <p>Phone: +92-XXX-XXXXXXX</p>
                <p>Address: Islamabad, Pakistan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
