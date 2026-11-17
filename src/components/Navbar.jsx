import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  FileText, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, openResumeModal, openTerminalModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'codearena-demo', 'meridian-demo', 'api-playground', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

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
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#codearena-demo", label: "Live Sandbox" },
    { href: "#api-playground", label: "REST APIs" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-mono font-bold text-sm ${
              darkMode ? 'bg-slate-950 text-cyan-400' : 'bg-white text-blue-600'
            }`}>
              RR
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-bold tracking-tight text-base sm:text-lg ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {personalInfo.name}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                v2026.1
              </span>
            </div>
            <p className={`text-xs font-mono hidden md:block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Full Stack Java Dev
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? darkMode 
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' 
                    : 'text-blue-600 bg-blue-50 border border-blue-200'
                  : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2">
          
          {/* CLI Terminal Trigger */}
          <button
            type="button"
            onClick={openTerminalModal}
            title="Open Interactive Developer CLI (~)"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              darkMode 
                ? 'bg-slate-900/80 hover:bg-slate-800 text-cyan-400 border-slate-700 hover:border-cyan-500/50' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden md:inline px-1 py-0.2 text-[10px] bg-slate-800 text-slate-300 rounded border border-slate-700">~</kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg border transition-all ${
              darkMode 
                ? 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800' 
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume View Modal Trigger */}
          <button
            type="button"
            onClick={openResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View</span> Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 lg:hidden rounded-lg border transition-all ${
              darkMode 
                ? 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800' 
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-2 pb-6 transition-all ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? darkMode ? 'text-cyan-400 bg-cyan-950/40' : 'text-blue-600 bg-blue-50'
                    : darkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/50">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openTerminalModal();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono bg-slate-900 text-cyan-400 border border-slate-700"
            >
              <Terminal className="w-4 h-4" /> Open Developer Terminal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
            >
              <FileText className="w-4 h-4" /> View Full Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
