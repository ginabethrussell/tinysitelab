"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  activeId,
  setActiveId,
}: {
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${activeId}`);
    }
  }, [activeId]);

  const handleClick = (href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Manual override to make Safari behave
      setActiveId(id);
      history.replaceState(null, "", `#${id}`);
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
              "text-base font-normal transition-colors " +
              (`#${activeId}` === item.href
                ? "text-[#FF5722] border-b-2 border-[#FF5722] pb-1"
                : "text-[#0C2D48] hover:text-[#FF5722]")
            }
            onClick={() => handleClick(item.href)}
            aria-current={`#${activeId}` === item.href ? "page" : undefined}
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
        {mobileNavOpen ? (
          <X size={24} />
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {/* Mobile Nav Menu */}
      {mobileNavOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                scroll={true}
                className={
                  "text-base font-normal transition-colors " +
                  (`#${activeId}` === item.href
                    ? "text-[#FF5722] border-b-2 border-[#FF5722] pb-1"
                    : "text-[#0C2D48] hover:text-[#FF5722]")
                }
                onClick={() => handleClick(item.href)}
                aria-current={`#${activeId}` === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
