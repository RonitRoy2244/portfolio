import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodeArenaSimulator from './components/CodeArenaSimulator';
import MeridianVisualizer from './components/MeridianVisualizer';
import ApiPlayground from './components/ApiPlayground';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Global keyboard shortcut to open terminal (Press ~ or `)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        // Prevent toggle if currently typing in an input or textarea
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          return;
        }
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsTerminalOpen(false);
        setIsResumeOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-slate-950 ${
      darkMode ? 'bg-[#080c14] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openResumeModal={() => setIsResumeOpen(true)}
        openTerminalModal={() => setIsTerminalOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        <Hero
          darkMode={darkMode}
          openResumeModal={() => setIsResumeOpen(true)}
        />
        
        <About darkMode={darkMode} />
        
        <Skills darkMode={darkMode} />
        
        <Experience darkMode={darkMode} />
        
        <Projects darkMode={darkMode} />
        
        <CodeArenaSimulator darkMode={darkMode} />
        
        <MeridianVisualizer darkMode={darkMode} />
        
        <ApiPlayground darkMode={darkMode} />
        
        <EducationCertifications darkMode={darkMode} />
        
        <Contact darkMode={darkMode} />
      </main>

      {/* Page Footer */}
      <Footer darkMode={darkMode} />

      {/* Accessible Native Resume Dialog */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />

      {/* Developer CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openResumeModal={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}
