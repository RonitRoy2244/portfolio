import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode, openResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Availability & Location Subtitle */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
          <span className={`inline-flex items-center gap-1.5 font-medium ${
            darkMode ? 'text-emerald-400' : 'text-emerald-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            {personalInfo.status}
          </span>
          <span className={darkMode ? 'text-zinc-600' : 'text-zinc-300'}>•</span>
          <span className={`inline-flex items-center gap-1 font-mono ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            {personalInfo.location}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h1 className={`text-3xl sm:text-5xl font-bold tracking-tight leading-[1.15] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            Full Stack Java Developer crafting robust Spring Boot backends and responsive React applications.
          </h1>

          {/* Authentic Summary from Resume */}
          <p className={`mt-6 text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Hi, I'm <strong className={darkMode ? 'text-zinc-100' : 'text-zinc-900'}>{personalInfo.name}</strong>. {personalInfo.summary}
          </p>

          {/* Quick Context Highlights */}
          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="text-zinc-500 block mb-1">Current Role</span>
              <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Web Developer
              </span>
              <span className="text-zinc-400 block text-[11px]">Groveus Informatics</span>
            </div>

            <div>
              <span className="text-zinc-500 block mb-1">Core Stack</span>
              <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Java · Spring Boot
              </span>
              <span className="text-zinc-400 block text-[11px]">React.js · MySQL</span>
            </div>

            <div>
              <span className="text-zinc-500 block mb-1">Client Satisfaction</span>
              <span className={`font-semibold text-amber-500`}>
                100% Client Rating
              </span>
              <span className="text-zinc-400 block text-[11px]">Groveus Web Delivery</span>
            </div>

            <div>
              <span className="text-zinc-500 block mb-1">Academic Background</span>
              <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                B.Tech in CSE
              </span>
              <span className="text-zinc-400 block text-[11px]">Techno India (7.8 GPA)</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium border transition-colors ${
                darkMode 
                  ? 'bg-zinc-100 hover:bg-white text-zinc-950 border-transparent font-semibold' 
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white border-transparent font-semibold'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono border transition-colors cursor-pointer ${
                copiedEmail
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400'
                  : darkMode 
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' 
                    : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-300'
              }`}
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copiedEmail ? "Copied" : personalInfo.email}</span>
            </button>

            <button
              type="button"
              onClick={openResumeModal}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                darkMode 
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' 
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono border transition-colors ${
                darkMode 
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' 
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-300'
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono border transition-colors ${
                darkMode 
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' 
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-300'
              }`}
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
