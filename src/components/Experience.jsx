import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-16 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500 mb-8">
          Work Experience
        </h2>

        {/* Roles List */}
        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Meta Column */}
              <div className="md:col-span-4 space-y-1">
                <h3 className={`text-base font-semibold ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {exp.role}
                </h3>
                <div className={`text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {exp.company}
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  {exp.location}
                </div>
                <div className="pt-1">
                  <span className={`inline-flex items-center text-xs font-mono px-2 py-0.5 rounded ${
                    darkMode ? 'bg-zinc-900 text-amber-400 border border-zinc-800' : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description & Bullets Column */}
              <div className="md:col-span-8 space-y-4">
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className={`text-sm leading-relaxed flex items-start gap-2.5 ${
                      darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      <span className="text-amber-500 font-bold mt-1 text-xs">―</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        darkMode 
                          ? 'bg-zinc-900/80 text-zinc-400 border border-zinc-800' 
                          : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                      }`}
                    >
                      {skill}
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
