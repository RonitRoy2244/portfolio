import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-200 font-sans ${
      darkMode ? 'bg-[#0c0d0e] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Flow */}
      <main>
        <Hero
          darkMode={darkMode}
          openResumeModal={() => setIsResumeOpen(true)}
        />

        <Experience darkMode={darkMode} />

        <Projects darkMode={darkMode} />

        <Skills darkMode={darkMode} />

        <EducationCertifications darkMode={darkMode} />

        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Clean Native Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
