import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import HowWeWork from './components/HowWeWork';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ConnectClients from './components/ConnectClients';
import Stats from './components/Stats';
import ScaleFast from './components/ScaleFast';
import CompareOptions from './components/CompareOptions';
import ClientLogos from './components/ClientLogos';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setScrollY(window.scrollY);
      
      // Update parallax elements
      document.querySelectorAll('.parallax-element').forEach((el: any) => {
        const speed = el.dataset.speed || 0.2;
        const yPos = -(scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });

      // Reveal elements on scroll
      document.querySelectorAll('.scroll-reveal, .text-reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.85;
        
        if (isVisible) {
          el.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optional: Add mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="background-orbs" />
      <div className="grain" />
      <div className="app">
        <Navbar scrolled={scrolled} />
        <main className="parallax-wrapper">
          <Hero />
          <div className="section-divider">
            <div className="divider-wave" />
          </div>
          <Stats />
          <ClientLogos />
          <div className="section-divider">
            <div className="divider-wave" />
          </div>
          <WhyUs />
          <div className="section-divider">
            <div className="divider-wave" />
          </div>
          <ConnectClients />
          <CaseStudies />
          <ScaleFast />
          <CompareOptions />
          <HowWeWork />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App; 