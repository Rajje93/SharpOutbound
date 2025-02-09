import { useState, useEffect, useCallback } from 'react';
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
import { initScrollAnimations } from './utils/animations';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
    setScrollY(window.scrollY);
    
    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
      // Update parallax elements
      document.querySelectorAll<HTMLElement>('.parallax-element').forEach((el) => {
        const speed = el.dataset.speed || '0.2';
        const yPos = -(scrollY * parseFloat(speed));
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
    });
  }, [scrollY]);

  // Memoize mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="app-wrapper">
      <div className="background-orbs" />
      <div className="grain" />
      <div className="app">
        <Navbar scrolled={scrolled} />
        <main className="parallax-wrapper">
          <Hero />
          <Stats />
          <ClientLogos />
          <WhyUs />
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