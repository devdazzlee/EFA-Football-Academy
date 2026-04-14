import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Joining EFA was the best decision I made for my football career. The coaching here is serious, the environment is competitive, and I improved faster than I ever thought possible.',
      author: 'Academy Player',
      location: 'Karachi',
      role: 'Elite Performance Program',
      avatar: '👨‍🦱',
    },
    {
      quote: 'EFA doesn\'t just train you to play football — they train you to think football. The tactical sessions changed how I see the game completely.',
      author: 'Academy Graduate',
      location: 'Lahore',
      role: 'National Team Candidate',
      avatar: '👨‍🦲',
    },
    {
      quote: 'The coaches at EFA push you every single day. The discipline, the structure, the competition — it\'s everything I needed to take my game to the next level.',
      author: 'Current Academy Player',
      location: 'Islamabad',
      role: 'Youth Development Program',
      avatar: '👨‍🎓',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            What Our Players Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 animate-scale-in">
            {/* Quote */}
            <blockquote className="text-center mb-8">
              <div className="text-5xl mb-6 text-accent">"</div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic font-light">
                {testimonials[activeIndex].quote}
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="text-6xl mb-4">{testimonials[activeIndex].avatar}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {testimonials[activeIndex].author}
              </h3>
              <p className="text-sm text-accent font-semibold mb-1">
                {testimonials[activeIndex].role}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[activeIndex].location}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-accent w-8'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Below Testimonials */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { label: 'Happy Players', value: '500+' },
              { label: 'Success Rate', value: '95%' },
              { label: 'Professional Signings', value: '50+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
