import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-all ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs">
              RR
            </div>
            <div>
              <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </div>
              <p className="text-xs font-mono text-slate-500">
                Full Stack Java Developer · {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Standards & Stack Badge */}
          <div className="text-center font-mono text-xs">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered for 2026 Web Performance</span>
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              React 19 · Vite 8 · Tailwind v4 · Deployed on Vercel
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-blue-400 hover:bg-slate-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-800 transition-all"
              aria-label="Email Ronit"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700' : 'bg-white border-slate-300 text-slate-700 shadow-xs'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Ronit Roy. All rights reserved. Spring Boot, React.js, REST APIs, MySQL, and JUnit.
        </div>
      </div>
    </footer>
  );
}
