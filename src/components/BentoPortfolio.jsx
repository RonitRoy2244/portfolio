import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  FileText, 
  Briefcase, 
  Code2, 
  Database, 
  ShieldCheck, 
  Cloud, 
  GraduationCap, 
  Award, 
  Send,
  Layers,
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  personalInfo, 
  skillsData, 
  experienceData, 
  projectsData, 
  educationData, 
  certificationsData 
} from '../data/portfolioData';

export default function BentoPortfolio({ darkMode, openResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setMessageSent(true);

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry from ' + contactForm.name)}&body=${encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`)}`;
    window.location.href = mailto;

    setTimeout(() => {
      setMessageSent(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const filteredSkills = activeSkillCategory === 'all' 
    ? skillsData.items 
    : skillsData.items.filter(s => s.category === activeSkillCategory);

  const codeArena = projectsData.find(p => p.id === 'codearena');
  const meridian = projectsData.find(p => p.id === 'meridian');

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 12-Column Responsive Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* ========================================================================= */}
        {/* TILE 1: HERO / EXECUTIVE BIO (Col 8) */}
        {/* ========================================================================= */}
        <div id="hero" className={`md:col-span-8 p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div>
            {/* Top Status & Location */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
              darkMode ? 'text-zinc-100' : 'text-slate-900'
            }`}>
              Hi, I'm {personalInfo.name}.
            </h1>

            <p className="mt-2 text-base sm:text-lg font-semibold text-sky-400">
              {personalInfo.role} · Spring Boot & React.js
            </p>

            {/* Resume Summary */}
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-zinc-300' : 'text-slate-600'
            }`}>
              {personalInfo.summary}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-1.5">
              {['Java 17', 'Spring Boot', 'Spring Security', 'Hibernate JPA', 'React.js', 'MySQL', 'JUnit 5', 'MockMvc', 'REST APIs', 'Vite'].map((t, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border ${
                    darkMode 
                      ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' 
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Ronit</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                copiedEmail
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400'
                  : darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
              <span>{copiedEmail ? "Copied!" : personalInfo.email}</span>
            </button>

            <button
              type="button"
              onClick={openResumeModal}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700' : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume PDF</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono border transition-colors ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
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
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono border transition-colors ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TILE 2: CURRENT WORK & EXPERIENCE (Col 4) */}
        {/* ========================================================================= */}
        <div id="experience" className={`md:col-span-4 p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Experience
              </span>
              <span className="text-xs font-mono text-zinc-400">August 2026 – Present</span>
            </div>

            <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
              Web Developer
            </h3>
            <p className="text-xs font-semibold text-zinc-400 mt-0.5">
              Groveus Informatics and Private Limited
            </p>
            <p className="text-xs font-mono text-zinc-500">
              Siliguri, India
            </p>

            {/* Satisfaction Record Pill */}
            <div className={`mt-4 p-3 rounded-2xl border ${
              darkMode ? 'bg-sky-950/20 border-sky-800/40 text-sky-300' : 'bg-sky-50 border-sky-200 text-sky-900'
            }`}>
              <div className="text-2xl font-black font-mono">100%</div>
              <div className="text-xs font-medium">Client Satisfaction Record</div>
            </div>

            {/* Bullets from resume */}
            <ul className="mt-4 space-y-2 text-xs leading-relaxed">
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <span className="text-sky-400 font-bold">•</span>
                <span>Converted client design requirements into responsive HTML5, CSS3, JavaScript (ES6+), and Bootstrap pages.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <span className="text-sky-400 font-bold">•</span>
                <span>Debugged front-end issues and optimized page performance in collaboration with the development team.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <span className="text-sky-400 font-bold">•</span>
                <span>Developed interactive JavaScript UI elements improving client-facing UX.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-1">
            {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'].map((skill, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TILE 3: PROJECT 1 - CODEARENA (Col 6) */}
        {/* ========================================================================= */}
        <div id="projects" className={`md:col-span-6 p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Featured System
              </span>
              <a
                href={codeArena.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
              {codeArena.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              {codeArena.subtitle}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-3 gap-2 my-4 text-center font-mono text-xs">
              <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-bold text-sky-400">64 KB</div>
                <div className="text-[10px] text-zinc-500">Output Cap</div>
              </div>
              <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-bold text-sky-400">11 REST</div>
                <div className="text-[10px] text-zinc-500">Endpoints</div>
              </div>
              <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-bold text-sky-400">25 Tests</div>
                <div className="text-[10px] text-zinc-500">JUnit 5 Suite</div>
              </div>
            </div>

            {/* Key Technical Bullets from Resume */}
            <ul className="space-y-2 text-xs leading-relaxed">
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Runs submitted Java & JS in <strong>isolated OS subprocesses</strong> with execution time limits, process-tree kill on timeout, and a <strong>64 KB output buffer cap</strong>.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <Database className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Designed <strong>11 REST API endpoints</strong> on MySQL across 4 entities, secured with stateless JWT authentication, BCrypt, and RBAC.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <Code2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Rate limiting (1 submission / 5s) & a <strong>semaphore capping concurrent runs at 3</strong>; hidden test cases never leave the server.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Wrote <strong>25 automated tests</strong> with JUnit 5 and Spring MockMvc covering auth, problems, submissions, and code runner.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-1">
            {codeArena.techStack.map((t, idx) => (
              <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TILE 4: PROJECT 2 - MERIDIAN (Col 6) */}
        {/* ========================================================================= */}
        <div className={`md:col-span-6 p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Featured System
              </span>
              <a
                href={meridian.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
              {meridian.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              {meridian.subtitle}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-3 gap-2 my-4 text-center font-mono text-xs">
              <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-bold text-sky-400">4 Flows</div>
                <div className="text-[10px] text-zinc-500">Core Lifecycle</div>
              </div>
              <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-bold text-sky-400">10+ APIs</div>
                <div className="text-[10px] text-zinc-500">Spring Boot</div>
              </div>
              <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-bold text-sky-400">AWS</div>
                <div className="text-[10px] text-zinc-500">EC2 & RDS</div>
              </div>
            </div>

            {/* Key Technical Bullets from Resume */}
            <ul className="space-y-2 text-xs leading-relaxed">
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <Database className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Covering <strong>4 core flows</strong>: user registration, product browsing, cart management, and order checkout with transactional integrity.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <Code2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Built <strong>10+ RESTful API endpoints</strong> with Spring Boot and Hibernate (JPA) on MySQL, secured with stateless JWT authentication and BCrypt.</span>
              </li>
              <li className={`flex items-start gap-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                <Cloud className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Responsive React.js frontend with Bootstrap; deployed application on <strong>AWS (EC2, RDS)</strong> with Nginx reverse proxy and security groups.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-1">
            {meridian.techStack.map((t, idx) => (
              <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TILE 5: TECHNICAL SKILLS MATRIX (Col 7) */}
        {/* ========================================================================= */}
        <div id="skills" className={`md:col-span-7 p-6 sm:p-8 rounded-3xl border transition-all ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Technical Stack
              </span>
              <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
                Skills & Systems Knowledge
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'all', label: 'All' },
                { id: 'backend', label: 'Backend' },
                { id: 'languages', label: 'Languages' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'testing', label: 'Testing' },
                { id: 'databases', label: 'DBs' },
                { id: 'core', label: 'Core' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkillCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono cursor-pointer transition-colors ${
                    activeSkillCategory === cat.id
                      ? 'bg-sky-600 text-white font-semibold'
                      : darkMode ? 'bg-zinc-900 text-zinc-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
            {filteredSkills.map((skill, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-2xl border transition-all ${
                  darkMode ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`text-xs font-bold ${darkMode ? 'text-zinc-200' : 'text-slate-800'}`}>
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {skill.level}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-500 leading-tight">
                  {skill.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TILE 6: EDUCATION & CERTIFICATIONS (Col 5) */}
        {/* ========================================================================= */}
        <div id="education" className={`md:col-span-5 p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              Academic & Verified Credentials
            </span>
            <h3 className={`text-lg font-bold tracking-tight mb-4 ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
              Education & Certifications
            </h3>

            {/* Academic Degrees */}
            <div className="space-y-3 mb-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-baseline justify-between gap-2 text-xs">
                    <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-slate-800'}`}>
                      {edu.degree}
                    </span>
                    <span className="font-mono text-sky-400 font-bold shrink-0">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 flex justify-between">
                    <span>{edu.institution}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 space-y-3">
              <span className="text-xs font-mono font-semibold text-zinc-400 block">
                Professional Credentials
              </span>
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="space-y-0.5 text-xs">
                  <div className="font-semibold text-zinc-200">{cert.name}</div>
                  <div className="text-[11px] font-mono text-sky-400">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-[11px] font-mono text-zinc-500">
            AI-Assisted Dev: Claude, Antigravity
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TILE 7: CONTACT & DIRECT CONNECT (Col 12) */}
        {/* ========================================================================= */}
        <div id="contact" className={`md:col-span-12 p-6 sm:p-8 rounded-3xl border transition-all ${
          darkMode 
            ? 'bg-[#0f1117] border-zinc-800/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200/90 shadow-md shadow-slate-100'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Direct Communication
              </span>
              <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
                Let's Build Something Together.
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-slate-600'}`}>
                Open to full-time roles, software engineering discussions, and high-performance backend systems.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-zinc-500">Email:</span>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${personalInfo.email}`} className="text-zinc-200 hover:text-sky-400 transition-colors">
                      {personalInfo.email}
                    </a>
                    <button onClick={handleCopyEmail} className="cursor-pointer text-zinc-500 hover:text-white">
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-zinc-500">Phone:</span>
                  <div className="flex items-center gap-2">
                    <a href={`tel:${personalInfo.phone}`} className="text-zinc-200 hover:text-sky-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                    <button onClick={handleCopyPhone} className="cursor-pointer text-zinc-500 hover:text-white">
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-zinc-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <form onSubmit={handleSendMessage} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-sky-500 transition-colors ${
                        darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-sky-500 transition-colors ${
                        darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-1">Message *</label>
                  <textarea
                    required
                    rows={3}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Project details, full-stack role inquiry, or technical questions..."
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-sky-500 transition-colors ${
                      darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{messageSent ? "Opening Email Client..." : "Send Message"}</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
