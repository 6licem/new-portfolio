import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookACallButton } from './BookACallButton';
import {
  Layers,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Zap,
  SlidersHorizontal,
  CheckCircle2,
  HelpCircle,
  FileCode2,
  PhoneCall,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  ShieldCheck
} from 'lucide-react';

interface Navigation2Props {
  onOpenBooking: () => void;
  onNavigateTo: (sectionId: string) => void;
  onOpenResume?: () => void;
  onOpenCertifications?: () => void;
  onOpenDISC?: () => void;
}

export const Navigation2: React.FC<Navigation2Props> = ({
  onOpenBooking,
  onNavigateTo,
  onOpenResume,
  onOpenCertifications,
  onOpenDISC
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const serviceDropdownItems = [
    { id: 'monday-systems', label: 'Monday.com' },
    { id: 'n8n-automation', label: 'n8n Automation' },
    { id: 'ghl-funnels', label: 'GHL Funnels' },
    { id: 'operations-management', label: 'Operations & PM' },
    { id: 'custom-websites', label: 'Custom Websites' },
    { id: 'custom-systems', label: 'Custom Systems' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavClick = (id: string) => {
    onNavigateTo(id);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-stone-200/30 z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D94E10] via-[#C24108] to-[#B83214] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(217,78,16,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="main-navigation-2"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
      {/* Desktop Navigation Pill Bar */}
      <div className="hidden md:flex max-w-fit mx-auto items-center justify-center gap-4 relative bg-[#14171F]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 px-4 shadow-2xl shadow-black/50">
        
        {/* Centered Navigation Links inside Unified Container */}
        <nav
          id="nav2-centered-pill"
          className="hidden md:flex items-center gap-1 relative"
        >
          {/* Info Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('info')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'info' ? null : 'info')}
              className={`px-4 py-2 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeDropdown === 'info'
                  ? 'bg-white/10 text-white'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Info</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'info' ? 'rotate-180 text-[#E85D26]' : 'text-stone-400'}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'info' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-48 bg-[#14171F]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/80 z-50 space-y-1"
                >
                  <button
                    onClick={() => handleNavClick('introduction')}
                    className="w-full text-left px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium uppercase tracking-wider cursor-pointer flex items-center justify-between group"
                  >
                    <span>Introduction</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D26]" />
                  </button>

                  <button
                    onClick={() => handleNavClick('resume')}
                    className="w-full text-left px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium uppercase tracking-wider cursor-pointer flex items-center justify-between group"
                  >
                    <span>Resume</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D26]" />
                  </button>

                  <button
                    onClick={() => handleNavClick('certifications')}
                    className="w-full text-left px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium uppercase tracking-wider cursor-pointer flex items-center justify-between group"
                  >
                    <span>Certifications</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D26]" />
                  </button>

                  <button
                    onClick={() => handleNavClick('disc')}
                    className="w-full text-left px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium uppercase tracking-wider cursor-pointer flex items-center justify-between group"
                  >
                    <span>DISC Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D26]" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Item: My Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              className={`px-4 py-2 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeDropdown === 'services'
                  ? 'bg-white/10 text-white'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>My Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#E85D26]' : 'text-stone-400'}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-52 bg-[#14171F]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/80 z-50 space-y-1"
                >
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-between border-b border-white/10 pb-2 mb-1 group text-[#E85D26]"
                  >
                    <span>All Services</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D26]" />
                  </button>
                  {serviceDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(`service:${item.id}`)}
                      className="w-full text-left px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium uppercase tracking-wider cursor-pointer flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D26]" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Item: My Process */}
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="px-4 py-2 rounded-full text-[11px] font-medium uppercase tracking-wider text-stone-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <span>My Process</span>
          </button>

          {/* Item: Book A Call (Navbar CTA) */}
          <BookACallButton id="nav2-cta-booking" onClick={onOpenBooking} size="sm" />
        </nav>

      </div>

      {/* Mobile Navigation View: Just the 3-lines menu icon button */}
      <div className="flex md:hidden items-center justify-end max-w-7xl mx-auto">
        <button
          id="nav2-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 bg-[#14171F]/90 backdrop-blur-md rounded-full border border-white/10 text-white hover:text-[#E85D26] shadow-xl active:scale-95 transition-all cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 bg-[#14171F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl space-y-3 text-white"
          >
            {/* Info Expandable Section */}
            <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button
                onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                className="w-full text-left p-3 font-medium text-xs uppercase tracking-wider text-stone-200 flex items-center justify-between cursor-pointer"
              >
                <span className="font-bold text-white">Info</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${mobileInfoOpen ? 'rotate-180 text-[#E85D26]' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileInfoOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-3 pb-3 space-y-1 border-t border-white/5 pt-2"
                  >
                    <button
                      onClick={() => handleNavClick('introduction')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 font-medium text-xs uppercase tracking-wider text-stone-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>Introduction</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </button>

                    <button
                      onClick={() => handleNavClick('resume')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 font-medium text-xs uppercase tracking-wider text-stone-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>Resume</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </button>

                    <button
                      onClick={() => handleNavClick('certifications')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 font-medium text-xs uppercase tracking-wider text-stone-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>Certifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </button>

                    <button
                      onClick={() => handleNavClick('disc')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 font-medium text-xs uppercase tracking-wider text-stone-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>DISC Profile</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* My Services Expandable Section */}
            <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left p-3 font-medium text-xs uppercase tracking-wider text-stone-200 flex items-center justify-between cursor-pointer"
              >
                <span className="font-bold text-white">My Services</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#E85D26]' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-3 pb-3 space-y-1 border-t border-white/5 pt-2"
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 font-bold text-xs uppercase tracking-wider text-[#E85D26] flex items-center justify-between cursor-pointer"
                    >
                      <span>All Services</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E85D26]" />
                    </button>
                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(`service:${item.id}`)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 font-medium text-xs uppercase tracking-wider text-stone-300 flex items-center justify-between cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('how-it-works')}
              className="w-full text-left p-3 rounded-2xl hover:bg-white/5 font-medium text-xs uppercase tracking-wider text-stone-200 flex items-center justify-between cursor-pointer"
            >
              <span>My Process</span>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </button>

            <div className="pt-2">
              <BookACallButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                fullWidth
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};
