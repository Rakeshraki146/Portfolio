import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    if (personal.resumeUrl && personal.resumeUrl !== '#') {
      window.open(personal.resumeUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Smooth scroll to the resume section with clear preview options
      document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI & ML Specialization • Lovely Professional University</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-3">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-200">
                {personal.name}
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-2 font-display">
              {personal.role}
            </h2>

            {/* Secondary line */}
            <p className="text-base sm:text-lg font-mono text-cyan-400 font-medium mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 inline" />
              <span>{personal.secondaryLine}</span>
            </p>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {personal.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm transition-all transform hover:-translate-y-0.5 backdrop-blur-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">
                Connect:
              </span>
              <a
                href={personal.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all transform hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all transform hover:-translate-y-1"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="ml-auto text-xs text-slate-400 font-mono hidden sm:block">
                <span>📍 Phagwara, Punjab</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Visual / Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center z-10">
            <div className="relative w-full max-w-md">
              {/* Outer decorative tech brackets & ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75"></div>
              
              <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-5 shadow-2xl">
                {/* Tech header bar inside card */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                    <span className="ml-2 text-cyan-400 font-semibold">rakesh.ai_pipeline</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>

                {/* Portrait image with cyber-frame */}
                <div className="relative group overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950 aspect-[4/4.5] flex items-center justify-center">
                  <img
                    src={personal.profilePhoto}
                    alt="B Rakesh"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Corner cyber reticles */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400"></div>

                  {/* Dynamic caption banner over photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-display font-bold text-white">B Rakesh</div>
                        <div className="text-[10px] text-cyan-400 font-mono">B.Tech CSE • LPU</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-mono text-emerald-400">Status</div>
                        <div className="text-[11px] font-semibold text-slate-200">Open to Work</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech stats bar beneath portrait */}
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <div className="text-xs font-mono text-cyan-400 font-bold">Python & C</div>
                    <div className="text-[10px] text-slate-400">Core Languages</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <div className="text-xs font-mono text-emerald-400 font-bold">Scikit-Learn</div>
                    <div className="text-[10px] text-slate-400">ML Regressor</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <div className="text-xs font-mono text-cyan-300 font-bold">6.32 CGPA</div>
                    <div className="text-[10px] text-slate-400">Undergraduate</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
