import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationCertifications({ darkMode }) {
  return (
    <section id="education" className="py-16 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500 mb-8">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className={`text-sm font-semibold tracking-tight pb-2 border-b border-zinc-200 dark:border-zinc-800/60 ${
              darkMode ? 'text-zinc-200' : 'text-zinc-900'
            }`}>
              Academic Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className={`text-sm font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>
                      {edu.degree}
                    </span>
                    <span className="text-xs font-mono text-amber-500 font-semibold shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  <div className="text-xs text-zinc-500 flex items-center justify-between">
                    <span>{edu.institution}</span>
                    <span className="font-mono">{edu.period}</span>
                  </div>

                  {edu.highlights && (
                    <p className={`text-xs leading-relaxed pt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {edu.highlights[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className={`text-sm font-semibold tracking-tight pb-2 border-b border-zinc-200 dark:border-zinc-800/60 ${
              darkMode ? 'text-zinc-200' : 'text-zinc-900'
            }`}>
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className={`text-sm font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>
                      {cert.name}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-amber-500">
                    {cert.issuer}
                  </div>

                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
