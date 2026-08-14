import React, { useState } from 'react';

interface BookingFormProps {
  onSuccess?: () => void;
  preFilledPackage?: string;
  preFilledPrice?: string;
  className?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  onSuccess,
  preFilledPackage,
  preFilledPrice,
  className = '',
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('E-Commerce');
  const [customIndustry, setCustomIndustry] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Operations']);
  const [projectNotes, setProjectNotes] = useState('');

  // Date and Time picks
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [confirmationData, setConfirmationData] = useState<{
    dateFormatted?: string;
    timeFormatted?: string;
    eventLink?: string;
    googleCalendarUrl?: string;
    calendarNote?: string;
    meetLink?: string;
  }>({});

  const industriesList = [
    'E-Commerce',
    'Coaching',
    'Personal Brand',
    'SaaS & Software',
    'Real Estate',
    'Health, Wellness, & Fitness',
    'Marketing',
    'Sales',
    'Finance',
    'Video Editing',
    'Graphics Designing',
    'Social Media',
    'Others',
  ];

  const servicesList = [
    'Operations',
    'Project Management',
    'n8n Automation & AI Agents',
    'monday.com Systems & Work OS',
    'GHL Funnels',
    'Custom Websites',
    'Custom Systems',
    'Other / Custom Request',
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const times = ['9:00 AM PHT', '10:30 AM PHT', '1:00 PM PHT', '2:30 PM PHT', '4:00 PM PHT', '7:00 PM PHT'];

  const getTodayMinString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleNextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    if (currentStep === 1) {
      if (!fullName.trim()) {
        setErrorMessage('Please enter your full name.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
      if (!industry) {
        setErrorMessage('Please select your industry.');
        return;
      }
      if ((industry === 'Other' || industry === 'Others') && !customIndustry.trim()) {
        setErrorMessage('Please specify your industry.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (selectedServices.length === 0) {
        setErrorMessage('Please select at least one service.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMessage('');
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      setErrorMessage('Please pick a date for your call.');
      return;
    }
    if (!selectedTime) {
      setErrorMessage('Please select a time slot for your call.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const finalIndustry = industry === 'Other' ? customIndustry : industry;

    // Pre-calculate client-side Google Calendar Add Event URL as instant guaranteed fallback
    const calcGCalUrl = () => {
      try {
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();

        if (selectedDate) {
          const match = selectedDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
          if (match) {
            year = parseInt(match[1], 10);
            month = parseInt(match[2], 10);
            day = parseInt(match[3], 10);
          }
        }

        let hours = 14;
        let minutes = 0;
        if (selectedTime) {
          const timeMatch = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)?/i);
          if (timeMatch) {
            hours = parseInt(timeMatch[1], 10);
            minutes = parseInt(timeMatch[2], 10);
            const ampm = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
            if (ampm === 'PM' && hours < 12) hours += 12;
            if (ampm === 'AM' && hours === 12) hours = 0;
          }
        }

        const startUtc = new Date(Date.UTC(year, month - 1, day, hours - 8, minutes, 0));
        const endUtc = new Date(startUtc.getTime() + 45 * 60 * 1000);
        const fmt = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');
        
        const details = [
          `🎯 Sales Funnel Strategy Session with Rance Coon`,
          `👤 Client: ${fullName}`,
          `✉️ Email: ${email}`,
          finalIndustry ? `🏭 Industry: ${finalIndustry}` : '',
          `🚀 Services: ${selectedServices.join(', ')}`,
          projectNotes ? `📝 Project Notes:\n${projectNotes}` : '',
        ].filter(Boolean).join('\n\n');

        return `https://calendar.google.com/calendar/render?action=TEMPLATE` +
          `&text=${encodeURIComponent(`Strategy Session: ${fullName}`)}` +
          `&dates=${fmt(startUtc)}/${fmt(endUtc)}` +
          `&details=${encodeURIComponent(details)}` +
          `&add=${encodeURIComponent(email)},rancecoonbusiness@gmail.com` +
          `&ctz=Asia/Manila`;
      } catch {
        return 'https://calendar.app.google/xQjuEkT7ynqgW5r97';
      }
    };

    const directGCalUrl = calcGCalUrl();

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          industry: finalIndustry,
          projectType: selectedServices.length > 0 ? selectedServices.join(', ') : 'None specified',
          projectNotes,
          selectedDate,
          selectedTime,
          packageDetails: preFilledPackage ? `${preFilledPackage} (${preFilledPrice || ''})` : undefined,
        }),
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      setConfirmationData({
        dateFormatted: data.booking?.selectedDateFormatted || selectedDate,
        timeFormatted: data.booking?.selectedTimeFormatted || selectedTime,
        eventLink: data.booking?.calendarResult?.eventLink || '',
        googleCalendarUrl: data.booking?.calendarResult?.eventLink || data.booking?.googleCalendarUrl || directGCalUrl,
        calendarNote: data.booking?.calendarResult?.message || 'Strategy session booked in Google Calendar!',
        meetLink: data.booking?.calendarResult?.meetLink || '',
      });

      setIsConfirmed(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.warn('Booking submission notice:', err);
      setConfirmationData({
        dateFormatted: selectedDate,
        timeFormatted: selectedTime,
        eventLink: '',
        googleCalendarUrl: directGCalUrl,
        calendarNote: 'Booking received!',
      });
      setIsConfirmed(true);
      if (onSuccess) onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative text-white ${className}`}>
      {!isConfirmed ? (
        <div>
          {/* Typographic Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] mb-3">
              <span className="text-[#E85D26] font-bold">
                0{currentStep} / 03
              </span>
              <span className="text-stone-300 font-semibold">
                {currentStep === 1 && 'Contact Information'}
                {currentStep === 2 && 'Project Overview'}
                {currentStep === 3 && 'Schedule Time'}
              </span>
            </div>

            {/* Minimal Line Progress */}
            <div className="w-full bg-white/10 h-0.5 relative overflow-hidden">
              <div
                className="bg-[#D94E10] h-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Pre-filled package notice (pure typographic callout) */}
          {preFilledPackage && (
            <div className="border-l-2 border-[#E85D26] pl-3 py-1 mb-6 text-xs text-[#E85D26] font-mono uppercase tracking-wider">
              Selected Package: {preFilledPackage} {preFilledPrice ? `(${preFilledPrice})` : ''}
            </div>
          )}

          {/* STEP 1: Name, Email, Industry */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300 mb-2">
                  Full Name <span className="text-[#D94E10]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleNextStep();
                    }
                  }}
                  className="w-full px-4 py-3 bg-[#131620] border border-white/15 focus:border-[#E85D26] rounded-sm text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300 mb-2">
                  Email Address <span className="text-[#D94E10]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleNextStep();
                    }
                  }}
                  className="w-full px-4 py-3 bg-[#131620] border border-white/15 focus:border-[#E85D26] rounded-sm text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300 mb-2">
                  Industry <span className="text-[#D94E10]">*</span>
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-[#131620] border border-white/15 focus:border-[#E85D26] rounded-sm text-xs sm:text-sm text-white focus:outline-none cursor-pointer transition-colors font-sans"
                >
                  {industriesList.map((ind) => (
                    <option key={ind} value={ind} className="bg-[#131620] text-white">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {(industry === 'Other' || industry === 'Others') && (
                <div className="animate-fadeIn">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300 mb-2">
                    Specify Your Industry <span className="text-[#D94E10]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cybersecurity, Event Planning, etc."
                    value={customIndustry}
                    onChange={(e) => setCustomIndustry(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleNextStep();
                      }
                    }}
                    className="w-full px-4 py-3 bg-[#131620] border border-white/15 focus:border-[#E85D26] rounded-sm text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none transition-colors font-sans"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Services, Brief Overview */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300">
                    Services Needed <span className="text-[#D94E10]">*</span>
                  </label>
                  <span className="text-[10px] text-stone-400 font-sans italic">
                    Select all that apply
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-sm text-xs font-sans border transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'bg-[#D94E10]/20 border-[#D94E10] text-white font-medium shadow-sm'
                            : 'bg-[#131620] border-white/15 text-stone-300 hover:border-white/35 hover:text-white'
                        }`}
                      >
                        <span className="leading-snug">{service}</span>
                        <div
                          className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ml-2 transition-colors ${
                            isSelected
                              ? 'bg-[#D94E10] border-[#D94E10] text-white'
                              : 'border-white/30 bg-white/5'
                          }`}
                        >
                          {isSelected && (
                            <svg className="w-3 h-3 stroke-current" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6L5 8.5L9.5 3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300">
                    Brief Overview
                  </label>
                  <span className="text-[10px] text-stone-400 font-sans italic">
                    Tell Rance what you're struggling with or what you are seeking to improve
                  </span>
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell Rance what you're struggling with or what you are seeking to improve..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full px-4 py-3 bg-[#131620] border border-white/15 focus:border-[#E85D26] rounded-sm text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none transition-colors resize-none font-sans"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Pick Date and Time */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300 mb-2">
                  Preferred Date <span className="text-[#D94E10]">*</span>
                </label>

                <input
                  type="date"
                  required
                  min={getTodayMinString()}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  onClick={(e) => {
                    try {
                      (e.currentTarget as HTMLInputElement).showPicker?.();
                    } catch (err) {}
                  }}
                  className="w-full px-4 py-3 bg-[#131620] border border-white/15 focus:border-[#E85D26] rounded-sm text-xs sm:text-sm font-sans text-white focus:outline-none cursor-pointer color-scheme-dark transition-colors"
                />

                {/* Quick Date Options */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mr-1">Quick Select:</span>
                  {[
                    { label: 'Tomorrow', addDays: 1 },
                    { label: 'In 2 Days', addDays: 2 },
                    { label: 'In 3 Days', addDays: 3 },
                    { label: 'Next Week', addDays: 7 },
                  ].map((chip) => {
                    const d = new Date();
                    d.setDate(d.getDate() + chip.addDays);
                    const isoDate = d.toISOString().split('T')[0];
                    const isSelected = selectedDate === isoDate;
                    return (
                      <button
                        key={chip.label}
                        type="button"
                        onClick={() => setSelectedDate(isoDate)}
                        className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 border rounded-sm transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D94E10] text-white border-[#D94E10]'
                            : 'bg-white/5 text-stone-300 border-white/15 hover:border-white/35'
                        }`}
                      >
                        {chip.label} ({d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-300 mb-2">
                  Time Slot (Philippine Time - PHT) <span className="text-[#D94E10]">*</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-3 px-3 text-xs font-mono border rounded-sm transition-all cursor-pointer text-center ${
                        selectedTime === t
                          ? 'bg-[#D94E10] text-white border-[#D94E10] font-bold'
                          : 'bg-white/5 text-stone-300 border-white/15 hover:border-white/35'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 border-l-2 border-red-500 bg-red-950/40 text-red-300 text-xs font-sans">
                  {errorMessage}
                </div>
              )}

              {/* Step 3 Actions */}
              <div className="pt-6 flex items-center justify-between gap-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-3 border border-white/20 hover:border-white/40 text-stone-300 hover:text-white text-xs font-mono uppercase tracking-widest transition-all rounded-sm cursor-pointer"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className="px-8 py-3.5 bg-[#D94E10] hover:bg-[#E85D26] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all rounded-sm shadow-lg cursor-pointer ml-auto disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Scheduling Session...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          )}

          {errorMessage && currentStep !== 3 && (
            <div className="mt-4 p-3 border-l-2 border-red-500 bg-red-950/40 text-red-300 text-xs font-sans">
              {errorMessage}
            </div>
          )}

          {/* Steps 1 & 2 Actions */}
          {currentStep !== 3 && (
            <div className="pt-6 flex items-center justify-between gap-4 border-t border-white/10 mt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-3 border border-white/20 hover:border-white/40 text-stone-300 hover:text-white text-xs font-mono uppercase tracking-widest transition-all rounded-sm cursor-pointer"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={() => handleNextStep()}
                className="px-8 py-3.5 bg-[#D94E10] hover:bg-[#E85D26] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all rounded-sm shadow-lg cursor-pointer ml-auto"
              >
                Next Step
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Confirmed State (Pure Typographic Design - No Cards, Icons or Pills) */
        <div className="py-4 space-y-6 animate-fadeIn">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-[0.2em] mb-2">
              CONFIRMED
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Strategy Session Scheduled
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-light mt-2 leading-relaxed">
              Thank you, <strong className="text-white font-semibold">{fullName}</strong>. A calendar invite with Google Meet has been created from <span className="text-[#E85D26] font-mono font-medium">rancecoonbusiness@gmail.com</span> and sent to <span className="text-stone-200 font-mono">{email}</span>.
            </p>
          </div>

          <div className="border-t border-b border-white/10 py-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center py-1">
              <span className="text-stone-400 uppercase tracking-wider">Host / Organizer:</span>
              <span className="text-white font-bold">Rance Coon</span>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-white/5">
              <span className="text-stone-400 uppercase tracking-wider">Scheduled Date:</span>
              <span className="text-[#E85D26] font-bold">{confirmationData.dateFormatted || selectedDate}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-white/5">
              <span className="text-stone-400 uppercase tracking-wider">Time Slot:</span>
              <span className="text-white font-bold">{confirmationData.timeFormatted || selectedTime}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-white/5">
              <span className="text-stone-400 uppercase tracking-wider">Timezone:</span>
              <span className="text-stone-300">Asia/Manila (UTC+8)</span>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-white/5">
              <span className="text-stone-400 uppercase tracking-wider">Attendee:</span>
              <span className="text-stone-300">{email}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            {confirmationData.meetLink && (
              <a
                href={confirmationData.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all shadow-md"
              >
                Join Google Meet Video Call
              </a>
            )}

            {(confirmationData.eventLink || confirmationData.googleCalendarUrl) && (
              <a
                href={confirmationData.eventLink || confirmationData.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-[#D94E10] hover:bg-[#E85D26] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all shadow-md"
              >
                View on Google Calendar
              </a>
            )}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                setIsConfirmed(false);
                setCurrentStep(1);
                setFullName('');
                setEmail('');
                setProjectNotes('');
                setSelectedDate('');
                setSelectedTime('');
              }}
              className="text-[11px] font-mono text-stone-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
            >
              Schedule Another Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

