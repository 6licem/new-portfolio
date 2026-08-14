import React from 'react';
import { X, CheckCircle2, TrendingUp, Cpu, Calendar, Star, Layers, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenBooking }) => {
  if (!project) return null;

  return (
    <div id="project-detail-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#14171F] border border-white/10 text-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto flex flex-col relative">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#14171F]/95 border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-sm text-[9px] font-bold uppercase tracking-[0.15em] bg-[#D94E10] text-white shadow-sm">
              {project.clientCategory} Funnel
            </span>
            <span className="text-xs text-stone-300 font-medium">Built by Rance Coon</span>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Title & Hero Banner */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">{project.title}</h2>
            <p className="text-sm text-stone-300 font-light leading-relaxed">{project.summary}</p>
          </div>

          {/* Metric Highlight Box */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">{project.metricLabel}</div>
              <div className="text-3xl font-extrabold text-[#E85D26]">{project.metric}</div>
            </div>
            <div className="p-3 rounded-full bg-[#D94E10]/20 text-[#E85D26] border border-[#D94E10]/30">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          {/* Image Graphic */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-stone-900 aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-bold text-white border border-white/10">
              GHL Architecture Preview
            </div>
          </div>

          {/* Funnel Map & Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Pages Included */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#E85D26]" />
                <span>Pages & Steps Included:</span>
              </h3>
              <ul className="space-y-2">
                {project.pagesIncluded.map((page, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                    <span className="w-5 h-5 rounded-full bg-[#D94E10] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{page}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GHL Features & Automations */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#E85D26]" />
                <span>GHL Engine Features:</span>
              </h3>
              <ul className="space-y-2">
                {project.ghlFeaturesUsed.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D26] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-stone-300 italic">"{project.testimonialExcerpt}"</p>
            <div className="text-[11px] text-white font-semibold pt-1">
              — {project.clientName}, <span className="text-stone-400 font-normal">{project.clientRole}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#14171F] border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-300 font-light">Want a similar GoHighLevel funnel built for your brand?</p>
          <button
            id="modal-request-build-btn"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D94E10] hover:bg-[#E85D26] text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-[#D94E10]/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Request This Build</span>
          </button>
        </div>

      </div>
    </div>
  );
};
