import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface SocialProof7Props {
  onOpenBooking?: () => void;
}

export const SocialProof7: React.FC<SocialProof7Props> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const hasBeenSeenRef = useRef(false);

  const toggleMute = (muteState: boolean) => {
    setIsMuted(muteState);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: muteState ? 'mute' : 'unMute',
          args: []
        }),
        '*'
      );
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      setIsFloating(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasBeenSeenRef.current = true;
          setIsFloating(false);
        } else {
          // If the section was seen or user scrolled away while playing, float in bottom right
          if (hasBeenSeenRef.current) {
            setIsFloating(true);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isPlaying]);

  const scrollToSection = () => {
    setIsFloating(false);
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const videoContent = isPlaying ? (
    <div className="relative w-full h-full group/player">
      
      {/* Mini-Player Top Controls Bar (shown when floating) */}
      {isFloating ? (
        <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/90 via-black/50 to-transparent p-2.5 flex items-center justify-end text-white">
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={scrollToSection}
              title="Maximize / Scroll to section"
              className="p-1 rounded-md bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsPlaying(false)}
              title="Close video"
              className="p-1 rounded-md bg-white/20 hover:bg-red-600 text-white transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Inline Video Top-Right Close Button */
        <button
          onClick={() => setIsPlaying(false)}
          title="Close video"
          className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-all cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
          <span>Close Video</span>
        </button>
      )}

      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/LZJfX7Iv7Oc?autoplay=1&mute=1&enablejsapi=1&rel=0&cc_load_policy=0&controls=0"
        title="Funnel Architecture Overview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Sound Control Overlay Button */}
      {isMuted ? (
        <button
          onClick={() => toggleMute(false)}
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-30 px-3.5 py-2 rounded-full bg-[#D94E10] hover:bg-[#E85D26] text-white text-xs font-medium flex items-center gap-2 shadow-xl border border-white/20 backdrop-blur-md transition-all transform hover:scale-105 cursor-pointer"
        >
          <VolumeX className="w-4 h-4 shrink-0" />
          <span>Click to turn on sound</span>
        </button>
      ) : (
        <button
          onClick={() => toggleMute(true)}
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-30 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-all cursor-pointer opacity-80 hover:opacity-100"
        >
          <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Sound On</span>
        </button>
      )}
    </div>
  ) : (
    <div 
      onClick={() => setIsPlaying(true)}
      className="absolute inset-0 cursor-pointer group/poster flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl"
    >
      {/* YouTube Video Thumbnail */}
      <img
        src="https://img.youtube.com/vi/LZJfX7Iv7Oc/maxresdefault.jpg"
        alt="Rance Coon Video Breakdown"
        className="w-full h-full object-cover object-center group-hover/poster:scale-105 transition-transform duration-700 filter brightness-75"
        loading="lazy"
      />
      
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      {/* Centered Play Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D94E10] group-hover/poster:bg-[#E85D26] text-white flex items-center justify-center transition-all duration-300 shadow-2xl shadow-[#D94E10]/50"
      >
        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
      </motion.div>

      {/* Bottom Label */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center justify-between pointer-events-none z-10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E85D26] font-bold">Systems & Automation Walkthrough</span>
          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">Watch: 1,800+ Hours Saved & Workflow Architecture</h4>
        </div>
        <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-md text-white border border-white/10">
          Click to Play
        </span>
      </div>
    </div>
  );

  const renderVideoPlayer = () => {
    if (isFloating && isPlaying) {
      return createPortal(
        <AnimatePresence>
          <motion.div
            key="floating-pip-player"
            initial={{ opacity: 0, scale: 0.7, y: 100, x: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 100, x: 60 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-[280px] sm:w-96 aspect-video bg-black rounded-2xl shadow-2xl border-2 border-[#D94E10]/80 overflow-hidden shadow-black/90"
          >
            {videoContent}
          </motion.div>
        </AnimatePresence>,
        document.body
      );
    }

    return (
      <motion.div
        key="inline-vsl-player"
        initial={{ opacity: 0.9, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative w-full h-full bg-[#0D0E12] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group flex items-center justify-center"
      >
        {videoContent}
      </motion.div>
    );
  };

  return (
    <section id="introduction" className="pt-12 sm:pt-16 pb-8 sm:pb-12 bg-gradient-to-b from-[#0A0C12] via-[#0E111B] to-[#0A0C12] border-t border-white/[0.08] relative overflow-hidden">
      {/* Top Coral Laser Beam Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D94E10]/60 to-transparent" />
      
      {/* Dot Grid Background Pattern behind Video Section */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      {/* Ambient Coral Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D94E10]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Video Section Content */}
        <AnimatedSection>
          {/* Target Container for IntersectionObserver */}
          <div ref={videoSectionRef} className="relative max-w-5xl mx-auto w-full aspect-video">
            
            {/* Placeholder element when floating to maintain layout height */}
            {isFloating && (
              <div className="w-full h-full bg-[#0D0E12] border border-white/10 rounded-2xl sm:rounded-3xl flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D94E10]/20 border border-[#D94E10]/40 text-[#E85D26] text-xs font-semibold">
                    <Volume2 className="w-4 h-4 animate-pulse text-[#D94E10]" />
                    <span>Video playing in Picture-in-Picture mode</span>
                  </div>
                  <p className="text-xs text-stone-400 font-light">
                    Playing in the bottom-right corner while you scroll.
                  </p>
                  <button
                    onClick={scrollToSection}
                    className="mt-1 text-xs font-bold text-white hover:underline cursor-pointer"
                  >
                    Scroll back to video
                  </button>
                </div>
              </div>
            )}

            {/* The Video Container (either inline or floating in bottom-right via Portal) */}
            {renderVideoPlayer()}

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};


