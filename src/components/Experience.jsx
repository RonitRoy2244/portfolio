import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>03 // Industry Track</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional Experience
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Delivering production client websites with peak performance and uncompromising engineering quality.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800/80 shadow-xl shadow-black/20' 
                  : 'bg-white border-slate-200/90 shadow-lg shadow-slate-200/50'
              }`}
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 font-mono text-xs">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                    darkMode ? 'bg-emerald-950/50 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {exp.status}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Impact Callout */}
              <div className={`p-4 rounded-2xl mb-6 flex items-center gap-3 border ${
                darkMode ? 'bg-cyan-950/20 border-cyan-800/30 text-cyan-300' : 'bg-blue-50/70 border-blue-200 text-blue-900'
              }`}>
                <Award className="w-5 h-5 shrink-0 text-cyan-400" />
                <p className="text-xs sm:text-sm font-medium">
                  <strong>100% Client Satisfaction Record:</strong> Successfully converted rigorous client design mockups into high-speed, accessible web applications.
                </p>
              </div>

              {/* Exact Bullets from Resume */}
              <div className="space-y-3 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-cyan-500/10 text-cyan-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Pill Row */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Core Tech:</span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                      darkMode ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
