'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-violet-400 text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
        <h2 className="text-5xl font-bold">
          Get in Touch<span className="text-violet-400">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-white/50 text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message and I will get back to you soon.
          </p>
          <div className="space-y-4">
            
            {/* ফিক্স করা ইমেল লিঙ্ক */}
            <a
              href="mailto:pritomdas@example.com"
              className="flex items-center gap-4 text-white/60 hover:text-violet-400 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/40 transition-colors">
                ✉️
              </span>
              pritomdas@example.com
            </a>
            
            {/* ফিক্স করা গিটহাব লিঙ্ক */}
            <a
              href="https://github.com/pritomdas01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/60 hover:text-violet-400 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/40 transition-colors">
                🐙
              </span>
              github.com/pritomdas01
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-32 pt-8 border-t border-white/[0.05] text-center"
      >
        <span className="text-white/20 text-sm">made by </span>
        <span className="text-violet-400 font-semibold tracking-wide">pritom</span>
        <span className="text-violet-400">.</span>
      </motion.div>
    </section>
  );
}