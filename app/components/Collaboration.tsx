'use client';

import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', href: 'https://github.com/pritomdas01', icon: '⌥' },
  { label: 'LinkedIn', href: '#', icon: '◈' },
  { label: 'Facebook', href: '#', icon: '◉' },
  { label: 'Gmail', href: 'mailto:your@gmail.com', icon: '◎' },
];

export default function Collaboration() {
  return (
    <section id="collaborate" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-3xl p-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 text-sm tracking-[0.3em] uppercase mb-4">Let's Work</p>
          <h2 className="text-5xl font-bold mb-6">
            Open to Collaborate<span className="text-violet-400">.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Whether it's a startup idea, freelance project, or just a good conversation — I'm always open.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-full hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 group"
            >
              <span className="text-violet-400 text-lg">{social.icon}</span>
              <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
