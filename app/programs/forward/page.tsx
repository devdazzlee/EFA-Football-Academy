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

export default function ForwardPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="⚡ Forward Academy"
        subtitle="Develop the Lethal Strikers of Tomorrow"
        emoji="⚡"
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
                Elite Forward Development Academy
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-poppins leading-relaxed">
                Our forward academy develops explosive and intelligent strikers with clinical finishing, advanced movement, and the mental toughness to perform under pressure. We create complete forwards capable of winning matches single-handedly.
              </p>
              <ul className="space-y-3 font-poppins">
                {[
                  'Clinical finishing and shot accuracy',
                  'Advanced movement and positioning',
                  'Dribbling and one-on-one skills',
                  'Heading and aerial ability',
                  'Physical power and speed',
                  'Game intelligence and decision-making',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="text-2xl">⚡</span>
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
                  alt="Forward Training"
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
              Forward Training Modules
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Specialized offensive skill development</p>
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
                title: 'Clinical Finishing',
                description: 'Master all types of finishes including inside foot, outside foot, headers, and volleys to convert every scoring chance.',
              },
              {
                emoji: '🎯',
                title: 'Advanced Movement',
                description: 'Develop intelligent positioning, timing runs, and off-ball movement to constantly find space in dangerous areas.',
              },
              {
                emoji: '🚀',
                title: 'Dribbling Skills',
                description: 'Learn advanced dribbling techniques, body feints, and acceleration to beat defenders and create scoring opportunities.',
              },
              {
                emoji: '✈️',
                title: 'Heading & Aerial Ability',
                description: 'Specialize in heading technique, timing jumps, and aerial dominance to score and create with your head.',
              },
              {
                emoji: '💪',
                title: 'Physical Development',
                description: 'Build explosive power, speed, agility, and physical strength to dominate at the highest competitive level.',
              },
              {
                emoji: '🧠',
                title: 'Game Awareness',
                description: 'Develop intelligence in reading defenses, positioning awareness, and decision-making to maximize goal-scoring potential.',
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
            <p className="text-lg text-muted-foreground font-poppins">Intensive striker skill development</p>
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
              { day: 'Monday', session: 'Finishing Drills', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Tuesday', session: 'Movement & Positioning', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Wednesday', session: 'Dribbling & Ball Work', time: '10:00 AM - 12:00 PM', intensity: 'High' },
              { day: 'Thursday', session: 'Aerial & Headers', time: '2:00 PM - 4:00 PM', intensity: 'Medium' },
              { day: 'Friday', session: 'Game Situations', time: '10:00 AM - 12:00 PM', intensity: 'High' },
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
              Forward Academy Success
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Proven goal-scoring excellence and achievements</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <StatsCounter
            stats={[
              { number: 110, label: 'Forwards Trained', icon: '⚡', description: 'Professional Level', suffix: '+' },
              { number: 97, label: 'Placement Rate', icon: '📈', description: 'Professional Clubs', suffix: '%' },
              { number: 70, label: 'National Team Players', icon: '🌍', description: 'International Selection', suffix: '+' },
              { number: 9, label: 'Average Goals', icon: '⚽', description: 'Per Season Growth', suffix: '/10' },
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
              Become a Clinical Striker
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Join our forward academy and develop the skills to score at the highest level.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
            >
              Apply for Forward Academy
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
