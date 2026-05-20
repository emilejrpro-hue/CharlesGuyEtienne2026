import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 1;
    
    const attemptPlay = () => {
      audio.play()
        .then(() => {
          setIsReady(true);
        })
        .catch(() => {
          console.log("Autoplay blocked, waiting for interaction");
        });
    };

    // Try immediately
    attemptPlay();

    // Also try when enough data is cached
    audio.addEventListener('canplaythrough', attemptPlay);
    
    return () => {
      audio.removeEventListener('canplaythrough', attemptPlay);
    };
  }, []);

  // Sync mute state with player
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;
    if (!isMuted) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isMuted]);

  // Global listener to kickstart audio on ANY user interaction
  useEffect(() => {
    const handleGesture = () => {
      const audio = audioRef.current;
      if (audio && !isMuted && audio.paused) {
        audio.play()
          .then(() => {
            setIsReady(true);
          })
          .catch(() => {});
      }
    };

    // More aggressive event list
    const events = ['click', 'touchstart', 'mousedown', 'keydown', 'wheel'];
    events.forEach(event => window.addEventListener(event, handleGesture, { capture: true, passive: true }));
    
    return () => {
      events.forEach(event => window.removeEventListener(event, handleGesture, { capture: true }));
    };
  }, [isMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(prev => !prev);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/videoplayback.m4a"
        loop
        preload="auto"
        className="hidden"
      />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/40 bg-black text-gold shadow-2xl transition-all hover:border-gold md:bottom-10 md:right-10"
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
            >
              <VolumeX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
            >
              <Volume2 size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isMuted && isReady && (
          <div className="absolute inset-0 rounded-full border-2 border-gold/40 animate-ping opacity-30" />
        )}
      </motion.button>
    </>
  );
}
