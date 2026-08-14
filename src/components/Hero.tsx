import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ranceHeadshot from '../assets/images/WhatsApp Image 2026-07-27 at 11.18.28 PM.jpeg';
import resumePdf from '../assets/images/rance_coon_resume.pdf';
import { BookACallButton } from './BookACallButton';
import { resumeData, certificationsData } from '../data/credentialsData';
import {
  ArrowRight,
  FileText,
  Award,
  X,
  CheckCircle2,
  Download,
  Briefcase,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  UserCheck,
  Globe,
  Share2,
  Activity,
  Eye
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigateTo
}) => {


  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Ray_Francis_Coon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0A0C12] via-[#1A1310] to-[#0A0C12] border-b border-white/[0.08]">
      {/* Top accent gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D94E10]/70 to-transparent pointer-events-none z-10" />

      {/* Hero Spotlight Gradient Glow - Matching CTA section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D94E10]/20 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Clean vertical architectural border */}
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-[#121520]/40 -z-10 border-l border-white/[0.07] hidden lg:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Concise Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[#D94E10]"></div>
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#E85D26]">
                Certified Operations & Automation Specialist
              </span>
              <div className="h-[1px] w-6 bg-[#D94E10]"></div>
            </div>

            {/* Main Headline - High Contrast Dark Mode */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Build. <br />
              Automate. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D94E10] via-[#E85D26] to-[#F57C00]">Then Scale.</span>
            </h1>

            {/* Concise Body Text */}
            <p className="text-sm sm:text-base text-stone-300 max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              Certified Operations & Automation Specialist with 4 years of experience scaling 6 and 7-figure agencies. I specialize in identifying bottlenecks before they break a business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
              <BookACallButton id="hero-primary-cta" onClick={onOpenBooking} />
            </div>

          </motion.div>

          {/* Right Column: Rance Coon Headshot Visual (Cardless) */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            
            <div className="relative w-full max-w-md space-y-4">
              {/* Ambient Coral Backdrop Glow */}
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#D94E10]/25 rounded-full blur-3xl pointer-events-none" />

              {/* Headshot Image (Cardless) */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ranceHeadshot}
                  alt="Rance Coon - Operations & Automation Specialist"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-extrabold uppercase tracking-wider text-white">Rance Coon</div>
                    <div className="text-xs text-[#E85D26] font-semibold uppercase tracking-wider">Operations & Automation Specialist</div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D94E10] text-white">
                    Certified
                  </span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Ecosystem & Tech Stack Marquee (Bottom of Hero) */}
        <div className="mt-12 sm:mt-16 relative overflow-hidden">
          <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            
            {/* Row 1: Scrolling Left - Primary Tech Stack & Platforms */}
            <div className="flex overflow-hidden py-2 my-1 select-none">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 80 }}
                className="flex shrink-0 items-center gap-6 pr-6 py-1"
              >
                {[
                  { name: 'Monday.com', cat: 'Project Management' },
                  { name: 'n8n', cat: 'System Automation' },
                  { name: 'Gemini', cat: 'AI Models' },
                  { name: 'ClickFunnels', cat: 'Sales Funnels' },
                  { name: 'GoHighLevel', cat: 'CRM & Automations' },
                  { name: 'Google Antigravity', cat: 'AI Coding Agents' },
                  { name: 'Google AI Studio', cat: 'AI Prototyping' },
                  { name: 'Claude Code', cat: 'AI Engineering' },
                  { name: 'Bolt.new', cat: 'Rapid Web Apps' },
                  { name: 'Funnelytics', cat: 'Funnel Mapping' },
                  { name: 'Notion', cat: 'System Creation' },
                  { name: 'Slack', cat: 'Team Communications' },
                  { name: 'Discord', cat: 'Community & Ops' },
                  { name: 'Stripe Integration', cat: 'Payments' },
                ].concat([
                  { name: 'Monday.com', cat: 'Project Management' },
                  { name: 'n8n', cat: 'System Automation' },
                  { name: 'Gemini', cat: 'AI Models' },
                  { name: 'ClickFunnels', cat: 'Sales Funnels' },
                  { name: 'GoHighLevel', cat: 'CRM & Automations' },
                  { name: 'Google Antigravity', cat: 'AI Coding Agents' },
                  { name: 'Google AI Studio', cat: 'AI Prototyping' },
                  { name: 'Claude Code', cat: 'AI Engineering' },
                  { name: 'Bolt.new', cat: 'Rapid Web Apps' },
                  { name: 'Funnelytics', cat: 'Funnel Mapping' },
                  { name: 'Notion', cat: 'System Creation' },
                  { name: 'Slack', cat: 'Team Communications' },
                  { name: 'Discord', cat: 'Community & Ops' },
                  { name: 'Stripe Integration', cat: 'Payments' },
                ]).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="text-xs font-medium tracking-tight text-white">{item.name}</span>
                    <span className="text-[10px] font-mono text-[#D94E10]">
                      ({item.cat})
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Scrolling Right - Workflows, Leadership & Operations */}
            <div className="flex overflow-hidden py-2 my-1 select-none">
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 60 }}
                className="flex shrink-0 items-center gap-6 pr-6 py-1"
              >
                {[
                  'Project Management',
                  'Operations Management',
                  'System Automation',
                  'System Creation',
                  'Team Development',
                  'Leadership',
                ].concat(
                  [
                    'Project Management',
                    'Operations Management',
                    'System Automation',
                    'System Creation',
                    'Team Development',
                    'Leadership',
                  ],
                  [
                    'Project Management',
                    'Operations Management',
                    'System Automation',
                    'System Creation',
                    'Team Development',
                    'Leadership',
                  ],
                  [
                    'Project Management',
                    'Operations Management',
                    'System Automation',
                    'System Creation',
                    'Team Development',
                    'Leadership',
                  ]
                ).map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-stone-200 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="text-xs font-medium tracking-tight text-white">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


