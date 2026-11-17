import React from 'react';
import { 
  Shield, 
  Cpu, 
  Database, 
  CheckCircle2, 
  Lock, 
  Terminal, 
  Workflow, 
  Award,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ darkMode }) {
  const pillars = [
    {
      icon: Lock,
      title: "Stateless Security & RBAC",
      desc: "Architecting zero-trust Spring Security filter chains with stateless JWT authentication, BCrypt password hashing, and role-based endpoint isolation."
    },
    {
      icon: Cpu,
      title: "OS Subprocess Sandboxing",
      desc: "Safely executing arbitrary code in isolated OS subprocesses with semaphore-capped concurrency (3 max), time guards, and 64 KB buffer caps."
    },
    {
      icon: Database,
      title: "JPA & Relational Integrity",
      desc: "Designing normalized MySQL schemas, Hibernate entity relationships, criteria queries, and ACID transactional boundaries."
    },
    {
      icon: CheckCircle2,
      title: "Automated QA & MockMvc",
      desc: "Writing comprehensive JUnit 5 and Spring MockMvc test suites (25+ automated tests) covering controllers, services, and isolated runners."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>01 // About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Bridging High-Throughput Java Backends with Responsive Web UIs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Summary Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800/80 shadow-xl shadow-black/20' 
                : 'bg-white border-slate-200/90 shadow-lg shadow-slate-200/50'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Professional Summary
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Full Stack Java Developer · Groveus Informatics
                  </p>
                </div>
              </div>

              <blockquote className={`text-base sm:text-lg leading-relaxed italic border-l-2 border-cyan-500 pl-4 py-1 my-4 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                "{personalInfo.summary}"
              </blockquote>

              <p className={`text-sm sm:text-base leading-relaxed mt-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                My engineering focus centers on building robust, scalable digital platforms. From designing 
                isolated runtime environments for competitive programming platforms (CodeArena) to architecting 
                multi-tier cloud-deployed e-commerce systems (Meridian), I prioritize security, memory-safety, and test-driven reliability.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block">Current Location:</span>
                  <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Siliguri, India
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Education:</span>
                  <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    B.Tech CSE (2020-2024)
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">AI Engineering:</span>
                  <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Claude & Antigravity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-cyan-500/30' 
                      : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    darkMode ? 'bg-slate-800 text-cyan-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
