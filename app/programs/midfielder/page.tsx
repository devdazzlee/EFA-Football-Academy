'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
import StatsCounter from '@/components/StatsCounter'
import Footer from '@/components/Footer'
import Image from 'next/image'

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function MidfielderPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="⚙️ Midfielder Course"
        subtitle="Master the Heart of the Game"
        emoji="⚙️"
        image="/training-field.jpg"
      />

      {/* Program Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
                Complete Midfielder Development
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-poppins leading-relaxed">
                Our midfielder course develops versatile and technically complete midfielders capable of controlling the game. We focus on ball control, decision-making, positioning, and the ability to influence both defensive and attacking phases of play.
              </p>
              <ul className="space-y-3 font-poppins">
                {[
                  'Superior ball control and first touch',
                  'Advanced passing and vision',
                  'Dribbling and creative finishing',
                  'Defensive work rate and pressing',
                  'Game intelligence and positioning',
                  'Set piece mastery',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="text-2xl">⚙️</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/coaching.jpg"
                  alt="Midfielder Training"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Midfielder Training Modules
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Complete technical and tactical development</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                emoji: '⚽',
                title: 'Ball Control & First Touch',
                description: 'Develop exceptional technical ability with emphasis on close control, receiving under pressure, and maintaining possession.',
              },
              {
                emoji: '🎯',
                title: 'Passing & Vision',
                description: 'Master all passing types including short, long, through balls, and creative passes that unlock defenses and create scoring opportunities.',
              },
              {
                emoji: '🚀',
                title: 'Dribbling & Movement',
                description: 'Learn creative dribbling techniques, body feints, and intelligent movement to create space and bypass defenders.',
              },
              {
                emoji: '🛡️',
                title: 'Defensive Intensity',
                description: 'Develop pressing tactics, work rate, and defensive positioning to help the team regain possession in midfield.',
              },
              {
                emoji: '🧠',
                title: 'Game Intelligence',
                description: 'Train positioning awareness, spatial awareness, and decision-making to control the tempo and flow of the game.',
              },
              {
                emoji: '⚡',
                title: 'Athletic Performance',
                description: 'Build the stamina, speed, and power required to run a modern football midfield for 90 minutes at high intensity.',
              },
            ].map((module, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 h-full"
                >
                  <div className="text-5xl mb-4">{module.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">{module.title}</h3>
                  <p className="text-muted-foreground font-poppins">{module.description}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Weekly Schedule */}
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
              Weekly Training Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Comprehensive midfielder skill development</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { day: 'Monday', session: 'Ball Control Drills', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Tuesday', session: 'Passing & Vision Work', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Wednesday', session: 'Dribbling & Creativity', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Thursday', session: 'Defensive Pressing', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Friday', session: 'Game Scenarios', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Saturday', session: 'Match Day', time: '4:00 PM - 6:00 PM', intensity: 'Match' },
            ].map((schedule, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-primary mb-2 font-poppins">{schedule.day}</h4>
                  <p className="text-foreground font-semibold mb-2 font-poppins">{schedule.session}</p>
                  <p className="text-sm text-muted-foreground mb-3 font-poppins">🕐 {schedule.time}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold font-poppins ${
                    schedule.intensity === 'High' ? 'bg-red-500/20 text-red-400' :
                    schedule.intensity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {schedule.intensity}
                  </span>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Midfielder Program Success
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Proven technical excellence and achievements</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <StatsCounter
            stats={[
              { number: 140, label: 'Midfielders Trained', icon: '⚙️', description: 'Professional Level', suffix: '+' },
              { number: 96, label: 'Placement Rate', icon: '📈', description: 'Professional Clubs', suffix: '%' },
              { number: 75, label: 'National Team Players', icon: '🌍', description: 'International Selection', suffix: '+' },
              { number: 9, label: 'Average Passes', icon: '🎯', description: 'Accuracy Improvement', suffix: '/10' },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Master the Midfield
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Join our midfielder course and control the game like a professional.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
            >
              Apply for Midfielder Course
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
