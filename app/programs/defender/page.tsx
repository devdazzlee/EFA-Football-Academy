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

export default function DefenderPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="🛡️ Defender Training Program"
        subtitle="Build an Impenetrable Defensive Wall"
        emoji="🛡️"
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
                Comprehensive Defender Development
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-poppins leading-relaxed">
                Our defender training program develops complete defenders with exceptional positioning, tackling skills, aerial dominance, and reading the game. We focus on producing versatile defenders capable of playing multiple positions at the highest level.
              </p>
              <ul className="space-y-3 font-poppins">
                {[
                  'Advanced tactical positioning',
                  'Aggressive and clean tackling techniques',
                  'Aerial dominance and heading',
                  'One-on-one defending mastery',
                  'Ball interception and blocking',
                  'Communication and leadership',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="text-2xl">🛡️</span>
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
                  alt="Defender Training"
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
              Defender Training Modules
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Specialized defensive skill development</p>
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
                emoji: '🎯',
                title: 'Tactical Positioning',
                description: 'Learn the positioning principles that prevent chances before they develop, covering space intelligently and maintaining defensive shape.',
              },
              {
                emoji: '⚡',
                title: 'Tackling Techniques',
                description: 'Master aggressive and clean tackling methods including slide tackles, standing tackles, and timing to win the ball safely.',
              },
              {
                emoji: '✈️',
                title: 'Aerial Dominance',
                description: 'Specialize in heading, jumping timing, and aerial challenges to dominate your defensive area during set pieces.',
              },
              {
                emoji: '🚀',
                title: 'One-on-One Defense',
                description: 'Develop skills to face attackers confidently, reading their movements and cutting off dangerous options effectively.',
              },
              {
                emoji: '🧠',
                title: 'Game Reading',
                description: 'Train your football intelligence to anticipate plays, read opponent patterns, and intercept passes before danger develops.',
              },
              {
                emoji: '💪',
                title: 'Physical Conditioning',
                description: 'Build explosive power, speed, and endurance required for modern defending at the highest competitive levels.',
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
            <p className="text-lg text-muted-foreground font-poppins">Progressive defender skill development</p>
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
              { day: 'Monday', session: 'Positioning & Spacing', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Tuesday', session: 'Tackling & Blocking', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Wednesday', session: 'Aerial & Set Pieces', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Thursday', session: 'One-on-One Scenarios', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Friday', session: 'Full Team Defense', time: '10:00 AM - 12:00 PM', intensity: 'High' },
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
              Defender Program Success
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Proven defensive excellence and achievements</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <StatsCounter
            stats={[
              { number: 120, label: 'Defenders Trained', icon: '🛡️', description: 'Professional Level', suffix: '+' },
              { number: 94, label: 'Placement Rate', icon: '📈', description: 'Professional Clubs', suffix: '%' },
              { number: 65, label: 'National Team Players', icon: '🌍', description: 'International Selection', suffix: '+' },
              { number: 9, label: 'Average Tackles', icon: '⚡', description: 'Per Match Improvement', suffix: '/10' },
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
              Become an Elite Defender
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Join our defender training program and master the art of defensive excellence.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
            >
              Apply for Defender Program
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
