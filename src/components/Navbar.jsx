import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      scrolled 
        ? darkMode 
          ? 'bg-[#0c0d0e]/85 backdrop-blur-md border-b border-white/[0.06]' 
          : 'bg-[#fafafa]/85 backdrop-blur-md border-b border-black/[0.06]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Name / Brand */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 group"
        >
          <span className={`font-semibold tracking-tight text-sm sm:text-base transition-colors ${
            darkMode ? 'text-zinc-100 group-hover:text-amber-400' : 'text-zinc-900 group-hover:text-amber-600'
          }`}>
            {personalInfo.name}
          </span>
          <span className={`text-xs font-mono hidden sm:inline ${
            darkMode ? 'text-zinc-500' : 'text-zinc-400'
          }`}>
            / Full Stack Java Developer
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? darkMode ? 'text-amber-400' : 'text-amber-600 font-semibold'
                  : darkMode 
                    ? 'text-zinc-400 hover:text-zinc-100' 
                    : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Resume Trigger */}
          <button
            type="button"
            onClick={openResumeModal}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
              darkMode 
                ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700/80 hover:border-zinc-600' 
                : 'bg-white hover:bg-zinc-50 text-zinc-800 border-zinc-300'
            }`}
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className={`p-1.5 rounded-md border transition-colors cursor-pointer ${
              darkMode 
                ? 'text-zinc-400 hover:text-zinc-200 border-zinc-800 bg-zinc-900/50' 
                : 'text-zinc-600 hover:text-zinc-900 border-zinc-200 bg-zinc-100'
            }`}
          >
            {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 md:hidden rounded-md border ${
              darkMode ? 'text-zinc-300 border-zinc-800 bg-zinc-900' : 'text-zinc-700 border-zinc-300 bg-zinc-100'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-5 py-4 ${
          darkMode ? 'bg-[#0c0d0e] border-zinc-800' : 'bg-[#fafafa] border-zinc-200'
        }`}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-1 font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? darkMode ? 'text-amber-400' : 'text-amber-600'
                    : darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
