'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border animate-slide-down font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 animate-fade-in hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.png"
                alt="EFA Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-lg font-bold text-accent">EFA</h1>
              <p className="text-xs text-muted-foreground">Elite Football Academy</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Programs
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="/apply" className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300 animate-glow">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 animate-slide-down">
            <Link href="/" onClick={closeMenu} className="text-foreground hover:text-accent transition-colors font-medium">Home</Link>
            <Link href="/about" onClick={closeMenu} className="text-foreground hover:text-accent transition-colors font-medium">About</Link>
            <Link href="/programs" onClick={closeMenu} className="text-foreground hover:text-accent transition-colors font-medium">Programs</Link>
            <Link href="/contact" onClick={closeMenu} className="text-foreground hover:text-accent transition-colors font-medium">Contact</Link>
            <Link href="/blog" onClick={closeMenu} className="text-foreground hover:text-accent transition-colors font-medium">Blog</Link>
            <Link href="/apply" onClick={closeMenu} className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold w-full text-center">
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
