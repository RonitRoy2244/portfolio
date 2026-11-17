import React, { useState } from 'react';
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Play, 
  FileText, 
  Sparkles,
  Server,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Hero({ darkMode, openResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-3xl opacity-30 ${
          darkMode ? 'bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-800' : 'bg-gradient-to-tr from-cyan-300 via-blue-200 to-indigo-300'
        }`} />
        <div className={`absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full blur-2xl opacity-20 ${
          darkMode ? 'bg-emerald-600' : 'bg-emerald-300'
        }`} />
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border shadow-xs ${
            darkMode 
              ? 'bg-slate-900/90 border-slate-700/80 text-emerald-400 shadow-black/20' 
              : 'bg-white/90 border-slate-200 text-emerald-700 shadow-slate-200/50'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {personalInfo.location}
            </span>
          </div>

          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border ${
            darkMode ? 'bg-cyan-950/40 border-cyan-800/50 text-cyan-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <Server className="w-3 h-3" />
            <span>Web Developer @ Groveus Informatics</span>
          </div>
        </div>

        {/* Main Title & Tagline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-slate-200 via-cyan-200 to-blue-300 bg-clip-text">
            {personalInfo.role}
          </p>

          <p className={`mt-3 text-sm sm:text-base font-mono max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {personalInfo.tagline}
          </p>

          <p className={`mt-5 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Building high-throughput, secure REST APIs with <span className="font-semibold text-cyan-400">Spring Boot</span>, 
            stateless JWT authentication, automated <span className="font-semibold text-indigo-400">JUnit 5 & MockMvc</span> testing, 
            and resilient web frontends with <span className="font-semibold text-blue-400">React.js</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#codearena-demo"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
                darkMode 
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/60 shadow-md shadow-black/20' 
                  : 'bg-white hover:bg-slate-50 text-blue-700 border-blue-200 shadow-sm'
              }`}
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              <span>Test Live Sandbox</span>
            </a>

            <button
              type="button"
              onClick={openResumeModal}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
              }`}
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Resume PDF</span>
            </button>

            <button
              type="button"
              onClick={() => {
                handleCopyEmail();
                triggerCelebration();
              }}
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono border transition-all duration-200 cursor-pointer ${
                copiedEmail 
                  ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                  : darkMode 
                    ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Social Profiles & Direct Contacts Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 ${
                darkMode ? 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{personalInfo.githubUsername}</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 ${
                darkMode ? 'bg-slate-900/70 hover:bg-slate-800 text-blue-400 border-slate-800 hover:text-blue-300' : 'bg-slate-100 hover:bg-slate-200 text-blue-700 border-slate-300'
              }`}
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 ${
                darkMode ? 'bg-slate-900/70 hover:bg-slate-800 text-cyan-400 border-slate-800 hover:text-cyan-300' : 'bg-slate-100 hover:bg-slate-200 text-cyan-700 border-slate-300'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personalInfo.email}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyPhone}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 cursor-pointer ${
                copiedPhone 
                  ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                  : darkMode ? 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 border-slate-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Phone className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? "Phone Copied!" : personalInfo.phone}</span>
            </button>
          </div>

        </div>

        {/* 4 Key Metrics Cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-slate-900/50 hover:bg-slate-900/80 border-slate-800/80 hover:border-cyan-500/40 shadow-lg shadow-black/10' 
                  : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-blue-400 shadow-md shadow-slate-200/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight bg-gradient-to-r ${
                  idx === 0 ? 'from-emerald-400 to-teal-300' :
                  idx === 1 ? 'from-cyan-400 to-blue-400' :
                  idx === 2 ? 'from-blue-400 to-indigo-400' :
                  'from-purple-400 to-pink-400'
                } bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <div className={`p-2 rounded-xl ${
                  darkMode ? 'bg-slate-800/80 text-cyan-400' : 'bg-slate-100 text-blue-600'
                }`}>
                  {idx === 0 && <Sparkles className="w-4 h-4" />}
                  {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                  {idx === 2 && <Layers className="w-4 h-4" />}
                  {idx === 3 && <Cpu className="w-4 h-4" />}
                </div>
              </div>
              <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {stat.label}
              </div>
              <div className={`mt-1 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
