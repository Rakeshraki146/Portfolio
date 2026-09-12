import React from 'react';
import { FileText, Eye, Download, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const { resume } = portfolioData;

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-slate-800/90 hover:border-cyan-500/40 p-8 sm:p-12 shadow-2xl transition-all overflow-hidden">
          {/* Subtle Cyber Grid Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                {resume.heading}
              </h2>

              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {resume.description}
              </p>

              {/* Quick Resume Highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  B.Tech CSE Background
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  ML & Concurrency Projects
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Certifications
                </span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={resume.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href={resume.resumeUrl}
                download="B_Rakesh_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/50 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
