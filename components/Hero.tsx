'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    headline: "Where Pakistan's Next Football Stars Are Made",
    subheadline: 'Professional coaching. Structured development. A clear pathway to national-level football.',
    cta1: 'Join the Academy',
    cta2: 'View Programs',
  },
  {
    headline: 'Train Like a Pro. Play Like a Champion.',
    subheadline: 'Elite Football Academy delivers world-class football training built for serious players of all ages.',
    cta1: 'Explore Programs',
    cta2: 'Meet Our Coaches',
  },
  {
    headline: "Pakistan's Future on the Pitch Starts Here.",
    subheadline: 'From local pitches to national squads — our academy is your first step toward professional football.',
    cta1: 'Apply Now',
    cta2: 'Learn More',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-96">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/30">
                Elite Football Academy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="text-accent">{slide.headline.split(' ')[0]}</span>{' '}
              {slide.headline.substring(slide.headline.indexOf(' ') + 1)}
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {slide.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl animate-glow">
                {slide.cta1} →
              </button>
              <button className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-bold text-lg hover:bg-accent/10 transition-all duration-300">
                {slide.cta2} →
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors duration-300 group">
              <div className="text-accent text-4xl font-bold mb-2">100+</div>
              <h3 className="text-foreground font-semibold mb-1">National Graduates</h3>
              <p className="text-sm text-muted-foreground">Players representing Pakistan</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors duration-300 group">
              <div className="text-accent text-4xl font-bold mb-2">20+</div>
              <h3 className="text-foreground font-semibold mb-1">Expert Coaches</h3>
              <p className="text-sm text-muted-foreground">Professional playing backgrounds</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors duration-300 group">
              <div className="text-accent text-4xl font-bold mb-2">365</div>
              <h3 className="text-foreground font-semibold mb-1">Training Days</h3>
              <p className="text-sm text-muted-foreground">Year-round programs</p>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 justify-center mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-accent w-8' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
