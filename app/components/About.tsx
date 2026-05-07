'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Cups of Tea', value: '∞' },
];

const skills = [
  'Next.js', 'React', 'TypeScript', 'Python',
  'Supabase', 'Tailwind CSS', 'Framer Motion', 'SQL',
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-violet-400 text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
        <h2 className="text-5xl font-bold mb-16">
          Who I am<span className="text-violet-400">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-white/60 text-lg leading-relaxed">
            I'm a Mathematics Honours student and self-taught developer from
            Chittagong, Bangladesh. I build full-stack products with a focus
            on clean design and real-world impact.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Currently building <span className="text-violet-400 font-medium">Admission AI</span> — 
            a platform helping Bangladeshi students prepare for university admissions 
            with AI-powered explanations.
          </p>

          {/* Stats */}
          <div className="flex gap-10 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
        >
          <p className="text-white/40 text-sm mb-6 uppercase tracking-widest">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(139,92,246,0.5)' }}
                className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/70 hover:text-white transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
