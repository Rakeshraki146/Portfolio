import React, { useState } from 'react';
import { Github, Sparkles, Calendar, ArrowRight, Layers, Cpu, Eye } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world systems spanning machine learning regression, cloud database persistence, and Operating System deadlock detection algorithms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-4"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/50 p-7 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Header: Date + Tech tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.date}
                  </span>

                  {project.mlFeature && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                      <Cpu className="w-3.5 h-3.5" />
                      ML Valuation
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{project.title}</span>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* ML Feature Callout (if present) */}
                {project.mlFeature && (
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs text-slate-300">
                    <span className="font-semibold text-cyan-300 block mb-1">
                      🤖 Machine Learning Engine:
                    </span>
                    {project.mlFeature.summary}
                    <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                      <span className="text-slate-500">Inputs:</span>
                      {project.mlFeature.inputs.map((inp) => (
                        <span key={inp} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-200">
                          {inp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features Preview */}
                <div className="mt-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Features
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {project.keyFeatures.slice(0, 6).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {project.keyFeatures.length > 6 && (
                      <div className="text-[11px] font-mono text-cyan-400 pt-1">
                        + {project.keyFeatures.length - 6} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Technologies List */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    <span>Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Details and View GitHub (Live Demo removed as requested) */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-cyan-500/40 transition-all"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
