'use client';

import { useEffect, useState } from 'react';

const roles = ['Developer', 'Builder', 'Problem Solver', 'Open Source Contributor'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">
          Hey, I&apos;m
        </p>

        <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-4">
          Pritom
        </h1>

        {/* Typing effect */}
        <div className="text-2xl md:text-3xl text-violet-400 font-light mb-8 h-10">
          {displayed}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
          I build tools that actually solve problems — clean code, great UX, and things that ship.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* এখানে <a ট্যাগ ঠিক করা হয়েছে */}
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-full text-sm font-medium transition-colors duration-200"
          >
            View Projects
          </a>
          
          {/* এখানেও <a ট্যাগ ঠিক করা হয়েছে */}
          <a
            href="#collaborate"
            className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-full text-sm font-medium text-white/70 hover:text-white transition-all duration-200"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}