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
        subtitle="Please Read These Terms Carefully"
        emoji="📋"
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
                These Terms of Service ("Terms") govern your use of the Elite Football Academy website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">1. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Elite Football Academy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Attempt to gain unauthorized access to any portion or feature of the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">2. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Elite Football Academy's website are provided "as is". Elite Football Academy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">3. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Elite Football Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Elite Football Academy or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">4. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Elite Football Academy's website could include technical, typographical, or photographic errors. Elite Football Academy does not warrant that any of the materials on the website are accurate, complete, or current. Elite Football Academy may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">5. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elite Football Academy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Elite Football Academy of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">6. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elite Football Academy may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service and any separate agreements we provide to render Services for you are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in Islamabad, Pakistan.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-foreground">
                <p>Email: terms@eliteacademy.com</p>
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
