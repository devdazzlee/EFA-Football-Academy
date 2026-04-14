export default function WhyEFA() {
  const reasons = [
    {
      title: 'National-Level Focus',
      description: 'Everything at EFA is aligned toward one goal — helping our players compete at the highest level.',
      icon: '🎯',
    },
    {
      title: 'Experienced Coaching',
      description: 'Our coaches bring real experience from competitive football and a deep understanding of player development.',
      icon: '👨‍🏫',
    },
    {
      title: 'Structured Pathways',
      description: 'EFA doesn\'t just train you — we map your journey from fundamentals to match-day performance.',
      icon: '🗺️',
    },
    {
      title: 'Competitive Fixtures',
      description: 'Academy players compete in organized fixtures and tournaments throughout the year.',
      icon: '⚽',
    },
    {
      title: 'Leadership Development',
      description: 'We develop more than football skills. EFA players are trained to be leaders on and off the pitch.',
      icon: '👑',
    },
    {
      title: 'Global Standards',
      description: 'Our coaching philosophy is inspired by global best practices tailored to Pakistani football.',
      icon: '🌍',
    },
  ];

  return (
    <section id="why-efa" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Why Elite Football Academy?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are built differently. Here&apos;s what makes EFA the right choice for serious players.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                <div className="absolute -bottom-0 -right-0 w-20 h-20 bg-accent rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 p-12 bg-secondary/10 border border-border rounded-2xl animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Our Coaching Philosophy</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Technical Mastery',
                description: 'Ball control, passing, movement, and position-specific skills trained to a high standard.',
              },
              {
                title: 'Tactical Intelligence',
                description: 'Understanding the game and making smart decisions under pressure to execute team strategies.',
              },
              {
                title: 'Physical Development',
                description: 'Speed, strength, stamina, and agility developed through structured conditioning programs.',
              },
              {
                title: 'Mental Resilience',
                description: 'Focus, composure, confidence, and the ability to perform in high-pressure situations.',
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h4 className="font-bold text-lg text-accent mb-2">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
