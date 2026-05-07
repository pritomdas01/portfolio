'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Admission AI',
    description: 'AI-powered university admission prep platform for Bangladeshi students with MCQ tests and Bengali explanations.',
    tags: ['Next.js', 'Supabase', 'Gemini AI'],
    status: 'Ongoing',
    link: '#',
  },
  {
    title: 'Fluent BD',
    description: 'English learning platform with AI tutor, voice responses, and interactive lessons.',
    tags: ['Next.js', 'ElevenLabs', 'Supabase'],
    status: 'Completed',
    link: '#',
  },
  {
    title: 'GST Rank Estimator',
    description: 'Tool for estimating GST exam ranks with mark-based prediction and dashboard views.',
    tags: ['HTML', 'JavaScript', 'localStorage'],
    status: 'Completed',
    link: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Reduced rotation range + faster snap-back
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 400, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className="relative group cursor-pointer"
    >
      {/* inner div flat — no 3d on children */}
      <div
        style={{ transform: 'translateZ(0)' }}
        className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/[0.05]"
      >
        <div className="absolute top-6 right-6">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
            project.status === 'Ongoing'
              ? 'bg-violet-500/20 text-violet-300 shadow-lg shadow-violet-500/20'
              : 'bg-emerald-500/20 text-emerald-300'
          }`}>
            {project.status === 'Ongoing' && (
              <span className="inline-block w-1.5 h-1.5 bg-violet-400 rounded-full mr-1.5 animate-pulse" />
            )}
            {project.status}
          </span>
        </div>

        <div className="w-full h-40 bg-gradient-to-br from-violet-600/10 to-blue-600/10 rounded-xl mb-6 border border-white/5 flex items-center justify-center">
          <span className="text-white/20 text-sm">Project Preview</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-violet-400 text-sm tracking-[0.3em] uppercase mb-4">Work</p>
        <h2 className="text-5xl font-bold">
          Projects<span className="text-violet-400">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}