'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="Disclaimer"
        subtitle="Important information regarding our services and content"
        emoji="⚠️"
        image="/disclaimer-bg.jpg"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">1. General Information</h2>
            <p className="text-muted-foreground mb-8">
              The information provided by Elite Football Academy (EFA) on our website and during training programs is for general informational and educational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. Physical Activity Risk</h2>
            <p className="text-muted-foreground mb-8">
              Football is a physically demanding sport and involves inherent risks of injury. Participants should be in good physical health and should consult with a medical professional before starting any intensive training program. EFA is not responsible for any injuries sustained during our training sessions, matches, or trials.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">3. Professional Results</h2>
            <p className="text-muted-foreground mb-8">
              While EFA strives to provide the best possible training and opportunities for player placement, we cannot guarantee professional contracts, scholarships, or selection for national teams. Success in football depends on many factors, including individual talent, hard work, and external circumstances beyond our control.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">4. External Links</h2>
            <p className="text-muted-foreground mb-8">
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Elite Football Academy. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">5. Errors and Omissions</h2>
            <p className="text-muted-foreground mb-8">
              While we have made every attempt to ensure that the information contained on this site has been obtained from reliable sources, EFA is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
