import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  CheckCircle, 
  Cpu, 
  Sparkles, 
  Search,
  Layers,
  Terminal,
  ShieldAlert,
  BrainCircuit
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.items.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'backend': return Server;
      case 'languages': return Code;
      case 'frontend': return Layers;
      case 'testing': return CheckCircle;
      case 'databases': return Database;
      case 'core': return Cpu;
      case 'ai': return BrainCircuit;
      default: return Sparkles;
    }
  };

  const getLevelBadge = (level) => {
    if (level === 'Expert') {
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    }
    if (level === 'Advanced') {
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    }
    return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span>02 // Core Competencies</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Technical Stack & Systems Knowledge
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              From low-level JVM concurrency & subprocesses to reactive modern React frontends.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Spring, JWT)..."
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-700/80 text-white placeholder-slate-500' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20 scale-[1.02]'
                  : darkMode
                    ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill, idx) => {
            const Icon = getCategoryIcon(skill.category);
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 hover:border-cyan-500/30 shadow-md shadow-black/10' 
                    : 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-blue-400 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${
                      darkMode ? 'bg-slate-800 text-cyan-400' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`font-bold text-sm leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border whitespace-nowrap ${getLevelBadge(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                
                <p className={`text-xs mt-2 font-mono leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {skill.highlight}
                </p>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 font-mono text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-2 text-cyan-400 text-xs underline font-mono cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
