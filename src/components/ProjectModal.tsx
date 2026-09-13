import React, { useEffect } from 'react';
import { X, Github, Calendar, Cpu, Layers, Database, Cloud, BookOpen, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-xl animate-fadeIn">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-800 pb-6 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
            {project.mlFeature && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                <Cpu className="w-3.5 h-3.5" />
                ML Powered
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {project.title}
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Action Links (Live Demo removed as requested) */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-8">
          
          {/* Tech Stack Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-red-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-emerald-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Solution Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* ML Feature Breakdown (If present) */}
          {project.mlFeature && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30">
              <div className="flex items-center gap-2 text-cyan-300 font-display font-bold text-sm mb-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Machine Learning Valuation Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                {project.mlFeature.summary}
              </p>

              {/* Visual Pipeline Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-center">
                {/* Inputs */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase mb-2">Input Features</div>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {project.mlFeature.inputs.map((inp) => (
                      <span key={inp} className="px-2 py-1 rounded bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800">
                        {inp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Model */}
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-cyan-200">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase">Model Algorithm</div>
                  <div className="text-xs font-bold font-mono mt-1">Extra Trees Regressor</div>
                  <div className="text-[10px] text-slate-400 mt-1">Scikit-learn Ensemble</div>
                </div>

                {/* Outputs */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase mb-2">Predicted Outputs</div>
                  <div className="flex flex-col gap-1.5">
                    {project.mlFeature.outputs.map((out) => (
                      <span key={out} className="px-2 py-1 rounded bg-slate-950 text-[11px] font-mono text-emerald-300 border border-emerald-500/20">
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Database & Deployment Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.database && (
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-semibold uppercase mb-1">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Database Architecture</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.database}
                </p>
              </div>
            )}

            {project.deployment && (
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-semibold uppercase mb-1">
                  <Cloud className="w-4 h-4 text-cyan-400" />
                  <span>Deployment Environment</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.deployment}
                </p>
              </div>
            )}
          </div>

          {/* What I Learned */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Key Technical Learnings</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.whatILearned}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
