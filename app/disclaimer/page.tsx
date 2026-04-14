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
        subtitle="Important Legal Information"
        emoji="⚠️"
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
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">General Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for educational and informational purposes only. Elite Football Academy does not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on the information on this website is strictly at your own risk.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">1. Medical and Physical Activity Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Participation in football and physical training activities involves risks of serious injury or death. Elite Football Academy strongly recommends that all participants:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Obtain medical clearance from a qualified healthcare professional before beginning any training program</li>
                <li>Follow all safety guidelines and instructions provided by coaches and staff</li>
                <li>Use appropriate protective equipment</li>
                <li>Report any injuries or health concerns immediately</li>
                <li>Consult with healthcare providers regarding any pre-existing medical conditions</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">2. No Guarantee of Results</h2>
              <p className="text-muted-foreground leading-relaxed">
                While Elite Football Academy provides professional training and coaching, we make no guarantees regarding your development as a player, professional placement, or future career success. Individual results depend on many factors including natural ability, dedication, effort, and external circumstances beyond our control.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">3. Assumption of Risk</h2>
              <p className="text-muted-foreground leading-relaxed">
                By participating in any programs or activities at Elite Football Academy, you acknowledge that you understand the risks involved in athletic training and competition. You assume full responsibility for any injuries, damages, or losses that may occur during your participation in our programs.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">4. Liability Waiver</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Elite Football Academy, its owners, employees, coaches, and agents are not liable for any injuries, damages, losses, or claims arising out of your participation in our programs or use of our facilities. This includes but is not limited to direct, indirect, incidental, special, or consequential damages.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">5. Third-Party Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites and content. Elite Football Academy is not responsible for the accuracy, reliability, or legality of any information provided by third parties. We do not endorse any third-party websites, products, or services.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Elite Football Academy or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution of any content is strictly prohibited.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">7. Changes to Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elite Football Academy reserves the right to modify this disclaimer at any time without prior notice. Your continued use of this website following any changes constitutes your acceptance of the modified disclaimer.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this disclaimer, please contact us:
              </p>
              <div className="space-y-2 text-foreground">
                <p>Email: disclaimer@eliteacademy.com</p>
                <p>Phone: +92-XXX-XXXXXXX</p>
                <p>Address: Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-3 font-poppins">Important Notice</h3>
              <p className="text-red-400/80 leading-relaxed">
                By using Elite Football Academy's website and services, you acknowledge that you have read, understood, and agree to be bound by all terms, conditions, and disclaimers contained herein. If you do not agree with any part of this disclaimer, you must discontinue use of our website and services immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
