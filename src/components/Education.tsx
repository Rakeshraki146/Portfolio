import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal engineering and science curriculum providing rigorous grounding in Computer Science, Mathematics, and Analytical Thinking.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-4"></div>
        </div>

        {/* Timeline & Cards Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Education Entries */}
          {education.map((item) => (
            <div
              key={item.degree}
              className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Header: Degree & Score Badge */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {item.degree}
                    </h3>
                    {item.field && (
                      <div className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                        {item.field}
                      </div>
                    )}
                  </div>
                </div>

                {/* Score Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-950 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-sm shadow-sm">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{item.gradeType}: {item.grade}</span>
                </div>
              </div>

              {/* Institution & Metadata */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
                <div className="font-semibold text-slate-200">
                  {item.institution}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {item.details && (
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3">
                  {item.details}
                </p>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
