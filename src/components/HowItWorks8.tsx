import React from 'react';
import { motion } from 'motion/react';
import { AnimatedSection } from './AnimatedSection';

export const HowItWorks8: React.FC = () => {
  const stepsData = [
    {
      num: '01',
      tag: 'GATHERING INFORMATION',
      title: 'Information Gathering & 30 Minute Call',
      description: "After booking a call by answering the form I'll hop on a 30 minute call with you based on the time you've scheduled in order to assess what your business needs.",
      highlights: ['30 Minute Strategy Session', 'Form Assessment', 'Needs Analysis'],
      accent: 'from-[#D94E10] to-[#E85D26]'
    },
    {
      num: '02',
      tag: '24 HOUR TURNAROUND',
      title: 'FREE Business Audit with a 24 Hour Turnaround',
      description: 'After the call, within 24 hours you will receive a PDF with a full Business Audit that explains what your struggle is, and how I can fix that along with how much it could potentially cost, and how long it will take.',
      highlights: ['PDF Audit Report', 'Cost & Timeline Estimate', 'Identified Solutions'],
      accent: 'from-[#E85D26] to-[#F57C00]'
    },
    {
      num: '03',
      tag: 'ONBOARDING & EXECUTION',
      title: 'Kick-off Call',
      description: 'If you wish to continue with the proposed solution, we will hop on a Kick Off Call. You will receive an Invoice, a Contract, and we can discuss both during the kick off call along with any other details such as account access if needed.',
      highlights: ['Contract & Invoice', 'Account Onboarding', 'Action Plan'],
      accent: 'from-[#F57C00] to-emerald-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-gradient-to-b from-[#0A0C12] via-[#0E111C] to-[#0A0C12] border-b border-white/[0.08] relative overflow-hidden">
      {/* Ambient Radial Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D94E10]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight mb-3">
              3 Steps That Will Allow Your Business To <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D94E10] via-[#E85D26] to-[#F57C00]">Grow</span>
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
              A simple, step by step process explaining how I can help your business scale.
            </p>
          </div>

          {/* SEQUENTIAL VERTICAL STREAM (No cards, cardless, scroll-driven) */}
          <div className="relative">
            <div className="space-y-16 sm:space-y-24 relative z-10">
              {stepsData.map((step, idx) => {
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 52, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="flex flex-row gap-4 sm:gap-10 items-start group relative"
                  >
                    {/* Connecting Spine Line to Next Step Node only */}
                    {idx < stepsData.length - 1 && (
                      <div className="absolute left-6 sm:left-12 top-6 sm:top-12 -bottom-16 sm:-bottom-24 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#D94E10] via-[#E85D26] to-[#F57C00] opacity-40 pointer-events-none z-0" />
                    )}
                    {/* Illuminated Node Connector Anchor */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-24 sm:h-24 rounded-2xl bg-[#0D0E14] border border-white/10 group-hover:border-[#D94E10] transition-colors duration-300 flex flex-col items-center justify-center shadow-2xl relative z-10">
                        <span className={`text-base sm:text-2xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r ${step.accent}`}>
                          {step.num}
                        </span>
                        <span className="hidden sm:block text-[9px] font-mono font-medium text-stone-500 uppercase tracking-widest mt-0.5">
                          Step
                        </span>
                      </div>

                      {/* Subtle Ambient Pulse Ring behind node */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                    </div>

                    {/* Content Block (Cardless, pure whitespace and clean typography) */}
                    <div className="flex-1 space-y-3 pt-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-mono font-medium text-[#E85D26] uppercase tracking-widest">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight group-hover:text-[#E85D26] transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};
