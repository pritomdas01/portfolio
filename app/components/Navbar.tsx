'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#080808]/80 backdrop-blur-md border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          pritom<span className="text-violet-400">.</span>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-8 text-sm text-white/60">
          {['About', 'Projects', 'Collaborate', 'Contact'].map((item) => (
            <li key={item}>
              {/* এখানে ভুলটি সংশোধন করা হয়েছে (<a ট্যাগ যোগ করা হয়েছে) */}
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}