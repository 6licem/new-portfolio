import React from 'react';

interface FooterProps {
  onNavigateTo?: (sectionId: string) => void;
  onOpenBooking?: () => void;
  onOpenResume?: () => void;
  onOpenCertifications?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0B0D12] border-t border-white/10 text-stone-400 text-xs py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-400 text-xs font-light">
        <p>© 2026 Rance Coon. All rights reserved.</p>
      </div>
    </footer>
  );
};




