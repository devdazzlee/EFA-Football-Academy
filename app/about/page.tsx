'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
import Timeline from '@/components/Timeline'
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title="About Elite Football Academy"
        subtitle="📖 Our Journey, Mission & Vision"
        emoji="📚"
        image="/team.jpg"
      />

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6 font-poppins">🎯 Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-poppins">
                To develop world-class footballers of all ages through expert coaching, modern facilities, and comprehensive training programs. We empower athletes to achieve their professional football dreams while maintaining high standards of discipline and character.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                Every player who joins Elite Football Academy receives personalized attention and strategic guidance to excel at the highest levels of the game.
              </p>
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
                  alt="Coaching"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/training-field.jpg"
                  alt="Training Field"
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
              <h2 className="text-4xl font-bold text-white mb-6 font-poppins">🌟 Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-poppins">
                To become Pakistan's leading football academy recognized globally for producing exceptional talents who compete at the highest professional levels worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                We aspire to create a legacy of champions who inspire the next generation and elevate football standards across the nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">💎 Core Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
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
                emoji: '⚽',
                title: 'Excellence',
                desc: 'Pursuing the highest standards in every aspect of training and development.',
              },
              {
                emoji: '🤝',
                title: 'Teamwork',
                desc: 'Building strong bonds and collaborative spirit among all players and staff.',
              },
              {
                emoji: '🏆',
                title: 'Integrity',
                desc: 'Maintaining honesty, discipline, and respect in all actions and decisions.',
              },
              {
                emoji: '🚀',
                title: 'Innovation',
                desc: 'Embracing modern techniques and continuous improvement in our methods.',
              },
              {
                emoji: '💪',
                title: 'Resilience',
                desc: 'Developing mental toughness and the ability to overcome challenges.',
              },
              {
                emoji: '🌍',
                title: 'Global Mindset',
                desc: 'Preparing players to compete and succeed at international levels.',
              },
            ].map((value, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 h-full text-center">
                  <div className="text-5xl mb-4">{value.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">{value.title}</h3>
                  <p className="text-muted-foreground font-poppins">{value.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Milestones with Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">📅 Our Journey Timeline</h2>
            <p className="text-lg text-muted-foreground font-poppins">7 years of excellence and continuous growth</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <Timeline
            items={[
              {
                year: '2017',
                emoji: '🌱',
                title: 'Founded with Vision',
                description: 'Elite Football Academy was established with a clear vision to develop Pakistani footballers into world-class athletes. Started with basic facilities and 50 passionate players.',
              },
              {
                year: '2018',
                emoji: '🏗️',
                title: 'Major Facilities Expansion',
                description: 'Invested heavily in infrastructure. Built state-of-the-art training grounds, modern gym facilities, and recovery centers. Expanded capacity to 200+ players.',
              },
              {
                year: '2019',
                emoji: '🏅',
                title: 'First National Champions',
                description: 'Our players won the Pakistani National Youth Football Championship. Secured top 3 positions in U-20 league. 30 players placed in professional clubs.',
              },
              {
                year: '2020',
                emoji: '💪',
                title: 'Pandemic Excellence',
                description: 'Successfully adapted training programs during lockdown using online coaching. Maintained player development and continued placements despite challenges.',
              },
              {
                year: '2021',
                emoji: '⭐',
                title: 'International Recognition',
                description: 'Players selected for national team and international competitions. Established partnerships with European clubs. Hosted international friendly matches.',
              },
              {
                year: '2022',
                emoji: '🌍',
                title: 'Global Expansion',
                description: 'Signed agreement with 5 international clubs. Sent 50+ players abroad for advanced training. Received "Best Academy" award from Asian Federation.',
              },
              {
                year: '2023',
                emoji: '🚀',
                title: 'Professional League Dominance',
                description: '95% of graduates playing in professional leagues. Over 500 players trained and placed. Ranked #1 academy in Pakistan.',
              },
              {
                year: '2024',
                emoji: '🌟',
                title: 'World-Class Standards',
                description: 'Accredited with international football development certifications. Continuous innovation in training methods. Planning international expansion.',
              },
            ]}
          />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">👥 Our Expert Leadership Team</h2>
            <p className="text-lg text-muted-foreground font-poppins">150+ years combined professional football experience</p>
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
              {
                name: 'Muhammad Kamil',
                role: 'Club Secretary',
                image: '/Team/Member1.jpg',
              },
              {
                name: 'Komal',
                role: 'Club Treasurer',
                image: '/Team/Member2.jpg',
              },
              {
                name: 'Meesam Ali',
                role: 'Head Coach',
                image: '/Team/Member4.jpg',
              },
              {
                name: 'Anas',
                role: 'Vice President',
                image: '/Team/Member3.jpg',
              },
            ].map((member, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-0 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 h-full overflow-hidden group"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 font-poppins">{member.name}</h3>
                    <p className="text-primary font-semibold font-poppins">{member.role}</p>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">🏅 Major Achievements & Awards</h2>
            <p className="text-lg text-muted-foreground font-poppins">Recognition of excellence in football development</p>
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
              { emoji: '🥇', title: 'Best Football Academy Award 2023', org: 'National Football Federation' },
              { emoji: '⭐', title: 'Excellence in Youth Development', org: 'Asian Football Council' },
              { emoji: '🏆', title: 'Championship Winners 2022', org: 'Pakistani National League' },
              { emoji: '🎖️', title: 'International Recognition Award', org: 'Global Sports Alliance' },
              { emoji: '📜', title: 'ISO Certified Training Program', org: 'International Standards Organization' },
              { emoji: '🌟', title: '95% Player Placement Rate', org: 'Verified by Independent Audit' },
              { emoji: '🚀', title: 'Innovation in Football Training', org: 'Asian Sports Federation' },
              { emoji: '💎', title: 'Best Coaching Staff Award', org: 'International Coaching Association' },
            ].map((award, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{award.emoji}</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">{award.title}</h3>
                  <p className="text-sm text-primary font-poppins">• {award.org}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              ✨ What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Unique advantages that make us the best choice</p>
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
                title: '🎓 Expert Coaching Staff',
                desc: 'Our coaches have combined experience of 150+ years in professional football, providing unparalleled expertise and mentorship to each player.',
              },
              {
                title: '🏗️ World-Class Infrastructure',
                desc: 'Modern facilities including professional pitches, fitness centers, and recovery zones equipped with the latest technology and equipment.',
              },
              {
                title: '📈 Personalized Development',
                desc: 'Each player receives a customized training plan tailored to their position, strengths, and career aspirations with regular monitoring.',
              },
              {
                title: '🌍 Global Network',
                desc: 'Partnerships with international clubs and scouts providing global exposure and professional career opportunities worldwide.',
              },
              {
                title: '🧠 Holistic Approach',
                desc: 'We develop not just skilled footballers but well-rounded individuals with strong character, discipline, and leadership qualities.',
              },
              {
                title: '💼 Career Support',
                desc: 'Dedicated support in contract negotiations, career planning, and professional placement with top domestic and international clubs.',
              },
            ].map((point, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-poppins">{point.title}</h3>
                  <p className="text-muted-foreground font-poppins">{point.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">📊 Our Impact by Numbers</h2>
            <p className="text-lg text-muted-foreground font-poppins">Proven results and measurable success with animated counters</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <StatsCounter
            stats={[
              { number: 500, label: 'Players Trained', icon: '👥', description: 'Success Stories' },
              { number: 95, label: 'Placement Rate', icon: '📈', description: 'Professional Leagues', suffix: '%' },
              { number: 50, label: 'Professional Clubs', icon: '⚽', description: 'Partner Teams', suffix: '+' },
              { number: 15, label: 'International Teams', icon: '🌍', description: 'National Squads', suffix: '+' },
            ]}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Join Our Growing Family</h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Be part of Pakistan's premier football development center and achieve your dreams!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/apply"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
              >
                Apply Now →
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-secondary text-foreground rounded-lg font-bold text-lg border border-primary transition-all duration-300 font-poppins"
              >
                Contact Us →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
