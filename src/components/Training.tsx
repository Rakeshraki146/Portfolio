import React from 'react';
import { Award, Calendar, Building2, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Training: React.FC = () => {
  const { training } = portfolioData;

  return (
    <section id="training" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Professional Training
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Structured skill development and rigorous foundational training in algorithmic problem-solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-4"></div>
        </div>

        {/* Training Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10">
            
            {/* Top row: Organization & Date */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Training Organization
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-200">
                    {training.organization}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                <Calendar className="w-3.5 h-3.5" />
                <span>{training.date}</span>
              </div>
            </div>

            {/* Course Title & Grade Achievement */}
            <div className="pt-6 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {training.title}
                </h3>

                {/* Grade Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-sm shadow-sm">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Achievement: {training.achievement}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {training.description}
              </p>
            </div>

            {/* Core Coverage Pillars */}
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Curriculum Highlights Covered</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {training.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
