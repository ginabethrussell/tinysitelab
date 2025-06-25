'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import Image from 'next/image';

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || 'test-invalidform-id');

  useEffect(() => {
    if (state.succeeded) {
      const form = document.getElementById('contact-form') as HTMLFormElement | null;
      if (form) {
        form.reset();
      }
    }
  }, [state.succeeded]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="font-sans scroll-smooth">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/beaker.png"
              alt="Tiny Site Lab Logo"
              width={80}
              height={80}
              className="h-10 w-auto transition-transform hover:scale-105 -mr-4 -mt-2"
              priority
            />
            <span className="text-xl font-bold text-[#0C2D48]">Tiny Site Lab</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            <a href="#hero" className="text-[#0C2D48] hover:text-[#FF5722]">Home</a>
            <a href="#about" className="text-[#0C2D48] hover:text-[#FF5722]">About</a>
            <a href="#services" className="text-[#0C2D48] hover:text-[#FF5722]">Services</a>
            <a href="#portfolio" className="text-[#0C2D48] hover:text-[#FF5722]">Portfolio</a>
            <a href="#contact" className="text-[#0C2D48] hover:text-[#FF5722]">Contact</a>
          </nav>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-[#0C2D48] focus:outline-none"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Open navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Nav Menu */}
        {mobileNavOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50">
            <nav className="flex flex-col items-center py-4 space-y-2">
              <a href="#hero" className="text-[#0C2D48] hover:text-[#FF5722]" onClick={() => setMobileNavOpen(false)}>Home</a>
              <a href="#about" className="text-[#0C2D48] hover:text-[#FF5722]" onClick={() => setMobileNavOpen(false)}>About</a>
              <a href="#services" className="text-[#0C2D48] hover:text-[#FF5722]" onClick={() => setMobileNavOpen(false)}>Services</a>
              <a href="#portfolio" className="text-[#0C2D48] hover:text-[#FF5722]" onClick={() => setMobileNavOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-[#0C2D48] hover:text-[#FF5722]" onClick={() => setMobileNavOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-[#EAF8FB] pt-24 px-4 hero-bubbles"
      >
        <div className="max-w-3xl w-full mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2D48] mb-4 leading-tight">
            Lightweight Web Tools for People on a Mission
          </h1>
          <p className="text-xl italic text-[#334E68] mb-4">
            Built with purpose. Small by design. Made to matter.
          </p>

          <p className="text-lg text-[#334E68] mb-6">
            I build fast, purpose-driven websites and tools for small businesses, teams, creatives, churches, and events.
          </p>
          <div className="flex justify-center md:justify-end">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#FF5722] text-white rounded hover:bg-[#e64a19] transition"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/avatar.png" // Replace with your actual path
              alt="Gina Beth avatar"
              width={100}
              height={100}
              className="rounded-full mb4 animate-float"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#0C2D48]">About Me</h2>

          <p className="text-[#334E68] mb-4">
            Hi, I`&apos;m <span className="font-bold text-[#0C2D48]">Gina Beth</span> — software engineer turned founder of <span className="font-bold text-[#0C2D48]">Tiny Site Lab</span>.
          </p>

          <p className="text-[#334E68] mb-4">
            I specialize in lightweight, <span className="font-semibold text-[#0C2D48]">purpose-built websites and digital tools</span> that help small businesses, teams, creatives, and community groups connect, organize, and take action.
            With a background in both <span className="font-semibold text-[#0C2D48]">software engineering and education</span>, I bring a unique blend of technical skill and thoughtful communication to every project.
          </p>

          <p className="text-[#334E68] mb-4">
            I started Tiny Site Lab because I believe <span className="font-semibold text-[#0C2D48]">good ideas shouldn&apos;t get stuck waiting on big budgets or bloated tech</span>.
            Whether you&apos;re launching a photography business, running a one-time event, or solving a niche problem for your community,
            I help you <span className="font-semibold text-[#0C2D48]">get online fast</span> — with sites that are <span className="font-semibold text-[#0C2D48]">beautiful, fast, and easy to manage</span>.
          </p>

          <p className="text-[#334E68]">
            I&apos;m based in Kentucky and love collaborating with people who are doing meaningful work.
            Let&apos;s build something that works — simply and beautifully.
          </p>

          <p className="mt-6 text-[#FF5722] font-semibold text-lg hover:underline">
            <a href="#contact" className="hover:underline">
              Let&apos;s build something together →
            </a>
          </p>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-[#EAF8FB] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#0C2D48]">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">Marketing Sites</h3>
              <p className="text-[#334E68]">Simple, fast-loading sites for photographers, artists, and small businesses.</p>
            </div>
            <div className="p-6 bg-white rounded shadow transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">Event & Cause Pages</h3>
              <p className="text-[#334E68]">Custom pages for signups, fundraisers, retreats, or announcements.</p>
            </div>
            <div className="p-6 bg-white rounded shadow transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">Mini Web Tools</h3>
              <p className="text-[#334E68]">Matching tools, directory systems, and idea-sharing platforms tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process + Philosophy Section */}
      <section id="approach" className="py-16 px-4 bg-[#EAF8FB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* How I Work Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#0C2D48]">How I Work</h2>
            <div className="space-y-4 text-[#334E68]">
              <div>
                <h3 className="font-semibold">1. Start with You 🤝</h3>
                <p>We talk about your goals, your vibe, and what success looks like. You don’t need a tech background — just a mission.</p>
              </div>
              <div>
                <h3 className="font-semibold">2. Build the Essentials 🔧</h3>
                <p>I design and develop a lightweight site or tool that does exactly what you need — no fluff, no bloat.</p>
              </div>
              <div>
                <h3 className="font-semibold">3. Launch & Learn 🚀</h3>
                <p>You get a fast, secure, and easy-to-manage product. And I make sure you’re set up to grow with it.</p>
              </div>
            </div>
          </div>

          {/* Why Tiny Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#0C2D48]">Why Tiny? </h2>
            <p className="text-[#334E68] leading-relaxed">
              Tiny means focused. It means fast. It means built exactly for what you need — and nothing you don’t. Whether you’re just starting out or streamlining something old, Tiny Site Lab helps you skip the complexity and launch with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-10">
            Sample Projects <span role="img" aria-label="folder">📁</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            {/* Minister Connect */}
            <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)] flex items-center gap-2">
                <span className="text-orange-500">🧑‍💼</span> Minister Connect
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A private platform connecting pastors and churches for new ministry calls.
              </p>

              <div className="w-full h-48 overflow-hidden rounded-md">
                <Image
                  src="/ministerconnect.png"
                  alt="Minister Connect thumbnail"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* WanderSync */}
            <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)] flex items-center gap-2">
                <span className="text-orange-500">🗺️</span> WanderSync
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A playful itinerary-sharing tool that unlocks trip ideas when you share your own.
              </p>

              <div className="w-full h-48 overflow-hidden rounded-md shadow-md">
                  <Image
                  src="/wandersync.png"
                  alt="WanderSync thumbnail"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

          {/* Moments Captured */}
          <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
            <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)] flex items-center gap-2">
              <span className="text-orange-500">📸</span> Photography Template
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              A one-page marketing site designed to showcase a photographer&apos;s work with speed, elegance, and mobile-friendliness.
            </p>

            <div className="w-full h-48 overflow-hidden rounded-md shadow-md">
              <Image
                src="/photographer_template.png"
                alt="Moments Captured thumbnail"
                width={600}
                height={400}
                className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8 text-sm">More coming soon…</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#EAF8FB] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#0C2D48]">Let&apos;s Connect</h2>
          <p className="text-[#334E68] mb-6">Ready to launch your site or idea? Reach out and let&apos;s talk.</p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} id="contact-form" method="POST" className="space-y-4">
              {/* Success message */}
              {state.succeeded && (
                <p className="text-center font-medium mb-4 text-[#334E68]">
                  Thank you! Your message has been sent.
                </p>
              )}
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded focus:border-gray-400 focus:ring-0 focus:outline-none" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:border-gray-400 focus:ring-0 focus:outline-none" />
              <textarea name="message" placeholder="Tell me about your project..." rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded focus:border-gray-400 focus:ring-0 focus:outline-none"></textarea>
              {!!state.errors && (
                <p className="text-center font-sans font-medium mb-4 text-gray-500">
                  An error occured with form submission. Please email me directly at{' '}
                  <a className="text-[#FF5722] hover:text-[#e64a19]"
                    href="mailto:ginabeth@tinysitelab.com?subject=TinySiteLab%20Information%20Request"
                  >
                    ginabeth@tinysitelab.com
                  </a>
                </p>
              )}
              <button type="submit" className="px-6 py-3 bg-[#FF5722] text-white rounded hover:bg-[#e64a19]">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-[#FF5722] text-white p-3 rounded-full shadow-md hover:bg-[#e64a19] z-50 animate-wiggle">
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-[#334E68] bg-white border-t border-gray-200">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Image
            src="/beaker.png"
            alt="Tiny Site Lab Logo"
            width={28}
            height={28}
            className="h-6 w-auto -mr-2 -mt-1"
          />
          <span className="text-[#0C2D48]">Tiny Site Lab - Built with purpose. Small by design. Made to matter.</span>
        </div>
        &copy; {new Date().getFullYear()} Tiny Site Lab LLC
      </footer>
    </main>
  );
}
