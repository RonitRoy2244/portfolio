import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  // Group skills by category
  const categories = [
    { id: 'backend', title: 'Backend & Security' },
    { id: 'languages', title: 'Languages' },
    { id: 'frontend', title: 'Frontend' },
    { id: 'testing', title: 'Testing & QA' },
    { id: 'databases', title: 'Databases' },
    { id: 'core', title: 'Core Concepts' },
    { id: 'ai', title: 'AI-Assisted Dev' },
  ];

  return (
    <section id="skills" className="py-16 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500 mb-8">
          Technical Skills Matrix
        </h2>

        {/* Clean Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {categories.map((cat) => {
            const items = skillsData.items.filter(s => s.category === cat.id);
            return (
              <div key={cat.id} className="space-y-3">
                <h3 className={`text-sm font-semibold tracking-tight pb-2 border-b border-zinc-200 dark:border-zinc-800/60 ${
                  darkMode ? 'text-zinc-200' : 'text-zinc-900'
                }`}>
                  {cat.title}
                </h3>

                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                      <span className={`font-mono font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                        {item.name}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {item.highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
