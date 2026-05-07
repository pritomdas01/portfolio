import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Collaboration />
      <Contact />
    </main>
  );
}