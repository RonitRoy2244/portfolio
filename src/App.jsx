import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BentoPortfolio from './components/BentoPortfolio';
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
      darkMode ? 'bg-[#08090c] text-zinc-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Bento Grid Flow */}
      <main>
        <BentoPortfolio
          darkMode={darkMode}
          openResumeModal={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
