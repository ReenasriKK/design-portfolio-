import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
