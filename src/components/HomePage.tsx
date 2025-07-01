'use client';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionIds = ['hero', 'about', 'services', 'portfolio', 'contact'];
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#home')
  };


  return (
    <>
      <Header activeId={activeId} />
      <main className="font-sans scroll-smooth">

        <Hero />

        <About />

        <Services />

        <Portfolio />

        <Contact />
        
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-[#FF5722] text-white p-3 rounded-full shadow-md hover:bg-[#e64a19] z-50 animate-wiggle">
            ↑
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}
