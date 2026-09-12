import React from 'react';
import { Award, Calendar, ExternalLink, Building, Sparkles, Linkedin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified course completions and certifications across programming, systems, web, and artificial intelligence, verified on LinkedIn.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-4"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/50 p-6 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 text-cyan-400 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-400 font-mono">
                  <Building className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                </div>

                {/* LinkedIn verification badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Available on LinkedIn</span>
                </div>
              </div>

              {/* Action Button: Opens LinkedIn Directly */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold transition-all group-hover:shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
