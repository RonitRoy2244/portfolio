import React from 'react';
import { 
  Terminal, 
  ShoppingCart, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Cloud, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>04 // Flagship Projects</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured Engineering Systems
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deep-dive into production-ready architectures built with Spring Boot, React, MySQL, and cloud infrastructure.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800/80 shadow-2xl shadow-black/30' 
                  : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/60'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {project.id === 'codearena' ? '11 REST Endpoints · 25 Automated Tests' : '10+ REST Endpoints · AWS Deployed'}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                  <p className="text-base font-semibold text-cyan-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                      darkMode 
                        ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={project.id === 'codearena' ? '#codearena-demo' : '#meridian-demo'}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20"
                  >
                    <span>{project.id === 'codearena' ? 'Test Sandbox' : 'Inspect Flows'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3.5 mb-8">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Architectural Badges & Tech Stack */}
              <div className="pt-6 border-t border-slate-800/60">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Technologies & Frameworks
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-xl text-xs font-mono border transition-all ${
                        darkMode 
                          ? 'bg-slate-800/80 border-slate-700/80 text-cyan-300 hover:border-cyan-500/40' 
                          : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-blue-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
