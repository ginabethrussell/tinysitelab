import { useEffect, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeId }: { activeId: string }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => { 
    if (typeof window !== 'undefined') {
      history.replaceState(null, '', `#${activeId}`);
    }
  }, [activeId]);
  
  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', href);
    }
    setMobileNavOpen(false);
  };

  return (
    <>
     <nav className="hidden md:flex gap-8 relative">
     {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          scroll={true}
          className={
            'text-base font-normal transition-colors ' +
            (`#${activeId}` === item.href
              ? 'text-[#FF5722] border-b-2 border-[#FF5722] pb-1'
              : 'text-[#0C2D48] hover:text-[#FF5722]')
          }
          onClick={() => handleClick(item.href)}
        >
          {item.label}
        </Link>
      ))}

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
  </>
  );
}
