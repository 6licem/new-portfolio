import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Layout,
  Workflow,
  GraduationCap,
  ArrowRightLeft,
  X
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { BookACallButton } from './BookACallButton';

interface ServicesProps {
  onSelectServiceForEstimate?: (serviceId: string) => void;
  onOpenBooking?: () => void;
}

const getServiceDetails = (service: ServiceItem) => {
  switch (service.id) {
    case 'monday-systems':
      return {
        clientName: 'CreativeVision',
        metrics: [
          { label: 'Hours Saved', value: '1,800+' },
          { label: 'Productivity Boost', value: '80%' },
          { label: 'Team Growth', value: 'Strategic' }
        ],
        paragraph1: 'Implemented automated systems and Work OS architecture that eliminated redundancies, saving over 1,800 hours annually.',
        paragraph2: 'An 80% boost in team productivity that freed the business to focus on strategic growth—powered by Monday.com automation.'
      };
    case 'n8n-automation':
      return {
        clientName: 'CreativeVision',
        metrics: [
          { label: 'Hours Saved', value: '1,800+' },
          { label: 'Productivity Boost', value: '80%' },
          { label: 'Team Growth', value: 'Strategic' }
        ],
        paragraph1: 'Built an autonomous AI Agent ecosystem handling communication, follow-ups, finance tracking, and payslip automation.',
        paragraph2: 'Integrated seamlessly with Google Drive, Gmail, Docs, and Discord Bots to eliminate manual administrative overhead.'
      };
    case 'ghl-funnels':
      return {
        clientName: 'JustSimplyMarketing',
        metrics: [
          { label: 'Funnels Built', value: '35+' },
          { label: 'Conversion Rate', value: 'High' },
          { label: 'Focus', value: 'Marketing' }
        ],
        paragraph1: 'Engineered over 35+ high-converting sales funnels for leading brands, personal influencers, and high-ticket offers.',
        paragraph2: 'Custom VSLs, application flows, 2-step checkout order bumps, and bespoke CSS styling optimized for conversions.'
      };
    case 'operations-management':
      return {
        clientName: 'JustSimplyMarketing, Cornerstone, & CreativeVision',
        metrics: [
          { label: 'Hours Saved', value: '1,800+' },
          { label: 'Systems Built', value: 'Multiple' },
          { label: 'Projects Completed', value: '100+' }
        ],
        paragraph1: 'Handled end-to-end operations and project management across multiple organizations, leading teams of 40+ members.',
        paragraph2: 'Streamlined workflows and quality control to save 1,800+ hours annually across 100+ completed client projects.'
      };
    case 'custom-websites':
      return {
        clientName: '',
        metrics: [],
        paragraph1: '',
        paragraph2: ''
      };
    case 'custom-systems':
      return {
        clientName: '',
        metrics: [],
        paragraph1: '',
        paragraph2: ''
      };
    default:
      return {
        clientName: service.caseStudy?.client || '',
        metrics: service.resultsMetrics?.map(m => ({ label: m.label, value: m.value })) || [],
        paragraph1: service.description,
        paragraph2: service.caseStudy?.outcome || ''
      };
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEstimate, onOpenBooking }) => {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTabId) || SERVICES[0];
  const details = getServiceDetails(activeService);

  const handleAction = (serviceId: string) => {
    if (onSelectServiceForEstimate) {
      onSelectServiceForEstimate(serviceId);
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-4 h-4" />;
      default:
        return <Layout className="w-4 h-4" />;
    }
  };

  const getShortTitle = (id: string, fullTitle: string) => {
    switch (id) {
      case 'monday-systems':
        return 'Monday.com';
      case 'n8n-automation':
        return 'n8n Automation';
      case 'custom-websites':
        return 'Custom Websites';
      case 'ghl-funnels':
        return 'GHL Funnels';
      case 'custom-systems':
        return 'Custom Systems';
      case 'operations-management':
        return 'Operations & PM';
      default:
        return fullTitle;
    }
  };

  return (
    <section id="services" className="pt-4 sm:pt-6 pb-16 sm:pb-24 bg-gradient-to-b from-[#0A0C12] via-[#0E121E] to-[#0A0C12] border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-80 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D94E10]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          
          {/* Top Divider */}
          <div className="w-full max-w-5xl mx-auto border-t border-white/10 mb-8 sm:mb-12" />

          {/* Header */}
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              Specialized <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D94E10] via-[#E85D26] to-[#F57C00]">Services</span>
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm font-medium mt-2 max-w-2xl mx-auto leading-relaxed">
              Select to view my services, results, and case studies
            </p>
          </div>

          {/* TAB SWITCHER GRID - Clean 6-item layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 max-w-5xl mx-auto w-full">
            {SERVICES.map((service) => {
              const isActive = service.id === activeTabId;
              const shortTitle = getShortTitle(service.id, service.title);
              return (
                <button
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  onClick={() => setActiveTabId(service.id)}
                  className={`flex items-center justify-center py-3 px-4 rounded-full text-xs font-medium transition-all duration-300 active:scale-95 cursor-pointer text-center ${
                    isActive
                      ? 'bg-[#D94E10] text-white shadow-lg shadow-[#D94E10]/30'
                      : 'bg-white/5 hover:bg-[#D94E10] text-stone-200 hover:text-white'
                  }`}
                >
                  <span className="text-xs tracking-tight font-medium whitespace-nowrap">{shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* TABBED SPOTLIGHT DISPLAY - Standardized exact height across all tabs to eliminate shifts */}
          <div className="relative min-h-[640px] sm:min-h-[500px] lg:min-h-[420px] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              {(() => {
                const clientName = details.clientName || activeService.caseStudy?.client || '';
                const metrics = details.metrics.length > 0 ? details.metrics : (activeService.resultsMetrics || []);
                const hasFeatured = Boolean(activeService.image || clientName || metrics.length > 0);

                return (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="w-full h-full min-h-[640px] sm:min-h-[500px] lg:min-h-[420px] flex flex-col items-center justify-center py-2"
                  >
                    {hasFeatured ? (
                      /* 2-COLUMN LAYOUT FOR SERVICES WITH FEATURED PROJECTS (Monday.com, n8n, GHL, Operations) */
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start w-full my-auto">
                        {/* LEFT COLUMN: Service Details & Deliverables */}
                        <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                          <div>
                            {/* Title & Description */}
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight mb-2">
                              {activeService.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                              {activeService.description}
                            </p>
                          </div>

                          {/* Deliverables Checklist */}
                          <div className="space-y-2 pt-3 border-t border-white/10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {activeService.deliverables.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs text-stone-200 leading-snug py-0.5"
                                >
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Visual Spotlight & Metrics */}
                        <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
                          {/* Hero Image */}
                          {activeService.image && (
                            <div className="relative h-36 sm:h-40 w-full rounded-2xl overflow-hidden bg-stone-900 group shrink-0">
                              <img
                                src={activeService.image}
                                alt={activeService.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C12]/90 via-transparent to-transparent" />
                            </div>
                          )}

                          {/* Client Name / Featured Company */}
                          {clientName && (
                            <div className="text-center text-xs px-1 min-h-[20px] flex items-center justify-center">
                              <span className="text-xs font-semibold text-white tracking-wide font-mono leading-tight">
                                Featured: <span className="text-[#E85D26]">{clientName}</span>
                              </span>
                            </div>
                          )}

                          {/* Divider */}
                          {clientName && <div className="border-t border-white/10" />}

                          {/* Metrics Row */}
                          {metrics.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 text-center items-center">
                              {metrics.map((m, idx) => (
                                <div key={idx} className="space-y-0.5">
                                  <div className="text-base sm:text-lg font-semibold text-white font-mono">{m.value}</div>
                                  <div className="text-[10px] font-medium text-stone-300 truncate">{m.label}</div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Case Study Paragraphs */}
                          {(details.paragraph1 || details.paragraph2) && (
                            <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-stone-300 font-light leading-relaxed">
                              {details.paragraph1 && <p>{details.paragraph1}</p>}
                              {details.paragraph2 && <p>{details.paragraph2}</p>}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* CENTERED LAYOUT FOR SERVICES WITHOUT FEATURED PROJECTS (Custom Websites, Custom Systems) */
                      <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center justify-center w-full my-auto">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight mb-3 text-center">
                            {activeService.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-2xl mx-auto text-center">
                            {activeService.description}
                          </p>
                        </div>

                        {/* Deliverables Checklist (Centered) */}
                        <div className="space-y-2.5 pt-4 border-t border-white/10 w-full max-w-2xl mx-auto">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                            {activeService.deliverables.map((item, idx) => (
                              <div
                                key={idx}
                                className="text-xs text-stone-200 leading-snug py-1 flex items-center justify-center"
                              >
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};



