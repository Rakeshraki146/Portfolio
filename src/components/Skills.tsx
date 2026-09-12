import React from 'react';
import { Code, Database, Layers, Wrench, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PROGRAMMING LANGUAGES':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'DATABASES & QUERYING':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'LIBRARIES & FRAMEWORKS':
        return <Layers className="w-5 h-5 text-cyan-300" />;
      case 'TOOLS & PLATFORMS':
        return <Wrench className="w-5 h-5 text-emerald-300" />;
      case 'SOFT SKILLS':
        return <Users className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'PROGRAMMING LANGUAGES':
        return 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10';
      case 'DATABASES & QUERYING':
        return 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10';
      case 'LIBRARIES & FRAMEWORKS':
        return 'border-cyan-400/30 text-cyan-300 bg-cyan-400/10';
      case 'TOOLS & PLATFORMS':
        return 'border-emerald-400/30 text-emerald-300 bg-emerald-400/10';
      case 'SOFT SKILLS':
        return 'border-indigo-400/30 text-indigo-300 bg-indigo-400/10';
      default:
        return 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Technical & Soft Skills
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of programming languages, databases, machine learning libraries, and tools mastered.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat: SkillCategory, idx: number) => {
            const isWide = idx === 2; // Libraries & Frameworks can span nicely if needed or sit in grid
            return (
              <div
                key={cat.category}
                className={`group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/40 p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <h3 className="font-display font-bold text-sm tracking-wide text-white uppercase">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/60">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Individual Skill Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill: string) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-200 text-xs font-mono font-medium transition-all transform hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro tech accent footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified on Projects
                  </span>
                  <span className="text-slate-400">#verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
