import React from 'react';
import { BookingForm } from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFilledPackage?: string;
  preFilledAddons?: string[];
  preFilledPrice?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preFilledPackage,
  preFilledPrice,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0E1017] border border-white/10 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-white rounded-2xl">
        
        {/* Minimal Premium Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/10 flex items-start justify-between bg-[#0E1017] shrink-0">
          <div>
            <div className="text-[10px] font-mono font-bold text-[#E85D26] uppercase tracking-[0.25em] mb-1.5">
              Direct Strategy Session
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Book a Strategy Call
            </h2>
            <p className="text-xs text-stone-400 font-light mt-1 leading-relaxed">
              1-on-1 funnel architecture and conversion engineering with Rance Coon.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[11px] font-mono font-semibold tracking-widest text-stone-400 hover:text-white uppercase px-3 py-1.5 border border-white/10 hover:border-white/30 rounded-sm transition-all cursor-pointer shrink-0 ml-4"
          >
            Close &#x2715;
          </button>
        </div>

        {/* Modal Body with BookingForm */}
        <div className="p-8 overflow-y-auto">
          <BookingForm
            preFilledPackage={preFilledPackage}
            preFilledPrice={preFilledPrice}
            className="border-0 p-0 shadow-none rounded-none bg-transparent"
          />
        </div>

      </div>
    </div>
  );
};

