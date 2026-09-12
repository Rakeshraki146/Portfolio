import React from 'react';
import { Github, ExternalLink, GitBranch, Terminal, Sparkles, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const { githubSection } = portfolioData;

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 p-8 sm:p-12 shadow-xl transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Column */}
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 shadow-md">
                <FolderGit2 className="w-8 h-8" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>OPEN SOURCE & REPOSITORIES</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {githubSection.heading}
                </h2>

                <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                  {githubSection.description}
                </p>

                <div className="flex items-center gap-2 mt-3 font-mono text-xs text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>github.com/Rakeshraki146</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA */}
            <div>
              <a
                href={githubSection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-100 hover:text-white border border-slate-700 hover:border-cyan-500/50 font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5 text-cyan-400" />
                <span>{githubSection.buttonText}</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
