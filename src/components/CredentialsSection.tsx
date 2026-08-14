import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './AnimatedSection';
import {
  resumeData,
  certificationsData,
  CertificationItem
} from '../data/credentialsData';
import {
  Download,
  ArrowRight,
  X
} from 'lucide-react';
import resumePdf from '../assets/images/rance_coon_resume.pdf';

interface CredentialsSectionProps {
  onOpenBooking: () => void;
  activeTab?: string;
  onTabChange?: (tab: any) => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = () => {
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  const handleDownloadResume = () => {
    const a = document.createElement('a');
    a.href = resumePdf;
    a.download = 'Ray_Francis_Coon_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="credentials" className="py-16 bg-[#0B0D12] text-white relative z-10 scroll-mt-20 border-t border-stone-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harvard Resume Document Header */}
        <div className="border-b-2 border-stone-700 pb-5 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white uppercase">
                {resumeData.name}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#E85D26] tracking-wide mt-1 uppercase font-semibold">
                {resumeData.title} &nbsp;·&nbsp; <span className="text-stone-400 font-normal">{resumeData.location}</span>
              </p>
            </div>
            
            <div className="text-xs font-mono text-stone-400 text-left sm:text-right">
              <div><a href={`mailto:${resumeData.email}`} className="hover:text-[#E85D26] transition-colors">{resumeData.email}</a></div>
              <div className="text-[#E85D26]">Whatsapp: {resumeData.phone}</div>
            </div>
          </div>
        </div>
        {/* Unified Harvard Resume Sheet */}
        <div className="space-y-8 font-sans">
          
          {/* SECTION 1: Executive Summary */}
          <AnimatedSection yOffset={36} delay={0.1}>
            <div id="resume-summary" className="scroll-mt-24">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E85D26] border-b border-stone-800 pb-1 mb-2.5">
                Executive Summary
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                {resumeData.summary}
              </p>
            </div>
          </AnimatedSection>

          {/* SECTION 2: Work Experience */}
          <AnimatedSection yOffset={40} delay={0.15}>
            <div id="resume-experience" className="scroll-mt-24">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E85D26] border-b border-stone-800 pb-1 mb-3.5">
                Work Experience
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white">
                        <span>{exp.role}</span>
                        <span className="text-stone-400 font-normal"> &nbsp;|&nbsp; </span>
                        <span className="text-[#E85D26] font-semibold">{exp.company}</span>
                        {exp.location && <span className="text-stone-400 font-normal"> ({exp.location})</span>}
                      </div>
                    </div>
                    {exp.bullets && exp.bullets.length > 0 ? (
                      <ul className="list-disc list-outside pl-4 space-y-1 text-stone-300 text-xs leading-relaxed font-normal">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-stone-300 text-xs leading-relaxed pl-3 border-l border-stone-700/80">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* SECTION 3: Education & Certifications */}
          <AnimatedSection yOffset={44} delay={0.15}>
            <div id="resume-certifications" className="scroll-mt-24">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E85D26] border-b border-stone-800 pb-1 mb-3.5">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                {/* Education */}
                <div className="pb-3 border-b border-stone-800/50">
                  <div className="font-bold text-white text-xs sm:text-sm">
                    {resumeData.education.degree}
                  </div>
                  <div className="text-stone-400 text-xs font-mono">
                    {resumeData.education.school}
                  </div>
                </div>

                {/* Certifications List */}
                <div className="space-y-3">
                  {certificationsData.map((cert) => (
                    <div key={cert.id} className="space-y-1 pb-2 border-b border-stone-800/40 last:border-0 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                        <div className="font-bold text-white">
                          <span>{cert.title}</span>
                          <span className="text-stone-400 font-normal"> &nbsp;—&nbsp; </span>
                          <span className="text-[#E85D26] font-medium">{cert.issuer}</span>
                        </div>
                        <div className="text-stone-400 font-mono text-xs">{cert.year}</div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-0.5">
                        <p className="text-stone-300 text-xs leading-relaxed font-light pr-2">
                          {cert.description}
                        </p>
                        {cert.id !== 'google-pm' && (
                          <button
                            onClick={() => setActiveCertificate(cert)}
                            className="text-xs font-mono text-[#E85D26] hover:text-white transition-colors cursor-pointer underline underline-offset-2 shrink-0 inline-flex items-center gap-1"
                          >
                            <span>[ View Certificate ]</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* SECTION 4: Skills & Tech Stack */}
          <AnimatedSection yOffset={40} delay={0.15}>
            <div id="resume-skills" className="scroll-mt-24">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E85D26] border-b border-stone-800 pb-1 mb-2.5">
                Skills and Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {resumeData.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-200 font-mono text-[11px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* SECTION 5: Professional References */}
          <AnimatedSection yOffset={44} delay={0.2}>
            <div id="resume-references" className="scroll-mt-24 space-y-6">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E85D26] border-b border-stone-800 pb-1 mb-3.5">
                  References
                </h3>
                <div className="space-y-4">
                  {resumeData.references.map((ref, idx) => (
                    <div key={idx} className="space-y-1 pb-3 border-b border-stone-800/50 last:border-0 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                        <div className="font-bold text-white">
                          <span>{ref.name}</span>
                          <span className="text-stone-400 font-normal"> &nbsp;•&nbsp; </span>
                          <span className="text-[#E85D26]">{ref.role}</span>
                        </div>
                        <a
                          href={`tel:${ref.phone}`}
                          className="text-stone-400 hover:text-[#E85D26] font-mono text-xs transition-colors cursor-pointer underline underline-offset-2 mt-0.5 sm:mt-0"
                        >
                          {ref.phone}
                        </a>
                      </div>

                      <p className="text-stone-300 text-xs font-mono">
                        {ref.company} &nbsp;•&nbsp; {ref.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DISC Profile Block */}
              {resumeData.discProfile && (
                <div id="resume-disc" className="scroll-mt-24 pt-5 border-t border-stone-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{resumeData.discProfile.title}</span>
                        <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#E85D26]/20 text-[#E85D26] border border-[#E85D26]/30 rounded">
                          {resumeData.discProfile.badge}
                        </span>
                      </h4>
                      <p className="text-xs text-stone-400 font-light mt-0.5">
                        {resumeData.discProfile.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {resumeData.discProfile.traits.map((traitItem, tIdx) => (
                      <div
                        key={tIdx}
                        className="bg-[#14171F]/80 border border-stone-800/90 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#E85D26]/40 transition-all duration-200"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                              {traitItem.trait}
                            </span>
                            <span className="text-sm font-mono font-bold text-white">
                              {traitItem.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-stone-800 rounded-full h-1.5 mb-2 overflow-hidden">
                            <div
                              className="bg-[#E85D26] h-1.5 rounded-full transition-all duration-500"
                              style={{ width: `${traitItem.percentage}%` }}
                            />
                          </div>
                          <div className="text-[11px] font-semibold text-[#E85D26] mb-1">
                            {traitItem.label}
                          </div>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            {traitItem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* BOTTOM ACTION FOOTER: Small Download Button on Bottom Left */}
        <div className="mt-10 pt-5 border-t border-stone-800 flex items-center justify-start">
          {/* Bottom Left Small Download Button */}
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-stone-900/80 hover:bg-[#E85D26]/20 border border-stone-700 hover:border-[#E85D26] text-stone-300 hover:text-white text-xs font-mono font-medium transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            title="Download Resume as text file"
          >
            <Download className="w-3.5 h-3.5 text-[#E85D26]" />
            <span>Download Resume</span>
          </button>
        </div>

      </div>

      {/* Official Certificate Preview Modal */}
      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0F1118] border border-amber-500/30 text-white shadow-2xl p-6 sm:p-8 my-6 rounded-xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveCertificate(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 hover:border-amber-500/50 hover:bg-black text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer z-10 shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border border-amber-500/30 p-5 sm:p-6 text-center space-y-4 rounded-lg">
                <div className="text-xs font-mono text-amber-400 tracking-widest uppercase">
                  OFFICIAL VERIFIED ACCREDITATION
                </div>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-amber-200 uppercase tracking-wide">
                  {activeCertificate.title}
                </h3>
                <div className="text-xs font-mono text-stone-400">
                  ISSUED BY: <span className="text-white font-bold">{activeCertificate.issuer}</span> ({activeCertificate.year})
                </div>

                {/* Single Image */}
                {activeCertificate.image && (
                  <div className="my-4 rounded-lg overflow-hidden border border-amber-500/20 bg-black/60 p-2 flex items-center justify-center">
                    <img
                      src={activeCertificate.image}
                      alt={activeCertificate.title}
                      className="max-h-[50vh] w-auto object-contain rounded shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                {/* Multiple Images (e.g. n8n badges) */}
                {activeCertificate.images && activeCertificate.images.length > 0 && (
                  <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCertificate.images.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-amber-500/20 bg-black/60 p-3 flex flex-col items-center justify-center">
                        <img
                          src={img}
                          alt={`${activeCertificate.title} Badge ${idx + 1}`}
                          className="max-h-[220px] w-auto object-contain rounded shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-xs text-stone-300 max-w-lg mx-auto leading-relaxed pt-2 border-t border-amber-500/20">
                  {activeCertificate.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
