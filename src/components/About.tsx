import React from 'react';
import { Brain, Code2, Lightbulb, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const cardIcons = [
    <Brain className="w-6 h-6 text-cyan-400" />,
    <Code2 className="w-6 h-6 text-emerald-400" />,
    <Lightbulb className="w-6 h-6 text-cyan-300" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & INTERESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {about.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700/80 transition-colors"
              >
                {para}
              </p>
            ))}

            {/* Quick Context Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Program</div>
                  <div className="text-sm font-semibold text-white">B.Tech in CSE (2024 – Present)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Institution</div>
                  <div className="text-sm font-semibold text-white">Lovely Professional University</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Highlight Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-1">
              Core Focus Areas
            </div>

            {about.highlightCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {cardIcons[index]}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
