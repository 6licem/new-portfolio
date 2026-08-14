import React, { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy load below-the-fold sections and modals for optimal initial bundle performance
const SocialProof7 = lazy(() => import('./components/SocialProof7').then(m => ({ default: m.SocialProof7 })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const CredentialsSection = lazy(() => import('./components/CredentialsSection').then(m => ({ default: m.CredentialsSection })));
const HowItWorks8 = lazy(() => import('./components/HowItWorks8').then(m => ({ default: m.HowItWorks8 })));
const CallToAction = lazy(() => import('./components/CallToAction').then(m => ({ default: m.CallToAction })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));

export default function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [credentialsTab, setCredentialsTab] = useState<'experience' | 'certifications' | 'disc' | 'references'>('experience');

  const handleOpenBooking = () => {
    setShowBookingModal(true);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'resume' || sectionId === 'experience') {
      const element = document.getElementById('credentials');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId === 'certifications') {
      const element = document.getElementById('resume-certifications') || document.getElementById('credentials');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId === 'disc') {
      const element = document.getElementById('resume-disc') || document.getElementById('credentials');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId === 'references') {
      const element = document.getElementById('resume-references') || document.getElementById('credentials');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId === 'credentials') {
      const element = document.getElementById('credentials');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId.startsWith('service:')) {
      const serviceId = sectionId.split(':')[1];
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        const tabBtn = document.getElementById(`service-tab-${serviceId}`);
        if (tabBtn) {
          tabBtn.click();
        }
      }, 350);
      return;
    }
    let element = document.getElementById(sectionId);
    if (!element && (sectionId === 'introduction' || sectionId === 'video')) {
      element = document.getElementById('introduction') || document.getElementById('social-proof-7');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0E12] text-[#F3F4F6] font-sans antialiased selection:bg-[#D94E10] selection:text-white n8n-grid-pattern relative overflow-x-hidden">
      
      {/* Background ambient gradient glow orbs (n8n style) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D94E10]/15 via-[#B83214]/8 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-48 w-[600px] h-[600px] bg-[#D94E10]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -left-48 w-[600px] h-[600px] bg-[#B83214]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Sticky Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onNavigateTo={scrollToSection}
        onOpenResume={() => scrollToSection('resume')}
        onOpenCertifications={() => scrollToSection('certifications')}
        onOpenDISC={() => scrollToSection('disc')}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section (Instant Above-The-Fold Load) */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateTo={scrollToSection}
        />

        {/* Deferred Below-The-Fold Sections */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
          {/* Social Proof 7 - Video Player & Tech Stack Marquee */}
          <SocialProof7 onOpenBooking={handleOpenBooking} />

          {/* Credentials - Experience, Certifications, DISC Profile & References */}
          <CredentialsSection
            onOpenBooking={handleOpenBooking}
            activeTab={credentialsTab}
            onTabChange={setCredentialsTab}
          />

          {/* Services - Core Capabilities */}
          <Services onOpenBooking={handleOpenBooking} />

          {/* How It Works 8 - Horizontal 3-step flow */}
          <HowItWorks8 />

          {/* Book a Call CTA Section */}
          <CallToAction
            onOpenBooking={handleOpenBooking}
          />
        </Suspense>
      </main>

      {/* Deferred Footer & Modals */}
      <Suspense fallback={null}>
        <Footer
          onNavigateTo={scrollToSection}
          onOpenBooking={handleOpenBooking}
          onOpenResume={() => scrollToSection('resume')}
          onOpenCertifications={() => scrollToSection('certifications')}
        />

        {/* Booking Modal Popup */}
        {showBookingModal && (
          <BookingModal
            isOpen={showBookingModal}
            onClose={() => setShowBookingModal(false)}
          />
        )}
      </Suspense>

    </div>
  );
}

