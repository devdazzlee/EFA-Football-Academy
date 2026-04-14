'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
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

export default function ProgramsPage() {
  const programs = [
    {
      emoji: '🥅',
      title: 'Goalkeeper Program',
      description: 'Master the art of goalkeeping with advanced techniques and tactical awareness',
      fullDesc: 'Our specialized goalkeeper program focuses on developing elite shot-stoppers with world-class positioning, reflexes, and distribution skills. Players learn from certified international goalkeeper coaches.',
      features: [
        '🎯 Shot-stopping & reflexes',
        '🧠 Tactical positioning',
        '💪 Physical conditioning',
        '🤝 Leadership training',
        '📊 Performance analytics',
        '🎬 Video analysis',
      ],
      duration: '12 months',
      level: 'All Levels',
      benefits: ['Professional GK certifications', 'International exposure', 'Pro placement support'],
    },
    {
      emoji: '🛡️',
      title: 'Defender Training Program',
      description: 'Become an elite defender with mastery of defensive strategies and positioning',
      fullDesc: 'Comprehensive defender training focusing on one-on-one defending, positional awareness, and modern defensive tactics. Includes fitness, agility, and mental resilience training.',
      features: [
        '⚽ 1v1 defending',
        '🔄 Positioning mastery',
        '💨 Speed & agility',
        '🧠 Tactical awareness',
        '🎬 Game analysis',
        '🏃 Endurance training',
      ],
      duration: '12 months',
      level: 'All Levels',
      benefits: ['Professional contracts', 'National team pathway', 'International trials'],
    },
    {
      emoji: '⚙️',
      title: 'Midfielder Course',
      description: 'Develop complete midfielder skills including passing, vision, and ball control',
      fullDesc: 'Advanced midfielder training program covering ball control, passing accuracy, game vision, and tactical positioning. Focuses on modern midfield requirements and match intelligence.',
      features: [
        '🎯 Ball control mastery',
        '👁️ Game vision & reading',
        '✨ Passing accuracy',
        '🧠 Tactical intelligence',
        '💪 Physical strength',
        '⚡ Quick decision-making',
      ],
      duration: '12 months',
      level: 'All Levels',
      benefits: ['Elite team placement', 'European club trials', 'Leadership roles'],
    },
    {
      emoji: '⚡',
      title: 'Forward Academy',
      description: 'Master finishing skills and become a prolific goal scorer',
      fullDesc: 'Specialized forward training focusing on shooting techniques, positioning in the box, and clinical finishing. Includes movement patterns, headers, and penalty techniques.',
      features: [
        '🎯 Shooting techniques',
        '🏃 Movement & positioning',
        '💥 Finishing drills',
        '🤸 Headers & volleys',
        '🧠 Game intelligence',
        '💪 Strength & power',
      ],
      duration: '12 months',
      level: 'All Levels',
      benefits: ['Striker certifications', 'Professional placement', 'International exposure'],
    },
  ]

  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      {/* Page Banner */}
      <PageBanner
        title="Training Programs"
        subtitle="Choose Your Path to Excellence"
        emoji="📚"
        image="/coaching.jpg"
      />

      {/* Introduction */}
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
              🎓 Comprehensive Training Programs
            </h2>
            <p className="text-lg text-muted-foreground font-poppins max-w-3xl mx-auto">
              Elite Football Academy offers specialized training programs for each position. Every program is designed by professional coaches with years of international experience to develop elite-level footballers ready for professional competition.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programs.map((program, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-primary/20 hover:border-primary transition-all duration-300 h-full flex flex-col"
                >
                  <div className="text-6xl mb-4">{program.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-poppins">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow font-poppins">{program.description}</p>
                  <div className="flex gap-4 text-sm font-poppins">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">{program.duration}</span>
                    <span className="px-3 py-1 bg-secondary/20 text-accent rounded-full">{program.level}</span>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Program Info */}
      {programs.map((program, idx) => (
        <section key={idx} className={idx % 2 === 0 ? 'py-20 px-4 sm:px-6 lg:px-8' : 'py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10'}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {idx % 2 === 0 ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{program.emoji}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white font-poppins">{program.title}</h2>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-poppins">
                      {program.fullDesc}
                    </p>

                    <h4 className="text-xl font-bold text-white mb-4 font-poppins">Program Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {program.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
                        >
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4 font-poppins">Career Benefits:</h4>
                    <ul className="space-y-3 font-poppins">
                      {program.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <span className="text-primary text-xl">✓</span> {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20">
                      <Image
                        src="/coaching.jpg"
                        alt={program.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20">
                      <Image
                        src="/training-field.jpg"
                        alt={program.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{program.emoji}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white font-poppins">{program.title}</h2>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-poppins">
                      {program.fullDesc}
                    </p>

                    <h4 className="text-xl font-bold text-white mb-4 font-poppins">Program Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {program.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
                        >
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4 font-poppins">Career Benefits:</h4>
                    <ul className="space-y-3 font-poppins">
                      {program.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <span className="text-primary text-xl">✓</span> {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Selection Criteria */}
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
              🎯 How to Choose Your Program
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Find the perfect program for your position and goals</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '📋 Assessment',
                steps: ['Technical evaluation', 'Physical testing', 'Skill analysis', 'Position recommendation'],
              },
              {
                title: '🎓 Program Selection',
                steps: ['Choose your position', 'Discuss goals', 'Review curriculum', 'Confirm enrollment'],
              },
              {
                title: '🚀 Development',
                steps: ['Personalized training', 'Regular feedback', 'Progress tracking', 'Career planning'],
              },
            ].map((step, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white mb-6 font-poppins">{step.title}</h3>
                  <ul className="space-y-4 font-poppins">
                    {step.steps.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <span className="text-primary font-bold">{idx + 1}.</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Schedule */}
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
              ⏰ Weekly Training Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Structured training for maximum development</p>
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
              { day: 'Monday - Friday', session: 'Morning (6:00-9:00 AM)', focus: 'Technical Skill Development' },
              { day: 'Monday - Friday', session: 'Evening (4:00-7:00 PM)', focus: 'Tactical & Physical Training' },
              { day: 'Saturday', session: 'Competitive Play (8:00-12:00 PM)', focus: 'Match Experience' },
              { day: 'Sunday', session: 'Recovery (10:00-1:00 PM)', focus: 'Analysis & Rest' },
              { day: 'Ongoing', session: '24/7 Access', focus: 'Gym & Facilities' },
              { day: 'Monthly', session: 'Coaching Sessions', focus: 'Personalized Feedback' },
            ].map((schedule, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-poppins">{schedule.day}</h4>
                  <p className="text-primary font-semibold mb-2 font-poppins">{schedule.session}</p>
                  <p className="text-muted-foreground font-poppins">Focus: {schedule.focus}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
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
              📊 Program Success Metrics
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Track your progress with our advanced system</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { emoji: '📈', title: 'Technical Progress', desc: 'Ball control, passing, shooting accuracy' },
              { emoji: '💪', title: 'Physical Development', desc: 'Speed, strength, endurance, agility' },
              { emoji: '🧠', title: 'Tactical Intelligence', desc: 'Game reading, decision-making, positioning' },
              { emoji: '⭐', title: 'Match Performance', desc: 'Goals, assists, clean sheets, ratings' },
            ].map((metric, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="p-8 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-primary/20 hover:border-primary transition-all duration-300 text-center h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4">{metric.emoji}</div>
                  <h4 className="text-lg font-bold text-white mb-2 font-poppins">{metric.title}</h4>
                  <p className="text-muted-foreground text-sm font-poppins">{metric.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Choose your program today and begin your transformation into an elite footballer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/apply"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
              >
                Enroll Now →
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-secondary text-foreground rounded-lg font-bold text-lg border border-primary transition-all duration-300 font-poppins"
              >
                Get More Info →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
