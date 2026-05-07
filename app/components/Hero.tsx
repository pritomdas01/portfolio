'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Builder.', 'Developer.', 'Problem Solver.', 'Founder.'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-violet-400 text-sm tracking-[0.3em] uppercase mb-6 font-medium"
        >
          Hey, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Pritom
          <span className="text-violet-400">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-white/60 mb-8 h-10 flex items-center justify-center gap-2"
        >
          <span>{displayed}</span>
          <span className="w-0.5 h-7 bg-violet-400 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-white/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I build tools that actually solve problems — clean code, great UX, and things that ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            View Projects
          </a>
          
          <a
            href="#collaborate"
            className="px-8 py-3 border border-white/10 hover:border-violet-400/50 text-white/70 hover:text-white rounded-full text-sm font-medium transition-all duration-300"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-violet-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
