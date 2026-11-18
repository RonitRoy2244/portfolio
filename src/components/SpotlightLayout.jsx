import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink,
  Code2,
  Database,
  ShieldCheck,
  Cloud,
  Send,
  Sun,
  Moon,
  CheckCircle2,
  Layers,
  Sparkles,
  Terminal
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

export default function SpotlightLayout({ darkMode, setDarkMode, openResumeModal }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.1) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setFormSent(true);

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry from ' + contactForm.name)}&body=${encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`)}`;
    window.location.href = mailto;

    setTimeout(() => {
      setFormSent(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const codeArena = projectsData.find(p => p.id === 'codearena');
  const meridian = projectsData.find(p => p.id === 'meridian');

  const filteredSkills = activeSkillCategory === 'all' 
    ? skillsData.items 
    : skillsData.items.filter(s => s.category === activeSkillCategory);

  return (
    <div className={`relative min-h-screen ${
      darkMode ? 'bg-[#0b1120] text-slate-300' : 'bg-slate-50 text-slate-700'
    } transition-colors duration-300 font-sans selection:bg-teal-500/30 selection:text-teal-200`}>
      
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: darkMode 
            ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.08), transparent 80%)`
            : `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.06), transparent 80%)`
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: PINNED PROFILE, NAVIGATION & SOCIALS */}
          {/* ========================================================================= */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Availability & Location Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-teal-500/10 text-teal-400 border-teal-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  <span>{personalInfo.status}</span>
                </span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {personalInfo.location}
                </span>
              </div>

              {/* Title & Headline */}
              <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                darkMode ? 'text-slate-100' : 'text-slate-900'
              }`}>
                {personalInfo.name}
              </h1>

              <h2 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-teal-400 font-mono">
                {personalInfo.role}
              </h2>

              <p className={`mt-2 text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {personalInfo.tagline}
              </p>

              {/* Pitch */}
              <p className={`mt-4 max-w-xs text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Currently building client web applications with 100% satisfaction at <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>Groveus Informatics</strong> and architecting secure Spring Boot microservices with process-tree isolation.
              </p>

              {/* Sticky Navigation with Expanding Lines */}
              <nav className="nav hidden lg:block mt-12" aria-label="In-page jump links">
                <ul className="space-y-3 font-mono text-xs">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          className={`group flex items-center py-1 transition-all ${
                            isActive 
                              ? darkMode ? 'text-teal-300 font-bold' : 'text-teal-600 font-bold'
                              : darkMode ? 'text-slate-500 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          <span className={`mr-4 h-px transition-all duration-300 ${
                            isActive 
                              ? 'w-16 bg-teal-400' 
                              : darkMode ? 'w-8 bg-slate-700 group-hover:w-12 group-hover:bg-slate-400' : 'w-8 bg-slate-300 group-hover:w-12 group-hover:bg-slate-600'
                          }`} />
                          <span className="tracking-widest uppercase">{item.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Bottom Actions & Socials */}
            <div className="mt-10 lg:mt-0 pt-6 flex flex-wrap items-center gap-4">
              
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Theme"
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  darkMode ? 'bg-slate-900/80 text-amber-400 border-slate-800 hover:bg-slate-800' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Resume Trigger */}
              <button
                type="button"
                onClick={openResumeModal}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                  darkMode ? 'bg-slate-900/80 hover:bg-slate-800 text-teal-400 border-slate-800' : 'bg-white hover:bg-slate-100 text-teal-700 border-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600'
                  }`}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600'
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`p-2 rounded-xl transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600'
                  }`}
                  aria-label="Email Ronit"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </div>
          </header>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: SCROLLABLE NARRATIVE SECTIONS */}
          {/* ========================================================================= */}
          <main className="pt-20 lg:w-1/2 lg:py-24 space-y-24">
            
            {/* --------------------------------------------------------------------- */}
            {/* SECTION 01: ABOUT */}
            {/* --------------------------------------------------------------------- */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24 space-y-4">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b1120]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 font-mono">
                  About
                </h2>
              </div>

              <p className="text-sm leading-relaxed">
                I am a <strong>Full Stack Java Developer</strong> specializing in building secure, high-concurrency REST APIs 
                and modern web frontends using <strong>Java, Spring Boot, React.js, and MySQL</strong>.
              </p>

              <blockquote className={`p-4 rounded-2xl border-l-2 border-teal-400 italic text-sm ${
                darkMode ? 'bg-slate-900/40 text-slate-300' : 'bg-slate-100 text-slate-800'
              }`}>
                "{personalInfo.summary}"
              </blockquote>

              <p className="text-sm leading-relaxed">
                Currently, I engineer client solutions at <strong>Groveus Informatics</strong>, where I have maintained 
                a 100% client satisfaction track record by translating complex business requirements into fast, accessible, 
                and reliable software.
              </p>

              <p className="text-sm leading-relaxed">
                My architectural work spans beyond basic CRUD operations: in <strong>CodeArena</strong>, I engineered 
                an isolated OS subprocess runner with process-tree termination, semaphore throttling, and memory protection. 
                In <strong>Meridian</strong>, I designed transactional e-commerce checkout flows deployed on AWS with private 
                subnet Amazon RDS databases.
              </p>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 02: EXPERIENCE */}
            {/* --------------------------------------------------------------------- */}
            <section id="experience" className="scroll-mt-16 lg:scroll-mt-24 space-y-6">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b1120]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 font-mono">
                  Experience
                </h2>
              </div>

              {experienceData.map((exp, idx) => (
                <div 
                  key={idx}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:border-teal-500/40 ${
                    darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className={`text-base font-bold transition-colors ${
                      darkMode ? 'text-slate-100 group-hover:text-teal-300' : 'text-slate-900 group-hover:text-teal-700'
                    }`}>
                      {exp.role} · {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-teal-400 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-500 mb-3">
                    {exp.location} • 100% Client Satisfaction Record
                  </p>

                  <ul className="space-y-2 text-xs leading-relaxed mb-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40">
                    {exp.skillsUsed.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                          darkMode ? 'bg-teal-950/40 text-teal-300 border-teal-800/40' : 'bg-teal-50 text-teal-800 border-teal-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 03: PROJECTS */}
            {/* --------------------------------------------------------------------- */}
            <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 space-y-8">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b1120]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 font-mono">
                  Projects
                </h2>
              </div>

              {/* CodeArena Showcase Card */}
              <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:border-teal-500/40 ${
                darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70' : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}>
                {/* Browser Window Chrome Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-[11px] font-mono text-slate-500">codearena.judge.internal</span>
                  </div>

                  <a 
                    href={codeArena.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-teal-400 hover:underline"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
                  darkMode ? 'text-slate-100' : 'text-slate-900'
                }`}>
                  {codeArena.title}
                </h3>
                <p className="text-xs font-mono text-teal-400 mb-4">
                  {codeArena.subtitle}
                </p>

                {/* Subprocess Specs Badges */}
                <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-xs text-center">
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold">64 KB</div>
                    <div className="text-[10px] text-slate-500">Output Cap</div>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold">11 APIs</div>
                    <div className="text-[10px] text-slate-500">4 Entities</div>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold">25 Tests</div>
                    <div className="text-[10px] text-slate-500">JUnit 5 & MockMvc</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs leading-relaxed mb-4">
                  {codeArena.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
                  {codeArena.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        darkMode ? 'bg-slate-950 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meridian Showcase Card */}
              <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:border-teal-500/40 ${
                darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70' : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}>
                {/* Browser Window Chrome Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-[11px] font-mono text-slate-500">meridian.aws.cloud</span>
                  </div>

                  <a 
                    href={meridian.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-teal-400 hover:underline"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
                  darkMode ? 'text-slate-100' : 'text-slate-900'
                }`}>
                  {meridian.title}
                </h3>
                <p className="text-xs font-mono text-teal-400 mb-4">
                  {meridian.subtitle}
                </p>

                {/* Cloud Architecture Badges */}
                <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-xs text-center">
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold">4 Flows</div>
                    <div className="text-[10px] text-slate-500">Lifecycle</div>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold">10+ APIs</div>
                    <div className="text-[10px] text-slate-500">Spring Boot</div>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold">AWS</div>
                    <div className="text-[10px] text-slate-500">EC2 & RDS</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs leading-relaxed mb-4">
                  {meridian.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
                  {meridian.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        darkMode ? 'bg-slate-950 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 04: SKILLS */}
            {/* --------------------------------------------------------------------- */}
            <section id="skills" className="scroll-mt-16 lg:scroll-mt-24 space-y-6">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b1120]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 font-mono">
                  Skills
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 pb-2">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'backend', label: 'Backend' },
                  { id: 'languages', label: 'Languages' },
                  { id: 'frontend', label: 'Frontend' },
                  { id: 'testing', label: 'Testing' },
                  { id: 'databases', label: 'Databases' },
                  { id: 'core', label: 'Core CS' },
                  { id: 'ai', label: 'AI' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveSkillCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                      activeSkillCategory === cat.id
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : darkMode ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 border border-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-all ${
                      darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-500 leading-tight">
                      {skill.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 05: EDUCATION & CERTIFICATIONS */}
            {/* --------------------------------------------------------------------- */}
            <section id="education" className="scroll-mt-16 lg:scroll-mt-24 space-y-6">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b1120]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 font-mono">
                  Education & Certifications
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider">
                  Academic History
                </h3>
                {educationData.map((edu, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2 text-xs">
                      <span className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        {edu.degree}
                      </span>
                      <span className="text-teal-400 font-mono font-bold shrink-0">
                        {edu.score}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 flex justify-between mt-0.5">
                      <span>{edu.institution}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/60">
                <h3 className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider">
                  Certifications
                </h3>
                {certificationsData.map((cert, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-200">{cert.name}</div>
                    <div className="text-[11px] font-mono text-teal-400 mt-0.5">{cert.issuer}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">{cert.focus}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 06: CONTACT */}
            {/* --------------------------------------------------------------------- */}
            <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 space-y-6 pb-20">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b1120]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 font-mono">
                  Contact
                </h2>
              </div>

              <div className={`p-6 sm:p-7 rounded-2xl border ${
                darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Get In Touch
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Open to full-time roles, software engineering inquiries, and high-concurrency Java backend systems.
                </p>

                {/* Direct info with copy */}
                <div className="space-y-2 mb-6 font-mono text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Email:</span>
                    <div className="flex items-center gap-2">
                      <a href={`mailto:${personalInfo.email}`} className="text-teal-400 hover:underline">
                        {personalInfo.email}
                      </a>
                      <button onClick={handleCopyEmail} className="cursor-pointer text-slate-500 hover:text-white">
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Phone:</span>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${personalInfo.phone}`} className="text-teal-400 hover:underline">
                        {personalInfo.phone}
                      </a>
                      <button onClick={handleCopyPhone} className="cursor-pointer text-slate-500 hover:text-white">
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Message Form */}
                <form onSubmit={handleSendMessage} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your Name"
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-teal-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="Your Email"
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-teal-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <textarea
                    required
                    rows={3}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Project details, role opening, or technical message..."
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-teal-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formSent ? "Opening Email..." : "Send Message"}</span>
                  </button>
                </form>
              </div>

              {/* Colophon Footer */}
              <div className="text-center font-mono text-[11px] text-slate-500 pt-8">
                Designed & Built by Ronit Roy • Java, Spring Boot & React • Deployed on Vercel
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
