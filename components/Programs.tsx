export default function Programs() {
  const programs = [
    {
      name: 'Youth Development',
      ageGroup: 'All Ages',
      description: 'Structured age-group training focused on technical mastery, tactical awareness, and physical readiness for competitive football.',
      features: [
        'Advanced ball mastery',
        'Positional understanding',
        'Weekly technical sessions',
        'Competitive fixtures',
      ],
      icon: '🎯',
    },
    {
      name: 'Elite Performance Program',
      ageGroup: 'All Ages',
      description: 'Advanced training for young adults targeting professional club opportunities, national trials, and high-performance football.',
      features: [
        'Elite-level technical precision',
        'Advanced tactical training',
        'Performance analysis',
        'Trial connections',
      ],
      icon: '⭐',
    },
    {
      name: 'Goalkeeper Academy',
      ageGroup: 'Specialist Coaching',
      description: 'Position-specific coaching providing dedicated training separate from outfield sessions for goalkeepers.',
      features: [
        'Shot-stopping technique',
        'Distribution training',
        'Penalty area command',
        'Video analysis',
      ],
      icon: '🥅',
    },
    {
      name: 'Elite Camps & Clinics',
      ageGroup: 'Intensive Programs',
      description: 'High-intensity, short-duration programs held throughout the year designed to accelerate skill development.',
      features: [
        'Technical skill sprints',
        'Tactical workshops',
        'Physical testing',
        'Individual feedback',
      ],
      icon: '🏅',
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Development Programs Built for Serious Players
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every program is designed with a purpose: to move players forward with structured, progressive training.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:border-accent hover:bg-accent/5 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                {program.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-1">
                {program.name}
              </h3>
              <p className="text-sm text-accent font-semibold mb-4">
                {program.ageGroup}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              <ul className="space-y-2 mb-6">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full px-4 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 group-hover:translate-y-0 translate-y-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg animate-glow">
            View All Programs →
          </button>
        </div>
      </div>
    </section>
  );
}
