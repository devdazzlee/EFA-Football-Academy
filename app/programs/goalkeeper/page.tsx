'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
import StatsCounter from '@/components/StatsCounter'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

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

export default function GoalkeeperPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="🥅 Goalkeeper Program"
        subtitle="Master the Art of Elite Goalkeeping"
        emoji="🥅"
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
                Elite Goalkeeper Development Program
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-poppins leading-relaxed">
                Our specialized goalkeeper program focuses on developing elite shot-stoppers with superior reflexes, positioning, and distribution skills. We combine modern goalkeeper-specific training with comprehensive field organization and leadership development.
              </p>
              <ul className="space-y-3 font-poppins">
                {[
                  'Advanced shot-stopping techniques',
                  'Aerial dominance and distribution',
                  'One-on-one handling skills',
                  'Penalty kick expertise',
                  'Communication and field organization',
                  'Mental resilience and pressure management',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="text-2xl">🥅</span>
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
                  alt="Goalkeeper Training"
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
              Core Training Modules
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Comprehensive goalkeeper skill development</p>
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
                emoji: '🛡️',
                title: 'Shot Stopping & Reflexes',
                description: 'High-speed reaction training with advanced techniques for catching, punching, and deflecting shots from various angles and distances.',
              },
              {
                emoji: '🚀',
                title: 'Distribution & Ball Handling',
                description: 'Master throwing, kicking, and passing techniques to initiate attacks and organize defensive strategies from the back.',
              },
              {
                emoji: '✈️',
                title: 'Aerial Dominance',
                description: 'Specialized training for claiming crosses, punching, and dominating the penalty area during set pieces and open play.',
              },
              {
                emoji: '🎯',
                title: 'One-on-One Handling',
                description: 'Advanced techniques for facing forwards in one-on-one situations with confidence and tactical awareness.',
              },
              {
                emoji: '🧠',
                title: 'Communication & Leadership',
                description: 'Develop leadership skills to organize defense, maintain concentration, and direct the team from your position.',
              },
              {
                emoji: '💪',
                title: 'Physical Conditioning',
                description: 'Sport-specific fitness training focusing on explosive power, flexibility, and injury prevention for goalkeepers.',
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
            <p className="text-lg text-muted-foreground font-poppins">Structured progression for goalkeeper excellence</p>
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
              { day: 'Monday', session: 'Shot Stopping Drills', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Tuesday', session: 'Distribution & Footwork', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Wednesday', session: 'Aerial Dominance Training', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Thursday', session: 'One-on-One Scenarios', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Friday', session: 'Game Situation Practice', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Saturday', session: 'Match & Recovery', time: '4:00 PM - 6:00 PM', intensity: 'Match' },
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
              Goalkeeper Program Success
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Proven results and goalkeeper achievements</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <StatsCounter
            stats={[
              { number: 85, label: 'Goalkeepers Trained', icon: '🥅', description: 'Professional Level', suffix: '+' },
              { number: 92, label: 'Placement Rate', icon: '📈', description: 'Professional Clubs', suffix: '%' },
              { number: 50, label: 'National Team Players', icon: '🌍', description: 'International Selection', suffix: '+' },
              { number: 8, label: 'Average Reflexes', icon: '⚡', description: 'Improvement Score', suffix: '/10' },
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
              Become an Elite Goalkeeper
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Join our specialized goalkeeper program and develop the skills to compete at the highest level.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
            >
              Apply for Goalkeeper Program
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
