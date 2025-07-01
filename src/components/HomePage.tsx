'use client';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { useSectionInViews } from '../hooks/useSectionInViews';

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeId, setActiveId] = useState('home');

  // Use the custom hook to get refs and inView states
  const sectionViews = useSectionInViews();

  const sectionInViews = sectionViews.map(s => s.inView);

  useEffect(() => {
    // Set activeId to the first section that is in view (from top to bottom)
    for (const section of sectionViews) {
      if (section.inView) {
        setActiveId(section.id);
        break;
      }
    }
  }, [sectionInViews, sectionViews]);

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
      <Header activeId={activeId}/>
      <main className="font-sans scroll-smooth">
        <Hero ref={sectionViews[0].ref}/>
        <About ref={sectionViews[1].ref}/>
        <Services ref={sectionViews[2].ref}/>
        <Portfolio ref={sectionViews[3].ref}/>
        <Contact ref={sectionViews[4].ref}/>
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
