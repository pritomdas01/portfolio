import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <Navbar />
      <Hero />
    </main>
  );
}