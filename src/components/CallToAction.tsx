import React from 'react';
import { motion } from 'motion/react';
import { BookACallButton } from './BookACallButton';
import { AnimatedSection } from './AnimatedSection';
import { SocialProof4 } from './SocialProof4';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <section id="book-call" className="py-20 bg-gradient-to-b from-[#0A0C12] via-[#1A1310] to-[#0A0C12] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* High impact warm sunset/coral gradient glow behind final CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D94E10]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D94E10]/70 to-transparent" />
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-3">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D94E10] via-[#E85D26] to-[#F57C00]">scale your business?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed mb-8">
            Book a 30-minute strategy call to discuss your business and get a custom automation plan.
          </p>

          {/* The 3 Options Decision Framework - Clean flat list without cards */}
          <div className="mb-10 text-left max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-mono tracking-widest text-[#E85D26] uppercase font-medium bg-[#D94E10]/10 border border-[#D94E10]/20 px-3 py-1 rounded-full">
                Your 3 Options Moving Forward
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block font-medium">Option 01</span>
                <h3 className="text-sm font-semibold text-white">Do Nothing</h3>
                <p className="text-xs text-stone-400 font-normal leading-relaxed">
                  Keep doing everything manually, losing hours to repetitive tasks, and staying stuck.
                </p>
              </div>

              {/* Option 2 */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block font-medium">Option 02</span>
                <h3 className="text-sm font-semibold text-white">Do It Yourself</h3>
                <p className="text-xs text-stone-400 font-normal leading-relaxed">
                  Spend dozens of hours figuring out n8n, monday.com, and GoHighLevel on your own.
                </p>
              </div>

              {/* Option 3 */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#E85D26] uppercase tracking-wider block font-medium">Option 03 (Recommended)</span>
                <h3 className="text-sm font-semibold text-white">Let Me Build It For You</h3>
                <p className="text-xs text-stone-300 font-normal leading-relaxed">
                  Book a quick 30-minute call. Get a free business audit within 24 hours after the call showing exactly what to automate and how.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights with Pill Badge */}
          <div className="max-w-5xl mx-auto mb-8 text-left">
            <div className="border-t border-white/10 pt-8 text-center mb-6">
              <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase font-bold bg-[#181B24] border border-amber-500/40 px-4 py-1.5 rounded-full shadow-md shadow-amber-500/10 inline-block">
                Here's What You Get
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-6 border-b border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-1"
              >
                <h4 className="text-xs font-medium text-white uppercase tracking-wider">30-MIN STRATEGY CALL</h4>
                <p className="text-xs text-stone-300 font-light leading-snug">Deep dive into your business goals and technical solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-1"
              >
                <h4 className="text-xs font-medium text-white uppercase tracking-wider">FREE 24 HOUR TURNAROUND BUSINESS AUDIT</h4>
                <p className="text-xs text-stone-300 font-light leading-snug">Solution to your problems, how much it'll cost, and how long it'll take all within 24 hours after the call.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="space-y-1"
              >
                <h4 className="text-xs font-medium text-white uppercase tracking-wider">CERTIFIED EXPERTISE</h4>
                <p className="text-xs text-stone-300 font-light leading-snug">Direct consultation with a Certified Operations & Automation Specialist</p>
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-3">
            <BookACallButton onClick={onOpenBooking} />
          </div>

          {/* Social Proof 4 Block (Hidden for now): 3-column scrolling marquee Wall of Love */}
          {/* <SocialProof4 /> */}

        </div>
      </AnimatedSection>
    </section>
  );
};




