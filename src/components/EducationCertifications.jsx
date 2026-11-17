import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationCertifications({ darkMode }) {
  return (
    <section id="education" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>08 // Qualifications & Credentials</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Education & Professional Certifications
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Solid academic computer science foundation backed by verified professional full-stack credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`text-lg font-bold font-mono flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Academic History
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800/80 shadow-md shadow-black/10' 
                      : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-base text-cyan-400">
                      {edu.degree}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold w-fit border ${
                      darkMode ? 'bg-cyan-950/40 border-cyan-800 text-cyan-300' : 'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                      {edu.score}
                    </span>
                  </div>

                  <div className={`text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    {edu.institution}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {edu.location}
                    </span>
                  </div>

                  {edu.highlights && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-800/50">
                      {edu.highlights.map((h, hIdx) => (
                        <p key={hIdx} className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {h}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className={`text-lg font-bold font-mono flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Award className="w-5 h-5 text-indigo-400" />
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800/80 shadow-md shadow-black/10' 
                      : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.name}
                  </h4>

                  <div className="text-xs font-mono font-semibold text-cyan-400 mb-3">
                    Issued by: {cert.issuer}
                  </div>

                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Development Proficiency Badge */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900/80 to-indigo-950/40 border-indigo-500/30' : 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  AI-Assisted Engineering Workflow
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Proficient in utilizing Claude and Antigravity to accelerate full-stack delivery, code reviews, automated test generation, and distributed architecture blueprints.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
