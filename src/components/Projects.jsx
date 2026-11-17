import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Code2, ShieldCheck, Database, Cloud } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const [activeProjectTab, setActiveProjectTab] = useState({
    codearena: 'overview',
    meridian: 'overview'
  });

  return (
    <section id="projects" className="py-16 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500 mb-8">
          Featured Projects & Architecture
        </h2>

        <div className="space-y-16">
          
          {/* Project 1: CodeArena */}
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/60 pb-4">
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  CodeArena — Online Code Judge & Competitive Programming Platform
                </h3>
                <p className="text-xs font-mono text-zinc-500 mt-1">
                  Java 17 · Spring Boot · Spring Security · JWT · Hibernate (JPA) · MySQL · JUnit 5 · MockMvc · React.js · Vite
                </p>
              </div>

              <a
                href="https://github.com/RonitRoy2244"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors shrink-0 ${
                  darkMode ? 'text-zinc-400 hover:text-amber-400' : 'text-zinc-600 hover:text-amber-600'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Core Overview Bullets from Resume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> OS Subprocess Isolation & Safety
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Runs submitted Java and JavaScript code in isolated OS subprocesses with strict time limits, 
                  process-tree termination to prevent zombie threads, and an enforced <strong>64 KB output buffer cap</strong> to 
                  eliminate denial-of-service risks.
                </p>
              </div>

              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" /> Concurrency & Rate Limiting
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Implemented per-user rate limiting (1 submission per 5 seconds) and a <strong>semaphore capping concurrent runs at 3</strong>. 
                  Hidden test cases are verified entirely server-side and never exposed to the client.
                </p>
              </div>

              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> 11 REST APIs Across 4 Entities
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Designed 11 REST API endpoints on MySQL across 4 relational entities (<code>User</code>, <code>Problem</code>, <code>Submission</code>, <code>TestCase</code>), 
                  secured with stateless JWT Bearer tokens, BCrypt hashing, and role-based access control (RBAC).
                </p>
              </div>

              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> 25 Automated Tests
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Wrote <strong>25 automated tests</strong> with JUnit 5 and Spring MockMvc covering authentication flows, problem management, 
                  code submissions, and subprocess runner error handling.
                </p>
              </div>

            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Java 17', 'Spring Boot', 'Spring Security', 'JWT Auth', 'Hibernate JPA', 'MySQL', 'JUnit 5', 'Spring MockMvc', 'React.js', 'Vite', 'Subprocess Runner'].map((t, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    darkMode ? 'bg-zinc-900 text-zinc-400 border border-zinc-800' : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* Project 2: Meridian */}
          <div className="space-y-6 pt-8 border-t border-zinc-200 dark:border-zinc-800/60">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/60 pb-4">
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  Meridian — Full-Stack E-Commerce Platform
                </h3>
                <p className="text-xs font-mono text-zinc-500 mt-1">
                  Java · Spring Boot · Spring Security · JWT · Hibernate (JPA) · MySQL · React.js · Bootstrap · AWS (EC2, RDS) · Nginx
                </p>
              </div>

              <a
                href="https://github.com/RonitRoy2244"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors shrink-0 ${
                  darkMode ? 'text-zinc-400 hover:text-amber-400' : 'text-zinc-600 hover:text-amber-600'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Core Overview Bullets from Resume */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2">
                  4 Core Business Flows
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Designed and built an end-to-end e-commerce flow covering user registration, product catalog search & filtering, 
                  cart state persistence, and atomic order checkout with <code>@Transactional</code> rollback consistency.
                </p>
              </div>

              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2">
                  10+ RESTful APIs
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Engineered 10+ RESTful API endpoints with Spring Boot and Hibernate (JPA) on MySQL, secured with stateless 
                  JWT authentication and BCrypt password hashing.
                </p>
              </div>

              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" /> AWS Cloud Deployment
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Developed a responsive React.js frontend with Bootstrap, and deployed the production stack onto AWS EC2 with an 
                  Nginx reverse proxy and Amazon RDS MySQL isolated by security groups.
                </p>
              </div>

            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Java', 'Spring Boot', 'Spring Security', 'Hibernate JPA', 'MySQL', 'JWT Auth', 'React.js', 'Bootstrap', 'AWS EC2', 'AWS RDS', 'Nginx'].map((t, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    darkMode ? 'bg-zinc-900 text-zinc-400 border border-zinc-800' : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
